const path = require('path')
const { ipcRenderer } = require ('electron')

ipcRenderer.on('settings:get', (e, settings) =>{
    console.log(e);
    console.log(settings);
	// loadGLTFModel(settings.models[0])
})

















var test = 0

var button = document.querySelector('.click-btn')

button.addEventListener('click', function(){

    test += 1

    document.body.querySelector('.add-character').innerText = test
})