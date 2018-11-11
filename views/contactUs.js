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
    
    function validateEmail(em) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(em);
    };
    
    if(name && message) {
        if(!validateEmail(email)) {
            email.focus();
            return false;
        } else {
            if(name && email && message) {
                $("#alert_success").html('<div class="alert alert-primary text-center alert-dismissible fade show" role="alert"><div id="space"></div><h5>Thank you <u>' + name + '</u> for Contacting Us!</h5><span>We will get back to you as soon as possible. :)</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

                name = $("#name").val("");
                email = $("#email").val("");
                message = $("#message").val("");

                $(".form-control").addClass("grey");

                $(".invalid-feedback").addClass("hide");
            } else {
                $("#alert_success").html('');

                $(".form-control").removeClass("grey");

                $(".invalid-feedback").removeClass("hide");
            };
        };
    };
}); 

 
                    
                             
                             
                             
                             