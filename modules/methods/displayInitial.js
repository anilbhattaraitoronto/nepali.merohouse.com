export function displayInitial(sectionClass, linkClass, activeClass, index = 0) {
    let sections = document.querySelectorAll(sectionClass)
    let navLinks = document.querySelectorAll(linkClass)
    sections.forEach(section => section.style.display = 'none')
    navLinks.forEach(link => link.classList.remove(activeClass))
    sections[index].style.display = 'block'
    navLinks[index].classList.add(activeClass)
}

export function navigateSections(sectionClass, linkClass, navId, activeClass) {
    let navContainer = document.getElementById(navId)
    navContainer.addEventListener('click', (event) => {
        let targetItem = event.target
        let links = Array.from(navContainer.children)
        let targetIndex = links.indexOf(targetItem)
        if (links.indexOf(targetItem) !== -1) {
            displayInitial(sectionClass, linkClass, activeClass, targetIndex)
        }
    })


}