<html>
  <head>
   <meta charset='utf-8'>
   <Title>ساخت جدول</Title>
   <link rel="stylesheet" href="css/filestyle.css">
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
  
<?php
$list = [
    ['first_name'=>'علی',
     'last_name'=>'امینی',
     'age'=>30,
     'city'=>'اصفهان'
    ],
	
    ['first_name'=>'رضا',
     'last_name'=>'اکبری',
     'age'=>20,
     'city'=>'شیراز'
   ],
 
    ['first_name'=>'مینا',
     'last_name'=>'احمدی',
     'age'=>50,
     'city'=>'تهران'
    ]
 ];

$file = fopen("contacts.csv","w");

  foreach ($list as $user) {
    fputcsv($file, $user , ",");
}

fclose($file);

$csv = array_map('str_getcsv', file('contacts.csv'));

?>
<h2 id="h2t">ساخت جدول کاربران</h2>

   <table>
     <tr>
       <th>نام</th>
       <th>نام خانوادگی</th>
       <th>سن</th>
       <th>شهر</th>
	
     </tr>
	 <?php foreach($csv as $user){?>
     <tr>
       <td><?php echo $user['0'];?></td>
       <td><?php echo $user['1'];?> </td>
	   <td><?php echo $user['2'];?>       </td>
	   <td><?php echo $user['3'];?>      </td>
     </tr>
     <?php } ?>

   </table>
 </body>
</html>