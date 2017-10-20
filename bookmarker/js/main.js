// Listen for form submit
document.querySelector('#myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  e.preventDefault();

  // Get form values
  var siteName = document.querySelector('#siteName').value;
  var siteUrl = document.querySelector('#siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
}
