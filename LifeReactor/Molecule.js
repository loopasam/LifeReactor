/**
 * 
 */
function Molecule() {
	this.size = 50;
	this.color = "#ffffff";
	this.x = 280;
	this.y = 200;
	this.dx = 1;
	this.dy = 1;
	this.element = $('<div class="molecule"></div>');
}

Molecule.prototype.move = function(reactor){

	this.x = this.x + this.dx;
	this.y = this.y + this.dy;
	this.element.css('top', this.x);
	this.element.css('left', this.y);

	var xmin = reactor.x;
	var ymin = reactor.y;
	var xmax = reactor.height;
	var ymax = reactor.width;

	var hasCollided = false;

	if(this.x - this.size < xmin){
		this.dx = Math.abs(this.dx);
		hasCollided = true;
	}else if(this.x + this.size> xmax){
		this.dx = -Math.abs(this.dx);
		hasCollided = true;
	}

	if(this.y - this.size < ymin){
		this.dy = Math.abs(this.dy);
		hasCollided = true;
	}else if(this.y + this.size> ymax){
		this.dy = -Math.abs(this.dy);
		hasCollided = true;
	}

	if(!hasCollided){
		this.brownianMotion();
	}
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
};
