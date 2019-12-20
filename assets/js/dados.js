var dados = {
	"links":
	[
		// Pesquisa
		`<li class="inactive">
			<a href="#" id="pesquisa" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/pesquisa.png" width="20" height="20">Pesquisa
			</a>
		</li>`,
		// Emails
		`<li class="active">
			<a href="#" id="emails" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/emails.png" width="20" height="20">Emails
			</a>
		</li>`,
		// Rede Social
		`<li class="inactive">
			<a href="#" id="redesocial" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/rede_social.png" width="20" height="20">Rede Social
			</a>
		</li>`,
		// Filmes
		`<li class="inactive">
			<a href="#" id="filmes" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/filmes.png" width="20" height="20">Filmes
			</a>
		</li>`,
		// Rádios
		`<li class="inactive">
			<a href="#" id="radios" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/radios.png" width="20" height="20">Rádios
			</a>
		</li>`,
		// Concursos
		`<li class="inactive">
			<a href="#" id="concursos" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/concursos.png" width="20" height="20">Concursos
			</a>
		</li>`,
		// ENEM
		`<li class="inactive">
			<a href="#" id="enem" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/enem.png" width="20" height="20">ENEM
			</a>
		</li>`,
		// Ensino
		`<li class="inactive">
			<a href="#" id="ensino" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/ensino.png" width="20" height="20">Ensino
			</a>
		</li>`,
		// Notícias
		`<li class="inactive">
			<a href="#" id="noticias" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/noticias.png" width="20" height="20">Notícias
			</a>
		</li>`,
		// Linux
		`<li class="inactive">
			<a href="#" id="linux" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/linux.png" width="20" height="20">Linux
			</a>
		</li>`,
		// Úteis
		`<li class="inactive">
			<a href="#" id="uteis" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/uteis.png" width="20" height="20">Úteis
			</a>
		</li>`,
		// Bancos
		`<li class="inactive">
			<a href="#" id="bancos" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/bancos.png" width="20" height="20">Bancos
			</a>
		</li>`,
		// Des-Soft
		`<li class="inactive">
			<a href="#" id="dessoft" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/des_soft.png" width="20" height="20">Des-Soft
			</a>
		</li>`,
		// Loterias
		`<li class="inactive">
			<a href="#" id="loterias" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/loterias.png" width="20" height="20">Loterias
			</a>
		</li>`,
		// Nuvem
		`<li class="inactive">
			<a href="#" id="nuvem" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/nuvem.png" width="20" height="20">Nuvem
			</a>
		</li>`,
		// Serviços
		`<li class="inactive">
			<a href="#" id="servicos" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/servicos.png" width="20" height="20">Serviços
			</a>
		</li>`,
		// Diversos
		`<li class="inactive">
			<a href="#" id="diversos" onclick="clickLink(this);">
				<img src="assets/img/ico_menu/diversos.png" width="20" height="20">Diversos
			</a>
		</li>`
	],
/*
================================================================================
Bancos
================================================================================
*/
	'bancos':
	[
		{
			'title': 'Credicom',
			'href': 'http://www.credicom.com.br',
			'target': '_credicom',
			'img': '<img src="assets/img/png/sicoob-credicom.png" width="40" height="40" title="Credicom" alt="assets/img/png/sicoobcredicom.png" />'
		},
		{
			'title': 'Banco do Brasil S/A',
			'href': 'http://www.bb.com.br',
			'target': '_bb',
			'img': '<img src="assets/img/png/banco-do-brasil.png" width="40" height="40" title="Banco do Brasil S/A" alt="assets/img/png/banco-do-brasil.png" />'
		},
		{
			'title': 'Caixa Econômica',
			'href': 'http://www.caixa.gov.br',
			'target': '_cef',
			'img': '<img src="assets/img/png/caixa.png" width="40" height="40" title="Caixa Econômica" alt="assets/img/png/caixa.png" />'
		},
		{
			'title': 'Santander',
			'href': 'https://www.santander.com.br/',
			'target': '_santander',
			'img': '<img src="assets/img/png/santander.png" width="40" height="40" title="Santander" alt="assets/img/png/santander.png" />'
		},
		{
			'title': 'Itaú',
			'href': 'https://www.itau.com.br/',
			'target': '_itau',
			'img': '<img src="assets/img/png/itau.png" width="40" height="40" title="Itaú" alt="assets/img/png/itau.png" />'
		}
	],
/*
================================================================================
Concursos
================================================================================
*/
	'concursos':
	[
		{
			'title': 'PCI concursos',
			'href': 'http://www.pciconcursos.com.br/concursos',
			'target': '_pciconcursos',
			'img': '<img src="assets/img/png/pciconcursos.png" width="40" height="40" title="PCI concursos" alt="assets/img/png/pciconcursos.png" />'
		},
		{
			'title': 'Concursos abertos',
			'href': 'https://www.concursosabertos.com.br/',
			'target': '_concursos_abertos',
			'img': '<img src="assets/img/png/concursos_abertos.png" width="40" height="40" title="Concursos abertos" alt="assets/img/png/concursos_abertos.png" />'
		},
		{
			'title': 'JC-Concursos',
			'href': 'http://jcconcursos.uol.com.br/portal/index.html',
			'target': '_jc_concursos',
			'img': '<img src="assets/img/png/jc_concursos.png" width="40" height="40" title="JC-Concursos" alt="assets/img/png/jc_concursos.png" />'
		}
	],
/*
================================================================================
Des-Soft
================================================================================
*/
	'dessoft':
	[
		{
			'title': 'Xampp',
			'href': 'https://www.apachefriends.org/pt_br/download.html',
			'target': '_xampp',
			'img': '<img src="assets/img/png/xampp.png" width="40" height="40" title="Servidor de Desenvolvimento Apache" alt="assets/img/png/xampp.png" />'
		},
		{
			'title': 'VueJS',
			'href': 'https://br.vuejs.org/v2/guide/index.html',
			'target': '_vuejs',
			'img': '<img src="assets/img/png/vuejs.png" width="40" height="40" title="VueJS - Framework para construção de interfaces web" alt="assets/img/png/vuejs.png" />'
		},
		{
			'title': 'NodeJS',
			'href': 'https://nodejs.org/en/',
			'target': '_nodejs',
			'img': '<img src="assets/img/png/nodejs.png" width="40" height="40" title="Interpretador JavaScript para Desktop" alt="assets/img/png/nodejs.png" />'
		},
		{
			'title': 'NodeWebKit',
			'href': 'https://nwjs.io/',
			'target': '_nwjs',
			'img': '<img src="assets/img/png/nodewebkit.png" width="40" height="40" title="Para criar aplicações desktop em javascript" alt="assets/img/png/nodewebkit.png" />'
		},
		{
			'title': 'ElectronJS',
			'href': 'https://electronjs.org/',
			'target': '_electronjs',
			'img': '<img src="assets/img/png/electronjs.png" width="40" height="40" title="Para criar aplicações desktop em javascript" alt="assets/img/png/electronjs.png" />'
		},
		{
			'title': 'Ionic framework',
			'href': 'https://ionicframework.com/',
			'target': '_ionic',
			'img': '<img src="assets/img/png/ionic.png" width="40" height="40" title="Para criar app para smartphones" alt="assets/img/png/ionic.png" />'
		},
		{
			'title': 'CDNJS',
			'href': 'https://cdnjs.com/',
			'target': '_cdnjs',
			'img': '<img src="assets/img/png/cdnjs.png" width="100" height="40" title="Para baixar módulos javascript" alt="assets/img/png/cdnjs.png" />'
		},
		{
			'title': 'Vim',
			'href': 'https://www.vim.org/',
			'target': '_vim',
			'img': '<img src="assets/img/png/vim.png" width="40" height="40" title="Editor Vim" alt="assets/img/png/vim.png" />'
		},
		{
			'title': 'NeoVim',
			'href': 'https://github.com/neovim/neovim',
			'target': '_neovim',
			'img': '<img src="assets/img/png/neovim.png" width="40" height="40" title="Editor NeoVim (fork do vim)" alt="assets/img/png/neovim.png" />'
		},
		{
			'title': 'Komodo Edit',
			'href': 'https://www.activestate.com/komodo-edit',
			'target': '_komodo-edit',
			'img': '<img src="assets/img/png/komodo-edit.png" width="40" height="40" title="Komodo IDE" alt="assets/img/png/komodo-edit.png" />'
		},
		{
			'title': 'Visual Studio Code',
			'href': 'https://code.visualstudio.com/',
			'target': '_visual-studio-code',
			'img': '<img src="assets/img/png/visual-studio-code.png" width="40" height="40" title="Visual Studio Code" alt="assets/img/png/visual-studio-code.png" />'
		},
		{
			'title': 'Atom IDE',
			'href': 'https://atom.io/',
			'target': '_atom-ide',
			'img': '<img src="assets/img/png/atom-ide.png" width="40" height="40" title="Atom IDE" alt="assets/img/png/atom-ide.png" />'
		},
		{
			'title': 'Micro Editor',
			'href': 'https://github.com/zyedidia/micro',
			'target': '_micro',
			'img': '<img src="assets/img/png/micro.png" width="40" height="40" title="Micro Editor" alt="assets/img/png/micro.png" />'
		},
		{
			'title': 'Golang',
			'href': 'https://golang.org',
			'target': '_go',
			'img': '<img src="assets/img/png/go.png" width="40" height="40" title="Golang" alt="assets/img/png/go.png" />'
		},
		{
			'title': 'Lazarus',
			'href': 'http://www.lazarus-ide.org/',
			'target': '_lazarus',
			'img': '<img src="assets/img/png/lazarus.png" width="40" height="40" title="IDE similar ao Delphi" alt="assets/img/png/lazarus.png" />'
		},
		{
			'title': 'Ionic Brazil',
			'href': 'https://github.com/IonicBrazil/guia-do-desenvolvedor',
			'target': '_ionicbrazil',
			'img': '<img src="assets/img/png/ionicbrazil.png" width="40" height="40" title="Site sobre Ionic" alt="assets/img/png/ionicbrazil.png" />'
		},
		{
			'title': 'Aurélio vim',
			'href': 'http://aurelio.net/vim/',
			'target': '_aurelio_vim',
			'img': '<img src="assets/img/png/aurelio_vim.png" width="40" height="40" title="Site sobre editor de código Vim" alt="assets/img/png/aurelio_vim.png" />'
		},
		{
			'title': 'nedb',
			'href': 'https://github.com/louischatriot/nedb',
			'target': '_nedb',
			'img': '<img src="assets/img/png/nedb.png" width="40" height="40" title="Módulo para trabalhar com sqlite no NodeJS" alt="assets/img/png/nedb.png" />'
		},
		{
			'title': 'Bootstrap 3',
			'href': 'http://getbootstrap.com.br/docs/3.3/',
			'target': '_bootstrap',
			'img': '<img src="assets/img/png/bootstrap.png" width="40" height="40" title="Framework para trabalhar com layout de site" alt="assets/img/png/bootstrap.png" />'
		},
		{
			'title': 'GetBootstrap 4',
			'href': 'https://getbootstrap.com.br/',
			'target': '_getbootstrap4',
			'img': '<img src="assets/img/png/bootstrap4.png" width="40" height="40" title="Framework para trabalhar com layout de site" alt="assets/img/png/bootstrap4.png" />'
		},
		{
			'title': 'w3schools',
			'href': 'https://www.w3schools.com/jquery/jquery_ref_selectors.asp',
			'target': '_w3schools',
			'img': '<img src="assets/img/png/w3schools.com.png" width="40" height="40" title="Guia jquery entre outros" alt="assets/img/png/w3schools.com.png" />'
		},
		{
			'title': 'Guia JS',
			'href': 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide',
			'target': '_mdn',
			'img': '<img src="assets/img/png/guia_js.png" width="40" height="40" title="Guia Javascript" alt="assets/img/png/guia_js.png" />'
		},
		{
			'title': 'JSBin',
			'href': 'http://jsbin.com/?html,output',
			'target': '_jsbin',
			'img': '<img src="assets/img/png/jsbin.png" width="40" height="40" title="Testar códigos JavaScript" alt="assets/img/png/jsbin.png" />'
		},
		{
			'title': 'RipTutorial',
			'href': 'https://riptutorial.com/es/home',
			'target': '_riptutorial',
			'img': '<img src="assets/img/png/riptutorial.png" width="40" height="40" title="Tutorial - Linguagens de programação" alt="assets/img/png/riptutorial.png" />'
		},
		{
			'title': 'RosettaCode',
			'href': 'http://rosettacode.org/wiki/Rosetta_Code',
			'target': '_rosettacode',
			'img': '<img src="assets/img/png/rosettacode.png" width="40" height="40" title="Exemplos de códigos" alt="assets/img/png/rosettacode.png" />'
		},
		{
			'title': 'VisJS',
			'href': 'https://almende.github.io/vis/',
			'target': '_visjs',
			'img': '<img src="assets/img/png/visjs.png" width="40" height="40" title="VisJS - Gráficos em javascript" alt="assets/img/png/visjs.png" />'
		}
	],
/*
================================================================================
Diversos
================================================================================
*/
	'diversos':
	[
		{
			'title': 'Portal do Serv.',
			'href': 'https://www.servidor.gov.br',
			'target': '_sigepe',
			'img': '<img src="assets/img/png/sigepe.png" width="40" height="40" title="Funcionalismo Público Federal" alt="assets/img/png/sigepe.png" />'
		},
		{
			'title': 'Cardápio Setorial',
			'href': 'http://www.fump.ufmg.br/cardapio.aspx',
			'target': '_setorial',
			'img': '<img src="assets/img/png/setorial.png" width="40" height="40" title="Cardápio Setorial da UFMG" alt="assets/img/png/setorial.png" />'
		},
		{
			'title': 'ProRH',
			'href': 'https://www.ufmg.br/prorh/',
			'target': '_prorh',
			'img': '<img src="assets/img/png/ufmg.png" width="40" height="40" title="ProRH da UFMG" alt="assets/img/png/ufmg.png" />'
		},
		{
			'title': 'UFMG Portal Atend.',
			'href': 'https://sistemas.ufmg.br/atendimento/',
			'target': '_ufmg_atendimento',
			'img': '<img src="assets/img/png/ufmg.png" width="40" height="40" title="UFMG Portal Atend." alt="assets/img/png/ufmg_atendimento.png" />'
		},
		{
			'title': 'CEU',
			'href': 'https://www.ufmg.br/ceu/site/home',
			'target': '_ceu',
			'img': '<img src="assets/img/png/ceu.png" width="40" height="40" title="Centro Esportivo Universitário da UFMG" alt="assets/img/png/ceu.png" />'
		},
		{
			'title': 'Groups PEPped',
			'href': 'https://groups.google.com/group/pepped?msg=new&lnk=gcis&hl=pt-BR',
			'target': '_pepped',
			'img': '<img src="assets/img/png/groupspepped.png" width="40" height="40" title="Groups PEPped" alt="assets/img/png/groupspepped.png" />'
		},
		{
			'title': 'Vagalume músicas',
			'href': 'http://www.vagalume.com.br',
			'target': '_vagalume',
			'img': '<img src="assets/img/png/vagalumemusicas.png" width="40" height="40" title="Vagalume músicas" alt="assets/img/png/vagalumemusicas.png" />'
		},
		{
			'title': 'Planeta Rei',
			'href': 'http://www.planetarei.com.br/100anos/index.htm',
			'target': '_planetarei',
			'img': '<img src="assets/img/png/planeta-rei.png" width="40" height="40" title="100 anos da música" alt="assets/img/png/planeta-rei.png" />'
		}
	],
/*
================================================================================
Emails
================================================================================
*/
	'emails':
	[
		{
			'title': 'Gmail',
			'href': 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http://mail.google.com/mail/&scc=1&ltmpl=default&ltmplcache=2&emr=1',
			'target': '_gmail',
			'img': '<img src="assets/img/png/gmail.png" width="40" height="40" title="Gmail" alt="assets/img/png/gmail.png" />'
		},
		{
			'title': 'Hotmail',
			'href': 'http://www.hotmail.com',
			'target': '_hotmail',
			'img': '<img src="assets/img/png/hotmail.png" width="40" height="40" title="Hotmail" alt="assets/img/png/hotmail.png" />'
		},
		{
			'title': 'Yahoo',
			'href': 'https://login.yahoo.com/?.src=ym&.partner=none&.lang=pt-BR&.intl=br&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3F.intl%3Dbr%26.lang%3Dpt-BR%26.partner%3Dnone%26.src%3Dfp',
			'target': '_yahoo',
			'img': '<img src="assets/img/png/yahoo.png" width="40" height="40" title="Yahoo Mail" alt="assets/img/png/yahoo.png" />'
		},
		{
			'title': 'Minha UFMG',
			'href': 'https://sistemas.ufmg.br/idp/login.jsp',
			'target': '_minha-ufmg',
			'img': '<img src="assets/img/png/minha-ufmg.png" width="40" height="40" title="Minha UFMG" alt="assets/img/png/minha-ufmg.png" />'
		}
	],
	'enem':
	[
		{
			'title': 'Curso ENEM gratuito',
			'href': 'https://cursoenemgratuito.com.br',
			'target': '_curso-enem-gratuito',
			'img': '<img src="assets/img/png/curso-enem-gratuito.png" width="40" height="40" title="curso-enem-gratuito" alt="assets/img/png/curso-enem-gratuito.png" />'
		},
		{
			'title': 'Canal ENEM',
			'href': 'https://www.youtube.com/channel/UC_53VGoH_0XLFmYVpGMvhvg/playlists',
			'target': '_canal-enem',
			'img': '<img src="assets/img/png/canal-enem.png" width="40" height="40" title="Canal ENEM" alt="assets/img/png/canal-enem.png" />'
		},
		{
			'title': 'Blog do ENEM',
			'href': 'https://blogdoenem.com.br',
			'target': '_blog-do-enem',
			'img': '<img src="assets/img/png/blog-do-enem.png" width="40" height="40" title="blog-do-enem" alt="assets/img/png/blog-do-enem.png" />'
		},
		{
			'title': 'Questões ENEM',
			'href': 'http://www.ebc.com.br/educacao/questoesenem',
			'target': '_questoes-enem',
			'img': '<img src="assets/img/png/questoes-enem.png" width="40" height="40" title="questoes-enem" alt="assets/img/png/questoes-enem.png" />'
		},
		{
			'title': 'Geekie Games',
			'href': 'https://geekiegames.geekie.com.br/blog/',
			'target': '_geekie-games',
			'img': '<img src="assets/img/png/geekie-games.png" width="40" height="40" title="geekie-games" alt="assets/img/png/geekie-games.png" />'
		}
	],
/*
================================================================================
Ensino
================================================================================
*/
	'ensino':
	[
		{
			'title': 'Esc Virtual Bradesco',
			'href': 'https://www.ev.org.br',
			'target': '_escvirtual',
			'img': '<img src="assets/img/png/bradesco_esc_virtual.png" width="40" height="40" title="Escola Virtual do Bradesco" alt="assets/img/png/bradesco_esc_virtual.png" />'
		},
		{
			'title': 'UEMG',
			'href': 'http://www.daeuemg.mg.gov.br/a1dw/emitirdae.do',
			'target': '_uemg',
			'img': '<img src="assets/img/png/uemg.png" width="40" height="40" title="Universidade Estadual de Minas Gerais" alt="assets/img/png/uemg.png" />'
		},
		{
			'title': 'Newton Paiva',
			'href': 'http://www.newtonpaiva.br',
			'target': '_newtonpaiva',
			'img': '<img src="assets/img/png/newtonpaiva.png" width="40" height="40" title="Universidade Newton Paiva" alt="assets/img/png/newtonpaiva.png" />'
		},
		{
			'title': 'STA MARIA',
			'href': 'https://santamaria.pucminas.br/coracao-eucaristico/',
			'target': '_sta-maria',
			'img': '<img src="assets/img/png/colegiostamaria.png" width="40" height="40" title="Colégio Sta Maria" alt="assets/img/png/colegiostamaria.png" />'
		},
		{
			'title': 'COLTEC',
			'href': 'http://www.coltec.ufmg.br/coltec-ufmg/',
			'target': '_coltec',
			'img': '<img src="assets/img/png/coltec.png" width="40" height="40" title="COLTEC UFMG" alt="assets/img/png/coltec.png" />'
		},
		{
			'title': 'Colégio Militar BH',
			'href': 'http://www.cmbh.eb.mil.br/',
			'target': '_cmbh',
			'img': '<img src="assets/img/png/cmbh.png" width="40" height="40" title="Colégio Militar" alt="assets/img/png/cmbh.png" />'
		},
		{
			'title': 'Cefet(MG)',
			'href': 'https://www.cefetmg.br',
			'target': '_cefet_mg',
			'img': '<img src="assets/img/png/cefet_mg.png" width="40" height="40" title="Copeve/Cefet(MG)" alt="assets/img/png/cefet_mg.png" />'
		},
		{
			'title': 'UFMG',
			'href': 'https://www.ufmg.br/',
			'target': '_ufmg',
			'img': '<img src="assets/img/png/ufmg.png" width="40" height="40" title="Univ. Federal de Minas Gerais" alt="assets/img/png/ufmg.png" />'
		},
		{
			'title': 'ITA - VESTIBULAR',
			'href': 'http://www.vestibular.ita.br/',
			'target': '_ita',
			'img': '<img src="assets/img/png/ita.png" width="100" height="40" title="ITA - VESTIBULAR" alt="assets/img/png/ita.png" />'
		},
		{
			'title': 'Fernando Cascais',
			'href': 'https://fernandocascais.wordpress.com/',
			'target': '_fernando_cascais',
			'img': '<img src="assets/img/png/fernandocascais.png" width="30" height="40" title="Site sobre Magia e Ocultismo" alt="assets/img/png/fernandocascais.png" />'
		},
		{
			'title': 'Caos e conhecimento',
			'href': 'http://filosofiasdouniverso.blogspot.com/2011/11/biblioteca-espiritualista-e-metafisica.html',
			'target': '_espiritualista',
			'img': '<img src="assets/img/png/espiritualidade.png" width="30" height="40" title="Biblioteca Espiritualista e Metafísica online" alt="assets/img/png/espiritualidade.png" />'
		},
		{
			'title': 'Nova Acrópole',
			'href': 'http://www.nova-acropole.org.br/',
			'target': '_nova-acropole',
			'img': '<img src="assets/img/png/nova-acropole.png" width="40" height="40" title="Nova Acrópole - Filosofia" alt="assets/img/png/nova-acropole.png" />'
		}
	],
/*
================================================================================
Filmes
================================================================================
*/
	'filmes':
	[
		{
			'title': 'Youtube',
			'href': 'http://www.youtube.com',
			'target': '_youtube',
			'img': '<img src="assets/img/png/youtube.png" width="40" height="40" title="Youtube" alt="assets/img/png/youtube.png" />'
		},
		{
			'title': 'Series filmes torrent',
			'href': 'https://www.seriesfilmestorrent.com/',
			'target': '_seriesfilmestorrent',
			'img': '<img src="assets/img/png/seriesfilmestorrent.png" width="40" height="40" title="Séries filmes torrent" alt="assets/img/png/seriesfilmestorrent.png" />'
		},
		{
			'title': 'Baixe de tudo',
			'href': 'http://www.baixedetudo.net/',
			'target': '_baixandodetudo',
			'img': '<img src="assets/img/png/baixedetudo.png" width="40" height="40" title="Baixe de tudo" alt="assets/img/png/baixedetudo.png" />'
		},
		{
			'title': 'Filmes dublados',
			'href': 'https://www.baixarfilmesdublados.net/',
			'target': '_BaixarFilmes',
			'img': '<img src="assets/img/png/filmesdublados.png" width="40" height="40" title="Filmes dublados" alt="assets/img/png/filmesdublados.png" />'
		},
		{
			'title': 'Torrent filmes',
			'href': 'https://torrentfilmes.net',
			'target': '_torrent-filmes',
			'img': '<img src="assets/img/png/torrent-filmes.png" width="40" height="40" title="Torrent filmes" alt="assets/img/png/torrent-filmes.png" />'
		},
		{
			'title': 'Yes Filmes',
			'href': 'http://yesfilmes.org/',
			'target': '_yesfilmes',
			'img': '<img src="assets/img/png/yesfilmes.png" width="40" height="40" title="Yes Filmes" alt="assets/img/png/yesfilmes.png" />'
		},
		{
			'title': 'Globo Play',
			'href': 'https://globoplay.globo.com/',
			'target': '_globoplay',
			'img': '<img src="assets/img/png/globoplay.png" width="40" height="40" title="Globo Play" alt="assets/img/png/globoplay.png" />'
		},
		{
			'title': 'Netflix',
			'href': 'https://www.netflix.com/br/',
			'target': '_netflix',
			'img': '<img src="assets/img/png/netflix.png" width="40" height="40" title="Netflix" alt="assets/img/png/netflix.png" />'
		}
	],
/*
================================================================================
Linux
================================================================================
*/
	'linux':
	[
		{
			'title': 'LinuxMint',
			'href': 'https://www.linuxmint.com/',
			'target': '_linuxmint',
			'img': '<img src="assets/img/png/linuxmint.png" width="40" height="40" title="LinuxMint" alt="assets/img/png/linuxmint.png" />'
		},
		{
			'title': 'Debian',
			'href': 'https://www.debian.org/distrib/',
			'target': '_debian',
			'img': '<img src="assets/img/png/debian.png" width="40" height="40" title="Linux Debian" alt="assets/img/png/debian.png" />'
		},
		{
			'title': 'Spins Fedora',
			'href': 'https://spins.fedoraproject.org/pt_BR/',
			'target': '_spins-fedora',
			'img': '<img src="assets/img/png/fedora-spins.png" width="40" height="40" title="Linux Fedora - Várias arquiteturas de interface gráfica" alt="assets/img/png/fedora-spins.png" />'
		},
		{
			'title': 'Lubuntu',
			'href': 'https://lubuntu.me',
			'target': '_lubuntu',
			'img': '<img src="assets/img/png/lubuntu.png" width="40" height="40" title="Lubuntu" alt="assets/img/png/lubuntu.png" />'
		},
		{
			'title': 'Ubuntu cdimg',
			'href': 'http://cdimage.ubuntu.com/',
			'target': '_ubuntu_cdimg',
			'img': '<img src="assets/img/png/ubuntu_cdimg.png" width="40" height="40" title="Ubuntu - imagens iso para instalação do sistema" alt="assets/img/png/ubuntu_cdimg.png" />'
		},
		{
			'title': 'Gnome-look',
			'href': 'https://www.gnome-look.org',
			'target': '_gnome-look',
			'img': '<img src="assets/img/png/gnome-look.png" width="40" height="40" title="Temas para sistema operacional" alt="assets/img/png/gnome-look.png" />'
		},
		{
			'title': 'XFCE-look',
			'href': 'https://www.xfce-look.org/',
			'target': '_xfce-look',
			'img': '<img src="assets/img/png/xfce-look.png" width="40" height="40" title="Temas para sistema operacional" alt="assets/img/png/xfce-look.png" />'
		},
		{
			'title': 'Cinnamon Spices',
			'href': 'https://cinnamon-spices.linuxmint.com/',
			'target': '_cinnamon-spices',
			'img': '<img src="assets/img/png/cinnamon-spices.png" width="40" height="40" title="Temas entre outros para interface Cinnamon" alt="assets/img/png/cinnamon-spices.png" />'
		}
	],
/*
================================================================================
Loterias
================================================================================
*/
	'loterias':
	[
		{
			'title': 'MEGASENA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/megasena/megasena_resultado.asp',
			'target': '_mega',
			'img': '<img src="assets/img/png/mega-sena.png" width="40" height="40" title="MEGASENA" alt="assets/img/png/mega-sena.png" />'
		},
		{
			'title': 'TIMEMANIA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/timemania/timemania_resultado.asp',
			'target': '_timemania',
			'img': '<img src="assets/img/png/timemania.png" width="40" height="40" title="TIMEMANIA" alt="assets/img/png/timemania.png" />'
		},
		{
			'title': 'QUINA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/quina/quina_resultado.asp',
			'target': '_quina',
			'img': '<img src="assets/img/png/quina.png" width="40" height="40" title="QUINA" alt="assets/img/png/quina.png" />'
		},
		{
			'title': 'LOTOMANIA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/lotomania/lotomania_resultado.asp',
			'target': '_lotomania',
			'img': '<img src="assets/img/png/lotomania.png" width="40" height="40" title="LOTOMANIA" alt="assets/img/png/lotomania.png" />'
		},
		{
			'title': 'DUPLASENA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/duplasena/duplasena_resultado.asp',
			'target': '_duplasena',
			'img': '<img src="assets/img/png/dupla-sena.png" width="40" height="40" title="DUPLASENA" alt="assets/img/png/dupla-sena.png" />'
		},
		{
			'title': 'FEDERAL',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/federal/federal_resultado.asp',
			'target': '_federal',
			'img': '<img src="assets/img/png/federal.png" width="40" height="40" title="LOTERIA FEDERAL" alt="assets/img/png/federal.png" />'
		},
		{
			'title': 'INSTANTÂNEA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/loteriainst/como_jogar.asp',
			'target': '_loteriainst',
			'img': '<img src="assets/img/png/instantanea.png" width="40" height="40" title="INSTANTÂNEA" alt="assets/img/png/instantanea.png" />'
		},
		{
			'title': 'LOTECA',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/loteca/loteca_resultado.asp',
			'target': '_loteca',
			'img': '<img src="assets/img/png/loteca.png" width="40" height="40" title="LOTECA" alt="assets/img/png/loteca.png" />'
		},
		{
			'title': 'LOTOGOL',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/lotogol/lotogol_resultado.asp',
			'target': '_lotogol',
			'img': '<img src="assets/img/png/lotogol.png" width="40" height="40" title="LOTOGOL" alt="assets/img/png/lotogol.png" />'
		},
		{
			'title': 'LOTOFÁCIL',
			'href': 'http://www1.caixa.gov.br/loterias/loterias/lotofacil/lotofacil_resultado.asp',
			'target': '_lotofacil',
			'img': '<img src="assets/img/png/lotofacil.png" width="40" height="40" title="LOTOFÁCIL" alt="assets/img/png/lotofacil.png" />'
		},
		{
			'title': 'Apostas online',
			'href': 'https://www.loteriasonline.caixa.gov.br/silce-web/#/home',
			'target': '_loteriasonline',
			'img': '<img src="assets/img/png/loteriaonline.png" width="40" height="40" title="Apostas online" alt="assets/img/png/loteriaonline.png" />'
		}
	],
/*
================================================================================
Nuvem
================================================================================
*/
	'nuvem':
	[
		{
			'title': 'Dropbox',
			'href': 'http://www.dropbox.com',
			'target': '_dropbox',
			'img': '<img src="assets/img/png/dropbox.png" width="40" height="40" title="Dropbox" alt="assets/img/png/dropbox.png" />'
		},
		{
			'title': 'Google Drive',
			'href': 'https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://drive.google.com/?tab%3Dwo%23&followup=https://drive.google.com/?tab%3Dwo&ltmpl=drive',
			'target': '_drivegoogle',
			'img': '<img src="assets/img/png/googledrive.png" width="40" height="40" title="Google Drive" alt="assets/img/png/googledrive.png" />'
		},
		{
			'title': 'OnDrive',
			'href': 'https://onedrive.live.com',
			'target': '_ondrive',
			'img': '<img src="assets/img/png/ondrive.png" width="40" height="40" title="OnDrive" alt="assets/img/png/ondrive.png" />'
		}
	],
/*
================================================================================
Notícias
================================================================================
*/
	'noticias':
	[
		{
			'title': 'MSN Brasil',
			'href': 'http://www.msn.com/pt-br/?ocid=iehp',
			'target': '_msn',
			'img': '<img src="assets/img/png/msn.png" width="40" height="40" title="MSN Brasil" alt="assets/img/png/msn.png" />'
		},
		{
			'title': 'G1',
			'href': 'http://g1.globo.com/index.html',
			'target': '_g1',
			'img': '<img src="assets/img/png/g1.png" width="40" height="40" title="G1" alt="assets/img/png/g1.png" />'
		},
		{
			'title': 'O Tempo',
			'href': 'https://www.otempo.com.br/',
			'target': '_otempo',
			'img': '<img src="assets/img/png/otempo.png" width="40" height="40" title="Jornal O Tempo" alt="assets/img/png/otempo.png" />'
		},
		{
			'title': 'Clima Tempo',
			'href': 'http://www.climatempo.com.br/previsao-do-tempo/cidade/107/belohorizonte-mg',
			'target': '_climatempo',
			'img': '<img src="assets/img/png/climatempo.png" width="40" height="40" title="Clima Tempo" alt="assets/img/png/climatempo.png" />'
		},
		{
			'title': 'The weather channel',
			'href': 'https://weather.com/pt-BR/clima/hoje/l/-19.92,-43.93',
			'target': '_the_weather_channel',
			'img': '<img src="assets/img/png/the_weather_channel.png" width="40" height="40" title="Site sobre clima e condições climáticas do mundo" alt="assets/img/png/the_weather_channel.png" />'
		},
		{
			'title': 'Sou BH',
			'href': 'http://www.soubh.com.br/',
			'target': '_soubh',
			'img': '<img src="assets/img/png/soubh.png" width="40" height="40" title="Atividades e eventos em BH" alt="assets/img/png/soubh.png" />'
		}
	],
/*
================================================================================
Pesquisa
================================================================================
*/
	'pesquisa':
	[
		{
			'title': 'Google',
			'href': 'https://www.google.com.br/webhp?lr=lang_pt',
			'target': '_google',
			'img': '<img src="assets/img/png/google.png" width="40" height="40" title="Google" alt="assets/img/png/google.png" />'
		},
		{
			'title': 'Bing pesquisa',
			'href': 'http://www.bing.com/?scope=web&mkt=pt-BR',
			'target': '_mapsgoogle',
			'img': '<img src="assets/img/png/bing.png" width="40" height="40" title="Bing Pesquisa" alt="assets/img/png/bing.png" />'
		},
		{
			'title': 'DuckDuckGo',
			'href': 'https://duckduckgo.com/',
			'target': '_duckduckgo',
			'img': '<img src="assets/img/png/duckduckgo.png" width="40" height="40" title="Site de pesquisa" alt="assets/img/png/duckduckgo.png" />'
		},
		{
			'title': 'Maps google',
			'href': 'http://maps.google.com.br',
			'target': '_mapsgoogle',
			'img': '<img src="assets/img/png/googlemaps.png" width="40" height="40" title="Maps Google" alt="assets/img/png/googlemaps.png" />'
		},
		{
			'title': 'Google tradutor',
			'href': 'http://translate.google.com.br/?hl=pt-BR&tab=wT',
			'target': '_tradutor',
			'img': '<img src="assets/img/png/googletradutor.png" width="40" height="40" title="Google tradutor" alt="assets/img/png/googletradutor.png" />'
		},
		{
			'title': 'Bing Tradutor',
			'href': 'http://www.bing.com/?scope=web&mkt=pt-BR',
			'target': '_mapsgoogle',
			'img': '<img src="assets/img/png/bingtradutor.png" width="40" height="40" title="Bing Tradutor" alt="assets/img/png/bing.png" />'
		}
	],
/*
================================================================================
Rádios
================================================================================
*/
	'radios':
	[
		{
			'title': 'CBN BH',
			'href': 'http://cbn.globoradio.globo.com/Player/playerAoVivoBH.htm',
			'target': '_cbn_bh',
			'img': '<img src="assets/img/png/cbn.png" width="40" height="40" title="CBN BH" alt="assets/img/png/cbn.png" />'
		},
		{
			'title': 'Band News FM',
			'href': 'https://radios.band.uol.com.br/?radio=bandnews-bh',
			'target': '_bandnews_fm',
			'img': '<img src="assets/img/png/bandnews_fm.png" width="40" height="40" title="Band News FM" alt="assets/img/png/bandnews_fm.png" />'
		},
		{
			'title': 'Tune in radio',
			'href': 'https://tunein.com/radio/home/',
			'target': '_tunein_radio',
			'img': '<img src="assets/img/png/tunein_radio.png" width="40" height="40" title="Band News FM" alt="assets/img/png/tunein_radio.png" />'
		},
		{
			'title': 'Alvorada FM',
			'href': 'https://www.alvoradafm.com.br/player',
			'target': '_alvoradafm',
			'img': '<img src="assets/img/png/alvoradafm.png" width="40" height="40" title="Alvorada FM" alt="assets/img/png/alvoradafm.png" />'
		},
		{
			'title': 'Antena 1',
			'href': 'https://www.antena1.com.br/aovivo',
			'target': '_antena_1',
			'img': '<img src="assets/img/png/antena1.png" width="40" height="40" title="Antena 1" alt="assets/img/png/antena1.png" />'
		},
		{
			'title': 'CDL FM',
			'href': 'http://fm1029.com.br/plus/',
			'target': '_cdlfm',
			'img': '<img src="assets/img/png/cdl.png" width="40" height="40" title="Rádio FM do Coselho de dirigentes lojistas de BH" alt="assets/img/png/cdl.png" />'
		},
		{
			'title': 'Itatiaia',
			'href': 'http://www.itatiaia.com.br/aovivo',
			'target': '_itatiaia',
			'img': '<img src="assets/img/png/itatiaia.png" width="40" height="40" title="Itatiaia" alt="assets/img/png/itatiaia.png" />'
		},
		{
			'title': '107.5 FM',
			'href': 'http://radio107fm.com/plus/',
			'target': '_107fm',
			'img': '<img src="assets/img/png/107fm.png" width="40" height="40" title="Rádio 107.5 FM" alt="assets/img/png/107fm.png" />'
		},
		{
			'title': 'Radios ao vivo',
			'href': 'http://www.radiosaovivo.net',
			'target': '_radiosaovivo',
			'img': '<img src="assets/img/png/radiosaovivo.net.png" width="40" height="40" title="Rádios ao vivo" alt="assets/img/png/radiosaovivo.net.png" />'
		},
		{
			'title': 'Radios.com.br',
			'href': 'https://www.radios.com.br',
			'target': '_radios.com.br',
			'img': '<img src="assets/img/png/radios.com.br.png" width="40" height="40" title="Rádios.com.br" alt="assets/img/png/radios.com.br.png" />'
		},
		{
			'title': 'FM Stream',
			'href': 'http://fmstream.org/index.php?c=B&o=top&n=1600',
			'target': '_fmstream',
			'img': '<img src="assets/img/png/fmstream.png" width="40" height="40" title="FM Stream" alt="assets/img/png/fmstream.png" />'
		},
		{
			'title': 'Streams de Rádios',
			'href': 'assets/html/radios/index.html',
			'target': '_streams',
			'img': '<img src="assets/html/radios/assets/img/png/radio.png" width="40" height="40" title="Streams de Rádios" alt="assets/html/radios/assets/img/png/radio.png" />'
		}
	],
/*
================================================================================
Rede social
================================================================================
*/
	'redesocial':
	[
		{
			'title': 'WhatsApp Web',
			'href': 'https://web.whatsapp.com/',
			'target': '_whatsappweb',
			'img': '<img src="assets/img/png/whatsapp-web.png" width="40" height="40" title="WhatsApp Web" alt="assets/img/png/whatsapp-web.png" />'
		},
		{
			'title': 'Telegram Web',
			'href': 'https://web.telegram.org',
			'target': '_telegramweb',
			'img': '<img src="assets/img/png/telegram-web.png" width="40" height="40" title="Telegram Web" alt="assets/img/png/telegram-web.png" />'
		},
		{
			'title': 'Facebook',
			'href': 'https://www.facebook.com/',
			'target': '_facebook',
			'img': '<img src="assets/img/png/facebook.png" width="40" height="40" title="Facebook" alt="assets/img/png/facebook.png" />'
		},
		{
			'title': 'Instagram',
			'href': 'https://www.instagram.com',
			'target': '_instagram',
			'img': '<img src="assets/img/png/instagram.png" width="40" height="40" title="Instagram" alt="assets/img/png/instagram.png" />'
		},
		{
			'title': 'Twitter',
			'href': 'https://twitter.com/login?lang=pt',
			'target': '_twitter',
			'img': '<img src="assets/img/png/twitter.png" width="40" height="40" title="Twitter" alt="assets/img/png/twitter.png" />'
		},
		{
			'title': 'Linkedin',
			'href': 'https://www.linkedin.com',
			'target': '_linkedin',
			'img': '<img src="assets/img/png/linkedin.png" width="40" height="40" title="Linkedin" alt="assets/img/png/linkedin.png" />'
		}
	],
/*
================================================================================
Serviços
================================================================================
*/
	'servicos':
	[
		{
			'title': 'LeLivros',
			'href': 'http://lelivros.love/',
			'target': '_lelivros',
			'img': '<img src="assets/img/png/lelivros.png" width="40" height="40" title="LeLivros" alt="assets/img/png/lelivros.png" />'
		},
		{
			'title': 'Docer',
			'href': 'https://docero.com.br',
			'target': '_docero',
			'img': '<img src="assets/img/png/docer.png" width="40" height="40" title="Baixar livros grátis" alt="assets/img/png/docer.png" />'
		},
		{
			'title': 'Correios',
			'href': 'http://www.correios.com.br',
			'target': '_correios',
			'img': '<img src="assets/img/png/correios.png" width="40" height="40" title="Correios" alt="assets/img/png/correios.png" />'
		},
		{
			'title': 'Rastreamento',
			'href': 'https://www2.correios.com.br/sistemas/rastreamento/',
			'target': '_correios_rastreamento',
			'img': '<img src="assets/img/png/correios_rastreamento.png" width="40" height="40" title="Rastreamento dos Correios" alt="assets/img/png/correios_rastreamento.png" />'
		},
		{
			'title': 'BH Trans',
			'href': 'http://servicosbhtrans.pbh.gov.br/bhtrans/e-servicos/e-servicos.asp?servico=S01&opcao=QUADRO%20DE%20HORÁRIOS%20DE%20ÔNIBUS',
			'target': '_bhtrans',
			'img': '<img src="assets/img/png/bhtrans.png" width="40" height="40" title="Itinerários e horários dos ônibus de BH" alt="assets/img/png/bhtrans.png" />'
		},
		{
			'title': 'Cartões BHBUS',
			'href': 'https://www.bhbus.com.br/cartoes',
			'target': '_transfacil',
			'img': '<img src="assets/img/png/transfacil.png" width="40" height="40" title="Seus cartões do BHBUS" alt="assets/img/png/transfacil.png" />'
		},
		{
			'title': 'Lorem Ipsum',
			'href': 'http://www.lipsum.com',
			'target': '_lipsum',
			'img': '<img src="assets/img/png/lorem_ipsum.png" width="40" height="40" title="Conjunto de frases e texto para testes" alt="assets/img/png/lorem_ipsum.png" />'
		},
		{
			'title': 'Mussum Ipsum',
			'href': 'http://www.mussumipsum.com',
			'target': '_mussumipsum',
			'img': '<img src="assets/img/png/mussum_ipsum.png" width="40" height="40" title="Conjunto de frases e texto para testes" alt="assets/img/png/mussum_ipsum.png" />'
		},
		{
			'title': 'Print Friendly',
			'href': 'http://www.printfriendly.com/',
			'target': '_print_friendly',
			'img': '<img src="assets/img/png/print_friendly.png" width="40" height="40" title="Imprime em PDF" alt="assets/img/png/print_friendly.png" />'
		},
		{
			'title': 'Web2pdf',
			'href': 'http://www.web2pdfconvert.com/',
			'target': '_web2pdfconvert',
			'img': '<img src="assets/img/png/web2pdfconvert.png" width="40" height="40" title="Converte textos do site para pdf" alt="assets/img/png/web2pdfconvert.png" />'
		},
		{
			'title': 'Dígito verificador',
			'href': 'http://www.cjdinfo.com.br/utilitario-calculo-digito-modulo-11',
			'target': '_cjdinfo',
			'img': '<img src="assets/img/png/cjdinfo.png" width="40" height="40" title="Cálculo do dígito verificador" alt="assets/img/png/cjdinfo.png" />'
		},
		{
			'title': 'Sound of Text',
			'href': 'https://soundoftext.com/',
			'target': '_soundoftext',
			'img': '<img src="assets/img/png/soundoftext.png" width="40" height="40" title="Converte texto em audio" alt="assets/img/png/soundoftext.png" />'
		},
		{
			'title': 'Soar',
			'href': 'https://www.soarmp3.com/',
			'target': '_soar',
			'img': '<img src="assets/img/png/soar.png" width="40" height="40" title="Converte texto em audio" alt="assets/img/png/soar.png" />'
		},
		{
			'title': 'midomi',
			'href': 'https://www.midomi.com/',
			'target': '_midomi',
			'img': '<img src="assets/img/png/midomi.png" width="40" height="40" title="Identifica a música que esta sendo tocada" alt="assets/img/png/midomi.png" />'
		},
		{
			'title': 'Toques celular',
			'href': 'http://toqueparacelular.com.br/',
			'target': '_toques',
			'img': '<img src="assets/img/png/toquescelular.png" width="40" height="40" title="Toques para celular" alt="assets/img/png/toquescelular.png" />'
		},
		{
			'title': 'Rodoviaria de BH',
			'href': 'https://rodoviariadebh.com.br/deonibus',
			'target': '_rodoviariabh',
			'img': '<img src="assets/img/png/rodoviariabh.png" width="40" height="40" title="Rodoviaria de BH" alt="assets/img/png/rodoviariabh.png" />'
		},
		{
			'title': 'Viação Kaissara',
			'href': 'https://www.kaissara.com.br',
			'target': '_kaissara',
			'img': '<img src="assets/img/png/kaissara.png" width="40" height="40" title="Viação Kaissara" alt="assets/img/png/kaissara.png" />'
		},
		{
			'title': 'Ulist',
			'href': 'https://guihkx.github.io/ulist/',
			'target': '_ulist',
			'img': '<img src="assets/img/png/ulist.png" width="40" height="40" title="Baixar lista de links da play list do canal do youtube" alt="assets/img/png/ulist.png" />'
		},
		{
			'title': 'Draw',
			'href': 'https://www.draw.io',
			'target': '_draw',
			'img': '<img src="assets/img/png/draw.png" width="40" height="40" title="Criar diagramas online" alt="assets/img/png/draw.png" />'
		},
		{
			'title': 'Encycolorpedia',
			'href': 'https://encycolorpedia.pt',
			'target': '_encycolorpedia',
			'img': '<img src="assets/img/png/encycolorpedia.png" width="40" height="40" title="Todas as variantes de cores da web" alt="assets/img/png/encycolorpedia.png" />'
		},
		{
			'title': 'Despertador',
			'href': 'https://relogioonline.com.br/#',
			'target': '_despertador',
			'img': '<img src="assets/img/png/despertador.png" width="40" height="40" title="Despertador online" alt="assets/img/png/despertador.png" />'
		},
		{
			'title': '4Shared',
			'href': 'http://www.4shared.com',
			'target': '_forshared',
			'img': '<img src="assets/img/png/4shared.png" width="40" height="40" title="4Shared" alt="assets/img/png/4shared.png" />'
		},
		{
			'title': 'Baixaki',
			'href': 'http://www.baixaki.com.br',
			'target': '_baixaki',
			'img': '<img src="assets/img/png/baixaki.png" width="40" height="40" title="Baixaki" alt="assets/img/png/baixaki.png" />'
		},
		{
			'title': 'UpToDown',
			'href': 'http://br.uptodown.com/',
			'target': '_uptodown',
			'img': '<img src="assets/img/png/uptodown.png" width="40" height="40" title="Site de programas" alt="assets/img/png/uptodown.png" />'
		},
		{
			'title': 'Icon Finder',
			'href': 'https://www.iconfinder.com/',
			'target': '_iconfinder',
			'img': '<img src="assets/img/png/iconfinder.png" width="40" height="40" title="Baixar icones diversos" alt="assets/img/png/iconfinder.png" />'
		},
		{
			'title': 'Flaticon',
			'href': 'https://www.flaticon.com/br?utm_term=free icons&utm_campaign=fi_busqueda_brasil&utm_source=adwords&utm_medium=ppc&hsa_acc=5490559948&hsa_cam=1841778624&hsa_grp=70091914939&hsa_ad=346006066075&hsa_src=g&hsa_tgt=kwd-22932361&hsa_kw=free icons&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMI1fmf9Yv25QIVVwiRCh1PXgEoEAAYASAAEgLMTvD_BwE',
			'target': '_flaticon',
			'img': '<img src="assets/img/png/flaticon.png" width="40" height="40" title="Baixar icones diversos" alt="assets/img/png/flaticon.png" />'
		},
		{
			'title': 'Wallpapers Abyss',
			'href': 'https://wall.alphacoders.com/finding_wallpapers.php?lang-Portuguese',
			'target': '_wallpapers-abyss',
			'img': '<img src="assets/img/png/wallpapers-abyss.png" width="40" height="40" title="Telas de fundo para computador" alt="assets/img/png/wallpapers-abyss.png" />'
		},
		{
			'title': 'Deviant Art',
			'href': 'https://www.deviantart.com/',
			'target': '_deviant-art',
			'img': '<img src="assets/img/png/deviant-art.png" width="40" height="40" title="Temas para sistema operacional" alt="assets/img/png/deviant-art.png" />'
		}
	],
/*
================================================================================
Úteis
================================================================================
*/
	'uteis':
	[
		{
			'title': 'FreeFileSync',
			'href': 'https://freefilesync.org/',
			'target': '_freefilesync',
			'img': '<img src="assets/img/png/freefilesync.png" width="40" height="40" title="Sincronizador de arquivos (backup em pendrive)" alt="assets/img/png/freefilesync.png" />'
		},
		{
			'title': 'Vivaldi browser',
			'href': 'https://vivaldi.com/pt-br/',
			'target': '_vivaldi',
			'img': '<img src="assets/img/png/vivaldi.png" width="40" height="40" title="Navegador da web (mais elaborado) compatível com o Chrome" alt="assets/img/png/vivaldi.png" />'
		},
		{
			'title': 'Seamonkey',
			'href': 'http://www.seamonkey-project.org/',
			'target': '_seamonkey',
			'img': '<img src="assets/img/png/seamonkey.png" width="40" height="40" title="Navegador da web" alt="assets/img/png/seamonkey.png" />'
		},
		{
			'title': 'Firefox-Nightly',
			'href': 'https://www.mozilla.org/en-US/firefox/all/#product-desktop-nightly',
			'target': '_firefox-nightly',
			'img': '<img src="assets/img/png/firefox-nightly.png" width="40" height="40" title="Fork do Firefox" alt="assets/img/png/firefox-nightly.png" />'
		},
		{
			'title': 'Waterfox',
			'href': 'https://www.waterfox.net/releases/',
			'target': '_waterfox',
			'img': '<img src="assets/img/png/waterfox.png" width="40" height="40" title="Waterfox browser" alt="assets/img/png/waterfox.png" />'
		},
		{
			'title': 'Adobe Flash Player',
			'href': 'https://get.adobe.com/br/flashplayer/',
			'target': '_flashplayer',
			'img': '<img src="assets/img/png/flash_player.png" width="40" height="40" title="Plugin Adobe Flash Player" alt="assets/img/png/flash_player.png" />'
		},
		{
			'title': 'Rufus',
			'href': 'https://rufus.akeo.ie',
			'target': '_rufus',
			'img': '<img src="assets/img/png/rufus.png" width="40" height="40" title="Criador de pendrive de boot" alt="assets/img/png/rufus.png" />'
		},
		{
			'title': 'UNetbootin',
			'href': 'https://unetbootin.github.io/linux_download.html',
			'target': '_unetbootin',
			'img': '<img src="assets/img/png/unetbootin.png" width="40" height="40" title="Criador de pendrive de boot" alt="assets/img/png/unetbootin.png" />'
		},
		{
			'title': 'FreeOffice',
			'href': 'https://www.freeoffice.com/pt/',
			'target': '_freeoffice',
			'img': '<img src="assets/img/png/freeoffice.png" width="40" height="40" title="Office muito similar ao MSOffice" alt="assets/img/png/freeoffice.png" />'
		},
		{
			'title': 'WPS Office',
			'href': 'http://wps-community.org/downloads',
			'target': '_wps',
			'img': '<img src="assets/img/png/wps.png" width="40" height="40" title="Office muito similar ao MSOffice" alt="assets/img/png/wps.png" />'
		},
		{
			'title': 'Gimp',
			'href': 'https://www.gimp.org/',
			'target': '_gimp',
			'img': '<img src="assets/img/png/gimp.png" width="40" height="40" title="Programa para edição de imagens" alt="assets/img/png/gimp.png" />'
		},
		{
			'title': 'CCleaner',
			'href': 'https://www.ccleaner.com/pt-br/ccleaner/download/standard',
			'target': '_ccleaner',
			'img': '<img src="assets/img/png/ccleaner.png" width="40" height="40" title="Programa para correções do sistema" alt="assets/img/png/ccleaner.png" />'
		},
		{
			'title': 'VirtualBox',
			'href': 'https://www.virtualbox.org',
			'target': '_virtualbox',
			'img': '<img src="assets/img/png/virtualbox.png" width="40" height="40" title="Programa para virtualização de sistemas" alt="assets/img/png/virtualbox.png" />'
		},
		{
			'title': '360 Total Security',
			'href': 'https://www.360totalsecurity.com/pt/download-free-antivirus/',
			'target': '_360',
			'img': '<img src="assets/img/png/360.png" width="40" height="40" title="Antivírus" alt="assets/img/png/360.png" />'
		}
	]
};
