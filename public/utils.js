// Utilitários globais
const utils = {
  // Formatar datas
  formatDate(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  // Formatar apenas a data
  formatDateOnly(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  },

  // Formatar apenas o horário
  formatTime(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  // Mostrar notificações
  showNotification(message, type = "success") {
    // Remove notificação existente
    const existing = document.querySelector(".notification");
    if (existing) {
      existing.remove();
    }

    // Criar nova notificação
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove após 3 segundos
    setTimeout(() => {
      notification.remove();
    }, 3000);
  },

  // Validar email
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Capitalizar primeira letra
  capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Truncar texto
  truncate(str, length = 50) {
    if (!str) return "";
    return str.length > length ? str.substring(0, length) + "..." : str;
  },

  // Converter para formato de input datetime-local
  toDateTimeLocal(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16);
  },

  // Debounce para pesquisas
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
};

// Funções globais para modais
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    // Reset form if exists
    const form = modal.querySelector("form");
    if (form) {
      form.reset();
      // Clear hidden ID fields
      const hiddenId = form.querySelector('input[type="hidden"][id$="Id"]');
      if (hiddenId) {
        hiddenId.value = "";
      }
    }

    // Reset modal title
    const modalTitle = modal.querySelector("#modalTitle");
    if (modalTitle) {
      modalTitle.textContent = modalTitle.textContent.replace("Editar", "Novo");
    }
  }
}

// Fechar modal clicando fora dele
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Fechar modal com ESC
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.querySelector('.modal[style*="block"]');
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
});
