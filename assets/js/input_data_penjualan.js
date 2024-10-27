document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const chooseFileBtn = document.getElementById('chooseFileBtn');
    const fileNameSpan = document.getElementById('fileName');

    chooseFileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            fileNameSpan.innerHTML = `${file.name} <button id="removeFileBtn" class="btn btn-danger btn-sm ms-2">Hapus</button>`;

            document.getElementById('removeFileBtn').addEventListener('click', () => {

                fileInput.value = ''; // Reset input file
                fileNameSpan.textContent = 'File belum dipilih';
                chooseFileBtn.textContent = 'Pilih File'; 
            });

            chooseFileBtn.textContent = file.name;
        }
    });
});
