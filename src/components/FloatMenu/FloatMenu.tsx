import { CommentOutlined, PlusOutlined, BulbOutlined, UserOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

export function FloatMenu() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = window.innerHeight * 0.15 ; // Adjust this value on header's actual height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{ color: 'var(--onyx)' }}
                icon={<PlusOutlined />}
            >
                <FloatButton icon={<UserOutlined />} tooltip="About me" onClick={() => scrollToSection('aboutme')} />
                <FloatButton icon={<BulbOutlined />} tooltip="My Projects" onClick={() => scrollToSection('myprojects')} />
                <FloatButton icon={<CommentOutlined />} tooltip="Contact me" onClick={() => scrollToSection('contactme')} />
            </FloatButton.Group>
        </>
    );
}