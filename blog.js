export function open_add(){
    document.getElementById("dialog_info").show();
}
document.getElementById("addSong").addEventListener("click", open_add);

export function close_add(){
    document.getElementById("dialog_info").close();
}
document.getElementById("cancel_but").addEventListener("click", close_add);
