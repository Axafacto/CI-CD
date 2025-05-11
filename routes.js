const routes = [
    {
        method : 'GET',
        path : '/',
        handler: (request, h) => {
<<<<<<< HEAD
            return 'Homepage versi gabungan oleh A dan B';
=======
            
>>>>>>> 748546981cab7aa10f9c7c5fe22e87c29293a776
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },

    { // path parameter
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = 'stranger'} = request.params;
            const { lang } = request.query; // query param
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
            
            
        }
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;