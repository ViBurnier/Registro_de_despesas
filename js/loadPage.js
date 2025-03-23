// O código identifica qual página deve ser carregada com base na query string da URL.
// Se a query string estiver vazia, ele carrega um arquivo padrão (__index.html).
// Insere o conteúdo do arquivo carregado no elemento #content (div).

$(document).ready(runIndex);

function runIndex() {
    let rota = window.location.search.substring(1);
    if(rota == ""){
        rota = "__index"
    }
    $.get(rota + ".html", function (data) {
        $("#content").html(data)
        
    });
}