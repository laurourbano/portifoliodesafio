/*Conteúdo dos Modais nos Portifólios*/
const conteudohtml = "HTML - Linguagem de Marcação de Hypertexto é o código que você usa para estruturar seu conteúdo web, dando significado e propósito. <a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started' target='_blank'>Site Oficial</a>"

const conteudocss = "CSS - Folha de estilo em cascata é usada para estilizar e arranjar páginas web — por exemplo, para alterar a fonte, cor, tamanho e espaçamento do seu conteúdo, separá-lo em multiplas colunas, ou então adicionar animações e outras implementações decorativas. Esse módulo provê um começo sutil em seu caminho pelo domínio do CSS com o básico de como ele funciona, como é a aparência da sintaxe e como você pode começar a utilizá-lo para estilizar seu HTML. <a href='https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps' target='_blank'>Site Oficial</a>"

const conteudojavascript = "JavaScript - JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D, vídeos, etc. - você pode apostar que o Javascript provavelmente está envolvido. <a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript' target='_blank'>Site Oficial</a>"

const conteudobootstrap = "Bootstrap - O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS. Crie protótipos rápidamente ou aplicações completas com nossas variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com jQuery. <a href='https://getbootstrap.com.br/docs/4.1/getting-started/introduction/' target='_blank'>Site Oficial</a>"

const conteudofontawesome = "Font Awesome - Font Awesome é um conjunto de ferramentas de fontes e ícones com base em CSS e LESS, totalmente personalizável e fácil de usar. Os ícones são totalmente personalizáveis. Você pode alterar a cor, tamanho, estilo e até mesmo adicionar animação aos ícones. <a href='https://fontawesome.com/docs' target='_blank'>Site Oficial</a>"

/*Injetando conteúdo nos modais*/

const html = document.querySelector('.html');
html.innerHTML = `${conteudohtml}`;

const css = document.querySelector('.css');
css.innerHTML = `${conteudocss}`;

const javascript = document.querySelector('.javascript');
javascript.innerHTML = `${conteudojavascript}`;

const bootstrap = document.querySelector('.bootstrap');
bootstrap.innerHTML = `${conteudobootstrap}`;

const fontAwesome = document.querySelector('.font-awesome');
fontAwesome.innerHTML = `${conteudofontawesome}`;