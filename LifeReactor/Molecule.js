/**
 * 
 */
function Molecule() {
	this.size = 20;
	this.color = "#ffffff";
	this.x = 200;
	this.y = 200;
	this.dx = 3;
	this.dy = 3;
	this.element = $('<div class="molecule"></div>');
}

Molecule.prototype.move = function(){
	this.x = this.x + this.dx;
	this.y = this.y + this.dy;
	this.element.css('top', this.x);
	this.element.css('left', this.y);
	this.brownianMotion();
};

Molecule.prototype.brownianMotion = function(){
	
	var sign = Math.floor(Math.random()*2);
	if(sign == 0){
		this.dx = -this.dx;
	}
	
	sign = Math.floor(Math.random()*2);
	if(sign == 0){
		this.dy = -this.dy;
	}

};

Molecule.prototype.draw = function(){
	this.element.css('top', this.x);
	this.element.css('left', this.y);
	this.element.css('height', this.size);
	this.element.css('width', this.size);
    this.element.css('-webkit-border-radius', this.size);
    this.element.css('-moz-border-radius', this.size);

	$('body').append(this.element);
	console.log(this.element);
};
