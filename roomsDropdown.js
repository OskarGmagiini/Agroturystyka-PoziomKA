const headers = document.querySelectorAll('.room-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === 'block';
    
    document.querySelectorAll('.room-content').forEach(c => c.style.display = 'none');

    if (!isOpen) content.style.display = 'block';
  });
});