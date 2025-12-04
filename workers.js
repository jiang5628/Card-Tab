export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8" />
<title>Pace nel Mondo</title>
<style>
  body {
    margin:0;
    padding:0;
    background:#000;
    color:#fff;
    font-family: "Arial", sans-serif;
    text-align:center;
  }

  h1 {
    margin-top:40px;
    font-size:32px;
    letter-spacing:1px;
  }

  .candle {
    margin:40px auto;
    width:20px;
    height:80px;
    background:#222;
    border-radius:10px;
    position:relative;
  }

  .flame {
    position:absolute;
    top:-25px;
    left:50%;
    transform:translateX(-50%);
    width:20px;
    height:20px;
    background:#ffa500;
    border-radius:50%;
    animation:flicker 1.5s infinite ease-in-out;
    box-shadow:0 0 15px #ffae00;
  }

  @keyframes flicker {
    0% { transform:translateX(-50%) scale(1); opacity:0.9; }
    50% { transform:translateX(-50%) scale(1.2); opacity:1; }
    100% { transform:translateX(-50%) scale(1); opacity:0.9; }
  }

  .text {
    width:85%;
    margin:30px auto;
    line-height:1.6;
    font-size:18px;
    max-width:750px;
  }

  hr {
    width:60%;
    margin:40px auto;
    border:0;
    border-top:1px solid #444;
  }
</style>
</head>

<body>
  <h1>Possa il Mondo Vivere in Pace</h1>

  <div class="candle">
    <div class="flame"></div>
  </div>

  <div class="text">
    La pace è un dono fragile, costruito con il rispetto, la comprensione e la speranza.
    In un mondo pieno di sfide, ricordiamo che ogni piccola scelta gentile può diventare una luce.
  </div>

  <hr>

  <div class="text">
    Nessuna guerra porta davvero vittoria. Ogni conflitto lascia ferite profonde nei cuori,
    nelle famiglie, nei sogni delle persone. Che ogni nazione possa scegliere la via del dialogo.
  </div>

  <hr>

  <div class="text">
    Quando illuminiamo una candela, non scacciamo solo l’oscurità: ricordiamo coloro che soffrono,
    coloro che sperano, e coloro che attendono un domani migliore.
  </div>
</body>
</html>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
}
