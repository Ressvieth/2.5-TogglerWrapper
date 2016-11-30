function Toggler (sel) {
	
	this.elem=document.querySelector(sel);
}
	
Toggler.prototype.getElem = function(){
			return this.elem;
		};

Toggler.prototype.show = function(){
			return this.elem.style.display="";
		};

Toggler.prototype.hide = function(){
			return this.elem.style.display="none";

		};




var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);