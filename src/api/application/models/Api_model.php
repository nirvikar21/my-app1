<?php  
defined('BASEPATH') OR exit('No direct script access allowed');

class Api_model extends CI_Model { 
	function __construct(){
		parent:: __construct();
		$this->load->database();
	}

	public function login($email,$password,$table)
	{  
		if($email != ''){
			$this->db->where('email',$email);
		}
		if($password != ''){
			$this->db->where('password',$password);
		}
		$this->db->select('id,name,email'); 
		$this->db->from($table);
		$this->db->order_by('id','DESC');
		$query = $this->db->get();
		$result = $query->result();
		//echo $this->db->last_query();die;
		if($result){
			return $result;
		}else{
			return false;
		}
	}

	public function profile($id,$table)
	{  
		if($id != ''){
			$this->db->where('id',$id);
		}
		$this->db->select('id,name,email'); 
		$this->db->from($table);
		$this->db->order_by('id','DESC');
		$query = $this->db->get();
		$result = $query->result();
		//echo $this->db->last_query();die;
		if($result){
			return $result;
		}else{
			return false;
		}
	}
	
	/* Get All Record */
	public function getData($table, $id='', $limit='10')
	{  
		if($id != ''){
			$this->db->where('id',$id);
		}
		$this->db->select('*'); 
		$this->db->from($table);
		//$this->db->where('status',1);
		$this->db->order_by('id','DESC');
		$query = $this->db->get();
		$result = $query->result();
	    if($result){
			return $result;
		}else{
			return false;
		}
	}
	
	public function updateData($table, $data, $id)
	{
		$this->db->where('id',$id);
		$result = $this->db->update($table, $data);
		if($result){
			return true;
		}else{
			return false;
		}
	}
	
	/* Add Records */
	public function addData($data1,$table)
	{  
		$result = $this->db->insert($table,$data1); 
		//echo $this->db->last_query();die;
		if($result){
			return true;
			}else{
			return false;
		}
	}
	public function DeleteProduct($id='')
	{
		$this->db->where('id',$id);
		$result = $this->db->delete('tbl_products');
		//echo $this->db->last_query();die;
		if($result){
			return $result;
			}else{
			return false;
		}
	}
	

	

	
	
	
	
}	