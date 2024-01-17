function toggleAdvancedSearch() {
  var advancedSearchSection = document.getElementById('moreFilters');
  var advancedSearchIcon = document.getElementById('advancedSearchIcon');

  // Переключение видимости расширенного поиска
  if (advancedSearchSection.style.display === 'none') {
    advancedSearchSection.style.display = 'flex';
    advancedSearchIcon.classList.add('active');
  } else {
    advancedSearchSection.style.display = 'none';
    advancedSearchIcon.classList.remove('active');
  }
}
