numCharacters = parseInt(localStorage.getItem("numberOfCharacters"));
if(numCharacters === 0){
    alert("Coloque pelo menos 1 personagem");
    window.location.href = "index.html";
}


currentCharacter = localStorage.getItem("currentCharacter");
if(!currentCharacter){
    localStorage.setItem("currentCharacter", 0);
    currentCharacter = 0;
}
character = getCharacter(JSON.parse(localStorage.getItem(("character" + currentCharacter))));

charactersNames = [];
charactersNumbers = [];
for(let i = 0; i < numCharacters; i++){
    try {
        if(i !== parseInt(currentCharacter)){
            charactersNames.push((JSON.parse(localStorage.getItem("character" + i))).name);
            charactersNumbers.push(i);
        }
    } catch(err) {
        console.log(err);
    }
}

function loadCharactersNames(){
    charactersNames.forEach(function(name, index){
        let namesDiv = document.querySelector("#charactersButtons");
        let nameButton = document.createElement("button");
        nameButton.innerHTML = name;
        nameButton.className = "nameButton";
        nameButton.setAttribute("onclick", `changeCharacter("${charactersNumbers[index]}")`);
        namesDiv.appendChild(nameButton);
    });
}

function changeCharacter(number){
    localStorage.setItem("currentCharacter", number);
    window.location.reload();
}


function loadCharacterData() {
    /*
        Loads all Character Data except the data "hidden" inside buttons
        - Logs character
        - Loads name, level, ancestry and paths(for top left div)
        - Loads insanity, corruption, power, defense, damage and healing rate(for top right div)
        - Computes actual character health by calling the function showHealth
        - Loads attributes and the remaining characteristics(for bottom right div)
        - Gets character image if it's in github; otherwise gets a ancestry default image
    */
    
    console.log(character);// Logs the Character Class Instance

    // Top left div data:
    let name = document.querySelector("#name");
    name.innerHTML = character.name;
    let level = document.querySelector("#level");
    level.innerHTML = character.level;

    // Ancestry
    let ancestry = document.querySelector("#ancestry");
    if(character instanceof Human){
        ancestry.innerHTML = "Humano";
    }
    else if(character instanceof Dwarf){
        ancestry.innerHTML = "Anão";
    }
    else if(character instanceof Clockwork){
        ancestry.innerHTML = "Autômato";
    }
    else if(character instanceof Changeling){
        ancestry.innerHTML = "Changeling";
    }
    else if(character instanceof Goblin){
        ancestry.innerHTML = "Goblin";
    }
    else if(character instanceof Orc){
        ancestry.innerHTML = "Orc";
    }
    else if(character instanceof Yerath){
        ancestry.innerHTML = "Yerath";
    }
    
    // Novice Path
    let novicePath = document.querySelector("#novicePath");
    if(character.novicePath instanceof Warrior){
        novicePath.innerHTML = "Guerreiro";
    }
    else if(character.novicePath instanceof Rogue){
        novicePath.innerHTML = "Ladino";
    }
    else if(character.novicePath instanceof Magician){
        novicePath.innerHTML = "Mágico";
    }
    else if(character.novicePath instanceof Priest){
        novicePath.innerHTML = "Sacerdote";
    }

    //Expert Path
    if(character.expertPath){
        let expertPath = document.querySelector("#expertPath");
        expertPath.innerHTML = character.expertPath.pathName;
    }
    //Master Path
    if(character.masterPath){
        let masterPath = document.querySelector("#masterPath");
        masterPath.innerHTML = character.masterPath.pathName;
    }

    // Top right div data:
    let insanity = document.querySelector("#insanity");
    insanity.value = character.insanity;
    let corruption = document.querySelector("#corruption");
    corruption.value = character.corruption;
    let power = document.querySelector("#power");
    power.value = character.power;
    let defense = document.querySelector("#defense");
    defense.value = character.defense;
    let damage = document.querySelector("#damage");
    damage.value = character.damage;
    let healingRate = document.querySelector("#healingRate");
    healingRate.value = character.healingRate;

    showHealth();// Function to Show character's actual health

    let strength = document.querySelector("#strength");
    strength.innerHTML += character.strength + "(";
    if(character.strength > 10){
        strength.innerHTML += "+" + (character.strength - 10) + ")";
    }
    else if(character.strength < 10){
        strength.innerHTML += (character.strength - 10) + ")";
    }
    else{
        strength.innerHTML += (character.strength - 10) + ")";
    }
    let agility = document.querySelector("#agility");
    agility.innerHTML += character.agility + "(";
    if(character.agility > 10){
        agility.innerHTML += "+" + (character.agility - 10) + ")";
    }
    else if(character.agility < 10){
        agility.innerHTML += (character.agility - 10) + ")";
    }
    else{
        agility.innerHTML += (character.agility - 10) + ")";
    }
    let intellect = document.querySelector("#intellect");
    intellect.innerHTML += character.intellect + "(";
    if(character.intellect > 10){
        intellect.innerHTML += "+" + (character.intellect - 10) + ")";
    }
    else if(character.intellect < 10){
        intellect.innerHTML += (character.intellect - 10) + ")";
    }
    else{
        intellect.innerHTML += (character.intellect - 10) + ")";
    }
    let will = document.querySelector("#will");
    will.innerHTML += character.will + "(";
    if(character.will > 10){
        will.innerHTML += "+" + (character.will - 10) + ")";
    }
    else if(character.will < 10){
        will.innerHTML += (character.will - 10) + ")";
    }
    else{
        will.innerHTML += (character.will - 10) + ")";
    }
    let perception = document.querySelector("#perception");
    perception.innerHTML += character.perception + "(";
    if(character.perception > 10){
        perception.innerHTML += "+" + (character.perception - 10) + ")";
    }
    else if(character.perception < 10){
        perception.innerHTML += (character.perception - 10) + ")";
    }
    else{
        perception.innerHTML += (character.perception - 10) + ")";
    }
    let size = document.querySelector("#size");
    if(character.size == 0.25){
        size.innerHTML += "1/4";
    }
    else if(character.size == 0.5){
        size.innerHTML += "1/2";
    }
    else{
        size.innerHTML += character.size;
    }
    let speed = document.querySelector("#speed");
    speed.innerHTML += character.speed;
    let health = document.querySelector("#health");
    health.innerHTML += character.health;

    let image = document.querySelector("#characterImage");

    switch(character.name){
        // Characters that have image inside github:
        case "Sucata":
            image.src = "Images/sucata.jpeg";
            break;
        case "Kaigara":
            image.src = "Images/kaigara.jpeg";
            break;
        case "Kida":
            image.src = "Images/kida.jpeg";
            break;
        case "Aitusa":
            image.src = "Images/aitusa.jpeg";
            break;
        case "Heliodora":
            image.src = "Images/heliodora.jpeg";
            break;
        // Other Characters:
        default:
            if(character instanceof Human){
                image.src = "Images/humanoGenerico.jpg"
            } else if(character instanceof Dwarf){
                image.src = "Images/anaoGenerico.jpg"
            } else if(character instanceof Clockwork){
                image.src = "Images/automatoGenerico.jpg"
            } else if(character instanceof Changeling){
                image.src = "Images/changelingGenerico.jpg"
            } else if(character instanceof Goblin){
                image.src = "Images/goblinGenerico.jpg"
            } else if(character instanceof Orc){
                image.src = "Images/orcGenerico.jpg"
            } else if(character instanceof Yerath){
                image.src = "Images/yerathGenerico.png"
            } else{
                image.src = "Images/desconhecido.jpg"
            }
    }
}

function loadInfo(){
    /*
        Loads info(Informações Gerais) when the "Informações Gerais" button is clicked
        - Checks if info is already open(infoDiv.innerHTML != ""); if so, closes it(infoDiv.innerHTML = "")
        - If it's closed(infoDiv.innerHTML == ""), then loads all info from character, including ancestry specific data and path training data
    */
    let infoDiv = document.querySelector("#info");// Info div, below "Informações Gerais" button
    if(infoDiv.innerHTML == ""){// If info div is empty
        // Loads some info:
        let age = document.createElement("p");
        age.innerHTML = "Idade: " + character.age;
        infoDiv.appendChild(age);
        let personality = document.createElement("p");
        personality.innerHTML = "Personalidade: " + character.personality;
        infoDiv.appendChild(personality);
        let religion = document.createElement("p");
        religion.innerHTML = "Religião: " + character.religion;
        infoDiv.appendChild(religion);
        let background = document.createElement("p");
        background.innerHTML = "Antecedente: " + character.background;
        infoDiv.appendChild(background);

        // For size, it's translated into a better format:
        let size = document.createElement("p");
        size.innerHTML = "Tamanho: ";
        if(character.size == 0.5){
            size.innerHTML += "1/2";
        } else if(character.size == 0.25){
            size.innerHTML += "1/4";
        }
        else {
            size.innerHTML += character.size;
        }
        infoDiv.appendChild(size);

        // Ancestry Specific Info:
        if(character instanceof Human){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
        }
        else if(character instanceof Dwarf){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
            let hatred = document.createElement("p");
            hatred.innerHTML = "Ódio Anão: " + character.hatred;
            infoDiv.appendChild(hatred);
        }
        else if(character instanceof Changeling){
            let apparentAncestry = document.createElement("p");
            apparentAncestry.innerHTML = "Ancestralidade Aparência: " + character.apparentAncestry;
            infoDiv.appendChild(apparentAncestry);
            let apparentAge = document.createElement("p");
            apparentAge.innerHTML = "Idade Aparente: " + character.apparentAge;
            infoDiv.appendChild(apparentAge);
            let apparentGender = document.createElement("p");
            apparentGender.innerHTML = "Gênero Aparente: " + character.apparentGender;
            infoDiv.appendChild(apparentGender);
            let apparentAppearence = document.createElement("p");
            apparentAppearence.innerHTML = "Aparência Aparente: " + character.apparentAppearence;
            infoDiv.appendChild(apparentAppearence);
            let apparentBuild = document.createElement("p");
            apparentBuild.innerHTML = "Estatura Aparente: " + character.apparentBuild;
            infoDiv.appendChild(apparentBuild);
            let quirk = document.createElement("p");
            quirk.innerHTML = "Peculiaridade: " + character.quirk;
            infoDiv.appendChild(quirk);
        }
        else if(character instanceof Clockwork){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let purpose = document.createElement("p");
            purpose.innerHTML = "Função: " + character.purpose;
            infoDiv.appendChild(purpose);
            let form = document.createElement("p");
            form.innerHTML = "Forma: " + character.form;
            infoDiv.appendChild(form);
        }
        else if(character instanceof Goblin){
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
            let oddHabit = document.createElement("p");
            oddHabit.innerHTML = "Hábito Estranho: " + character.oddHabit;
            infoDiv.appendChild(oddHabit);
            let distinctiveAppearance = document.createElement("p");
            distinctiveAppearance.innerHTML = "Aspecto Característico: " + character.distinctiveAppearance;
            infoDiv.appendChild(distinctiveAppearance);
        }
        else if(character instanceof Orc){
            let appearance = document.createElement("p");
            appearance.innerHTML = "Aparência: " + character.appearance;
            infoDiv.appendChild(appearance);
            let build = document.createElement("p");
            build.innerHTML = "Estatura: " + character.build;
            infoDiv.appendChild(build);
        }
        else if(character instanceof Yerath){
            let caste = document.createElement("p");
            caste.innerHTML = "Casta: " + character.caste;
            infoDiv.appendChild(caste);
        }

        // Professions(the array is simply turned into a string):
        let professions = document.createElement("p");
        professions.innerHTML = "Profissões: " + character.professions;
        infoDiv.appendChild(professions);

        // Languages(checks if language is speakable, readable and/or writable by the character; displays the information accordingly)
        let languages = document.createElement("p");
        languages.innerHTML = "Idiomas:";
        infoDiv.appendChild(languages);
        let languageList = document.createElement("ul");
        let langKeys = Object.keys(character.languages);
        langKeys.forEach(function(lang){
            let language = document.createElement("li");
            language.innerHTML = lang + "(";
            if(character.languages[lang].speakable){
                language.innerHTML += "falar";
            }
            if(character.languages[lang].readable || character.languages[lang].writable){
                if(character.languages[lang].readable){
                    language.innerHTML += ", ler";
                    if(character.languages[lang].writable){
                        language.innerHTML += ", escrever)";
                    } else{
                        language.innerHTML += ")";
                    }
                } else{
                    language.innerHTML += ", escrever)";

                }
            } else{
                language.innerHTML += ")";
            }
            languageList.appendChild(language);
        });
        infoDiv.appendChild(languageList);

        // Path trainings:
        let noviceTraining = document.createElement("p");// Novice Training
        noviceTraining.innerHTML = "Treinamento da trilha de aprendiz: " + character.novicePath.training;
        infoDiv.appendChild(noviceTraining);
        
        if(character.expertPath){// Expert Training
            let expertTraining = document.createElement("p");
            expertTraining.innerHTML = "Treinamento da trilha de especialista: " + character.expertPath.training;
            infoDiv.appendChild(expertTraining);
        }

        if(character.masterPath){// Master Training
            let masterTraining = document.createElement("p");
            masterTraining.innerHTML = "Treinamento da trilha de mestre: " + character.masterPath.training;
            infoDiv.appendChild(masterTraining);
        }

    } else{
        infoDiv.innerHTML = "";// Empties div
    }
}

function loadTalents(){
    /*
        Load character talents, separating them into 4 possible parts: ancestry, novice path, expert path and master path
        - Checks if talents div is already open(talents.innerHTML != ""); if so, closes it(talents.innerHTML = "")
        - If it's closed(talents.innerHTML == ""), then loads all character talents into unordered lists
    */
    let talents = document.querySelector("#talents");// The talents div
    if(talents.innerHTML == ""){// If talents is empty
        if(!isEmpty(character.talents.ancestry)){// Checks if there are any ancestry talents(humans have no ancestry talents)
            // Loads ancestry talents:
            let ancestryTalents = document.createElement("p");
            ancestryTalents.innerHTML = "Talentos de Ancestralidade:";
            talents.appendChild(ancestryTalents);
            let ancestryList = document.createElement("ul");
            let allAncestryTalents = Object.keys(character.talents.ancestry);
            allAncestryTalents.forEach(function(value){
                let ancestryTalent = document.createElement("li");
                ancestryTalent.innerHTML = value + ": " + character.talents.ancestry[value];
                ancestryList.appendChild(ancestryTalent);
            });
            ancestryTalents.appendChild(ancestryList);
        }
        // Loads novice path talents:
        let noviceTalents = document.createElement("p");
        noviceTalents.innerHTML = "Talentos de Trilha de Aprendiz:";
        let noviceList = document.createElement("ul");
        let allNoviceTalents = Object.keys(character.talents.novicePath);
        allNoviceTalents.forEach(function(value){
            let noviceTalent = document.createElement("li");
            noviceTalent.innerHTML = value + ": " + character.talents.novicePath[value];
            noviceList.appendChild(noviceTalent);
        });
        noviceTalents.appendChild(noviceList);
        talents.appendChild(noviceTalents);

        if(!isEmpty(character.talents.expertPath)){// Checks if character has any expert path talents
            // Loads expert path talents
            let expertTalents = document.createElement("p");
            expertTalents.innerHTML = "Talentos de Trilha de Especialista:";
            let expertList = document.createElement("ul");
            let allExpertTalents = Object.keys(character.talents.expertPath);
            allExpertTalents.forEach(function(value){
                let expertTalent = document.createElement("li");
                expertTalent.innerHTML = value + ": " + character.talents.expertPath[value];
                expertList.appendChild(expertTalent);
            });
            expertTalents.appendChild(expertList);
            talents.appendChild(expertTalents);
        }

        if(!isEmpty(character.talents.masterPath)){// Checks if character has any master path talents
            // Loads master path talents:
            let masterTalents = document.createElement("p");
            masterTalents.innerHTML = "Talentos de Trilha de Aprendiz:";
            let masterList = document.createElement("ul");
            let allMasterTalents = Object.keys(character.talents.masterPath);
            allMasterTalents.forEach(function(value){
                let masterTalent = document.createElement("li");
                masterTalent.innerHTML = value + ": " + character.talents.masterPath[value];
                masterList.appendChild(masterTalent);
            });
            masterTalents.appendChild(masterList);
            talents.appendChild(masterTalents);
        }
    } else{
        talents.innerHTML = "";// Empties talents div
    }
}

function loadEquipment(){
    /*
        Create equipment buttons(weapons, armors, ammo, items, animals, hirelings, money)
        - Checks if the div is empty, if so, creates the buttons
        - Else, it empties the div
        - At the end there's a button that moves the user to the market page
    */
    let equipments = document.querySelector("#equipments");// Equipments Div, below "Equipamentos" button
    if(equipments.innerHTML == ""){
        // Weapons:
        let weapons = document.createElement("button");
        weapons.innerHTML = "Armas";
        weapons.className = "itemCategory";
        weapons.onclick = loadWeapons;
        weaponsDiv = document.createElement("div");
        weaponsDiv.id = "weapons";
        equipments.appendChild(weapons);
        equipments.appendChild(weaponsDiv);

        // Armors:
        let armors = document.createElement("button");
        armors.innerHTML = "Armaduras";
        armors.className = "itemCategory";
        armors.onclick = loadArmors;
        armorsDiv = document.createElement("div");
        armorsDiv.id = "armors";
        equipments.appendChild(armors);
        equipments.appendChild(armorsDiv);

        if(!isEmpty(character.inventory.ammo)){// It's possible some characters don't have ammo, so it's checked
            // Ammo:
            let ammo = document.createElement("button");
            ammo.innerHTML = "Munição";
            ammo.className = "itemCategory";
            ammo.onclick = loadAmmo;
            ammoDiv = document.createElement("div");
            ammoDiv.id = "ammo";
            equipments.appendChild(ammo);
            equipments.appendChild(ammoDiv);
        }

        // Items:
        let items = document.createElement("button");
        items.innerHTML = "Itens";
        items.className = "itemCategory";
        items.onclick = loadItems;
        itemsDiv = document.createElement("div");
        itemsDiv.id = "items";
        equipments.appendChild(items);
        equipments.appendChild(itemsDiv);

        if(!isEmpty(character.inventory.animals)){// Checks if character has any animals
            // Animals:
            let animals = document.createElement("button");
            animals.innerHTML = "Animais";
            animals.className = "itemCategory";
            animals.onclick = loadAnimals;
            animalsDiv = document.createElement("div");
            animalsDiv.id = "animals";
            equipments.appendChild(animals);
            equipments.appendChild(animalsDiv);
        }

        if(!isEmpty(character.inventory.hirelings)){//Checks if character has any hirelings
            // Hirelings:
            let hirelings = document.createElement("button");
            hirelings.innerHTML = "Serviçais";
            hirelings.className = "itemCategory";
            hirelings.onclick = loadHirelings;
            hirelingsDiv = document.createElement("div");
            hirelingsDiv.id = "hirelings";
            equipments.appendChild(hirelings);
            equipments.appendChild(hirelingsDiv);
        }

        // Money:
        let money = document.createElement("button");
        money.innerHTML = "Dinheiro";
        money.className = "itemCategory";
        money.onclick = loadMoney;
        moneyDiv = document.createElement("div");
        moneyDiv.id = "money";
        equipments.appendChild(money);
        equipments.appendChild(moneyDiv);
        
        // To the market button:
        /*let market = document.createElement("button");
        market.innerText = "Ir para o Mercado";
        market.className = "market";
        market.onclick = function(){
            window.location.href = "market.html";
        }
        equipments.appendChild(market);*/
    } else{
        equipments.innerHTML = "";// Empties Equipments Div
    }
}

function loadWeapons(){
    /*
        Load Character Weapons and all their characteristics in a unordered list
        - Checks if the weapons is empty or not; if it's not empty, empties it
        - If it's empty, display character weapons and its characteristics(type, damage, hands, properties)
        - The properties are layed into another unordered list
    */
    let weapons = document.querySelector("#weapons");// The weapons div, below the "Armas" button
    if(weapons.innerHTML == ""){// If weapons div is empty
        let keys = Object.keys(character.inventory.weapons);// Gets all weapons names from inventory.weapons object and stores it in an array named keys
        keys.forEach(function(value){// For each weapon(value) in keys array
            let name = document.createElement("p");// Displays the weapon name
            name.innerHTML = value;
            if(character.inventory.weapons[value].quantity){ // If the weapon object has a quantity key:
                name.innerHTML += " x" + character.inventory.weapons[value].quantity;// Then display its value preceded by " x"
            }
            weapons.appendChild(name);

            let weaponList = document.createElement("ul");// List for the weapon characteristics

            // Type of weapon:
            let type = document.createElement("li");
            type.innerHTML = "Tipo: " + character.inventory.weapons[value].type;
            weaponList.appendChild(type);

            // Damage of the weapon:
            let damage = document.createElement("li");
            damage.innerHTML = "Dano: " + character.inventory.weapons[value].damage;
            weaponList.appendChild(damage);

            // How many hands are required to handle the weapon:
            let hands = document.createElement("li");
            hands.innerHTML = "Mãos: " + character.inventory.weapons[value].hands;
            weaponList.appendChild(hands);

            // Weapon properties
            let properties = document.createElement("li");
            properties.innerHTML = "Propriedades:";
            weaponList.appendChild(properties);
            let propertiesList = document.createElement("ul");// Creates a ul for storing every single property
            for(let i = 0; i < character.inventory.weapons[value].properties.length; i++){// For each property:
                // Display it inside the list:
                let property = document.createElement("li");
                property.innerHTML = character.inventory.weapons[value].properties[i];
                propertiesList.appendChild(property);
            }
            weaponList.appendChild(propertiesList);
            weapons.appendChild(weaponList);
        });
    } else{
        weapons.innerHTML = "";// Empties the weapons div
    }
}

function loadArmors(){
    /*
        Load Character Armors and their characteristics(type, defense, description)
        - If div is empty, put armors and their characteristics in an unordered list
        - Else, the div is emptied
        - Description is hidden inside another button that triggers loadArmorDesc function
    */
    let armors = document.querySelector("#armors");// Getting the armors div
    if(armors.innerHTML == ""){// If div is empty
        let keys = Object.keys(character.inventory.armors);// Getting all armors names from character
        let armorNum = 0;// Just a number to match every armor to its description
        keys.forEach(function(value){
            // Armor name:
            let name = document.createElement("p");
            name.innerHTML = value;
            armors.appendChild(name);

            let armorList = document.createElement("ul");// List for armor characteristics

            // Armor Type:
            let type = document.createElement("li");
            type.innerHTML = "Tipo: " + character.inventory.armors[value].type;
            armorList.appendChild(type);

            // Armor Defense:
            let defense = document.createElement("li");
            defense.innerHTML = "Defesa: " + character.inventory.armors[value].defense;
            armorList.appendChild(defense);

            // Armor Description:
            let description = document.createElement("li");
            let descButton = document.createElement("button");// Creating the button
            descButton.innerHTML = "Descrição";
            descButton.className = "description";// This class will change it's color so its distinguable from other buttons
            let descSpan = document.createElement("span");// A span that will contain the armor description
            descSpan.id = "armorSpan" + armorNum;
            descButton.setAttribute("onclick", `loadArmorDesc(${armorNum}, "${value}")`);
            description.appendChild(descButton);
            armorList.appendChild(description);
            armorList.appendChild(descSpan);

            armors.appendChild(armorList);
            armorNum++;
        });
    } else{
        armors.innerHTML = "";// Empties div
    }
}

function loadArmorDesc(armorNum, name){
    /*
        Load Armor Description
        - Receives armor's number so it can locate the armor span and armor's name so it can get it's description
        - Checks if span is empty; if so, displays the armor description
        - Else, empties it
    */
    let descSpan = document.querySelector("#armorSpan" + armorNum);// The armor span
    if(descSpan.innerHTML == ""){// If span is empty
        descSpan.innerHTML = character.inventory.armors[name].description;// Sets the description inside it
    } else{
        descSpan.innerHTML = "";// Empties span
    }
}

function loadAmmo(){
    let ammo = document.querySelector("#ammo");
    if(ammo.innerHTML == ""){
        let keys = Object.keys(character.inventory.ammo);
        keys.forEach(function(value){
            let ammunition = document.createElement("p");
            ammunition.innerHTML = value + ": " + character.inventory.ammo[value].quantity;
            ammo.appendChild(ammunition);
        })
    } else{
        ammo.innerHTML = "";
    }
}

function loadItems(){
    let items = document.querySelector("#items");
    if(items.innerHTML == ""){
        let keys = Object.keys(character.inventory.items);
        let itemNum = 0;
        keys.forEach(function(value){
            let name = document.createElement("p");
            name.innerHTML = value;
            if(character.inventory.items[value].quantity){
                name.innerHTML += " x" + character.inventory.items[value].quantity;
            }

            if(character.inventory.items[value].description){
                let descriptionButton = document.createElement("button");
                descriptionButton.innerHTML = "Descrição";
                descriptionButton.className = "description";
                descriptionButton.setAttribute("onclick", `loadItemDesc(${itemNum}, "${value}")`);
                name.appendChild(descriptionButton);
            }
            items.appendChild(name);
            
            let descriptionDiv = document.createElement("div");
            descriptionDiv.id = "description" + itemNum;
            items.appendChild(descriptionDiv);

            itemNum++;
        });
    } else{
        items.innerHTML = "";
    }
}

function loadItemDesc(itemNum, name){
    let descDiv = document.querySelector("#description" + itemNum);
    if(descDiv.innerHTML == ""){
        let desc = document.createElement("p");
        desc.innerHTML = character.inventory.items[name].description;
        descDiv.appendChild(desc);
    } else{
        descDiv.innerHTML = "";
    }
}

function loadAnimals(){
    alert("Não está pronto ainda. Desculpe");
}

function loadHirelings(){
    alert("Não está pronto ainda. Desculpe");
}

function loadMoney(){
    let money = document.querySelector("#money");
    if(money.innerHTML == ""){
        let modifyImage = document.createElement("img");
        modifyImage.src = "Images/edit.png";
        modifyImage.width = 20;
        modifyImage.title = "Editar dinheiro";
        modifyImage.onclick = modifyMoney;
        money.appendChild(modifyImage);
        let bits = document.createElement("p");
        bits.innerHTML = "Milavos(MA): " + character.inventory.money.bits;
        money.appendChild(bits);
        let copperPennies = document.createElement("p");
        copperPennies.innerHTML = "Centavos de Cobre(CC): " + character.inventory.money.copperPennies;
        money.appendChild(copperPennies);
        let silverShillings = document.createElement("p");
        silverShillings.innerHTML = "Xelins de Prata(XP): " + character.inventory.money.silverShillings;
        money.appendChild(silverShillings);
        let goldCrowns = document.createElement("p");
        goldCrowns.innerHTML = "Coroas de Ouro(CO): " + character.inventory.money.goldCrowns;
        money.appendChild(goldCrowns);
    } else{
        money.innerHTML = "";
    }
}

function modifyMoney(){
    /* Modifies the character current money
    - Changes the money div: each coin gets a label and an input
    - Ok button calls the changeMoney function
    - Puts character current money to default value of input
    */
    let moneyDiv = document.querySelector("#money");// Money div, under money button
    moneyDiv.innerHTML = "";// Empties div before creating labels and input

    // Creating label and input for bits:
    let bits = document.createElement("label");
    bits.innerHTML = "Milavos(MA): ";
    moneyDiv.appendChild(bits);

    let bitsInput = document.createElement("input");
    bitsInput.id = "bitsInput";
    bitsInput.type = "number";
    moneyDiv.appendChild(bitsInput);

    moneyDiv.innerHTML += "<br>";// Breaking the line so all labels and input don't stick together 

    // Creating label and input for copper pennies
    let copperPennies = document.createElement("label");
    copperPennies.innerHTML = "Centavos de Cobre(CC): ";
    moneyDiv.appendChild(copperPennies);

    let copperPenniesInput = document.createElement("input");
    copperPenniesInput.id = "copperPenniesInput";
    copperPenniesInput.type = "number";
    moneyDiv.appendChild(copperPenniesInput);
    
    moneyDiv.innerHTML += "<br>";// Breaking the line so all labels and input don't stick together

    // Creating label and input for silver shillings
    let silverShillings = document.createElement("label");
    silverShillings.innerHTML = "Xelins de Prata(XP): ";
    moneyDiv.appendChild(silverShillings);

    let silverShillingsInput = document.createElement("input");
    silverShillingsInput.id = "silverShillingsInput";
    silverShillingsInput.type = "number";
    moneyDiv.appendChild(silverShillingsInput);

    moneyDiv.innerHTML += "<br>";// Breaking the line so all labels and input don't stick together

    // Creating label and input for gold crowns
    let goldCrowns = document.createElement("label");
    goldCrowns.innerHTML = "Coroas de Ouro(CO): ";
    moneyDiv.appendChild(goldCrowns);

    let goldCrownsInput = document.createElement("input");
    goldCrownsInput.id = "goldCrownsInput";
    goldCrownsInput.type = "number";
    moneyDiv.appendChild(goldCrownsInput);

    moneyDiv.innerHTML += "<br>";// Breaking the line so button gets its own line

    // Creating the Ok button:
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Ok";
    submitButton.onclick = changeMoney;// Calls the function changeMoney onclick
    moneyDiv.appendChild(submitButton);

    // Putting the character current money to default value to input:
    bitsInput = document.querySelector("#bitsInput");
    bitsInput.value = character.inventory.money.bits;

    copperPenniesInput = document.querySelector("#copperPenniesInput");
    copperPenniesInput.value = character.inventory.money.copperPennies;

    silverShillingsInput = document.querySelector("#silverShillingsInput");
    silverShillingsInput.value = character.inventory.money.silverShillings;

    goldCrownsInput = document.querySelector("#goldCrownsInput");
    goldCrownsInput.value = character.inventory.money.goldCrowns;
}

function changeMoney(){
    /* Actually changes the character money and returns div to normal state
    - Change character money
    - Empties div(so loadMoney works correctly)
    - Calls loadMoney function 
    */
    let moneyDiv = document.querySelector("#money");// Money Div, under money button

    // Changing character money:
    character.inventory.money.bits = document.querySelector("#bitsInput").value;
    character.inventory.money.copperPennies = document.querySelector("#copperPenniesInput").value;
    character.inventory.money.silverShillings = document.querySelector("#silverShillingsInput").value;
    character.inventory.money.goldCrowns = document.querySelector("#goldCrownsInput").value;

    moneyDiv.innerHTML = "";// Emptying money div

    loadMoney();// Calling loadMoney function
}

function loadSpells(){
    let spells = document.querySelector("#spells");
    if(isEmpty(character.traditions)){
        alert("O seu personagem não tem magias");
        return
    }
    if(spells.innerHTML == ""){
        let keys = Object.keys(character.traditions);
        keys.forEach(function(trad){
            let tradButton = document.createElement("button");
            tradButton.className = "tradition";
            tradButton.innerHTML = trad;
            tradButton.setAttribute("onclick", `loadTradition("${trad}")`);
            spells.appendChild(tradButton);
            let tradDiv = document.createElement("div");
            tradDiv.id = traditions[trad].id;
            spells.appendChild(tradDiv);
        });
        let restoreUses = document.createElement("button");
        restoreUses.innerHTML = "Restaurar usos de todas as magias";
        restoreUses.className = "restoreUsesButton";
        restoreUses.onclick = restoreAllUses;
        spells.appendChild(restoreUses);
        /*let spellPage = document.createElement("button");
        spellPage.innerHTML = "Alterar ou escolher novas magias";
        spellPage.className = "spellPage";
        spellPage.onclick = function(){
            window.location.href = "spells.html";
        };
        spells.appendChild(spellPage);*/
    } else{
        spells.innerHTML = "";
    }
}

function loadTradition(trad){
    let tradition = document.querySelector("#" + traditions[trad].id);
    if(tradition.innerHTML == ""){
        character.traditions[trad].forEach(function(spell){
            let spellButton = document.createElement("button");
            spellButton.innerHTML = spell;
            spellButton.className = "spell";
            spellButton.setAttribute("onclick", `loadSpell("${trad}", "${spell}")`);
            tradition.appendChild(spellButton);
            let spellDiv = document.createElement("div");
            spellDiv.id = traditions[trad].id + traditions[trad].spells[spell].id;
            tradition.appendChild(spellDiv);
        });
    } else{
        tradition.innerHTML = "";
    }
}

const addToDiv = function(att, name, spellObj, id){
    if(spellObj[att] || spellObj[att] === 0){
        addPToDiv(id, name + ": " + spellObj[att]);
    }
}

const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];

function loadSpell(trad, spell){
    let id = traditions[trad].id + traditions[trad].spells[spell].id;
    let spellDiv = document.querySelector("#" + id);
    if(spellDiv.innerHTML == ""){
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], traditions[trad].spells[spell], id);
        }
        addPToDiv(id, "Máximo de usos: " + Spell.getMaxUses(character.power, traditions[trad].spells[spell].level));
        let remainingUses = document.createElement("p");
        remainingUses.innerHTML = "Usos Restantes: " + (Spell.getMaxUses(character.power, traditions[trad].spells[spell].level) - character.magicUses[spell]);
        remainingUses.id = "remainingUses" + traditions[trad].id + traditions[trad].spells[spell].id;
        spellDiv.appendChild(remainingUses);
        let useButton = document.createElement("button");
        useButton.innerHTML = "Usar magia";
        useButton.className = "useButton";
        useButton.setAttribute("onclick", `useSpell("${trad}", "${spell}")`);
        spellDiv.appendChild(useButton);
        let restoreUsesButton = document.createElement("button");
        restoreUsesButton.innerHTML = "Restaurar Usos";
        restoreUsesButton.className = "restoreUsesButton";
        restoreUsesButton.setAttribute("onclick", `restoreUsesSpell("${trad}", "${spell}")`);
        spellDiv.appendChild(restoreUsesButton);
    } else{
        spellDiv.innerHTML = "";
    }
}

function useSpell(trad, spell){
    if(character.magicUses[spell] < Spell.getMaxUses(character.power, traditions[trad].spells[spell].level)){
        character.useSpell(spell);
        let remainingUses = document.querySelector("#remainingUses" + traditions[trad].id + traditions[trad].spells[spell].id);
        remainingUses.innerHTML = "Usos Restantes: " + (Spell.getMaxUses(character.power, traditions[trad].spells[spell].level) - character.magicUses[spell]);
    } else{
        alert("Você não tem mais usos dessa magia. Use o botão Restaurar Usos");
    }
}

function restoreUsesSpell(trad, spell){
    character.restoreUsesSpell(spell);
    let remainingUses = document.querySelector("#remainingUses" + traditions[trad].id + traditions[trad].spells[spell].id);
    remainingUses.innerHTML = "Usos Restantes: " + (Spell.getMaxUses(character.power, traditions[trad].spells[spell].level) - character.magicUses[spell]);
}

function restoreAllUses(){
    let spells = Object.keys(character.magicUses);
    spells.forEach(function(spell){
        character.restoreUsesSpell(spell);
    });
    let trads = Object.keys(character.traditions);
    trads.forEach(function(trad){
        character.traditions[trad].forEach(function(spell){
            let remainingUses = document.querySelector("#remainingUses" + traditions[trad].id + traditions[trad].spells[spell].id);
            if(remainingUses){
                remainingUses.innerHTML = "Usos Restantes: " + (Spell.getMaxUses(character.power, traditions[trad].spells[spell].level) - character.magicUses[spell]);
            }
        });
    })

}

// Changing Characteristics Values:

function changeInsanity(insanity){
    character.insanity = parseInt(insanity);
}

function changeCorruption(corruption){
    character.corruption = parseInt(corruption);
}

function changeDefense(defense){
    character.defense = parseInt(defense);
}

function changeDamage(damage){
    if(parseInt(damage) <= character.health){
        character.damage = parseInt(damage);
        showHealth();
    } else{
        let damage = document.querySelector("#damage");
        damage.value = character.damage;
    }
}

// Showing character actual health(health - damage)

function showHealth(){
    let healthNow = document.querySelector("#healthNow");
    let numberHealthNow = document.querySelector("#numberHealthNow");
    healthNow.low = character.health/5;
    healthNow.high = character.health/2 + 1;
    healthNow.optimum = character.health;
    healthNow.max = character.health;
    healthNow.value = character.health - character.damage;
    numberHealthNow.innerHTML = character.health - character.damage;
}

// Adding Level:

function addLevel(){
    switch(character.level){
        case 1:
            //window.location.href = "level2.html";
            break;
        case 2:
            //window.location.href = "level3.html";
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
    }
}

// Saving changes to character before it leaves the page:

onbeforeunload = function(){
    localStorage.setItem("character" + currentCharacter, JSON.stringify(getCharacterObject(character)));
}