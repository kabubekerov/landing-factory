# Incident Report Template

Этот шаблон используется, когда задача вошла в режим `Recovery`: build сломан, staging ведёт себя не так, как ожидалось, возник конфликт шаблонов или стало неясно, какой источник правды актуален. Шаблон помогает ограничить blast radius и не смешивать аварийный фикс с новыми улучшениями.

## Как использовать

Создайте файл в `docs/projects/<slug>/incident-<date>.md` или используйте его как секцию внутри recovery note. Перед началом фикса перепроверьте `docs/playbooks/recovery-protocol.md`, `docs/standards/task-contract.md` и, если инцидент затрагивает выпуск, `docs/playbooks/release-gates.md`.

## Шаблон

## 1. Инцидент

| Поле | Содержание |
|---|---|
| `slug_or_workstream` |  |
| `date` | YYYY-MM-DD |
| `symptom` | Что именно сломалось |
| `detected_in` | local / staging / production-facing preview |
| `reported_by` |  |

## 2. Проверка источника правды

| Вопрос | Ответ |
|---|---|
| Какой репозиторий и ветка подтверждены? |  |
| Какой эталонный файл или страница используются? |  |
| Какие docs считаются актуальными? |  |

## 3. Blast radius

| Что затронуто | Что не затронуто |
|---|---|
|  |  |

## 4. Минимальный fix scope

| Поле | Содержание |
|---|---|
| `files_to_touch` |  |
| `forbidden_expansions` |  |
| `validation_after_fix` |  |

## 5. Выполненные действия

| Шаг | Что сделано | Результат |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

## 6. Остаточный риск и follow-up

| Поле | Содержание |
|---|---|
| `residual_risk` |  |
| `follow_up_needed` |  |
| `handoff_note` |  |

## Связанные документы

- `docs/playbooks/recovery-protocol.md`
- `docs/playbooks/release-gates.md`
- `docs/standards/task-contract.md`
- `docs/templates/task-contract-template.md`
