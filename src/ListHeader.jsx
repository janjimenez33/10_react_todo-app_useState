import styles from './ListHeader.module.css'

export function ListHeader({ content }) {
    return (
        <div className={styles['list-header']}>
            <h3 className={styles['list-header__title']}>{content}</h3>
        </div>
    )
}

export default ListHeader;
