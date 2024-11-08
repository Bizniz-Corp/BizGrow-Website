const correctOldPassword = "ini123";

    $(document).ready(function() {
        $('#berikutnyaBtn').on('click', function() {
            const enteredPassword = $('#passLama').val();

            if (enteredPassword === correctOldPassword) {
                $('#passLama').removeClass('is-invalid');
                $('#passLama').addClass('is-valid');
                $('#notePassLama, #berikutnyaBtn').addClass('d-none');

                $('.inputFieldBaru, .inputFieldBaruConfirm, #simpanBtn').removeClass('d-none');
            } else {
                $('#passLama').addClass('is-invalid');
                $('#notePassLama').removeClass('d-none');
            }
        });

        $('#simpanBtn').on('click', function() {
            const newPassword = $('#passBaru').val();
            const confirmPassword = $('#passBaruConfirm').val();

            if (newPassword === confirmPassword && newPassword.length > 0) {
                $('#passBaru, #passBaruConfirm').removeClass('is-invalid');
                $('#notePassBaruConfirm').addClass('d-none');

                $('#successModal').modal('show');
                
                $('#confirmButton').on('click', function() {
                    $('#successModal').modal('hide');
                    window.location.href = 'profile.html';
                });
            } else {
                $('#passBaru, #passBaruConfirm').addClass('is-invalid');
                $('#notePassBaruConfirm').removeClass('d-none');
            }
        });
    });