document.getElementById('investment-form').addEventListener('submit', function(event) {
  event.preventDefault();
 
  // Récupération des valeurs saisies par l'utilisateur
  const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
  const expectedReturn = parseFloat(document.getElementById('expected-return').value);
  const investmentDuration = parseInt(document.getElementById('investment-duration').value);
 
  // Calcul du retour sur investissement
  const totalReturn = investmentAmount * (1 + expectedReturn / 100) ** investmentDuration - investmentAmount;
  const annualReturn = totalReturn / investmentDuration;
 
  // Affichage du résultat
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p>Rendement financier total : $${totalReturn.toFixed(2)}</p>
    <p>Rendement financier annuel moyen : $${annualReturn.toFixed(2)}</p>
  `;
});
