const todos = [
    {
        title: "order food",
        body: "ring road shop",
    },
    {
        title: "Attend movie show",
        body: "swan park",
    },
    {
        title: "design website",
        body: "sunset system",
    },
];
console.log(todos[2].title)
todos.forEach(function(item){
    console.log(item.body);
});

const findNote2 = function (todosData, noteTitle) {
    return todosData.findIndex(function(item) {
        return item.title.toLowerCase === noteTitle.toLowerCase;
    });
};
console.log(findNote2(todos, "Attend book session"))