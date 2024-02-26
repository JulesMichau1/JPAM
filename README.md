# JPAM
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculateur de ROI</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Calculateur de ROI</h1>
    <form id="investment-form">
      <label for="investment-amount">Montant investi ($)</label>
      <input type="number" id="investment-amount" required>
      <label for="expected-return">Taux de rendement attendu (%)</label>
      <input type="number" id="expected-return" required>
      <label for="investment-duration">Durée de l'investissement (années)</label>
      <input type="number" id="investment-duration" required>
      <button type="submit">Calculer</button>
    </form>
    <div id="result"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
