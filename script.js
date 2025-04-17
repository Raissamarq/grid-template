fetch("https://images-api.nasa.gov/search?q=earth&media_type=image")
  .then((response) => response.json())
  .then((data) => {
    const items = data.collection.items;

    // Pegando até 4 imagens
    const imagensTerra = items.slice(0, 6).map((item) => item.links[0].href);

    // Seleciona as classes que começam com image
    const imagesEarth = document.querySelectorAll('img[class*="image"]');

    imagesEarth.forEach((img, index) => {
      if (imagensTerra[index]) {
        img.src = imagensTerra[index];
        img.alt = "Imagem da Terra via NASA";
      }
    });
  })
  .catch((error) => {
    console.error("Erro ao buscar imagens da NASA:", error);
  });
