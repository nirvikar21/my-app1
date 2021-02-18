<?php  
class Api_Controller extends CI_Controller{
    public function __construct(){
		//header("Access-Control-Allow-Origin: *");
		//header("Access-Control-Allow-Headers: Content-Type");
		//header("Content-Type: application/json");
			//$rest_json = file_get_contents("php://input");
		//$_POST = json_decode($rest_json, true);
		
        parent::__construct();
		$this->load->helper('url');
		$this->load->model('api_model');
		
    }
	
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	
	function login(){
		
		$email  = $this->test_input($this->input->post('email'));
		$password  = $this->test_input($this->input->post('password'));
		
		$data=$this->api_model->login($email,$password,'tbl_user');
		
		if($data){
			$this->apiResponse('success', 200,$data);
		}else{
			$this->apiResponse('No records found.', 404);
		}	
	}
	
	function register(){
		$name  = $this->test_input($this->input->post('name'));
		$email  = $this->test_input($this->input->post('email'));
		$password  = $this->test_input($this->input->post('password'));
		$mobile  = $this->test_input($this->input->post('mobile'));
		$userdata = array(
			'name'    => $name,
			'email'   => $email,
			'password'=> $password,
			'mobile'  => $mobile	
		);
		$da=$this->api_model->addData($userdata,'tbl_user');
		
		$data=$this->api_model->login($email,$password,'tbl_user');
		//echo"<pre>";print_r($data);die;
		if($data){
			$this->apiResponse('success', 200,$data);
		}else{
			$this->apiResponse('No records found.', 404);
		}	
	}

	function profile(){
		$id  = $this->test_input($this->input->post('id'));
		$data=$this->api_model->profile($id,'tbl_user');
		//echo"<pre>";print_r($data);die;
		if($data){
			$this->apiResponse('success', 200,$data);
		}else{
			$this->apiResponse('No records found.', 404);
		}	
	}

	
	public function addProduct()
	{
			//echo"<pre>";print_r($_POST);print_r($_FILES);die;
			$name = $this->test_input($this->input->post('name')); 
			$price = $this->test_input($this->input->post('price')); 
			$description = $this->input->post('description');				
			if(isset($_FILES['image']))
			{
				$config['upload_path'] = 'assets/images/';  
				$config['allowed_types'] = 'jpg|jpeg|png|gif';  
				$this->load->library('upload', $config);  
				if(!$this->upload->do_upload('image'))  {  
					//$this->session->set_flashdata('adminError',$this->upload->display_errors());
					echo $this->upload->display_errors();
					}else {  
					$imageArray = $this->upload->data();
					//echo"<pre>";print_r($imageArray);die; 
					$image = 'assets/images/'.$imageArray['file_name'];
				} 
			}
			if(isset($image) && $image != ''){
				$image = $image;
			}else{
				$image = '';
			}
			$data = array(
				'name'    => $name, 
				'price'  => $price,
				'description'  => $description,
				'image'=>$image	
				);
				//echo"<pre>";print_r($data);die;
			$data = $this->api_model->addData($data,'tbl_products');	
			if($data){
				$this->apiResponse('success', 200,$data);
			}else{
				$this->apiResponse('No records found.', 404);
			}	
		}

		public function ProductList(){
			$data=$this->api_model->getData('tbl_products',$id='','');
			if($data){
				$this->apiResponse('success', 200,$data);
			}else{
				$this->apiResponse('No records found.', 404);
			}	

		}
		public function ProductDelete($id){
			$data=$this->api_model->DeleteProduct($id);
			if($data){
				$this->apiResponse('success', 200,$data);
			}else{
				$this->apiResponse('No records found.', 404);
			}	
		}

	private function apiResponse($message, $state, $data=null){
		$response['state'] = $state;
		$response['msg'] = $message;
		header('Access-Control-Allow-Origin: *');
		header('Content-Type: application/json');
		if($data){
			$response['data'] = $data;
		}
		echo json_encode($response);
		die;
	}
}