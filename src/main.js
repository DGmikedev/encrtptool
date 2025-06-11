const { invoke } = window.__TAURI__.core;

let btn_encript = document.querySelector("#btnencriptador"); // boton para encriptar
let formFile = document.querySelector("#formFile");        // archvio a encriptar

window.addEventListener("DOMContentLoaded", () => {

  btn_encript.addEventListener("click", (event)=>{

    invoke("rx_data", {  path2encript: formFile.value })
    .then((res)=>{  window.alert("Encriptación completada en el path:" + res )  })
    
    console.log(formFile.value);

  })


  });


