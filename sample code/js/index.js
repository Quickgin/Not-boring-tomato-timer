

$(document).on('pageinit', '#pageone',  function(){
    console.log("pageone - pageinit");
    
    if(localStorage.count) {
    
        document.getElementById("result").innerHTML="Tomato Number:"+localStorage.count;
    }
    
    else {
        localStorage.count = 0;
        document.getElementById("result").innerHTML="Tomato Number:"+localStorage.count;
    }
});




var minute,second;
    minute=25;
    second=00;

$(document).ready(function(){
  $("#startbutton").click(function(){
  $("#stopbutton").show(800);
  $("#resetbutton").show(800);  
  $("#startbutton").hide(800);  
  });
  
$("#stopbutton").click(function(){
  $("#startbutton").show(800);
  $("#resetbutton").show(800);  
  $("#stopbutton").hide(800);  
  });
});



function Reset()
    {
      createDialog();
      
    }

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you sure to reset the timer?',  // message
        dialogDismissed,         // callback
        'Notification!',            // title
        ['Sure', 'Cancel']                  // buttons
    );

}    

function Reset1(){
    window.clearInterval(int);
      minute=25;  
      second=00;
      //document.getElementById('timetext').value='25:00';
	document.getElementById('number').innerHTML='25:00';
       $("#stopbutton").hide(800);
  $("#resetbutton").hide(800);  
  $("#startbutton").show(800); 

}
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: Reset1()});
   	else if(buttonIndex==2) new Toast({content: 'OK.', duration: 3000});

}

function test(){

   $(document).on("pagecreate", "#pagethree", function () {

    
	//setup listener for the toggle switch
	$("#flipswitch").on("change", function(event) {
		
       if(this.value == "on" ) {
          document.addEventListener("deviceready", onDeviceReady, false); 
          console.log("open vibration");
        }
		else
        {
            console.log("close vibration");
        }
        

	});
});
}

function onDeviceReady() {
           console.log(navigator.vibrate);  
		   navigator.vibrate(3000);
   
}


    function start()
    {
      int=setInterval(timer,1000);
		
		
		console.log("start");
		test();	
		
 }








function timer()
{
        second=second-1; 
        if(second<00)
        {
            second=59;
            minute=minute-1;
        }
    
    if(second==0&&minute==0){
        Reset1();
        count();
        navigator.notification.beep(3);	
    }
	if(minute>=10&&second>=10){
		document.getElementById('number').style.fontSize= "48";
		document.getElementById('number').innerHTML=minute+':'+second;
	}
if(minute>=10&&second<10){
	document.getElementById('number').style.fontSize= "48";
	document.getElementById('number').innerHTML=minute+':'+'0'+second;
}
	if(minute<10&&second>=10){
	document.getElementById('number').style.fontSize= "48";
	document.getElementById('number').innerHTML='0'+minute+':'+second;
}
	if(minute<10&&second<10){
	document.getElementById('number').style.fontSize= "48";
    document.getElementById('number').innerHTML='0'+minute+':'+'0'+second;
}
}


function count(){
//     localStorage.count= 0;
 //    var count1 = localStorage.count;
 //     count1=count1+1;
  //    document.getElementById('counttext').value=count1;
     if(typeof(Storage) !== "undefined"){
         if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1;
        }
         document.getElementById("result").innerHTML="Tomato Number:"+localStorage.count;
     }
 }


    //暂停函数
    function stop()
    {
      window.clearInterval(int);
    }
  


function open1(){
    if (localStorage.count<2)
	{
        console.log("not enough");
		alert("Your tomatoes are not enough!");
    }
    else if (localStorage.count==2||localStorage.count>2)
        {
            window.location.href="#detailpage1";
        }
}



function open2(){
    if (localStorage.count<4)
	{
        console.log("not enough");
		alert("Your tomatoes are not enough!");
    }
    else if (localStorage.count==4||localStorage.count>4)
        {
            window.location.href="#detailpage1";
        }
}

function open3(){
    if (localStorage.count<6)
	{
        console.log("not enough");
		alert("Your tomatoes are not enough!");
    }
    else if (localStorage.count==6||localStorage.count>6)
        {
            window.location.href="#detailpage1";
        }
}


function open4(){
    if (localStorage.count<8)
	{
        console.log("not enough");
		alert("Your tomatoes are not enough!");
    }
    else if (localStorage.count==8||localStorage.count>8)
        {
            window.location.href="#detailpage1";
        }
}
