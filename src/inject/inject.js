chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			$('#navigation-app').hide();

			chrome.storage.sync.get({
			    speed: '60000',
			    textBigger: true
			}, function(items) {
				if (items.textBigger) {
					$('.ghx-summary').css('font-size', '19px');
					$('.ghx-summary').css('font-weight', 'bold');
					$('.aui-lozenge').css('font-size', '16px');
				}

				var height = document.getElementById("ghx-pool").scrollHeight - $('#ghx-pool').height();

				function scroll(speed) {
				    $('#ghx-pool').animate({ scrollTop: height }, speed, function() {
				        $(this).animate({ scrollTop: 0 }, speed);
				    });
				}

				scroll(items.speed)
				setInterval(function(){scroll(items.speed)}, items.speed * 2);
			});
		}
	}, 10);
});