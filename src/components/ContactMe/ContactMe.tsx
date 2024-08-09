import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, Button } from 'antd';

export function ContactMe() {
    // const form = useRef<HTMLFormElement>(null);
    const [form] = Form.useForm();

    const temporarySubmit = (e:FormEvent)=>{
        e.preventDefault();
        console.log(form.getFieldsValue());
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_ID}`)
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <section style={{ height: "85vh", border: "1px solid red" }} id="contactme">
            <h1 style={{ color: "white" }}>Contact me</h1>
            <Form
                name="contact-me"
                layout="vertical"
                onSubmitCapture={sendEmail}>

            </Form>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Company</label>
                <input type="text" name="user_company" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
        </section>
    );
};