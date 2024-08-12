document.addEventListener('DOMContentLoaded', function() {
    const jsonData = [
        // Пример данных
        { "sheet_name": "Sheet 1", "pipes": [7, 4], "lengths": [81.04, 81.3], "weights": [3.921, 4.132] },
        { "sheet_name": "Sheet 2", "pipes": [4, 1], "lengths": [45.2, 7.5], "weights": [2.197, 1.0] }
    ];

    function renderSheets(data) {
        const sheetsContainer = document.getElementById('sheets-container');
        let totalPipes = 0;
        let totalLengths = 0;
        let totalWeights = 0;

        data.forEach((sheet, index) => {
            const sheetDiv = document.createElement('div');
            sheetDiv.className = 'sheet';
            sheetDiv.innerHTML = `
                <h3>${sheet.sheet_name}</h3>
                <p>Pipes: <input type="number" value="${sheet.pipes.reduce((a, b) => a + b, 0)}" data-index="${index}" data-type="pipes"></p>
                <p>Lengths: <input type="number" step="0.01" value="${sheet.lengths.reduce((a, b) => a + b, 0)}" data-index="${index}" data-type="lengths"> meters</p>
                <p>Weights: <input type="number" step="0.01" value="${sheet.weights.reduce((a, b) => a + b, 0)}" data-index="${index}" data-type="weights"> tons</p>
            `;
            sheetsContainer.appendChild(sheetDiv);

            totalPipes += sheet.pipes.reduce((a, b) => a + b, 0);
            totalLengths += sheet.lengths.reduce((a, b) => a + b, 0);
            totalWeights += sheet.weights.reduce((a, b) => a + b, 0);
        });

        document.getElementById('total-pipes').textContent = totalPipes;
        document.getElementById('total-lengths').textContent = totalLengths.toFixed(2);
        document.getElementById('total-weights').textContent = totalWeights.toFixed(2);
    }

    renderSheets(jsonData);
});
