var minute,second;
    minute=25;
    second=00;
    var int;

$(document).ready(function(){
  $("#startbutton").click(function(){
  $("#stopbutton").show();
  $("#resetbutton").show();  
  $("#startbutton").hide();  
  });
  
$("#stopbutton").click(function(){
  $("#startbutton").show();
  $("#resetbutton").show();  
  $("#stopbutton").hide();  
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
       $("#stopbutton").hide();
  $("#resetbutton").hide();  
  $("#startbutton").show(); 

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
        if(second<=00)
        {
            second=59;
            minute=minute-1;
        }
    
    if(second==0&&minute==0){
        stop();
    }
document.getElementById('timetext').value=minute+':'+second;
}




    //暂停函数
    function stop()
    {
      window.clearInterval(int);
    }