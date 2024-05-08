import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>© OOO Baraholka</div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Контакты</h3>
          <p>Телефон: +7 (900) 555-35-35</p>
          <p>Email: nepishite.com</p>
        </div>
        <div className="footer-column">
          <h3>Ссылки</h3>
          <a href="https://ru.dotabuff.com/">О нас</a>
          <a href="https://ru.dotabuff.com/">Продукты</a>
          <a href="https://ru.dotabuff.com/">Сервисы</a>
        </div>
        <div className="footer-column">
          <h3>Социальные сети</h3>
          <div className="social-icons">
            <a href="#!"><img src="facebook_icon" alt="Facebook" /></a>
            <a href="#!"><img src="twitter_icon" alt="Twitter" /></a>
            <a href="#!"><img src="instagram_icon" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
