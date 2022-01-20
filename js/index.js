document.getElementById('valor').onpaste = function(){
    return false
}
function desenhaTabela(){
    var extratoVazio = localStorage.getItem('extrato')
    if (extratoVazio != null) {
        var extrato = JSON.parse(extratoVazio)
    }
    else{
        extrato = [];
    }
    var extratoDesenha = "";
    if(extrato.length === 0){
        document.querySelector(".total").style.display = 'none';
        document.querySelector(".total span").style.display = 'none';
        document.querySelector(".descricao-valor").style.justifyContent = 'center';
        document.querySelector(".nenhuma-transacao").style.display = 'block';
        document.querySelector(".nenhuma-transacao span").style.display = 'block';
    }
    else{
        document.querySelector(".total").style.display = 'block';
        document.querySelector(".total span").style.display = 'block';
        document.querySelector(".descricao-valor").style.justifyContent = 'space-between';
        document.querySelector(".nenhuma-transacao").style.display = 'none';

        for (infoExtrato in extrato) {
            extratoDesenha +=`<div class="descricao-valor">
            <div class="descricao-transacao">
            <p class="descricao-sinal"> ${extrato[infoExtrato].descricaoSinal} </p>
            <p class="descricao-texto">${extrato[infoExtrato].descricaoTexto}</p>
            </div>
            <p class="valor-transacao">${extrato[infoExtrato].valorTransacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
            <div id="lh"></div>`
        };
        document.querySelector("div.extrato-transacao-item").innerHTML = extratoDesenha;
    }
}

function calculaTotal(){
    var extratoVazio = localStorage.getItem('extrato')
    if (extratoVazio != null) {
        var extrato = JSON.parse(extratoVazio)
    }
    else{
        extrato = [];
    }
    var total = 0;
    for(infoExtrato in extrato){
        if (extrato.length === 0){
            total = 0;
        }
        else if(extrato[infoExtrato].descricaoSinal === '+'){
            total = total + parseFloat(extrato[infoExtrato].valorTransacao); 
    
        }
        else{
            total = total + (parseFloat(extrato[infoExtrato].valorTransacao * -1)); 
        }
        
        document.querySelector(".total span").innerText = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        if(total > 0){
            document.querySelector(".lucro").innerText = '[LUCRO]'
        }
        else if(total == 0){
            document.querySelector(".lucro").innerText = ''
        }
        else{
            document.querySelector(".lucro").innerText = '[PREJUIZO]'
        }
    }
}

function excluirDados(){
    var extratoVazio = localStorage.getItem('extrato')
    var confirmaExclusao = confirm("Deseja remover todas as transações?");
    if (extratoVazio != null) {
        var extrato = JSON.parse(extratoVazio)
    }
    else{
        extrato = [];
    }
    if(confirmaExclusao){
        for(infoExtrato in extrato){
            document.querySelector("div.descricao-valor").remove();
            document.getElementById("lh").remove();
        }
        extrato.splice(0);

    }
    localStorage.setItem('extrato',JSON.stringify(extrato))
    desenhaTabela();
    
    total = 0;
    if(total == 0){
        document.querySelector(".lucro").innerText = '';
    }
    document.querySelector(".total span").innerText = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function abrirMenu(){
    if(window.innerWidth <= 411){
        document.querySelector(".cadastro-limpar").style.width = 351;
        document.querySelector(".cadastro-limpar").style.right = 0;
    }
    else
    {
        document.querySelector(".cadastro-limpar").style.right = 0;
    }
}
function fecharMenu(){
    if(document.querySelector(".cadastro-limpar").offsetWidth == 351){
        document.querySelector(".cadastro-limpar").style.right = -351;
    }
    else
    {
        document.querySelector(".cadastro-limpar").style.right = -252;
    }
}
function focaFormulario(){
    document.getElementById('nomeMercadoria').focus();
}
desenhaTabela();
calculaTotal();