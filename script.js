
let generatedTagValue =document.getElementById("generated_tag-value");
let submitbtn =document.getElementById("submit_btn");
let ul =document.getElementById("genereated_tags");
let num_of_generated_tags=0;
let clearAllButtonAdded = false ;
let clearAll = document.createElement('button');

const ul_container = document.getElementById("ul_container");



const generateRandomClolor = (max , min) =>{
    let color = "rgb(";
    color += Math.floor(Math.random() * (max - min + 1) + min)+ ",";
    color += Math.floor(Math.random() * (max - min + 1) + min)+ ",";
    color += Math.floor(Math.random() * (max - min + 1) + min)+ ")";
    return color;
};


const remove_clear_all_btn = () =>{
    if(num_of_generated_tags===0){
        clearAll.remove();
        clearAllButtonAdded = false;
        ul_container.style.display = "none";
    }
};



const onSubmitHandler =() =>{
    
    let textInput = generatedTagValue.value;

    let li = document.createElement("li");

    let img = document.createElement("img");

    img.setAttribute('src', 'delete.svg');

    img.classList.add("svg");

    li.textContent=textInput;

    let remove_li =() =>{
        li.remove();
        --num_of_generated_tags;
    }
    img.addEventListener("click", remove_li);
    img.addEventListener("click", remove_clear_all_btn);

    li.style.backgroundColor = generateRandomClolor(0,255);

    li.appendChild(img);

    ul.appendChild(li);

    ul_container.style.display = "flex";

    generatedTagValue.value = "";
    generatedTagValue.placeholder = "Enter a new name";
    ++num_of_generated_tags;
};



    

const addClearAllButton = () =>{
    if (!clearAllButtonAdded){
        clearAll.innerHTML = 'clear All';
        clearAll.classList.add('clearAll');
    ul.insertAdjacentElement('afterend', clearAll);
    clearAllButtonAdded = true;
        const clearAllBtnClickHandler = () =>{
            ul.innerHTML="";
            clearAllButtonAdded = false;
            clearAll.remove();
            num_of_generated_tags=0;
            ul_container.style.display = "none";
        };
        clearAll.addEventListener("click" ,clearAllBtnClickHandler )
    }
};









submitbtn.addEventListener("click",onSubmitHandler);
submitbtn.addEventListener("click",addClearAllButton);

