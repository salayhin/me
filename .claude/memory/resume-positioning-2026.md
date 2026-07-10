---
name: resume-positioning-2026
description: Resume positioning decisions and verified real metrics from July 2026 grilling session
metadata: 
  node_type: memory
  type: project
  originSessionId: 3e55b9a0-37dd-4963-829b-ba29892da101
---

Resume positioning locked in July 2026 grilling session: title "Staff Data Engineer — Data Platform Architecture & Governance" (no slash-hedge, no standalone "Security" pillar in tagline though security bullets are in). Career target: Head of Data / platform leadership toward CTO; 15+ years (not 14+).

Verified real metrics (user's own recollection, defensible in interviews — do NOT substitute invented ones):
- BigQuery monthly spend: ¥1.2M → under ¥500K (~60%), stated ONCE as a platform-wide cost program (BQ optimization + Iceberg migration combined; no double-counting)
- Data incidents: 2–3/month → under one every two months (dbt testing)
- Pipeline maintenance: 1–2 days/week → a few hours/week
- Iceberg lakehouse: GCS + BigLake Metastore, BigQuery + Spark/Dataproc dual engine, Scala pipelines from Pub/Sub protobuf, ~100 GB/day (peak ~1 TB), ~100K events/day (peak 500K–1M) — lead with GB not event counts
- Pathao: 170K+ daily trips (50K rides + 100K courier + 20K food), 100+ KPIs (NOT "1,000 attributes" — that was a 10x error), <5 min latency; cities: Dhaka, Chittagong, Sylhet, Kathmandu (Nepal), courier across all 64 districts of Bangladesh; ingestion from 20+ sources, streaming ~50 GB/day at peaks of 10K events/sec (Spark, Dataflow, GCS, Airflow); 10 TB BigQuery warehouse. Summary is two paragraphs (platform/cost, then governance/security/MCP/Pathao); user's chosen figure for the SUMMARY line is "100K+ daily trips" (conservative), while the Pathao bullet says "170K+ across ride-sharing, courier, and food delivery"
- Zeals context: 6-person data org, 2 teams adopted dbt, mentored 2 engineers — frame as "sole architect" depth, never "organization-wide" breadth
- Languages: English full professional; Japanese beginner (Genki I)

All unmeasurable percentages (proficiency uplift, decision-making %, engagement %) were purged — don't reintroduce.

Sources: canonical print source is resume/resume.html in the data-lab/me repo; PDF regenerated from it via headless Chrome (`--headless --no-pdf-header-footer --print-to-pdf`). Site index.html carries the same story. [[rtk-output-filtering]]
