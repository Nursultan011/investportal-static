document.addEventListener('DOMContentLoaded', function () {
  let images = ['card-1.jpg', 'card-2.jpg', 'card-3.jpg'];

  let currentImg = document.getElementById('currentImg');
  let imageList = document.getElementById('imageList');

  images.forEach(function (img) {
    let imgElement = document.createElement('img');
    imgElement.src = `./images/${img}`;
    imgElement.alt = `Изображение`;
    imgElement.onclick = function () {
      currentImg.src = imgElement.src;
    };
    imageList.appendChild(imgElement);
  });
});

function handleFileSelect(event) {
  let files = event.target.files;
  updateUploadButtonsVisibility(files.length > 0);
  for (let i = 0; i < files.length; i++) {
    displayImage(files[i]);
  }
  event.target.value = '';
}

function displayImage(file) {
  let reader = new FileReader();
  reader.onload = function (event) {
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    let img = document.createElement('img');
    img.src = event.target.result;

    let closeButton = document.createElement('span');
    closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 5L5 19M5 5L19 19" stroke="#FEFEFE" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    closeButton.onclick = function () {
      imageContainer.remove();
      updateUploadButtonsVisibility(false);
    };

    imageContainer.appendChild(img);
    imageContainer.appendChild(closeButton);

    let container = document.getElementById('previewContainer');
    container.appendChild(imageContainer);
  };
  reader.readAsDataURL(file);
}

function updateUploadButtonsVisibility(hasFiles) {
  var container = document.getElementById('previewContainer');
  var filesPresent = container.children.length > 0 || hasFiles;
  document.getElementById('initialUploadButton').style.display = filesPresent ? 'none' : 'flex';
  document.getElementById('secondaryUploadButton').style.display = filesPresent ? 'flex' : 'none';
}

document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Здесь логика для отправки изображений на сервер
});
