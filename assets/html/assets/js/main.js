// Seleciona o elemento de controle deslizante
const volumeSlider = document.getElementById('volumeSlider');

let audio = undefined;

// Cria dinamicamente tag select
document.getElementById('comboSelect').appendChild(createRadioSelect(radiosJson));
// Referência da tag select criada
const combo = document.getElementById('combo');

// Adicionar o event listener
combo.addEventListener('change', function() {
  // Ação a ser executada quando a opção selecionada for alterada
  let url = combo.value,
      texto = combo.innerText;

  /*
    Para substituir o conteúdo anterior ao invés de acrescentar,
    você pode usar o método innerHTML ou replaceChildren.
    Aqui estão exemplos de como fazer isso:

    Usando replaceChildren:
      document.getElementById('elAudio').replaceChildren(criarPlayerAudio(url));

    Usando innerHTML:
      document.getElementById('elAudio').innerHTML = '';
      document.getElementById('elAudio').appendChild(criarPlayerAudio(url));

    Ou de forma mais concisa:
  */
  document.getElementById('elAudio').innerHTML = criarPlayerAudio(url).outerHTML;

  // Seleciona o elemento de audio
  audio = document.getElementsByTagName('audio')[0];
  // Define o volume inicial
  audio.volume = volumeSlider.value; // Volume máximo
});

// Adiciona um evento para o controle deslizante
volumeSlider.addEventListener('input', function() {
  audio.volume = this.value; // Altera o volume do vídeo
});
