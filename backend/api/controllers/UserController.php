<?php
require_once __DIR__ . '/BaseController.php';
require_once __DIR__ . '/../models/User.php';

class UserController extends BaseController
{
	private $userModel;

	public function __construct()
	{
		parent::__construct();
		$this->userModel = new User($this->db);
	}

	public function create()
	{
		$data = json_decode(file_get_contents("php://input"));

		$rules = [
			'full_name' => [
				'required' => 'Имя обязательно для заполнения',
				'minLength' => ['length' => 2, 'message' => 'Имя должно быть не менее 2 символов']
			],
			'email' => [
				'required' => 'Email обязателен',
				'email' => 'Неверный формат email'
			],
			'password' => [
				'required' => 'Пароль обязателен',
				'minLength' => ['length' => 6, 'message' => 'Минимальная длина пароля 6 символов']
			],
			'confirmPassword' => [
				'required' => 'Подтверждение пароля обязательно',
				'matches' => ['field' => 'password', 'message' => 'Пароли не совпадают']
			],
		];

		if (!$this->validateRequest($data, $rules)) {
			http_response_code(400);
			echo Response::error($this->validator->getErrors());
			return;
		}

		if ($this->userModel->emailExists($data->email)) {
			http_response_code(400);
			echo Response::error(['email' => 'Этот email уже зарегистрирован']);
			return;
		}

		$data->password = password_hash($data->password, PASSWORD_DEFAULT);

		$user = $this->userModel->create($data);
		if ($user) {
			http_response_code(201);
			echo Response::success([
				'id' => $user['id'],
				'fullName' => $user['full_name'],
				'email' => $user['email'],
				'dateOfBirth' => $user['date_of_birth'],
				'phone' => $user['phone'],
				'city' => $user['city'],
				'avatarUrl' => $user['avatar_url']
			]);
		} else {
			http_response_code(503);
			echo Response::error(['database' => 'Ошибка создания пользователя']);
		}
	}

	public function login()
	{
		$data = json_decode(file_get_contents("php://input"));

		$rules = [
			'email' => [
				'required' => 'Email обязателен',
				'email' => 'Неверный формат email'
			],
			'password' => [
				'required' => 'Пароль обязателен'
			]
		];

		if (!$this->validateRequest($data, $rules)) {
			http_response_code(400);
			echo Response::error($this->validator->getErrors());
			return;
		}

		$user = $this->userModel->findByEmail($data->email);

		if ($user && password_verify($data->password, $user['password'])) {
			echo Response::success([
				'id' => $user['id'],
				'fullName' => $user['full_name'],
				'dateOfBirth' => $user['date_of_birth'],
				'phone' => $user['phone'],
				'city' => $user['city'],
				'email' => $user['email'],
				'avatarUrl' => $user['avatar_url'],
			]);
		} else {
			http_response_code(401);
			echo Response::error([
				'email' => 'Неверный email или пароль',
				'password' => 'Неверный email или пароль'
			]);
		}
	}

	public function getUser($id)
	{
		$user = $this->userModel->findById($id);

		if ($user) {
			echo Response::success($user);
		} else {
			http_response_code(404);
			echo Response::error(['error' => 'Пользователь не найден']);
		}
	}

	public function update($id)
	{
		$data = json_decode(file_get_contents("php://input"));

		if ($this->userModel->update($id, $data)) {
			echo Response::success(['message' => 'Данные пользователя обновлены']);
		} else {
			http_response_code(503);
			echo Response::error(['error' => 'Ошибка обновления данных']);
		}
	}

	public function delete($id)
	{
		if ($this->userModel->delete($id)) {
			echo Response::success(['message' => 'Пользователь удален']);
		} else {
			http_response_code(503);
			echo Response::error(['error' => 'Ошибка удаления пользователя']);
		}
	}
}
