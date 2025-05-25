const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dataForm = new FormData(form);
  const tamanhos = dataForm.getAll("tamanho").filter(el=>el);
  const data = Object.fromEntries(dataForm);
  data.tamanho = tamanhos;

  async function createNewItem(item) {
    const sendFetch = await fetch("https://frontback-integration.onrender.com/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const dataReceived = await sendFetch.json();
    console.log(dataReceived)
    alert(`Success creating new item: ${dataReceived.data.nome}`)
  }
  createNewItem(data);
});
