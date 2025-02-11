const sobre = document.querySelector("#about");
const form = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGitHub() {
  try {
    const dadosPerfil = await fetch(`https://api.github.com/users/c-rocha7`);
    const perfil = await dadosPerfil.json();

    let conteudo = `
        <!-- Imagem da Seção Sobre -->
        <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}" />

        <!-- Texto da Seção Sobre -->
        <article id="about_texto">
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil
            magni doloremque sint, qui facere fugit sequi optio molestiae sunt!
            Maiores sapiente atque nulla mollitia earum delectus nostrum natus
            architecto?
          </p>

          <!-- Detalhes do Github -->
          <div id="about_github" class="flex sobre_github">
            <a href="${perfil.html_url}" target="_blank" class="botao">
              Github
            </a>
            <p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositórios</p>
          </div>
        </article>
    `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txttEmail");

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto");

  if (campoAssunto.value.length < 5) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  form.submit();
});

getApiGitHub();
