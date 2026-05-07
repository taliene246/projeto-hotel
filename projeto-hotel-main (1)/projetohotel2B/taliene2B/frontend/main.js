
//aqui estamos dizendo:
//espere o html carregar completamente antes de excultar o javascript
document.addEventListener("DOMContentLoaded", function() {

  //aqui estamos pegando o formulario pelo id
  //no html presia exstir:<from id="cadastro">
  const formcadastro = document.getElementById("formcadastro");
     if (formcadastro) {





         formcadastro.addEventListener("submit", async (e) =>{

             try{

                 //envia os dados ao backend (rota/api/cadastrar)via POST
                    const resp = await fetch('/api/cadastrar',{
                        method: 'POST',
                        headers: {'content-tipe': 'application/json'},
                        body: JSON.stringify(dados)
                    });
                    //recebe a resposta do flasx (JSON)
                    const result = await resp.json();
                    //exibe a mensagem de retorno para o usuario
                    this.document.getElementById ('mensagem').innerText = result.message;
                    formcadastro.requestFullscreen();
            }
                catch (err){
                //caso algo de errado (servidor fora do ar, etc.)
                alert('erro de comunicação com o servidor: ' + err);

            }
            // agora vamos mostrar os dados no console (F12 → console)




            e.preventDefault();
            const dados = Object.fromEntries(
                new FormData(formcadastro)
            

            );

            console.log("dados capturados:"); 
            // mostra apenas o campo nome
            console.log("nome:", dados.nome);
            //mostra o campo do email (so ffunciona se exstir o html)
           console.log("email:", dados.email);
           //mostra o campo de telefone (so funciona se existir no html)
           console.log("telefone:", dados.telefone);
           //mostra o objeto completo com todados
           console.log(dados);
         });
    }

    if (btnBuscar) {
        btnBuscar.addEventListener ('click', async ()=> {

            const nome= this.document.getElementById ('campo de busca'). value;
            const resp= await fetch (`/buscar?nome=${nome}`);
            const clientes= await resp.json() 
            const tabela= document.getElementById ('tabeladeresultados');
            tabela.innerHTML= '';

            clientes.forEach(cli=> {
                const row=
                <tr>
                    <td>${cli.ID}</td>
                    <td>${cli.Nome}</td>
                    <td>${cli.CPF}</td>
                    <td>${cli.Email}</td>
                    <td>${cli.Telefone}</td>
                    <td><a href="/alterar?id=$(cil.ID)" class="bnt-warning">Editar</a>sm</td>
                </tr>
                tabela.innerHTML
            });
        });
    }
    formAlterar.addEventListener('submit', async (e) =>{
        e.preventDefault();
 
        const dados = {
         nome: nome.value,
         cpf: cpf.value,
         email: email.value,
         telefone: telefone.value,
         endereco: endereco.value,
         observacoes: observacoes.value,
        }
        // envia para o backend (rota/api/atualizar/<id>)
        const resp = await fetch(`/api/atualizar/${id}`, {
           method: 'POST',
           headers: { 'content-type': 'application/json'},
           body: JSON.stringify(dados)
        });
 
        const result = await resp.json();
        mensagem.ineerText = result.message; // mostra o retorno na tela
 
     });
 
 
});
 
