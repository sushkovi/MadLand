const whitePageBtn = document.getElementById('secondbtn');
const firstModalPage = document.getElementById('firstmodal');
const thirdModalPage = document.getElementById('thirdmodal');
const goBtn1 = document.getElementById('gobtn1');
const loaderCat = document.getElementById('loader');
const kog = document.getElementById('kogt');
const meni = document.getElementById('man');

let arrNameGeoWhitePage = [];

whitePageBtn.onclick = () => {
    firstModalPage.style.display = 'none';
    thirdModalPage.style.display = 'block';
}

goBtn1.onclick = () => {
    
    kog.style.display = 'none';
    loaderCat.style.display = 'block';
    let geoGeo = document.getElementById('geotext1').value;
    arrNameGeoWhitePage = geoGeo.split(' ');
    
}