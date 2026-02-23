import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export const Button = ({ children, ...otherProps }: ButtonProps) => {
    return (
        <button className={styles.button} {...otherProps}>
            {children}
        </button>
    );
};
