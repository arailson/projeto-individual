function enviaFormulario(e) {
    e.preventDefault();
    
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
    valorItem = e.path[2].elements['valor'].value
    valorItem = valorItem.replace(/\./g, '');
    valorItem = valorItem.replace(',','.');
    extrato.push({
        
        descricaoSinal: (e.path[2].elements['tipoTransacao'].value === 'Compra' ? '-' : '+'),
        descricaoTexto: e.path[2].elements['nomeMercadoria'].value,
        valorTransacao: parseFloat(valorItem)

    })

    localStorage.setItem('extrato', JSON.stringify(extrato)); 

    printExtrato();
    printTotal();
}
function testaCampoValor(objTextBox, separadorMilesimo, separadorDecimal, e){
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    
    if (whichCode == 13) return true;
    key = String.fromCharCode(whichCode);
    
    if (strCheck.indexOf(key) == -1) return false;
    len = objTextBox.value.length;

    for(i = 0; i < len; i++){
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != separadorDecimal)) break;
    }
    aux = '';

    for(; i < len; i++){
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    }
    aux += key;

    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0'+ separadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0'+ separadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += separadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        objTextBox.value += aux2.charAt(i);
        objTextBox.value += separadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}
