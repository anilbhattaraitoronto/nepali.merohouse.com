export function toggleMenu(menuId, navContainerId) {
    let menuButton = document.getElementById(menuId)
    let navContainer = document.getElementById(navContainerId)

    if (menuButton !== null) {
        menuButton.addEventListener('click', () => {
            navContainer.classList.toggle('active')
        })
    }
    if (navContainer !== null) {
        navContainer.addEventListener('click', () => {
            navContainer.classList.toggle('active')
        })
    }

}