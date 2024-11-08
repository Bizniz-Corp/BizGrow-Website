const ctx = document.getElementById('myChart').getContext('2d');
let myChart;

function updateChart(selectedProduct, jsonData) {
    const productData = jsonData.find(item => item.produk === selectedProduct);

    const config = {
        type: 'line',
        data: {
            labels: productData.labels,
            datasets: productData.datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Bulan'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Permintaan'
                    }
                }
            }
        }
    };

    if (myChart) {
        myChart.destroy(); // Hapus chart lama jika ada
    }
    myChart = new Chart(ctx, config);
}

fetch('../data/prediksi_demand_tahun.json') // Path ke file JSON
    .then(response => response.json())
    .then(jsonData => {
        const selectElement = document.getElementById('productSelect');
        
        // Inisialisasi chart pertama kali
        updateChart(selectElement.value, jsonData);
        
        // Update chart setiap kali pilihan produk berubah
        selectElement.addEventListener('change', function() {
            updateChart(this.value, jsonData);
        });
    })
    .catch(error => console.error('Error loading data:', error));

// // Konfigurasi chart
// const config = {
//     type: 'line',
//     data: data,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//             }
//         },
//         interaction: {
//             mode: 'nearest',
//             axis: 'x',
//             intersect: false
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Bulan'
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Permintaan'
//                 }
//             }
//         }
//     }
// };

// Menampilkan chart
// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );

$(document).ready(function () {
    $('.search_select_box select').selectpicker();
})