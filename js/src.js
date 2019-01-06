var UID = {
  _current: 0,
  getNew: function(){
    this._current++;
    return this._current;
  }
};


HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();
  
  _this.className +=  " "+className; 
  
  _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
  _head.appendChild(_sheet);
  return this;
};



var burger = document.querySelector('.burger');
var close = document.querySelector('.close');
var menu = document.querySelector('.main-menu');
burger.addEventListener('click', function(){
  menu.style.top = "37px";
  burger.pseudoStyle("before","display","none");
  close.pseudoStyle("before","display","inline");
});
close.addEventListener('click', function(){
  menu.style.top = "-300px";
  burger.pseudoStyle("before","display","inline");
  close.pseudoStyle("before","display","none");
});
