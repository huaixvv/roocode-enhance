[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • <b>Polski</b> • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Współtworzenie Roo Code

Roo Code to projekt napędzany przez społeczność i bardzo cenimy każdy wkład. Aby zapewnić płynny i skuteczny proces dla wszystkich, **działamy według zasady "[Issue-First](#2-kluczowa-zasada-podejście-issue-first)".** Oznacza to, że każda praca powinna być powiązana z GitHub Issue _przed_ zgłoszeniem Pull Requesta (szczegóły w naszej [Polityce PR](#polityka-pull-request-pr)). Przeczytaj ten przewodnik uważnie, aby dowiedzieć się, jak możesz współtworzyć.
Ten przewodnik opisuje, jak współtworzyć Roo Code – czy to naprawiając błędy, dodając funkcje, czy ulepszając dokumentację.

## Spis treści

- [I. Zanim zaczniesz współtworzyć](#i-zanim-zaczniesz-współtworzyć)
    - [1. Kodeks postępowania](#1-kodeks-postępowania)
    - [2. Zrozumienie roadmapy projektu](#2-zrozumienie-roadmapy-projektu)
        - [Niezawodność przede wszystkim](#niezawodność-przede-wszystkim)
        - [Ulepszone doświadczenie użytkownika](#ulepszone-doświadczenie-użytkownika)
        - [Wiodąca pozycja w wydajności agentów](#wiodąca-pozycja-w-wydajności-agentów)
    - [3. Dołącz do społeczności Roo Code](#3-dołącz-do-społeczności-roo-code)
- [II. Znajdowanie i planowanie swojego wkładu](#ii-znajdowanie-i-planowanie-swojego-wkładu)
    - [1. Typy wkładów](#1-typy-wkładów)
    - [2. Kluczowa zasada: podejście Issue-First](#2-kluczowa-zasada-podejście-issue-first)
    - [3. Decydowanie, nad czym pracować](#3-decydowanie-nad-czym-pracować)
    - [4. Zgłaszanie błędów lub problemów](#4-zgłaszanie-błędów-lub-problemów)
- [III. Proces rozwoju i zgłaszania](#iii-proces-rozwoju-i-zgłaszania)
    - [1. Konfiguracja środowiska](#1-konfiguracja-środowiska)
    - [2. Wytyczne dotyczące pisania kodu](#2-wytyczne-dotyczące-pisania-kodu)
    - [3. Zgłaszanie kodu: proces Pull Request (PR)](#3-zgłaszanie-kodu-proces-pull-request-pr)
        - [Pull Requesty w wersji roboczej](#pull-requesty-w-wersji-roboczej)
        - [Opis Pull Requesta](#opis-pull-requesta)
        - [Polityka Pull Request (PR)](#polityka-pull-request-pr)
            - [Cel](#cel)
            - [Podejście Issue-First](#podejście-issue-first)
            - [Warunki dla otwartych PR](#warunki-dla-otwartych-pr)
            - [Procedura](#procedura)
            - [Odpowiedzialności](#odpowiedzialności)
- [IV. Prawne](#iv-prawne)
    - [Umowa współtwórcy](#umowa-współtwórcy)

## I. Zanim zaczniesz współtworzyć

Najpierw zapoznaj się ze standardami społeczności i kierunkiem projektu.

### 1. Kodeks postępowania

Wszyscy współtwórcy muszą przestrzegać naszego [Kodeksu postępowania](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md). Przeczytaj go przed rozpoczęciem współtworzenia.

### 2. Zrozumienie roadmapy projektu

Roo Code ma jasną roadmapę rozwoju, która wyznacza nasze priorytety i przyszły kierunek. Zrozumienie roadmapy pomoże ci:

- Dopasować swój wkład do celów projektu
- Znaleźć obszary, w których twoja wiedza będzie najbardziej wartościowa
- Zrozumieć kontekst niektórych decyzji projektowych
- Zainspirować się do nowych funkcji wspierających naszą wizję

Skupiamy się na tym, aby Roo Code stało się najlepszym wyborem dla programistów pracujących z narzędziami programistycznymi opartymi na AI. Oto jak to osiągniemy:

#### Niezawodność przede wszystkim

- Zapewnienie, że edycja różnic i wykonywanie poleceń są konsekwentnie niezawodne
- Zmniejszenie punktów tarcia, które zniechęcają do regularnego użytkowania
- Gwarancja płynnego działania we wszystkich językach i na wszystkich platformach
- Rozszerzenie solidnego wsparcia dla szerokiej gamy dostawców i modeli AI

#### Ulepszone doświadczenie użytkownika

- Uproszczenie interfejsu użytkownika dla większej przejrzystości i intuicyjności
- Ciągłe doskonalenie przepływu pracy, aby spełnić wysokie oczekiwania, jakie programiści mają wobec codziennie używanych narzędzi

#### Wiodąca pozycja w wydajności agentów

- Ustanowienie kompleksowych punktów odniesienia (evals) do mierzenia produktywności w rzeczywistym świecie
- Ułatwienie wszystkim łatwego uruchamiania i interpretowania tych ocen
- Dostarczanie ulepszeń Roo Code, które wykazują wyraźny wzrost wyników ocen

Szczególnie mile widziane są wkłady, które realizują cele roadmapy. Jeśli pracujesz nad czymś zgodnym z tymi filarami, wspomnij o tym w opisie PR.

### 3. Dołącz do społeczności Roo Code

Nawiązanie kontaktu ze społecznością Roo Code to świetny sposób na rozpoczęcie:

- **Główna metoda**:
    1.  Dołącz do [społeczności Roo Code na Discordzie](https://discord.gg/roocode).
    2.  Po dołączeniu wyślij wiadomość prywatną (DM) do **Hannes Rudolph** (Discord: `hrudolph`), aby omówić swoje zainteresowanie i uzyskać wskazówki.
- **Alternatywa dla doświadczonych współtwórców**: Jeśli dobrze znasz podejście Issue-First, możesz działać bezpośrednio przez GitHub, śledząc [tablicę Kanban](https://github.com/orgs/RooVetGit/projects/1) i komunikując się przez issues i pull requesty.

## II. Znajdowanie i planowanie swojego wkładu

Zdecyduj, nad czym chcesz pracować i jak się za to zabierzesz.

### 1. Typy wkładów

Witamy różne typy wkładów:

- **Poprawki błędów**: Naprawianie problemów w istniejącym kodzie
- **Nowe funkcje**: Dodawanie nowych funkcjonalności
- **Dokumentacja**: Ulepszanie przewodników, dodawanie przykładów lub poprawianie literówek

### 2. Kluczowa zasada: podejście Issue-First

**Każdy wkład musi zaczynać się od GitHub Issue.** To kluczowe, by zapewnić zgodność i uniknąć niepotrzebnej pracy.

- **Znajdź lub utwórz Issue**:
    - Przed rozpoczęciem sprawdź w [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues), czy już istnieje issue dla twojego wkładu.
    - Jeśli istnieje i nie jest przypisane, skomentuj, że chcesz się tym zająć. Maintainer ci je przypisze.
    - Jeśli nie istnieje, utwórz nowe, korzystając z odpowiedniego szablonu na naszej [stronie issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose):
        - Dla błędów: szablon "Bug Report"
        - Dla nowych funkcji: szablon "Detailed Feature Proposal". Poczekaj na zatwierdzenie przez maintainerów (szczególnie @hannesrudolph) przed rozpoczęciem implementacji.
        - **Uwaga**: Ogólne pomysły lub wstępne dyskusje o funkcjach mogą zacząć się w [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests). Gdy pomysł się sprecyzuje, należy utworzyć issue "Detailed Feature Proposal".
- **Zgłaszanie i przypisywanie**:
    - Wyraźnie zaznacz chęć pracy nad issue, komentując je.
    - Poczekaj, aż maintainer oficjalnie ci je przypisze na GitHubie. Dzięki temu unikniemy dublowania pracy.
- **Konsekwencje nieprzestrzegania**:
    - Pull Requesty (PR) bez powiązanego, zatwierdzonego i przypisanego issue mogą zostać zamknięte bez pełnej recenzji. Ta polityka zapewnia zgodność wkładów z celami projektu i szanuje czas wszystkich.

To podejście pomaga nam śledzić pracę, upewnić się, że zmiany są pożądane, i skutecznie koordynować wysiłki.

### 3. Decydowanie, nad czym pracować

- **Good First Issues**: Sprawdź sekcję "Issue [Unassigned]" w naszym [projekcie Roo Code Issues](https://github.com/orgs/RooVetGit/projects/1) na GitHubie.
- **Dokumentacja**: Choć ten `CONTRIBUTING.md` to główny przewodnik dla wkładów kodowych, jeśli chcesz współtworzyć inną dokumentację (np. przewodniki użytkownika lub API), sprawdź [repozytorium Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs) lub zapytaj na Discordzie.
- **Proponowanie nowych funkcji**:
    1.  **Wstępny pomysł/dyskusja**: Ogólne lub początkowe pomysły omawiaj w [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Formalna propozycja**: Dla konkretnych, gotowych do rozważenia propozycji utwórz issue "Detailed Feature Proposal" z szablonu na naszej [stronie issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose). To kluczowy element naszego **podejścia Issue-First**.

### 4. Zgłaszanie błędów lub problemów

Jeśli znajdziesz błąd:

1.  **Szukaj istniejących issues**: Sprawdź [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues), czy nie ma już zgłoszenia.
2.  **Utwórz nowe issue**: Jeśli to unikalny problem, użyj szablonu "Bug Report" na naszej [stronie issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Luki bezpieczeństwa**: Jeśli odkryjesz lukę bezpieczeństwa, zgłoś ją prywatnie przez [GitHub Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new). Nie twórz publicznego issue dla luk bezpieczeństwa.

## III. Proces rozwoju i zgłaszania

Postępuj według tych kroków, aby kodować i zgłaszać swój wkład.

### 1. Konfiguracja środowiska

1.  **Fork & Clone**:
    - Zrób fork repozytorium na GitHubie.
    - Sklonuj swojego forka lokalnie: `git clone https://github.com/TWÓJ_UŻYTKOWNIK/Roo-Code.git`
2.  **Zainstaluj zależności**: `npm run install:all`
3.  **Uruchom Webview (Dev Mode)**: `npm run dev` (dla aplikacji Vite/React z HMR)
4.  **Debuguj rozszerzenie**: Wciśnij `F5` w VS Code (lub **Run** → **Start Debugging**), aby otworzyć nowe okno Extension Development Host z Roo Code.

Zmiany w webview (`webview-ui`) pojawią się natychmiast dzięki Hot Module Replacement. Zmiany w głównym rozszerzeniu (`src`) wymagają ponownego uruchomienia Extension Development Host.

Możesz też zbudować i zainstalować paczkę `.vsix`:

```sh
npm run build
code --install-extension bin/paypal-roocode-enhance-<wersja>.vsix
```

(Zamień `<wersja>` na faktyczny numer wersji wygenerowanego pliku).

### 2. Wytyczne dotyczące pisania kodu

- **Skoncentrowane PRy**: Jedna funkcja/poprawka na PR.
- **Jakość kodu**:
    - Przejdź przez CI (lint, formatowanie)
    - Napraw ostrzeżenia lub błędy ESLint (`npm run lint`)
    - Odpowiadaj na feedback z narzędzi automatycznej recenzji kodu
    - Stosuj dobre praktyki TypeScript i dbaj o bezpieczeństwo typów
- **Testowanie**:
    - Dodaj testy dla nowych funkcji
    - Uruchom `npm test`, by upewnić się, że wszystko przechodzi
    - Zaktualizuj istniejące testy, jeśli twoje zmiany je dotyczą
- **Wiadomości commitów**:
    - Pisz jasne, opisowe wiadomości commitów
    - Odnoś się do odpowiednich issues przez `#numer-issue` (np. `Fixes #123`)
- **Checklist przed zgłoszeniem PR**:
    - Zrebase'uj swoją gałąź na najnowszym `main` z upstream
    - Upewnij się, że kod się buduje (`npm run build`)
    - Wszystkie testy muszą przechodzić (`npm test`)
    - Usuń kod debugowania lub `console.log`

### 3. Zgłaszanie kodu: proces Pull Request (PR)

#### Pull Requesty w wersji roboczej

Używaj PRów w wersji roboczej dla pracy, która nie jest jeszcze gotowa do pełnej recenzji, ale dla której chcesz:

- Uruchomić automatyczne sprawdzenia (CI)
- Otrzymać wczesny feedback od maintainerów lub innych współtwórców
- Zasygnalizować, że praca jest w toku

Oznacz PR jako "Ready for Review" dopiero, gdy wszystkie sprawdzenia przejdą i uważasz, że spełnia kryteria "Wytycznych dotyczących pisania kodu" i "Opisu Pull Requesta".

#### Opis Pull Requesta

Opis PRa musi być kompletny i zgodny ze strukturą naszej [Pull Request Template](.github/pull_request_template.md). Kluczowe elementy:

- Link do zatwierdzonego GitHub Issue, którego dotyczy
- Jasny opis wprowadzonych zmian i ich celu
- Szczegółowe kroki testowania zmian
- Lista wszelkich breaking changes
- **Dla zmian w UI: zrzuty ekranu lub wideo przed/po**
- **Wskaż, czy PR wymaga aktualizacji dokumentacji użytkownika i które dokumenty/sekcje są dotknięte**

#### Polityka Pull Request (PR)

##### Cel

Utrzymanie czystego, skoncentrowanego i zarządzalnego backlogu PRów.

##### Podejście Issue-First

- **Wymagane**: Przed rozpoczęciem pracy musi istnieć zatwierdzone i przypisane GitHub Issue ("Bug Report" lub "Detailed Feature Proposal").
- **Zatwierdzenie**: Issues, zwłaszcza dotyczące większych zmian, muszą być zatwierdzone przez maintainerów (szczególnie @hannesrudolph) _przed_ rozpoczęciem kodowania.
- **Odniesienie**: PRy muszą wyraźnie odnosić się do tych zatwierdzonych issues w opisie.
- **Konsekwencje**: Nieprzestrzeganie tego procesu może skutkować zamknięciem PRa bez pełnej recenzji.

##### Warunki dla otwartych PR

- **Gotowe do merge**: Przechodzi wszystkie testy CI, jest zgodny z roadmapą (jeśli dotyczy), powiązany z zatwierdzonym i przypisanym Issue, ma jasną dokumentację/komentarze, zawiera zrzuty ekranu/wideo dla zmian w UI
- **Do zamknięcia**: Błędy CI, poważne konflikty merge, brak zgodności z celami projektu lub długotrwała bezczynność (>30 dni bez aktualizacji po feedbacku)

##### Procedura

1.  **Kwalifikacja i przypisanie Issue**: @hannesrudolph (lub inni maintainerzy) przeglądają i przypisują nowe i istniejące issues.
2.  **Wstępna triage PRów (codziennie)**: Maintainerzy szybko przeglądają nowe PRy pod kątem pilności lub krytycznych problemów.
3.  **Szczegółowa recenzja PRów (tygodniowo)**: Maintainerzy dokładnie oceniają PRy pod kątem gotowości, zgodności z zatwierdzonym Issue i ogólnej jakości.
4.  **Szczegółowy feedback i iteracja**: Na podstawie recenzji maintainerzy udzielają feedbacku (Approve, Request Changes, Reject). Oczekuje się, że współtwórcy odpowiedzą i poprawią PR.
5.  **Etap decyzji**: Zatwierdzone PRy są mergowane. PRy z nierozwiązywalnymi problemami lub niezgodne mogą być zamknięte z wyjaśnieniem.
6.  **Follow-up**: Autorzy zamkniętych PRów mogą poprawić je według feedbacku i otworzyć nowe, jeśli problemy zostaną rozwiązane lub zmieni się kierunek projektu.

##### Odpowiedzialności

- **Kwalifikacja Issue i przestrzeganie procesu (@hannesrudolph & maintainerzy)**: Zapewnienie, że wszystkie wkłady stosują podejście Issue-First. Wskazówki dla współtwórców.
- **Maintainerzy (zespół deweloperski)**: Przegląd PRów, udzielanie feedbacku technicznego, podejmowanie decyzji o zatwierdzeniu/odrzuceniu, mergowanie PRów.
- **Współtwórcy**: Powiązanie PRów z zatwierdzonym i przypisanym Issue, przestrzeganie wytycznych jakości, szybka reakcja na feedback.

Ta polityka zapewnia przejrzystość i efektywną integrację.

## IV. Prawne

### Umowa współtwórcy

Zgłaszając pull request, zgadzasz się, że twój wkład będzie licencjonowany na [licencji Apache 2.0](LICENSE) (lub aktualnej licencji projektu), tak jak cały projekt.
