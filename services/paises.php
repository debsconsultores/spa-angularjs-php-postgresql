<?php
ini_set('display_errors',1);

require_once("databases.php");

class Pais
{
	private $con;
	public function __construct()
	{
		$this->con = new Database();
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	$this->con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    	if($_POST){
    		echo "POST";
    	}

    	if($_GET)
    	{
    		$action = $_GET['action'];
    		$id 	= $_GET['id'];
    	}

    	switch ($action) {
    		case 'get':
    			echo $this->getPais($id);
    			break;
    		
    		default:
    			echo "Bad Request";
    			break;
    	}
	}

	private function getPais($id)
	{
		try{

			$str='SELECT * from pais_get(:_id);';
			$codPais = (is_null($id) ? -1 : $id );

			$query = $this->con->prepare($str);
			$query->bindParam(':_id', $codPais, PDO::PARAM_INT);
			$query->execute();
			$this->con->close_con();
			$q= $query->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($q);

		} catch(PDOException $e) {

			echo json_encode($e->getMessage()); 

		}
	}
}
$P = new Pais();
?>