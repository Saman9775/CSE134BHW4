export function alertOn(){
   button_OFF();
    document.getElementById("dAlert").show();
}

document.getElementById("BAlert").addEventListener("click", alertOn);

export function alertOff(){
    button_ON();
    document.getElementById("dAlert").close();
}

document.getElementById("alertBut").addEventListener("click", alertOff);


/**
 * When we display the dialog, then we need to disable the dialog.
 * What I mean is that we need to have a method for displaying the dialog box and then disable it
 */
 
 export function button_ON(){
    document.getElementById("BAlert").disabled = false;
    document.getElementById("BConfirm").disabled = false;
    document.getElementById("Bprompt").disabled = false;
    document.getElementById("BSafer").disabled = false;
}

export function button_OFF(){
    document.getElementById("BAlert").disabled = true;
    document.getElementById("BConfirm").disabled = true;
    document.getElementById("Bprompt").disabled = true;
    document.getElementById("BSafer").disabled = true;
}

