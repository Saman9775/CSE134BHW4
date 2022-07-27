/**
 * When we display the dialog, then we need to disable the dialog.
 * What I mean is that we need to have a method for displaying the dialog box and then disable it
 */


export function disButt(){
    document.getElementById("BAlert").disabled = true;
}


export function enaButt(){
    document.getElementById("BAlert").disabled = false;

}

export function alertOn(){
    disButt();
    document.getElementById("dAlert").show();
}
export function alertOff(){
    enaButt();
    document.getElementById("dAlert").close();
}

document.getElementById("BAlert").addEventListener("click", alertOn);
document.getElementById("BAlert").addEventListener("click", alertOff);