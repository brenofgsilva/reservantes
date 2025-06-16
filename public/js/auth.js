// Funções de utilidade para a autenticação

// Função para alternar a visibilidade da senha
function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = passwordInput.nextElementSibling;
  const icon = toggleButton.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Função para verificar se o usuário está logado (via cookie)
function checkAuthStatus() {
  return document.cookie.includes("auth_token=");
}

// Função para fazer logout via API
async function logout() {
  try {
    await fetch("/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Redirecionar para a página de login
    window.location.href = "/login";
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
}

// Event listener para botão de logout em toda a aplicação
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      logout();
    });
  }
});
