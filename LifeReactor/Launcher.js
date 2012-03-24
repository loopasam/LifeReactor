/**
 * 
 */
jQuery(function ($) {

	var reactor = new Reactor();
	
	for(var i = 0; i < 100; i++){
		var molecule = new Molecule();
		reactor.addMolecule(molecule);	
	} 
	
	setInterval(function(){
    	reactor.animate(); 
    }, 100);

});