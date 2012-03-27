/**
 * 
 */
function Molecule() {
	this.size;
	this.color = "white";
	this.x = 280;
	this.y = 200;
	this.dx = 1;
	this.dy = 1;
	//ugly, but simplifies JS casting.
	this.type = "generic";
	this.element = $('<div class="molecule"></div>');
}

Molecule.prototype.move = function(reactor) {

	var xmin = reactor.x;
	var ymin = reactor.y;
	var xmax = reactor.height;
	var ymax = reactor.width;

	var hasBumped = false;

	if (this.x < xmin) {
		this.dx = Math.abs(this.dx);
		this.x = xmin;
		hasBumped = true;
	}

	if (this.x + this.size + this.dx > xmax) {
		this.x = xmax - this.size - this.dx;
		this.dx = -Math.abs(this.dx);
		hasBumped = true;
	}

	if (this.y < ymin) {
		this.dy = Math.abs(this.dy);
		this.y = ymin;
		hasBumped = true;
	}

	if (this.y + this.size + this.dy > ymax) {
		this.y = ymax - this.size - this.dy;
		this.dy = -Math.abs(this.dy);
		hasBumped = true;
	}

	if (hasBumped == false) {
		 this.brownianMotion();
	}

	this.x = this.x + this.dx;
	this.y = this.y + this.dy;

	this.element.css('top', this.x);
	this.element.css('left', this.y);

};

Molecule.prototype.brownianMotion = function() {
	var sign = Math.floor(Math.random() * 2);
	if (sign == 0) {
		this.dx = -this.dx;
	}
	sign = Math.floor(Math.random() * 2);
	if (sign == 0) {
		this.dy = -this.dy;
	}
};

Molecule.prototype.draw = function() {
	this.element.css('top', this.x);
	this.element.css('left', this.y);
	this.element.css('background-color', this.color);
	this.element.css('height', this.size + "px");
	this.element.css('width', this.size + "px");
	this.element.css('border-radius', (this.size/2) + "px");
	this.element.css('-moz-border-radius', (this.size/2) + "px");
	this.element.css('-webkit-border-radius', (this.size/2) + "px");
	$('#reactor').append(this.element);
};

Molecule.prototype.erase = function() {
	this.element.remove();
};
