$(function () {
	var socket = io();
	start();
	socket.on('stream', function(url) {
		$('#stream').attr('src', url);
	});
 	
	socket.emit('start-stream');

	$('.btn').on('mousedown', function () {
		socket.emit('engines', $(this).prop('id'));
	});

	$('.btn').on('mouseup', function () {
		socket.emit('engines', 'stop');
	});

});
