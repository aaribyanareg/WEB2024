import React from 'react';

export default function Footer() {
  return (
    <footer>
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
          <a href="#!"><img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook" /></a>
            <a href="#!"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" alt="Twitter" /></a>
            <a href="#!"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
