const mariadb=require('mariadb');

//create a connection pool
const pool=mariadb.createPool(
    {
        host : 'localhost',
        user : 'MyEthLancered',
        password : 'BlackHorse@325$',
        database : 'EthLance',
        connectionLimit : 5,   //Max number of connections
    }
)

module.exports=pool;