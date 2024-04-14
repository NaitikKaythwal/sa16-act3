document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const items = document.querySelectorAll('.item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = button.getAttribute('data-filter');
        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
});
