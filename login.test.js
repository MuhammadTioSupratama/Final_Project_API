const demoApp = require('../object/demoApps')  //mengambil function yang ada pada file demoApps

describe ('Scenario Login',() =>{  //Nama scenario test
    const url = 'http://demo-app.site' //Url web
    const pathUrl = '/api/login'  //URL API

    it ('Login dengan email dan password yang benar', async ()=>{ //Nama test case
        const body ={ //parameter yang akan diinput ke function
            'email' : 'tumbalakun238@gmail.com', //data yg diinput 1
            'password' : 'ces12345678'//data yg diinput 2
        }
        const response = await demoApp.login(url,pathUrl,body) //variabel yang menampung hasil dari function login
        expect (response.statusCode).toBe(200) //Menyetting respon yang ditampilkan agar status codenya menunjukkan keberhasilan (200).
    })

    it ('Login dengan email dan password salah', async ()=>{ //Nama test case
        const body ={ //parameter yang akan diinput ke function
            'email' : 'qwerty@gmail.com', //data yg diinput 1
            'password' : '1234'//data yg diinput 2
        }
        const response = await demoApp.login(url,pathUrl,body) //variabel yang menampung hasil dari function login
        expect (response.statusCode).toBe(401) //Menyetting respon yang ditampilkan agar status codenya menunjukkan keberhasilan (200).
    })

    it ('Login dengan email tanpa "@"', async ()=>{ //Nama test case
        const body ={ //parameter yang akan diinput ke function
            'email' : 'tumbalakun238gmail.com', //data yg diinput 1
            'password' : ' ces12345678'//data yg diinput 2
        }
        const response = await demoApp.login(url,pathUrl,body) //variabel yang menampung hasil dari function login
        expect (response.statusCode).toBe(401) //Menyetting respon yang ditampilkan agar status codenya menunjukkan keberhasilan (200).
    })
})
