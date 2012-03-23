/**
 * 
 */
jQuery(function ($) {

	var reactor = new Reactor();
	var molecule = new Molecule();
	reactor.addMolecule(molecule);	
	
	setInterval(function(){
    	reactor.animate(); 
    }, 10);

});