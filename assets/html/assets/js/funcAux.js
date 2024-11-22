const createRadioSelect = (radios) => {
	// Cria o elemento <select>
	const select = document.createElement("select");
	select.id = "combo";
	select.name = "combo";

	// Cria a opção inicial (desabilitada e selecionada por padrão)
	const defaultOption = document.createElement("option");
	defaultOption.textContent = "Escolha rádio";
	defaultOption.disabled = true;
	defaultOption.selected = true;
	select.appendChild(defaultOption);

	// Adiciona as opções do JSON
	radios.forEach(radio => {
		const option = document.createElement("option");
		option.value = radio.url; // Define a URL como valor
		option.textContent = radio.name; // Define o nome como texto visível
		select.appendChild(option);
	});

	return select;
}

const criarPlayerAudio = (url) => {
	// Criar elemento audio
	const audioElement = document.createElement('audio');
	audioElement.setAttribute('controls', '');

	// Criar sources
	const tiposAudio = [
		'application/x-mpegURL',
		'audio/aac',
		'audio/mpeg'
	];

	// Adicionar cada source ao elemento audio
	tiposAudio.forEach(tipo => {
		const sourceElement = document.createElement('source');
		sourceElement.setAttribute('src', url);
		sourceElement.setAttribute('type', tipo);
		audioElement.appendChild(sourceElement);
	});

	// Adicionar mensagem de fallback
	const fallbackText = document.createTextNode('Seu navegador não suporta reprodução de áudio.');
	audioElement.appendChild(fallbackText);

	return audioElement;
}
