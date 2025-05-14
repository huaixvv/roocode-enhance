[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • <b>Deutsch</b> • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Beitrag zu Roo Code

Roo Code ist ein Community-getriebenes Projekt und wir schätzen jeden Beitrag sehr. Damit alles reibungslos läuft, **arbeiten wir nach dem Prinzip "[Issue-First](#2-wichtiges-prinzip-issue-first-ansatz)".** Das heißt: Jede Arbeit muss mit einem GitHub-Issue verknüpft sein, _bevor_ ein Pull Request eingereicht wird (siehe unsere [PR-Richtlinie](#pull-request-pr-richtlinie) für Details). Lies diesen Leitfaden aufmerksam, um zu verstehen, wie du beitragen kannst.
Dieser Leitfaden erklärt, wie du zu Roo Code beitragen kannst – egal ob du Bugs behebst, Features hinzufügst oder die Doku verbesserst.

## Inhaltsverzeichnis

- [I. Bevor du beiträgst](#i-bevor-du-beiträgst)
    - [1. Verhaltenskodex](#1-verhaltenskodex)
    - [2. Projekt-Roadmap verstehen](#2-projekt-roadmap-verstehen)
        - [Zuverlässigkeit an erster Stelle](#zuverlässigkeit-an-erster-stelle)
        - [Verbesserte Benutzererfahrung](#verbesserte-benutzererfahrung)
        - [Führend bei der Agentenleistung](#führend-bei-der-agentenleistung)
    - [3. Werde Teil der Roo Code Community](#3-werde-teil-der-roo-code-community)
- [II. Beitrag finden & planen](#ii-beitrag-finden--planen)
    - [1. Beitragsarten](#1-beitragsarten)
    - [2. Wichtiges Prinzip: Issue-First-Ansatz](#2-wichtiges-prinzip-issue-first-ansatz)
    - [3. Was soll ich machen?](#3-was-soll-ich-machen)
    - [4. Bugs oder Probleme melden](#4-bugs-oder-probleme-melden)
- [III. Entwicklung & Einreichung](#iii-entwicklung--einreichung)
    - [1. Entwicklungs-Setup](#1-entwicklungs-setup)
    - [2. Code-Richtlinien](#2-code-richtlinien)
    - [3. Code einreichen: Pull Request (PR) Prozess](#3-code-einreichen-pull-request-pr-prozess)
        - [Entwurf-Pull-Requests](#entwurf-pull-requests)
        - [Pull Request Beschreibung](#pull-request-beschreibung)
        - [Pull Request (PR) Richtlinie](#pull-request-pr-richtlinie)
            - [Ziel](#ziel)
            - [Issue-First-Ansatz](#issue-first-ansatz)
            - [Bedingungen für offene PRs](#bedingungen-für-offene-prs)
            - [Ablauf](#ablauf)
            - [Verantwortlichkeiten](#verantwortlichkeiten)
- [IV. Rechtliches](#iv-rechtliches)
    - [Beitragsvereinbarung](#beitragsvereinbarung)

## I. Bevor du beiträgst

Mach dich zuerst mit unseren Community-Standards und der Projekt-Richtung vertraut.

### 1. Verhaltenskodex

Alle Mitwirkenden müssen sich an unseren [Verhaltenskodex](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md) halten. Bitte lies ihn, bevor du beiträgst.

### 2. Projekt-Roadmap verstehen

Roo Code hat eine klare Entwicklungs-Roadmap, die unsere Prioritäten und die Zukunft vorgibt. Wenn du die Roadmap kennst, kannst du:

- Deine Beiträge an den Projektzielen ausrichten
- Bereiche finden, in denen deine Skills besonders wertvoll sind
- Den Kontext hinter bestimmten Design-Entscheidungen verstehen
- Inspiration für neue Features bekommen, die unsere Vision unterstützen

Wir konzentrieren uns darauf, Roo Code zur ersten Wahl für Entwickler zu machen, die mit KI-gestützten Coding-Tools arbeiten. So werden wir das erreichen:

#### Zuverlässigkeit an erster Stelle

- Sicherstellen, dass Diff-Bearbeitung und Befehlsausführung durchgängig zuverlässig sind.
- Reibungspunkte reduzieren, die von der regelmäßigen Nutzung abhalten.
- Reibungslosen Betrieb in allen Sprachen und auf allen Plattformen garantieren.
- Robuste Unterstützung für eine Vielzahl von KI-Anbietern und -Modellen ausbauen.

#### Verbesserte Benutzererfahrung

- Die Benutzeroberfläche für mehr Klarheit und Intuitivität optimieren.
- Den Workflow kontinuierlich verbessern, um den hohen Erwartungen gerecht zu werden, die Entwickler an täglich genutzte Tools stellen.

#### Führend bei der Agentenleistung

- Umfassende Evaluierungsmaßstäbe (Evals) etablieren, um die Produktivität in der realen Welt zu messen.
- Es für jeden einfach machen, diese Evals durchzuführen und zu interpretieren.
- Verbesserungen für Roo Code liefern, die klare Steigerungen der Eval-Ergebnisse zeigen.

Beiträge, die unsere Roadmap-Ziele voranbringen, sind besonders willkommen. Wenn du an etwas arbeitest, das zu diesen Säulen passt, erwähne das bitte in deiner PR-Beschreibung.

### 3. Werde Teil der Roo Code Community

Mit der Roo Code Community in Kontakt zu kommen, ist ein super Start:

- **Hauptweg**:
    1.  Tritt der [Roo Code Discord Community](https://discord.gg/roocode) bei.
    2.  Schreib dann eine Direktnachricht (DM) an **Hannes Rudolph** (Discord: `hrudolph`), um dein Interesse zu besprechen und Tipps zu bekommen.
- **Alternative für Erfahrene**: Wenn du mit dem Issue-First-Ansatz vertraut bist, kannst du direkt über GitHub mitmachen, indem du das [Kanban-Board](https://github.com/orgs/RooVetGit/projects/1) nutzt und über Issues und Pull Requests kommunizierst.

## II. Beitrag finden & planen

Finde heraus, woran du arbeiten willst und wie du es angehst.

### 1. Beitragsarten

Wir freuen uns über viele Arten von Beiträgen:

- **Bugfixes**: Fehler im Code beheben
- **Neue Features**: Neue Funktionen hinzufügen
- **Dokumentation**: Guides verbessern, Beispiele ergänzen oder Tippfehler korrigieren

### 2. Wichtiges Prinzip: Issue-First-Ansatz

**Jeder Beitrag muss mit einem GitHub-Issue starten.** Das ist wichtig, damit alles abgestimmt läuft und keine Arbeit umsonst ist.

- **Issue finden oder erstellen**:
    - Bevor du loslegst, schau bei den [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues), ob es schon ein Issue für deinen Beitrag gibt.
    - Wenn ja und es ist nicht zugewiesen, kommentiere, dass du es übernehmen willst. Ein Maintainer weist es dir dann zu.
    - Wenn es noch kein Issue gibt, erstelle eins mit der passenden Vorlage auf unserer [Issues-Seite](https://github.com/RooVetGit/Roo-Code/issues/new/choose):
        - Für Bugs: "Bug Report"-Vorlage
        - Für neue Features: "Detailed Feature Proposal"-Vorlage. Warte auf die Freigabe eines Maintainers (vor allem @hannesrudolph), bevor du loslegst.
        - **Hinweis**: Allgemeine Ideen oder erste Diskussionen zu Features können in [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests) starten. Wenn die Idee konkreter wird, sollte ein "Detailed Feature Proposal"-Issue erstellt werden.
- **Claiming und Zuweisung**:
    - Sag klar, dass du an einem Issue arbeiten willst, indem du es kommentierst.
    - Warte, bis ein Maintainer das Issue offiziell in GitHub zuweist. So arbeiten nicht mehrere an derselben Sache.
- **Wenn du das nicht beachtest**:
    - Pull Requests (PRs) ohne zugehöriges, vorab genehmigtes und zugewiesenes Issue können ohne vollständige Prüfung geschlossen werden. Das ist wichtig, damit Beiträge zu den Projektzielen passen und die Zeit aller respektiert wird.

So behalten wir den Überblick, stellen sicher, dass Änderungen gewünscht sind, und koordinieren die Arbeit effektiv.

### 3. Was soll ich machen?

- **Good First Issues**: Schau im Bereich "Issue [Unassigned]" auf unserem [Roo Code Issues](https://github.com/orgs/RooVetGit/projects/1) GitHub-Projekt.
- **Dokumentation**: Während dieses `CONTRIBUTING.md` der Hauptleitfaden für Code-Beiträge ist, findest du weitere Doku (wie User-Guides oder API-Doku) im [Roo Code Docs Repository](https://github.com/RooVetGit/Roo-Code-Docs) oder frag in der Discord-Community nach.
- **Neue Features vorschlagen**:
    1.  **Erste Idee/Diskussion**: Für grobe oder neue Feature-Ideen starte eine Diskussion in [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Formaler Vorschlag**: Für konkrete, umsetzbare Feature-Vorschläge nutze die "Detailed Feature Proposal"-Vorlage auf unserer [Issues-Seite](https://github.com/RooVetGit/Roo-Code/issues/new/choose). Das ist ein wichtiger Teil unseres **Issue-First-Ansatzes**.

### 4. Bugs oder Probleme melden

Wenn du einen Bug findest:

1.  **Nach bestehenden Issues suchen**: Schau bei den [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) nach, ob es schon gemeldet wurde.
2.  **Neues Issue erstellen**: Wenn nicht, nutze die "Bug Report"-Vorlage auf unserer [Issues-Seite](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Sicherheitslücken**: Wenn du eine Sicherheitslücke findest, melde sie bitte privat über [GitHubs Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new). Erstelle kein öffentliches Issue für Sicherheitslücken.

## III. Entwicklung & Einreichung

Folge diesen Schritten beim Coden und Einreichen deiner Arbeit.

### 1. Entwicklungs-Setup

1.  **Fork & Clone**:
    - Forke das Repository auf GitHub.
    - Klone deinen Fork lokal: `git clone https://github.com/DEIN_USERNAME/Roo-Code.git`
2.  **Abhängigkeiten installieren**: `npm run install:all`
3.  **Webview (Dev Mode) starten**: `npm run dev` (für Vite/React-App mit HMR)
4.  **Extension debuggen**: Drücke `F5` in VS Code (oder **Run** → **Start Debugging**), um ein neues Extension Development Host-Fenster mit Roo Code zu öffnen.

Webview-Änderungen (in `webview-ui`) erscheinen sofort dank Hot Module Replacement. Änderungen an der Core-Extension (in `src`) erfordern einen Neustart des Extension Development Host.

Alternativ kannst du ein `.vsix`-Paket bauen und installieren:

```sh
npm run build
code --install-extension bin/paypal-roocode-enhance<version>.vsix
```

(Ersetze `<version>` durch die tatsächliche Versionsnummer aus dem Build.)

### 2. Code-Richtlinien

- **Fokussierte PRs**: Ein Feature/Bugfix pro PR.
- **Code-Qualität**:
    - CI-Checks bestehen (Linting, Formatierung)
    - ESLint-Warnungen oder Fehler beheben (`npm run lint`)
    - Auf Feedback von automatisierten Code-Review-Tools reagieren
    - TypeScript Best Practices einhalten und Typensicherheit wahren
- **Tests**:
    - Tests für neue Features hinzufügen
    - `npm test` ausführen, damit alle Tests bestehen
    - Bestehende Tests anpassen, falls nötig
- **Commit-Messages**:
    - Klare, beschreibende Commit-Messages schreiben
    - Relevante Issues mit `#issue-number` referenzieren (z.B. `Fixes #123`)
- **Vor dem PR-Absenden**:
    - Branch auf den neuesten `main` vom Upstream rebasen
    - Sicherstellen, dass der Code baut (`npm run build`)
    - Alle Tests müssen bestehen (`npm test`)
    - Debug-Code oder `console.log`-Statements entfernen

### 3. Code einreichen: Pull Request (PR) Prozess

#### Entwurf-Pull-Requests

Nutze Entwurf-PRs für Arbeit, die noch nicht bereit für ein vollständiges Review ist, aber für die du:

- Automatisierte Checks (CI) laufen lassen willst
- Frühes Feedback von Maintainer:innen oder anderen Contributor:innen möchtest
- Zeigen willst, dass die Arbeit in Arbeit ist

Markiere einen PR erst als "Ready for Review", wenn alle Checks bestehen und du glaubst, dass er die Kriterien aus "Code-Richtlinien" und "Pull Request Beschreibung" erfüllt.

#### Pull Request Beschreibung

Deine PR-Beschreibung muss umfassend sein und der Struktur unserer [Pull Request Template](.github/pull_request_template.md) folgen. Wichtige Punkte:

- Link zum genehmigten GitHub-Issue, das bearbeitet wird
- Klare Beschreibung der Änderungen und deren Zweck
- Detaillierte Testschritte
- Liste aller Breaking Changes
- **Für UI-Änderungen: Vorher-Nachher-Screenshots oder Videos**
- **Wichtig: Gib an, ob deine PR Änderungen an User-Doku erfordert und welche Dokumente betroffen sind**

#### Pull Request (PR) Richtlinie

##### Ziel

Einen sauberen, fokussierten und handhabbaren PR-Backlog erhalten.

##### Issue-First-Ansatz

- **Pflicht**: Vor Arbeitsbeginn muss ein genehmigtes und zugewiesenes GitHub-Issue existieren (entweder "Bug Report" oder "Detailed Feature Proposal").
- **Freigabe**: Issues, vor allem für größere Änderungen, müssen von Maintainer:innen (insbesondere @hannesrudolph) _vor_ dem Coden freigegeben werden.
- **Referenz**: PRs müssen diese Issues explizit in der Beschreibung referenzieren.
- **Folgen**: Wird das nicht beachtet, kann der PR ohne vollständige Prüfung geschlossen werden.

##### Bedingungen für offene PRs

- **Merge-bereit**: Besteht alle CI-Tests, passt zur Roadmap (falls relevant), ist mit einem genehmigten und zugewiesenen Issue verknüpft, hat klare Doku/Kommentare, enthält Vorher-Nachher-Bilder/Videos bei UI-Änderungen
- **Zu schließen**: CI-Fehler, große Merge-Konflikte, keine Übereinstimmung mit Projektzielen oder lange Inaktivität (>30 Tage ohne Updates nach Feedback)

##### Ablauf

1.  **Issue-Qualifikation & Zuweisung**: @hannesrudolph (oder andere Maintainer:innen) prüfen neue und bestehende Issues auf Passung und weisen sie zu.
2.  **Erste PR-Triage (täglich)**: Maintainer:innen machen einen schnellen Check neuer PRs auf Dringlichkeit oder kritische Themen.
3.  **Gründliche PR-Review (wöchentlich)**: Maintainer:innen prüfen PRs auf Bereitschaft, Passung zum Issue und Qualität.
4.  **Detailliertes Feedback & Iteration**: Nach dem Review gibt es Feedback (Approve, Request Changes, Reject). Contributor:innen sollen darauf reagieren und nachbessern.
5.  **Entscheidung**: Genehmigte PRs werden gemerged. PRs mit unlösbaren Problemen oder ohne Passung werden mit Begründung geschlossen.
6.  **Follow-up**: Autor:innen geschlossener PRs können nachbessern und neue PRs öffnen, wenn Probleme gelöst sind.

##### Verantwortlichkeiten

- **Issue-Qualifikation & Prozess (@hannesrudolph & Maintainer:innen)**: Sicherstellen, dass alle Beiträge dem Issue-First-Ansatz folgen. Contributor:innen anleiten.
- **Maintainer:innen (Dev Team)**: PRs prüfen, technisches Feedback geben, Entscheidungen treffen, PRs mergen.
- **Contributor:innen**: PRs mit genehmigtem und zugewiesenem Issue verknüpfen, Qualitätsrichtlinien einhalten, Feedback zügig umsetzen.

Diese Policy sorgt für Klarheit und effiziente Integration.

## IV. Rechtliches

### Beitragsvereinbarung

Mit dem Einreichen eines Pull Requests erklärst du dich damit einverstanden, dass deine Beiträge unter der [Apache 2.0 Lizenz](LICENSE) (oder der aktuellen Projektlizenz) stehen – genau wie das Projekt selbst.
