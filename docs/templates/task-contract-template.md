# Task Contract Template

Этот шаблон предназначен для быстрого запуска задач в **landing-factory** без дрейфа scope и без опоры на память исполнителя. Его можно копировать в project-doc, issue, ADR-обсуждение или рабочий playbook.

## Как использовать

Сначала заполните все обязательные поля. Затем проверьте, что contract согласован с `docs/playbooks/agent-operating-model.md`, `docs/standards/task-contract.md` и, при выпуске, с `docs/playbooks/release-gates.md`.

## Шаблон

| Поле | Что заполнить |
|---|---|
| `slug_or_workstream` | Например: `offer801`, `docs-system`, `staging-release` |
| `mode` | `Audit`, `Specification`, `Implementation`, `Release` или `Recovery` |
| `scope` | Какие файлы, каталоги и слои разрешено менять |
| `source_of_truth` | Какие docs, standards, эталонные страницы и runtime-файлы являются опорой |
| `deliverable` | Какой устойчивый артефакт должен появиться |
| `validation` | Как будет проверяться результат |
| `exclusions` | Что явно нельзя менять |
| `handoff_note` | Что должен понять следующий исполнитель без обращения к чату |

## Быстрая проверка

| Вопрос | Да / Нет |
|---|---|
| Scope достаточно узкий и проверяемый? |  |
| Источник правды назван явно? |  |
| Результат можно увидеть в репозитории? |  |
| Есть понятная проверка результата? |  |
| Явно перечислено, что исключено из пакета? |  |

## Связанные документы

- `docs/standards/task-contract.md`
- `docs/playbooks/agent-operating-model.md`
- `docs/playbooks/release-gates.md`
