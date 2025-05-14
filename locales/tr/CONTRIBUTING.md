[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • <b>Türkçe</b> • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Roo Code'a Katkıda Bulunma

Roo Code, topluluk odaklı bir projedir ve her katkıyı çok önemsiyoruz. Herkes için sorunsuz ve etkili bir süreç sağlamak için **"[Issue-First](#2-temel-ilke-issue-first-yaklaşımı)" yaklaşımıyla çalışıyoruz.** Yani, tüm çalışmalar bir Pull Request gönderilmeden _önce_ bir GitHub Issue'ya bağlı olmalı (ayrıntılar için [PR Politikamıza](#pull-request-pr-politikası) bakabilirsin). Nasıl katkı sağlayacağını anlamak için lütfen bu rehberi dikkatlice oku.
Bu rehber, Roo Code'a nasıl katkı sağlayabileceğini; ister hata düzelt, ister yeni özellik ekle, ister dokümantasyonu geliştir, adım adım açıklar.

## İçindekiler

- [I. Katkıdan Önce](#i-katkıdan-önce)
    - [1. Davranış Kuralları](#1-davranış-kuralları)
    - [2. Proje Yol Haritasını Anlamak](#2-proje-yol-haritasını-anlamak)
        - [Güvenilirlik Öncelikli](#güvenilirlik-öncelikli)
        - [Geliştirilmiş Kullanıcı Deneyimi](#geliştirilmiş-kullanıcı-deneyimi)
        - [Ajan Performansında Liderlik](#ajan-performansında-liderlik)
    - [3. Roo Code Topluluğuna Katıl](#3-roo-code-topluluğuna-katıl)
- [II. Katkı Bulma & Planlama](#ii-katkı-bulma--planlama)
    - [1. Katkı Türleri](#1-katkı-türleri)
    - [2. Temel İlke: Issue-First Yaklaşımı](#2-temel-ilke-issue-first-yaklaşımı)
    - [3. Ne Üzerinde Çalışacağına Karar Verme](#3-ne-üzerinde-çalışacağına-karar-verme)
    - [4. Hata veya Sorun Bildirme](#4-hata-veya-sorun-bildirme)
- [III. Geliştirme & Gönderim Süreci](#iii-geliştirme--gönderim-süreci)
    - [1. Geliştirme Ortamı Kurulumu](#1-geliştirme-ortamı-kurulumu)
    - [2. Kod Yazma Rehberi](#2-kod-yazma-rehberi)
    - [3. Kod Gönderme: Pull Request (PR) Süreci](#3-kod-gönderme-pull-request-pr-süreci)
        - [Taslak Pull Request'ler](#taslak-pull-requestler)
        - [Pull Request Açıklaması](#pull-request-açıklaması)
        - [Pull Request (PR) Politikası](#pull-request-pr-politikası)
            - [Amaç](#amaç)
            - [Issue-First Yaklaşımı](#issue-first-yaklaşımı)
            - [Açık PR'lar için Koşullar](#açık-prlar-için-koşullar)
            - [Prosedür](#prosedür)
            - [Sorumluluklar](#sorumluluklar)
- [IV. Yasal](#iv-yasal)
    - [Katkı Anlaşması](#katkı-anlaşması)

## I. Katkıdan Önce

Öncelikle topluluk standartlarımızı ve projenin yönünü öğren.

### 1. Davranış Kuralları

Tüm katkı sağlayanlar [Davranış Kuralları](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md)'na uymalıdır. Katkıdan önce mutlaka oku.

### 2. Proje Yol Haritasını Anlamak

Roo Code'un önceliklerimizi ve gelecekteki yönümüzü belirleyen net bir geliştirme yol haritası var. Yol haritasını anlamak sana şunları sağlar:

- Katkılarını proje hedefleriyle uyumlu hale getirmek
- Uzmanlığının en değerli olacağı alanları bulmak
- Bazı tasarım kararlarının arka planını anlamak
- Vizyonumuzu destekleyen yeni özellikler için ilham almak

Roo Code'u, yapay zeka destekli kodlama araçlarıyla çalışan geliştiriciler için en iyi seçenek haline getirmeye odaklanıyoruz. İşte bunu nasıl başaracağız:

#### Güvenilirlik Öncelikli

- Diff düzenleme ve komut yürütme işlemlerinin sürekli olarak güvenilir olmasını sağlamak
- Düzenli kullanımı engelleyen sürtünme noktalarını azaltmak
- Tüm dillerde ve platformlarda sorunsuz çalışmayı garanti etmek
- Çok çeşitli yapay zeka sağlayıcıları ve modelleri için güçlü desteği genişletmek

#### Geliştirilmiş Kullanıcı Deneyimi

- Daha fazla netlik ve sezgisellik için kullanıcı arayüzünü basitleştirmek
- Geliştiricilerin günlük kullanım araçları için beklediği yüksek standartları karşılamak üzere iş akışını sürekli iyileştirmek

#### Ajan Performansında Liderlik

- Gerçek dünyadaki üretkenliği ölçmek için kapsamlı değerlendirme kriterleri (evals) oluşturmak
- Herkesin bu değerlendirmeleri kolayca çalıştırıp yorumlamasını sağlamak
- Değerlendirme puanlarında net artışlar gösteren Roo Code iyileştirmeleri sunmak

Yol haritası hedeflerimizi ilerleten katkılar özellikle memnuniyetle karşılanır. Bu sütunlarla uyumlu bir şey üzerinde çalışıyorsan, lütfen PR açıklamanda belirt.

### 3. Roo Code Topluluğuna Katıl

Roo Code topluluğuyla bağlantı kurmak başlamak için harika bir yoldur:

- **Ana yöntem**:
    1.  [Roo Code Discord topluluğuna](https://discord.gg/roocode) katıl.
    2.  Katıldıktan sonra **Hannes Rudolph**'a (Discord: `hrudolph`) DM gönder, ilgini belirt ve rehberlik al.
- **Deneyimli katkı sağlayanlar için alternatif**: Issue-First yaklaşımına alışkınsan, doğrudan GitHub üzerinden [Kanban panosunu](https://github.com/orgs/RooVetGit/projects/1) takip ederek ve issue ile pull request'lerle iletişim kurarak katılabilirsin.

## II. Katkı Bulma & Planlama

Ne üzerinde çalışmak istediğini ve nasıl yaklaşacağını belirle.

### 1. Katkı Türleri

Çeşitli katkı türlerini memnuniyetle karşılıyoruz:

- **Hata düzeltmeleri**: Mevcut kodda sorunları çözmek
- **Yeni özellikler**: Yeni işlevsellik eklemek
- **Dokümantasyon**: Rehberleri geliştirmek, örnekler eklemek veya yazım hatalarını düzeltmek

### 2. Temel İlke: Issue-First Yaklaşımı

**Tüm katkılar bir GitHub Issue ile başlamalıdır.** Bu, uyumu sağlamak ve boşa emek harcamamak için kritik bir adımdır.

- **Issue bul veya oluştur**:
    - Başlamadan önce, [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues)'da katkı yapmak istediğin konu için bir issue olup olmadığını kontrol et.
    - Varsa ve atanmamışsa, almak istediğini belirten bir yorum bırak. Bir maintainer sana atayacaktır.
    - Yoksa, [issue sayfamızda](https://github.com/RooVetGit/Roo-Code/issues/new/choose) uygun şablonu kullanarak yeni bir tane oluştur:
        - Hatalar için "Bug Report" şablonu
        - Yeni özellikler için "Detailed Feature Proposal" şablonu. Uygulamaya başlamadan önce bir maintainer'ın (özellikle @hannesrudolph) onayını bekle.
        - **Not**: Özellikler için genel fikirler veya ilk tartışmalar [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests)'da başlatılabilir. Fikir netleşince "Detailed Feature Proposal" issue'su oluşturulmalı.
- **Sahiplenme ve atama**:
    - Bir issue üzerinde çalışmak istediğini açıkça belirten bir yorum bırak.
    - Bir maintainer'ın GitHub'da resmi olarak atamasını bekle. Böylece aynı konuda birden fazla kişi çalışmaz.
- **Uymamanın sonuçları**:
    - İlgili, önceden onaylanmış ve atanmış bir issue olmadan gönderilen Pull Request'ler (PR'ler) tam inceleme yapılmadan kapatılabilir. Bu politika, katkıların proje öncelikleriyle uyumlu olmasını ve herkesin zamanına saygı gösterilmesini sağlamak içindir.

Bu yaklaşım, çalışmaları takip etmemize, değişikliklerin istenip istenmediğini garanti etmemize ve çabaları etkili şekilde koordine etmemize yardımcı olur.

### 3. Ne Üzerinde Çalışacağına Karar Verme

- **Good First Issues**: GitHub'daki [Roo Code Issues Projesi](https://github.com/orgs/RooVetGit/projects/1)'nin "Issue [Unassigned]" bölümüne bak.
- **Dokümantasyon**: Bu `CONTRIBUTING.md` kod katkısı için ana rehberdir, ancak başka dokümantasyonlara (kullanıcı rehberleri veya API dokümanları gibi) katkı sağlamak istiyorsan [Roo Code Docs deposuna](https://github.com/RooVetGit/Roo-Code-Docs) bak veya Discord topluluğunda sor.
- **Yeni özellikler önermek**:
    1.  **İlk fikir/tartışma**: Genel veya ilk özellik fikirleri için [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests)'da tartışma başlat.
    2.  **Resmi öneri**: Spesifik, uygulanabilir öneriler için [issue sayfamızda](https://github.com/RooVetGit/Roo-Code/issues/new/choose) "Detailed Feature Proposal" şablonunu kullanarak issue oluştur. Bu, **Issue-First Yaklaşımı**'nın anahtarıdır.

### 4. Hata veya Sorun Bildirme

Bir hata bulursan:

1.  **Mevcut issue'ları ara**: [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues)'da daha önce bildirilip bildirilmediğine bak.
2.  **Yeni bir issue oluştur**: Eğer benzersizse, [issue sayfamızda](https://github.com/RooVetGit/Roo-Code/issues/new/choose) "Bug Report" şablonunu kullan.

> 🔐 **Güvenlik açıkları**: Bir güvenlik açığı bulursan, [GitHub Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new) ile özel olarak bildir. Güvenlik açıkları için herkese açık issue oluşturma.

## III. Geliştirme & Gönderim Süreci

Kod yazarken ve gönderirken bu adımları takip et.

### 1. Geliştirme Ortamı Kurulumu

1.  **Fork & Clone**:
    - GitHub'da depoyu forkla.
    - Forkunu yerel olarak klonla: `git clone https://github.com/KULLANICI_ADIN/Roo-Code.git`
2.  **Bağımlılıkları yükle**: `npm run install:all`
3.  **Webview (Geliştirici Modu) çalıştır**: `npm run dev` (Vite/React uygulaması için HMR ile)
4.  **Eklentiyi debug et**: VS Code'da `F5` tuşuna bas (veya **Run** → **Start Debugging**) ve Roo Code yüklü yeni bir Extension Development Host penceresi aç.

Webview (`webview-ui`) değişiklikleri Hot Module Replacement sayesinde anında görünür. Ana eklenti (`src`) değişiklikleri için Extension Development Host'u yeniden başlatmak gerekir.

Alternatif olarak, `.vsix` paketi oluşturup yüklemek için:

```sh
npm run build
code --install-extension bin/paypal-roocode-enhance-<versiyon>.vsix
```

(`<versiyon>` kısmını oluşturulan dosyanın gerçek sürüm numarasıyla değiştir.)

### 2. Kod Yazma Rehberi

- **Odaklı PR'lar**: Her PR için bir özellik/düzeltme.
- **Kod kalitesi**:
    - CI kontrollerini (lint, format) geç
    - ESLint uyarılarını veya hatalarını düzelt (`npm run lint`)
    - Otomatik kod inceleme araçlarından gelen geri bildirimlere yanıt ver
    - TypeScript en iyi uygulamalarını takip et ve tip güvenliğini koru
- **Testler**:
    - Yeni özellikler için test ekle
    - `npm test` çalıştırarak tüm testlerin geçtiğinden emin ol
    - Değişikliklerin mevcut testleri etkiliyorsa onları güncelle
- **Commit mesajları**:
    - Açık ve açıklayıcı commit mesajları yaz
    - İlgili issue'lara `#issue-numarası` ile referans ver (ör: `Fixes #123`)
- **PR göndermeden önce kontrol listesi**:
    - Branch'ini upstream'deki en son `main` ile rebase et
    - Kodun derlendiğinden emin ol (`npm run build`)
    - Tüm testlerin geçtiğinden emin ol (`npm test`)
    - Herhangi bir debug kodu veya `console.log` satırını kaldır

### 3. Kod Gönderme: Pull Request (PR) Süreci

#### Taslak Pull Request'ler

Henüz tam incelemeye hazır olmayan işler için taslak PR'lar kullan:

- Otomatik kontrolleri (CI) çalıştırmak
- Maintainer'lardan veya diğer katkı sağlayanlardan erken geri bildirim almak
- Çalışmanın devam ettiğini göstermek

Tüm kontroller geçtikten ve "Kod Yazma Rehberi" ile "Pull Request Açıklaması" kriterlerini karşıladığını düşündüğünde PR'ı "Ready for Review" olarak işaretle.

#### Pull Request Açıklaması

PR açıklaman tam olmalı ve [Pull Request Şablonumuzun](.github/pull_request_template.md) yapısına uymalı. Temel noktalar:

- İlgili, onaylanmış GitHub Issue'ya bağlantı
- Yapılan değişikliklerin ve amacının açık açıklaması
- Değişiklikleri test etmek için ayrıntılı adımlar
- Herhangi bir breaking change listesi
- **UI değişiklikleri için, önce/sonra ekran görüntüleri veya videolar**
- **PR'ın kullanıcı dokümantasyonunu güncellemeyi gerektirip gerektirmediğini ve hangi belgelerin/alanların etkilendiğini belirt**

#### Pull Request (PR) Politikası

##### Amaç

Temiz, odaklı ve yönetilebilir bir PR backlog'u tutmak.

##### Issue-First Yaklaşımı

- **Zorunlu**: Çalışmaya başlamadan önce mevcut, onaylanmış ve atanmış bir GitHub Issue ("Bug Report" veya "Detailed Feature Proposal") olmalı.
- **Onay**: Özellikle büyük değişiklikler için, issue'lar maintainer'lar (özellikle @hannesrudolph) tarafından _kodlamaya başlamadan önce_ onaylanmalı.
- **Referans**: PR'lar bu önceden onaylanmış issue'lara açıklamalarında açıkça referans vermeli.
- **Sonuçlar**: Bu sürece uyulmazsa PR tam inceleme yapılmadan kapatılabilir.

##### Açık PR'lar için Koşullar

- **Birleştirmeye hazır**: Tüm CI testlerinden geçer, yol haritasıyla uyumlu (varsa), onaylanmış ve atanmış issue'ya bağlı, açık dokümantasyon/yorumlar, UI değişiklikleri için önce/sonra görseller/video içerir
- **Kapatılacaklar**: CI test hataları, büyük birleştirme çatışmaları, proje hedefleriyle uyumsuzluk veya uzun süreli (30+ gün) güncellenmeyen PR'lar

##### Prosedür

1.  **Issue nitelendirme & atama**: @hannesrudolph (veya diğer maintainer'lar) yeni ve mevcut issue'ları gözden geçirip atar.
2.  **İlk PR triage'ı (günlük)**: Maintainer'lar yeni PR'ları hızlıca kontrol eder, acil veya kritik konuları ayıklar.
3.  **Ayrıntılı PR incelemesi (haftalık)**: Maintainer'lar PR'ları hazırlık, onaylanmış issue ile uyum ve genel kalite açısından ayrıntılı inceler.
4.  **Ayrıntılı geri bildirim & yineleme**: İnceleme sonucunda geri bildirim (Onayla, Değişiklik İste, Reddet) verilir. Katkı sağlayanlardan yanıt ve gerekirse düzeltme beklenir.
5.  **Karar aşaması**: Onaylanan PR'lar birleştirilir. Çözülemeyen sorunlu veya uyumsuz PR'lar gerekçesiyle kapatılır.
6.  **Takip**: Kapatılan PR sahipleri, sorunlar çözülür veya proje yönü değişirse yeni PR açabilir.

##### Sorumluluklar

- **Issue nitelendirme & süreç takibi (@hannesrudolph & maintainer'lar)**: Tüm katkıların Issue-First yaklaşımına uymasını sağlamak. Katkı sağlayanlara rehberlik etmek.
- **Maintainer'lar (Geliştirici Takımı)**: PR'ları incelemek, teknik geri bildirim vermek, onay/ret kararı almak, PR'ları birleştirmek.
- **Katkı sağlayanlar**: PR'ları onaylanmış ve atanmış issue'ya bağlamak, kalite rehberlerine uymak, geri bildirime hızlıca yanıt vermek.

Bu politika, netlik ve verimli entegrasyon sağlar.

## IV. Yasal

### Katkı Anlaşması

Bir pull request göndererek, katkılarının [Apache 2.0 Lisansı](LICENSE) (veya projenin mevcut lisansı) kapsamında olacağını kabul etmiş olursun; tıpkı projenin kendisi gibi.
