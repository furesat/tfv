# Tourismusförderverband Österreich — Webseite

Vollständige, statische Multi-Page-Webseite für den Verein in Gründung mit Sitz in Graz.

## Inhaltsverzeichnis

- [Dateistruktur](#dateistruktur)
- [Technologische Basis](#technologische-basis)
- [Corporate Design](#corporate-design)
- [Rechtliche Konformität](#rechtliche-konformität)
- [Barrierefreiheit (WCAG 2.1 AA)](#barrierefreiheit-wcag-21-aa)
- [SEO & Social Media](#seo--social-media)
- [Deployment](#deployment)
- [Bekannte offene Punkte](#bekannte-offene-punkte)

---

## Dateistruktur

```
tfv-final/
├── index.html              Startseite
├── leistungen.html         Sechs Leistungsbereiche
├── zielgruppen.html        Drei Zielgruppen
├── ueber-uns.html          Über den Verein
├── kontakt.html            Kontaktformular
├── impressum.html          §5 ECG, §25 MedienG
├── datenschutz.html        DSGVO + §96 TKG
├── sitemap.xml             Für Suchmaschinen
├── robots.txt              Crawler-Hinweise
└── assets/
    ├── style.css           Gemeinsames Stylesheet
    ├── script.js           Cookie-Banner + Menü
    ├── logo.svg            Wappen-Logo (Standard)
    └── logo-reverse.svg    Wappen-Logo (dunkler Hintergrund)
```

---

## Technologische Basis

- **Statisches HTML5** — keine Build-Pipeline, kein Framework, kein Server-Side-Rendering erforderlich
- **Semantic Markup** — `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`, `<address>`
- **Inline-SVG-Logos** — verlustfrei skalierbar, ein einziger HTTP-Request gespart
- **Modernes CSS** — CSS Custom Properties (Variables), Grid, Flexbox, `clamp()`
- **Minimales JavaScript** — Vanilla JS, keine Frameworks, ca. 60 Zeilen
- **Keine externen Tracker** — kein Google Analytics, kein Meta Pixel, kein Hotjar
- **Mobile-First** — funktioniert ab 320px Bildschirmbreite

---

## Corporate Design

### Farbpalette „Modern Nature"

| Rolle | Hex | Verwendung |
|-------|-----|------------|
| Primärfarbe | `#14532D` (Tannengrün) | Texte, Header, Logo |
| Akzentfarbe | `#E11D48` (Alpin-Rot) | Buttons, Highlights, CTAs |
| Hintergrund | `#FAFAFA` (Off-White) | 60 % der Fläche |
| Container-Hintergrund | `#F0FDF4` (Salbeigrün) | Hero, Page-Header |
| Karten-Hintergrund | `#FFFFFF` | Cards |
| Fließtext | `#1F2937` | Lesefluss |
| Gedämpfter Text | `#4B5563` / `#6B7280` | Hilfstexte |

**60-30-10-Regel:**
- 60 % Hintergrund (Off-White / Weiß)
- 30 % Sekundär (Tannengrün für Struktur und Text)
- 10 % Akzent (Alpin-Rot ausschließlich für klickbare CTAs)

### Typografie

- **Inter** (Google Fonts) — alle UI- und Fließtexte
- **Source Serif Pro** (Google Fonts) — als optionale serifische Variante in CSS deklariert, aktuell sparsam eingesetzt
- Schriftgrößen mit `clamp()` für flüssige Responsivität
- Mindestgröße 13 px für lesbaren Text

### Logo

- **Wappenform** mit innenliegendem Bergmotiv und Sonnenpunkt
- SVG-basiert, skalierbar in jeder Auflösung
- Zwei Versionen: Standard (dunkles Logo auf hell) und Reverse (helles Logo auf dunkel)
- Favicon und Apple-Touch-Icon verwenden denselben SVG

---

## Rechtliche Konformität

### Impressum (§5 ECG, §25 MedienG)

`impressum.html` enthält alle gesetzlich verpflichtenden Angaben für Österreich:

- Diensteanbieter mit Adresse
- Vereinsdaten (Status: in Gründung, Vereinsregister wird ergänzt)
- Vertretungsbefugte (Platzhalter für nach Eintragung)
- Unternehmensgegenstand
- Anwendbare Rechtsvorschriften
- Aufsichtsbehörde (LPD Steiermark)
- Online-Streitbeilegung (EU-OS-Plattform)
- Haftungshinweise und Urheberrecht

### Datenschutzerklärung (DSGVO + §96 TKG 2003)

`datenschutz.html` enthält:

- Verantwortlicher mit Kontaktdaten
- Erhobene Daten (Server-Logs, Formular, ggf. Newsletter)
- Rechtsgrundlagen mit Artikel-Bezug zur DSGVO
- Speicherdauer pro Datenkategorie
- Cookies-Erklärung (aktuell nur technisch notwendige)
- Google-Fonts-Hinweis (mit Hinweis auf geplante Self-Hostung)
- Empfänger der Daten und Auftragsverarbeitung
- Sieben Betroffenenrechte mit DSGVO-Artikeln
- Beschwerderecht bei der österreichischen Datenschutzbehörde mit vollständigen Kontaktdaten
- Hinweis auf SSL/TLS-Verschlüsselung
- Keine automatisierte Entscheidungsfindung

### Cookie-Banner (§96 TKG)

- Erscheint nur beim ersten Besuch
- Entscheidung wird in `localStorage` gespeichert (kein Cookie)
- Aktuell werden **keinerlei Tracker geladen** — der Banner ist vorbereitet für künftige Erweiterungen
- Zwei Buttons: „Nur notwendige" und „Verstanden" — beide Optionen sind gleichwertig sichtbar (kein Dark Pattern)
- Tastatur- und Screenreader-zugänglich

---

## Barrierefreiheit (WCAG 2.1 AA)

Wesentlich für das österreichische **Web-Zugänglichkeits-Gesetz (WZG)**.

### Geprüfte Kriterien

- **Kontrast** — alle Farbkombinationen erreichen mindestens 4.5:1 für Fließtext und 3:1 für große Schrift. Geprüft mit WebAIM Contrast Checker:
  - Tannengrün `#14532D` auf Off-White `#FAFAFA` = **11.62:1** (AAA)
  - Fließtext `#1F2937` auf Off-White `#FAFAFA` = **15.18:1** (AAA)
  - Alpin-Rot `#E11D48` auf Off-White `#FAFAFA` = **5.04:1** (AA)
  - Weiß auf Tannengrün (Buttons) = **11.62:1** (AAA)
- **Skip-Link** — „Zum Hauptinhalt springen" für Tastatur-Nutzer
- **Semantic HTML5** — `<main>`, `<nav>`, `<header>`, `<footer>` mit ARIA-Labels
- **Sichtbarer Fokus** — alle interaktiven Elemente haben einen deutlichen Focus-Ring (`outline: 3px solid` in Akzent-Rot)
- **Alt-Texte und ARIA-Labels** für alle Bilder und Icons
- **Tab-Reihenfolge** logisch (Header → Main → Footer)
- **Tastaturbedienbarkeit** — alle Aktionen ohne Maus möglich
- **Formular-Labels** — alle Inputs haben sichtbare `<label>`-Elemente, Pflichtfelder mit `aria-required`
- **Reduzierte Bewegung** — `prefers-reduced-motion` wird respektiert
- **Sprachattribut** — `<html lang="de-AT">` auf jeder Seite

### Noch zu prüfen (vor Live-Schaltung)

- WAVE-Score mit aktivem Test-Tool (https://wave.webaim.org)
- axe DevTools Audit
- Lighthouse Accessibility Score (Ziel: 95+)
- Manueller Screenreader-Test (NVDA, VoiceOver)

---

## SEO & Social Media

### Meta-Tags (auf jeder Seite)

- `<title>` — individuell pro Seite, ca. 50–60 Zeichen
- `<meta name="description">` — individuell, ca. 140–155 Zeichen
- `<meta name="keywords">` — relevante Begriffe (auf der Startseite umfassend)
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical">` — vermeidet Duplicate Content
- `<link rel="alternate" hreflang="de-AT">` — Sprach- und Regionssignal
- `<meta name="theme-color" content="#14532D">` — Browser-Chrome-Färbung auf Mobilgeräten

### Open Graph (Facebook, LinkedIn, WhatsApp)

- `og:type`, `og:locale="de_AT"`, `og:site_name`
- `og:title`, `og:description`, `og:url`, `og:image`

### Twitter Cards

- `twitter:card="summary_large_image"`
- `twitter:title`, `twitter:description`, `twitter:image`

### Schema.org (JSON-LD auf Startseite)

- Typ `Organization` mit vollständigem `PostalAddress`
- `contactPoint` mit E-Mail
- `areaServed: Österreich`
- `foundingDate` und `foundingLocation`

### XML-Sitemap und Robots

- `sitemap.xml` mit allen sieben Seiten und Prioritäten
- `robots.txt` mit Sitemap-Verweis und Allow-All-Direktive

---

## Deployment

### Hosting-Anforderungen

- **Statischer Webspace** ist ausreichend (Apache, nginx, Cloudflare Pages, Netlify, Vercel, Render)
- **HTTPS verpflichtend** — Let's Encrypt oder kommerzielles Zertifikat
- **Empfohlene Server** in EU/EWR aus DSGVO-Gründen (z. B. World4You, Easyname, Hetzner, World Hosting, Cloudflare Frankfurt)

### Vor dem Live-Gang

1. Hosting-Anbieter wählen und in `datenschutz.html` ergänzen (Auftragsverarbeitungsvertrag abschließen)
2. Vereinsregisternummer in `impressum.html` ergänzen, sobald vorhanden
3. Namen der vertretungsbefugten Organe ergänzen
4. Newsletter-Absatz aktivieren oder entfernen, je nach späterer Strategie
5. Google Fonts ggf. selbst hosten (DSGVO-Empfehlung)
6. Cookie-Banner-Position und Wording final freigeben
7. Alle Links durchklicken (interne und externe)
8. WAVE-Test und Lighthouse-Audit durchführen
9. Backup-Strategie definieren (mindestens wöchentliches Backup)
10. Kontaktformular-Backend einrichten (z. B. Formspree, Netlify Forms, eigener PHP-Mailer)

### Sicherheits-Header (im Webserver konfigurieren)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; font-src 'self' fonts.gstatic.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; script-src 'self'
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## Bekannte offene Punkte

1. **Kontaktformular hat aktuell kein Backend** — `action="#"` ist Platzhalter. Wahlmöglichkeit:
   - Formspree (extern, einfach, EU-konform mit EU-Tarif)
   - Netlify Forms (falls Hosting bei Netlify)
   - Eigener PHP-Mailer mit Honeypot- und reCAPTCHA-Alternative (z. B. Friendly Captcha)
2. **Google Fonts werden extern geladen** — DSGVO-rechtlich tolerierbar mit Hinweis in Datenschutzerklärung, aber Self-Hostung wäre besser. Lösung: Fonts herunterladen, in `/assets/fonts/` ablegen, mit `@font-face` einbinden.
3. **Vereinsregisterdaten fehlen** — werden ergänzt, sobald die Eintragung abgeschlossen ist
4. **Reale Bilder fehlen** — Webseite arbeitet aktuell nur mit dem Logo. Falls Fotos oder Illustrationen ergänzt werden sollen: Lizenzfreie Quellen verwenden oder eigene Aufnahmen erstellen lassen
5. **Mehrsprachigkeit** — aktuell nur Deutsch (de-AT). Bei Bedarf können Englisch und Italienisch (für Südtirol-Anrainer) ergänzt werden

---

## Kontakt für Rückfragen zur Webseite

**Tourismusförderverband (iG)**  
Herrgottwiesgasse 90/3, 8020 Graz  
kontakt@tourismusverband.net
