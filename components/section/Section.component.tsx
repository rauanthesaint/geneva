import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@/components/section/section.module.scss';

export default function Section({
    className,
    children,
    id,
}: {
    className?: string;
    id?: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className={clsx(className, styles.Section)}>
            {children}
        </section>
    );
}
