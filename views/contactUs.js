const socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');
});
socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();       

$("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var recap = $("#recap").val();
    
    if(!recap) {
        var response = grecaptcha.getResponse();
        if(response.length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<div>This field is required.</div>';
        return false;
        };
    };
    
    if(name && email && message) {
        $("#alert_success").html('<div class="alert alert-primary text-center alert-dismissible fade show" role="alert"><div id="space"></div><h5>Thank you <u>' + name + '</u> for Contacting Us!</h5><span>We will get back to you as soon as possible. :)</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

//        name = $("#name").val("");
//        email = $("#email").val("");
//        message = $("#message").val("");

        $(".form-control").addClass("grey");
        $(".invalid-feedback").addClass("hide");
    } else {
        $("#alert_success").html('');
        $(".form-control").removeClass("grey");
        $(".invalid-feedback").removeClass("hide");
    };
}); 

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
};

 
                    
                             
                             
                             
                             