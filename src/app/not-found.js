import styles from './notfound.module.css';

function NotFound() {
    return <header className={styles.wrapper}>
        <div className={styles.content}>
            <h1>404 Not Found</h1>
            <p>This page does not exist. Please check the URL and try again.</p>
        </div>
    </header>
}

export default NotFound;
