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

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  var bookmarksResults = document.getElementById('bookmarksResults');

  for (var i = 0; i < bookmarks.length; ++i) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      '<div class="well">' +
      '<h3>' + name +
      '<a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
      '</h3>' +
      '</div>';
  }
}
