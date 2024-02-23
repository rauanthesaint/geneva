import styles from '@/components/footer/footer.module.scss';
import Container from '../container/Container.component';
import Image from 'next/image';
import Logo from '@/public/static/img/logo.svg';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <Container className={styles.Container}>
                <Image alt="Logo" src={Logo} />
            </Container>
        </footer>
    );
}
