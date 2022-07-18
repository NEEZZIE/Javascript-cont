const notes = [
    {
        title: "my next trip",
        body: "awesome Spain it is",
    },
    {
        title: "book I am reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "Amsterdam center Netherlands",
    },
];
console.log(notes[1].body);

const findNote = function (notesData, noteTitle){
    return notesData.find(function(note){
        return note.title.toLowerCase()===noteTitle.toLowerCase();
    });
};

console.log(findNote(notes, "My Next Trip"));
console.log(findNote(notes, "javascript conference"));