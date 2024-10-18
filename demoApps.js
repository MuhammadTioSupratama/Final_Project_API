const request = require('supertest') //variable untuk nampung function dari supertest

async function login(url,pathURL,body){  //nama fungsi login dengan parameter url, path URL, body
    return resp = await request(url)  //menyetting URL api utk di-hit
    .post(pathURL) //menyetting pathURL 
    .set('Content-Type', 'multipart/form-data; boundary=<calculated when request is sent>') //menyetting content type
    .field(body) //menyetting parameter pada API
}

module.exports = {login} //membuat function bisa digunakan diluar file

