# Portfolio site: spec

Status: agreed 2026-11-25, after a section-by-section review of every page's copy. Terms follow [GLOSSARY.md](../GLOSSARY.md). Hosting is decided in [ADR 0001](adr/0001-host-on-netlify.md).

## Problem Statement

Gokul is a software engineer at JPMorgan Chase in Mumbai. He wants one place on the web that does two jobs:

1. Shows **Recruiters** proof of his work, and gets them to his résumé.
2. Turns **Prospects** he reaches through **Outreach** into **Leads** for freelance work.

Today he has only a résumé PDF and a GitHub profile. Neither one tells the story of what he built, and neither gives a Prospect an easy way to get in touch.

Constraints:
- He has no budget and won't buy a domain.
- Most portfolio sites look templated or machine-written. His must look and read like a person made it, in simple, plain words, and still look impressive without overstating anything.
- It must never show private details: his phone number, or internal JPMorgan system or team names.
- Every fact must be true: it comes from his résumé or from Gokul directly, never from inference.

## Solution

A small static site at `gokulramanan.netlify.app` in the "Margin notes" design:
- graph-paper background
- a reading column with short handwritten-style notes in the margin
- hand-drawn sketches
- a yellow highlighter on a few key phrases

**Pages:**
- **Homepage:** says in one line what Gokul builds and who uses it, then offers two paths. The **Hiring path** leads to the résumé, and the second path leads to the contact form.
- **Case studies:** three of them, each telling the story of one piece of work.
- **Notes:** short write-ups.
- **About** and a **Résumé** page with a PDF download.
- **Contact:** a form that emails Gokul through Netlify Forms.

Every Case study and Note works as a page someone can be sent straight to from Outreach. Search traffic is a bonus.

**Launch:** the site launches without the freelance pieces. They ship later, in one change (see Launch differences).

## User Stories

### Recruiter

1. As a Recruiter, I want one sentence at the top of the homepage that says what Gokul builds and for whom, so that I can tell in seconds whether he fits the role.
2. As a Recruiter, I want to see his current role, employer and city above that sentence, so that I don't have to look for them.
3. As a Recruiter, I want to reach the résumé in one click from the homepage, so that the Hiring path is short.
4. As a Recruiter, I want to download the résumé as a PDF, so that I can attach it to a hiring pack.
5. As a Recruiter, I want to read the résumé as a web page on my phone, so that I don't need to open a file.
6. As a Recruiter, I want each Case study to tell me the problem, what he built, the result and how he worked, so that I can judge his thinking as well as his output.
7. As a Recruiter, I want concrete results with numbers in each Case study, so that I can compare him with other candidates.
8. As a Recruiter, I want each Case study to show his role and the year, so that I know what he owned.
9. As a Recruiter, I want a "Built with" line on each Case study, so that I can match his skills to the job description.
10. As a Recruiter, I want an honest description of his skills (backend), so that the interview matches what the site says.
11. As a Recruiter, I want to know he works with AI coding tools, so that I can see he uses current practice.
12. As a Recruiter, I want to move from one Case study straight to the next, so that I can keep reading without going back.
13. As a Recruiter, I want to choose "A job" on the contact form, so that Gokul knows what my message is about.
14. As a Recruiter, I want his email address as plain text I can copy, so that I can write from my own mail client.
15. As a Recruiter, I want LinkedIn and GitHub links on every page, so that I can check his background anywhere I land.
16. As a Recruiter, I want to see his local time, so that I know when to expect a reply.
17. As a Recruiter, I want a list of the tools he works with on the About page, so that I can match it against the job description quickly.

### Prospect

18. As a Prospect reached through Outreach, I want the page I was sent to make sense on its own, so that I don't need to start from the homepage.
19. As a Prospect, I want each finance term (BWIC, RFQ, ISIN) explained the first time it appears, so that I understand what he did even if I don't work in finance.
20. As a Prospect, I want to see that he builds fast, reliable systems, so that I trust him with my product.
21. As a Prospect, I want to send a message without leaving the site, so that getting in touch takes one minute.
22. As a Prospect, I want the form to tell me about one problem at a time, in plain words, so that I can fix it quickly.
23. As a Prospect, I want a clear confirmation after sending, so that I know the message arrived.
24. As a Prospect, I want to be told plainly if my message failed, with his email shown, so that I can still reach him.
25. As a Prospect (after the freelance pieces ship), I want to choose "A project" on the contact form, so that Gokul knows I want to hire him for work.

### Gokul

26. As Gokul, I want each Lead to record which Outreach brought it, so that I can see which messages work.
27. As Gokul, I want each message to arrive in my Gmail with Reply-To set to the sender, so that I can answer with one click.
28. As Gokul, I want spam filtered out, so that my inbox only holds real messages.
29. As Gokul, I want to add a Case study or Note by adding one content file, with its Margin notes in the same file, so that writing never means editing a component.
30. As Gokul, I want each Note labelled Engineering or Personal, with the Personal label shown only once the first Personal Note exists, so that the Notes page never shows an empty category.
31. As Gokul, I want every fact on the site to come from my résumé or from me, so that nothing goes live that I haven't confirmed.
32. As Gokul, I want hosting to cost nothing and stay inside the free plan's credits, so that the site never pauses.
33. As Gokul, I want to preview every change on a branch deploy before it reaches production, so that production deploys only happen for approved changes.
34. As Gokul, I want the freelance pieces to ship later as one change, so that the launch doesn't wait for them.
35. As Gokul, I want the site never to show my phone number or internal JPMorgan names, so that nothing private leaks.
36. As Gokul, I want to know roughly how many people visit, without cookies or a cookie banner, so that I can see whether Outreach works.
37. As Gokul, I want the About page to have a photo slot that stays hidden until I provide a photo, so that adding one later is a small change.
38. As Gokul, I want my GitHub profile README to link to the site, so that people who find me on GitHub find the site too.

### Any visitor

39. As a visitor, I want the site to follow my light or dark setting, so that it's comfortable to read.
40. As a visitor on a 360px-wide phone, I want every page to fit with no sideways scrolling, so that I can read it one-handed.
41. As a visitor using a keyboard, I want a visible focus state on every link and control, so that I always know where I am.
42. As a visitor using a screen reader, I want each sketch described in words, so that I get the same information.
43. As a visitor, I want pages to load fast, with no requests to third-party font services, so that the site feels quick and private.
44. As a visitor who follows a broken link, I want a short 404 page that links home, so that I'm not stuck.
45. As a visitor without JavaScript, I want every page to still read correctly, so that nothing important depends on a script.

## Implementation Decisions

### Pages

**Header**, on every page:
- the name "Gokul Ramanan" in the handwriting face, linking home
- **Work · Notes · About · Résumé**, with the current section marked
- a **Get in touch** button that links to the contact page

| Route | What it is |
|---|---|
| `/` | Homepage. Sections in order: hero with the two paths; the featured Case study with its Sketch; the other two Case studies; the Notes list; Also at JPMorgan Chase; Personal projects; footer. |
| `/work` | Eyebrow "Work", title "My work", intro "Three projects from my time at JPMorgan Chase. Each one covers the problem, what I built, the result and how I worked." and Margin note "Each one is a short read." Then each Case study with its label and the same summary and Margin note as the homepage, then Also at JPMorgan Chase and Personal projects. |
| `/work/<slug>` | One Case study. |
| `/notes` | All Notes, newest first. Each shows its date, label, title and one-line summary. |
| `/notes/<slug>` | One Note, in the same reading-column-plus-margin layout. |
| `/about` | About page: intro, How I got here, Tools I work with, Outside work, then both paths. No photo yet; the photo slot stays hidden until one exists. |
| `/resume` | The résumé as a web page, plus a PDF download. |
| `/contact` | The contact form. The footer heading is hidden on this page, because the page already says "Say hello." |
| 404 | "This page isn't here." with a link home. |

**Footer**, on every page:
- the heading "Say hello." (no reply-time promise anywhere on the site)
- the email address as selectable text
- links to LinkedIn, GitHub and the Résumé PDF
- "It's ‹time› here in Mumbai."
- the colophon "Built with Astro, hosted on Netlify. © ‹year› Gokul Ramanan."
- later, once freelance is on, the colophon starts with "I also take on freelance projects."

### Voice and wording

These rules apply to every page except the web Résumé. Its rules are under Other pages.

- **Plain wording.** Say plainly what was built and what happened. One idea per sentence, mostly under 20 words. Use everyday words, plus standard engineering terms where they are true (latency, throughput, concurrency, failover, leader election, root-cause analysis).
- **No figurative language.** No metaphors, wordplay, punchlines or teaser lines. Rejected examples: "the part they never see", "behind the scenes", "the plumbing", "the unglamorous stuff", "Scary symptom, boring cause".
- **Tone.** Friendly first person. Contractions are fine. No jokes that need a second read.
- **Résumé facts, site wording.** Every fact comes from the résumé or from Gokul directly. Nothing is inferred. The sentences are written for the site, never lifted from the résumé.
- **Who uses the work.** Write **"internal sales teams and external clients"** the first time a page mentions them, then "sales teams and clients". Never "traders" (see the glossary entry Sales teams and clients).
- **How Gokul is described.** A backend engineer. React is not headlined. Never "full-stack".
- **Keywords**, used only where true:
  - the list: real-time systems, live data streaming, low latency, concurrency, high availability, leader election, automatic failover, Java, Spring Boot, Spring WebFlux, Kubernetes, root-cause analysis, AI-assisted development
  - placement: one in the homepage headline, two or three in the homepage intro, one in each Case study title or intro, and the rest in "Built with" lines
  - no keyword stuffing
- **Numbers.**
  - Results with numbers appear only in a Case study's "The result" section, each number once, in a full sentence, and in the Also at JPMorgan Chase and Personal projects entries.
  - The homepage headline and intro, Margin notes and Note titles contain no numbers at all.
- **Margin notes.**
  - At most one per section, and a section may have none.
  - Each is a plain fact about the work or a plain personal detail. Never a quip and never a statistic.
- **AI.** Mention it in exactly three places: the homepage intro, the alerts Case study's "How I worked" section, and the About page's "Outside work". Never mention training sessions, except on the web Résumé.
- **No internal names or jargon.** No internal JPMorgan system or team names anywhere on the site. "BWIC" is allowed, explained as "bond auction" once per page (see the glossary entry BWIC). No other finance jargon without a plain explanation.

**Homepage wording (agreed so far; the section-by-section review continues):**
- **Eyebrow:** "Software engineer at JPMorgan Chase · Mumbai"
- **Headline:** "I build ==real-time systems== for internal sales teams and external clients." (`==…==` marks the highlighter.)
- **Intro:** "I'm a backend engineer. I work on live data streaming and alerting, with a focus on low latency and high availability: apps that respond fast and keep running when something fails. I use AI coding tools to assist with my daily workflows."
- **Margin notes:**
  - beside the headline, with a hand-drawn arrow: "Mostly backend work, in Java and Spring Boot."
  - beside the intro: "Weekdays: code. Weekends: football. Most evenings: the gym."
- **Paths:** "Hiring? / Here's my résumé →" and, at launch, "Want to talk? / Say hello →".
- **Featured Case study** ("Building a BWIC alert system from scratch"):
  - "Sales teams and clients get alerts about BWICs, which are bond auctions. I was the server lead for a new alert service, and I designed and launched it from scratch."
  - "It's a rule engine that checks each alert separately over AMPS, a messaging engine. It supports nested AND/OR filters. It uses leader election, so if the leader fails, another instance takes over automatically."
  - Margin note: "I was the server lead on this one."
- **RFQ and trade platform** ("Redesigning a live bond data platform"):
  - "This platform streams RFQs (requests for quote) and trades, so sales teams and clients have the relevant bond data before they act. I redesigned it. Data now reaches them with much lower latency, the platform handles far more volume, and the rollout had no downtime."
  - No Margin note.
- **Alert defects** ("Fixing BWIC alerts in production"):
  - "I led the root-cause analysis of a production bug in our BWIC alert service: people were getting repeated notifications for the same alert. The cause was in how a standby took over as leader. I fixed it, and the extra subscriptions closed on their own."
  - Margin note: "I found this bug in a service I'd built myself."

All other copy is in the reference prototype (see Further Notes).

### Case studies

Every Case study page has the same parts, in this order:
1. **Top:** a label (Case study · year · role), the title and a short intro.
2. **The problem.**
3. **What I built**, which includes a Sketch.
4. **The result.** The key result is highlighted.
5. **How I worked**, ending with a **Built with** line.
6. A **Next story** link.

| Slug | Title | Story | Built with | Status |
|---|---|---|---|---|
| `alerts` | Building a BWIC alert system from scratch (label: Case study · 2026 · Server lead) | The new alert service, with Gokul as server lead. Includes leader election with automatic takeover. The old service isn't mentioned. | Java, Spring Boot, AMPS, GitHub Copilot | Copy agreed |
| `bond-data-platform` | Redesigning a live bond data platform (label: Case study · 2025 · Led the redesign) | The platform that streams RFQs and trades to sales teams and clients (redesigned in 2025). | Java, Spring Boot, Spring WebFlux, AMPS | Copy agreed |
| `alert-defects` | Fixing BWIC alerts in production (label: Case study · 2026 · Led the root-cause analysis) | Root-cause analysis of repeated notifications in the new BWIC alert service, caused by the evaluation batch carrying over when a standby took over as leader. The daily feed outage is separate work, listed under Also at JPMorgan Chase. | Java, Spring Boot, AMPS, Splunk, Kubernetes | Copy agreed |

**Case study order**, everywhere (homepage, Work page, Next story links): alerts, bond-data-platform, alert-defects; the last links back to the first.

**Alerts Case study wording (agreed):**
- **Top:** "Internal sales teams and external clients get alerts about BWICs, which are bond auctions. I was the server lead for a new alert service, which I designed and launched from scratch." No Margin note.
- **The problem:** "Sales teams and clients rely on alerts to follow BWICs, so notification latency matters. An alert is only useful if it arrives quickly. The service needed lower latency, and it needed to evaluate far more alerts concurrently." No Margin note. Throughput is not mentioned, because the résumé gives no figure.
- **What I built:** "The service is a rule engine. It evaluates each alert separately, over AMPS, a messaging engine, so one complex alert can't slow down the rest." / "Alerts support nested AND/OR filters, so a single alert can combine many conditions." / "Alerts are evaluated in 30-second batch cycles. If several BWICs match an alert within one cycle, the user gets a single notification for all of them, not one per match. That keeps notifications useful instead of noisy." / "The service runs as several instances and uses leader election. If the leader fails, another instance takes over automatically, so the service stays highly available." No Margin note.
  - Sketch labels: "BWIC data, over AMPS" → "Rule engine (leader): evaluates alerts every 30 seconds" → "eTrading platform screens", with a dashed "Standby instance: takes over if the leader fails". Caption: "A rough sketch of how it fits together."
- **The result:** "Within each cycle, notifications now go out with ==33% lower latency==. The engine also handles 2,000 concurrent alerts, four times what it could before." The 33% is the time from a cycle running to the notification reaching the user. No CMO sentence.
- **How I worked:** "As server lead, I architected the service and took it through to launch. I built it with agentic AI-assisted development, using GitHub Copilot agents with custom instructions and skills." Built with: Java · Spring Boot · AMPS · GitHub Copilot. No Margin note.

**Bond data platform Case study wording (agreed):**
- **Top:** "This real-time streaming platform sends RFQs (requests for quote) and trades to internal sales teams and external clients, so they have the relevant bond data before they act. I redesigned it, and it now has much lower latency and handles far more volume." No Margin note.
- **The problem:** "Sales teams and clients use this data to decide what to do next, so it has to be current. The platform needed lower latency, and it needed to handle much higher volumes of RFQs and trades." No Margin note.
- **What I built:** "I rebuilt the data flow with reactive programming in Java, so RFQs and trades stream through the platform as they arrive." / "People can filter by several fields, such as trader, client or bond (by ISIN), and pick more than one value in each. The platform then shows the union of the data for everything they picked." / "A visibility policy decides what each person can see. For example, a salesperson can see data for all the clients they cover. The platform applies it as an intersection, so a view only ever contains data that person is allowed to see." / "Using set operations for both kept filtering efficient at high volume." No Margin note.
  - Sketch labels: "RFQs and trades" → "Reactive pipeline" (pen notes "union: everything you picked" and "intersection: what you're allowed to see") → "Sales and client screens". Caption: "A rough sketch of how it fits together."
- **The result:** "Users now get data with ==75% lower latency==, and the platform handles 10 times the volume it did before. The production rollout had zero downtime." No Margin note.
- **How I worked:** "I led the redesign, working with other engineers on the team. Before the rollout, we tested it end to end in our test environments. Then we moved users over in stages, after A/B testing. That's how we kept the rollout at zero downtime." Built with: Java · Spring Boot · Spring WebFlux · AMPS. Margin note: "I wrote a Note on the filtering: Filtering live bond data with union and intersection."
- **Next story:** "Fixing BWIC alerts in production →".
  - Facts from Gokul: the redesign was in 2025; the reactive library was Spring WebFlux; the résumé figures are confirmed (75% lower user latency, 10x the volume, zero downtime during the production rollout).

**Alert defects Case study wording (agreed):**
- **Top:** "Internal sales teams and external clients rely on BWIC alerts. In production, our alert service started sending repeated notifications for the same alert. It was a top-priority issue, and I led the root-cause analysis." No Margin note.
- **The problem:** "Sales teams and clients rely on alerts to follow BWICs. They were getting several notifications for the same alert, by email and in their feed, even when bonds were updating less often. It was rated top priority, so it needed to be found and fixed quickly." No Margin note.
- **What I fixed** (this page's heading instead of "What I built"): "I traced it with Splunk logs, AMPS health queries and the number of active subscriptions per alert. Then I matched the AMPS topic that holds every user's alert subscriptions against the alerts that were actually firing." / "That showed where the duplicate and dormant subscriptions came from. When a standby pod took over as leader, the last 30-second evaluation batch carried over, so the alerts in that cycle fired twice. Each takeover left extra subscriptions behind." / "I fixed the root cause in how the takeover handled the evaluation batch. I didn't delete any subscriptions by hand. Once the cause was fixed, the dormant ones closed in AMPS on their own."
- **The result:** "Active subscriptions fell from ==2,172 to 45==, a 98% drop, and alerting was back to normal. Each alert now sends one notification per cycle again." No Margin note.
- **How I worked:** "I led the root-cause analysis. Deleting the extra subscriptions would only have hidden the problem, so I looked for why they were being created. Once we fixed that, they stopped piling up." Margin note: "I wrote a Note on how we found it: Why our alerts fired twice after a failover."
- Built with: Java · Spring Boot · AMPS · Splunk · Kubernetes.
- **Next story:** "Building a BWIC alert system from scratch →".
- Sketch labels: "Leader pod (fails)" crossed out → "Standby pod takes over" (pen note on the arrow: "last 30-second batch carried over") → "Same alert fires twice"; pen note underneath: "after the fix: one notification per cycle". Caption: "How a takeover made alerts fire twice."

**Facts.** Every sentence in the Case studies and Notes was confirmed by Gokul in the copy review. There are no review markers.

### Notes

- Notes page intro: "Short write-ups of things I've learned at work, and now and then something that isn't about work."
- Two Engineering Notes at launch, written from Gokul's answers (the earlier drafts are dropped):
  - **Why our alerts fired twice after a failover** (`alerts-fired-twice`): "What happened when a standby took over, and how we found it." About the alert defects Case study.
    - **What we saw:** "People were getting the same alert more than once, by email and in their feed. It happened even when there weren't many bond updates. It was a top-priority issue, and I led the investigation."
    - **How we tracked it down:** "The Splunk logs came first, then AMPS: its health, and the number of active subscriptions on each alert. A few alerts had far more than they should have." / "The real clue came from comparing two lists: every alert subscription in the AMPS topic, and the alerts that were actually firing. The gap between them showed the duplicates and the dormant ones."
    - **The cause:** "The alert service runs with a leader pod and a standby pod. When the leader failed, the standby took over, but it carried over the last 30-second evaluation batch. So the alerts in that batch fired again, and each takeover left extra subscriptions behind."
    - **The fix:** "We changed the failover so that alerts that had already fired were closed properly instead of being carried over. After that, the duplicate subscriptions stopped showing up in the AMPS alerts topic." / "Now each alert sends at most one notification per 30-second cycle, and only if a BWIC matches it. A recurring alert just moves on to the next cycle."
  - **Filtering live bond data with union and intersection** (`union-and-intersection`): "How multi-select filters and a visibility policy became two set operations." About the bond data platform (2025).
    - **The setup:** "Sales teams and clients use this platform to watch RFQs and trades as they come in. The data streams through with Spring WebFlux, and the screen lets people filter it by trader, client or bond (ISIN)."
    - **Picking more than one value:** "Every filter allows multi-select. Pick two traders, or three clients, and the screen shows everything for all of them. That's a union: the data for each value, merged into one view."
    - **Showing only what you're allowed to see:** "Not everyone can see everything. A salesperson sees data for the clients they cover, and nothing else. That's an intersection: of everything the filters picked, only the part that overlaps with what the visibility policy allows."
    - **Why sets worked well:** "Thinking of both as set operations kept the filtering simple and fast, even as the volume grew to ten times what it was before."
- The homepage Notes section shows these titles and descriptions, the "All notes" link and no Margin note.
- Each Note links to its Case study, and each Case study links back to its Note from the "How I worked" Margin note.
- Personal Notes are written only by Gokul.

### Other pages

- **Also at JPMorgan Chase.** Short entries, numbers allowed:
  - **Moving to Kubernetes:** "Migrated the BWIC eTrading platform from legacy virtual machines to Kubernetes. Infrastructure cost fell by 75%, with zero production incidents during the rollout."
  - **Security work:** "Migrated ten microservices from X.509 certificates to Kerberos, which ended manual certificate management. Also automated security scans in build pipelines across more than 30 repositories."
  - **New asset class:** "Delivered CMO Cash (fixed- and floating-rate bond BWICs) end to end as the platform's third asset class: live streams, the bidding workflow, AMPS publishing and alert evaluation."
  - **Daily feed outage:** "Ended a recurring daily outage in the eTrading feed, caused by direct-memory exhaustion, silent WebSocket reconnects and lost logs. Production incidents dropped sharply."
  - Build tools are not named in these entries. Jenkins appears in the About page's tools list and the Résumé page's tools list.
- **Personal projects.** Short entries, kept apart from the JPMorgan Chase work:
  - **Super Saviours:** "A real-time emergency response app that uses Google Maps and Places. Our team won UHack 2022 (University of Quebec, Canada) with it." Links to its Devpost page for now, and to its GitHub repo once Gokul confirms the repo is ready to link.
  - **Fuel Route Planner** (links to its GitHub repo): "A Django API. Give it two places in the US, and it returns the route, the cheapest fuel stops and the total fuel cost."
  - Margin note: "More of my projects are on GitHub."
- **About:**
  - **Top:** eyebrow "About", title "Hi, I'm Gokul.", intro "I'm a backend engineer at JPMorgan Chase in Mumbai. I build real-time systems for internal sales teams and external clients." No Margin note. The photo slot stays hidden until there is a photo.
  - **How I got here:** "I joined JPMorgan Chase as an intern in February 2023, during my last semester of a B.Tech in Information Technology at Sardar Patel Institute of Technology. I worked on FX tools and live bond data first, and on BWIC eTrading and alerts since 2026." / "I've also been a subject-matter expert at the Code for Good hackathon, helping teams with technical problems."
  - **Tools I work with** (between "How I got here" and "Outside work", styled like the Résumé skills list, no Margin note): Languages: Java, Python, C/C++ · Backend: Spring Boot, Spring WebFlux, Spring Security · Messaging and streaming: AMPS, WebSockets · Databases: MySQL, Cassandra, Elasticsearch, MongoDB · Infrastructure: Docker, Kubernetes, Jenkins · Monitoring: Splunk, Dynatrace, Grafana · Testing: JUnit, JMeter · AI: GitHub Copilot, MCP, custom instructions, skills and agents · Also used: React, Django.
  - **Outside work:** "I code outside work too, mostly side projects. You'll find them on my GitHub. Weekends are for football, and most evenings end at the gym. I also like keeping up with what's new in AI."
  - Ends with both paths.
- **Résumé:**
  - The résumé's content in résumé style. The voice rules don't apply, so numbers and technical terms stay.
  - Internal names are replaced with plain descriptions, and team names are dropped.
  - The TBA BWIC grid (4–5 updates a second, batched streaming in place of a 200 KB snapshot, no column lag, higher adoption) appears only here, as its own bullet and without its internal name. It is a separate widget, not part of the eTrading platform or the bond data platform.
  - "bond traders" becomes "internal sales teams and external clients".
  - Contact details are email, LinkedIn and GitHub only. No phone number, on the page or in the PDF.
- **Contact:**
  - Launch intro: "Hiring, or want to talk about real-time systems? Write to me here, and it comes straight to my inbox."
  - Later intro: "Hiring, building something, or want to talk about real-time systems? Write to me here, and it comes straight to my inbox."
  - Labels: "Your name", "Your email", "What's this about?" with "A job" and "Something else" (plus "A project" later), "Your message", button "Send it".
  - Margin note: "Prefer email? Write to ‹email›" and "It's ‹time› here, so I'm probably around." (before 07:00 Mumbai time: "so I'm probably asleep").

### Visual design

- **Layout:**
  - graph-paper background on a 26px grid
  - a reading column of at most 40rem, with a 15rem margin column beside it
  - below 900px, Margin notes drop under their text and get a pen-coloured rule on the left; empty Margin notes take no space
- **Colour tokens.** The theme follows `prefers-color-scheme`.

  | Token | Light | Dark |
  |---|---|---|
  | `paper` | `#f6f7f5` | `#15181b` |
  | `grid` | `#e2e7e6` | `#20262a` |
  | `ink` | `#22272b` | `#e1e5e7` |
  | `muted` | `#5d656b` | `#99a2a8` |
  | `pen` | `#2346c4` | `#8eb0ff` |
  | `mark` | `#ffe46b` | `#6a5b10` |
  | `wash` | `#eef1fb` | `#1b2232` |
  | `err` | `#b3261e` | `#ff8a80` |

- **Type:**
  - **Literata** for text and headings
  - **Kalam** for the name, Margin notes and Sketch labels
  - **IBM Plex Mono** for eyebrows, form labels, the email address and "Built with" labels
  - all three self-hosted as woff2, so no request goes to Google
- **Hand-drawn touches:**
  - Buttons, paths, tags and the textarea use the asymmetric "hand-drawn" border radius.
  - **The yellow highlighter marks only** the homepage headline keyword, and one key result in each Case study's "The result" section.
- **Sketches:**
  - drawn with roughjs **at build time** into static inline SVG, with fixed seeds so every build draws them the same
  - strokes use `currentColor`, and annotations are in pen colour
  - each has an `aria-label` that describes it in words
  - visitors get no JavaScript for them
  - box labels are the agreed labels listed with each Case study
- **Never:** purple or blue gradients, frosted-glass effects, emoji section markers, a typing effect, skill-percentage bars, walls of logos, or animation for its own sake.
- **Accessibility:**
  - a visible focus state
  - labelled form controls
  - text contrast that reads in both themes
  - no horizontal scrolling at 360px

### Behaviour

- **Mumbai clock:**
  - shows the current Asia/Kolkata time as, for example, "9:46 am", updating every 20 seconds
  - before 07:00 the contact Margin note says "so I'm probably asleep", otherwise "so I'm probably around"
  - without JavaScript it shows "Mumbai (IST)" (see the open question on the footer sentence)
- **Contact form (Netlify Forms):**
  - **Fields:** name; email; "What's this about?" (at launch: A job · Something else); message; a hidden `via` field; a honeypot field.
    - The email field is named `email` so that Netlify sets Reply-To to the sender (*verified* against Netlify's docs).
  - **Validation** checks fields in order and shows only the first problem:
    1. "Add your name so I know who I'm replying to."
    2. "Add your email so I can reply."
    3. "That email address looks incomplete. Check it and try again."
    4. "Pick what this is about."
    5. "Write a line or two about what you need."
  - **On success:** "Thanks, it's on its way." and "I'll reply by email."
  - **On failure:** "That didn't send." and "Something went wrong on my side. Your message is still here, so you can copy it and email me directly: ‹email›". The message stays in the form. Never fail silently.
  - **Submission:**
    - The form is in the static HTML so that Netlify detects it.
    - It's submitted with `fetch`, and Netlify's spam filter stays on.
    - *Assumed:* the exact markup and submit details. Verify them against Netlify's docs in the contact ticket.
  - **Notifications** go to Gokul's Gmail.
- **Outreach tags:**
  - When any URL carries `?via=<tag>`, the tag is checked and stored for the visit in session storage.
  - It's sent in the form's `via` field, so each Lead records which Outreach brought it.
- **Analytics:**
  - The Cloudflare Web Analytics script only, with no cookies and no banner.
  - *Assumed* free and cookieless. Verify before adding.

### Modules

Logic is kept apart from pages and I/O. Each module is small at the interface and tested on its own.

| Module | Takes | Returns |
|---|---|---|
| Sketch | a sketch description: boxes, arrows, lines and labels with positions, plus a seed | static SVG markup; the same input always gives the same output |
| Mumbai time | a moment in time | the Mumbai time as text, and whether Gokul is probably awake |
| Contact form | the submitted values | the first problem's message, or OK |
| Outreach tag | a URL | a valid tag, or none |

### Content, technology and hosting

- **Content:**
  - Case studies and Notes are files in the repo, with their Margin notes inside them.
  - The format is chosen in the content ticket, with no new dependencies.
- **Technology:**
  - Astro 7.4.12 with static output, TypeScript and hand-written CSS.
  - Approved dependencies: `astro` 7.4.12, `roughjs` 4.6.6, and dev dependencies `@astrojs/check` and `typescript`.
  - There is no linter. Ask before adding anything else, including MDX.
- **Hosting** (ADR 0001):
  - Netlify free plan at `gokulramanan.netlify.app`.
  - Work happens on branch deploys, which are free.
  - A production deploy happens only for a change Gokul approves, since each one costs 15 of the 300 monthly credits.
  - Pages stay light.
- **Repo:** a public GitHub repo under `gokul5102`.

### Launch differences

The freelance pieces ship later, in one separate change. Until then:

| Where | At launch | Later |
|---|---|---|
| Homepage and About second path | "Want to talk?" / **Say hello →** | "Building something?" / **Tell me about it →** |
| Footer | no freelance line | "I also take on freelance projects." |
| Contact "What's this about?" | A job · Something else | A job · A project · Something else |
| Contact intro | "Hiring, or want to talk about real-time systems? …" | "Hiring, building something, or want to talk about real-time systems? …" |

## Testing Decisions

**A good test:**
- states, as a sentence, what a visitor or caller can observe
- goes through the public interface only, so it survives a refactor that keeps the behaviour
- is written first and seen failing for the expected reason
- covers the normal case plus the edges likely to break: empty, boundary, invalid input and the failure path
- is deterministic: no real clock, no randomness and no network

**Seams.** There are two, the fewest that cover the behaviour. Gokul confirmed them on 2026-11-25.

1. **The built site (the highest seam).** Tests run a production build once and read the generated pages. They check what every visitor gets:
   - every route in the Pages table exists, and every internal link resolves
   - no phone number, internal JPMorgan name or "full-stack" appears anywhere, and "traders" appears only in the union-and-intersection Note, where it names a filter field (the web Résumé is checked against its own rules)
   - the contact form markup has the field names, the form name Netlify needs to detect it, and the honeypot
   - each Sketch is inline SVG with an `aria-label`, and no page loads fonts from Google
2. **The logic modules, through their public functions.** This is for logic that runs in the browser or at build time, which page output can't show:
   - **Mumbai time:** fixed moments in time, including 06:59, 07:00, midnight and noon.
   - **Contact form:** each message in order; whitespace-only values; an email with no dot after the "@"; all fields valid.
   - **Outreach tag:** a valid tag; uppercase; too long; empty; symbols; no tag at all.
   - **Sketch:** the same description twice gives identical SVG; a changed seed gives different SVG.

**Runner and prior art:**
- The runner is Node's built-in test runner on TypeScript test files in an ES-module package. This was *verified* on Node 24.22 in a scratch run for this project.
- The repo has no tests yet, so there's no prior art. The reference prototype encodes the validation order and messages.

**Done, for every ticket:**
- The new tests and the full suite pass.
- `astro check` and `astro build` pass.
- The diff has been re-read.
- Screenshots exist in light mode, dark mode and at phone width.

## Out of Scope

- Services or pricing pages, and booking links.
- A database, a CMS, or comments.
- Google Analytics, or any cookie banner.
- A custom domain.
- A photo, until Gokul provides one.
- The freelance pieces at launch.
- A linter, and MDX unless Gokul approves it.
- Personal Notes written by anyone except Gokul.

## Further Notes

**Reference design:**
- The approved design is the full-site prototype, round 3 (2026-11-25). It has every page in the Pages table with the agreed wording, and the launch copy by default.
- Once the repo exists, it lives on the throwaway branch `prototype/homepage`, never on `main`, with the earlier rounds beside it.
- Rewrite its code properly. Don't copy it.

**Open questions (ask when the ticket starts):**
1. **Résumé PDF source:** Gokul exports a public version from his own source, or the PDF is generated from the web Résumé with headless Chrome. Ticket 11.
2. **Content format,** with no new dependencies. Ticket 05.
3. **Outreach tag format.** The prototype accepts lowercase letters, digits and hyphens, up to 40 characters, and a newer valid tag replaces an older one. Ticket 12.
4. **Clock without JavaScript.** The footer would read "It's Mumbai (IST) here in Mumbai." The proposal is that the fallback replaces the whole sentence. Ticket 03.
5. **Sketches at phone width.** The labels shrink to about 8px. The proposal is a narrower layout of each Sketch for phones. Ticket 04.
6. **Super Saviours link.** It points to Devpost until Gokul says the GitHub repo is ready to link; then it points to the repo. Ticket 09.
7. **Alerts Sketch and email.** The Sketch shows alerts going to "eTrading platform screens", but alerts also arrive by email. Confirm whether the label should mention email. Ticket 04.

**Tickets.** This is a task graph: a ticket is ready when everything in "Blocked by" is done. Each ticket is a file in `.scratch/portfolio-site/issues/` until an issue tracker exists.

| # | Ticket | Blocked by |
|---|---|---|
| 01 | Site skeleton and homepage hero | — |
| 02 | First branch deploy | 01 |
| 03 | Mumbai clock | 01 |
| 04 | Sketch module and the featured Case study | 01 |
| 05 | Case study pages, the Work page and the alerts Case study | 04 |
| 06 | Bond data platform Case study | 05 |
| 07 | Alert defects Case study | 05 |
| 08 | Notes | 06, 07 |
| 09 | Rest of the Homepage and Work page | 06, 07 |
| 10 | About page | 01 |
| 11 | Résumé page and PDF | 01 |
| 12 | Contact page | 03 |
| 13 | Launch | 02, 08–12 |
| 14 | Link from the GitHub profile README | 13 |
| 15 | Freelance pieces (only when Gokul says so) | 13 |
