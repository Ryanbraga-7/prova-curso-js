const botao = document.getElementById("btnCarregar");
const lista = document.getElementById("listaUsuarios");
const erroMsg = document.getElementById("mensagemErro");

botao.addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {
  lista.innerHTML = "";
  erroMsg.textContent = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const usuarios = await response.json();

    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = `${usuario.name} - ${usuario.email}`;
      lista.appendChild(li);
    });

  } catch (erro) {
    erroMsg.textContent = "Erro ao carregar os usuários, tente novamente mais tarde.";
    console.error(erro);
  }
}