import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles['page-header']}>
            <h1 className={styles['page-header__title']}>TodoApp</h1>
        </header>
    )
}

export default Header;
