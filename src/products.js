
    const axios = require('axios');
    let products = [];
    fetch('http://127.0.0.1/WEB-PROJECT/my-app/react-php/src/products.php')
        .then((response) => response.json())
        .then(function (result) {
            // Server side response
            products.push(result);
            console.log(products);
        })
        .catch(function (error) {
        });


export default products;