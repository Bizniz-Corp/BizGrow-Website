document.addEventListener('DOMContentLoaded', function() {
    const modal = new bootstrap.Modal(document.getElementById('filterModal'));

    // Event untuk membuka modal filter
    document.getElementById('filterButton').addEventListener('click', function() {
        modal.show();
    });

    // Event untuk menerapkan filter
    document.getElementById('applyFilter').addEventListener('click', function() {
        const selectedProduct = getSelectedProduct();
        const startDate = getStartDate();
        const endDate = getEndDate();

        filterTable(selectedProduct, startDate, endDate);
        modal.hide();
    });

    // Reset Filter
    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('productFilter').value = 'all';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
        filterTable();
    });

    // Filter Berdasarkan Rentang Tanggal
    document.getElementById('startDate').addEventListener('change', updateDateLabel);
    document.getElementById('endDate').addEventListener('change', updateDateLabel);

    function updateDateLabel() {
        const startDate = new Date(getStartDate());
        const endDate = new Date(getEndDate());

        // Format tanggal menjadi DD/MM/YYYY jika diisi
        if (getStartDate()) {
            document.getElementById('startDate').value = startDate.toLocaleDateString('en-GB');
        }
        if (getEndDate()) {
            document.getElementById('endDate').value = endDate.toLocaleDateString('en-GB');
        }
    }

    // Fungsi Helper
    function filterTable(selectedProduct, startDate, endDate) {
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const productName = row.cells[3].innerText.toLowerCase();
            const date = row.cells[1].innerText;
            const dateObj = new Date(date);

            const productMatch = selectedProduct === 'all' || productName === selectedProduct;
            const dateMatch = (!startDate || dateObj >= new Date(startDate)) && (!endDate || dateObj <= new Date(endDate));

            row.style.display = productMatch && dateMatch ? '' : 'none';
        });
    }

    function getSelectedProduct() {
        return document.getElementById('productFilter').value.toLowerCase();
    }

    function getStartDate() {
        return document.getElementById('startDate').value;
    }

    function getEndDate() {
        return document.getElementById('endDate').value;
    }
});





// document.addEventListener('DOMContentLoaded', function() {
//     // Filter Produk
//     document.getElementById('filterButton').addEventListener('click', function() {
//         new bootstrap.Modal(document.getElementById('filterModal')).show();
//     });

//     document.getElementById('applyFilter').addEventListener('click', function() {
//         const selectedProduct = document.getElementById('productFilter').value;
//         filterTable(selectedProduct, getStartDate(), getEndDate());
//     });

//     // Reset Filter
//     document.getElementById('resetButton').addEventListener('click', function() {
//         document.getElementById('startDate').value = '';
//         document.getElementById('endDate').value = '';
//         filterTable();
//     });

//     // Filter Berdasarkan Rentang Tanggal
//     document.getElementById('startDate').addEventListener('change', function() {
//         filterTable(getSelectedProduct(), getStartDate(), getEndDate());
//     });

//     document.getElementById('endDate').addEventListener('change', function() {
//         filterTable(getSelectedProduct(), getStartDate(), getEndDate());
//     });

//     // Fungsi Helper
//     function filterTable(selectedProduct = "all", startDate, endDate) {
//         const rows = document.querySelectorAll('tbody tr');
//         rows.forEach(row => {
//             const productName = row.cells[3].innerText;  // Kolom produk
//             const date = row.cells[1].innerText;         // Kolom tanggal
//             const dateObj = new Date(date);

//             let productMatch = selectedProduct === "all" || productName === selectedProduct;
//             let dateMatch = (!startDate || dateObj >= new Date(startDate)) && (!endDate || dateObj <= new Date(endDate));

//             row.style.display = productMatch && dateMatch ? '' : 'none';
//         });
//     }

//     function getSelectedProduct() {
//         return document.getElementById('productFilter').value;
//     }

//     function getStartDate() {
//         return document.getElementById('startDate').value;
//     }

//     function getEndDate() {
//         return document.getElementById('endDate').value;
//     }
// });


document.getElementById('searchProduct').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('#productList .form-check').forEach(check => {
        const label = check.querySelector('label').innerText.toLowerCase();
        check.style.display = label.includes(searchTerm) ? '' : 'none';
    });
});
