// Script principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
  // Marcar link ativo na sidebar
  markActiveNavLink();

  // Inicializar tooltips se necessário
  initializeTooltips();

  // Configurar validação de formulários
  setupFormValidation();
});

// Marcar link ativo na navegação
function markActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

// Inicializar tooltips (se necessário no futuro)
function initializeTooltips() {
  // Implementar tooltips se necessário
}

// Configurar validação básica de formulários
function setupFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#ef4444";
        } else {
          field.style.borderColor = "#e5e7eb";
        }

        // Validação específica para email
        if (field.type === "email" && field.value) {
          if (!utils.isValidEmail(field.value)) {
            isValid = false;
            field.style.borderColor = "#ef4444";
            utils.showNotification(
              "Por favor, insira um email válido",
              "error"
            );
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
        utils.showNotification(
          "Por favor, preencha todos os campos obrigatórios",
          "error"
        );
      }
    });

    // Remover erro ao digitar
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (this.style.borderColor === "rgb(239, 68, 68)") {
          this.style.borderColor = "#e5e7eb";
        }
      });
    });
  });
}

// Função para confirmar exclusões
function confirmDelete(message = "Tem certeza que deseja excluir este item?") {
  return confirm(message);
}

// Função para reload da página atual
function reloadPage() {
  window.location.reload();
}

// Função para navegar para uma página
function navigateTo(url) {
  window.location.href = url;
}

// Handler global para erros de API
window.addEventListener("unhandledrejection", function (event) {
  console.error("Erro não tratado:", event.reason);
  utils.showNotification(
    "Ocorreu um erro inesperado. Tente novamente.",
    "error"
  );
});

// Interceptar formulários para melhor UX
document.addEventListener("submit", function (e) {
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  if (submitBtn) {
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
    submitBtn.disabled = true;

    // Restaurar botão após um tempo (será sobrescrito pelos handlers específicos)
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 3000);
  }
});
