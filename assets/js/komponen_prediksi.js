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
        myChart.data.labels = productData.labels;
        myChart.data.datasets = productData.datasets;
        myChart.update();
    }
}

function loadData(url, productName) {
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            updateChart(productName, jsonData);
        })
        .catch(error => console.error('Error loading data:', error));
}

// Initial data load
let currentUrl = 'https://raw.githubusercontent.com/Bizniz-Corp/BizGrow-Website/refs/heads/1302223041_Syahreza/assets/data/prediksi_demand_bulan.json';
const selectElement = document.getElementById('productSelect');

// Load initial chart with default selection
loadData(currentUrl, selectElement.value);

// Event listener untuk dropdown produk
selectElement.addEventListener('change', function() {
    loadData(currentUrl, this.value);
});

// Event listener untuk dropdown waktu
document.getElementById('optionBulan').addEventListener('click', function() {
    currentUrl = 'https://raw.githubusercontent.com/Bizniz-Corp/BizGrow-Website/refs/heads/1302223041_Syahreza/assets/data/prediksi_demand_bulan.json';
    loadData(currentUrl, selectElement.value);
});

document.getElementById('optionHari').addEventListener('click', function() {
    currentUrl = 'https://raw.githubusercontent.com/Bizniz-Corp/BizGrow-Website/refs/heads/1302223041_Syahreza/assets/data/prediksi_demand_hari.json';
    loadData(currentUrl, selectElement.value);
});

const pilihWaktuButton = document.getElementById("pilihWaktuButton");
const optionBulan = document.getElementById("optionBulan");
const optionHari = document.getElementById("optionHari");


optionBulan.addEventListener("click", function() {
    pilihWaktuButton.innerText = "Bulan";
});

optionHari.addEventListener("click", function() {
    pilihWaktuButton.innerText = "Hari";
});



$(document).ready(function () {
    $('.search_select_box select').selectpicker();
})

