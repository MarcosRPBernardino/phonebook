const form = document.getElementById('form-agenda');
const telefoneRepetido = [];
const contatos = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    novaLinha ();
    atualizaLinha();
    atualizaContatos ();
});

function novaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputSobrenomeAgenda = document.getElementById('sobrenome-agenda');
    const inputTelefoneAgenda = document.getElementById('telefone-agenda');
    const inputEmailAgenda = document.getElementById('email-agenda');
    let somaContatos = 0

    if (telefoneRepetido.includes (inputTelefoneAgenda.value)) {
        alert (`O número ${inputTelefoneAgenda.value} já existe na lista telefônica!`)
    } else {
        telefoneRepetido.push (inputTelefoneAgenda.value)

        let nomeCompleto = inputNomeAgenda.value + ' ' + inputSobrenomeAgenda.value
        let linha = '<tr>';

    linha += `<td> ${nomeCompleto} </td>`;
    linha += `<td> ${inputTelefoneAgenda.value}</td>`;
    linha += `<td> ${inputEmailAgenda.value}</td>`;
    linha += `</tr>`;
    somaContatos += 1;

    contatos.push(somaContatos);

    linhas += linha;
    };
    inputNomeAgenda.value = '';
    inputSobrenomeAgenda.value = '';
    inputTelefoneAgenda.value = '';
    inputEmailAgenda.value = '';
    
};

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function totalContatos (){
    let adicionaContato = 0;

    for (let i = 0; i < contatos.length; i++ ){
    adicionaContato += contatos[i];
    }

    return adicionaContato;
}
    
function atualizaContatos (){
        const contatoAtualizado = totalContatos ();

    if (contatoAtualizado === 1 ) {
        document.getElementById('contact').innerHTML = 'Você tem um total de ' + contatoAtualizado + ' contato cadastrado';
    } else {
        document.getElementById('contact').innerHTML = 'Você tem um total de ' + contatoAtualizado + ' contatos cadastrados';
    }

    };