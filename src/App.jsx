import './App.css'

function App() {

    function enviarArquivo(){
        const fileInput = document.getElementById('file');
        const file = fileInput.files[0];
    
        if (file){
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileData = event.target.result;
                localStorage.setItem('uploadedFile', fileData);
                console.log("Arquivo salvo em localStorage.");
            };
            reader.readAsDataURL(file);
        } else{
            console.error("Arquivo não selecionado");
        }
        
    }

    return (
        <>
            <div>
                <input type="file" accept=".pdf" id="file" />
            </div>

            <div>
                <button onClick={enviarArquivo}>Enviar arquivo</button>
            </div>
        </>
    )
}

export default App
