# Hero Fit Master Log

| slug | template | issue before | changes made | commit | live URL | result after deploy | status |
|---|---|---|---|---|---|---|---|
| **All 45 template pages** | offer801 / aesthetes / stay-but-grow / parental-capital | hero outer padding `36px 0 28px` + container `padding-top: clamp(72px,8vh,100px)` + `padding-bottom: clamp(48px,5vh,72px)` + `min-height: calc(100vh-64px)` = ~230px excess vertical space causing hero to overflow viewport | `landing745.css`: hero `padding: 0`; container `padding-top: clamp(40px,5vh,64px)`, `padding-bottom: clamp(32px,4vh,52px)`, `min-height: 100vh` | ad009c0 | all 45 URLs | hero fits 100vh, no next section visible | done |
| 745-kvartal | inline-745 | hero outer `padding: 48px 0` in inline `<style>` block; no container padding | Added `.hero745 { padding: 0 }` + `.hero745 > .container { padding-top: clamp(40px,5vh,64px); padding-bottom: clamp(32px,4vh,52px); min-height: 100vh }` | 9ae23c0 | https://devpartners.ru/745-kvartal/ | Live verified: `padding:0` + container rule confirmed in CSS | done |
| endemik-established | inline-745 | hero outer `padding: 48px 0` in inline `<style>` block; no container padding | Same fix as 745-kvartal | 9ae23c0 | https://devpartners.ru/endemik-established/ | Live verified: `padding:0` + container rule confirmed in CSS | done |
