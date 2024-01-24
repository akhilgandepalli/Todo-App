//created a method to select html elements
let id = (name) => document.querySelector(name);

//added html elements using id method
let createBtn = id('.add-icon');
let msgBox = id('.msg-cont');
let popUp = id('.pop-up');
let form = id('.pop-up-form');
let cls = id('.pop-up-cls')
let inp = id('.pop-up-inp');
let desc = id('.pop-up-desc');
let descCont=id('.desc-cont');
let err=id('.error')
let addBtn = id('.pop-up-addbtn');
let clsBtn = id('.pop-up-clsbtn');

//created functions to open and close popup
const openPopUp = () =>{
    popUp.style.display='block';
    err.innerHTML='';
}
const closePopUp = () =>{
    popUp.style.display='none';
    inp.value='';
    desc.value='';
}
 
// added eventlistener to popup(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();

});

// created a funtion to validate popup
const validate = () => {
    if(inp.value.trim()===''){
        err.innerHTML='Msg Cannot be empty..';
    }else{
        err.innerHTML='';
        writeMsg();
    }
}

//stored each todo message and description in object
let msg = {};
let descMsg={};

//created functions writeMsg to add msg to html and create to create msg box;
const writeMsg = () =>{
    msg['todo']=inp.value;
    descMsg['todoDesc']=desc.value;
    createMsg();
    closePopUp();
}
const createMsg = () =>{
    msgBox.innerHTML += `<div><div class="msgs">
        <p class="msg">${msg.todo}</p>
        <span class="options">
            <ion-icon name="eye-outline" onclick='viewDesc(this)'></ion-icon>
            <ion-icon name="create-outline" onclick="editMsg(this)"></ion-icon>
            <ion-icon name="trash-outline" onclick="deleteMsg(this)"></ion-icon>
        </span>
    </div>
    <div class='desc-cont'><span class="desc-msg">&nbsp;&nbsp;${descMsg.todoDesc}</span><ion-icon name="close-outline" onclick="closeDesc(this)"></ion-icon></div></div>`
}


//created different operations for modifing and view the msg and description
const editMsg = (e) => {
    openPopUp();
    inp.value=e.parentElement.previousElementSibling.innerHTML;
    desc.value=e.parentElement.parentElement.nextElementSibling.innerText;
    e.parentElement.parentElement.parentElement.remove()
}
const deleteMsg = (e) => {
    e.parentElement.parentElement.parentElement.remove()
}
const viewDesc=(e) =>{
    e.parentElement.parentElement.nextElementSibling.style.display='block';
} 
const closeDesc=(e) =>{
    e.parentElement.style.display='none';
}
