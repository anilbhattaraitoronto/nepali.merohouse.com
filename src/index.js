//import data 
import { lessons } from './assets/modules/data/lessons.js'
import { aboutPosts } from './assets/modules/data/aboutPosts.js'
//import methods
import { getCopyRightYear } from './assets/modules/methods/getCopyRightYear.js'

import { displayFirstSection, switchSections } from './assets/modules/methods/switchSections.js'
import { renderLesson, switchLesson } from './assets/modules/methods/renderLesson.js'
import { toggleMenu } from './assets/modules/methods/toggleMenu.js'
import { renderAboutPostTitles, renderPost, switchPost } from './assets/modules/methods/renderPost.js'

//immediately invoked function expression (IIFE) to run the app 

(function () {
    getCopyRightYear('copy-right-year')
    displayFirstSection('.main-page', '.main-link')
    //event for starting lesson
    let startButton = document.getElementById('start-button')

    startButton.addEventListener('click', () => {
        displayFirstSection('.main-page', '.main-link', 1)
    })
    switchSections('.main-page', '.main-link', 'main-nav')
    renderLesson('lesson-box', lessons, 'vowels')
    switchLesson('lesson-box', lessons)
    //menu shuffle
    toggleMenu('lesson-menu', 'lesson-navs', 'show')


    //render about posts 

    renderAboutPostTitles(aboutPosts, 'about-nav')
    renderPost(aboutPosts, 'about-post')
    switchPost(aboutPosts, 'about-post')

    toggleMenu('about-menu', 'about-nav', 'show')

})();

