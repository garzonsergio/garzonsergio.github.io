import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, Button, message } from 'antd';

export function ContactMe() {
    // const form = useRef<HTMLFormElement>(null);
    const [form] = Form.useForm();

    const formRef = useRef<HTMLFormElement>(null);
    const { TextArea } = Input;

    const temporarySubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(form.getFieldsValue());
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();


        const data = {
            ...form.getFieldsValue()
            // , user_id: `${import.meta.env.VITE_PUBLIC_ID}` 
        }
        console.log(data);
        emailjs
            .send(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, data, `${import.meta.env.VITE_PUBLIC_ID}`)
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <section style={{ height: "85vh", border: "1px solid red" }} id="contactme">
            <h1 style={{ color: "white" }}>Contact me</h1>
            <Form
                name="contact-me"
                layout="vertical"
                form={form}>
                <Form.Item
                    label="Name"
                    name="user_name"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Company"
                    name="user_company"
                    rules={[{ required: true, message: 'Please input your company name!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="user_email"
                    rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}>
                    <TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={sendEmail}>
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </section>
    );
};