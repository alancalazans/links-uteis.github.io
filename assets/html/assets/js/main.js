// DOM Elements
const radioGrid = document.getElementById('radio-grid');
const playerBar = document.getElementById('player-bar');
const audioWrapper = document.getElementById('audio-wrapper');
const stationNameEl = document.getElementById('station-name');
const stationStatusEl = document.getElementById('station-status');
const volumeSlider = document.getElementById('volumeSlider');

// State
let currentAudio = null;
let currentButton = null;

// Initialize
function init() {
  renderGrid();
  setupVolumeControl();
}

// Render Grid of Radios
function renderGrid() {
  radioGrid.innerHTML = '';
  
  radiosJson.forEach((radio, index) => {
    const card = document.createElement('div');
    card.className = 'radio-card';
    card.dataset.url = radio.url;
    card.dataset.name = radio.name;
    
    // Icon (generic for now, or could use radio specific if available)
    const icon = document.createElement('div');
    icon.className = 'radio-icon';
    icon.textContent = '📻'; // Emoji as icon or use font awesome if desired
    
    const title = document.createElement('div');
    title.className = 'radio-name';
    title.textContent = radio.name;
    
    card.appendChild(icon);
    card.appendChild(title);
    
    card.addEventListener('click', () => playRadio(radio, card));
    
    radioGrid.appendChild(card);
  });
}

// Play Selected Radio
function playRadio(radio, cardEl) {
  // Update UI Active State
  const allCards = document.querySelectorAll('.radio-card');
  allCards.forEach(c => c.classList.remove('active'));
  cardEl.classList.add('active');
  
  // Update Player Info
  stationNameEl.textContent = radio.name;
  stationStatusEl.textContent = 'Carregando...';
  playerBar.classList.remove('hidden');
  
  // Force reflow for animation if needed or simple add class
  playerBar.classList.add('visible');

  // Stop previous audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  
  // Create and Play New Audio
  audioWrapper.innerHTML = '';
  const audio = createAudioElement(radio.url);
  currentAudio = audio;
  audioWrapper.appendChild(audio);
  
  audio.volume = volumeSlider.value;
  
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      stationStatusEl.textContent = 'Reproduzindo';
    })
    .catch(error => {
      console.error("Auto-play prevented", error);
      stationStatusEl.textContent = 'Clique no play para iniciar';
    });
  }
}

// Helper to create Audio Element
function createAudioElement(url) {
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.autoplay = true;
  
  // Add sources
  const types = ['application/x-mpegURL', 'audio/aac', 'audio/mpeg'];
  types.forEach(type => {
      const source = document.createElement('source');
      source.src = url;
      source.type = type;
      audio.appendChild(source);
  });
  
  // Fallback for direct src if sources fail or for simple streams
  if (!audio.canPlayType('application/x-mpegURL')) {
      audio.src = url;
  }

  // Events
  audio.onplaying = () => stationStatusEl.textContent = 'Reproduzindo';
  audio.onpause = () => stationStatusEl.textContent = 'Pausado';
  audio.onwaiting = () => stationStatusEl.textContent = 'Bufferizando...';
  audio.onerror = () => stationStatusEl.textContent = 'Erro ao carregar stream';

  return audio;
}

// Volume Control
function setupVolumeControl() {
  volumeSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    if (currentAudio) {
      currentAudio.volume = val;
    }
  });
}

// Start
document.addEventListener('DOMContentLoaded', init);
