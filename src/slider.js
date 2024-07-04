function showImage(src, srcset2x) {
            console.log('showImage called with src:', src, 'and srcset2x:', srcset2x);
            let mainImage = document.getElementById('mainImage');
            mainImage.src = src;
            mainImage.srcset = `${src} 1x, ${srcset2x} 2x`;
            mainImage.alt = src.split('/').pop().split('.')[0]; // Update alt attribute
            mainImage.style.display = 'block'; // Make the image visible if initially hidden
        }

        // Ensure the function is accessible in the global namespace
        window.showImage = showImage;
