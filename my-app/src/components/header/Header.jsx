import styles from './Header.module.css';

const Header = () => {
    return(
        <div>

            <header className={styles.header}>
            {/* <header> */}
            <h1>
                Create  App
            </h1>
            </header>
            <p>description</p>
            <nav>
                <a href="#">One</a>
                <a href="#">Two</a>
                <a href="#">Three</a>
            </nav>
            </div>
    );
}

export default Header;