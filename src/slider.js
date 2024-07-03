export function showImage(src, srcset2x) {
  console.log('showImage called with src:', src, 'and srcset2x:', srcset2x);
  let mainImage = document.getElementById('mainImage');
  mainImage.src = src;
  mainImage.srcset = `${src} 1x, ${srcset2x} 2x`;
  mainImage.alt = src.split('/').pop().split('.')[0]; // Оновлення alt атрибуту
}

// Для забезпечення доступу до функції через глобальний простір імен
window.showImage = showImage;
