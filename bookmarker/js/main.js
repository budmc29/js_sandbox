// Listen for form submit
document.querySelector('#myForm').addEventListener('submit', saveBookmark);

var STORAGE_NAME = 'bookmarks';

function readFromStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_NAME));
}

function saveToStorage(element) {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(element));
}

function saveBookmark(e) {
  var siteName = document.querySelector('#siteName').value;
  var siteUrl = document.querySelector('#siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  if (readFromStorage() === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);

    saveToStorage(bookmarks);
  } else {
    var bookmarks = readFromStorage();

    bookmarks.push(bookmark);

    saveToStorage(bookmarks);
  }

  fetchBookmarks();

  e.preventDefault();
}

function deleteBookmark(url) {
  var bookmarks = readFromStorage();

  for (var i = 0; i < bookmarks.length; ++i) {
    if (bookmarks[i].url == url) {
      bookmarks.splice(i, 1);
    }
  }

  saveToStorage(bookmarks);

  fetchBookmarks();
}

function fetchBookmarks() {
  var bookmarks = readFromStorage();

  var bookmarksResults = document.querySelector('#bookmarksResults');

  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; ++i) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      '<div class="well">' +
      '<h3>' + name +
      ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
      '<a class="btn btn-danger" href="#" onclick="deleteBookmark(\'' + url + '\')">Delete</a> ' +
      '</h3>' +
      '</div>';
  }
}
