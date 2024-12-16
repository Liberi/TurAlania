<?php
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
	header('Content-Type: application/json');
	echo json_encode([
		'error' => $errstr,
		'file' => $errfile,
		'line' => $errline
	]);
	exit(1);
});
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type, Authorization');
	header('HTTP/1.1 200 OK');
	exit();
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods');

require_once __DIR__ . '/api/helpers/Response.php';
require_once __DIR__ . '/api/controllers/UserController.php';
require_once __DIR__ . '/api/controllers/ImageController.php';
// require_once __DIR__ . '/api/controllers/PlaceController.php';
// require_once __DIR__ . '/api/controllers/BookingController.php';

$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request = str_replace('/backend/', '', $request);

$method = $_SERVER['REQUEST_METHOD'];

// Роутинг
$routes = [
	'POST:users/create' => ['UserController', 'create'],
	'POST:users/login' => ['UserController', 'login'],
	'GET:images' => ['ImageController', 'getImages'],
	// 'GET:/places' => ['PlaceController', 'getAll'],
	// 'POST:/bookings' => ['BookingController', 'create']
];

$route_key = $method . ':' . $request;

if (isset($routes[$route_key])) {
	[$controller, $method] = $routes[$route_key];
	$controller = new $controller();
	$controller->$method();
} else {
	http_response_code(404);
	echo Response::error(['message' => 'Маршрут не найден']);
}
