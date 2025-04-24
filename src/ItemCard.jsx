import styles from './ItemCard.module.css'

const titleStyles = {
    'done': styles['item-card__title--done'],
    'in progress': styles['item-card__title--in-progress']
}

const statusStyles = {
    'done': styles['item-card__status--done'],
    'in progress': styles['item-card__status--in-progress'],
    'pending': styles['item-card__status--pending']
}

export function ItemCard({ item }) {
    return (
        <li className={styles['item-card']}>
            <h4 className={`${styles['item-card__title']} ${titleStyles[item.status] || ''}`}>
                {item.title}
            </h4>
            <p className={styles['item-card__description']}>{item.description}</p>
            <span className={`${styles['item-card__status']} ${statusStyles[item.status]}`}>
                {item.status}
            </span>
        </li>
    );
}

export default ItemCard;
