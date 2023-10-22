function validarFormulario() {
    var nomeAluno = document.getElementById('nome').value;
    var nascimento = document.getElementById('nascimento').value;
    var nomeMae = document.getElementById('nomeMae').value;
    var nomePai = document.getElementById('nomePai').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var turnoSelecionado = document.querySelector('input[name="turno"]:checked');
    var atividadesExtracurriculares = document.querySelectorAll('.form-check-input:checked');

    var atividadesSelecionadas = [];
    var atividadesExtracurricularesSelecionadas = [];

    atividadesExtracurriculares.forEach(function (atividade) {
        var atividadeValue = atividade.value;
        if (atividadeValue !== "manha" && atividadeValue !== "tarde" && atividadeValue !== "noite") {
            atividadesExtracurricularesSelecionadas.push(atividadeValue);
        }
    });

    var erros = [];

    if (!nomeAluno || !nascimento || !email || !telefone) {
        erros.push('Todos os campos são obrigatórios.');
    }

    if (!isValidDate(nascimento)) {
        erros.push('Data de nascimento inválida.');
    }

    if (!nomeMae || !nomePai) {
        erros.push('Os nomes da mãe e do pai são obrigatórios.');
    }

    if (!isValidDDD(telefone)) {
        erros.push('Telefone (com DDD) inválido.');
    }

    if (!isValidEmail(email)) {
        erros.push('E-mail inválido.');
    }

    if (!turnoSelecionado) {
        erros.push('Selecione o turno.');
    }

    if (atividadesExtracurricularesSelecionadas.length > 3) {
        erros.push('Selecione no máximo 3 atividades extracurriculares.');
    }

    var mensagem = document.getElementById('mensagem');
    if (erros.length === 0) {
        mensagem.innerHTML = '<div class="alert alert-success">Cadastro realizado com sucesso.</div>';
    } else {
        var erroHtml = '<div class="alert alert-danger">Erros encontrados:<ul>';
        for (var i = 0; i < erros.length; i++) {
            erroHtml += '<li>' + erros[i] + '</li>';
        }
        erroHtml += '</ul></div>';
        mensagem.innerHTML = erroHtml;
    }
}

function isValidDate(date) {
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return date.match(dateRegex);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
}

function isValidDDD(telefone) {
    var dddRegex = /^\d{2}-\d{9}$/;
    return telefone.match(dddRegex);
}
