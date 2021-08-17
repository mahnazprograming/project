 

      $('#save').on('click', function() {
        var nam=$('#nam').val();
        var familly=$('#familly').val();
        var age=$('#age').val();
        //var ostan=$('#ostan').val();
		var o=$('#ostan').val();
		var t=o.split(",");
        var ostan=t[0];		
		var shahrestan=$('#shahrestan').val();
        var count = $('#myTable tr').length;
        if(nam!="" && familly !="" && age!="" && $.isNumeric($('#age').val()) && ostan!="" && shahrestan!=""){
        $('#myTable tbody').append('<tr data-name="'+nam+'" data-familly="'+familly+'" data-age="'+age+'" data-ostan="'+ostan+'" data-shahrestan="'+shahrestan+'"><td>'+count+'</td><td>'+nam+'</td><td>'+familly+'</td><td>'+age+'</td><td>'+ostan+'</td><td>'+shahrestan+'</td><td><button class="del">حذف</button><button class="edt">ویرایش</button></td></tr>');
	    }
	   if(!($.isNumeric($('#age').val()))){alert('لطفا فیلد سن را به صورت عدد وارد کنید');}
        $("input[name='name']").val('');  
        $("input[name='familly']").val('');
	    $("input[name='age']").val('');  
        $('#ostan').val('');
		$('#shahrestan').val('');
		
        });
	  
      $(document).on('click','.del',function(){
        $(this).parent().parent().remove();
        });
	   
	  $(document).on('click','.edt',function(){
	    var name = $(this).parents("tr").attr('data-name');  
	    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_name" value="'+name+'">');
	    var familly=$(this).parents("tr").attr('data-familly');
	    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_familly" value="'+familly+'">');
	    var age=$(this).parents("tr").attr('data-age');
	    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_age" value="'+age+'">');
	    var ostan=$(this).parents("tr").attr('data-ostan');
	    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_ostan" value="'+ostan+'">');
		var shahrestan=$(this).parents("tr").attr('data-shahrestan');
		$(this).parents("tr").find("td:eq(5)").html('<input name="edit_shahrestan" value="'+shahrestan+'">');
	    $(this).parents("tr").find("td:eq(6)").prepend("<button class='update'>به روز رسانی</button><button class='cancel'>انصراف</button>")  
        $(this).hide(); 
	    });
	   
	  $(document).on('click','.cancel',function(){
	    var name = $(this).parents("tr").attr('data-name'); 
	    var familly = $(this).parents("tr").attr('data-familly'); 
	    var age = $(this).parents("tr").attr('data-age'); 
	    var ostan = $(this).parents("tr").attr('data-ostan'); 
	    var shahrestan = $(this).parents("tr").attr('data-shahrestan'); 
	    $(this).parents("tr").find("td:eq(1)").text(name);  
        $(this).parents("tr").find("td:eq(2)").text(familly); 
        $(this).parents("tr").find("td:eq(3)").text(age);  
        $(this).parents("tr").find("td:eq(4)").text(ostan); 
		$(this).parents("tr").find("td:eq(5)").text(shahrestan);
	    $(this).parents("tr").find(".edt").show();  
        $(this).parents("tr").find(".update").remove();  
        $(this).parents("tr").find(".cancel").remove();
	    });
	  
	  $(document).on('click','.update',function(){
	    var name = $(this).parents("tr").find("input[name='edit_name']").val();
	    var familly = $(this).parents("tr").find("input[name='edit_familly']").val();
	    var age = $(this).parents("tr").find("input[name='edit_age']").val();
	    var ostan = $(this).parents("tr").find("input[name='edit_ostan']").val();
		var shahrestan = $(this).parents("tr").find("input[name='edit_shahrestan']").val();
	    $(this).parents("tr").find("td:eq(1)").text(name);  
        $(this).parents("tr").find("td:eq(2)").text(familly);  
	    $(this).parents("tr").find("td:eq(3)").text(age);  
        $(this).parents("tr").find("td:eq(4)").text(ostan); 
        $(this).parents("tr").find("td:eq(5)").text(shahrestan);		
	    $(this).parents("tr").attr('data-name', name);  
        $(this).parents("tr").attr('data-familly', familly);
	    $(this).parents("tr").attr('data-age', age);  
        $(this).parents("tr").attr('data-ostan', ostan);
		$(this).parents("tr").attr('data-shahrestan', shahrestan);
	    $(this).parents("tr").find(".edt").show();  
        $(this).parents("tr").find(".cancel").remove();  
        $(this).parents("tr").find(".update").remove();
        });
		
	   function Func(shahrestanha) {
       var _shahrestan = document.getElementById("shahrestan");
       _shahrestan.options.length = 1;
       if(shahrestanha != "") {
          var arr = shahrestanha.split(",");
          for(i = 1; i < arr.length; i++) {
              if(arr[i] != "") {
              _shahrestan.options[_shahrestan.options.length]=new Option(arr[i],arr[i]);
				 
              }
          }
       }
   }
   
   