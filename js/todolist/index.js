// const list = document.getElementById("list")


// //berjalan ketika form disubmit // e = event
// function onFormSubmit (e){
//     e.preventDefault()
//     //membaca input
//     const inputValue = e.target.children[0].value //melihat elemen yang diinput
//     console.log(inputValue)

//     list.appendChild(createListItem(inputValue))
// }

// function createListItem(inputValue) {
//     const item = document.createElement("div")
//     item.innerHTML = `
//     <div>
//         <input type="checkbox" />
//         <span>${inputValue}</span>
//     </div>
//     <button>X</button>
//     `
//     return item
// }

const list = document.getElementById("list")

function onFormSubmit(e) {
    e.preventDefault()
    const inputValue = e.target.children[0].value
    
    list.appendChild(createListItem(inputValue))
}

function createListItem(e){
    const parent = e.target.parentElement
    list.removeChild(parent)
}

function createListItem(inputValue) {
    const item = document.createElement("div")
    item.innerHTML = `
        <div class="list-tem">
            <input type="checkbox" />
            <span>${inputValue}</span>
        </div>
        <button onclick="deleteListItem(event)">X</button>
    `
    return item
}