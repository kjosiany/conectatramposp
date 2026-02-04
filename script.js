document.addEventListener("DOMContentLoaded", function() {
  // -------- BUSCA DE VAGAS --------
  const inputBusca = document.getElementById("busca");
  const vagas = document.querySelectorAll(".vaga");

  if (inputBusca) {
    inputBusca.addEventListener("input", function() {
      const termo = inputBusca.value.toLowerCase();
      vagas.forEach(vaga => {
        const texto = vaga.textContent.toLowerCase();
        vaga.style.display = texto.includes(termo) ? "" : "none";
      });
    });
  }

  // -------- DETALHES --------
  const botoes = document.querySelectorAll(".btn-detalhes");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      const detalhes = btn.nextElementSibling;
      detalhes.classList.toggle("oculto");
    });
  });

  // -------- BOTÃO VOLTAR AO TOPO --------
  const btnTopo = document.getElementById("btnTopo");
  if (btnTopo) {
    window.addEventListener("scroll", () => {
      btnTopo.classList.toggle("hidden", window.scrollY < 200);
    });
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});

