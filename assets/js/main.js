var categoria = "Pesquisa",
		dados,
		menu,
		sites,
		/* module */
		clickCategory  = aux.clickCategory,
		getJson        = aux.getJson,
		goSites        = aux.goSites,
		removeAtribute = aux.removeAtribute,
		screenAdjust   = aux.screenAdjust,		
		setAtribute    = aux.setAtribute;
		
screenAdjust();

fetch('assets/templates/menu.jade')
.then(response => response.text())
.then(html => {
	dados = getJson('assets/json/menu.json');
	dados.then(json => {
		menu = json;
		document.getElementById('menu').innerHTML = jade.compile(html)();
		setAtribute();
	});
})
.catch(error => {
	console.log(error.message);
});

goSites();