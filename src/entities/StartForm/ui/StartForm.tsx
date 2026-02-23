import { memo } from 'react';
import styles from './StartForm.module.scss';
import { Link } from 'react-router-dom';

const StartFormComponent = () => {
    return (
        <div className={styles.startForm}>
            <h1>Привет!</h1>
            <Link to={'/list'} className={styles.link}>
                К списку
            </Link>
        </div>
    );
};

export const StartForm = memo(StartFormComponent);
