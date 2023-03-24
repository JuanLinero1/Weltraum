function Gallery() {
    const gallery = document.querySelector('.gallery__container');
    //i hate cors
    const locGalleryArr = [  
        "../public/assets/images/499147.jpg", 
        "../public/assets/images/R.jpg", 
        "../public/assets/images/OIP.jpg", 
        "../public/assets/images/R(3).jpg",
        "../public/assets/images/R(2).jpg", 
        "../public/assets/images/R(1).jpg",
        "../public/assets/images/artemis-1-on-pad-082922.jpg", 
        "../public/assets/images/fzwzbv7veaal-kc.webp"
        
    ]

    for(let index of locGalleryArr){
        gallery.innerHTML += `
            <img src=${index} alt="Rocket Img">
        `
    }

}

export default Gallery