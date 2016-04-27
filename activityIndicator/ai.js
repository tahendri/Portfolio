var AI = {
  show: function(style){
    if style = "style2"
    {
		var mu = "<div class='fadeBox'> <div class='spinner2'> </div> </div>";
	}
	else if style = "style3"
	{
		var mu = "<div class='fadeBox'> <div class='spinner3'> </div> </div>";
	}
	else {
		var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
	}
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
