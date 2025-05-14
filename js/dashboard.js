
function toggleMenu() {
    document.getElementById("settings-menu").classList.toggle("hidden");
}

function fetchData() {
    document.getElementById("wallet-balance").innerText = "$12,345.67";  // Simulated
    const chart = Chart.getChart("chart");
    if (chart) chart.destroy();

    new Chart(document.getElementById("chart"), {
        type: 'line',
        data: {
            labels: ["9:00", "9:15", "9:30", "9:45", "10:00"],
            datasets: [{
                label: 'Price',
                data: [20000, 20200, 20100, 20300, 20500],
                borderColor: '#9575cd',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    document.getElementById("trade-list").innerHTML = `
        <li>Buy 0.01 BTC @ $20,000</li>
        <li>Sell 0.01 BTC @ $20,500</li>
    `;
}

function depositBTC() {
    alert("Redirecting to Coinbase for deposit...");
    window.open("https://www.coinbase.com/", "_blank");
}

function changePassword() {
    const oldPass = document.getElementById("old-password").value;
    const newPass = document.getElementById("new-password").value;
    let current = localStorage.getItem("tsv1-password") || "test";
    if (oldPass === current) {
        localStorage.setItem("tsv1-password", newPass);
        alert("Password updated!");
    } else {
        alert("Old password incorrect.");
    }
}

fetchData();
setInterval(fetchData, 15000);
