[English](../../CONTRIBUTING.md) • <b>Català</b> • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Contribuir a Roo Code

Roo Code és un projecte impulsat per la comunitat i valorem molt cada contribució. Per garantir un procés fluid i efectiu per a tothom, **treballem amb un enfocament "[Issue-First](#2-principi-clau-enfoc-issue-first)".** Això vol dir que tota la feina ha d'estar vinculada a una Issue de GitHub _abans_ de presentar un Pull Request (consulta la nostra [Política de PR](#política-de-pull-request-pr) per a més detalls). Llegeix aquesta guia amb atenció per entendre com pots contribuir.
Aquesta guia explica com contribuir a Roo Code, ja sigui corregint errors, afegint funcionalitats o millorant la documentació.

## Taula de continguts

- [I. Abans de contribuir](#i-abans-de-contribuir)
    - [1. Codi de conducta](#1-codi-de-conducta)
    - [2. Entendre la fulla de ruta del projecte](#2-entendre-la-fulla-de-ruta-del-projecte)
        - [Fiabilitat primer](#fiabilitat-primer)
        - [Experiència d'usuari millorada](#experiència-dusuari-millorada)
        - [Lideratge en rendiment dels agents](#lideratge-en-rendiment-dels-agents)
    - [3. Uneix-te a la comunitat Roo Code](#3-uneix-te-a-la-comunitat-roo-code)
- [II. Trobar i planificar la teva contribució](#ii-trobar-i-planificar-la-teva-contribució)
    - [1. Tipus de contribucions](#1-tipus-de-contribucions)
    - [2. Principi clau: Enfoc Issue-First](#2-principi-clau-enfoc-issue-first)
    - [3. Decidir en què treballar](#3-decidir-en-què-treballar)
    - [4. Informar d'errors o problemes](#4-informar-derrors-o-problemes)
- [III. Procés de desenvolupament i enviament](#iii-procés-de-desenvolupament-i-enviament)
    - [1. Configuració de desenvolupament](#1-configuració-de-desenvolupament)
    - [2. Guia per escriure codi](#2-guia-per-escriure-codi)
    - [3. Enviar codi: Procés de Pull Request (PR)](#3-enviar-codi-procés-de-pull-request-pr)
        - [Pull Requests en esborrany](#pull-requests-en-esborrany)
        - [Descripció del Pull Request](#descripció-del-pull-request)
        - [Política de Pull Request (PR)](#política-de-pull-request-pr)
            - [Objectiu](#objectiu)
            - [Enfoc Issue-First](#enfoc-issue-first)
            - [Condicions per a PRs oberts](#condicions-per-a-prs-oberts)
            - [Procediment](#procediment)
            - [Responsabilitats](#responsabilitats)
- [IV. Legal](#iv-legal)
    - [Acord de contribució](#acord-de-contribució)

## I. Abans de contribuir

Primer, familiaritza't amb els nostres estàndards comunitaris i la direcció del projecte.

### 1. Codi de conducta

Tots els col·laboradors han de complir el nostre [Codi de conducta](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md). Si us plau, llegeix-lo abans de contribuir.

### 2. Entendre la fulla de ruta del projecte

Roo Code té una fulla de ruta clara que guia les nostres prioritats i direcció futura. Entendre-la t'ajuda a:

- Alinear les teves contribucions amb els objectius del projecte
- Identificar àrees on la teva experiència sigui més valuosa
- Comprendre el context darrere de certes decisions de disseny
- Inspirar-te per a noves funcionalitats que donin suport a la nostra visió

Ens centrem a fer de Roo Code la millor opció per als desenvolupadors que treballen amb eines de codificació impulsades per IA. Així és com ho aconseguirem:

#### Fiabilitat primer

- Garantir que l'edició de diferències i l'execució de comandes siguin consistentment fiables
- Reduir els punts de fricció que desanimen l'ús regular
- Garantir un funcionament fluid en tots els idiomes i plataformes
- Ampliar el suport robust per a una àmplia varietat de proveïdors i models d'IA

#### Experiència d'usuari millorada

- Simplificar la interfície d'usuari per a més claredat i intuïció
- Millorar contínuament el flux de treball per satisfer les altes expectatives que els desenvolupadors tenen per a eines d'ús diari

#### Lideratge en rendiment dels agents

- Establir punts de referència d'avaluació (evals) complets per mesurar la productivitat real
- Facilitar que tothom pugui executar i interpretar aquestes avaluacions fàcilment
- Proporcionar millores a Roo Code que demostrin increments clars en les puntuacions d'avaluació

Agraïm especialment les contribucions que avancin els objectius de la nostra fulla de ruta. Si treballes en alguna cosa alineada amb aquests pilars, esmenta-ho a la descripció del teu PR.

### 3. Uneix-te a la comunitat Roo Code

Connectar amb la comunitat Roo Code és una excel·lent manera de començar:

- **Mètode principal**:
    1.  Uneix-te a la [comunitat Roo Code a Discord](https://discord.gg/roocode).
    2.  Un cop dins, envia un missatge directe (DM) a **Hannes Rudolph** (Discord: `hrudolph`) per comentar el teu interès i rebre orientació.
- **Alternativa per a col·laboradors experimentats**: Si et sents còmode amb l'enfoc issue-first, pots participar directament a GitHub seguint el [tauler Kanban](https://github.com/orgs/RooVetGit/projects/1) i comunicant-te mitjançant issues i pull requests.

## II. Trobar i planificar la teva contribució

Identifica en què t'agradaria treballar i com abordar-ho.

### 1. Tipus de contribucions

Acceptem diversos tipus de contribucions:

- **Correcció d'errors**: Solucionar problemes en el codi existent.
- **Noves funcionalitats**: Afegir noves funcionalitats.
- **Documentació**: Millorar guies, exemples o corregir errors tipogràfics.

### 2. Principi clau: Enfoc Issue-First

**Totes les contribucions han de començar amb una Issue de GitHub.** Aquest pas és fonamental per garantir l'alineació i evitar esforços innecessaris.

- **Cerca o crea una Issue**:
    - Abans de començar, busca a [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) si ja existeix una issue per a la teva contribució.
    - Si existeix i no està assignada, comenta a la issue per expressar el teu interès. Un mantenidor te l'assignarà.
    - Si no existeix, crea'n una de nova utilitzant la plantilla adequada a la nostra [pàgina d'issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose):
        - Per a errors, utilitza la plantilla "Bug Report".
        - Per a noves funcionalitats, utilitza la plantilla "Detailed Feature Proposal". Espera l'aprovació d'un mantenidor (especialment @hannesrudolph) abans de començar a implementar.
        - **Nota**: Les idees generals o discussions preliminars sobre funcionalitats poden començar a [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests). Quan la idea sigui més concreta, s'ha de crear una issue de "Detailed Feature Proposal".
- **Reclama i assigna**:
    - Indica clarament la teva intenció de treballar en una issue comentant-la.
    - Espera que un mantenidor te l'assigni oficialment a GitHub. Així evitem que diverses persones treballin en el mateix.
- **Conseqüències de no seguir-ho**:
    - Els Pull Requests (PRs) enviats sense una issue corresponent, preaprovada i assignada poden ser tancats sense revisió completa. Aquesta política existeix per garantir que les contribucions estiguin alineades amb les prioritats del projecte i per respectar el temps de tothom.

Aquest enfoc ens ajuda a fer el seguiment de la feina, garantir que els canvis siguin desitjats i coordinar els esforços de manera efectiva.

### 3. Decidir en què treballar

- **Good First Issues**: Consulta la secció "Issue [Unassigned]" del nostre [Projecte Roo Code Issues](https://github.com/orgs/RooVetGit/projects/1) a GitHub.
- **Documentació**: Tot i que aquest `CONTRIBUTING.md` és la guia principal per a contribucions de codi, si t'interessa contribuir a altra documentació (com guies d'usuari o API), revisa el [repositori Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs) o pregunta a la comunitat de Discord.
- **Proposar noves funcionalitats**:
    1.  **Idea inicial/discussió**: Per a idees generals o inicials, inicia una conversa a [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Proposta formal**: Per a propostes específiques i llestes per a consideració, crea una issue de "Detailed Feature Proposal" utilitzant la plantilla a la nostra [pàgina d'issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose). Això és clau en el nostre **enfoc Issue-First**.

### 4. Informar d'errors o problemes

Si trobes un error:

1.  **Cerca issues existents**: Revisa [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) per veure si ja està reportat.
2.  **Crea una nova issue**: Si és únic, utilitza la plantilla "Bug Report" a la nostra [pàgina d'issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Vulnerabilitats de seguretat**: Si descobreixes una vulnerabilitat de seguretat, informa-la de manera privada utilitzant l'[eina d'avisos de seguretat de GitHub](https://github.com/RooVetGit/Roo-Code/security/advisories/new). No creïs una issue pública per a vulnerabilitats de seguretat.

## III. Procés de desenvolupament i enviament

Segueix aquests passos per programar i enviar la teva feina.

### 1. Configuració de desenvolupament

1.  **Fork & Clona**:
    - Fes un fork del repositori a GitHub.
    - Clona el teu fork localment: `git clone https://github.com/EL_TEU_USUARI/Roo-Code.git`
2.  **Instal·la les dependències**: `npm run install:all`
3.  **Executa Webview (mode dev)**: `npm run dev` (per a l'app Vite/React amb HMR)
4.  **Depura l'extensió**: Prem `F5` a VS Code (o **Run** → **Start Debugging**) per obrir una nova finestra Extension Development Host amb Roo Code carregat.

Els canvis a webview (`webview-ui`) apareixeran immediatament gràcies a Hot Module Replacement. Els canvis a l'extensió principal (`src`) requeriran reiniciar l'Extension Development Host.

Alternativament, per construir i instal·lar un paquet `.vsix`:

```sh
npm run build
code --install-extension bin/paypal-roocode-enhance-<versió>.vsix
```

(Substitueix `<versió>` pel número de versió real del fitxer generat).

### 2. Guia per escriure codi

- **PRs enfocats**: Una funcionalitat/fix per PR.
- **Qualitat del codi**:
    - Passar els checks de CI (lint, format)
    - Corregir advertències o errors d'ESLint (`npm run lint`)
    - Respondre al feedback d'eines automàtiques de revisió de codi
    - Seguir bones pràctiques de TypeScript i mantenir la seguretat de tipus
- **Proves**:
    - Afegir tests per a noves funcionalitats
    - Executar `npm test` per assegurar que tot passa
    - Actualitzar tests existents si el teu canvi els afecta
- **Missatges de commit**:
    - Escriure missatges clars i descriptius
    - Referenciar issues rellevants amb `#número-issue` (ex: `Fixes #123`)
- **Checklist abans d'enviar PR**:
    - Rebasejar la teva branca sobre l'últim `main` de l'upstream
    - Assegura't que el codi compila (`npm run build`)
    - Verifica que tots els tests passen (`npm test`)
    - Elimina qualsevol codi de depuració o `console.log`

### 3. Enviar codi: Procés de Pull Request (PR)

#### Pull Requests en esborrany

Utilitza PRs en esborrany per a feina que encara no està llesta per a revisió completa però per la qual vols:

- Executar checks automàtics (CI)
- Rebre feedback primerenc de mantenidors o altres col·laboradors
- Indicar que la feina està en curs

Marca un PR com a "Llest per a revisió" només quan tots els checks passin i creguis que compleix els criteris de "Guia per escriure codi" i "Descripció del Pull Request".

#### Descripció del Pull Request

La descripció del teu PR ha de ser completa i seguir l'estructura de la nostra [Plantilla de Pull Request](.github/pull_request_template.md). Elements clau:

- Un enllaç a la Issue de GitHub aprovada que aborda
- Descripció clara dels canvis realitzats i el seu propòsit
- Passos detallats per provar els canvis
- Llista de qualsevol canvi important (breaking changes)
- **Per a canvis de UI, proporciona captures de pantalla o vídeos de l'abans i el després**
- **Indica si el teu PR requereix actualitzar documentació d'usuari i quins documents o seccions es veuen afectats**

#### Política de Pull Request (PR)

##### Objectiu

Mantenir un backlog de PRs net, enfocat i gestionable.

##### Enfoc Issue-First

- **Requerit**: Abans de començar, ha d'existir una Issue de GitHub aprovada i assignada (ja sigui "Bug Report" o "Detailed Feature Proposal").
- **Aprovació**: Les Issues, especialment les de canvis importants, han de ser revisades i aprovades pels mantenidors (especialment @hannesrudolph) _abans_ de començar a programar.
- **Referència**: Els PRs han de referenciar explícitament aquestes Issues preaprovades a la seva descripció.
- **Conseqüències**: No seguir aquest procés pot resultar en el tancament del PR sense revisió completa.

##### Condicions per a PRs oberts

- **Llest per merge**: Passa tots els tests de CI, s'alinea amb la fulla de ruta del projecte (si s'escau), està vinculat a una Issue aprovada i assignada, té documentació/comentaris clars, inclou imatges o vídeos d'abans i després per a canvis de UI
- **Per tancar**: Falla en tests de CI, conflictes de merge importants, desalineació amb els objectius del projecte o inactivitat prolongada (>30 dies sense actualitzacions després de feedback)

##### Procediment

1.  **Qualificació i assignació d'Issues**: @hannesrudolph (o altres mantenidors) revisen i assignen Issues noves i existents.
2.  **Triage inicial de PRs (diari)**: Els mantenidors fan una revisió ràpida dels PRs entrants per filtrar urgències o problemes crítics.
3.  **Revisió exhaustiva de PRs (setmanal)**: Els mantenidors revisen a fons els PRs per avaluar preparació, alineació amb la Issue aprovada i qualitat general.
4.  **Feedback detallat i iteració**: Segons la revisió, els mantenidors donen feedback (Aprovar, Sol·licitar canvis o Rebutjar). S'espera que els col·laboradors responguin i millorin segons sigui necessari.
5.  **Etapa de decisió**: Els PRs aprovats es fusionen. Els PRs amb problemes irresolubles o desalineats poden ser tancats amb una explicació clara.
6.  **Seguiment**: Els autors de PRs tancats poden abordar el feedback i obrir-ne de nous si es resolen els problemes o canvia la direcció del projecte.

##### Responsabilitats

- **Qualificació d'Issues i compliment del procés (@hannesrudolph & mantenidors)**: Assegurar que totes les contribucions segueixin l'enfoc Issue-First. Guiar els col·laboradors en el procés.
- **Mantenidors (equip de desenvolupament)**: Revisar PRs, donar feedback tècnic, prendre decisions d'aprovació/rebuig i fusionar PRs.
- **Col·laboradors**: Assegurar que els PRs estiguin vinculats a una Issue aprovada i assignada, compleixin amb les guies de qualitat i responguin ràpidament al feedback.

Aquesta política garanteix claredat i integració eficient.

## IV. Legal

### Acord de contribució

En enviar un pull request, acceptes que les teves contribucions es llicenciïn sota la [Llicència Apache 2.0](LICENSE) (o la llicència actual del projecte), igual que el projecte.
