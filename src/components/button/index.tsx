import React from 'react'
import style from './Btn.module.scss'

export default class Button extends React.Component<{
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.btn}>
                {this.props.children}
            </button>
        );
    }
}