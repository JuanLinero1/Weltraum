function Header() {
    const menuBars = document.querySelector(".menu--bars")
    const menuX = document.querySelector(".menu--x")
    const mobileMenu = document.querySelector(".mobile__list")

    menuBars.addEventListener("click", () => {
        mobileMenu.style = `
            transform: translateX(0%); 
        `
    })
    menuX.addEventListener("click", () => {
        mobileMenu.style = `
            transform: translateX(100%); 
        `
    })
}

export default Header