# Clearline

**An official Forumulate course template.** Modelled on: A corporate learning platform’s compliance course.

A corporate compliance refresher: a calm teal landing with a countdown to the enrolment deadline, lessons that open in order, true/false and short-answer checks, a timed assessment drawn from a question bank, and a minimal certificate with an expiry date and a QR code.

## What applying it creates

- **The look** — `bundle.json`: a calm teal palette and the `minimal-text` look, with a countdown to the enrolment deadline, a sticky start button on phones, a dimmed padlock for lessons not open yet, quizzes shown one question at a time on tiles, and a minimal certificate with a QR code, an expiry date, the learner’s score and the course’s hours.
- **The landing** — hero, outcomes, outline, instructor and FAQ bands (`frontPage` in `template.json`).
- **The course** — 2 modules with banners and descriptions, 7 lessons (one hidden from the outline, one linking out to the handbook, one wide lesson with keywords, one with a subtitle and a badge).
- **Quizzes** — a true/false and multi-select check with partial credit, a short-answer check, and a timed final assessment drawing 4 of 6 questions.
- **Enrolment** — lessons in order, one lesson released a day after the learner starts, enrolment closing 45 days after you apply, a year of access, completion requiring every quiz, a certificate valid for 12 months.
- **A learning path** — joins (or creates) “Annual compliance”, which has its own page at `…/path/annual-compliance`.

The sample lessons are examples: rewrite them before you share the course. Zero custom CSS — every detail is a theme setting or course data. Screenshots are taken from production on the next capture run (`scripts/capture-template-shots.mjs`); the picker thumbnail is a drawn placeholder until then.
