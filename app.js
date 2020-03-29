import { blogs } from '/modules/data/blogs.js'
import { renderCopyRightYear } from '/modules/methods/renderCopyRightYear.js'
import { displayInitial, navigateSections } from '/modules/methods/displayInitial.js'
import { renderBlogs } from '/modules/methods/renderBlogs.js'
import { toggleMenu } from '/modules/methods/toggleMenu.js'


mainApp()

function mainApp() {
    //dynamically render copy right year at the footer
    renderCopyRightYear('copy-right-year')
    //initial sections
    displayInitial('.main-page', '.top-link', 'active', 0)
    //tabbed navigations through main sections
    navigateSections('.main-page', '.top-link', 'top-nav', 'active')

    //start button action

    let startButton = document.getElementById('start-lesson-button')
    startButton.addEventListener('click', () => {
        displayInitial('.main-page', '.top-link', 'active', 1)
    })
    let latestBlogButton = document.getElementById('latest-blog')
    latestBlogButton.addEventListener('click', () => {
        displayInitial('.main-page', '.top-link', 'active', 2)
    })

    renderBlogs(blogs, 'blog-titles', 'blog-container')

    toggleMenu('blog-menu', 'blog-titles')
}