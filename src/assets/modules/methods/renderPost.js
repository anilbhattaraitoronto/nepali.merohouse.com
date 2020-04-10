import { toggleMenu } from './toggleMenu.js'

export function renderAboutPostTitles(postArray, navContainerId) {
    let navContainer = document.getElementById(navContainerId)
    let linkItem;

    postArray.forEach(item => {
        linkItem = ` <button id = ${item.id} class="about-link"> ${item.title}  </button> `
        navContainer.innerHTML += linkItem
    })

}

export function renderPost(postArray, postContainerId, aboutPostIndex = 0) {

    let postContainer = document.getElementById(postContainerId)

    let previousPostBtn = document.getElementById('about-prev-btn')
    let nextPostBtn = document.getElementById('about-next-btn')

    //This id will be supplied initially to display first post in the array
    let post = postArray[aboutPostIndex]


    postContainer.innerHTML = `
        <div id='about-post-template'>
            <h3> ${post.title}</h3>
            <p> ${post.content}</p>
        </div>
    `
    //button events

    previousPostBtn.addEventListener('click', () => {
        aboutPostIndex--
        if (aboutPostIndex < 0) {
            aboutPostIndex = postArray.length - 1
        }

        let post = postArray[aboutPostIndex]
        postContainer.innerHTML = `
    <div id='about-post-template'>
        <h3> ${post.title}</h3>
        <p> ${post.content}</p>
    </div>
`
    })
    nextPostBtn.addEventListener('click', () => {
        aboutPostIndex++
        if (aboutPostIndex === postArray.length) {
            aboutPostIndex = 0
        }

        let post = postArray[aboutPostIndex]
        postContainer.innerHTML = `
    <div id='about-post-template'>
        <h3> ${post.title}</h3>
        <p> ${post.content}</p>
    </div>
`
    })

}

export function switchPost(postArray, postContainerId) {

    let navContainer = document.getElementById('about-nav')
    toggleMenu('about-nav', 'about-nav', 'show')
    navContainer.addEventListener('click', (event) => {
        let targetLink = event.target
        let targetId = targetLink.id
        let targetIndex = Array.from(navContainer.children).indexOf(targetLink)
        if (targetIndex !== -1) {
            renderPost(postArray, postContainerId, targetIndex)
        }

    })
}