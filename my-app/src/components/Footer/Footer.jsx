import styles from './Footer.module.scss'

const Footer = () => {
    return(
        <div className={styles.footer}>
              <p>&copy; {new Date().getFullYear()} Университет дубна</p>
              <p>Ссылки:</p>
              <div className={styles.links}>
                <a href="https://vk.com/unidubna_official">Вк</a>
                <a href="https://m.ok.ru/group/70000001067834">Одноклассники</a>
                <a href="https://rutube.ru/channel/25223960/">Универсум</a>

              </div>
        </div>
    );
};

export default Footer;