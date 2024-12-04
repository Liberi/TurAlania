<?php
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../helpers/Response.php';
require_once __DIR__ . '/../helpers/Validator.php';

class BaseController
{
	protected $db;
	protected $validator;

	public function __construct()
	{
		$database = new Database();
		$this->db = $database->getConnection();
	}

	protected function validateRequest($data, $rules)
	{
		$this->validator = new Validator($data);
		foreach ($rules as $field => $fieldRules) {
			foreach ($fieldRules as $rule => $params) {
				$this->validator->$rule($field, $params);
			}
		}
		return $this->validator->isValid();
	}
}
