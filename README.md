                       Documentação do Sistema de Amigo Secreto
 

Introdução
Este sistema permite aos usuários adicionarem nomes de amigos a uma lista e, posteriormente, realizar um sorteio para determinar um amigo secreto aleatório. O sistema é composto por um arquivo HTML, um arquivo CSS para estilização, um arquivo assents aonde estão as imagens utilizadas no sistema e um arquivo JavaScript para a lógica da aplicação.
________________________________________

Estrutura do Projeto
/amigo-secreto
├── index.html
├── style.css
├── app.js
└── assets/
1. index.html
O arquivo index.html contém a estrutura da página, incluindo os campos de entrada, botões e área para exibição dos resultados.
Elementos Principais:
•	Campo de entrada: Permite a inserção de nomes.
•	Botão "Adicionar": Aciona a função adicionarAmigo().
•	Lista de amigos: Exibe os nomes adicionados.
•	Botão "Sortear amigo": Aciona a função sortearAmigo().
•	Exibição do resultado: Mostra o nome do amigo sorteado.
2. style.css
Este arquivo define o estilo visual da página, incluindo:
•	Definição de cores e fontes.
•	Layout responsivo.
•	Estilização dos botões e listas.
3. app.js
Contém a lógica da aplicação.
Variáveis
•	amigos: Array que armazena os nomes adicionados.
Funções
•	adicionarAmigo(): Adiciona um nome à lista, evitando duplicatas.
•	atualizarLista(): Atualiza a lista exibida no HTML.
•	removerAmigo(index): Remove um nome da lista.
•	sortearAmigo(): Sorteia aleatoriamente um nome da lista.
________________________________________
Funcionamento do Sistema
1. Adicionar um Amigo
1.	O usuário digita um nome no campo de entrada.
2.	Ao clicar em "Adicionar", o nome é inserido na lista, caso não seja duplicado.
3.	A lista é atualizada dinamicamente na interface.
2. Remover um Amigo
1.	Cada nome na lista possui um botão de remoção.
2.	Ao clicar no botão "❌", o nome é removido da lista.
3.	A interface é atualizada.
3. Sortear um Amigo
1.	O usuário clica no botão "Sortear amigo".
2.	Um nome é escolhido aleatoriamente.
3.	O nome sorteado é exibido na tela.
4. validações
1.	O sistema não permite colocar o mesmo nome duas vezes na lista.
2.	São necessários pelo menos 2 nomes para o sistema realizar o sorteio.
________________________________________
Requisitos do Sistema
•	Navegador moderno (Chrome, Firefox, Edge, Safari)
•	Conexão com a internet para carregar fontes externas (Google Fonts)


