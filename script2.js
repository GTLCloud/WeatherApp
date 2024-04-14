document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Process data and create visualizations
            createPlots(data);
        })
        .catch(error => {
            console.error("Error loading data:", error);
        });
});

function createPlots(data) {
    // Process the fetched data and create visualizations
    // Example: Create a plot of mean temperature over time using a library like Chart.js
    // Assume you have a div with id "temperaturePlot" in your HTML to render the plot
    const dates = data.map(entry => entry.DATE);
    const meanTemperatures = data.map(entry => entry.MEAN_TEMPERATURE);

    const chartElement = document.getElementById('temperaturePlot');
    const ctx = chartElement.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Mean Temperature',
                data: meanTemperatures,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)'
            }]
        },
        options: {
            // Customize chart options as needed
        }
    });
}
