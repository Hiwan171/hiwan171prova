const ul = document.querySelector('ul1');

const input = document.querySelector('inp1')

const button = document.querySelector('btn1')



button.onclick = function() {


    let item = input.value;


    input.value = ' ';


    const li = document.createElement('li');

    const span = document.createElement('span');

    const button1 = document.createElement('button');




    li.appendChild(button1);

    li.appendChild(span);


    span.textContent = item

    button1.textContent = 'Excluir'


    ul.appendChild(li)










    input.focus()






}