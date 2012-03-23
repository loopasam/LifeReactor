/**
 * 
 */
function Reactor() {
	this.molecules = new Array();
	this.color = "#000000";
	//TODO defining an element like for the molecule
}

Reactor.prototype.addMolecule = function(molecule){
	this.molecules.push(molecule);
	molecule.draw();
};

Reactor.prototype.animate = function() {
	for(var i = 0; i < this.molecules.length; i++){
		var molecule = this.molecules[i];
		molecule.move();		
	} 
};