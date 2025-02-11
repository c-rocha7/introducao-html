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
            Desenvolvedor Full Stack com ampla experiência na manutenção e desenvolvimento de aplicações web, utilizando frameworks como Laravel e CodeIgniter, além de tecnologias como PHP, MySQL, Bootstrap e Docker. Tenho também habilidades na criação de páginas interativas com Tailwind CSS e jQuery, atuando em projetos que vão desde a manutenção de sistemas legados até o desenvolvimento de novas funcionalidades.
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
  const txtEmail = document.querySelector("#txtEmail");

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
