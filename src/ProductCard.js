function ProductCard() {
    const info = document.querySelector(".card__info") 
    const img  = document.querySelector(".card__img")

    const infoChange = (event, background, color) => {
        info.addEventListener(event, () => {
            info.style = `
                background-color: ${background};
                color: ${color};
            `
        })
    }
    const imgChange = (event, opacity) => {
        img.addEventListener(event, () => {
            img.style = `
                opacity: ${opacity}; 
            `
        })
    }
    //computer
    infoChange("mouseover", "black", "white")
    infoChange("mouseout", "white", "black")
    imgChange("mouseover", "1")
    imgChange("mouseout", "0.2")
    
    //cell phone
    infoChange("touchstart", "black", "white")
    infoChange("touchend", "white", "black")
    imgChange("touchstart", "1")
    imgChange("touchend", "0.2")
}

export default ProductCard