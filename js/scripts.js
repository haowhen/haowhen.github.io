$(document).ready(function () {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#contactform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            }
        }
    });
});