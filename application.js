function zMessages (zData) {
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
		$(zMessage).css(zCSS(zData["type"]));
		if (zData["message"]) {
			$(zMessage).html(zData["message"]);
		} else{
			$(zMessage).html("Wellcome to zMessage");
		};
		if (zData["time"]) {
			if (!isNaN(zData["time"])) {
				var zTime = zData["time"]
			} else{
				var zTime = 2500;
			};
		} else{
			var zTime = 2500;
		};
		setTimeout(function(){ 
			$(zMessage).hide(); 
			setTimeout(function(){ $(zMessage).remove(); }, 50);
		}, zTime);
	} else{
		var $zMessage = $('<li></li>');
		$('#zmessage-box ul').prepend($zMessage);
		$zMessage.css(zCSS());
		if (zData["message"]) {
			$zMessage.html(zData["message"]);
		} else{
			$zMessage.html("Wellcome to zMessage");
		};
		if (zData["time"]) {
			if (!isNaN(zData["time"])) {
				var zTime = zData["time"]
			} else{
				var zTime = 2500;
			};
		} else{
			var zTime = 2500;
		};
		setTimeout(function(){ 
			$zMessage.hide(); 
			setTimeout(function(){$zMessage.remove();}, 50); 
		}, zTime);
	};
}
function zCSS (zType) {
	var zLocalType;
	if (zType) {
		zLocalType = {
			'border':'1px solid #007AFF',
			'color':'#007AFF',
			'padding': '8px 16px',
			'margin': '8px 0',
			'width': '18em',
			'text-align': 'center',
		};
	} else{
		// set default value
		zLocalType = {
			'border':'1px solid #007AFF',
			'color':'#007AFF',
			'padding': '8px 16px',
			'margin': '8px 0',
			'width': '18em',
			'text-align': 'center',
		};
	};
	return zLocalType; 
}