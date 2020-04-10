import { toggleMenu } from './toggleMenu.js'


export function renderLesson(lessonBoxId, lessonArray, lessonId, itemIndex = 0) {
    let lessonBox = document.getElementById(lessonBoxId)
    let lesson = lessonArray.find(item => item.id === lessonId)

    if (lesson !== undefined) {
        let lessonTemplate = `
        <div class="lesson-template">
            <h3 class="lesson-title" >${lesson.id}</h3>
            <span class="english">${lesson.items[itemIndex].english}</span>
            <span class="nepali">${lesson.items[itemIndex].nepali}</span>
            <span class="picture">${lesson.items[itemIndex].image}</span>
            <span class="sound">${lesson.items[itemIndex].sound}</span>
        </div>`
        lessonBox.innerHTML = lessonTemplate
    }

    let nextItemBtn = document.getElementById('next-btn')
    let prevItemBtn = document.getElementById('prev-btn')
    if (lesson !== undefined) {
        nextItemBtn.addEventListener('click', () => {
            itemIndex++
            if (itemIndex === lesson.items.length) {
                itemIndex = 0
            }

            let lessonTemplate = `
        <div class="lesson-template">
        <h3 class="lesson-title" >${lesson.id}</h3>
            <span class="english">${lesson.items[itemIndex].english}</span>
            <span class="nepali">${lesson.items[itemIndex].nepali}</span>
            <span class="picture">${lesson.items[itemIndex].image}</span>
            <span class="sound">${lesson.items[itemIndex].sound}</span>
        </div>`
            lessonBox.innerHTML = lessonTemplate

        })
    }
    if (lesson !== undefined) {
        prevItemBtn.addEventListener('click', () => {
            itemIndex--
            if (itemIndex < 0) {
                itemIndex = lesson.items.length - 1
            }

            let lessonTemplate = `
        <div class="lesson-template">
        <h3 class="lesson-title" >${lesson.id}</h3>
            <span class="english">${lesson.items[itemIndex].english}</span>
            <span class="nepali">${lesson.items[itemIndex].nepali}</span>
            <span class="picture">${lesson.items[itemIndex].image}</span>
            <span class="sound">${lesson.items[itemIndex].sound}</span>
        </div>`
            lessonBox.innerHTML = lessonTemplate

        })
    }
}

export function switchLesson(lessonBoxId, lessonArray, itemIndex = 0) {
    let lessonNavContainer = document.getElementById('lesson-navs')
    toggleMenu('lesson-navs', 'lesson-navs', 'show')
    lessonNavContainer.addEventListener('click', (event) => {
        let linkId = event.target.id
        renderLesson(lessonBoxId, lessonArray, linkId)
    })
}