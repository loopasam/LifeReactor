/**
 * 
 */
function Reactor() {
	this.molecules = new Array();
	this.color = "#000000";
	this.element = $('<div id="reactor"></div>');
	this.width = $(window).width() - 10;
	this.height = $(window).height() - 10;
	this.x = 0;
	this.y = 0;
	this.viscosity = 1;
	this.size = 15;
	this.degrees = 3;
	this.draw();
	this.menu();
}

Reactor.prototype.menu = function(){

	var menu = $('<div id="menu"></div>');
	menu.css('width', $(window).width());
	$('body').append(menu);
	var text = $('<div id="text-menu"></div>');
	text.css('width', $(window).width());
	$('#menu').append(text);
	$('#text-menu').append('<div id="title" class="button">(?) turing 2012: an origin of life</div>'
			+ '<div id="color-swap" class="menu-item">Color&nbsp;<div id="rising-generation" class="button">~</div>/<div id="spontaneous-generation" class="button">!</div></div>'
			+ '<div id="temperature" class="menu-item">Tº&nbsp;<div id="mwar-degrees" class="button">+</div>/<div id="less-degrees" class="button">-</div> |&nbsp;</div>'
			+ '<div id="size" class="menu-item">Size&nbsp;<div id="mwar-big" class="button">+</div>/<div id="smaller-molecules" class="button">-</div> |&nbsp;</div>'
			+ '<div id="number-particles" class="menu-item">#&nbsp;<div id="mwar-molecules" class="button">+</div>/<div class="button" id="less-molecules">-</div> |&nbsp;</div>'
			+ '<div id="back-to-chaos-wraper" class="menu-item"><div class="button" id="back-to-chaos">Back to Chaos</div> |&nbsp;</div>');

	this.registerMenu();

};

Reactor.prototype.registerMenu = function() {
	this.registerExplanationButton();
	this.registerMoreMoleculesButton();
	this.registerLessMoleculesButton();
	this.registerBiggerMoleculesButton();
	this.registerSmallerMoleculesButton();
	this.registerMoreDegreesButton();
	this.registerLessDegreesButton();
	this.registerRisingGenerationButton();
	this.registerSpontaneousGenerationButton();
	this.registerBackToChaos();
};

Reactor.prototype.registerExplanationButton = function() {
	$('#title').click(function(){
		$('#explanation').toggle("slow");
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { $('#explanation').toggle("slow"); }
	});
};

Reactor.prototype.registerBackToChaos = function() {
	var that = this;
	$('#back-to-chaos').click(function(){
		for(var i = 0; i < that.molecules.length; i++){
			var molecule = that.molecules[i];
			var model = Math.floor(Math.random() * 3);
			if(model == 0){
				molecule.color = MoleculeA.color;
				molecule.type = "A";
			}else if(model == 1){
				molecule.type = "B";
				molecule.color = MoleculeB.color;
			}else if(model == 2){
				molecule.type = "C";
				molecule.color = MoleculeC.color;
			}
			molecule.draw();
		} 
	});
};

Reactor.prototype.registerRisingGenerationButton = function(){
	var that = this;
	$('#rising-generation').click(function(){
		MoleculeA.color = that.getRandomColor();
		MoleculeB.color = that.getRandomColor();
		MoleculeC.color = that.getRandomColor();
	});
};

Reactor.prototype.registerSpontaneousGenerationButton = function(){
	var that = this;
	$('#spontaneous-generation').click(function(){
		MoleculeA.color = that.getRandomColor();
		MoleculeB.color = that.getRandomColor();
		MoleculeC.color = that.getRandomColor();
		for(var i = 0; i < that.molecules.length; i++){
			var molecule = that.molecules[i];
			if(molecule.type == "A"){
				molecule.color = MoleculeA.color;
			}else if(molecule.type == "B"){
				molecule.color = MoleculeB.color;
			}else if(molecule.type == "C"){
				molecule.color = MoleculeC.color;
			}
			molecule.draw();
		} 
	});
};

Reactor.prototype.getRandomColor = function() {

	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 3; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	if(color == "#000"){
		color = "#fff";
	}
	return color;
};

Reactor.prototype.registerMoreDegreesButton = function() {
	var that = this;
	$('#mwar-degrees').click(function(){
		that.degrees = that.degrees + 1;
		for(var i = 0; i < that.molecules.length; i++){
			var molecule = that.molecules[i];
			molecule.dx = that.degrees;
			molecule.dy = that.degrees;
		} 
	});
};

Reactor.prototype.registerLessDegreesButton = function() {
	var that = this;
	$('#less-degrees').click(function(){
		if(that.degrees > 1){
			that.degrees = that.degrees - 1;
			for(var i = 0; i < that.molecules.length; i++){
				var molecule = that.molecules[i];
				molecule.dx = that.degrees;
				molecule.dy = that.degrees;
			} 
		}
	});
};


Reactor.prototype.registerMoreMoleculesButton = function() {
	var that = this;
	$('#mwar-molecules').click(function(){
		for(var i = 0; i < 50; i++){
			that.addMolecule();	
		} 
	});
};

Reactor.prototype.registerLessMoleculesButton = function() {
	var that = this;
	$('#less-molecules').click(function(){
		for(var i = 0; i < 50; i++){
			that.removeMolecule();

		} 
	});
};

Reactor.prototype.registerBiggerMoleculesButton = function() {
	var that = this;
	$('#mwar-big').click(function(){
		that.size = that.size + 5;
		for(var i = 0; i < that.molecules.length; i++){
			var molecule = that.molecules[i];
			molecule.size = molecule.size + 5;
			molecule.draw();
		} 
	});
};

Reactor.prototype.registerSmallerMoleculesButton = function() {
	var that = this;
	$('#smaller-molecules').click(function(){
		if(that.size > 5){
			that.size = that.size - 5;
			for(var i = 0; i < that.molecules.length; i++){
				var molecule = that.molecules[i];
				molecule.size = molecule.size - 5;
				molecule.draw();
			} 
		}
	});
};

Reactor.prototype.removeMolecule = function(){
	var molecule = this.molecules.pop();
	if(molecule !=  null){
		molecule.erase();
	}
};

Reactor.prototype.draw = function(){
	var explanation = $('#explanation');
	explanation.css('width', $(window).width());
	explanation.css('height', $(window).height() - 50);
	$('body').append(explanation);
	this.element.css('top', this.x);
	this.element.css('left', this.y);
	this.element.css('height', this.height);
	this.element.css('width', this.width);
	this.element.css('background-color', this.color);
	$('body').append(this.element);
};

Reactor.prototype.addMolecule = function(){
	var model = Math.floor(Math.random() * 3);
	var molecule = new Molecule();
	if(model == 0){
		molecule.color = MoleculeA.color;
		molecule.type = "A";
	}else if(model == 1){
		molecule.type = "B";
		molecule.color = MoleculeB.color;
	}else if(model == 2){
		molecule.type = "C";
		molecule.color = MoleculeC.color;
	}

	molecule.x = Math.floor(Math.random()*this.height);
	molecule.y = Math.floor(Math.random()*this.width);
	molecule.dx = this.degrees;
	molecule.dy = this.degrees;
	molecule.size = this.size;
	this.molecules.push(molecule);
	molecule.draw();
};

Reactor.prototype.animate = function() {
	this.move();
	this.reacts();
};

Reactor.prototype.move = function(){
	for(var i = 0; i < this.molecules.length; i++){
		var molecule = this.molecules[i];
		molecule.move(this);		
	} 
};

Reactor.prototype.reacts = function(){
	for(var i = 0; i < this.molecules.length-1; i++){
		var molecule1 = this.molecules[i];
		for(var j = i +1 ; j < this.molecules.length; j++){
			var molecule2 = this.molecules[j];
			var collision = false;
			var x1 = molecule1.x + molecule1.size/2;
			var y1 = molecule1.y + molecule1.size/2;
			var x2 = molecule2.x + molecule2.size/2;
			var y2 = molecule2.y + molecule2.size/2;
			var norm = Math.sqrt((Math.pow((x2 - x1), 2) +Math.pow((y2 - y1), 2)));
			if(norm < (molecule1.size/2 + molecule2.size/2)){
				collision = true;
			}

			if(collision){

				var type1 = molecule1.type;
				var type2 = molecule2.type;

				if(type1 == "A" && type2 == "B"){
					molecule2.type = "A";
					molecule2.color = MoleculeA.color;
				}else if(type1 == "B" && type2 == "A"){
					molecule1.type = "A";
					molecule1.color = MoleculeA.color;
				}else if(type2 == "B" && type1 == "C"){
					molecule1.type = "B";
					molecule1.color = MoleculeB.color;
				}else if(type1 == "B" && type2 == "C"){
					molecule2.type = "B";
					molecule2.color = MoleculeB.color;
				}else if(type2 == "C" && type1 == "A"){
					molecule1.type = "C";
					molecule1.color = MoleculeC.color;
				}else if(type2 == "A" && type1 == "C"){
					molecule2.type = "C";
					molecule2.color = MoleculeC.color;
				}

				molecule1.dx = -molecule1.dx;
				molecule1.dy = -molecule1.dy;
				molecule2.dx = -molecule2.dx;
				molecule2.dy = -molecule2.dy;


				molecule1.draw();
				molecule2.draw();

			}

		}
	} 
};