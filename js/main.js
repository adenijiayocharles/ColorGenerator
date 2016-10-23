/**
 * generates random number between 0 and 255 which are the range of values of the rgb color scheme
 * @param  {int} min 
 * @param  {int} max [description]
 * @return {array} 
 */
	function getColors(min, max){
		var color = [];
		for(var i = 1; i <= 3; i++){
			var random = Math.floor(Math.random() * (max - min + 1)) + min;
			color.push(random);
		}
		return color;
	}

/**
 * event fired by pressing the space bar and background color of page is changed
 */
	document.body.onkeyup = function(e){
	    if(e.keyCode == 32){
	        var rgb = getColors(0,255);
			document.getElementsByTagName("body")[0].style.backgroundColor ='rgb(' + rgb.join(',') + ')';
			document.getElementById("view").innerHTML = rgb;
	    }
	};	
