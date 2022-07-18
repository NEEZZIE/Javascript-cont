const todos = ["order water", "clean compound", "buy food"];

//todos[1] = "buy house"

todos.forEach(function(item, index) {
    const num = index + 1;
    console.log(`${num} -- ${item}`);
})

let index = todos.findIndex(function (buyFood){
    return buyFood === "clean compound";
});
console.log(index);

let index2 = todos.findIndex(function (food){
    return food === "buy food";
});
console.log(index2);



