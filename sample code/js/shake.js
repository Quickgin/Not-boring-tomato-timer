$(document).on("pagecreate", "#pageone", function () {

    
	//setup listener for the toggle switch
	$("#flipswitch").on("change", function(event) {
		
       if(this.value == "on" ) {
            
           console.log("on");
           shake.startWatch(onShake, 40/*, onError*/);
		   console.log("ok");
        }
		else
        {
          
            console.log("off");
            shake.stopWatch();
        }
        

	});
});


function onShake () {
  // Fired when a shake is detected
    //alert("haha");
    console.log("worked");
    //start();
};

function onError() {
  // Fired when there is an accelerometer error (optional)
    
   // alert("error");
     console.log("error");
};