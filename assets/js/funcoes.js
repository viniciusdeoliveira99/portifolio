function validateEmailInput() {
  const emailInput = document.getElementById("emailInput").value.trim();
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    feedbackElement.textContent = "Insira um email válido.";
    //  alert("Insira um email válido.");
    document.getElementById("emailInput").focus();
    return false;
  } else {
    feedbackElement.textContent = "";
    return true;
  }
}
