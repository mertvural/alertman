/*
author - Mert Vural - Front End Developer
version : 0.1
*/

"use strict";

var alertArray = [];

function alertman(status, description, icon) {

     alertArray = [
        {
            status: "error",
            description: "Bir hata ile karşılaşıldı",
            icon: `
            <div class="f-modal-alert">
            <div class="f-modal-icon f-modal-error animate">
                <span class="f-modal-x-mark">
                    <span class="f-modal-line f-modal-left animateXLeft"></span>
                    <span class="f-modal-line f-modal-right animateXRight"></span>
                </span>
                <div class="f-modal-placeholder"></div>
                <div class="f-modal-fix"></div>
            </div>
            </div>
            `
        },
        {
            status: "success",
            description: "Her şey yolunda!",
            icon: `
            <div class="f-modal-alert">
            <div class="f-modal-icon f-modal-success animate">
                <span class="f-modal-line f-modal-tip animateSuccessTip"></span>
                <span class="f-modal-line f-modal-long animateSuccessLong"></span>
                <div class="f-modal-placeholder"></div>
                <div class="f-modal-fix"></div>
            </div>
            </div>
            `
        },
        {
            status: "info",
            description: "Bilgi veriyorum",
            icon: `
            <div class="f-modal-alert">
            <div class="f-modal-icon f-modal-warning scaleWarning">
                <span class="f-modal-body pulseWarningIns"></span>
                <span class="f-modal-dot pulseWarningIns"></span>
            </div>
            </div>
            `
        }
    ]


    switch (status) {
        case "error":                      
            getProperty(status, description);        
            break;
        case "success":
            getProperty(status, description);
            break;
            case "info":
            getProperty(status, description);
            break;
        default:
       
    }

}

function getProperty(status, description) {
        
    var newPropertys = alertArray.filter((st) => {return st.status === status});
 
    !!description ? newPropertys[0].description = description : newPropertys[0].description = newPropertys[0].description
        
    htmlGeneration(newPropertys);

}

function htmlGeneration(props) {
    var props = props[0];
    var closeModal = document.createElement("span");
    var wrapperDiv = document.createElement("div");
    var alertmanDiv = document.createElement("div");
    var iconDiv = document.createElement("p");
    iconDiv.setAttribute("class","icon")
    closeModal.setAttribute("id","closeModal");
    closeModal.setAttribute("onclick","removePopup('alertman-wrapper', 'alertman')");
    var descDiv = document.createElement("p");  
    descDiv.setAttribute("class","description")
    alertmanDiv.setAttribute("id","alertman");
    wrapperDiv.setAttribute("id", "alertman-wrapper");
    setTimeout(() => {
        alertmanDiv.setAttribute("class","show");
    }, 1);      
    iconDiv.innerHTML = props.icon;
    descDiv.innerHTML = props.description;
    alertmanDiv.appendChild(iconDiv)
    alertmanDiv.appendChild(descDiv)
    alertmanDiv.appendChild(closeModal)
    wrapperDiv.appendChild(alertmanDiv)   
    document.body.appendChild(wrapperDiv);
}

function removePopup(target1, target2) {
    document.getElementById(target2).classList.remove("show");
    setTimeout(() => {
        document.getElementById(target1).remove();
    }, 500);
}


