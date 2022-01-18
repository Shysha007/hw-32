`use strict`

const elemUl = document.querySelector('ul');
const elemLi = document.querySelectorAll('li');
const attrs = document.querySelector('ul').getAttributeNames();
console.log(attrs);

let arrAttr = [];

for (let i of attrs) {
    let valueAttr = elemUl.getAttribute(i);
    arrAttr.push(valueAttr);
}

console.log(arrAttr);

elemLi[elemLi.length - 1].textContent = (`Привет, меня зовут` + ` Оля`);
elemLi[0].setAttribute(`data-my-name`, `Olga`);
elemUl.removeAttribute(`data-dog-tail`);

function generateList(array) {
    let ul = document.createElement('ul');
    document.body.append(ul);

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        Array.isArray(array[i]) ? li.append(generateList(array[i])) : li.append(document.createTextNode(array[i]));
        
        ul.append(li);
    }

    return ul;
}
console.log(generateList([1, 2, 3]));
console.log(generateList([1, 2, [1.1, 1.2, 1.3], 3]));

const table = document.getElementById('table');

    function generateTable(row, cols) {
        let num = 0;

        for(let i = 0; i < row; i++) {
            const tr = document.createElement('tr');

            for(let c = 1; c <= cols; c++) {
                ++num
                const td = document.createElement('td');
                td.innerHTML = num;
                tr.append(td)

            }

            table.append(tr)
        }


    }
    generateTable(10, 10)


