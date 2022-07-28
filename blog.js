export let needToEdit = document.getElementById("dialog_edit");

export function open_add(){
    document.getElementById("dialog_info").show();
}
document.getElementById("addSong").addEventListener("click", open_add);

export function close_add_cancel(){
    document.getElementById("dialog_info").close();
}
document.getElementById("cancel_but").addEventListener("click", close_add_cancel);


export function add_item(something){

    let listItemEL;
    listItemEL = document.createElement(`li`);
    let editt = edit_button();
    let deletee = delete_button();
    listItemEL.textContent = something;
    
    deletee.addEventListener("click", () =>{
        console.log(`Delete button click for text ${something}`);
        document.getElementById("create_item").removeChild(listItemEL);
    });

    editt.addEventListener("click", () =>{
        //console.log(`Edit button click for text ${something}`);
        open_add_edit(("create_item"));
    });

    listItemEL.appendChild(editt);
    listItemEL.appendChild(deletee);
    document.getElementById("create_item").appendChild(listItemEL);

}

export function save_added_item(){

    let singerName = document.getElementById("singer_name").value;
    let birthYear = document.getElementById("singer_year").value;
    let songName = document.getElementById("singer_summery").value;

    // Nothing Should be null or empty

    if((singerName == null || singerName == "") || (birthYear == null || birthYear == "") || (songName == null || songName == "")){
        
        alert("ERROR: Cehck your inputs ");
    }

    else{

        let txt = `Title(Singer): ${singerName}, Date(Birthday Year): ${birthYear}, Summery(Song Name): ${songName} `;
        add_item(txt);   
        localStorage.setItem(`list_data`,JSON.stringify(document.getElementById("create_item").innerHTML));
    }

    document.getElementById("dialog_info").close();
}

document.getElementById("ok_but").addEventListener("click", save_added_item);

export function edit_button(){

    let my_Ebutt = document.createElement(`button`);
   // my_Ebutt.className = "forEdit";
    my_Ebutt.textContent = "EDIT";

    return my_Ebutt;
}

export function delete_button(){

    let my_Dbutt = document.createElement(`button`);
   // my_Dbutt.className = "forDelete";
    my_Dbutt.textContent = "Delete";

    return my_Dbutt;
}


export function open_add_edit(id){
    document.getElementById("dialog_edit").show();
    document.getElementById(id) = needToEdit;
}

export function close_add_cancle_edit(){
    document.getElementById("dialog_edit").close();
}

export function edit_ok(){
    let singerNameEdit = document.getElementById("singer_name2").value;
    let birthYearEdit = document.getElementById("singer_year2").value;
    let songNameEdit = document.getElementById("singer_summery2").value;

    
    if((singerNameEdit == null || singerNameEdit == "") || (birthYearEdit == null || birthYearEdit == "") || 
    (songNameEdit == null || songNameEdit == "")){
        
        alert("ERROR: Cehck your inputs ");
    }

    else{

        let txt = `Title(Singer): ${singerNameEdit}, Date(Birthday Year): ${birthYearEdit}, Summery(Song Name): ${songNameEdit} `;
        let temp = needToEdit.parentNode;
        temp.textContent = txt;
        let edit_edit = edit_button();
        let delete_edit = delete_button();
        temp.appendChild(edit_edit);
        temp.appendChild(delete_edit);
        localStorage.setItem(`list_data`,JSON.stringify(document.getElementById("create_item").innerHTML));
    }

    document.getElementById("dialog_edit").close();
}