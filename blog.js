//click on 
export function open_add(){
    document.getElementById("dialog_info").show();
}
document.getElementById("addSong").addEventListener("click", open_add);

export function close_add_cancel(){
    document.getElementById("dialog_info").close();
}
document.getElementById("cancel_but").addEventListener("click", close_add_cancel);


export function add_item(something){

    let newItem;
    newItem = document.createElement(`li`);
    let editt = edit_button();
    let deletee = delete_button();
    newItem.innerHTML = something;
    newItem.appendChild(editt);
    newItem.appendChild(deletee);
    document.getElementById("create_item").appendChild(newItem);
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

        add_item(`Title(Singer): ${singerName}, Date(Birthday Year): ${birthYear}, Summery(Song Name): ${songName}`);
    }

    document.getElementById("dialog_info").close();
}

document.getElementById("ok_but").addEventListener("click", save_added_item);

export function edit_button(){

    let my_Ebutt = document.createElement(`button`);
    my_Ebutt.id = "forEdit";
    my_Ebutt.innerHTML = "edit_Info";

    return my_Ebutt;
}

export function delete_button(){

    let my_Dbutt = document.createElement(`button`);
    my_Dbutt.id = "forDelete";
    my_Dbutt.innerHTML = "delete_Info";

    return my_Dbutt;
}