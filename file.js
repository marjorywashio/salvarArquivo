import { saveAs } from "file-saver";

function enviarArquivo(){
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file){
        saveAs(file, file.name);
    } else{
        console.error("Arquivo não selecionado");
    }
    
}

export default enviarArquivo;