# Skill 3 — Implementation Spec — ЖК «Эндемик»

Этот документ переводит утверждённый `landing_blueprint` в следующий слой работы: **структуру реализации лендинга**. Его задача — не перепридумать стратегию и не переписать тексты заново, а превратить уже согласованную коммуникацию в понятное техническое и дизайнерское ТЗ для сборки страницы.

Для проекта «Эндемик» Skill 3 должен удержать три вещи одновременно: выбранный сегмент **«Одинокие и состоявшиеся»**, утверждённую message strategy про **жизнь в своём ритме без чужого давления** и практическую пригодность для production-сборки лендинга.

## Роль документа в operating model

Этот draft должен использоваться не как изолированная заметка, а как project-doc уровня `Specification`, который затем становится входом для implementation- и release-пакета. Перед началом правок по этому документу исполнитель должен сверяться с `docs/playbooks/agent-operating-model.md`, `docs/standards/task-contract.md` и соответствующими шаблонами из `docs/templates/`.

## Task Contract

| Поле | Содержание |
|---|---|
| `slug_or_workstream` | `endemik-skill3` |
| `mode` | `Specification`, при переходе к сборке — `Implementation` |
| `scope` | Этот документ, связанный blueprint по `Эндемику`, implementation-spec артефакты и целевой staging-лендинг без расширения на другие офферы |
| `source_of_truth` | `endemik_landing_blueprint_final.md`, HTML-эталон 745, связанный operating model в `docs/`, а также проектные ограничения по staging-сборке |
| `deliverable` | Полная implementation specification для сборки сегментного лендинга по «Эндемику» |
| `validation` | Проверка полноты секционной спецификации, согласованности с blueprint, наличия conversion logic и handoff-ready структуры |
| `exclusions` | Не переписывать стратегию с нуля, не менять unrelated offer pages и не превращать spec в произвольный brainstorming |
| `handoff_note` | Следующий исполнитель должен понимать структуру 9 секций, дизайн-ограничения, asset requirements и conversion logic без обращения к чату |

## Source of Truth

| Артефакт | Роль |
|---|---|
| `endemik_landing_blueprint_final.md` | главный стратегический источник |
| HTML-эталон 745 | референс по логике драматургии и финального CTA-экрана |
| скрин текущего позиционирования ЖК | обязательный визуальный элемент в финальном блоке слева от формы |
| `docs/playbooks/agent-operating-model.md` | общий рабочий контур от specification до release |
| `docs/templates/task-contract-template.md` | шаблон минимального безопасного контракта задачи |

## Цель Skill 3

На выходе должен появиться документ, по которому можно собрать страницу без догадок со стороны дизайнера, копирайтера и верстальщика. Иными словами, Skill 3 отвечает за **операционализацию blueprint**.

## Предлагаемый формат выходного артефакта

| Раздел | Что фиксируем |
|---|---|
| **Page Architecture** | финальный порядок экранов и их задача |
| **Section Implementation Spec** | для каждого блока: контент, композиция, UI-элементы, визуальная логика |
| **Form and Conversion Logic** | как работают CTA, форма и сценарий конверсии |
| **Asset Mapping** | какие визуалы нужны по секциям |
| **Design System Guidance** | стилистические правила для интерфейса |
| **Responsive Notes** | как секции должны вести себя на mobile / tablet / desktop |
| **Build Constraints** | правила для Netlify, ассетов и дисциплины деплоя |
| **Handoff Notes** | что передать в дизайн и разработку без потерь смысла |

## Draft Page Architecture

| № | Секция | Функция | Тип экрана |
|---|---|---|---|
| 1 | Hero | первичное позиционирование и эмоционический вход | split hero / visual + copy |
| 2 | Trigger Continuation | узнавание напряжения сегмента | text-led narrative block |
| 3 | Meaning Block | объяснение, что продаётся не квартира, а способ жизни | editorial statement block |
| 4 | Response Cards | ответы проекта на три сильнейших барьера | 3-card grid |
| 5 | Self-Recognition | квалификация адресата | centered text block |
| 6 | Lifestyle Emphasis | атмосферное усиление образа жизни | immersive visual section |
| 7 | Rational Segmentation | рациональная таблица сценариев и форматов | table / comparison section |
| 8 | Consultation Path | объяснение следующего шага | process strip |
| 9 | Final CTA + Form | стратегическая встреча с застройщиком | split section with screenshot + form |

## Section-by-section implementation focus

Следующий исполнитель должен разворачивать этот draft не через свободную импровизацию, а через последовательную секционную спецификацию. Для каждой секции нужно явно зафиксировать цель блока, рекомендуемую длину текста, композиционный принцип, ключевой UI-элемент, обязательный visual asset и связь с общей narrative-логикой сегмента.

## Skill 3 Focus

В рамках Skill 3 важно уточнить уже не **что говорить**, а **как это должно быть собрано на экране**. Поэтому следующий шаг логично делать через подробную секционную спецификацию.

## Что нужно подготовить следующим действием

| Следующий слой | Что будет сделано |
|---|---|
| **Section-by-section implementation spec** | подробное описание каждого экрана: сетка, иерархия, типографика, длина текстов, CTA, визуалы |
| **Design notes** | правила атмосферы, ритма и поведения элементов |
| **Conversion mechanics** | логика формы для топ-менеджера застройщика |
| **Production constraints** | ограничения по ассетам и deploy-дисциплине |

## Release and handoff readiness

Если этот draft переходит в стадию фактической сборки, к нему должен быть добавлен release packet по шаблону `docs/templates/project-release-packet-template.md`. Если в процессе staging-сборки возникнет конфликт между blueprint, фактической страницей и эталоном 745, фикс должен идти через `docs/playbooks/recovery-protocol.md` с отдельным incident note.

## Итоговый стартовый вывод

Skill 3 для «Эндемика» можно запускать сразу. Стратегическая основа уже зафиксирована, финальный CTA скорректирован под топ-менеджера застройщика, а значит следующий рациональный шаг — собрать **implementation spec по всем 9 секциям** и затем перевести его в production-ready handoff.
