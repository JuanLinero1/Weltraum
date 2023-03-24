function ChangeColorTitle() {
    const title = document.querySelector('.home__text--title')

    let hue = 0
    
    setInterval(() => {
        hue++
        title.style = `color: hsl(${hue}, 100%, 50%)`
    }, 50);
}

export default ChangeColorTitle