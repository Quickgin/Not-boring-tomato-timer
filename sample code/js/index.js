var minute,second;
    minute=25;
    second=00;
    var int count;
window.localStorage.setItem("count",count);

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


    //重置函数
function Reset()
    {
      createDialog();
      
    }
    //开始函数
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
      second=0;
      document.getElementById('timetext').value='25:00';
       $("#stopbutton").hide(800);
  $("#resetbutton").hide(800);  
  $("#startbutton").show(800); 

}
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: Reset1()});
   	else if(buttonIndex==2) new Toast({content: 'OK.', duration: 3000});

}




    function start()
    {
      int=setInterval(timer,1000);
    }
    //计时函数
function timer()
{
        second=second-1; 
        if(second<00)
        {
            second=59;
            minute=minute-1;
        }
    
    if(second==0&&minute==0){
        stop();
        count=count+1;
      document.getElementById('counttext').value=localStorage.getItem("count");
    }
	if(minute>=10&&second>=10){
		document.getElementById('timetext').value=minute+':'+second;
	}
if(minute>=10&&second<10){
	document.getElementById('timetext').value=minute+':'+'0'+second;
}
	if(minute<10&&second>=10){
	document.getElementById('timetext').value='0'+minute+':'+second;
}
	if(minute<10&&second<10){
	document.getElementById('timetext').value='0'+minute+':'+'0'+second;
}
}




    //暂停函数
    function stop()
    {
      window.clearInterval(int);
    }