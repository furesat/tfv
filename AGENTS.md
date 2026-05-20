# AGENTS Guide – TFV Multi-Concept Websites

Bu doküman, bu repo üzerinde çalışacak bir sonraki yapay zekâ/gelistirici için operasyonel kılavuzdur.

## 1) Proje Özeti
- Bu repo içinde müşteri sunumu için hazırlanmış **6 farklı web sitesi konsepti** vardır.
- Klasör yapısı konsept bazlıdır:
  - `1/` ... `6/` her biri ayrı konsepti temsil eder.
- Kök dizinde (`/workspace/tfv`) müşterinin tüm konseptleri tek yerden görüp seçebilmesi için bir **landing page** bulunur: `index.html`.

## 2) Mimari ve Navigasyon
- Landing page: `index.html`
  - Konsept kartlarını listeler.
  - Her kart ilgili konseptin giriş sayfasına gider (`./{n}/index.html`).
- SEO yardımcı dosyası: `sitemap.xml`
  - Landing page ve 6 konsept ana sayfası listelenmiştir.

## 3) İçerik Düzeni
- Konseptlerin bazıları çok sayfalıdır (örn. `1/`, `4/`, `5/`), bazıları tek sayfa yaklaşımına daha yakındır (örn. `2/`, `3/`, `6/`).
- Stil dosyaları konsept klasörlerinde `assets/style.css` şeklinde olabilir.

## 4) Geliştirme Prensipleri
- Landing page üzerinde değişiklik yapılırken:
  - Tüm linkler göreli ve çalışır kalmalı.
  - Mobil uyum korunmalı.
  - Kart içerikleri müşteri seçimini kolaylaştıracak şekilde net olmalı.
- SEO iyileştirmelerinde:
  - `title`, `description`, `canonical`, OpenGraph ve Twitter meta etiketleri düşünülmeli.
  - Yapılandırılmış veri (JSON-LD) mümkünse eklenmeli.
  - Yeni sayfa eklendiyse `sitemap.xml` güncellenmeli.

## 5) Görev Sonu Checklist
Her görev sonunda minimum şu kontrolleri yap:
1. Linkler kırık mı?
2. Yeni sayfa varsa `sitemap.xml` güncellendi mi?
3. SEO temel metaları mevcut mu?
4. Bu `AGENTS.md` güncel mi?

## 6) Hızlı Komutlar
- Değişiklikleri gör: `git status --short`
- Farkı incele: `git diff -- <dosya>`
- Commit: `git add -A && git commit -m "..."`

