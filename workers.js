export default {
  async fetch(request) {

    const html = `
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Preghiera per la Pace nel Mondo</title>
<style>
    body {
        margin: 0;
        padding: 0;
        background: #000000;
        color: #f2f2f2;
        font-family: "Georgia", serif;
        line-height: 1.8;
        overflow-x: hidden;
    }

    .sky {
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 50% 20%, #222, #000);
        z-index: -2;
    }

    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: #ffffff;
        opacity: 0.6;
        border-radius: 50%;
        animation: twinkle 3s infinite ease-in-out;
    }

    @keyframes twinkle {
        0%,100% { opacity: 0.3; }
        50% { opacity: 0.9; }
    }

    .candle-container {
        text-align: center;
        margin-top: 60px;
        padding-bottom: 40px;
    }

    .candle {
        position: relative;
        width: 40px;
        height: 120px;
        margin: 0 auto;
        background: linear-gradient(#e6d7b5, #b89c63);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(255,240,200,0.2);
    }

    .flame {
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        width: 22px;
        height: 35px;
        background: radial-gradient(ellipse at bottom, #fff7c0, #ff9900);
        border-radius: 50%;
        animation: flicker 1.5s infinite ease-in-out;
        filter: blur(1px);
    }

    @keyframes flicker {
        0% { transform: translateX(-50%) scale(1); opacity: 0.9; }
        50% { transform: translateX(-48%) scale(1.1); opacity: 1; }
        100% { transform: translateX(-52%) scale(0.95); opacity: 0.85; }
    }

    .content {
        max-width: 900px;
        margin: 30px auto 80px;
        padding: 0 20px;
    }

    h1, h2 {
        text-align: center;
        color: #ffe7a8;
        text-shadow: 0 0 10px rgba(255,210,120,0.5);
    }

    article {
        background: rgba(255,255,255,0.05);
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 35px;
        backdrop-filter: blur(3px);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 0 15px rgba(255,255,255,0.05);
        animation: fadeIn 1.5s ease forwards;
        opacity: 0;
    }

    article:nth-child(odd) { animation-delay: 0.3s; }
    article:nth-child(even) { animation-delay: 0.6s; }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
</head>

<body>
<div class="sky"></div>

<script>
    for (let i = 0; i < 120; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random()*100 + "%";
        star.style.left = Math.random()*100 + "%";
        star.style.animationDelay = Math.random()*3 + "s";
        document.body.appendChild(star);
    }
</script>

<div class="candle-container">
    <div class="candle">
        <div class="flame"></div>
    </div>
</div>

<div class="content">
    <h1>Preghiera per la Pace nel Mondo</h1>

    <article>
        <h2>Un Desiderio Acceso come una Candela</h2>
        <p>
            In un mondo spesso immerso nell’incertezza, la luce di una candela
            diventa un simbolo di speranza. Che ogni popolo possa conoscere
            solo la serenità, e che nessun cuore debba più temere il rumore
            della guerra o della distruzione.
        </p>
    </article>

    <article>
        <h2>Il Valore della Vita e la Forza del Rispetto</h2>
        <p>
            La pace nasce dal rispetto reciproco. Ogni cultura, ogni voce,
            ogni storia merita ascolto. Quando scegliamo di comprenderci
            invece di giudicarci, apriamo la porta a un mondo più giusto,
            più umano, più luminoso.
        </p>
    </article>

    <article>
        <h2>Un Futuro senza Paura</h2>
        <p>
            Che il domani sia un luogo dove i bambini possano crescere senza
            il peso della violenza, dove i sogni non vengano spezzati dalle
            armi, e dove l’unico eco del cielo sia quello della libertà.
        </p>
    </article>

    <article>
        <h2>Una Chiamata alla Responsabilità Comune</h2>
        <p>
            La pace appartiene a tutti noi. È un impegno quotidiano, fatto di
            piccoli gesti e grandi scelte. Accendiamo questa candela come
            segno del nostro desiderio di un mondo migliore, un mondo senza
            guerra, un mondo dove l’umanità possa finalmente respirare in armonia.
        </p>
    </article>
</div>

<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
        for (let reg of regs) {
            reg.unregister();
        }
    });
}
</script>

</body>
</html>
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      }
    });
  }
};
