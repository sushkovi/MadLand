// const geoArr = [at, al, be, bg, ba, hu, gt, de, gr, eg, id, es, it, cy, co, xk, cr, lv, lt, lu, mk, mx, nl, pe, pl, pt, ro, rs, sg, sk, sl, ph, ph, hr, cz, cl, ch, ua, kz, tr, md, ae, ma, uz, ca, vn, sa];
// AIzaSyD0go7rLw-pTS_iHpJlqeJ0SOLMRsN84mM
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

const landName = document.getElementById('firstbtn');
const firstModal = document.getElementById('firstmodal');
const secondModal = document.getElementById('secondmodal');
const goBtn = document.getElementById('gobtn');
const loader = document.getElementById('loader');
const urlOrders = './data/geo.json';
const urlOrders2 = './data/data.json';
const tbodyElem = document.getElementById('tbodyelem');
const tableElem = document.getElementById('tableelem');
const btnRepit = document.querySelector('.buttonrepit');
const kog = document.getElementById('kogt');
const mai = document.getElementById('man');
// const textar = document.getElementById('textare');

let objOrders;
let arrNameGeo = [];
// let arrIdStream = [];
let arrGeoDomen = [];
let arrLandName = [];
// let baer;

landName.onclick = () => {
    firstModal.style.display = 'none';
    secondModal.style.display = 'block';
    console.log(window.location);
}
goBtn.onclick = () => {
    secondModal.style.display = 'none';
    kog.style.display = 'none';
    loader.style.display = 'block';
    // let idStream = document.getElementById('idstream').value;
    let geoGeo = document.getElementById('geotext').value;
    // baer = document.getElementById('baer').value;
    geoFunc(geoGeo);
}

function geoFunc ( nameGeo) {
    // arrIdStream = idStream.split(' ');
    arrNameGeo = nameGeo.split(' ');
    init(urlOrders);
    // console.log(arrNameGeo);
}

function init(url) {
    getApi(url)
    .then( response => {
        objOrders = response;
        // console.log(response);
        compareFunc(response);
    });
}

function compareFunc(resp) {
    for (let i = 0; i < arrNameGeo.length; i++) {
        // console.log(arrNameGeo[i]);
        for (let j = 0; j < resp.length; j++) {
            // console.log(resp[j].country_ru);
            if (arrNameGeo[i].toLowerCase() == resp[j].country_ru) {
                arrGeoDomen.push(resp[j].country_short);
                // init2(urlOrders2);
                // createTable();
            }
        }
    }
    init2(urlOrders2, resp);
}

function init2(url, geoName) {
    getApi(url)
    .then( response => {
        objOrders = response;
        // console.log(response);
        createName(response, geoName);
    });
}

function createName(resp, geoName) {
    for (let i = 0; i < arrGeoDomen.length; i++) {
        let firstName = Math.round((Math.random() * 692));
        let secondName = Math.round((Math.random() * 601));
        let thirdName = Math.round((Math.random() * 2));
        let name;
        name = resp[firstName].Прилагательное + resp[secondName].Существительное;
        if (thirdName == 0) {
            name = arrGeoDomen[i] + name;
        }
        else if (thirdName == 1) {
            name = name + arrGeoDomen[i];
        }
        // console.log(name);
        for (let j = 0; j < geoName.length; j++) {
            if (arrGeoDomen[i] == geoName[j].country_short){
                createTable(name.replace(/[\s.,%]/g, ''), i, geoName[j].country_ru)
            }
        }
        
    }
    loader.style.display = 'none';
    mai.style.alignItems = 'normal';
    mai.style.overflow = 'auto';
    // textar.style.display = 'block';
    kog.style.display = 'flex';
    kog.style.justifyContent = 'start';
    kog.style.marginTop = '20px';
    tableElem.style.display = 'table';
    tableElem.style.marginBottom = '20px';
    btnRepit.style.display = 'block';
}

btnRepit.onclick = () => {
    tbodyElem.innerHTML = '';
    arrGeoDomen = [];
    init(urlOrders);
}

function createTable(name, i, geo) {
    // for (let i = 0; i < arrLandName.length; i++) {
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');

        th1.textContent = i+1;
        // th2.textContent = arrIdStream[i];
        th2.textContent = geo;
        th3.textContent = name;
       
               

            

        
        if (i%2 == 0) {
            tr.style.background = 'grey';
            tr.style.color = '#fff';
        }
        else {
            tr.style.background = '#fff';
            tr.style.color = '#333';
            
        }
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        // tr.appendChild(th4);
       
        tbodyElem.appendChild(tr);
    // }
    // tableElem.style.display = 'table';
}