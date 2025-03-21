$(document).ready(runIndex);

function runIndex() {
    let rota = window.location.search.substring(1);
    if(rota == ""){
        rota = "__index"
    }
    console.log(rota)
    $.get(rota+".html", function (data) {
        $("#content").html(data)
        console.log(data)
    });

}