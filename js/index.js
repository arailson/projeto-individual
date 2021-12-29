function validar (){
    var nomeMercadoria = document.getElementById("nomeMercadoria");
    var valor = document.getElementById("valor") 

    if (nomeMercadoria.value == ""){
        alert('Nome não informado')
        return;
    }

    if (valor.value ==""){
        alert('Valor não informado');
        return;
    }
}