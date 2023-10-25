document.getElementById("cpf").addEventListener("input", function () {
  const campo = document.getElementById("cpf");
  const tamanho = campo.value.length;
  if (tamanho == 3) {
    campo.value = campo.value + ".";
  } else if (tamanho == 7) {
    campo.value = campo.value + ".";
  } else if (tamanho == 11) {
    campo.value = campo.value + "-";
  }
});
function mudarTipo() {
  const tipo = document.getElementById("pass");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}
