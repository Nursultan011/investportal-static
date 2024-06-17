document.addEventListener("DOMContentLoaded", function() {
  var languageWrap = document.querySelector('.language-wrap');
  var languageList = document.querySelector('.language-list');

  // Toggle the display of the language list when the wrap is clicked
  languageWrap.addEventListener('click', function() {
    // Check if the list is currently displayed
    if (languageList.style.display === 'none' || languageList.style.display === '') {
      languageList.style.display = 'block'; // Show the list
    } else {
      languageList.style.display = 'none'; // Hide the list
    }
  });
});