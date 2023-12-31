let currentURL = localStorage.getItem('currentUrl');

if (currentURL) {
  let url = new URL(currentURL);
  let searchParams = new URLSearchParams(url.search);

  if (searchParams.has('btn')) {
    var btnValue = searchParams.get('btn');
    console.log(btnValue);
  }
}

function SubmitEvent(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const dataNascimento = document.getElementById('data_nascimento').value;
  const numConvenio = document.getElementById('num_convenio').value;
  const email = document.getElementById('email').value;



  // SIMULAÇÃO TABELA DE PREÇO:
  //CASE 1: PLANOS (ST/MD/PL) - VALORES A DEFINIR

  let stCoberturaClinico = 60;
  let stCoberturaGeneric = 250;
  let stCoberturaAgendado = 0;

  let mdCoberturaClinico = 85;
  let mdCoberturaGeneric = 300;
  let mdCoberturaAgendado = 0;

  let plCoberturaClinico = 115;
  let plCoberturaGeneric = 460;
  let plCoberturaAgendado = 0;

  //PREÇO HOSPITAL (CASE 1)
  let clinicoGeralCase1 = 100;
  let genericoGeralCase1 = 300;

  //Manejamento dos PLANOS
  let verficadorPlano = numConvenio.slice(0, 2);
  var planoBool = false;
  const planos = ['ST', 'MD', 'PL']; //conter TODOS os PLANOS, LISTA GLOBAL DE VERIFICAÇÃO

  for (let i = 0; i < planos.length; i++) {
    const variavelAtual = planos[i];
    if (variavelAtual === verficadorPlano) {
      planoBool = true;
    }
  }

  if (nome !== '' && cpf.length === 14 && dataNascimento.length === 10 && planoBool && email.includes('@') && email.endsWith('.com')) {
    let convenioPlano = numConvenio.slice(0, 2);

    switch (btnValue) {
      case 'clinico':
        if (convenioPlano === 'ST') {
          if (clinicoGeralCase1 <= stCoberturaClinico) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";


          } else {
            let valorSubstancialST = clinicoGeralCase1 - stCoberturaClinico;
            console.log(valorSubstancialST);
            alert("O plano não cobre a consulta inteira, fica devendo")
            window.location.href = "indexFinished.html";

            //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
          }
        }
        if (convenioPlano === 'MD') {
          if (clinicoGeralCase1 <= stCoberturaClinico) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";

          } else {
            let valorSubstancialMD = clinicoGeralCase1 - mdCoberturaClinico;
            console.log(valorSubstancialMD * 1);
            alert("O plano não cobre a consulta inteira, fica devendo")
            window.location.href = "indexFinished.html";
            //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
          }
        }
        if (convenioPlano === 'PL') {
          if (clinicoGeralCase1 <= plCoberturaClinico) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";


          } else {
            let valorSubstancialPL = clinicoGeralCase1 - plCoberturaClinico;
            console.log(valorSubstancialPL * 1);
            alert("O plano não cobre a consulta inteira, fica devendo")
            window.location.href = "indexFinished.html";
            //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
          }
        }

        
      case 'generic':
        if (convenioPlano === 'ST') {
          if (genericoGeralCase1 <= stCoberturaGeneric) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";


          } else {
            let valorSubstancialSTg = genericoGeralCase1 - stCoberturaGeneric;
            console.log(valorSubstancialSTg);
            alert("O plano não cobre a consulta inteira, fica devendo");
            window.location.href = "indexFinished.html";
          }
        }
        if (convenioPlano === 'MD') {
          if (genericoGeralCase1 <= mdCoberturaGeneric) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";


          } else {
            let valorSubstancialMDg = genericoGeralCase1 - mdCoberturaGeneric;
            console.log(valorSubstancialMDg);
            alert("O plano não cobre a consulta inteira, fica devendo");
            window.location.href = "indexFinished.html";
          }
        }
        if (convenioPlano === 'PL') {
          if (genericoGeralCase1 <= plCoberturaGeneric) {
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "indexFinished.html";


          } else {
            let valorSubstancialPLg = genericoGeralCase1 - plCoberturaGeneric;
            alert("O plano não cobre a consulta inteira, fica devendo")
            window.location.href = "indexFinished.html";
          }
        }


    }
  } else {

    alert('Preencha todos os campos corretamente.');
  }
  console.log(nome);
  console.log(cpf);
  console.log(dataNascimento);
  console.log(numConvenio);
}
