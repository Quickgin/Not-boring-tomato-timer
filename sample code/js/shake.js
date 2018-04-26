$(document).on("pagecreate", "#pageone", function () {

    alert("pageone created");
    
	//setup listener for the toggle switch
	$("#flipswitch").on("change", function(event) {
		
       if(this.value == "on" ) {
            
           console.log("on");
           shake.startWatch(onShake,30,onError);
		   console.log("haha");
        }
		else
        {
          
            console.log("off");
            shake.stopWatch();
        }
        

	});
});


var onShake = function () {
  // Fired when a shake is detected
    //alert("haha");
    console.log("worked");
    start();
};

var onError = function () {
  // Fired when there is an accelerometer error (optional)
    
   // alert("error");
     console.log("error");
};