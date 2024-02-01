// Obter referências aos elementos HTML
const wheel = document.getElementById("wheel"),
    spinBtn = document.getElementById("spin-btn"),
    finalValue = document.getElementById("final-value");

// Mapear os valores associados a diferentes setores da roda
const rotationValues = [
    { minDegree: 0, maxDegree: 10, value: 5 },
    { minDegree: 11, maxDegree: 30, value: 4 },
    { minDegree: 31, maxDegree: 50, value: 3 },
    { minDegree: 51, maxDegree: 70, value: 2 },
    { minDegree: 71, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 110, value: 18 },
    { minDegree: 111, maxDegree: 130, value: 17 },
    { minDegree: 131, maxDegree: 150, value: 16 },
    { minDegree: 151, maxDegree: 170, value: 15 },
    { minDegree: 171, maxDegree: 190, value: 14 },
    { minDegree: 191, maxDegree: 210, value: 13 },
    { minDegree: 211, maxDegree: 230, value: 12 },
    { minDegree: 231, maxDegree: 250, value: 11 },
    { minDegree: 251, maxDegree: 270, value: 10 },
    { minDegree: 271, maxDegree: 290, value: 9 },
    { minDegree: 291, maxDegree: 310, value: 8 },
    { minDegree: 311, maxDegree: 330, value: 7 },
    { minDegree: 331, maxDegree: 350, value: 6 },
    { minDegree: 351, maxDegree: 360, value: 5 },
];

// Tamanho dos espaços na roda
const data = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];

// Cores dos espaços alternando entre vermelho e preto
var pieColors = [];
for (let i = 0; i < 18; i++) {
    const color = i % 2 === 0 ? "red" : "black";
    pieColors.push(color);
}

// Criar um gráfico de pizza (pie chart) para representar a roda
let myChart = new Chart(wheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        datasets: [{
            backgroundColor: pieColors,
            data: data,
        }],
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            tooltip: false,
            legend: { display: false },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
        },
    },
});

// Função para gerar o valor com base no ângulo aleatório
const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Valor: ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

// Contador e valor final para a animação de rotação
let count = 0;
let resultValue = 101;

// Lidar com o clique no botão para iniciar a rotação
spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Boa Sorte!</p>`;

    // Gerar um grau aleatório para parar
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

    // Intervalo para a animação de rotação
    let rotationInterval = window.setInterval(() => {
        myChart.options.rotation = myChart.options.rotation + resultValue;
        myChart.update();

        // Se a rotação for maior que 360, reinicie para 0
        if (myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        } else if (count > 15 && myChart.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
        }
    }, 10);
});