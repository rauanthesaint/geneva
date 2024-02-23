import { ReactNode } from 'react';
import styles from '@/components/container/container.module.scss';
import clsx from 'clsx';

export default function Container({
    children,
    className,
}: Readonly<{
    children: ReactNode;
    className?: string;
}>) {
    return <div className={clsx(className, styles.Container)}>{children}</div>;
}
