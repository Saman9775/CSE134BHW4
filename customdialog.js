export function alertOn(){
   button_OFF();
    document.getElementById("dAlert").show();
}

document.getElementById("BAlert").addEventListener("click", alertOn);

export function alertOff(){
    button_ON() ;
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
    let confirm_state;
    button_ON();
    confirm_state = true;
    document.getElementById("dConfirm").close();
    document.getElementById("confirmOut").innerHTML = `Confirm result: ${confirm_state}`;
    document.getElementById("confirmOut").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("confirmBut2").addEventListener("click", true_conformOff);

export function false_conformOff(){
    let confirm_state;
    button_ON();
    confirm_state = false;
    document.getElementById("dConfirm").close();
    document.getElementById("confirmOut").innerHTML = `Confirm result: ${confirm_state}`;
    document.getElementById("confirmOut").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("confirmBut1").addEventListener("click", false_conformOff);

export function prompt_open(){
    button_OFF();
    document.getElementById("dPrompt").show();
}

document.getElementById("Bprompt").addEventListener("click", prompt_open);


export function prompt_closeByOk(){
    let prompt_val;
    button_ON();
    document.getElementById("dPrompt").close();
    prompt_val = document.getElementById("pmt").value;

    if(prompt_val != null && prompt_val != ""){

        document.getElementById("promptOut").innerHTML = `Prompt result: ${prompt_val}`;
    }

    else {

        document.getElementById("promptOut").innerHTML = "User didn't enter anything";
    }
    document.getElementById("promptOut").style.display = "initial";
    document.getElementById("confirmOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("promptBut2").addEventListener("click", prompt_closeByOk);

export function prompt_closeByCancel(){
    button_ON();
    document.getElementById("dPrompt").close();
    document.getElementById("promptOut").innerHTML = "User didn't enter anything";
    document.getElementById("promptOut").style.display = "initial";
    document.getElementById("confirmOut").style.display = "none";
    document.getElementById("safeP_Out").style.display = "none";
}

document.getElementById("promptBut1").addEventListener("click", prompt_closeByCancel);

export function safe_open(){
    button_OFF();
    document.getElementById("safePrompt").show();
}

document.getElementById("BSafer").addEventListener("click", safe_open);

export function safe_closeByOk(){
    let val;
    let safe_val;
    button_ON();
    document.getElementById("safePrompt").close();
    val = document.getElementById("sfe").value;
    safe_val = DOMPurify.sanitize(val);
    if(safe_val != null && safe_val != ""){

        document.getElementById("safeP_Out").innerHTML = `Prompt result: ${safe_val}`;
    }

    else {

        document.getElementById("safeP_Out").innerHTML = "User didn't enter anything";
    }
    
    document.getElementById("safeP_Out").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("confirmOut").style.display = "none";
}

document.getElementById("safeBut2").addEventListener("click", safe_closeByOk);

export function safe_closeByCancel(){
    button_ON();
    document.getElementById("safePrompt").close();
    document.getElementById("safeP_Out").innerHTML = "User didn't enter anything";
    document.getElementById("safeP_Out").style.display = "initial";
    document.getElementById("promptOut").style.display = "none";
    document.getElementById("confirmOut").style.display = "none";
}

document.getElementById("safeBut1").addEventListener("click", safe_closeByCancel);