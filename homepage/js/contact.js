/* show/hide the left-image when width is more/less than 35rem */
let query = window.matchMedia("(max-width: 35rem)");
query.addListener(changeName);
changeName(query);

function changeName(query) {
  let parent;
  if (query.matches) {
    let child = document.getElementById('left-img');
    if (child != null) {
      parent = document.getElementById('img-info-form');
      parent.removeChild(child);
    }
  }
  else {
    parent = document.getElementById('img-info-form');
    let div = document.createElement('div');
    let nextChild = document.getElementsByTagName('main');
    div.setAttribute('id', 'left-img');
    parent.insertBefore(div, nextChild[0]);
  }
}