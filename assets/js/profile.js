fetch('../user.json')
  .then(response => response.json())
  .then(users => {
    const user = users[0];

    const nameInput = document.getElementById('umkmNameInput');
    nameInput.value = user.nama;
    nameInput.setAttribute('data-original', user.nama);

    const emailInput = document.getElementById('umkmEmailInput');
    emailInput.value = user.email;
    emailInput.setAttribute('data-original', user.email);

    nameInput.addEventListener('focus', handleFocus);
    nameInput.addEventListener('blur', handleBlur);

    emailInput.addEventListener('focus', handleFocus);
    emailInput.addEventListener('blur', handleBlur);
  })
  .catch(error => console.error('Error loading JSON:', error));

function handleFocus(event) {
  const input = event.target;
  if (input.value === input.getAttribute('data-original')) {
    input.value = '';
  }
}

function handleBlur(event) {
  const input = event.target;
  if (input.value === '') {
    input.value = input.getAttribute('data-original');
  }
}

document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Tampilkan gambar yang dipilih
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
