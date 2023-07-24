const list = document.querySelectorAll(`.item`)
console.log("Number of categories:", list.length)

list.forEach(function (item) {
    console.log("Category:", item.children[0].textContent);
    console.log("Elements:", item.children[1].children.length)
})