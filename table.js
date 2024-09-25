function toggleColumn(index) {
    const rows = document.querySelectorAll('#dataTable tr');
    
    rows.forEach(row => {
        const cell = row.cells[index];
        if (cell) {
            cell.style.display = cell.style.display === 'none' ? '' : 'none';
        }
    });
}

function resetTable() {
    const rows = document.querySelectorAll('#dataTable tr');
    
    rows.forEach(row => {
        Array.from(row.cells).forEach(cell => {
            cell.style.display = '';
        });
    });
}