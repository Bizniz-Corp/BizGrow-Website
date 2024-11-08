const config = {
    type: 'line',
    data: {
        labels: [],  // akan diisi dari JSON
        datasets: []
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                mode: 'index',
                intersect: false
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

const myChart = new Chart(document.getElementById('myChart'), config);

function updateChart(productName, data) {
    const productData = data.find(item => item.produk === productName);

    if (productData) {
        // Update labels dan dataset chart
        myChart.data.labels = productData.labels;
        myChart.data.datasets = productData.datasets;
        myChart.update();
    }
}

fetch('https://raw.githubusercontent.com/Bizniz-Corp/BizGrow-Website/refs/heads/1302223041_Syahreza/assets/data/prediksi_demand_tahun.json')
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


$(document).ready(function () {
    $('.search_select_box select').selectpicker();
})