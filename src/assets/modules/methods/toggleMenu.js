export function toggleMenu(menuId, containerId, toggleClass) {
    let menuButton = document.getElementById(menuId)
    let container = document.getElementById(containerId)
    menuButton.addEventListener('click', () => {
        container.classList.toggle(toggleClass)
    })
}