// this is an example of improting data from JSON
// import 'orders' from '../data/orders.JSON';
// import {getApi} from './getapi';

// export default (function () {

    const urlOrders = './data/geo.json';

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

    let objOrders;
    // let objUsers;

    function init() {
        getApi(urlOrders)
		.then( response => {
            objOrders = response;
            console.log(response);
		});
    }


    init();

    
// }());