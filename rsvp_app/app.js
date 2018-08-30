const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

function createLi(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');

  span.textContent = text;
  const label = document.createElement('label');
  li.appendChild(span);
  label.textContent = 'Confirmed';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label)

  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);

  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value;
  input.value = '';

  const li = createLi(text);

  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value =  span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});
