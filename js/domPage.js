let rota = window.location.search.substring(1);

function registrar_conta(url){
    let background = document.querySelector("#content")
    background.style.background = "var(--gray)"
}

switch(rota){
    case "registrar_conta":
        registrar_conta(rota)
    break;
}



