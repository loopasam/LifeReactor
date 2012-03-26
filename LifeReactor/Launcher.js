/**
 * 
 */
jQuery(function ($) {

	var reactor = new Reactor();
	
	for(var i = 0; i < 400; i++){
		reactor.addMolecule();	
	} 
	
	setInterval(function(){
    	reactor.animate(); 
    }, 100);

});