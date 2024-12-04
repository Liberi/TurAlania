<?php
class Response
{
	public static function success($data = null)
	{
		return json_encode([
			'status' => true,
			'data' => $data
		]);
	}

	public static function error($errors = [])
	{
		return json_encode([
			'status' => false,
			'errors' => $errors
		]);
	}
}
