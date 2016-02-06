function zMessages (zData) {
	// set Theme for message
	if (zData["theme"]) {
		setThemeMessage(zData["theme"]);
	}else{
		setThemeMessage("defaultTheme");
	};
	// set type for message
	if (zData["type"]) {
		setTypeMessage(zData["type"]);
	}else{
		setTypeMessage("defaultType");
	};
	// set contents for message
	if (zData["content"]) {
		setContentMessage(zData["content"]);
	}else{
		setContentMessage("Wellcome to Zorba");
	};
	// set time for message
	if (zData["time"]) {
		setTimeMessage(zData["time"]);
	}else{
		setTimeMessage(1500);
	};
}
function setThemeMessage (zTheme) {
	if (zTheme == "defaultTheme") {
		// set default theme
	}else{
		// set other theme
	};
}
function setTypeMessage (zType) {
	if (zType == "success") {
		// success
	} else{
		if (zType == "error") {
			// error
		} else{
			if (zType == "warning") {
				// warning
			} else{
				console.log("Type of message incorrect . Please check again !");
			};
		};
	};
}
// create element
function createZElement () {
	var zElement = document.getElementById('zmessage-box');
	// create a box
	if (!zElement) {
		var zBox = document.createElement("div");
		document.body.appendChild(zBox);
		$(zBox).attr('id','zmessage-box');
		$(zBox).css({
			'position':'fixed',
			'top':'3em',
			'right': '3em',
		});
		var zList = document.createElement("ul");
		zBox.appendChild(zList);
		// $(zList).attr('id', 'theme-name');
		$(zList).css({
			'list-style': 'none',
			'margin': '0',
		});
		// create message here
		var zMessage = document.createElement("li");
		zList.appendChild(zMessage);
		$(zMessage).css({
			'background-color':'#ff4455',
			'border':'1px solid #000',
			'color':'#fff',
			'padding': '5px 10px',
			'margin': '8px 0',
		});
		$(zMessage).html("Content here");
		setTimeout(function(){ 
			$(zMessage).hide(); 
			setTimeout(function(){ $(zMessage).remove(); }, 50);
		}, 1500);
	} else{
		var $zMessage = $('<li></li>');
		$('#zmessage-box ul').prepend($zMessage);
		$zMessage.css({
			'background-color':'#ff4455',
			'border':'1px solid #000',
			'color':'#fff',
			'padding': '5px 10px',
			'margin': '8px 0',
		});
		$zMessage.html("Content heres");
		setTimeout(function(){ 
			$zMessage.hide(); 
			setTimeout(function(){$zMessage.remove();}, 50); 
		}, 1500);
	};
}