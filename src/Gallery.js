function Gallery() {
    const gallery = document.querySelector('.gallery__container');
    //i hate cors
    const locGalleryArr = [  
        "https://i.postimg.cc/J0gWYVB2/499147.jpg", 
        "https://i.postimg.cc/kXznf8Qg/artemis-1-on-pad-082922.jpg", 
        "https://i.postimg.cc/vZnGjBhL/fzwzbv7veaal-kc.webp", 
        "https://i.postimg.cc/9Frmd1qk/OIP.jpg",
        "https://i.postimg.cc/SsSqJGhD/R.jpg", 
        "https://i.postimg.cc/1X4QK54F/R-1.jpg",
        "https://i.postimg.cc/MT9wRjZx/R-2.jpg", 
        "https://i.postimg.cc/8CBNp0q7/R-3.jpg"
        
    ]

    for(let index of locGalleryArr){
        gallery.innerHTML += `
            <img src=${index} alt="Rocket Img">
        `
    }

}

export default Gallery