import React, { useState, useEffect } from 'react';

const LikeButton = ({ productId }) => {
  // состояние для отслеживания лайка
  const [liked, setLiked] = useState(false);

  // Проверяем localStorage при монтировании компонента
  useEffect(() => {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLiked(likedProducts.includes(productId)); // Используем includes для проверки
  }, [productId]);

  // Функция для обработки клика по кнопке
  const toggleLike = () => {
    setLiked((prevLiked) => {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];

      if (prevLiked) {
        // Удаляем id продукта из массива, если он был "лайкнут"
        const updatedLikedProducts = likedProducts.filter(id => id !== productId);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
        return false;
      } else {
        // Добавляем id продукта в массив, если он не был "лайкнут"
        const updatedLikedProducts = [...likedProducts, productId];
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
        return true;
      }
    });
  };

  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={toggleLike}
    >
     {liked ? '😍' : '🙂 '}
    </button>
  );
};

export default LikeButton;
