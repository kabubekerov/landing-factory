# Operating Packet: 745-kvartal

Этот документ переводит проектный пакет `745-kvartal` в прикладной operational format. Его задача — дать следующему исполнителю единый вход в работу по проекту без обращения к истории чата: что можно менять, на что опираться, как проверять результат и какие документы использовать при выпуске или восстановлении.

## Как использовать

Перед любой implementation-, release- или recovery-правкой по `745-kvartal` сначала проверьте `brief.md`, `messaging.md`, `assets.md`, `change-log.md` и `decisions.md`, а затем заполните или обновите соответствующий рабочий блок ниже. Если задача уходит в выпуск, дополняйте этот пакет release packet. Если возникает сбой, фиксируйте минимальный recovery scope и инцидент.

## 1. Task Contract

| Поле | Содержание |
|---|---|
| `slug_or_workstream` | `745-kvartal` |
| `mode` | `Implementation` или `Release`, в аварийных ситуациях `Recovery` |
| `scope` | `src/pages/745-kvartal.astro`, `public/assets/745-kvartal/`, `docs/projects/745-kvartal/` |
| `source_of_truth` | `docs/projects/745-kvartal/brief.md`, `messaging.md`, `assets.md`, `decisions.md`, `change-log.md`, а также `docs/playbooks/agent-operating-model.md` и `docs/standards/task-contract.md` |
| `deliverable` | Изменение страницы `745-kvartal` и связанного project-doc пакета без дрейфа в другие slugs |
| `validation` | Локальная сборка, визуальный smoke review, проверка целостности ассетов и ручная сверка B2C/B2B boundary |
| `exclusions` | Не менять unrelated pages, Netlify config, routing вне `745-kvartal` и чужие project-doc пакеты |
| `handoff_note` | Любая правка, меняющая границу между B2C- и B2B-слоем, должна быть отражена не только в коде, но и в `decisions.md` и `change-log.md` |

## 2. Release Packet

Этот блок используется как минимальный выпускной каркас перед commit/push по `745-kvartal`.

### 2.1 Контекст выпуска

| Поле | Содержание |
|---|---|
| `slug` | `745-kvartal` |
| `release_goal` | Выпустить смысловой, визуальный или структурный апдейт страницы без нарушения двуслойной аудиторной логики |
| `mode` | `Release` |
| `owner` | Исполнитель текущего пакета |
| `reference_docs` | `brief.md`, `messaging.md`, `assets.md`, `change-log.md`, `decisions.md` |

### 2.2 Scope пакета

| Что входит | Что не входит |
|---|---|
| Код и контент страницы `745-kvartal`, её traceable assets и project-docs | Другие slugs, глобальные routing-правила, unrelated deploy tweaks |

### 2.3 Validation

| Проверка | Статус | Комментарий |
|---|---|---|
| Локальная сборка |  |  |
| Визуальная проверка hero и финального CTA |  |  |
| Контентная проверка B2C/B2B boundary |  |  |
| Проверка наличия обязательных assets |  |  |
| Diff review перед commit |  |  |

### 2.4 Release gates review

| Gate | Pass / Fail | Комментарий |
|---|---|---|
| Scope gate |  |  |
| Structure gate |  |  |
| Content gate |  |  |
| Asset gate |  |  |
| Validation gate |  |  |
| Git gate |  |  |

## 3. Recovery Note

| Сценарий | Первое действие |
|---|---|
| Build error | Сузить пакет до минимального фикса и не смешивать его с copy/design-улучшениями |
| Staging mismatch | Проверить фактический route, asset paths и опубликованное состояние страницы |
| Смешение B2C и B2B логики | Вернуться к `brief.md`, `messaging.md` и `decisions.md`, затем изолировать минимальный конфликтный блок |
| Missing asset | Сначала восстановить путь и наличие файла, затем перепроверить references в коде и `assets.md` |

## 4. Связанные документы

- `docs/projects/745-kvartal/README.md`
- `docs/projects/745-kvartal/brief.md`
- `docs/projects/745-kvartal/messaging.md`
- `docs/projects/745-kvartal/assets.md`
- `docs/projects/745-kvartal/change-log.md`
- `docs/projects/745-kvartal/decisions.md`
- `docs/playbooks/agent-operating-model.md`
- `docs/playbooks/release-gates.md`
- `docs/playbooks/recovery-protocol.md`
- `docs/templates/task-contract-template.md`
- `docs/templates/project-release-packet-template.md`
- `docs/templates/incident-report-template.md`
