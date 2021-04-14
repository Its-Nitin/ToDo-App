let inputdata = document.querySelector('#todoInput');
let todoButton = document.querySelector('#addTodo');
let list = document.querySelector('#list')
let ele = document.getElementsByTagName('li');

todoButton.addEventListener('click', function(){
    let txt = inputdata.value;
    if(txt === ""){

        alert('you must add something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        inputdata.value = '';
    }
})

// function that allow us to mark the completed tasks
list.addEventListener('click', e =>{
    e.target.classList.toggle('checked');
})
