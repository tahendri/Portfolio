var AI = {
  show: function(){
    var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
    document.body.innerHTML += mu;
  },
  show: function(style2){
	var style2 = "<div class='fadeBox'> <div class='spinner2'> </div> </div>";
	document.body.innerHTML += style2;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
