const note =[
    {
        title: "my next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",
    },
    {
        title: "book i am reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "formula1",
        body: "qatar rally",
    },
];
//console.log(note [3].body);
//note.forEach(function(item){
    //console.log(item.body);
//});

//const findNote = function (notesData, noteTitle) {
   // return notesData.find(function(item) {
      //  return item.title ===noteTitle;
    //});
//};
//console.log(findNote(note, "attend book session"))

//const findNote2 = function (notesData, noteTitle) {
    //return notesData.findIndex(function(item) {
    //    return item.title ===noteTitle;
   // });
//};
//console.log(findNote2(note, "attend book session"))

const findNote = function(notesData, query){
    return notesData.filter(function(item){
        return (item.title.toLowerCase().includes(query.toLowerCase())
        ||  item.body.toLowerCase().includes(query.toLowerCase())
    );});
};
console.log(findNote(note, "ne"))