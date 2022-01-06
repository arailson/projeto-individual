var extrato = [
    {
        descricaoSinal: '+',
        descricaoTexto: 'Lorem ipsum dolor sit amet consectetur',
        valorTransacao: 'R$ 12.999,99'
    },
    {
        descricaoSinal: '-',
        descricaoTexto: 'Quis nostrud exercitation',
        valorTransacao: 'R$ 99,99'
    },
    {
        descricaoSinal: '+',
        descricaoTexto: 'Lorem ipsum',
        valorTransacao: 'R$ 9,99'
    }
]

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






function validar() {
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

}

function excluirDados(){
    extrato.splice(0,infoExtrato + 1);
    document.querySelector("div.extrato-transacao-item").remove();
}
