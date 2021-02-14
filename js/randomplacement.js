function getApi(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(req.status);
            }
        };
        req.open('GET', url, true);
        req.responseType = 'json';
        req.send();
    }); 
};

const btn = document.getElementById('secondbtn');
const block = document.getElementById('thirdmodal');
const btnStart = document.getElementById('gobtn2');
const urlOrders3 = './data/data.json';
const loader1 = document.getElementById('loader');
const firstModal1 = document.getElementById('firstmodal');
const tbodyElem1 = document.getElementById('tbodyelem');
const tableElem1 = document.getElementById('tableelem');

btn.onclick = () => {
    block.style.display = 'block';
    firstModal1.style.display = 'none';
}

btnStart.onclick = () => {
    block.style.display = 'none';
    loader1.style.display = 'block';

    init(urlOrders3);
}

function init(url) {
    getApi(url)
    .then( response => {
        objOrders = response;
        console.log(response);
        createText(response);
    });
}

function createText(resp) {
    for (let i = 0; i <= 10; i++) {
        let firstName = Math.round((Math.random() * 692));
        let secondName = Math.round((Math.random() * 601));
        let newPril = resp[firstName].Прилагательное[0].toUpperCase() + resp[firstName].Прилагательное.slice(1);
        console.log(newPril);
        let name = newPril + ' ' + resp[secondName].Существительное;
        createTable(name, i);
    }
    loader1.style.display = 'none';
    tableElem1.style.display = 'table';
    document.querySelector('.buttonrepit').style.display = 'block';
}

function createTable(name, i) {
    // for (let i = 0; i < arrLandName.length; i++) {
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        // let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.textContent = i+1;
       
        th3.textContent = name;
        if (i%2 == 0) {
            tr.style.background = 'grey';
        }
        else {
            tr.style.background = '#fff';
        }
        tr.appendChild(th1);
        // tr.appendChild(th2);
        tr.appendChild(th3);
        tbodyElem1.appendChild(tr);
    // }
    // tableElem.style.display = 'table';
}