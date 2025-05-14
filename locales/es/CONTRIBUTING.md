[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • [Deutsch](../de/CONTRIBUTING.md) • <b>Español</b> • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Contribuir a Roo Code

Roo Code es un proyecto impulsado por la comunidad y valoramos mucho cada contribución. Para que todo funcione sin problemas, **trabajamos con un enfoque de "[Issue-First](#2-principio-clave-enfoque-issue-first)".** Esto significa que todo el trabajo debe estar vinculado a un Issue de GitHub _antes_ de enviar un Pull Request (consulta nuestra [Política de PR](#política-de-pull-request-pr) para más detalles). Lee esta guía con atención para entender cómo puedes contribuir.
Esta guía explica cómo contribuir a Roo Code, ya sea corrigiendo errores, agregando funciones o mejorando la documentación.

## Tabla de Contenidos

- [I. Antes de Contribuir](#i-antes-de-contribuir)
    - [1. Código de Conducta](#1-código-de-conducta)
    - [2. Entender la Hoja de Ruta del Proyecto](#2-entender-la-hoja-de-ruta-del-proyecto)
        - [Confiabilidad Primero](#confiabilidad-primero)
        - [Experiencia de Usuario Mejorada](#experiencia-de-usuario-mejorada)
        - [Liderazgo en Rendimiento de Agentes](#liderazgo-en-rendimiento-de-agentes)
    - [3. Únete a la Comunidad Roo Code](#3-únete-a-la-comunidad-roo-code)
- [II. Encontrar y Planificar tu Contribución](#ii-encontrar-y-planificar-tu-contribución)
    - [1. Tipos de Contribuciones](#1-tipos-de-contribuciones)
    - [2. Principio Clave: Enfoque Issue-First](#2-principio-clave-enfoque-issue-first)
    - [3. Decidir en Qué Trabajar](#3-decidir-en-qué-trabajar)
    - [4. Reportar Errores o Problemas](#4-reportar-errores-o-problemas)
- [III. Proceso de Desarrollo y Envío](#iii-proceso-de-desarrollo-y-envío)
    - [1. Configuración de Desarrollo](#1-configuración-de-desarrollo)
    - [2. Guía para Escribir Código](#2-guía-para-escribir-código)
    - [3. Enviar Código: Proceso de Pull Request (PR)](#3-enviar-código-proceso-de-pull-request-pr)
        - [Pull Requests en Borrador](#pull-requests-en-borrador)
        - [Descripción del Pull Request](#descripción-del-pull-request)
        - [Política de Pull Request (PR)](#política-de-pull-request-pr)
            - [Objetivo](#objetivo)
            - [Enfoque Issue-First](#enfoque-issue-first)
            - [Condiciones para PRs Abiertos](#condiciones-para-prs-abiertos)
            - [Procedimiento](#procedimiento)
            - [Responsabilidades](#responsabilidades)
- [IV. Legal](#iv-legal)
    - [Acuerdo de Contribución](#acuerdo-de-contribución)

## I. Antes de Contribuir

Primero, familiarízate con nuestros estándares comunitarios y la dirección del proyecto.

### 1. Código de Conducta

Todos los colaboradores deben cumplir con nuestro [Código de Conducta](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md). Por favor, léelo antes de contribuir.

### 2. Entender la Hoja de Ruta del Proyecto

Roo Code tiene una hoja de ruta clara que guía nuestras prioridades y dirección futura. Entenderla te ayuda a:

- Alinear tus contribuciones con los objetivos del proyecto
- Identificar áreas donde tu experiencia es más valiosa
- Comprender el contexto detrás de ciertas decisiones de diseño
- Inspirarte para nuevas funciones que apoyen nuestra visión

Nos enfocamos en hacer de Roo Code la mejor opción para desarrolladores que construyen con herramientas de codificación impulsadas por IA. Así es como lo lograremos:

#### Confiabilidad Primero

- Garantizar que la edición de diferencias y la ejecución de comandos sean consistentemente confiables.
- Reducir los puntos de fricción que disuaden el uso regular.
- Garantizar un funcionamiento fluido en todos los idiomas y plataformas.
- Ampliar el soporte sólido para una amplia variedad de proveedores y modelos de IA.

#### Experiencia de Usuario Mejorada

- Simplificar la interfaz de usuario para mayor claridad e intuitividad.
- Mejorar continuamente el flujo de trabajo para satisfacer las altas expectativas que los desarrolladores tienen para herramientas de uso diario.

#### Liderazgo en Rendimiento de Agentes

- Establecer evaluaciones comparativas completas (evals) para medir la productividad en el mundo real.
- Facilitar que todos puedan ejecutar e interpretar estas evaluaciones fácilmente.
- Ofrecer mejoras a Roo Code que demuestren aumentos claros en las puntuaciones de evaluación.

Agradecemos especialmente las contribuciones que avancen los objetivos de nuestra hoja de ruta. Si trabajas en algo alineado con estos pilares, menciónalo en la descripción de tu PR.

### 3. Únete a la Comunidad Roo Code

Conectarte con la comunidad Roo Code es una excelente manera de empezar:

- **Método principal**:
    1.  Únete a la [comunidad Roo Code en Discord](https://discord.gg/roocode).
    2.  Una vez dentro, envía un mensaje directo (DM) a **Hannes Rudolph** (Discord: `hrudolph`) para comentar tu interés y recibir orientación.
- **Alternativa para colaboradores experimentados**: Si te sientes cómodo con el enfoque issue-first, puedes participar directamente en GitHub siguiendo el [tablero Kanban](https://github.com/orgs/RooVetGit/projects/1) y comunicándote mediante issues y pull requests.

## II. Encontrar y Planificar tu Contribución

Identifica en qué te gustaría trabajar y cómo abordarlo.

### 1. Tipos de Contribuciones

Aceptamos varios tipos de contribuciones:

- **Corrección de errores**: Solucionar problemas en el código existente.
- **Nuevas funciones**: Añadir nuevas funcionalidades.
- **Documentación**: Mejorar guías, ejemplos o corregir errores tipográficos.

### 2. Principio Clave: Enfoque Issue-First

**Todas las contribuciones deben comenzar con un Issue de GitHub.** Este paso es fundamental para asegurar la alineación y evitar esfuerzos innecesarios.

- **Buscar o crear un Issue**:
    - Antes de empezar, busca en [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) si ya existe un issue para tu contribución.
    - Si existe y no está asignado, comenta en el issue para expresar tu interés. Un mantenedor te lo asignará.
    - Si no existe, crea uno nuevo usando la plantilla adecuada en nuestra [página de issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose):
        - Para errores, usa la plantilla "Bug Report".
        - Para nuevas funciones, usa la plantilla "Detailed Feature Proposal". Espera la aprobación de un mantenedor (especialmente @hannesrudolph) antes de empezar a implementar.
        - **Nota**: Las ideas generales o discusiones preliminares sobre funciones pueden comenzar en [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests). Cuando la idea sea más concreta, se debe crear un issue de "Detailed Feature Proposal".
- **Reclamar y asignar**:
    - Indica claramente tu intención de trabajar en un issue comentando en él.
    - Espera a que un mantenedor te lo asigne oficialmente en GitHub. Así evitamos que varias personas trabajen en lo mismo.
- **Consecuencias de no seguirlo**:
    - Los Pull Requests (PRs) enviados sin un issue correspondiente, preaprobado y asignado pueden cerrarse sin revisión completa. Esta política existe para asegurar que las contribuciones estén alineadas con las prioridades del proyecto y para respetar el tiempo de todos.

Este enfoque nos ayuda a rastrear el trabajo, asegurar que los cambios sean deseados y coordinar los esfuerzos de manera efectiva.

### 3. Decidir en Qué Trabajar

- **Good First Issues**: Consulta la sección "Issue [Unassigned]" de nuestro [Proyecto Roo Code Issues](https://github.com/orgs/RooVetGit/projects/1) en GitHub.
- **Documentación**: Aunque este `CONTRIBUTING.md` es la guía principal para contribuciones de código, si te interesa contribuir a otra documentación (como guías de usuario o API), revisa el [repositorio Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs) o pregunta en la comunidad de Discord.
- **Proponer nuevas funciones**:
    1.  **Idea inicial/discusión**: Para ideas generales o iniciales, inicia una conversación en [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Propuesta formal**: Para propuestas específicas y listas para consideración, crea un issue de "Detailed Feature Proposal" usando la plantilla en nuestra [página de issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose). Esto es clave en nuestro **enfoque Issue-First**.

### 4. Reportar Errores o Problemas

Si encuentras un error:

1.  **Buscar issues existentes**: Revisa [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) para ver si ya está reportado.
2.  **Crear un nuevo issue**: Si es único, usa la plantilla "Bug Report" en nuestra [página de issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Vulnerabilidades de seguridad**: Si descubres una vulnerabilidad de seguridad, repórtala de forma privada usando la [herramienta de avisos de seguridad de GitHub](https://github.com/RooVetGit/Roo-Code/security/advisories/new). No crees un issue público para vulnerabilidades de seguridad.

## III. Proceso de Desarrollo y Envío

Sigue estos pasos para programar y enviar tu trabajo.

### 1. Configuración de Desarrollo

1.  **Fork & Clona**:
    - Haz un fork del repositorio en GitHub.
    - Clona tu fork localmente: `git clone https://github.com/TU_USUARIO/Roo-Code.git`
2.  **Instala dependencias**: `npm run install:all`
3.  **Ejecuta Webview (modo dev)**: `npm run dev` (para la app Vite/React con HMR)
4.  **Depura la extensión**: Pulsa `F5` en VS Code (o **Run** → **Start Debugging**) para abrir una nueva ventana Extension Development Host con Roo Code cargado.

Los cambios en webview (`webview-ui`) aparecerán inmediatamente gracias a Hot Module Replacement. Los cambios en la extensión principal (`src`) requerirán reiniciar el Extension Development Host.

Alternativamente, para construir e instalar un paquete `.vsix`:

```sh
npm run build
code --install-extension bin/paypal-roocode-enhance-<version>.vsix
```

(Reemplaza `<version>` por el número de versión real del archivo generado).

### 2. Guía para Escribir Código

- **PRs enfocados**: Un feature/fix por PR.
- **Calidad de código**:
    - Pasar los checks de CI (lint, formato)
    - Corregir advertencias o errores de ESLint (`npm run lint`)
    - Responder a feedback de herramientas automáticas de revisión de código
    - Seguir buenas prácticas de TypeScript y mantener la seguridad de tipos
- **Pruebas**:
    - Añadir tests para nuevas funciones
    - Ejecutar `npm test` para asegurar que todo pasa
    - Actualizar tests existentes si tu cambio los afecta
- **Mensajes de commit**:
    - Escribir mensajes claros y descriptivos
    - Referenciar issues relevantes usando `#número-issue` (ej: `Fixes #123`)
- **Checklist antes de enviar PR**:
    - Rebasear tu rama sobre el último `main` del upstream
    - Asegurarte de que el código compila (`npm run build`)
    - Verificar que todos los tests pasan (`npm test`)
    - Eliminar cualquier código de depuración o `console.log`

### 3. Enviar Código: Proceso de Pull Request (PR)

#### Pull Requests en Borrador

Usa PRs en borrador para trabajo que aún no está listo para revisión completa pero para el que quieres:

- Ejecutar checks automáticos (CI)
- Recibir feedback temprano de mantenedores u otros colaboradores
- Señalar que el trabajo está en progreso

Marca un PR como "Listo para revisión" solo cuando todos los checks pasen y creas que cumple con los criterios de "Guía para Escribir Código" y "Descripción del Pull Request".

#### Descripción del Pull Request

La descripción de tu PR debe ser completa y seguir la estructura de nuestra [Plantilla de Pull Request](.github/pull_request_template.md). Elementos clave:

- Un enlace al Issue de GitHub aprobado que aborda
- Descripción clara de los cambios realizados y su propósito
- Pasos detallados para probar los cambios
- Lista de cualquier cambio importante (breaking changes)
- **Para cambios de UI, proporciona capturas de pantalla o videos del antes y después**
- **Indica si tu PR requiere actualizar documentación de usuario y cuáles documentos o secciones se ven afectados**

#### Política de Pull Request (PR)

##### Objetivo

Mantener un backlog de PRs limpio, enfocado y manejable.

##### Enfoque Issue-First

- **Requerido**: Antes de empezar, debe existir un Issue de GitHub aprobado y asignado (ya sea "Bug Report" o "Detailed Feature Proposal").
- **Aprobación**: Los Issues, especialmente los de cambios importantes, deben ser revisados y aprobados por los mantenedores (especialmente @hannesrudolph) _antes_ de comenzar a programar.
- **Referencia**: Los PRs deben referenciar explícitamente estos Issues preaprobados en su descripción.
- **Consecuencias**: No seguir este proceso puede resultar en el cierre del PR sin revisión completa.

##### Condiciones para PRs Abiertos

- **Listo para merge**: Pasa todos los tests de CI, se alinea con la hoja de ruta del proyecto (si aplica), está vinculado a un Issue aprobado y asignado, tiene documentación/comentarios claros, incluye imágenes o videos de antes y después para cambios de UI
- **Para cerrar**: Falla en tests de CI, conflictos de merge importantes, desalineación con los objetivos del proyecto o inactividad prolongada (>30 días sin actualizaciones tras feedback)

##### Procedimiento

1.  **Calificación y asignación de Issues**: @hannesrudolph (u otros mantenedores) revisan y asignan Issues nuevos y existentes.
2.  **Triage inicial de PRs (diario)**: Los mantenedores hacen una revisión rápida de los PRs entrantes para filtrar urgencias o problemas críticos.
3.  **Revisión exhaustiva de PRs (semanal)**: Los mantenedores revisan a fondo los PRs para evaluar preparación, alineación con el Issue aprobado y calidad general.
4.  **Feedback detallado e iteración**: Según la revisión, los mantenedores dan feedback (Aprobar, Solicitar cambios o Rechazar). Se espera que los colaboradores respondan y mejoren según sea necesario.
5.  **Etapa de decisión**: Los PRs aprobados se fusionan. Los PRs con problemas irresolubles o desalineados pueden cerrarse con una explicación clara.
6.  **Seguimiento**: Los autores de PRs cerrados pueden abordar el feedback y abrir nuevos si se resuelven los problemas o cambia la dirección del proyecto.

##### Responsabilidades

- **Calificación de Issues y cumplimiento del proceso (@hannesrudolph & mantenedores)**: Asegurar que todas las contribuciones sigan el enfoque Issue-First. Guiar a los colaboradores en el proceso.
- **Mantenedores (equipo de desarrollo)**: Revisar PRs, dar feedback técnico, tomar decisiones de aprobación/rechazo y fusionar PRs.
- **Colaboradores**: Asegurar que los PRs estén vinculados a un Issue aprobado y asignado, cumplan con las guías de calidad y respondan rápidamente al feedback.

Esta política asegura claridad e integración eficiente.

## IV. Legal

### Acuerdo de Contribución

Al enviar un pull request, aceptas que tus contribuciones se licenciarán bajo la [Licencia Apache 2.0](LICENSE) (o la licencia actual del proyecto), igual que el proyecto.
