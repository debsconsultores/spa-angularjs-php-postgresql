<?php 
class Database extends PDO
{

 //nombre base de datos
	private $dbname = "spaangularjs";
 //nombre servidor
	private $host = "127.0.0.1";
 //nombre usuarios base de datos
	private $user = "postgres";
 //password usuario
	private $pass = "clave_usuario";
 //puerto postgreSql
	private $port = 5432;
	private $dbh;

	public $str="";

 //creamos la conexión a la base de datos prueba
	public function __construct() 
	{
		try {

			$this->dbh = parent::__construct("pgsql:host=$this->host;port=$this->port;dbname=$this->dbname;user=$this->user;password=$this->pass");

		} catch(PDOException $e) {

			echo  $e->getMessage(); 

		}

	}

 //función para cerrar una conexión pdo
	public function close_con() 
	{
		$this->dbh = null; 
	}

}
?>