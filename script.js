  const ctx1 = document.getElementById('chartBurnout');
  const ctx2 = document.getElementById('chartStress');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Suporte', 'TI', 'Operações', 'Vendas'],
      datasets: [{
        label: 'Risco de Burnout (%)',
        data: [65, 40, 55, 70]
      }]
    }
  });

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Nível médio de estresse',
        data: [40, 45, 50, 60, 58, 52]
      }]
    }
  });