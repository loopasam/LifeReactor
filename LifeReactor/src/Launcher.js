/**
 * 
 */
jQuery(function ($) {
	
	var startingMolecules = 0;
	$.browser.chrome = $.browser.webkit && !!window.chrome;
	if($.browser.chrome){
		startingMolecules = 400;
	}else{
		startingMolecules = 200;
	}

	var reactor = new Reactor();
	
	for(var i = 0; i < startingMolecules; i++){
		reactor.addMolecule();	
	} 
	
	setInterval(function(){
    	reactor.animate(); 
    }, 100);

});