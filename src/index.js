const express = require('express');
const app = express();

app.get('/dadospessoais', (req, res )=>{
    res.json({
        nome:'Kauê',
        idade: 20,
        email:'kauefilgueiras@gmail.com'
    })
});

app.get('/formacao', (req, res)=>{
    res.json({
        formação:'Cientista da computação'
    })
});

app.get('/projetos', (req, res)=>{
    res.json({
        repositorio: 'https://github.com/kauefilgueiras'
    })
});

app.get('/experiencia', (req, res)=>{
    res.json({
        experiencia1:'experiencia com Java',
        experiencia2:'experiencia com NodeJs e ReactJs'
    })
});

app.get('/lazer', (req, res)=>{
    res.json({
        lazer: 'Costumo programar, ou surfar, no tempo livre :)'
    })
});

app.listen(9999);
