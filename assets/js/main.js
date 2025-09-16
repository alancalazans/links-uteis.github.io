let categoria = "Pesquisa",
    dados,
    menu,
    sites;

const {
  clickCategory,
  getJson,
  goSites,
  removeAtribute,
  screenAdjust,
  setAtribute
} = aux;

screenAdjust();

fetch('assets/templates/menu.jade')
.then(response => response.text())
.then(html => {
  dados = getJson('assets/json/menu.json');
  dados.then(json => {
    menu = json;
    document.getElementById('menu').innerHTML = jade.compile(html)();
    setAtribute();
    goSites();
  });
})
.catch(error => {
  console.log(error.message);
});
