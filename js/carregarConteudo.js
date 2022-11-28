/*Texto dos títulos array*/

const titulo = [
    `<h4>HTML5</h4>`,
    `<h4>CSS3</h4>`,
    `<h4>JavaScript</h4>`,
    `<h4>Bootstrap</h4>`,
    `<h4>Font Awesome</h4>`,
    `<h4>Angular</h4>`,
    `<h4>TypeScript</h4>`,
    `<h4>React</h4>`
];

/*Conteúdo dos Modais nos Portifólios - array de objetos chave:valor*/

const conteudo = [
    {
        nome:'<p>HyperText Markup Language - linguagem de marcação de texto</p>',
        texto:'<p>Linguagem de Marcação de Hypertexto é o código que você usa para estruturar seu conteúdo web, dando significado e propósito.</p>',
        link:'<a href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML" target="_blank">Site Oficial</a>'
    },
    {
        nome:'<p>Cascading Style Sheets - linguagem de estilização de componentes</p>',
        texto:'<p>Folha de estilo em cascata é usada para estilizar e arranjar páginas web — por exemplo, para alterar a fonte, cor, tamanho e espaçamento do seu conteúdo, separá-lo em multiplas colunas, ou então adicionar animações e outras implementações decorativas.</p>',
        link:'<a href="https://developer.mozilla.org/pt-BR/docs/Learn/CSS" target="_blank">Site Oficial</a>'
    },
    {
        nome:'<p>Linguagem de programação</p>',
        texto:'<p>JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D.</p>',
        link:'<a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript" target="_blank">Site Oficial</a>'
    },
    {
        nome: '<p>Biblioteca de estilização</p>',
        texto: '<p>O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS. Crie protótipos rápidamente ou aplicações completas com nossas variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com jQuery.</p>',
        link:'<a href="https://getbootstrap.com.br/docs/4.1/getting-started/introduction/" target="_blank">Site Oficial</a>'
    },  
    {
        nome:'<p>Biblioteca de ícones</p>',
        texto:'<p>Font Awesome é um conjunto de ferramentas de fontes e ícones com base em CSS e LESS, totalmente personalizável e fácil de usar. Os ícones são totalmente personalizáveis. Você pode alterar a cor, tamanho, estilo e até mesmo adicionar animação aos ícones.</p>',
        link:'<a href="https://fontawesome.com/" target="_blank">Site Oficial</a>'
    },
    {
        nome:'<p>Framework Front-end</p>',
        texto:'<p>Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.</p>',
        link:'<a href="https://angular.io/docs" target="_blank">Site Oficial</a>'
    },
    {
        nome:'<p>Superset JavaScript</p>',
        texto: '<p>Typescript é uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente. Então esse “superset” foi criado para adicionar recursos de tipagem estáticas à linguagem original.</p>',
        link:'<a href="https://www.typescriptlang.org/docs/" target="_blank">Site Oficial</a>'
    },
    {
        nome:'<p>Framework Front-end</p>',
        texto:'<p>O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.</p>',
        link:'<a href="https://pt-br.reactjs.org/" target="_blank">Site Oficial</a>'
    }
];

/*Injetando conteúdo nos HTML*/

    //capturando as classes dos títulos

const titulohtml = document.querySelector('.titulohtml');
const titulocss = document.querySelector('.titulocss');
const titulojavascript = document.querySelector('.titulojavascript');
const titulobootstrap = document.querySelector('.titulobootstrap');
const titulofontawesome = document.querySelector('.titulofontawesome');
const tituloangular = document.querySelector('.tituloangular');
const titulotypescript = document.querySelector('.titulotypescript');
const tituloreact = document.querySelector('.tituloreact');

titulohtml.innerHTML = `${titulo[0]}`;
titulocss.innerHTML = `${titulo[1]}`;
titulojavascript.innerHTML = `${titulo[2]}`;
titulobootstrap.innerHTML = `${titulo[3]}`;
titulofontawesome.innerHTML = `${titulo[4]}`;
tituloangular.innerHTML = `${titulo[5]}`;
titulotypescript.innerHTML = `${titulo[6]}`;
tituloreact.innerHTML = `${titulo[7]}`;

    //capturando as classes de conteúdos

const html = document.querySelector('.html');
const css = document.querySelector('.css');
const javascript = document.querySelector('.javascript');
const bootstrap = document.querySelector('.bootstrap');
const fontawesome = document.querySelector('.fontawesome');
const angular = document.querySelector('.angular');
const typescript = document.querySelector('.typescript');
const react = document.querySelector('.react');

html.innerHTML = `${conteudo[0].nome + conteudo[0].texto + conteudo[0].link}`;
css.innerHTML = `${conteudo[1].nome + conteudo[1].texto + conteudo[1].link}`;
javascript.innerHTML = `${conteudo[2].nome + conteudo[2].texto + conteudo[2].link}`;
bootstrap.innerHTML = `${conteudo[3].nome + conteudo[3].texto + conteudo[3].link}`;
fontawesome.innerHTML = `${conteudo[4].nome + conteudo[4].texto + conteudo[4].link}`;
angular.innerHTML = `${conteudo[5].nome + conteudo[5].texto + conteudo[5].link}`;
typescript.innerHTML = `${conteudo[6].nome + conteudo[6].texto + conteudo[6].link}`;
react.innerHTML = `${conteudo[7].nome + conteudo[7].texto + conteudo[7].link}`;
