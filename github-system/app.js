const $ = (id) => document.getElementById(id);
const STORAGE_KEY = "github-guide-structure-v1";
let lang = localStorage.getItem("github-guide-lang") || "de";
let structure = loadStructure();

const copy = {
  de: {
    edit:"Struktur bearbeiten",
    eyebrow:"Interaktiver Leitfaden · Stand 2026",
    heroTitle:"GitHub sauber organisieren, bevor Projekte chaotisch werden.",
    heroCopy:"Ein visueller Leitfaden für Organizations, Ownership, Rollen, Repositories, Monorepos, Netlify-Deployments und eure Zielstruktur aus Agentur, TFV und Fures.",
    heroPrimary:"Unsere Zielstruktur",
    heroSecondary:"Grundlagen verstehen",
    basicsKicker:"01 · Grundlagen",
    basicsTitle:"Was ist eine GitHub Organization?",
    basicsIntro:"Eine Organization ist ein gemeinsamer Arbeits- und Verwaltungsbereich. Menschen behalten ihre persönlichen GitHub-Konten, während Repositories, Teams und Zugriffsrechte der Organization zugeordnet werden.",
    basics:[
      ["👤","Persönliches Konto","Dein Login bleibt persönlich. Du arbeitest mit deinem eigenen Account in einer oder mehreren Organizations."],
      ["🏢","Organization","Die Organization bündelt Firmen- oder Projektressourcen. Sie kann mehrere Owner, Teams, Repositories und Projects haben."],
      ["📦","Repository","Der Code liegt idealerweise bei der Organization, nicht dauerhaft unter dem privaten Konto eines Mitarbeiters."]
    ],
    rolesKicker:"02 · Ownership & Rechte",
    rolesTitle:"Zwei Ebenen, die man nicht verwechseln sollte",
    orgRolesTitle:"Organization-Rollen",
    repoRolesTitle:"Repository-Rollen",
    orgRoles:[
      ["Owner","Volle administrative Kontrolle über die Organization. GitHub empfiehlt für Kontinuität mindestens zwei Owner."],
      ["Member","Normales Mitglied der Organization. Rechte auf Repositories werden zusätzlich gesteuert."],
      ["Spezialrollen","Je nach Plan und Bedarf gibt es u. a. Billing-, Security-, CI/CD- und App-Verwaltungsrollen."]
    ],
    repoRoles:[
      ["Read","Lesen und diskutieren."],
      ["Triage","Issues und Pull Requests verwalten, ohne Code zu schreiben."],
      ["Write","Aktiv Code pushen und entwickeln."],
      ["Maintain","Repository verwalten, ohne alle sensiblen Admin-Rechte."],
      ["Admin","Vollzugriff auf das Repository inklusive sensibler Einstellungen."]
    ],
    ownershipNotice:"Wichtig: GitHub-Owner oder Repository-Admin bedeutet technische Kontrolle innerhalb GitHubs. Das bestimmt nicht automatisch die rechtliche Eigentümerschaft an Firma, Verein, Marke oder geistigem Eigentum.",
    enterpriseKicker:"03 · Große Unternehmen",
    enterpriseTitle:"Wie skalierende Unternehmen GitHub normalerweise aufbauen",
    enterpriseCopy:"GitHub empfiehlt Organization-owned Repositories und Teams für Zugriffskontrolle. Größere Unternehmen gruppieren Arbeit entweder nach Produkten/Anwendungen oder nach gemeinsamen Governance- und Sicherheitsanforderungen.",
    enterpriseSteps:[
      ["Enterprise / Firma","zentrale Governance, Richtlinien, Abrechnung"],
      ["Organizations","z. B. Produkte, Bereiche oder Sicherheitszonen"],
      ["Teams","Development, Marketing, External, Security"],
      ["Repositories","Produkte, Websites, Services, Infrastruktur"],
      ["Projects & CI/CD","Aufgaben, Automationen, Deployments"]
    ],
    targetKicker:"04 · Unser Modell",
    targetTitle:"Die Struktur für Agentur, TFV und Fures",
    targetCopy:"Die drei Geschäftsbereiche bleiben getrennt. Menschen können trotzdem in mehreren Organizations mit ihrem persönlichen GitHub-Konto arbeiten.",
    owner:"Owner",
    members:"Mitglieder / technische Mitarbeit",
    repos:"Beispiel-Repositories",
    responsibility:"Geschäftliche Verantwortung",
    targetLegend:"Die Namen und Rollen auf dieser Seite sind editierbar. Oben auf „Struktur bearbeiten“ klicken. Änderungen werden lokal im Browser gespeichert und können als JSON exportiert werden.",
    repoKicker:"05 · Repo-Strategie",
    repoTitle:"Monorepo oder mehrere Repositories?",
    repoCopy:"Nicht die Anzahl der Domains entscheidet, sondern technische Nähe, Zugriffsrechte und gemeinsame Komponenten.",
    compare:[
      ["Monorepo","Gut für eng zusammengehörige Websites",["Gemeinsame UI und Corporate-Design-Pakete","Einheitliche Regeln und Tooling","Mehrere Domains können aus einem Repo deployen","Ideal für kleine Teams mit ähnlicher Technik"]],
      ["Separate Repositories","Gut für unabhängige Produkte",["Saubere Rechte pro Produkt/Kunde","Unabhängige Releases und Risiken","Besser für MeinHotel oder externe Kunden","Einfacher zu trennen, verkaufen oder übergeben"]]
    ],
    deployKicker:"06 · Netlify & Deployments",
    deployTitle:"Ein Repository bedeutet nicht automatisch ein gemeinsames Deployment",
    deployCopy:"Mehrere Netlify Sites können dasselbe GitHub-Repository verwenden. Jede Site erhält eine eigene Base Directory / Publish-Konfiguration und kann nur auf relevante Änderungen reagieren.",
    deployNotice:"Praxis: Ändert sich nur apps/goodlife, muss tourismusverband.net nicht neu gebaut werden, wenn Netlify Monorepo-/Ignore-Regeln korrekt gesetzt sind. Änderungen an einem gemeinsam genutzten Paket wie corporate-design können dagegen bewusst mehrere Sites betreffen.",
    freeKicker:"07 · Kosten",
    freeTitle:"Für euren Start reicht GitHub Free sehr weit",
    stats:[["Kostenlos","Organizations"],["Unbegrenzt","öffentliche & private Repositories"],["2.000","Actions-Minuten / Monat für GitHub Free Organizations bei privaten Repositories"]],
    freeNote:"Quelle: offizielle GitHub-Dokumentation. Actions-Kontingente und Planfunktionen können sich ändern. Öffentliche Repositories mit Standard GitHub-hosted Runnern sind von normalen Actions-Minutenkosten ausgenommen.",
    migrationKicker:"08 · Umsetzung",
    migrationTitle:"So würde ich die Umstellung durchführen",
    migration:[
      ["Organizations anlegen","Agentur und TFV unter Andreas' organisatorischer Kontrolle; Fures separat für Furkan/Gülben."],
      ["Mindestens einen Backup-Owner planen","Geschäftliche Verantwortung bleibt klar, gleichzeitig verhindert ein zweiter vertrauenswürdiger Owner einen technischen Lockout."],
      ["Bestehende Repositories zuordnen","Repos schrittweise in die passende Organization übertragen, statt alles auf einmal umzubauen."],
      ["Teams und Repo-Rechte definieren","Nur die Rechte geben, die wirklich benötigt werden. Kunden oder Freelancer nicht pauschal auf alles setzen."],
      ["Monorepos gezielt einsetzen","Zusammengehörige TFV-Websites können in ein Monorepo. MeinHotel und unabhängige Produkte separat halten."],
      ["Netlify pro Site konfigurieren","Jede Domain bekommt ihre eigene Site, Build-Basis und Deploy-Regeln."],
      ["GitHub Projects ergänzen","Aufgaben aus unterschiedlichen Repositories zentral in Boards, Tabellen und Roadmaps steuern."]
    ],
    faqKicker:"09 · FAQ",
    faqTitle:"Die typischen Fragen",
    faq:[
      ["Müssen alle Personen denselben GitHub-Account benutzen?","Nein. Jeder behält seinen eigenen Account und wird in die passenden Organizations eingeladen."],
      ["Muss alles in einem Repository liegen?","Nein. Organization und Repository sind zwei verschiedene Ebenen. Eine Organization kann sehr viele Repositories besitzen."],
      ["Kann Andreas TFV komplett kontrollieren und Furkan trotzdem entwickeln?","Ja. Andreas kann Owner bleiben und Furkan erhält je nach Bedarf Member-, Maintain- oder Admin-Rechte auf relevante Repositories."],
      ["Kann ich Owner später ändern?","Ja. Owner und Repository-Zugriffe lassen sich über GitHub Settings ändern. Für organisatorische Kontinuität sollte die Änderung bewusst dokumentiert werden."],
      ["Ist GitHub-Ownership dasselbe wie rechtliches Eigentum?","Nein. GitHub-Rechte steuern technische Zugänge. Rechtliche Eigentumsverhältnisse werden durch Verträge, Gesellschafts- oder Vereinsstrukturen und geltendes Recht bestimmt."],
      ["Kann GitHub auch Projektmanagement?","Ja. GitHub Projects kann Issues aus mehreren Repositories in Boards, Tabellen und Roadmaps zusammenführen. Für kleine technische Teams kann das reichen."]
    ],
    sourcesKicker:"10 · Quellen",
    sourcesTitle:"Offizielle GitHub-Dokumentation",
    footer:"Interner Lern- und Architekturleitfaden",
    editorKicker:"Live-Konfiguration",
    editorTitle:"Organisationen und Ownership bearbeiten",
    editorHelp:"Bearbeite das JSON. Die Änderungen wirken sofort auf die Visualisierung und werden nur in diesem Browser gespeichert. Für dauerhafte Standardwerte kannst du später data.js im Repository ändern.",
    reset:"Standard wiederherstellen",
    export:"JSON exportieren",
    import:"JSON importieren",
    save:"Speichern & anwenden",
    saved:"Gespeichert.",
    invalid:"JSON ist ungültig. Bitte Syntax prüfen."
  },
  tr: {
    edit:"Yapıyı düzenle",
    eyebrow:"Etkileşimli rehber · 2026",
    heroTitle:"Projeler büyümeden GitHub yapısını doğru kur.",
    heroCopy:"Organization, sahiplik, roller, repository yapısı, monorepo, Netlify deploy mantığı ve Agentur · TFV · Fures hedef mimarisi için görsel bir rehber.",
    heroPrimary:"Bizim hedef yapımız",
    heroSecondary:"Temeli öğren",
    basicsKicker:"01 · Temel",
    basicsTitle:"GitHub Organization nedir?",
    basicsIntro:"Organization, ortak bir çalışma ve yönetim alanıdır. Herkes kendi kişisel GitHub hesabını kullanmaya devam eder; repository, takım ve yetkiler Organization altında yönetilir.",
    basics:[
      ["👤","Kişisel hesap","Giriş hesabın kişisel kalır. Aynı hesapla birden fazla Organization içinde çalışabilirsin."],
      ["🏢","Organization","Şirket veya proje kaynaklarını toplar. Birden fazla Owner, Team, Repository ve Project barındırabilir."],
      ["📦","Repository","Kodun uzun vadede bir çalışanın kişisel hesabında değil, ilgili Organization altında bulunması daha sağlıklıdır."]
    ],
    rolesKicker:"02 · Sahiplik & Yetki",
    rolesTitle:"Birbirine karıştırılmaması gereken iki seviye",
    orgRolesTitle:"Organization rolleri",
    repoRolesTitle:"Repository rolleri",
    orgRoles:[
      ["Owner","Organization üzerinde tam yönetim yetkisi. GitHub süreklilik için en az iki Owner önerir."],
      ["Member","Organization'ın normal üyesi. Repository yetkileri ayrıca belirlenir."],
      ["Özel roller","Plana ve ihtiyaca göre Billing, Security, CI/CD ve App yönetimi gibi roller bulunabilir."]
    ],
    repoRoles:[
      ["Read","Okuma ve tartışmalara katılma."],
      ["Triage","Kod yazmadan Issue ve Pull Request yönetimi."],
      ["Write","Aktif geliştirme ve push yetkisi."],
      ["Maintain","Hassas Admin yetkileri olmadan repository yönetimi."],
      ["Admin","Repository üzerinde hassas ayarlar dahil tam yetki."]
    ],
    ownershipNotice:"Önemli: GitHub Owner veya Repository Admin olmak, GitHub içindeki teknik kontrolü ifade eder. Bu durum şirketin, derneğin, markanın veya fikri mülkiyetin hukuki olarak kime ait olduğunu tek başına belirlemez.",
    enterpriseKicker:"03 · Büyük şirketler",
    enterpriseTitle:"Büyüyen şirketler GitHub'ı genelde nasıl kuruyor?",
    enterpriseCopy:"GitHub, şirket çalışmalarında Organization-owned repository ve Team tabanlı erişim modelini önerir. Büyük yapılarda Organization'lar ürün/uygulama gruplarına veya benzer güvenlik ve yönetim kurallarına göre ayrılır.",
    enterpriseSteps:[
      ["Enterprise / Şirket","merkezi politika, güvenlik ve faturalama"],
      ["Organizations","ürünler, iş alanları veya güvenlik bölgeleri"],
      ["Teams","Development, Marketing, External, Security"],
      ["Repositories","ürün, web sitesi, servis ve altyapılar"],
      ["Projects & CI/CD","iş takibi, otomasyon ve deploy"]
    ],
    targetKicker:"04 · Bizim modelimiz",
    targetTitle:"Agentur, TFV ve Fures için hedef yapı",
    targetCopy:"Üç iş alanı birbirinden ayrılır. Buna rağmen kişiler kendi GitHub hesaplarıyla birden fazla Organization içinde çalışabilir.",
    owner:"Owner",
    members:"Üyeler / teknik çalışma",
    repos:"Örnek repository'ler",
    responsibility:"İş tarafındaki sorumluluk",
    targetLegend:"Bu sayfadaki isim ve roller düzenlenebilir. Üstteki “Yapıyı düzenle” butonuna bas. Değişiklikler tarayıcıda saklanır ve JSON olarak dışa aktarılabilir.",
    repoKicker:"05 · Repo stratejisi",
    repoTitle:"Monorepo mu, ayrı repository'ler mi?",
    repoCopy:"Kararı domain sayısı değil, projelerin teknik yakınlığı, erişim hakları ve ortak bileşenleri belirler.",
    compare:[
      ["Monorepo","Birbirine yakın web projeleri için iyi",["Ortak UI ve Corporate Design paketleri","Tek tip kurallar ve geliştirme araçları","Bir repo içinden farklı domainlere deploy","Benzer teknoloji kullanan küçük ekipler için ideal"]],
      ["Ayrı Repository","Bağımsız ürünler için iyi",["Ürün/müşteri bazında net erişim","Bağımsız release ve risk alanı","MeinHotel veya dış müşteriler için daha uygun","Devretmek, ayırmak veya satmak daha kolay"]]
    ],
    deployKicker:"06 · Netlify & Deploy",
    deployTitle:"Tek repository, tek deploy demek değildir",
    deployCopy:"Birden fazla Netlify Site aynı GitHub repository'sine bağlanabilir. Her site kendi Base Directory / Publish ayarına sahip olabilir ve yalnızca ilgili değişikliklerde build çalıştırabilir.",
    deployNotice:"Örnek: sadece apps/goodlife değiştiğinde doğru Monorepo/Ignore ayarıyla tourismusverband.net yeniden build olmak zorunda değildir. corporate-design gibi ortak bir paket değişirse birden fazla siteyi bilinçli olarak tetikleyebiliriz.",
    freeKicker:"07 · Maliyet",
    freeTitle:"Başlangıç için GitHub Free oldukça yeterli",
    stats:[["Ücretsiz","Organizations"],["Sınırsız","public & private repository"],["2.000","GitHub Free Organization için private repo Actions dakikası / ay"]],
    freeNote:"Kaynak: resmi GitHub dokümantasyonu. Plan özellikleri ve Actions kotaları zamanla değişebilir. Public repository'lerde standart GitHub-hosted runner kullanımı normal Actions dakika kotasına tabi değildir.",
    migrationKicker:"08 · Uygulama",
    migrationTitle:"Geçişi böyle yapardım",
    migration:[
      ["Organization'ları oluştur","Agentur ve TFV Andreas'ın organizasyonel kontrolünde; Fures Furkan/Gülben tarafında ayrı."],
      ["Yedek Owner planla","İş sorumluluğu net kalır fakat güvenilir ikinci bir Owner teknik kilitlenme riskini azaltır."],
      ["Mevcut repository'leri eşleştir","Her şeyi bir günde taşımak yerine repoları adım adım doğru Organization'a aktar."],
      ["Team ve repo yetkilerini tanımla","İnsanlara sadece gereken yetkiyi ver. Müşteri veya freelancer'ı tüm sisteme açma."],
      ["Monorepo'yu seçici kullan","Birbirine bağlı TFV web siteleri aynı monorepo'da olabilir. MeinHotel ve bağımsız ürünler ayrı kalır."],
      ["Netlify'ı site bazında kur","Her domain kendi Site, Base Directory ve deploy kurallarına sahip olsun."],
      ["GitHub Projects ekle","Farklı repository'lerdeki işleri tek Board, Table ve Roadmap üzerinden yönet."]
    ],
    faqKicker:"09 · SSS",
    faqTitle:"En çok karıştırılan konular",
    faq:[
      ["Herkes aynı GitHub hesabını mı kullanmalı?","Hayır. Herkes kendi hesabını kullanır ve gerekli Organization'lara davet edilir."],
      ["Her şey tek repository'de mi olmalı?","Hayır. Organization ve Repository farklı katmanlardır. Bir Organization çok sayıda repository barındırabilir."],
      ["TFV tamamen Andreas'ta kalıp Furkan geliştirme yapabilir mi?","Evet. Andreas Owner kalabilir. Furkan'a gereken repository'lerde Member, Maintain veya Admin seviyesi verilebilir."],
      ["Owner sonradan değiştirilebilir mi?","Evet. GitHub Settings üzerinden Owner ve repository erişimleri değiştirilebilir. Kurumsal devamlılık için bu değişikliklerin belgelenmesi iyi olur."],
      ["GitHub sahipliği hukuki sahiplik midir?","Hayır. GitHub rolleri teknik erişimi yönetir. Hukuki sahiplik sözleşme, şirket/dernek yapısı ve ilgili hukukla belirlenir."],
      ["GitHub proje yönetimi için kullanılabilir mi?","Evet. GitHub Projects farklı repository'lerdeki Issue'ları Board, Table ve Roadmap üzerinde birleştirebilir. Küçük teknik ekipler için yeterli olabilir."]
    ],
    sourcesKicker:"10 · Kaynaklar",
    sourcesTitle:"Resmi GitHub dokümantasyonu",
    footer:"Dahili eğitim ve mimari rehber",
    editorKicker:"Canlı konfigürasyon",
    editorTitle:"Organization ve sahiplikleri düzenle",
    editorHelp:"JSON verisini değiştir. Değişiklikler görsel yapıya hemen uygulanır ve sadece bu tarayıcıda saklanır. Kalıcı varsayılan yapı için repository içindeki data.js dosyasını değiştirebilirsin.",
    reset:"Varsayılana dön",
    export:"JSON dışa aktar",
    import:"JSON içe aktar",
    save:"Kaydet & uygula",
    saved:"Kaydedildi.",
    invalid:"JSON geçersiz. Sözdizimini kontrol et."
  }
};

function clone(v){ return JSON.parse(JSON.stringify(v)); }
function loadStructure(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || clone(window.GITHUB_GUIDE_DEFAULTS);
  }catch{
    return clone(window.GITHUB_GUIDE_DEFAULTS);
  }
}
function esc(v){
  return String(v ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}
function setText(id,value){ const el=$(id); if(el) el.textContent=value; }

function render(){
  const c=copy[lang];
  document.documentElement.lang=lang;
  document.documentElement.dataset.lang=lang;
  $("lang-de").classList.toggle("active",lang==="de");
  $("lang-tr").classList.toggle("active",lang==="tr");

  setText("edit-structure",c.edit);
  setText("hero-eyebrow",c.eyebrow);
  setText("hero-title",c.heroTitle);
  setText("hero-copy",c.heroCopy);
  setText("hero-primary",c.heroPrimary);
  setText("hero-secondary",c.heroSecondary);

  structure.people.slice(0,3).forEach((p,i)=>setText("diagram-person-"+["a","b","c"][i],p));
  $("hero-org-row").innerHTML=structure.organizations.map(o=>`
    <div class="org-chip ${esc(o.tone)}"><strong>${esc(o.name)}</strong><small>${esc(c.responsibility)}: ${esc(o.responsibility)}</small></div>`).join("");

  setText("basics-kicker",c.basicsKicker);
  setText("basics-title",c.basicsTitle);
  setText("basics-intro",c.basicsIntro);
  $("basics-cards").innerHTML=c.basics.map(x=>`<article class="card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");

  setText("roles-kicker",c.rolesKicker);
  setText("roles-title",c.rolesTitle);
  setText("org-roles-title",c.orgRolesTitle);
  setText("repo-roles-title",c.repoRolesTitle);
  $("org-roles").innerHTML=c.orgRoles.map(x=>`<div class="role-item"><span class="role-badge">${x[0]}</span><p>${x[1]}</p></div>`).join("");
  $("repo-roles").innerHTML=c.repoRoles.map(x=>`<div class="role-item"><span class="role-badge">${x[0]}</span><p>${x[1]}</p></div>`).join("");
  setText("ownership-notice",c.ownershipNotice);

  setText("enterprise-kicker",c.enterpriseKicker);
  setText("enterprise-title",c.enterpriseTitle);
  setText("enterprise-copy",c.enterpriseCopy);
  $("enterprise-flow").innerHTML=c.enterpriseSteps.map(x=>`<div class="enterprise-step"><strong>${x[0]}</strong><small>${x[1]}</small></div>`).join("");

  setText("target-kicker",c.targetKicker);
  setText("target-title",c.targetTitle);
  setText("target-copy",c.targetCopy);
  $("target-grid").innerHTML=structure.organizations.map(o=>`
    <article class="target-org ${esc(o.tone)}">
      <div class="org-title"><h3>${esc(o.name)}</h3><span class="pill">${esc(c.responsibility)}: ${esc(o.responsibility)}</span></div>
      <dl>
        <dt>${esc(c.owner)}</dt><dd>${(o.owners||[]).map(esc).join(", ") || "—"}</dd>
        <dt>${esc(c.members)}</dt><dd>${(o.members||[]).map(esc).join(", ") || "—"}</dd>
      </dl>
      <strong>${esc(c.repos)}</strong>
      <div class="repo-list">${(o.repositories||[]).map(r=>`<span>▰ ${esc(r)}</span>`).join("")}</div>
    </article>`).join("");
  setText("target-legend",c.targetLegend);

  setText("repo-kicker",c.repoKicker);
  setText("repo-title",c.repoTitle);
  setText("repo-copy",c.repoCopy);
  $("repo-compare").innerHTML=c.compare.map((x,i)=>`
    <article class="compare-card ${i===0?"recommended":""}"><h3>${x[0]}</h3><p>${x[1]}</p><ul class="compare-list">${x[2].map(v=>`<li>${v}</li>`).join("")}</ul></article>`).join("");

  setText("deploy-kicker",c.deployKicker);
  setText("deploy-title",c.deployTitle);
  setText("deploy-copy",c.deployCopy);
  setText("deploy-notice",c.deployNotice);

  setText("free-kicker",c.freeKicker);
  setText("free-title",c.freeTitle);
  $("free-stats").innerHTML=c.stats.map(x=>`<div class="stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");
  setText("free-note",c.freeNote);

  setText("migration-kicker",c.migrationKicker);
  setText("migration-title",c.migrationTitle);
  $("migration-list").innerHTML=c.migration.map(x=>`<li><strong>${x[0]}</strong><span>${x[1]}</span></li>`).join("");

  setText("faq-kicker",c.faqKicker);
  setText("faq-title",c.faqTitle);
  $("faq-list").innerHTML=c.faq.map(x=>`<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("");

  setText("sources-kicker",c.sourcesKicker);
  setText("sources-title",c.sourcesTitle);
  setText("footer-copy",c.footer);

  setText("editor-kicker",c.editorKicker);
  setText("editor-title",c.editorTitle);
  setText("editor-help",c.editorHelp);
  setText("reset-structure",c.reset);
  setText("export-structure",c.export);
  setText("import-label",c.import);
  setText("save-structure",c.save);
}

$("lang-de").addEventListener("click",()=>{lang="de";localStorage.setItem("github-guide-lang",lang);render();});
$("lang-tr").addEventListener("click",()=>{lang="tr";localStorage.setItem("github-guide-lang",lang);render();});

$("edit-structure").addEventListener("click",()=>{
  $("structure-json").value=JSON.stringify(structure,null,2);
  $("editor-status").textContent="";
  $("editor-dialog").showModal();
});

$("save-structure").addEventListener("click",()=>{
  try{
    const next=JSON.parse($("structure-json").value);
    if(!Array.isArray(next.organizations) || !Array.isArray(next.people)) throw new Error("schema");
    structure=next;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(structure));
    $("editor-status").textContent=copy[lang].saved;
    render();
  }catch{
    $("editor-status").textContent=copy[lang].invalid;
  }
});

$("reset-structure").addEventListener("click",()=>{
  structure=clone(window.GITHUB_GUIDE_DEFAULTS);
  localStorage.removeItem(STORAGE_KEY);
  $("structure-json").value=JSON.stringify(structure,null,2);
  render();
});

$("export-structure").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(structure,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="github-organization-structure.json";a.click();
  URL.revokeObjectURL(url);
});

$("import-structure").addEventListener("change",async(e)=>{
  const file=e.target.files?.[0];
  if(!file) return;
  try{
    const parsed=JSON.parse(await file.text());
    $("structure-json").value=JSON.stringify(parsed,null,2);
    $("editor-status").textContent="";
  }catch{
    $("editor-status").textContent=copy[lang].invalid;
  }
});

render();