<?php
require_once __DIR__ . '/BaseController.php';

class ImageController extends BaseController
{
	private $imagesDirectory = __DIR__ . '/../../../fileStorage/images/';

	public function getImages()
	{
		if (!is_dir($this->imagesDirectory . "original")) {
			http_response_code(500);
			echo Response::error(['error' => 'Директория с изображениями не найдена']);
			return;
		}

		$limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 1;
		$offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;

		$images = glob($this->imagesDirectory . "original/*.{jpg,jpeg,png,gif}", GLOB_BRACE);
		$images = array_slice($images, $offset, $limit);

		$result = array_map(function ($path) {
			$filename = basename($path);
			$filenameWithoutExt = pathinfo($filename, PATHINFO_FILENAME);
			$extension = pathinfo($filename, PATHINFO_EXTENSION);
			$smallFilename = $filenameWithoutExt . "_Small." . $extension;

			return [
				'name' => $filename,
				'small' => file_exists($this->imagesDirectory . "small/" . $smallFilename) ? $smallFilename : null,
			];
		}, $images);

		echo Response::success($result);
	}
}
