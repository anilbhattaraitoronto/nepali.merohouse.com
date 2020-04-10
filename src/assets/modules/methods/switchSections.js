//a pure function to display initial section and switch among sections through clicking navigation buttons

export function displayFirstSection(sectionClass, linkClass, sectionIndex = 0) {

    let sections = document.querySelectorAll(sectionClass)
    let sectionLinks = document.querySelectorAll(linkClass)

    //display initial
    sections.forEach(section => section.style.display = 'none')

    sectionLinks.forEach(link => link.classList.remove('active'))

    sections[sectionIndex].style.display = 'block'
    sectionLinks[sectionIndex].classList.add('active')

    //navigate through sections


}

export function switchSections(sectionClass, linkClass, navId) {
    let navContainer = document.getElementById(navId)

    navContainer.addEventListener('click', (event) => {
        let links = Array.from(navContainer.children)
        let targetLink = event.target
        let targetIndex = links.indexOf(targetLink)
        if (targetIndex !== -1) {
            displayFirstSection(sectionClass, linkClass, targetIndex)
        }
    })

}

