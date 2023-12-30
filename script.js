const buttonShare = document.querySelector(".share-social");

function activeSocial(e) {
  const button = e.currentTarget;
  const social = e.currentTarget.nextElementSibling;
  button.classList.toggle("active");
  social.classList.toggle("active");
}

buttonShare.addEventListener("click", activeSocial);
