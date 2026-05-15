window.addEventListener('load', function() {
  const loading = document.querySelector('.loading');
  
  // Adding a slight delay to ensure the loading animation is seen briefly
  setTimeout(() => {
      loading.classList.add('hidden');
      
      // Optionally remove it from DOM entirely after the fade out transition (0.5s from CSS)
      setTimeout(() => {
          loading.style.display = 'none';
      }, 500);
  }, 400); // 400ms delay
});
