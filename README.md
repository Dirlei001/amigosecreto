Documentação do Sistema de Amigo Secreto
 

Introdução
Este sistema permite aos usuários adicionarem nomes de amigos a uma lista e, posteriormente, realizar um sorteio para determinar um amigo secreto aleatório. O sistema é composto por um arquivo HTML, um arquivo CSS para estilização, um arquivo assents aonde estão as imagens utilizadas no sistema e um arquivo JavaScript para a lógica da aplicação.


Estrutura do Projeto
/amigo-secreto
├── index.html
├── style.css
├── app.js
└── assets/
index.html
O arquivo index.html contém a estrutura da página, incluindo os campos de entrada, botões e área para exibição dos resultados.

Elementos Principais:

Campo de entrada: Permite a inserção de nomes.

Botão "Adicionar": Aciona a função adicionarAmigo().

Lista de amigos: Exibe os nomes adicionados.

Botão "Sortear amigo": Aciona a função sortearAmigo().

Exibição do resultado: Mostra o nome do amigo sorteado.

style.css

Este arquivo define o estilo visual da página, incluindo:

Definição de cores e fontes.

Layout responsivo.

Estilização dos botões e listas.

app.js

Contém a lógica da aplicação.

Variáveis

amigos: Array que armazena os nomes adicionados.

Funções

adicionarAmigo(): Adiciona um nome à lista, evitando duplicatas.

atualizarLista(): Atualiza a lista exibida no HTML.

removerAmigo(index): Remove um nome da lista.

sortearAmigo(): Sorteia aleatoriamente um nome da lista.

Funcionamento do Sistema

Adicionar um Amigo

O usuário digita um nome no campo de entrada.

Ao clicar em "Adicionar", o nome é inserido na lista, caso não seja duplicado.

A lista é atualizada dinamicamente na interface.

Remover um Amigo

Cada nome na lista possui um botão de remoção.

Ao clicar no botão "❌", o nome é removido da lista.

A interface é atualizada.

Sortear um Amigo

O usuário clica no botão "Sortear amigo".

Um nome é escolhido aleatoriamente.

O nome sorteado é exibido na tela.

validações

O sistema não permite colocar o mesmo nome duas vezes na lista.

São necessários pelo menos 2 nomes para o sistema realizar o sorteio.

Requisitos do Sistema

Navegador moderno (Chrome, Firefox, Edge, Safari)

Conexão com a internet para carregar fontes externas (Google Fonts)


