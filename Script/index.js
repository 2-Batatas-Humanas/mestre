charactersNum = 0;

function addCharacter(){
    let div = document.querySelector("#charactersSpace");

    let characterDiv = document.createElement("div");
    characterDiv.id = "characterDiv" + charactersNum;

    let label = document.createElement("label");
    label.innerHTML = "Coloque as informações do " + (charactersNum + 1) + "º personagem: ";
    label.id = "characterLabel" + charactersNum;
    label.for = "character" + charactersNum;
    characterDiv.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.id = "character" + charactersNum;
    characterDiv.appendChild(input);

    div.appendChild(characterDiv);

    charactersNum++;
}

function removeCharacter(){
    let div = document.querySelector("#charactersSpace");
    let characterDiv = document.querySelector("#characterDiv" + (charactersNum - 1));
    if(characterDiv){
        div.removeChild(characterDiv);
        charactersNum--;
    }
}

function loadCharacters(){
    for(let i = 0; i < charactersNum; i++){
        let input = document.querySelector("#character" + i);
        if(!input){
            alert("Coloque as informações de todos os personagens ou remova alguns");
            return
        }
        localStorage.setItem("character" + i, input.value);
    }
    localStorage.setItem("numberOfCharacters", charactersNum);
    window.location.href = "characters.html";
}