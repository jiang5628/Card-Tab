export default {
  async fetch() {
    const html = `<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8">
<title>Preghiera per la Pace</title>
<style>
body{margin:0;background:#000;color:#eee;font-family:Georgia,serif;line-height:1.8;overflow-x:hidden;}
.sky{position:fixed;inset:0;background:radial-gradient(circle at 50% 20%,#222,#000);z-index:-2;}
.star{position:absolute;width:2px;height:2px;background:#fff;opacity:.5;border-radius:50%;
animation:twinkle 3s infinite ease-in-out;}
@keyframes twinkle{0%,100%{opacity:.3;}50%{opacity:1;}}
.candle-container{text-align:center;margin-top:60px;margin-bottom:40px;}
.candle{position:relative;width:40px;height:120px;margin:auto;background:linear-gradient(#f4e6c1,#c4a66a);
border-radius:10px;box-shadow:0 0 15px rgba(255,230,160,.3);}
.flame{position:absolute;top:-32px;left:50%;transform:translateX(-50%);width:22px;height:35px;
background:radial-gradient(ellipse at bottom,#fff6b8,#ff9c00);border-radius:50%;
animation:flicker 1.3s infinite ease-in-out;filter:blur(.5px);}
@keyframes flicker{0%{transform:translateX(-50%) scale(1);opacity:.9;}
50%{transform:translateX(-48%) scale(1.1);opacity:1;}
100%{transform:translateX(-52%) scale(.92);opacity:.85;}}
.content{max-width:900px;margin:30px auto 80px;padding:0 20px;}
article{background:rgba(255,255,255,.06);padding:28px;border-radius:10px;margin-bottom:35px;
border:1px solid rgba(255,255,255,.07);box-shadow:0 0 14px rgba(255,255,255,.04);
opacity:0;animation:fadeIn 1.8s forwards;}
article:nth-child(odd){animation-delay:.4s;}
article:nth-child(even){animation-delay:.8s;}
@keyframes fadeIn{from{opacity:0;transform:translateY(20px);}
to{opacity:1;transform:translateY(0);}}
h1,h2{text-align:center;color:#ffdd88;text-shadow:0 0 10px rgba(255,200,100,.5);}
footer{text-align:center;padding:25px;color:#999;font-size:14px;}
</style></head>
<body>
<div class="sky"></div>
<script>
for(let i=0;i<120;i++){let s=document.createElement("div");s.className="star";
s.style.top=Math.random()*100+"%";s.style.left=Math.random()*100+"%";
s.style.animationDelay=Math.random()*3+"s";document.body.appendChild(s);}
</script>
<div class="candle-container"><div class="candle"><div class="flame"></div></div></div>
<h1>Preghiera per la Pace nel Mondo</h1>
<div class="content">

<article>
<h2>Un Raggio di Speranza</h2>
<p>
Nelle ore più oscure della storia, una sola luce può diventare simbolo di speranza.
Questa candela rappresenta il desiderio condiviso che l’umanità scelga il dialogo
e non la violenza, il rispetto e non l’odio. Ogni vita è sacra, ogni lacrima versata
per la guerra è una ferita che appartiene a tutti noi.
</p>
</article>

<article>
<h2>Rispetto tra i Popoli</h2>
<p>
La pace nasce dal rispetto reciproco. Nessuna cultura è nemica dell’altra,
nessun confine dovrebbe diventare motivo di conflitto. Quando ascoltiamo chi è
diverso da noi, scopriamo storie, sogni e valori che ci uniscono più di quanto
ci dividano. La pace è una scelta quotidiana, costruita con coraggio e umanità.
</p>
</article>

<article>
<h2>Un Futuro per i Bambini</h2>
<p>
I bambini meritano un mondo senza sirene d’allarme, senza paura, senza distruzione.
La guerra non ruba solo case e città, ma soprattutto il futuro.
Proteggere le nuove generazioni significa impegnarsi per un mondo più giusto,
dove l’amore supera l’odio e la vita è sempre più importante della vittoria.
</p>
</article>

<article>
<h2>La Luce che Guida l’Umanità</h2>
<p>
La fiamma della candela è fragile, ma continua a brillare. Così è la speranza:
non si spegne finché qualcuno crede nella pace. Ogni gesto di bontà illumina il
cammino dell’umanità. Che questa luce possa toccare i cuori e risvegliare la
consapevolezza che un mondo migliore è possibile.
</p>
</article>

</div>

<footer>© 2025 — Preghiera per la Pace Mondiale</footer>
</body></html>`;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
