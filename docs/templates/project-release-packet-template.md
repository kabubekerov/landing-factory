# Project Release Packet Template

Этот шаблон нужен для подготовки выпускного пакета по конкретному лендингу или серии правок. Он помогает собрать release-ready состояние в одном месте и связать его с task contract, release gates и recovery protocol.

## Как использовать

Создайте документ в `docs/projects/<slug>/release-packet.md` и заполните все разделы перед commit/push. Если пакет касается staging или rollback-риска, обязательно проверьте соответствие `docs/playbooks/release-gates.md` и `docs/playbooks/recovery-protocol.md`.

## Шаблон

## 1. Контекст выпуска

| Поле | Содержание |
|---|---|
| `slug` |  |
| `release_goal` |  |
| `mode` | Обычно `Release`, иногда `Recovery` |
| `owner` |  |
| `reference_docs` | Ссылки на `brief.md`, `messaging.md`, `audit.md`, `decisions.md` |

## 2. Scope пакета

| Что входит | Что не входит |
|---|---|
|  |  |

## 3. Изменённые артефакты

| Тип | Путь | Назначение |
|---|---|---|
| Page |  |  |
| Assets |  |  |
| Docs |  |  |
| Config / Redirects / Forms |  |  |

## 4. Validation

| Проверка | Статус | Комментарий |
|---|---|---|
| Локальная сборка |  |  |
| Визуальная проверка |  |  |
| Контентная проверка |  |  |
| Route / alias проверка |  |  |
| Form / analytics проверка |  |  |

## 5. Release gates review

| Gate | Pass / Fail | Комментарий |
|---|---|---|
| Scope gate |  |  |
| Structure gate |  |  |
| Content gate |  |  |
| Validation gate |  |  |
| Git gate |  |  |

## 6. Recovery note

Если после деплоя возникнет отклонение, первый шаг восстановления должен быть зафиксирован заранее.

| Сценарий | Первое действие |
|---|---|
| Build error |  |
| Staging mismatch |  |
| Missing asset |  |
| Wrong route precedence |  |

## 7. Handoff

Коротко опишите, что должен знать следующий исполнитель без обращения к чату.

## Связанные документы

- `docs/playbooks/agent-operating-model.md`
- `docs/playbooks/release-gates.md`
- `docs/playbooks/recovery-protocol.md`
- `docs/standards/task-contract.md`
- `docs/templates/task-contract-template.md`
