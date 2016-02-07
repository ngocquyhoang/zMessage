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
		$zMessage.css(zCSS(zData["type"]));
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
		switch (zType) {
			case "success":
				zLocalType = {
					'border':'1px solid #4CD964',
					'color':'#4CD964',
					'padding': '8px 16px',
					'margin': '8px 0',
					'max-width': '18em',
					'text-align': 'center',
				};
				break;
			case "error":
				zLocalType = {
					'border':'1px solid #FF3B30',
					'color':'#FF3B30',
					'padding': '8px 16px',
					'margin': '8px 0',
					'max-width': '18em',
					'text-align': 'center',
				};
				break;
			case "warning":
				zLocalType = {
					'border':'1px solid #FFCC00',
					'color':'#FFCC00',
					'padding': '8px 16px',
					'margin': '8px 0',
					'max-width': '18em',
					'text-align': 'center',
				};
				break;
			default:
				zLocalType = {
					'border':'1px solid #007AFF',
					'color':'#007AFF',
					'padding': '8px 16px',
					'margin': '8px 0',
					'max-width': '18em',
					'text-align': 'center',
				};
		};
	} else{
		// set default value
		zLocalType = {
			'border':'1px solid #007AFF',
			'color':'#007AFF',
			'padding': '8px 16px',
			'margin': '8px 0',
			'max-width': '18em',
			'text-align': 'center',
		};
	};
	return zLocalType; 
}