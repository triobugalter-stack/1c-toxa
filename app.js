const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const modules=[
["01","Buxgalteriya 0 dan","Buxgalteriya tili, aktiv/passiv, debit/kredit, schyot va provodka."],
["02","1C arxitekturasi","Platforma, konfiguratsiya, interfeys, foydalanuvchi, tashkilot va sozlamalar."],
["03","Ma'lumotnomalar","Kontragent, nomenklatura, ombor, xodim, bank hisobi, xarajat moddalari."],
["04","Xaridlar","Tovar/xizmat kirimi, EHF, avans, yetkazib beruvchi va qarzdorlik."],
["05","Sotuvlar","Realizatsiya, EHF, tushum, tannarx, debitor qarz va qaytarish."],
["06","Bank va kassa","Bank ko'chirmasi, to'lov, kassa kirimi/chiqimi, valyuta."],
["07","Ombor va markirovka","Qoldiq, ko'chirish, inventarizatsiya, E-aktiv/E-ombor, Asl Belgisi."],
["08","Ish haqi va kadrlar","Xodim, ishga qabul, oylik, ushlanmalar, ta'til, bo'shatish."],
["09","Soliq tizimlari","QQS, foyda, JShDS, ijtimoiy, aylanma, aksiz, yer, mol-mulk, suv, yer qa'ri."],
["10","Asosiy vositalar va ishlab chiqarish","OS, NMA, amortizatsiya, xomashyo, tayyor mahsulot, tannarx."],
["11","Hisobot va oy yopilishi","ОСВ, balans, foyda/zarar, qarzdorlik, reglament operatsiyalar."],
["12","Professional level","EDO, integratsiyalar, xatolarni topish, audit, IFRS va real case'lar."]
];
const topics=[
["Buxgalteriya nima?","Korxona operatsiyalarini hujjatlashtirish, baholash, schyotlarda aks ettirish va hisobotga chiqarish tizimi."],
["Aktiv","Korxona nazorat qiladigan va kelajakda iqtisodiy naf keltirishi kutiladigan resurs."],
["Passiv","Majburiyatlar va kapitalning korxona aktivlarini moliyalashtirish manbalari sifatidagi ifodasi."],
["Debet","Schyotning chap tomoni. Uning ta'siri schyot turiga bog'liq; “debet = ko'payish” deb yodlash har doim to'g'ri emas."],
["Kredit","Schyotning o'ng tomoni. Ta'siri schyot turiga va operatsiyaga bog'liq."],
["Provodka","Iqtisodiy operatsiyaning kamida ikki schyot o'rtasidagi Dt/Kt yozuvi."],
["Analitika","Operatsiyani kontragent, nomenklatura, ombor, shartnoma va boshqa kesimlarda batafsil kuzatish."],
["ОСВ","Schyotlar bo'yicha boshlang'ich saldo, davr aylanishi va yakuniy saldo ko'rinadigan nazorat hisoboti."],
["Kontragent","Korxona bilan shartnoma/hisob-kitob munosabatidagi tashkilot yoki shaxs."],
["Nomenklatura","Tovar, material, xizmat va boshqa hisob obyektlarining ma'lumotnomadagi kartochkalari."],
["EHF","Elektron hisobvaraq-faktura; elektron hujjat aylanishi va soliq hisobida muhim hujjat."],
["EDO","Elektron hujjat aylanishi tizimi; yuridik ahamiyatga ega elektron hujjatlar bilan ishlash."],
["QQS","Qo'shilgan qiymat solig'i. 1Cda QQS hisobi hujjatlar va soliq registrlari orqali yuritiladi."],
["Foyda solig'i","Soliq solinadigan foyda bazasiga nisbatan hisoblanadigan to'g'ridan-to'g'ri soliq."],
["JShDS","Jismoniy shaxs daromadlaridan olinadigan daromad solig'i."],
["Ijtimoiy soliq","Mehnatga haq to'lash bilan bog'liq ijtimoiy soliq hisob-kitobi."],
["Aylanmadan olinadigan soliq","Muayyan soliq to'lovchilar uchun aylanma/tushumga bog'liq maxsus rejim."],
["Aksiz","Ayrim tovarlar bo'yicha qo'llanadigan bilvosita soliq."],
["Mol-mulk solig'i","Soliq solish obyekti bo'lgan mol-mulkka nisbatan hisoblanadigan soliq."],
["Yer solig'i","Yer uchastkasidan foydalanish/egalik qilish bilan bog'liq soliq."],
["Suv resurslari solig'i","Suv resurslaridan foydalanishga bog'liq soliq."],
["Yer qa'ridan foydalanganlik uchun soliq","Yer qa'ri resurslaridan foydalanish bilan bog'liq soliq."],
["Amortizatsiya","Asosiy vosita qiymatini foydali xizmat muddati davomida xarajatlarga tizimli o'tkazish."],
["Inventarizatsiya","Hisob ma'lumotlarini haqiqiy mavjudlik bilan solishtirish jarayoni."],
["Oy yopilishi","Davr oxiridagi hisob-kitoblar va moliyaviy natijani shakllantirish bo'yicha reglament jarayonlari."]
];
const lessons=[];
modules.forEach((m,mi)=>{
  for(let j=1;j<=Math.min(4,mi===11?5:4);j++){
    const idx=lessons.length;
    const base=topics[idx%topics.length];
    lessons.push({id:idx+1,module:mi,title:base[0],desc:base[1],time:mi<3?"45–60 min":"60–90 min"});
  }
});
const state=JSON.parse(localStorage.getItem("uzProState")||'{"done":[],"module":0,"case":0}');
function save(){localStorage.setItem("uzProState",JSON.stringify(state)); updateProgress();}
function updateProgress(){const p=Math.round(state.done.length/lessons.length*100);$("#miniProgress").textContent=p+"%";$("#miniBar").style.width=p+"%";$("#statLessons").textContent=lessons.length;}
function show(view){$$(".view").forEach(v=>v.classList.remove("active"));$("#"+view).classList.add("active");$$(".nav").forEach(n=>n.classList.toggle("active",n.dataset.view===view));window.scrollTo({top:0,behavior:"smooth"});}
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.go)));
$$(".nav").forEach(b=>b.addEventListener("click",()=>show(b.dataset.view)));
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#themeBtn").addEventListener("click",()=>document.body.classList.toggle("light"));
$("#resetBtn").addEventListener("click",()=>{if(confirm("Progressni tozalaysizmi?")){state.done=[];save();renderLessons();toast("Progress tozalandi");}});
function renderRoad(){ $("#roadmap").innerHTML=modules.map((m,i)=>`<article class="road-card" data-module="${i}"><b>${m[0]}</b><h3>${m[1]}</h3><p>${m[2]}</p></article>`).join(""); $$(".road-card").forEach(x=>x.onclick=()=>{state.module=+x.dataset.module;renderLessons();show("course")});}
function renderTabs(){ $("#moduleTabs").innerHTML=`<button class="module-tab ${state.module===-1?'active':''}" data-m="-1">Barchasi</button>`+modules.map((m,i)=>`<button class="module-tab ${state.module===i?'active':''}" data-m="${i}">${m[0]} ${m[1]}</button>`).join(""); $$(".module-tab").forEach(x=>x.onclick=()=>{state.module=+x.dataset.m;renderTabs();renderLessons();});}
function renderLessons(){let list=state.module<0?lessons:lessons.filter(x=>x.module===state.module);const q=($("#lessonSearch")?.value||"").toLowerCase();list=list.filter(x=>(x.title+x.desc).toLowerCase().includes(q));$("#lessonGrid").innerHTML=list.map(l=>`<article class="lesson ${state.done.includes(l.id)?"done":""}" data-id="${l.id}"><div class="num">DARS ${String(l.id).padStart(2,"0")}</div><h3>${l.title}</h3><p>${l.desc}</p><div class="meta"><span>${modules[l.module][1]}</span><span>${l.time}</span></div></article>`).join("");$$(".lesson").forEach(x=>x.onclick=()=>openLesson(+x.dataset.id));}
function openLesson(id){const l=lessons.find(x=>x.id===id);const done=state.done.includes(id);$("#modalContent").innerHTML=`<div class="eyebrow">DARS ${String(l.id).padStart(2,"0")} • ${modules[l.module][1]}</div><h2>${l.title}</h2><p style="color:var(--muted);line-height:1.8">${l.desc}</p><div class="source-note"><b>Amaliy algoritm</b><br>1) Operatsiyani real hayotda aniqlang.<br>2) Qaysi hujjat kerakligini toping.<br>3) Hujjatni 1Cga kiriting.<br>4) “Провести” natijasini tekshiring.<br>5) ОСВ/qarzdorlik/ombor/hisobotda natijani nazorat qiling.<br>6) Hujjat va provodka bir-biriga mosligini izohlang.</div><h3>Mini-test</h3><div class="choices"><button class="choice" data-answer="1">Hujjat → hisob registrlari → hisobot</button><button class="choice" data-answer="0">Faqat tugma bosish → avtomatik hamma narsa</button><button class="choice" data-answer="0">Faqat provodka yozish kifoya</button></div><button class="primary" id="lessonDone">${done?"✓ Tugallangan":"Darsni tugatish"}</button>`;$("#modal").classList.add("show");$$(".choice").forEach(c=>c.onclick=()=>{if(c.dataset.answer==="1"){c.classList.add("correct");toast("To'g'ri: operatsiya → hujjat → registr → hisobot");}else{c.classList.add("wrong");toast("Bu javob yetarli emas. Hujjat va natijani ham tekshirish kerak.");}});$("#lessonDone").onclick=()=>{if(!state.done.includes(id))state.done.push(id);save();renderLessons();$("#modal").classList.remove("show");toast("Dars progressga qo'shildi");};}
$$(".modal-close").forEach(x=>x.onclick=()=>$("#modal").classList.remove("show"));$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")});
$("#lessonSearch").addEventListener("input",renderLessons);
const labText={purchase:"Xarid hujjati odatda tovar/xizmat kelishini, yetkazib beruvchi bilan hisob-kitobni va tegishli soliq/ombor hisobini aks ettiradi.",sale:"Sotuv hujjati realizatsiyani, xaridor bilan hisob-kitobni, tushumni va tegishli tannarx/soliq hisobini shakllantiradi.",bank:"Bank operatsiyasi hisob raqamidagi pul harakatini aks ettiradi. Ko'chirma bilan 1C yozuvlarini solishtirish muhim.",salary:"Oylik blokida xodimlar, hisoblangan ish haqi, ushlanmalar va tegishli soliqlar bo'yicha hisob-kitoblar yuritiladi."};
$$("[data-lab]").forEach(b=>b.onclick=()=>{$("#labExplain").innerHTML=labText[b.dataset.lab];});
$("#postBtn").onclick=()=>{$("#postingBox").classList.toggle("show");toast("O'quv simulyatsiyasi: hujjat o'tkazildi");};
$$(".copy-code").forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText($("#"+b.dataset.copy).textContent);toast("Kod nusxalandi");});
const screens=[
["Bosh sahifa","Dashboard / KPI","Interfeys skeletoni va navigation."],
["Bank va kassa","Bank ko'chirmasi","Pul harakatini nazorat qilish."],
["Sotuvlar","Realizatsiya","Mijozga sotuv hujjati."],
["Xaridlar","Tovar kirimi","Yetkazib beruvchidan kelgan tovar."],
["Ombor","Qoldiq va inventar","Miqdor va haqiqiy qoldiq nazorati."],
["Hisobotlar","ОСВ","Hisoblarni davr bo'yicha tekshirish."]
];
$("#screenGrid").innerHTML=screens.map((s,i)=>`<article class="screen-card" data-screen="${i}"><div class="screen-visual"><div class="bar"></div><div class="side"></div><div class="lines"><div class="line" style="width:70%"></div><div class="line"></div><div class="line" style="width:82%"></div><div class="line" style="width:55%"></div><div class="line"></div></div></div><div class="screen-info"><b>${s[0]} • ${s[1]}</b><span>${s[2]}</span><button>⌘ Kodini ko'rish</button></div></article>`).join("");
$$(".screen-card").forEach(c=>c.onclick=()=>{const s=screens[+c.dataset.screen];$("#modalContent").innerHTML=`<div class="eyebrow">SCREEN + CODE</div><h2>${s[0]} • ${s[1]}</h2><p style="color:var(--muted)">${s[2]}</p><pre>&lt;section class="one-c-screen"&gt;
  &lt;header&gt;${s[0]} / ${s[1]}&lt;/header&gt;
  &lt;aside&gt;Банк • Продажи • Покупки • Склад&lt;/aside&gt;
  &lt;main&gt;
    &lt;div class="document"&gt;Hujjat ma'lumotlari&lt;/div&gt;
    &lt;button&gt;Провести&lt;/button&gt;
  &lt;/main&gt;
&lt;/section&gt;

/* CSS */
.one-c-screen{display:grid;grid-template-columns:180px 1fr}
.one-c-screen aside{padding:16px}
.one-c-screen main{padding:16px}</pre>`;$("#modal").classList.add("show")});
const taxes=[
["QQS","Bilvosita soliq. 1Cda xarid/sotuv hujjatlari, EHF va QQS registrlari bilan bog'liq.","12% — umumiy stavka sifatida o'quv misoli; maxsus holatlar bo'lishi mumkin."],
["Foyda solig'i","Soliq solinadigan foyda asosida hisoblanadi; daromad va chegiriladigan xarajatlar tahlili muhim.","15% — bazaviy stavka bo'yicha o'quv nuqtasi; maxsus stavkalarni tekshiring."],
["JShDS","Jismoniy shaxs daromadlaridan olinadi; ish haqi blokida ushlanma sifatida ko'riladi.","12% — umumiy o'quv nuqtasi; alohida daromadlar va imtiyozlar farq qiladi."],
["Ijtimoiy soliq","Ish beruvchi bilan bog'liq mehnat hisob-kitoblaridagi soliq.","Stavka faoliyat/toifaga qarab farq qilishi mumkin."],
["Aylanmadan olinadigan soliq","Maxsus soliq rejimi sifatida tegishli soliq to'lovchilarning aylanmasiga bog'liq.","Bazaviy stavka va maxsus faoliyat stavkalari alohida tekshiriladi."],
["Aksiz","Ayrim mahsulotlar bo'yicha; stavka tovar turiga bog'liq.","Tovar bo'yicha amaldagi stavkani LexUZdan tekshiring."],
["Mol-mulk solig'i","Soliq solinadigan mol-mulk bo'yicha hisoblanadi.","Obyekt va toifaga qarab hisoblanadi."],
["Yer solig'i","Yer maydoni va tegishli stavka/koeffitsiyentlar asosida.","Hududiy koeffitsiyentlar bo'lishi mumkin."],
["Suv resurslari","Suvdan foydalanish bilan bog'liq soliq.","Foydalanish turi va normativlar bo'yicha hisoblanadi."],
["Yer qa'ri","Yer qa'ridan foydalanish bilan bog'liq soliq.","Resurs/tovar turi bo'yicha stavkalar farq qiladi."]
];
$("#taxGrid").innerHTML=taxes.map(t=>`<article class="tax-card"><b>SOLIQ</b><h3>${t[0]}</h3><p>${t[1]}</p><span class="rate">${t[2]}</span></article>`).join("");
$("#calcBtn").onclick=()=>{const b=+$("#taxBase").value||0,r=+$("#taxRate").value||0;$("#taxResult").textContent=new Intl.NumberFormat("uz-UZ").format(b*r/100)+" so'm";};
const cases=[
{title:"Savdo firmasi: xarid → sotuv",sub:"Boshlang'ichdan o'rta darajaga",steps:[
["1-bosqich","ABC MCHJdan 10 dona printer 20 mln so'mga olindi. Qaysi yo'nalishdan boshlaysiz?",["Поступление товаров и услуг","Реализация товаров","Расходный кассовый ордер"],0],
["2-bosqich","Tovar omborga kirdi. Keyingi nazorat nima?",["Оmbor qoldig'i va yetkazib beruvchi qarzi","Faqat foyda hisoboti","Faqat ish haqi"],0],
["3-bosqich","2 dona 3 mln so'mdan sotildi. Qaysi hujjat?",["Реализация товаров и услуг","Поступление","Инвентаризация"],0],
["4-bosqich","Oy oxirida natijani qayerda tekshirasiz?",["ОСВ + qarzdorlik + ombor + zarur hisobotlar","Faqat kassa","Faqat nomenklatura"],0]
]}
];
function renderCases(){const c=cases[state.case];$("#caseList").innerHTML=cases.map((x,i)=>`<div class="case-item ${i===state.case?"active":""}" data-c="${i}"><b>${x.title}</b><span>${x.sub}</span></div>`).join("");$$(".case-item").forEach(x=>x.onclick=()=>{state.case=+x.dataset.c;renderCases()});const steps=c.steps;$("#caseWork").innerHTML=steps.map((s,i)=>`<div class="case-step ${i===0?"active":""}" data-step="${i}"><div class="eyebrow">${s[0]}</div><h2>${s[1]}</h2><div class="choices">${s[2].map((o,j)=>`<button class="choice" data-correct="${j===s[3]?1:0}">${o}</button>`).join("")}</div><button class="primary case-next" ${i===steps.length-1?"":"style='display:none'"}>${i===steps.length-1?"Case'ni tugatish":"Keyingi bosqich →"}</button></div>`).join("");let cur=0;$$(".case-step").forEach((st,i)=>$$(".choice",st).forEach(ch=>ch.onclick=()=>{if(ch.dataset.correct==="1"){ch.classList.add("correct");st.querySelector(".case-next").style.display="inline-block";}else ch.classList.add("wrong")}));$$(".case-next").forEach((b,i)=>b.onclick=()=>{if(i<steps.length-1){$$(".case-step")[i].classList.remove("active");$$(".case-step")[i+1].classList.add("active")}else{toast("Case tugadi — amaliyot sifatida yana takrorlang")}});}
const gl=()=>{const q=($("#termSearch")?.value||"").toLowerCase();$("#glossaryList").innerHTML=topics.filter(t=>(t[0]+t[1]).toLowerCase().includes(q)).map(t=>`<article class="term"><b>${t[0]}</b><p>${t[1]}</p></article>`).join("")};$("#termSearch").addEventListener("input",gl);
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
renderRoad();state.module=state.module??0;renderTabs();renderLessons();renderCases();gl();updateProgress();
