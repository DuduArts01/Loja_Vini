const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

function clickProduct(){
    if(infoProduct.style.display == "block"){
        infoProduct.style.display = "none";
        reserve_space.style.display = "block";
    } else{
        infoProduct.style.display = "block";
        reserve_space.style.display = "none";
    }
}

function clickBuy(){
    if(box_information.style.display == "block"){
        box_information.style.display = "none";
        infoProduct.style.display = "block";
        pictureImage.innerHTML = pictureImageTxt;
    } else{
        box_information.style.display = "block";
        infoProduct.style.display = "none";
    }
}

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();
    
    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});