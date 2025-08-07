function validaFormulario() {
  const email = document.getElementById("email").value.trim();
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    feedbackElement.textContent = "Insira um email válido.";
    document.getElementById("email").focus();
    return false;
  } else {
    feedbackElement.textContent = "";
    enviaEmail();
    return true;
  }
}

function enviaEmail() {
  document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/enviarEmail", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro na requisição");

      const result = await response.json();
      alert(result.message);
      e.target.reset(); // Limpar o formulário
    } catch (error) {
      console.error("Falha ao enviar:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  });
}
