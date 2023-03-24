function Gallery() {
    const gallery = document.querySelector('.gallery__container');
    //i hate cors
    const locGalleryArr = [  
        "../public/assets/images/499147.png", 
        "../public/assets/images/R.png", 
        "../public/assets/images/OIP.png", 
        "../public/assets/images/R(3).png",
        "../public/assets/images/R(2).png", 
        "../public/assets/images/R(1).png",
        "../public/assets/images/artemis-1-on-pad-082922.png", 
        "../public/assets/images/fzwzbv7veaal-kc.png"
        
    ]

    for(let index of locGalleryArr){
        gallery.innerHTML += `
            <img src=${index} alt="Rocket Img">
        `
    }

}

export default Gallery