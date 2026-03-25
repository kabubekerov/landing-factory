# Hero Fit Notes

| slug | note |
|---|---|
| All template pages | Single CSS file `landing745.css` controls all 45 template-based pages. One change = all pages fixed simultaneously. |
| 745-kvartal | Inline `<style>` block (lines 439–1377). Does not import `landing745.css`. Fix applied directly in `.astro` file. |
| endemik-established | Same inline pattern as 745-kvartal. Fix applied directly in `.astro` file. |
| Mobile breakpoints | `@media (max-width: 820px)` sets `.hero745 { padding: 80px 0 }` — intentional, not changed. `@media (max-width: 560px)` sets `min-height: 100svh` — correct for mobile. |
| Right card height | `.hero745__card--floating { transform: translateY(20px) }` — if a specific page has a very tall right card, it may still push hero height. Monitor per-page if reported. |
| Future pages | All new pages using templates will inherit the fixed CSS automatically. Custom inline pages must follow the same pattern: `padding:0` on `.hero745` + container rule. |
