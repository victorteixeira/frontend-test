var data = [];

var r = new XMLHttpRequest();
r.open("GET", "fazenda.json", true);
r.onreadystatechange = function () {
	if (r.readyState != 4 || r.status != 200) return;
	data = JSON.parse(r.responseText);

	// Mostrar indice
	data.index = function(){return ++window['INDEX']||(window['INDEX']=1);};

	// Calcular porcentagem
	data.percPositive = function(){
		var el = data.data[(window['INDEX']-1)];
		var pos = parseInt(el.positive) || 0;
		var neg = parseInt(el.negative) || 0;
		return Math.round((pos / (pos + neg)) * 100) || 0;
	};
	data.percNegative = function(){
		var el = data.data[(window['INDEX']-1)];
		var pos = parseInt(el.positive) || 0;
		var neg = parseInt(el.negative) || 0;
		return Math.round((neg / (pos + neg)) * 100) || 0;
	};


	// Ordernar os items do json a partir da porcentagem
	data.data.sort(function(a,b){
		return b.positive - a.positive
	});

	// Add titulo ao H1 da página
	document.getElementById('box-name').innerHTML = data.box_name;

	// Mustache carregando lista
	var tmpl = document.getElementById('listRanking').innerHTML;
	var html = Mustache.render(tmpl, data);
	var el = document.getElementById('list');
	el.innerHTML = html;

};
r.send(null);



