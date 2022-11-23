/*Conteúdo dos Modais nos Portifólios - array de objetos chave:valor*/
const conteudo = [
    {
        titulo: "<h4>HTML5</h4>",
        subtitulo: "<h5>HyperText Markup Language</h5>",
        paragrafo: "<p>Linguagem de Marcação de Hyperparagrafo é o código que você usa para estruturar seu conteúdo web, dando significado e propósito. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML' target='_blank'>Site Oficial</a>"
    },
    {
        titulo: "<h4>CSS3</h4>",
        subtitulo: "<h5>Cascading Style Sheets</h5>",
        paragrafo: "<p>Folha de estilo em cascata é usada para estilizar e arranjar páginas web — por exemplo, para alterar a fonte, cor, tamanho e espaçamento do seu conteúdo, separá-lo em multiplas colunas, ou então adicionar animações e outras implementações decorativas. Esse módulo provê um começo sutil em seu caminho pelo domínio do CSS com o básico de como ele funciona, como é a aparência da sintaxe e como você pode começar a utilizá-lo para estilizar seu HTML.  </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/CSS' target='_blank'>Site Oficial</a>"
    },
    {
        titulo: "<h4>JavaScript</h4>",
        subtitulo: "<h5>JavaScript</h5>",
        paragrafo: "<p>JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D, vídeos, etc. - você pode apostar que o Javascript provavelmente está envolvido. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript' target='_blank'>Site Oficial</a>"
    },
    {
        titulo: "<h4>Bootstrap</h4>",
        subtitulo: "<h5>Bootstrap</h5>",
        paragrafo: "<p>O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS. Crie protótipos rápidamente ou aplicações completas com nossas variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com jQuery. </p>",
        link: "<a href='https://getbootstrap.com.br/' target='_blank'>Site Oficial</a>"
    },
    {
        titulo: "<h4>Font Awesome</h4>",
        subtitulo: "<h5>Font Awesome</h5>",
        paragrafo: "<p>Font Awesome é um conjunto de ferramentas de fontes e ícones com base em CSS e LESS, totalmente personalizável e fácil de usar. Os ícones são totalmente personalizáveis. Você pode alterar a cor, tamanho, estilo e até mesmo adicionar animação aos ícones. </p>",
        link: "<a href='https://fontawesome.com/' target='_blank'>Site Oficial</a>"
    }
]

/*Injetando conteúdo nos modais --- MELHORAR O CÓDIGO ---*/

const conteudoDinamico = document.querySelectorAll('.conteudo-dinamico');
conteudoDinamico.innerHTML = `${conteudo[0].subtitulo + conteudo[0].paragrafo + conteudo[0].link}`
console.log(conteudo);

/*este trecho funciona*/
const titulo = document.querySelector('.titulo');
titulo.innerHTML = `${conteudo[0].titulo}`;

const titulo1 = document.querySelector('.titulo1');
titulo1.innerHTML = `${conteudo[1].titulo}`;

const titulo2 = document.querySelector('.titulo2');
titulo2.innerHTML = `${conteudo[2].titulo}`;

const titulo3 = document.querySelector('.titulo3');
titulo3.innerHTML = `${conteudo[3].titulo}`;

const titulo4 = document.querySelector('.titulo4');
titulo4.innerHTML = `${conteudo[4].titulo}`;

const html = document.querySelector('.html');
html.innerHTML = `${conteudo[0].subtitulo + conteudo[0].paragrafo + conteudo[0].link}`;

const css = document.querySelector('.css');
css.innerHTML = `${conteudo[1].subtitulo + conteudo[1].paragrafo + conteudo[1].link}`;

const javascript = document.querySelector('.javascript');
javascript.innerHTML = `${conteudo[2].subtitulo + conteudo[2].paragrafo + conteudo[2].link}`;

const bootstrap = document.querySelector('.bootstrap');
bootstrap.innerHTML = `${conteudo[3].subtitulo + conteudo[3].paragrafo + conteudo[3].link}`;

const fontAwesome = document.querySelector('.font-awesome');
fontAwesome.innerHTML = `${conteudo[4].subtitulo + conteudo[4].paragrafo + conteudo[4].link}`;