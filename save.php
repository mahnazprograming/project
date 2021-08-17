<?php
    session_start();
?>
	   <?php
	  
   if(isset($_POST['save'])) {
	  
	   
    $data = array(
    $f=$_POST['first_name'],
	$l=$_POST['last_name'],
    $a=$_POST['age'],
    $c=$_POST['city']
);
   

   }

  if(isset($_POST['save'])){   
 
  if($fp = fopen("databse.csv", "a")){	
  if((!empty($f)) && (!empty($l)) && (!empty($a))  && (!empty($c))) {
  fputcsv($fp, $data);

 fclose($fp);
 }
 }

 $csv = array_map('str_getcsv', file('databse.csv'));
		$_SESSION["f"] = $csv;

 }

		 header("location: form.php");
		 return; 

 ?>