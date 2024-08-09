import { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, Button } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import styles from './ContactMe.module.css';


export function ContactMe() {
    const [form] = Form.useForm();

    const { TextArea } = Input;

    const sendEmail = (_e: FormEvent) => {
        //prevent default is not required in antd forms
        const data = form.getFieldsValue();

        emailjs
            .send(`${import.meta.env.VITE_SERVICE_I}`, `${import.meta.env.VITE_TEMPLATE_ID}`, data, `${import.meta.env.VITE_PUBLIC_ID}`)
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
        <section className={styles.container} id="contactme">
            <div>
                <h1 style={{ color: `var(--keppel)` }}>Leave me a message <BulbOutlined /></h1>
                <Form
                    name="contact-me"
                    layout="vertical"
                    form={form}
                    onFinish={sendEmail}>
                    <Form.Item
                        className={styles.formItem}
                        label="Name"
                        name="user_name"
                        rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.formItem}
                        label="Company"
                        name="user_company"
                        rules={[{ required: true, message: 'Please input your company name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.formItem}
                        label="Email"
                        name="user_email"
                        rules={[
                            { type: "email", message: "The input is not a valid E-mail" },
                            { required: true, message: 'Please input your email!' },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.formItem}
                        label="Phone"
                        name="user_phone"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.formItem}
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </div>
            <div className={styles.secondColumn}>
                <img src="/scdev.png" alt="Sergio Camilo Garzón" />
            </div>
        </section>
    );
};