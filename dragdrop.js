// Adding Dragging in class
const sortableList = document.querySelector('.shortable-items');
const items = sortableList.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => item.classList.add('dragging'), 0);
    })

    item.addEventListener('dragend', () =>{
        item.classList.remove('dragging');
    })
})

const initSortableList = (e) => {
    const draggingItem = sortableList.querySelector('.dragging');
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2 ;
    })

    sortableList.insertBefore(draggingItem, nextSibling);
}

// Inserting Items in dragged Places
sortableList.addEventListener('dragover', initSortableList);