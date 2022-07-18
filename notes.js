// Arrays- a collection of items
const notes =["note1", "note2", "note3"];
//notes[1] = "something else"
console.log(notes[1]);
//notes.forEach(function(item, index) {
  //  console.log(`${index} -- ${item}`);
//})
notes.forEach(function(note,position){
    console.log(note);
    console.log(position)
})
//let index = notes.findIndex(function (note){
  //  return note === "note1";
//});
//console.log(index);
