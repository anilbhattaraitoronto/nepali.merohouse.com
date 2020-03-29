// function to render items from an array of objects onto the DOM
export function renderBlogs(itemArray, titleContainerId, itemContainerId) {
    let titleContainer = document.getElementById(titleContainerId)
    let itemContainer = document.getElementById(itemContainerId)

    if (titleContainer !== null) {
        //render titles to the title container
        itemArray.forEach(item => {
            if (item.is_archived !== true) {
                titleContainer.innerHTML += `<button id="${item._id}" class="blog-link"> ${item.title}</button>`
            }
        })
        //render latest blog to the blog container
        itemContainer.innerHTML = `
        <div class="blog">
            <h3 class="blog-title"> ${itemArray[0].title} </h3>
            <h4 class="author"> ${itemArray[0].author}</h4>
            <p class="posted-date" >${itemArray[0].posted_on}</p>
            <div class="thumbnail-container">
                <img src="${itemArray[0].thumbnail}" class="thumbnail">
            </div>
            <p>${itemArray[0].content}</p>
        </div>
        `
        //navigate through list of titles
        titleContainer.addEventListener('click', (event) => {
            let targetItem = event.target
            let titleLinks = Array.from(titleContainer.children)
            let targetIndex = titleLinks.indexOf(targetItem)
            if (targetIndex !== -1) {
                let itemId = targetItem.id

                let item = itemArray.find(item => item._id === itemId)

                itemContainer.innerHTML = `
                <div class="blog">
                    <h3 class="blog-title"> ${item.title} </h3>
                    <h4 class="author"> ${item.author}</h4>
                    <p class="posted-date" >${item.posted_on}</p>
                    <div class="thumbnail-container">
                        <img src="${item.thumbnail}" class="thumbnail">
                    </div>
                    <p>${item.content}</p>
                </div>
              `
            }
        })
    }
}