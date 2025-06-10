const { invoke } = window.__TAURI__.core;

let greetInputEl;
let greetMsgEl;

let btn_encript = document.querySelector("#btnencriptador"); // boton para encriptar
let formFile = document.querySelector("#formFile");          // archvio a encriptar

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

function setPath(file){
    let fileR = new FileReader();
    fileR.readAsDataURL(file.files[0]);

}

window.addEventListener("DOMContentLoaded", () => {

  
  

  btn_encript.addEventListener("click", ()=>{
     // return 
    invoke("rx_data", {  path2encript: formFile.value })
    .then((res)=>{  window.alert("Encriptación completada en el path:" + res )  })
    
    console.log(formFile.value);
  });


  /*

  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
*/
});
