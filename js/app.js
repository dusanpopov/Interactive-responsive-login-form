const bannerBtn = document.querySelector(".banner__button");
const banner = document.querySelector(".banner");
const formContainer = document.querySelector(".container__form");
const formBtn = document.querySelector(".form-signup__button");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".button-close");

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

bannerBtn.addEventListener("click", () => {
    addBannerClasses();
    removeBannerClasses();
});

closeBtn.addEventListener("click", ()=> {
    removeContainerClasses();
    addContainerClasses();
});


function addBannerClasses(){
    banner.classList.add("banner__close");
    formContainer.classList.add("container__form-display-show");
}

function removeBannerClasses(){
    banner.classList.remove("banner__show");
    formContainer.classList.remove("container__form-display-close");
}

function addContainerClasses(){
    banner.classList.add("banner__show");
    formContainer.classList.add("container__form-display-close");
    container.classList.add("container_show");
}

function removeContainerClasses(){
    formContainer.classList.remove("container__form-display-show");
    banner.classList.remove("banner__close");
}


