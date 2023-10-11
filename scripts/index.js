function toggleRespiratorio() {
    var respiratorioCheckbox = document.querySelector('.main-checkbox-resp');
    var checkboxesRespiratorio = document.querySelectorAll('.sub-checkbox-resp');

    checkboxesRespiratorio.forEach(function (checkbox) {
        if (respiratorioCheckbox.checked) {
            checkbox.removeAttribute('disabled');
        } else {
            checkbox.setAttribute('disabled', 'disabled');
        }
    });
}

function toggleDiabetes() {
    var diabetesCheckbox = document.querySelector('.main-checkbox-diab');
    var checkboxesDiabetes = document.querySelectorAll('.sub-checkbox-diab');

    checkboxesDiabetes.forEach(function (checkbox) {
        if (diabetesCheckbox.checked) {
            checkbox.removeAttribute('disabled');
        } else {
            checkbox.setAttribute('disabled', 'disabled');
        }
    });
}

function toggleTransporte() {
    var transporteCheckbox = document.querySelector('.main-checkbox-transp');
    var checkboxesTransporte = document.querySelectorAll('.sub-checkbox-transp');

    checkboxesTransporte.forEach(function (checkbox) {
        if (transporteCheckbox.checked) {
            checkbox.removeAttribute('disabled');
        } else {
            checkbox.setAttribute('disabled', 'disabled');
        }
    });
}

function capitalizarPalavras(text) {
    return text.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  }

function validarLetraNomePaciente(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-1");


    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

// função para permitir que o usuário escreva apenas numeros na idade
function validarNumeroIdadePac(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-2");


    if (/[^0-9]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

function validarNumeroRGCPFPaciente(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-3");
  
    // Remove caracteres não numéricos, exceto letras, espaços, pontos e traços
    numero = numero.replace(/[^0-9a-zA-Z\s\.\-]/g, '');
  
    // Formatar CPF e RG conforme necessário
    if (/[^0-9]/.test(numero)) {
      mensagemErro.textContent = "Digite apenas números.";
      input.value = numero.replace(/[^0-9]/g, '');
    } else {
      mensagemErro.textContent = "";
  
      // Formate o CPF e o RG em variáveis intermediárias
      var cpfFormatado = formatarCPF(numero);
      var rgFormatado = formatarRG(numero);
  
      // Defina o valor do campo de entrada com as versões formatadas
      if (cpfFormatado !== null) {
        input.value = cpfFormatado;
      } else if (rgFormatado !== null) {
        input.value = rgFormatado;
      }
    }
  }
  
  // Função para formatar CPF
  function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cpf.length === 11) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formatação
      return cpf;
    }
    return null; // Retorna null se o CPF não tiver 11 dígitos
  }
  
  // Função para formatar RG
  function formatarRG(rg) {
    // Remove todos os caracteres não numéricos
    rg = rg.replace(/\D/g, '');
  
    // Verifica o comprimento do RG e formata conforme necessário
    if (rg.length <= 2) {
      return rg;
    } else if (rg.length <= 9) {
      return rg.replace(/(\d{1})(\d{3})(\d{3})/, '$1.$2.$3');
    }
    return null; // Retorna null se o RG não estiver em um formato válido
  }
  
  

//função para permitir apenas a escrita de letras no nome do acompanhante
function validarNomeAcomp(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-4");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para permitr apenas a escrita de numeros na idade do acompanhante
function validarNumeroIdadeAcomp(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-5");


    if (/[^0-9]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para permitir apenas a escrita de numeros na ocorrencia
function validarNumeroOcorr(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-6");

    if (/[^0-9, ]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9, ]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para permitir apenas a escrita de numeros no codigo IR
function validarCodIR(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-7");

    if (/[^0-9, ]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9, ]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para permitir apenas a escrita de numeros no codigo PS
function validarCodPS(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-8");

    if (/[^0-9, ]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9, ]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para permitir apenas a escrita de numeros no codigo SIA/SUS
function validarCodSIASUS(input) {
    var numero = input.value;
    var mensagemErro = document.getElementById("mensagemErro-9");

    if (/[^0-9, ]/.test(numero)) {
        mensagemErro.textContent = "Digite apenas números.";
        input.value = numero.replace(/[^0-9, ]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para o usuario digitar os numeros da pressao arterial
function formatarMedidaPressao(input) {
    // Remove todos os caracteres não numéricos
    var valor = input.value.replace(/\D/g, '');
  
    // Formata o valor inserido
    if (valor.length === 2) {
      input.value = valor + 'x';
    } else if (valor.length >= 4) {
      var parte1 = valor.slice(0, 2);
      var parte2 = valor.slice(2, 4);
      input.value = parte1 + 'x' + parte2 + 'mmHg';
    } else {
      input.value = valor;
    }
  }
  
//funcao para permitir que o usuario digite apenas numeros no Saturação
function completePulso(inputElement) {
    const inputValue = inputElement.value;
    const mensagemErro = document.getElementById("mensagemErro-23");

    // Verifica se a entrada tem exatamente 2 números
    if (/^\d{3}/.test(inputValue)) {
        inputElement.value = inputValue + ' B.C.P.M.';
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (inputValue === ' B.C.P.M.') {
        // inputElement.value = ''; // Se o usuário inserir apenas '°C', limpe o campo
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (/[^0-9]/.test(inputValue)) {
        mensagemErro.textContent = "Digite apenas números.";
        inputElement.value = inputValue.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}


// FUNÇÃO PARA MRM
function formatRespiration(inputElement) {
    const inputValue = inputElement.value;
    const mensagemErro = document.getElementById("mensagemErro-12");

    // Verifica se a entrada tem exatamente 2 números
    if (/^\d{2}$/.test(inputValue)) {
        inputElement.value = inputValue + ' M.R.M.';
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (inputValue === ' M.R.M.') {
        // inputElement.value = ''; // Se o usuário inserir apenas '°C', limpe o campo
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (/[^0-9]/.test(inputValue)) {
        mensagemErro.textContent = "Digite apenas números.";
        inputElement.value = inputValue.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}



//funcao para permitir que o usuario digite apenas numeros no Saturação
function completeSaturacao(inputElement) {
    const inputValue = inputElement.value;
    const mensagemErro = document.getElementById("mensagemErro-22");

    // Verifica se a entrada tem exatamente 2 números
    if (/^\d{2}/.test(inputValue)) {
        inputElement.value = inputValue + ' %';
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (inputValue === ' %') {
        // inputElement.value = ''; // Se o usuário inserir apenas '°C', limpe o campo
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (/[^0-9]/.test(inputValue)) {
        mensagemErro.textContent = "Digite apenas números.";
        inputElement.value = inputValue.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}









//funcao para permitir que o usuario digite apenas numeros no HGT
function completeWithHgt(inputElement) {
    const inputValue = inputElement.value;
    const mensagemErro = document.getElementById("mensagemErro-20");

    // Verifica se a entrada tem exatamente 2 números
    if (/^\d{3}$/.test(inputValue)) {
        inputElement.value = inputValue + ' mg/dL';
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (inputValue === ' mg/dL') {
        // inputElement.value = ''; // Se o usuário inserir apenas '°C', limpe o campo
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (/[^0-9]/.test(inputValue)) {
        mensagemErro.textContent = "Digite apenas números.";
        inputElement.value = inputValue.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}













 // Função para completar com "°C" após o usuário digitar dois números
 function completeWithDegreeC(inputElement) {
    const inputValue = inputElement.value;
    const mensagemErro = document.getElementById("mensagemErro-21");

    // Verifica se a entrada tem exatamente 2 números
    if (/^\d{2}$/.test(inputValue)) {
        inputElement.value = inputValue + '°C';
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (inputValue === '°C') {
        inputElement.value = ''; // Se o usuário inserir apenas '°C', limpe o campo
        mensagemErro.textContent = ""; // Limpa a mensagem de erro
    } else if (/[^0-9]/.test(inputValue)) {
        mensagemErro.textContent = "Digite apenas números.";
        inputElement.value = inputValue.replace(/[^0-9]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

const inputElement = document.getElementById("username");

// Adiciona um ouvinte de evento de entrada para chamar a função
inputElement.addEventListener("input", function () {
    completeWithDegreeC(this);
});













//funcao para validar apenas letras na input Objetos Recolhidos
function validarObjRecolhido(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-13");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}


//funcao para validar apenas letras no M de atendimento
function validarAtendimentoM(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-14");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}


//funcao para validar apenas letras no S1 de atendimento
function validarS1(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-15");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para validar apenas letras no S2 de atendimento
function validarS2(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-16");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para validar apenas letras no S3 de atendimento
function validarS3(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-17");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}

//funcao para validar apenas letras no demandante de atendimento
function validarDemandante(input) {
    var texto = input.value;
    var mensagemErro = document.getElementById("mensagemErro-18");

    if (/[^a-zA-Z\s]/.test(texto)) {
        mensagemErro.textContent = "Digite apenas letras.";
        input.value = texto.replace(/[^a-zA-Z\s]/g, '');
    } else {
        mensagemErro.textContent = "";
    }
}
