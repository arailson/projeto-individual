function validar(e) {
    var nomeMercadoria = document.getElementById("nomeMercadoria");
    var valor = document.getElementById("valor")

    if (nomeMercadoria.value == "") {
        alert('Nome não informado')
        return;
    }

    if (valor.value == "") {
        alert('Valor não informado');
        return;
    }
    
    
    
    var extratoVazio = localStorage.getItem('extrato')
    if (extratoVazio != null) {
        var extrato = JSON.parse(extratoVazio)
    }
    else{
        extrato = [];
    }
    extrato.push({
        
        descricaoSinal: (e.path[2].elements['tipoTransacao'].value === 'Compra' ? '-' : '+'),
        descricaoTexto: e.path[2].elements['nomeMercadoria'].value,
        valorTransacao: e.path[2].elements['valor'].value
    })

    localStorage.setItem('extrato', JSON.stringify(extrato));
    
}
function desenhaTabela(){

}