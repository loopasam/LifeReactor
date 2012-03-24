/**
 * 
 */
function Reactor() {
	this.molecules = new Array();
	this.color = "#000000";
	this.element = $('<div id="reactor"></div>');
	this.width = 500;
	this.height = 200;
	this.x = 0;
	this.y = 0;
	this.minRange = 2;
	this.maxRange = 7;
	this.viscosity = 10;
	this.draw();
}

Reactor.prototype.draw = function(){
	this.element.css('top', this.x);
	this.element.css('left', this.y);
	this.element.css('height', this.height);
	this.element.css('width', this.width);
	this.element.css('background-color', this.color);
	$('body').append(this.element);
};

Reactor.prototype.addMolecule = function(molecule){
	
	var model = Math.floor(Math.random() * 2);
	
	if(model == 0){
		molecule.size = 5;
		molecule.color = "#FFFF00";
		molecule.morphedColor = "#00FF00";
	}else{
		molecule.size = 10;
		molecule.color = "#FF0000";
		molecule.morphedColor = "#00FFFF";
	}
	
	molecule.x = Math.floor(Math.random()*this.height);
	molecule.y = Math.floor(Math.random()*this.width)/20;
	
	molecule.dx = 1/(molecule.size/this.viscosity);
	molecule.dy = 1/(molecule.size/this.viscosity);
	
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
			var collision = false;
			var molecule2 = this.molecules[j];
			
			var x1 = molecule1.x + molecule1.size/2;
			var y1 = molecule1.y + molecule1.size/2;
			
			var x2 = molecule2.x + molecule2.size/2;
			var y2 = molecule2.y + molecule2.size/2;
			
			var norm = Math.sqrt((Math.pow((x2 - x1), 2) +Math.pow((y2 - y1), 2)));
			if(norm < (molecule1.size/2 + molecule2.size/2)){
				collision = true;
			}
			
			if(collision){
				
				var morphedM1 = molecule1.morphedColor;
				molecule1.morphedColor = molecule1.color;
				molecule1.color = morphedM1;
				
				var morphedM2 = molecule2.morphedColor;
				molecule2.morphedColor = molecule2.color;
				molecule2.color = morphedM2;


				molecule1.draw();
				molecule2.draw();
			}
		}
	} 
};