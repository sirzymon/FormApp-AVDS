//BATTERY STATUS API START
window.navigator = window.navigator || {};
navigator.battery = navigator.battery || null;
if (navigator.battery === null) {
	document.getElementById('bs-unsupported').classList.remove('hidden');
} else {
	var log = document.getElementById('log');

	document.getElementById('bt-results').classList.remove('hidden');
	function updateInfo(event) {
		if (event !== undefined) {
			log.innerHTML = 'Event "' + event.type + '" fired<br />'
					+ log.innerHTML;
		}
		document.getElementById('in-charge').innerHTML = (navigator.battery.charging ? "Yes"
				: "No");
		document.getElementById('charging-time').innerHTML = navigator.battery.chargingTime;
		document.getElementById('discharging-time').innerHTML = navigator.battery.dischargingTime;
		document.getElementById('battery-level').innerHTML = navigator.battery.level;
	}

	var events = [ 'chargingchange', 'chargingtimechange',
			'dischargingtimechange', 'levelchange' ];
	for ( var i = 0; i < events.length; i++) {
		navigator.battery.addEventListener(events[i], updateInfo);
	}
	updateInfo();

	document.getElementById('clear-log').addEventListener('click', function() {
		log.innerHTML = '';
	});
}
//BATTERY STATUS API END