export function getCopyRightYear(copyRightYearContainerId) {
    let copyRightContainer = document.getElementById(copyRightYearContainerId)
    let year = new Date().getFullYear()
    copyRightContainer.innerHTML = year
}