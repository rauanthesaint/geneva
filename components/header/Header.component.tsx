'use client';
import styles from '@/components/header/header.module.scss';
import Container from '../container/Container.component';
import { MenuLinks } from '@/data/menu';
import { Menu, Xmark } from 'iconoir-react';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    const toggleMenu = () => {
        setActive(!active);
    };
    return (
        <header className={styles.Header}>
            <Container className={styles.Content}>
                <button onClick={toggleMenu} className={styles.ToggleButton}>
                    <Menu />
                </button>
                <div className={clsx(styles.Drawer, active && styles.Active)}>
                    <button
                        onClick={toggleMenu}
                        className={clsx(
                            styles.ToggleButton,
                            styles.CloseButton
                        )}
                    >
                        <Xmark />
                    </button>
                    <ul>
                        {MenuLinks.map((elem, index) => {
                            return (
                                <li onClick={toggleMenu} key={index}>
                                    <Link href={elem.link}>{elem.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </header>
    );
}
