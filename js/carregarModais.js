/*Conteúdo dos Modais nos Portifólios - array de objetos chave:valor*/
const conteudo = [
    {
        nome: "<p>HyperText Markup Language</p>",
        texto: "<p>Linguagem de Marcação de Hypertexto é o código que você usa para estruturar seu conteúdo web, dando significado e propósito. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML' target='_blank'>Site Oficial</a>"
    },
    {
        nome: "<p>Cascading Style Sheets</p>",
        texto: "<p>Folha de estilo em cascata é usada para estilizar e arranjar páginas web — por exemplo, para alterar a fonte, cor, tamanho e espaçamento do seu conteúdo, separá-lo em multiplas colunas, ou então adicionar animações e outras implementações decorativas. Esse módulo provê um começo sutil em seu caminho pelo domínio do CSS com o básico de como ele funciona, como é a aparência da sintaxe e como você pode começar a utilizá-lo para estilizar seu HTML.  </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/CSS' target='_blank'>Site Oficial</a>"
    },
    {
        nome: "<p>JavaScript</p>",
        texto: "<p>JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D, vídeos, etc. - você pode apostar que o Javascript provavelmente está envolvido. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript' target='_blank'>Site Oficial</a>"
    },
    {
        nome: "<p>Bootstrap</p>",
        texto: "<p>O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS. Crie protótipos rápidamente ou aplicações completas com nossas variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com jQuery. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started' target='_blank'>Site Oficial</a>"
    },
    {
        nome: "<p>Font Awesome</p>",
        texto: "<p>Font Awesome é um conjunto de ferramentas de fontes e ícones com base em CSS e LESS, totalmente personalizável e fácil de usar. Os ícones são totalmente personalizáveis. Você pode alterar a cor, tamanho, estilo e até mesmo adicionar animação aos ícones. </p>",
        link: "<a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started' target='_blank'>Site Oficial</a>"
    }
]

/*Injetando conteúdo nos modais --- MELHORAR O CÓDIGO ---*/

const html = document.querySelector('.html');
html.innerHTML = `${conteudo[0].nome + conteudo[0].texto + conteudo[0].link}`;

const css = document.querySelector('.css');
css.innerHTML = `${conteudo[1].nome + conteudo[1].texto + conteudo[1].link}`;

const javascript = document.querySelector('.javascript');
javascript.innerHTML = `${conteudo[2].nome + conteudo[2].texto + conteudo[2].link}`;

const bootstrap = document.querySelector('.bootstrap');
bootstrap.innerHTML = `${conteudo[3].nome + conteudo[3].texto + conteudo[3].link}`;

const fontAwesome = document.querySelector('.font-awesome');
fontAwesome.innerHTML = `${conteudo[4].nome + conteudo[4].texto + conteudo[4].link}`;