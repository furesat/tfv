# GitHub Organisationssystem Guide

Interaktive, zweisprachige Lernseite (Deutsch / Türkisch) für die geplante GitHub-Struktur von **Agentur, TFV und Fures**.

## Inhalt

- Was ist eine GitHub Organization?
- Unterschied persönliches Konto / Organization / Repository
- Organization-Rollen und Repository-Rollen
- Technische GitHub-Rechte vs. rechtliche Eigentümerschaft
- Wie größere Unternehmen GitHub strukturieren
- Zielstruktur Agentur / TFV / Fures
- Monorepo vs. mehrere Repositories
- Netlify-Deployment bei mehreren Websites in einem Repository
- GitHub Free und Actions-Kontingent
- Migrationsplan
- FAQ und offizielle GitHub-Quellen

## Struktur bearbeiten

Auf der Website oben **„Struktur bearbeiten / Yapıyı düzenle“** wählen.

Die aktuelle Organization-Struktur kann als JSON angepasst werden. Änderungen:
- werden sofort visualisiert,
- bleiben per localStorage im Browser erhalten,
- können als JSON exportiert oder importiert werden.

Die Standardstruktur liegt in `data.js` und kann dort dauerhaft geändert werden.

## Netlify

Die Seite ist komplett statisch und braucht keinen Build.

Wenn dieses Repository in Netlify verbunden wird:

- **Base directory:** `github-system`
- **Build command:** leer lassen
- **Publish directory:** `.`

Alternativ kann der Ordner separat in ein eigenes Repository verschoben werden.

## Aktuelle Default-Struktur

- **Agentur:** Verantwortung / Owner Andreas
- **TFV:** Verantwortung / Owner Andreas, Furkan als technische Mitarbeit
- **Fures:** Furkan + Gülben

Hinweis: GitHub-Rollen bilden technische Zugriffsrechte ab. Rechtliche Eigentumsverhältnisse an Unternehmen, Vereinen, Marken oder IP werden dadurch nicht automatisch festgelegt.

## Quellen

Die Website verlinkt direkt auf die offizielle GitHub-Dokumentation zu Organizations, Rollen, Enterprise-Best-Practices und GitHub Actions Billing.
