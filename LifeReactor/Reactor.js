/**
 * 
 */
function Reactor() {
	this.molecules = new Array();
	this.color = "#000000";
	this.element = $('<div class="reactor"></div>');
	this.width = 1000;
	this.height = 300;
	this.x = 0;
	this.y = 0;
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

	molecule.x = Math.floor(Math.random()*this.height);
	molecule.y = Math.floor(Math.random()*this.width)/20;
	this.molecules.push(molecule);
	molecule.draw();
};

Reactor.prototype.animate = function() {
	this.move();
	this.reactions();
};

Reactor.prototype.move = function(){
	for(var i = 0; i < this.molecules.length; i++){
		var molecule = this.molecules[i];
		molecule.move(this);		
	} 
};
//TODO reaction, calculating overlapping.
Reactor.prototype.reactions = function(){
	for(var i = 0; i < this.molecules.length; i++){
		var molecule = this.molecules[i];
	} 
};