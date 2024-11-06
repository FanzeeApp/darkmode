document.addEventListener('DOMContentLoaded', () => {
   const modeToggle = document.getElementById('mode-toggle');
   
   const savedMode = localStorage.getItem('theme') || 'light';
   document.body.classList.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
   
   modeToggle.textContent = savedMode === 'dark' ? 'oq rejim' : 'tyomniy rejim';

   modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');

      modeToggle.textContent = isDarkMode ? 'oq rejim' : 'tyomniy rejim' ;

      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
   });
});
