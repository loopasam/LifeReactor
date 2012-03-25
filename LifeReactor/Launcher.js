/**
 * 
 */
jQuery(function ($) {

	var reactor = new Reactor();
	
	for(var i = 0; i < 2000; i++){
		reactor.addMolecule();	
	} 
	
	setInterval(function(){
    	reactor.animate(); 
    }, 100);

});