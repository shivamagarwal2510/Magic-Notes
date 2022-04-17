console.log("Notes app");
let addBtn = document.getElementById("addBtn");
function showNotes(array){
    let note = document.getElementById("notes");
    note.innerHTML = "";
    array.forEach((element, index )=> {
        note.innerHTML += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <a id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</a>
    </div>
</div>`});
}

addBtn.addEventListener('click', () => {
    addTxt = document.getElementById('addTxt');
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes(notesObj);
    addTxt.value = "";
});
let note = document.getElementById("notes");
note.innerHTML = "";
if (localStorage.getItem('notes') != null) {
    showNotes(JSON.parse(localStorage.getItem('notes')));
}
function delNote(index){
    let notesObj=JSON.parse(localStorage.getItem("notes"));
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes(JSON.parse(localStorage.getItem("notes")));
}
let search = document.getElementById('searchTxt');

search.addEventListener("input", ()=>{
    let inputVal = search.value.toLowerCase() ;
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach((element)=>{
        let cardVal = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardVal.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }
        // console.log(cardVal);
    });
    // console.log(inputVal);

})
