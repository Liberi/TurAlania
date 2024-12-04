<?php
class Database
{
	private $host = "localhost";
	private $db_name = "tur_alania_bd";
	private $username = "root";
	private $password = "";
	public $conn;

	public function getConnection()
	{
		$this->conn = null;

		try {
			// Создаем PDO подключение с указанными параметрами и сразу задаем кодировку
			$this->conn = new PDO(
				"mysql:host=" . $this->host .
					";dbname=" . $this->db_name .
					";charset=utf8mb4",
				$this->username,
				$this->password,
				[
					PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_0900_ai_ci"
				]
			);

			// Устанавливаем режим обработки ошибок
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $exception) {
			echo "Ошибка подключения: " . $exception->getMessage();
		}

		return $this->conn;
	}
}
