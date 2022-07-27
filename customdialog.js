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
 * What I mean is that we need to have a method for displaying the dialog box 
 * and then disable it
 * The reason I decided to write these 2 function is that when we are working with 
 * 1 button, it's better for the rest to be disable
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

export function confirmOn(){
    button_OFF();
    document.getElementById("dConfirm").show();
}

document.getElementById("BConfirm").addEventListener("click",confirmOn);

export function true_conformOff(){
    button_ON();
    document.getElementById("dConfirm").close();
    document.getElementById("confirmOut").innerHTML = `Confirm result: true`;
    document.getElementById("confirmOut").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("confirmBut2").addEventListener("click", true_conformOff);

export function false_conformOff(){
    button_ON();
    document.getElementById("dConfirm").close();
    document.getElementById("confirmOut").innerHTML = `Confirm result: false`;
    document.getElementById("confirmOut").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("confirmBut1").addEventListener("click", false_conformOff);
