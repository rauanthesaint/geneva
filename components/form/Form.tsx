'use client';
import styles from '@/components/form/form.module.scss';
import Image from 'next/image';
import Hotel from '@/public/static/img/RitzCarlton.png';
import { FC, InputHTMLAttributes, useState } from 'react';
export default function Form({ close }: { close: (val: boolean) => void }) {
    const [closed, isClosed] = useState<boolean>(true);
    const handler = () => {
        isClosed(!closed);
        close(closed);
    };
    return (
        <>
            <div className={styles.Blur} onClick={handler} />
            <section className={styles.Container}>
                <Image alt="Logo" src={Hotel} />
                <section>
                    <p>
                        To: The Ritz Carlton, Almaty
                        <br />
                        Attn: Reservations Department
                    </p>
                    <Input
                        name="from"
                        label="From:"
                        hint="Name of&nbsp;booker, tel. number, e-mail"
                    />
                    <Input name="date" label="Date:" type="date" />
                </section>

                <section>
                    <h1>
                        RESERVATION REQUEST
                        <br />
                        Wedding guests on&nbsp;June 06-10, 2024, Almaty,
                        Kazakhstan
                    </h1>
                    <p>
                        Please make a reservation at The Ritz-Carlton, Almaty
                        for the following individuals:
                    </p>
                    <Input name="person" hint="Last Name, First Name" />

                    <h2>Number and category of reserved rooms</h2>
                    <p>Please mark the desired room below:</p>
                </section>
            </section>
        </>
    );
}

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
}

const Input: FC<props> = ({ name, label, hint, type }) => {
    return (
        <div className={styles.InputContainer}>
            <label htmlFor={name}>
                {label}
                <input type={type} name={name} />
            </label>
            <span>{hint}</span>
        </div>
    );
};
