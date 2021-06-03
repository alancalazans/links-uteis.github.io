var categoria="Emails",
		menu,
		sites,
		dados;

getJson = (file) => { 
	return fetch(file)
	.then(res => res.json())
	.then(json => {
		return json;
	})
	.catch(error => {
		console.log(error.message);
	});
}

goSites = () => {
	fetch('assets/templates/sites.jade')
	.then(response => response.text())
	.then(html => {
		dados = getJson('assets/json/sites.json');
		dados.then(json => {
			sites = json;
			document.getElementById('sites').innerHTML = jade.compile(html)(); 
		});
	})
	.catch(error => {
		console.log(error.message);
	});
}

setAtributo = () => {
	document.getElementsByClassName(categoria)[0].setAttribute('class',categoria+' active');
}

removeAtributo = () => {
	document.getElementsByClassName(categoria)[0].setAttribute('class',categoria);
}

clickCategoria = (el) => {
	removeAtributo();
	categoria = el.getAttribute('class');
	setAtributo();
	goSites();
}

fetch('assets/templates/menu.jade')
.then(response => response.text())
.then(html => {
	dados = getJson('assets/json/menu.json');
	dados.then(json => {
		menu = json;
		document.getElementById('menu').innerHTML = jade.compile(html)();
		setAtributo();
	});
})
.catch(error => {
	console.log(error.message);
});

goSites();
