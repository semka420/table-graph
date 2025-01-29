document.getElementById('data-table').addEventListener('click', function(event) {
    const row = event.target.closest('tr');
    if (row) {
        const chartType = row.getAttribute('data-chart');
        const data = Array.from(row.children).map(cell => parseFloat(cell.textContent.replace(/\s+/g, '')) || 0);

        Highcharts.chart('graph', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'График для ' + row.children[0].textContent
            },
            series: [{
                name: row.children[0].textContent,
                data: data.slice(1)
            }]
        });
    }
});