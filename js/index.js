var extratoVazio = localStorage.getItem('extrato')
if (extratoVazio != null) {
    var extrato = JSON.parse(extratoVazio)
}
else{
    extrato = [];
}


for (infoExtrato in extrato) {
    document.querySelector("div.extrato-transacao-item").innerHTML +=`<div class="descricao-valor">
       <div class="descricao-transacao">
           <p class="descricao-sinal"> ${extrato[infoExtrato].descricaoSinal} </p>
           <p class="descricao-texto">${extrato[infoExtrato].descricaoTexto}</p>
       </div>
       <p class="valor-transacao">${extrato[infoExtrato].valorTransacao}</p>
    </div>
    <div class="linha-horizontal"></div`
}

var total = 0;
for(infoExtrato in extrato){
    if (extrato.length === 0){
        total = 0;
    }
    else if(extrato[infoExtrato].descricaoSinal === '+'){
        total = total + parseInt(extrato[infoExtrato].valorTransacao); 

    }
    else{
        total = total + (parseInt(extrato[infoExtrato].valorTransacao * -1)); 
    }
    
    
}



function excluirDados(){
    if(extrato.length === 0){
        alert('Não há nenhuma informação para remover');
    }
    else{
        extrato.splice(0,infoExtrato + 1);
        document.querySelector("div.extrato-transacao-item").remove();

    }
    localStorage.setItem('extrato',JSON.stringify(extrato))
}
