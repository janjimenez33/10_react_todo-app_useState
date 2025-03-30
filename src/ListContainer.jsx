import React from 'react';
import styles from './ListContainer.module.css';

export function ListContainer({ children }) {
    return (
        <div className={styles['todo-list']}>
            {children}
        </div>
    );
}

export default ListContainer;
