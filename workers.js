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

    /* 夜空背景 */
    .sky {
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 50% 20%, #222, #000);
        z-index: -2;
    }

    /* 轻微闪烁的光点 */
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

    /* 烛台区域 */
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
        border-radius: 50% 50% 50% 50%;
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
    /* 生成星星 */
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
            In un tempo in cui l’umanità sembra oscillare tra speranza e timore,
            la luce di una semplice candela ci ricorda che ogni gesto di pace,
            per quanto piccolo, può rischiarare l’oscurità del mondo.
            Il nostro desiderio è che nessun popolo debba più conoscere il dolore
            della guerra, che nessuna famiglia debba temere il suono delle armi,
            e che nessun bambino debba crescere tra la paura e la distruzione.
        </p>
    </article>

    <article>
        <h2>Il Valore della Vita e la Forza del Rispetto</h2>
        <p>
            La pace non è soltanto l’assenza di conflitto, ma una scelta quotidiana:
            la scelta di vedere nell’altro un essere umano degno di dignità e ascolto.
            Ogni nazione, ogni cultura, ogni fede possiede un frammento unico
            dell’eredità dell’umanità. Quando impariamo a rispettarci,
            costruiamo muri contro l’odio e ponti verso la comprensione.
        </p>
    </article>

    <article>
        <h2>Un Futuro senza Paura</h2>
        <p>
            Che il nostro mondo possa imparare a proteggere la vita invece di distruggerla.
            Che la diplomazia prevalga sulla violenza, il dialogo sul sospetto,
            la solidarietà sull’indifferenza. Non chiediamo un’utopia,
            ma un futuro in cui i popoli possano vivere senza la minaccia continua
            della devastazione. Un futuro in cui l’unica esplosione sia quella
            del sorriso di un bambino.
        </p>
    </article>

    <article>
        <h2>Una Chiamata alla Responsabilità Comune</h2>
        <p>
            La pace è un compito che appartiene a tutti.
            È un impegno che va oltre le frontiere e i governi,
            e che si fonda su decisioni semplici: parlare con gentilezza,
            aiutare chi soffre, rifiutare l’odio e l’ingiustizia.
            Accendiamo una candela non solo per ricordare,
            ma per scegliere consapevolmente la strada della speranza.
        </p>
    </article>

</div>

</body>
</html>
