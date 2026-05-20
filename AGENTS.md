# AGENTS Guide – TFV Multi-Concept Websites

Bu doküman, bu repo üzerinde çalışacak bir sonraki yapay zekâ/geliştirici için kapsamlı operasyon kılavuzudur.

## 1) Proje Özeti
- Repo, müşteri sunumu için hazırlanmış **6 farklı web konsepti** içerir.
- Dizin yapısı konsept bazlıdır: `1/`, `2/`, `3/`, `4/`, `5/`, `6/`.
- Kök dizindeki `index.html`, tüm konseptlere giden **landing page**’dir.
- `sitemap.xml`, landing page + konsept giriş sayfalarını listeler.

## 2) Kritik Operasyon Notları
- Tüm linkler **göreli (relative)** kalmalıdır.
- Özellikle `2/` ve `6/` konseptlerinde görseller kök klasörde tutulur; `assets/...` yerine doğrudan dosya adı kullanılır (örn. `logo.png`, `hotel-system.png`).
- Netlify/benzeri ortamlarda kırık görselin en yaygın sebebi yanlış göreli path’tir.
- Görsel kırığı debug sırası:
  1. HTML/CSS içinde `src` / `href` / `background-image` yollarını kontrol et.
  2. Dosya gerçekten aynı klasörde mi kontrol et.
  3. Büyük-küçük harf (case-sensitive) uyumu kontrol et.
  4. Deploy sonrası network panelde 404 path’lerini doğrula.

## 3) Konsept Bazlı Mimari Özeti

### Konsept 1 (`1/`)
- Çok sayfalı kurumsal yapı.
- Yardımcı sayfalar: `leistungen.html`, `digitalisierung.html`, `kontakt.html`, `ueber-uns.html`.
- Stil ve görseller: `1/assets/`.

### Konsept 2 (`2/`)
- Tek sayfa, editoryal premium yaklaşım.
- Ana dosya: `2/index.html`.
- Görseller: `2/logo.png`, `2/alpfotos.png`, `2/alp2.png`.
- **Not:** Bu klasörde `assets/` yoktur; path’ler doğrudan dosya adına gitmelidir.

### Konsept 3 (`3/`)
- Minimal tek sayfa yaklaşımı.
- Ana dosya: `3/index.html`.

### Konsept 4 (`4/`)
- Çok sayfalı ve içerik bölümlü kurgu.
- Sayfalar: `index.html`, `leistungen.html`, `digitalisierung.html`, `modell.html`, `kontakt.html`.
- Stil/görseller: `4/assets/`.

### Konsept 5 (`5/`)
- Hizmet ve sistem anlatımı güçlü, çok sayfalı yapı.
- Sayfalar: `index.html`, `services.html`, `systeme.html`, `hub.html`, `kontakt.html`.
- Stil/görseller: `5/assets/`.

### Konsept 6 (`6/`)
- Koyu temalı, teknoloji odaklı tek sayfa.
- Ana dosya: `6/index.html`.
- Görseller: `6/logo.png`, `6/devices.png`, `6/hotel-system.png`, `6/people.png`.
- **Not:** Bu klasörde de `assets/` yoktur; doğrudan dosya adı path’i kullanılmalıdır.

## 4) Landing Page ve SEO İlkeleri
- Landing page dili müşteri isteğine göre güncel tutulmalı (örn. Almanca).
- Temel SEO:
  - `title`
  - `meta description`
  - `canonical`
  - OpenGraph (`og:*`)
  - Twitter Card (`twitter:*`)
  - doğru `lang` ve `og:locale`
  - mümkünse JSON-LD (`CollectionPage` + konsept linkleri)
- Landing card açıklamaları müşteri seçim sürecini kolaylaştıracak kadar net olmalı.

## 5) Sitemap Politikası
- Her görev sonunda `sitemap.xml` kontrol edilir.
- Yeni bir sayfa üretildiyse sitemap’e eklenir.
- Yeni sayfa yoksa sitemap değişmeden bırakılır (gereksiz churn yapma).

## 6) Görev Sonu Checklist (Zorunlu)
1. Linkler/görseller kırık mı?
2. Yeni sayfa varsa `sitemap.xml` güncellendi mi?
3. SEO metaları (title/description/canonical/OG/Twitter/JSON-LD) uygun mu?
4. `AGENTS.md` bu görev öğrenimleriyle güncellendi mi?
5. `git diff` ile sadece amaçlı değişiklikler kaldı mı?

## 7) Hızlı Komutlar
- Durum: `git status --short`
- Fark: `git diff -- <dosya>`
- Kırık path arama: `rg -n "assets/|src=|background-image" <dosya>`
- Commit: `git add -A && git commit -m "..."`

## 8) Mobile Header / Navigation Rehberi (Yeni Öğrenimler)
- Konsept 4 ve 5’te mobil header karışıklığını önlemek için nav alanı dar ekranda **yüksekliği sabit olmayan (auto)** yapıda tutulmalı.
- 1060px–860px aralığında menü satırı ikinci satıra düşebilir; bu durumda:
  - Menü kapsayıcısı (`.navlinks` / `.links`) yatay kaydırılabilir olmalı (`overflow:auto`).
  - Linklerin üst-alt padding’i mobilde küçültülmeli (ör. `10px 0`), masaüstündeki büyük padding korunmamalı.
- 560px altı için:
  - Brand işareti (`.mark`) ve telefon butonu (`.phone`) küçültülmeli.
  - Linkler arası boşluk azaltılmalı (ör. `gap: 14px`).
  - Gerekirse header fixed/sticky davranışı sadeleştirilmeli (özellikle konsept 4’te `position: static`, konsept 5’te üstte sticky).
- Mobile-first prensibi: önce küçük ekranda okunabilirlik ve taşmama garanti edilmeli, sonra geniş ekran geliştirmeleri eklenmeli.
