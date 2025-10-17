function showTab(tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  // Remove "active" class from all tab buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show the selected tab content
  const activeTab = document.getElementById(tabId);
  activeTab.style.display = 'block';

  // Add fade-in effect
  setTimeout(() => activeTab.classList.add('active'), 10);

  // Highlight the active tab button
  event.currentTarget.classList.add('active');
}

// Show the first tab on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-button').click();
});
