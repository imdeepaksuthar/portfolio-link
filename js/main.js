<script>
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // Load saved theme on page load
  if (localStorage.getItem('theme') === 'dark' || 
     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
  }
</script>
