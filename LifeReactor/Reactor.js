/**
 * 
 */
function Reactor() {
	this.molecules = new Array();
	this.color = "#000000";
	this.element = $('<div id="reactor"></div>');
	this.width = 1500;
	this.height = 800;
	this.x = 0;
	this.y = 0;
	this.viscosity = 1;
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

Reactor.prototype.addMolecule = function(){
	
	
	var model = Math.floor(Math.random() * 4);
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
	}else if(model == 3){
		 molecule.type = "D";
		 molecule.color = MoleculeD.color;
	}
	
	molecule.x = Math.floor(Math.random()*this.height);
	molecule.y = Math.floor(Math.random()*this.width);

	
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
					}else if(type2 == "C" && type1 == "D"){
						molecule1.type = "C";
						molecule1.color = MoleculeC.color;
					}else if(type2 == "D" && type1 == "C"){
						molecule2.type = "C";
						molecule2.color = MoleculeC.color;
					}else if(type2 == "D" && type1 == "A"){
						molecule1.type = "D";
						molecule1.color = MoleculeD.color;
					}else if(type2 == "A" && type1 == "D"){
						molecule2.type = "D";
						molecule2.color = MoleculeD.color;
					}
					
					
					
					
//					else if(molecule2.type == "A" && molecule1.type == "A"){
//						molecule1.type = "B";
//						molecule1.color = "red";
//						molecule2.type = "B";
//						molecule2.color = "red";
//					}else if(molecule1.type == "B" && molecule2.type == "B"){
//						molecule1.type = "C";
//						molecule1.color = "green";
//						molecule2.type = "C";
//						molecule2.color = "green";
//					}else if(molecule1.type == "C" && molecule2.type == "C"){
//						molecule1.type = "A";
//						molecule1.color = "blue";
//						molecule2.type = "A";
//						molecule2.color = "blue";
//					}
					
					
					
					
					molecule1.draw();
					molecule2.draw();
					
				}
			
		}
	} 
};