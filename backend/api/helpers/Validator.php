<?php
class Validator
{
	private $errors = [];
	private $data;

	public function __construct($data)
	{
		$this->data = $data;
	}

	public function required($field, $message = null)
	{
		if (!isset($this->data->$field) || empty($this->data->$field)) {
			$this->errors[$field] = $message ?? "Поле $field обязательно для заполнения";
		}
		return $this;
	}

	public function email($field, $message = null)
	{
		if (isset($this->data->$field) && !filter_var($this->data->$field, FILTER_VALIDATE_EMAIL)) {
			$this->errors[$field] = $message ?? "Поле $field должно быть валидным email адресом";
		}
		return $this;
	}

	public function minLength($field, $params)
	{
		if (isset($this->data->$field) && strlen($this->data->$field) < $params['length']) {
			$this->errors[$field] = $params['message'] ?? "Поле $field должно быть не менее {$params['length']} символов";
		}
		return $this;
	}

	public function maxLength($field, $length, $message = null)
	{
		if (isset($this->data->$field) && strlen($this->data->$field) > $length) {
			$this->errors[$field] = $message ?? "Поле $field должно быть не более $length символов";
		}
		return $this;
	}

	public function matches($field, $params)
	{
		$matchField = $params['field'];
		$message = $params['message'];

		if (isset($this->data->$field) && isset($this->data->$matchField)) {
			$value1 = is_array($this->data->$field) ? implode('', $this->data->$field) : $this->data->$field;
			$value2 = is_array($this->data->$matchField) ? implode('', $this->data->$matchField) : $this->data->$matchField;

			if ($value1 !== $value2) {
				$this->errors[$field] = $message ?? "Поле $field должно совпадать с полем $matchField";
			}
		}
		return $this;
	}


	public function isValid()
	{
		return empty($this->errors);
	}

	public function getErrors()
	{
		return $this->errors;
	}
}
