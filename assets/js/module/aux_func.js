const aux = {
  /*----------------------------------------
   * screenAjust()
   *----------------------------------------*/
  screenAdjust: () => {
    var windowWidth, windowHeight;
    //var screenWidth, screenHeight;

    const sizeOfThings = () => {
    	windowWidth = window.innerWidth;
    	windowHeight = window.innerHeight;
    	//screenWidth = screen.width;
    	//screenHeight = screen.height;

    	document.getElementById('container').style.height = (windowHeight-10).toString() + 'px';
    	document.getElementById('container').style.width = (windowWidth-100).toString() + 'px';
    	document.getElementById('menu').style.height = (windowHeight-10).toString() + 'px';
    	document.getElementById('sites').style.height = (windowHeight-10).toString() + 'px';
    };

    sizeOfThings();

    window.addEventListener('resize', () => { sizeOfThings() });
  },
  /*----------------------------------------
   * getJson(file)
   *----------------------------------------*/
  getJson: (file) => {
  	return fetch(file)
  	.then(res => res.json())
  	.then(json => {
  		return json;
  	})
  	.catch(error => {
  		console.log(error.message);
  	});
  },
  /*----------------------------------------
   * setAtribute()
   *----------------------------------------*/
  setAtribute: () => {
  	document.getElementsByClassName(categoria)[0].setAttribute('class',categoria+' active');
  },
  /*----------------------------------------
   * removeAtribute()
   *----------------------------------------*/
  removeAtribute: () => {
  	document.getElementsByClassName(categoria)[0].setAttribute('class',categoria);
  },
  /*----------------------------------------
   * clickCategory(el)
   *----------------------------------------*/
  clickCategory: (el) => {
  	removeAtribute();
  	categoria = el.getAttribute('class');
  	setAtribute();
  	goSites();
  },
  /*----------------------------------------
   * goSites()
   *----------------------------------------*/
  goSites: () => {
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
}
