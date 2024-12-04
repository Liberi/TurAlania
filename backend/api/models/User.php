<?php
class User
{
	private $conn;
	private $table = 'Users';

	public function __construct($db)
	{
		$this->conn = $db;
	}

	public function create($userData)
	{
		$query = "INSERT INTO " . $this->table . "
				 (full_name, email, password, date_of_birth, phone, city, avatar_url)
				 VALUES
				 (:full_name, :email, :password, :date_of_birth, :phone, :city, :avatar_url)";

		$stmt = $this->conn->prepare($query);

		$stmt->bindValue(":full_name", $userData->full_name);
		$stmt->bindValue(":email", $userData->email);
		$stmt->bindValue(":password", $userData->password);
		$stmt->bindValue(":date_of_birth", $userData->date_of_birth ?? null);
		$stmt->bindValue(":phone", $userData->phone ?? null);
		$stmt->bindValue(":city", $userData->city ?? null);
		$stmt->bindValue(":avatar_url", $userData->avatar_url ?? null);

		if ($stmt->execute()) {
			$id = $this->conn->lastInsertId();
			return $this->findById($id);
		}
		return false;
	}


	public function emailExists($email)
	{
		$query = "SELECT id FROM " . $this->table . " WHERE email = :email";
		$stmt = $this->conn->prepare($query);
		$stmt->bindValue(":email", $email);
		$stmt->execute();

		return $stmt->rowCount() > 0;
	}

	public function findByEmail($email)
	{
		$query = "SELECT * FROM " . $this->table . " WHERE email = :email";
		$stmt = $this->conn->prepare($query);
		$stmt->bindValue(":email", $email);
		$stmt->execute();

		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function findById($id)
	{
		$query = "SELECT id, full_name, email, date_of_birth, phone, city, avatar_url
                 FROM " . $this->table . "
                 WHERE id = :id";

		$stmt = $this->conn->prepare($query);
		$stmt->bindValue(":id", $id);
		$stmt->execute();

		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function update($id, $userData)
	{
		$query = "UPDATE " . $this->table . "
                 SET full_name = :full_name,
                     phone = :phone,
                     city = :city,
                     date_of_birth = :date_of_birth,
                     avatar_url = :avatar_url
                 WHERE id = :id";

		$stmt = $this->conn->prepare($query);

		$stmt->bindValue(":id", $id);
		$stmt->bindValue(":full_name", $userData->full_name);
		$stmt->bindValue(":phone", $userData->phone ?? null);
		$stmt->bindValue(":city", $userData->city ?? null);
		$stmt->bindValue(":date_of_birth", $userData->date_of_birth ?? null);
		$stmt->bindValue(":avatar_url", $userData->avatar_url ?? null);

		return $stmt->execute();
	}

	public function delete($id)
	{
		$query = "DELETE FROM " . $this->table . " WHERE id = :id";
		$stmt = $this->conn->prepare($query);
		$stmt->bindValue(":id", $id);

		return $stmt->execute();
	}
}
