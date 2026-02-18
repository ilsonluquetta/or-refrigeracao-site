// ===== CONFIG =====
// Coloque seu número aqui (DDI+DDD+número, sem espaços)
const PHONE_E164 = "5513996396953";
// Texto que aparece no site (bonito)
const PHONE_PRETTY = "+55 (13) 99639-6953";

// ===== CARTÃO CONTATO (se existir) =====
const phoneText = document.getElementById("phoneText");
if (phoneText) phoneText.textContent = PHONE_PRETTY;

const phoneLink = document.getElementById("phoneLink");
if (phoneLink) phoneLink.href = `tel:+${PHONE_E164}`;

const whatsLink = document.getElementById("whatsLink");
if (whatsLink) {
  whatsLink.href = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Olá! Vim pelo site da OR. Quero um orçamento.")}`;
}

// ===== BOTÕES FLUTUANTES (os principais) =====
const btnWhats = document.getElementById("btnWhats");
if (btnWhats) {
  btnWhats.href = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Olá! Vim pelo site da OR. Quero um orçamento.")}`;
}

const btnCall = document.getElementById("btnCall");
if (btnCall) {
  btnCall.href = `tel:+${PHONE_E164}`;
}

// ===== FORMULÁRIO (se existir) =====
const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const whats = (data.get("whats") || "").toString().trim();
    const msg  = (data.get("msg")  || "").toString().trim();

    const text = `Olá! Sou ${nome || "Cliente"}. Meu WhatsApp é ${whats || "não informado"}. Serviço: ${msg || "sem detalhes"}.`;
    window.open(`https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

