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

    let listItemEL;
    listItemEL = document.createElement(`li`);
    let editt = edit_button();
    let deletee = delete_button();
    listItemEL.textContent = something;
    /** 
    deletee.addEventListener("click", () =>{
        console.log(`Delete button click for text ${something}`);
        document.getElementById("create_item").removeChild(listItemEL);
    });
    */
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
    my_Ebutt.className = "forEdit";
    my_Ebutt.textContent = "edit_Info";

    return my_Ebutt;
}

export function delete_button(){

    let my_Dbutt = document.createElement(`button`);
   // my_Dbutt.className = "forDelete";
    my_Dbutt.textContent = "Delete";

    return my_Dbutt;
}

/** 
export function remove_prepare(item){

    item.parentNode.remove();
}

export function remove_item(){
    
    for(let i = 0; i < document.getElementById("create_item").getElementsByClassName("forDelete").length; i++){

        document.getElementById("create_item").getElementsByClassName("forDelete")[i].addEventListener("click", () =>{

            remove_prepare(this);
            localStorage.setItem(`list_data`,JSON.stringify(document.getElementById("create_item").innerHTML));
        });
    }
}

*/

