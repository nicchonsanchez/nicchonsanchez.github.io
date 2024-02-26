// Efeito inicial - LOGO

$('#logo').delay(1500).queue(function(next){
    $(this).css({
        'transition': '1s',
        'transform': 'rotate(360deg)',
        'filter': 'drop-shadow(0px 0px 50px white)'
    });
    next();
}).delay(2000).queue(function(next){
    $(this).css({
        'transition': '0.5s',
        'transform': 'rotate(0deg)',
        'filter': 'none'
    });
    $(this).hover(function(){
        $(this).css({
            'transition': '1s',
            'transform': 'rotate(360deg)',
            'filter': 'drop-shadow(0px 0px 50px white)'
        })});
    $(this).mouseout(function(){
            $(this).css({
                'transition': '0.5s',
                'transform': 'rotate(0deg)',
                'filter': 'none'
            });
    })
    next();
})










// Ancora - Scroll suave
var $doc = $('html, body');
$('a').click(function() {

    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu
    }, 500);

    return false;

});










// Cursos complementares
const listaIdiomas = [
    {
        nome: "Inglês",
        nivel: "Intermediário B2",
        instituicao: "American Way",
        status: "Ainda cursando, atualmente 210h/aula.",
        certificado: "https://drive.google.com/drive/folders/1FDU8JoWi_i3BhqM58nlQ1FfYF2qxdRc7?usp=drive_link"
    },
    {
        nome: "Espanhol",
        nivel: "Básico A2",
        instituicao: "Duolingo",
        status: "Ainda cursando, atualmente 22h/aula.",
        certificado: false
    }
]

var contentIdiomas = $("#idiomas");

listaIdiomas.forEach((curso, index)=>{
    if(!listaIdiomas[index]["certificado"]){
        contentIdiomas.append(`

            <div>
                <h4>${listaIdiomas[index]["nome"]} (${listaIdiomas[index]["nivel"]})</h4>
                <p>
                    ${listaIdiomas[index]["instituicao"]}<br>
                    ${listaIdiomas[index]["status"]}
                </p>
            </div>
            <!-- /${listaIdiomas[index]["nome"]} -->

        `);
    } else {
        contentIdiomas.append(`

            <div>
                <h4>${listaIdiomas[index]["nome"]} (${listaIdiomas[index]["nivel"]})</h4>
                <p>
                    ${listaIdiomas[index]["instituicao"]}<br>
                    ${listaIdiomas[index]["status"]}<br>
                    <a target="_blank" href='${listaIdiomas[index]["certificado"]}'>Ver certificado</a>
                </p>
            </div>
            <!-- /${listaIdiomas[index]["nome"]} -->

        `);
    }
})










// Cursos complementares
const cursosComplementares = [
    {
        nome: "Inglês",
        instituicao: "American Way, Betim - MG.",
        status: "Em curso desde 2017. Atualmente 210h/aula",
        certificado: "https://drive.google.com/drive/folders/1FDU8JoWi_i3BhqM58nlQ1FfYF2qxdRc7?usp=drive_link"
    },
    {
        nome: "Informática profissional, operação de micro e design gráfico",
        instituicao: "Unicesumar, Betim - MG.",
        status: "Concluído em fevereiro de 2016.",
        certificado: "https://drive.google.com/drive/folders/1qjODS7esKqW8N7TPEw3a-2UmciSBUHE4?usp=drive_link"
    },
    {
        nome: "Webmaster Front-end completo",
        instituicao: "Danki Code, EaD.",
        status: "65% concluído.",
        certificado: false
    },
    {
        nome: "Desenvolvimento web 2.0",
        instituicao: "Danki Code, EaD.",
        status: "39% concluído.",
        certificado: false
    },
    {
        nome: "Javascript",
        instituicao: "Danki Code, EaD.",
        status: "Concluído em fevereiro de 2024.",
        certificado: "https://drive.google.com/drive/folders/1wF4AGbmXrdbWOaUTVeKTLxeniTEjdbcA?usp=drive_link"
    },
    {
        nome: "ReactJS",
        instituicao: "Danki Code, EaD.",
        status: "48% concluído.",
        certificado: false
    },
    {
        nome: "Web Design Express",
        instituicao: "Danki Code, EaD.",
        status: "82% concluído.",
        certificado: false
    },
    {
        nome: "UX Design",
        instituicao: "Danki Code, EaD.",
        status: "34% concluído.",
        certificado: false
    },
    {
        nome: "Performance para web",
        instituicao: "Danki Code, EaD.",
        status: "Concluído em novembro de 2023.",
        certificado: "https://drive.google.com/drive/folders/1wF4AGbmXrdbWOaUTVeKTLxeniTEjdbcA?usp=drive_link"
    },
    {
        nome: "Git e GitHub",
        instituicao: "Danki Code, EaD.",
        status: "Concluído em fevereiro de 2024.",
        certificado: "https://drive.google.com/drive/folders/1wF4AGbmXrdbWOaUTVeKTLxeniTEjdbcA?usp=drive_link"
    }
]

var contentCursosComplementares = $('#cursos-complementates');

cursosComplementares.forEach((curso, index)=>{
    if(!cursosComplementares[index]["certificado"]){
        contentCursosComplementares.append(`

            <div>
                <h4>${cursosComplementares[index]["nome"]}</h4>
                <p>
                    ${cursosComplementares[index]["instituicao"]}<br>
                    ${cursosComplementares[index]["status"]}
                </p>
            </div>
            <!-- /${cursosComplementares[index]["nome"]} -->

        `);
    } else {
        contentCursosComplementares.append(`

            <div>
                <h4>${cursosComplementares[index]["nome"]}</h4>
                <p>
                    ${cursosComplementares[index]["instituicao"]}<br>
                    ${cursosComplementares[index]["status"]}<br>
                    <a target="_blank" href='${cursosComplementares[index]["certificado"]}'>Ver certificado</a>
                </p>
            </div>
            <!-- /${cursosComplementares[index]["nome"]} -->

        `);
    }
});










// Lista de habilidades
const listaHabilidades = [
    {
        nome: "HTML e CSS",
        nivel: "Intermediário/Avançado",
        percetual: 75,
        descricao: "Semântica, formulários avançados, meta tags SEO, Seletores Avançados, Unidades de Medida Avançadas, Flexbox e Grid Layout, Media Queries, Posicionamento, Transições e Animações."
    },
    {
        nome: "PHP",
        nivel: "Intermediário",
        percetual: 60,
        descricao: "Arrays, operações matemáticas, funções, loops, funções nativas, banco de dados, manipulação de arquivos."
    },
    {
        nome: "JavaScript",
        nivel: "Intermediário",
        percetual: 60,
        descricao: "Variáveis, condições, funções, loops, arrays, objetos, classes, operações matemáticas, DOM e manipulação de eventos."
    },
    {
        nome: "JQuery",
        nivel: "Intermediário/Avançado",
        percetual: 75,
        descricao: "DOM, estilização, animações, eventos e interatividade."
    },
    {
        nome: "React JS",
        nivel: "Iniciante",
        percetual: 30,
        descricao: "Configuração do Ambiente, Criação de Projeto React, Componentes Funcionais, Props (Propriedades)."
    },
    {
        nome: "Python",
        nivel: "Iniciante",
        percetual: 30,
        descricao: "Arrays, operadores aritméticos, de comparação, lógicas, condicionais, saída de dados, loops, funções."
    },
    {
        nome: "Versionamento",
        nivel: "Git & GitHub | Azure",
        percetual: 100,
        descricao: "Configuração inicial, criação e gerenciamento de repositórios locais e remotos, commits, branches, resolução de conflitos, pull requests, issues e integração contínua no GitHub. Desenvolvimento colaborativo: Contribuição para projetos de código aberto, trabalho em equipes de desenvolvimento e implementação de boas práticas de controle de versão."
    },
    {
        nome: "Excel",
        nivel: "Intermediário/Avançado",
        percetual: 75,
        descricao: "Funções lógicas, avançadas e de texto, análise de dados, gráficos avançados, formatação de células, tabelas, dashboards e automatização com macros."
    }
]

var contentHabilidades = $('#habilidades');
const graficos = [];
const data = [];

listaHabilidades.forEach((nome, index)=>{
    contentHabilidades.append(`
    
    <div class="habilidade">
        <div class="titulo">
            <header>
                <div class="grafico-rosca">
                    <canvas id="grafico-${index}"></canvas>
                </div>
                <!-- Gráfico rosca -->
                
                <div class="titulo">
                    <h4>${listaHabilidades[index]["nome"]}</h4>
                    <h5>${listaHabilidades[index]["nivel"]}</h5>
                </div>
                <!-- /.titulo -->
            </header>
        </div>
        <!-- /.titulo -->
        <p>
            ${listaHabilidades[index]["descricao"]}
        </p>
    </div>
    <!-- habilidade -->

    `);

    // Criando uma lista 'graficos' para colocar os objetos (canvas) dos gráficos que serão colocados na página
    graficos.push(document.getElementById('grafico-'+index).getContext('2d'));
    // Aqui estou criando uma lista 'data' com objetos com as informações dos percentuais e das cores dos gráficos
    data.push({
        datasets: [{
          data: [listaHabilidades[index]["percetual"], 100-listaHabilidades[index]["percetual"]],
          backgroundColor: ['#061e4e', '#d8d8d8']
        }]
    });
})



// Configurar gráfico doughnut
const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false // Desativa a exibição da legenda
  }
};

// Gerar gráficos
graficos.forEach((item, indice) => {
    var item = new Chart(graficos[indice], { // Aqui é onde informa o objeto canvas que irá ser colocado o gráfico. Estou puxando as informações do array 'graficos' criado dentro do forEach acima
        type: 'doughnut',
        data: data[indice], // Aqui é onde informa o percentual e as cores que irá colocar no gráfico no formato do comentário abaixo. Estou puxando as informações do array 'data' criado dentro do forEach acima
        /*
            data: {
                datasets: [{
                data: [listaHabilidades[index]["percetual"], 100-listaHabilidades[index]["percetual"]],
                backgroundColor: ['#061e4e', '#d8d8d8']
                }]
            },
        */
        options: options
      });
});










// PROJETOS
const listaProjetos = [
    {
        nome: "Sanctius",
        descricao: "Este é um site que fiz para venda de cosméticos.",
        imagem: "images/img-projetos/site-sanctius.png",
        link: "https://sanctius.co/",
        tecnologias: [
            "JavaScript",
            "JQuery",
            "PHP",
            "Banco de Dados"
        ]
    },
    {
        nome: "Emmunah Jóias",
        descricao: "Este é um site que desenvolvi para meu irmão, ele vende jóias de prata e moeda antiga.",
        imagem: "images/img-projetos/site-Emmunah.png",
        link: "http://projetos.nicchon.com/projetos/ecommerce-j%C3%B3ias",
        tecnologias: [
            "JavaScript",
            "PHP",
            "Banco de Dados"
        ]
    },
    {
        nome: "Facebook",
        descricao: "Este é um dos projetos práticos do curso, onde criei uma réplica do site do facebook",
        imagem: "images/img-projetos/site-facebook.png",
        link: "http://projetos.nicchon.com/projetos/facebook-login",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Cena Construção",
        descricao: "Este é um dos projetos práticos do curso, um site de empresa de construção",
        imagem: "images/img-projetos/site-cena.png",
        link: "http://projetos.nicchon.com/projetos/cena-constru%C3%A7%C3%A3o",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "Venda de Carros",
        descricao: "Este é um dos projetos práticos do curso, a réplica de uma página de venda de carros",
        imagem: "images/img-projetos/site-venda-de-carros.png",
        link: "http://projetos.nicchon.com/projetos/venda-de-carros",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP"
        ]
    },
    {
        nome: "Danki Code",
        descricao: "Este é um dos projetos práticos do curso, a réplica de uma página inicial da Danki Code",
        imagem: "images/img-projetos/site-dankicode.png",
        link: "http://projetos.nicchon.com/projetos/danki-code-2",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "ProductRunt",
        descricao: "Este é um dos projetos práticos do curso, onde desenvolvi um site sobre comunicação",
        imagem: "images/img-projetos/site-productRunt.png",
        link: "http://projetos.nicchon.com/projetos/productrunt",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "Odontologia",
        descricao: "Este é um dos projetos práticos do curso, onde desenvolvi um site sobre odontologia",
        imagem: "images/img-projetos/site-odontologia.png",
        link: "http://projetos.nicchon.com/projetos/odontologia",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "Jogo pedra, papel ou tesoura",
        descricao: "Este é um jogo que criei a partir de um dos projetos do curso de javascript da Danki Code",
        imagem: "images/img-projetos/jogo-pedra-papel-ou-tesoura.png",
        link: "http://nicchonsanchez.github.io/projetos/jogo-pedra-papel-tesoura/",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }
]

var projectsBox = $('#projetos .projects-box');

listaProjetos.forEach((projeto, index) => {
    var technologias = listaProjetos[index]["tecnologias"].map(tech => (
        `<div value="${tech}"><i class="circle"></i> ${tech}</div>`
    )).join('');

    projectsBox.append(`
        <a href="${listaProjetos[index]["link"]}" target="_blank" rel="noopener noreferrer">
            <article class="card">
                <figure>
                    <img class="card-img-top" src="${listaProjetos[index]["imagem"]}" alt="Imagem do ${listaProjetos[index]["nome"]}">
                </figure>
                
                <div class="card-body">
                    <h5 class="card-title">${listaProjetos[index]["nome"]}</h5>
                    <p class="card-text">${listaProjetos[index]["descricao"]}</p>
                    <p class="card-text"><small class="text-muted">Clique no card para entrar no site</small></p>
                    <div class="tecnologias">
                        ${technologias}
                    </div>
                </div>
            </article>
        </a>
        <!-- /.project-card -->
    `)

})