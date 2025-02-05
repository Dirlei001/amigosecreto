let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); 

 

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    nomeInput.value = ""; 
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        
        let btnRemover = document.createElement("button");
          btnRemover.textContent = "❌";
          btnRemover.style.marginLeft = "10px";
    
        btnRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}
