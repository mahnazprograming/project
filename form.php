 <?php
    session_start();
?>
 <html>
 <head>
   <meta charset='utf-8'>
 
   <link rel="stylesheet" href="css/formstyle.css">

 </head>
 

  <body> 
  
  <div class="topnav">
      <div class="mainpage">
	     <a href="../project/main.php">صفحه اصلی</a>
      </div>
      <div class="nav">
      <?php
         include_once 'jdf.php';
	     echo jdate('l').'</br>';
       ?>
	   </div>
	   <div class="n">
	   <?php include_once 'jdf.php'; 
         echo jdate('Y/m/d');
		 ?>
	   </div>
   
   </div>
      <h1>انتقال اطلاعات کاربر به فایل متنی</h1>
     
      <form action ="save.php"  method="post" id="myForm">
	   
        <label for="nam">نام:</label><br>
        <input type="text" id="nam" name="first_name"><br>
        <label for="familly">نام خانوادگی:</label><br>
        <input type="text" id="familly" name="last_name"><br>
        <label for="age">سن:</label><br>
        <input type="text" id="age" name="age"><br>
        <label for="city">شهر:</label><br>
        <input type="text" id="city" name="city"><br>
        <input type="submit" value="ذخیره"  name="save" id="s">
		
    </form>
	<table id="myTable">
       <thead>
         <tr>
		 
           <th>نام</th>      
           <th>نام خانوادگی</th>      
           <th>سن</th>
           <th>شهر</th>
          
         </tr>
       </thead>
       <tbody >
	 
     
		  
	  <?php 
	  if (file_exists('databse.csv')) {
	  foreach($_SESSION["f"] as $user){?>
     <tr>
       <td><?php echo $user['0'];?></td>
       <td><?php echo $user['1'];?> </td>
	   <td><?php echo $user['2'];?> </td>
	   <td><?php echo $user['3'];?> </td>
     </tr>
		   <?php } ?>
		    <?php } ?>
         
		  
      
		 
  
	
       </tbody>
    </table>
	 
	<script  type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/jquery.js"></script>
	
 </body>

	
    

