// Emptying div:
function emptyDiv(divId){
    var div = document.querySelector("#" + divId);
    div.innerHTML = "";
}

// Adding to HTML elements:
function addPToDiv(divId, pText = ""){
    var div = document.querySelector("#" + divId);
    var p = document.createElement("p");
    p.innerHTML = pText;
    div.appendChild(p);
}

function addBrToDiv(divId, howMany = 2){
    var div = document.querySelector("#" + divId);
    for(var i = 0; i < howMany; i++){
        div.innerHTML += "<br>";
    }
}

// Showing attributes:
function showAttributes(divId, strength, agility, intelligence, will){
    var div = document.querySelector("#" + divId);

    var p1 = document.createElement("p");
    p1.id = "strength";
    p1.innerHTML = "Força: " + strength;

    var p2 = document.createElement("p");
    p2.id = "agility";
    p2.innerHTML = "Agilidade: " + agility;

    var p3 = document.createElement("p");
    p3.id = "intelligence";
    p3.innerHTML = "Intelecto: " + intelligence;

    var p4 = document.createElement("p");
    p4.id = "will";
    p4.innerHTML = "Vontade: " + will;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
}

function addImageToDiv(divId, src, width){
    let div = document.querySelector("#" + divId);
    let image = document.createElement("img");
    image.src = src;
    image.width = width;
    div.appendChild(image);
}

// Creating Input:

//Checkbox
function createCheckbox(divId, labelText, checkboxId){
    var div = document.querySelector("#" + divId);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    
    var label = document.createElement("label");
    label.for = checkboxId;
    label.innerHTML = labelText;

    div.appendChild(label);
    div.appendChild(checkbox);
}

//Textarea
function createTextareaInput(divId, labelText, textareaId, placeholder = null){
    var div = document.querySelector("#" + divId);

    var textarea = document.createElement("textarea");
    textarea.id = textareaId;
    if(placeholder){
        textarea.placeholder = placeholder;
    }

    var label = document.createElement("label");
    label.for = textareaId;
    label.innerHTML = labelText;

    div.appendChild(label);
    div.appendChild(textarea);
}

//Select+options
function createOptionsInput(divId, labelText, selectId, optionsList, optionsValuesList, oninput = null){
    var div = document.querySelector("#" + divId);

    var select = document.createElement("select");
    select.id = selectId;
    if(oninput){
        select.setAttribute("oninput", oninput);
    }

    var label = document.createElement("label");
    label.for = selectId;
    label.innerHTML = labelText;

    var option;
    for(var i = 0; i < optionsList.length; i++){
        option = document.createElement("option");
        option.innerHTML = optionsList[i];
        option.value = optionsValuesList[i];
        select.appendChild(option);
    }
    div.appendChild(label);
    div.appendChild(select);
}

//Select+options+button
function createOptionsInputWithButton(divId, labelText, selectId, optionsList, optionsValuesList, onclick, buttonLabel = null, oninput = null){
    createOptionsInput(divId, labelText, selectId, optionsList, optionsValuesList, oninput);
    var div = document.querySelector("#" + divId);

    var button = document.createElement("button");
    button.setAttribute("onclick", onclick);
    if(buttonLabel){
        button.innerHTML = buttonLabel;
    } else{
        button.innerHTML = "Ok";
    }

    div.appendChild(button);
}

//Other inputs
function createNewInput(divId, labelText, inputId, type, placeholder = null, value = null, min = null, max = null, step = null){
    var div = document.querySelector("#" + divId);

    var input = document.createElement("input");
    input.id = inputId;
    input.type = type;
    if(placeholder){
        input.placeholder = placeholder;
    }
    if(value){
        input.value = value;
    }
    if(min){
        input.min = min;
    }
    if(max){
        input.max = max;
    }
    if(step){
        input.step = step;
    }
    var label = document.createElement("label");
    label.for = inputId;
    label.innerHTML = labelText;

    div.appendChild(label);
    div.appendChild(input);
}

//Button
function createButton(divId, text, onclick){
    let div = document.querySelector("#" + divId);

    let button = document.createElement("button");
    button.innerHTML = text;
    button.onclick = onclick;

    div.appendChild(button);
}

// Lists:
function createHtmlList(appendId, listId, liList, ordered = false){
    let space = document.querySelector("#" + appendId);

    let newList;
    if(ordered) newList = document.createElement("ol");
    else newList = document.createElement("ul");
    newList.id = listId;

    for(let i = 0; i < liList.length; i++){
        let li = document.createElement("li");
        li.innerHTML = liList[i];
        newList.appendChild(li);
    }
    
    space.appendChild(newList);
}

function appendLiElement(appendId, text){
    let container = document.querySelector("#" + appendId);

    let li = document.createElement("li");
    li.innerHTML = text;
    container.appendChild(li);
}

// Deep Copy:
function deepCopy(obj){
    if(obj === null) return null;
    if(typeof obj !== "object") return obj;
    
    if(Array.isArray(obj)){
        const newArray = [];
        for(let i = 0; i < obj.length; i++){
            if(typeof obj[i] === "object"){
                newArray[i] = deepCopy(obj[i]);
            } else{
                newArray[i] = obj[i];
            }
        }
        return newArray;
    }

    const newObj = {};
    const objKeys = Object.keys(obj);
    objKeys.forEach(function(key){ 
        if(typeof obj[key] === "object"){
            newObj[key] = deepCopy(obj[key]);
        } else{
            newObj[key] = obj[key];
        }
    });
    return newObj;
}

// Check if object is empty:
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}