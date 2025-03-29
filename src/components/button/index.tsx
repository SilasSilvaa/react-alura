import React from 'react'
import style from './Btn.module.scss'

interface Props {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Button({ children, type, onClick }: Props) {

    return (
        <button onClick={onClick} type={type} className={style.btn}>
            {children}
        </button>
    );
}
