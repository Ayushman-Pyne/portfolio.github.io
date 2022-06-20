const tabItems = document.querySelectorAll('.tabItem');
const tabContentItems = document.querySelectorAll('.tabContentItem');

// Remove the other Borders
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tabBorder'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Select Tab Content Item
function selectItem(e) {
  removeShow();
  removeBorder();

  // Add border to current tab Border
  this.classList.add('tabBorder');

  // Grab Content Item From DOM
  const tabContentItem = document.querySelector(`#${this.id}Content`);

  // Add show class

  tabContentItem.classList.add('show');
}


// Listen For Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
