# LinkedIn Profile — Source of Truth

> Positioning is aligned with the résumé (`resume/resume.html`): **Data Platform Architect** —
> solution architecture, design standards and reviews, end-to-end delivery ownership, backend
> engineering roots, and large-scale cloud data platforms. Same verified facts and metrics back both.
> Web-application language is deliberately kept light. Keep in sync with `resume/resume.html`.



## Headline

Mobile-optimized (~95 chars — essentials survive truncation):

```
Data Platform Architect · Solution Architecture & Data Engineering · Cloud Data Platforms at Scale
```

Longer keyword-rich alternative (desktop, ~150 chars):

```
Data Platform Architect · Solution Architecture & Data Engineering · Large-Scale Cloud Data Platforms · Lakehouse · dbt · Security & Governance
```

---

## About

Data Platform Architect
Sole architect and primary technical decision-maker for a company-wide data platform.

I design and deliver the data platforms other teams build on. Over 15+ years I've moved from backend engineering into large-scale cloud data platforms — and today I own the full arc: translating stakeholder requirements into technical specifications, setting target architecture and design standards, and carrying delivery from design through release and run, with security and compliance designed in from day one.

Three areas I drive:

▪ Solution Architecture & Delivery
I define target architectures and write the design documents behind them — HLD-style proposals, architecture decision records, non-functional requirements — and lead the architecture and design reviews that keep a platform coherent as it grows. Delivery is owned end-to-end: CI/CD for every workload (Spark pipelines and dbt models alike, via GitHub Actions), release readiness and UAT coordination with stakeholders, runbooks and operational documentation for support readiness, and data contracts, quality standards, and SLAs agreed across teams.

▪ Data Engineering at Scale
I architected and operate a production Apache Iceberg lakehouse on GCP (GCS + BigLake Metastore, queried by both BigQuery and Spark on Dataproc), fed by Scala/Spark pipelines ingesting ~100 GB/day (peaks ~1 TB) of protobuf events from Pub/Sub and orchestrated end-to-end on Cloud Composer (Airflow). dbt Cloud is the platform's modeling and semantic/metrics layer, where analytics engineers build and own their models. I've done this at scale before — 100K+ daily trips at Pathao — turning high-volume event streams into reliable data products for analytics, ML, and BI. Outcomes I can stand behind: a platform-wide cost program that cut monthly spend ~60% (¥1.2M → under ¥500K), stakeholder-facing data incidents reduced from 2–3 per month to fewer than one every two months, and pipeline maintenance down from 1–2 days a week to a few hours.

▪ Security, Governance & FinOps by Design
Compliance and access control live in the platform fabric, not in a checklist: column-level PII masking at ingest, GDPR right-to-erasure across Iceberg tables and snapshots, cloud resources, IAM, and secrets managed as Infrastructure-as-Code in Terraform, end-to-end lineage and metadata, and SOC 2 support. A FinOps and observability application on GKE gives the platform daily cost visibility, expensive-query and freshness alerting, and a central dashboard. I extended the same governance to the AI layer with a custom MCP server — a governed data-access API that lets LLM applications query business metrics safely, restricted to curated gold tables — and I'm now extending it into active cost governance (dry-run cost gating and a read-only optimization advisor).

I believe a modern platform must treat data as a product — scalable, observable, cost-efficient, and secure by design — and that the architect's job is to make the trade-offs explicit, write them down, and see them through to production. Open to conversations on solution architecture, data platform strategy, and governance.

---

## Experience

### Zeals Co., Ltd — Tokyo, Japan / Remote
*Career progression across three roles (Apr 2021 – Present); joined remotely, relocated to Tokyo in 2022.*

#### Staff Data Platform Engineer · Permanent · Nov 2023 – Present · Tokyo, Japan · On-site

- Sole architect and primary technical decision-maker for the company-wide data platform used by analytics, ML, and BI teams. Operate the BI layer (Tableau, Redash) as platform-managed services.
- Translate stakeholder requirements into technical specifications. Author design documents (HLD-style proposals, architecture decision records) and platform standards, and lead architecture and design reviews.
- Defined and delivered the target architecture: a production Apache Iceberg lakehouse on GCS (BigLake Metastore), queried by both BigQuery and Spark on Dataproc. Selected on documented trade-offs — cost, multi-engine reads without duplication, and protobuf schema evolution.
- Built the team's core pipeline framework — a Docker- and script-driven system that provisions ephemeral Dataproc clusters. It runs Scala/Spark ingestion of ~100 GB/day (peaks ~1 TB) of protobuf events from Pub/Sub through landing → bronze → gold medallion layers, with automated Iceberg table maintenance. Orchestrated end-to-end on Cloud Composer (Airflow), the platform's primary orchestrator.
- Led adoption of dbt Cloud as the platform's modeling and semantic/metrics layer, with automated testing and documentation standards; analytics engineers now build and own models. Reduced stakeholder-facing data incidents from 2–3 per month to fewer than one every two months, and pipeline maintenance from 1–2 days/week to a few hours.
- Own technical delivery practices: CI/CD via GitHub Actions for all platform workloads (Spark pipelines and dbt models), release readiness and UAT coordination with stakeholders, and runbooks for support readiness. Defined data contracts, quality standards, and SLAs across teams.
- Own security and compliance by design: column-level PII masking at ingest (BigQuery policies), GDPR right-to-erasure across Iceberg tables and snapshots, and cloud resources, IAM, and secrets managed as Infrastructure-as-Code via Terraform with PR review. End-to-end data lineage and metadata via dbt and GCP-native lineage tracking; partnered with security engineers on SOC 2 compliance for the analytics layer.
- Drove a platform-wide cost program spanning BigQuery optimization and the Iceberg migration, lowering monthly spend ~60% (¥1.2M → under ¥500K).
- Optimized BigQuery workloads using system tables and billing exports — partitioning, clustering, and gold-layer star-schema modeling (dim_/fact_ tables). Reduced query runtime by up to 90% and scan volume by 80%.
- Delivered end-to-end a FinOps & observability application on GKE (Kubernetes): daily cost collection across all GCP projects, expensive-query and cache-miss alerts, BigQuery freshness and quota alerts, pipeline summaries, and a central observability dashboard.
- Designed a custom MCP server — a governed data-access API for AI-assisted analytics on BigQuery: schema discovery, plain-language querying of business metrics, restricted to gold tables via a security layer. Now extending it into active cost governance with dry-run cost gating and a read-only optimization advisor.
- Mentor engineers and drive reuse of platform patterns to reduce technical debt.

#### Senior Data Platform Engineer · Permanent · Nov 2022 – Oct 2023 · Tokyo, Japan · On-site

- Established data contracts, quality standards, BigQuery audit logging, and end-to-end data lineage & metadata (dbt + GCP-native) to strengthen governance and compliance across analytics datasets.
- Built the gold star-schema layer (dim/fact modeling) and integrated BI tools (Tableau) with it to enable near-real-time business insights for stakeholders.

#### Senior Data & Infrastructure Engineer (Remote) · Full-time · Apr 2021 – Oct 2022 · Dhaka, Bangladesh · Remote

- Developed the initial data lakehouse on GCP (BigQuery + Cloud Storage), establishing the scalable foundation for company-wide analytics and ML.
- Partnered with R&D and analytics teams to support ML model development and BI dashboarding on trusted, well-modeled data.
- Audited and remediated data storage systems with the security team, strengthening data protection and access controls.

### Pathao Ltd — Dhaka, Bangladesh
**Senior Data Engineer, Level 2** · Jun 2018 – May 2021

- Designed and operated batch and near-real-time telemetry pipelines (trip lifecycle, GPS location streams, driver/rider actions) for a logistics network handling 100K+ daily trips across courier delivery, ride-sharing, and food delivery — spanning multiple cities in Bangladesh and Nepal.
- Built pipelines integrating 20+ transactional sources plus high-volume streaming (~50 GB/day, peaks of 10K events/sec) on Spark, Dataflow, GCS, and Airflow.
- Created the metrics framework computing 100+ operational and financial KPIs (driver earnings, leaderboards, fleet and delivery operations) with under-5-minute end-to-end latency.
- Spearheaded the company's data lake and 10 TB BigQuery data warehouse on Google Cloud Storage, halving data-retrieval times.
- Established the analytics ecosystem on Dataproc, Dataflow, BigQuery, and Data Studio, and delivered a scheduled reporting framework generating 10+ financial and operational reports for business stakeholders.

### Augmedix Bangladesh Ltd. — Dhaka, Bangladesh
**Senior Data Engineer** · Jun 2015 – Mar 2018

- Core contributor to the design and build of a SQL Server 2016 data warehouse on AWS (S3-backed storage) supporting company-wide business reporting.
- Developed AWS data pipelines (S3, Lambda) consolidating data from third-party APIs, Google Sheets, and MySQL (100+ attributes), plus a reporting suite producing 20+ operational reports.
- Delivered backend services and APIs serving millions of warehouse records to internal applications, owning quality across the API and data layers.

### Nascenia Ltd — Dhaka, Bangladesh
**Software Engineer** · Jun 2013 – May 2015

- Launched a B2B agricultural marketplace platform (Ruby on Rails, MySQL).
- Built a social-media analytics and post-scheduling tool (Rails, PostgreSQL).

### Right Brain Solution Ltd — Dhaka, Bangladesh
**Software Engineer** · Nov 2011 – May 2013

- Co-authored a high-traffic automotive portal for the Toronto Star.
- Created APIs for social-media mobile apps and a multilingual B2C ski-rental e-commerce platform.

### Earlier roles
- **Assistant Programmer**, Nanosoft (2011) — PHP/MySQL appointment scheduling.
- **Software Developer**, Sitebloom (2010–2011) — CodeIgniter school-management system.

---

## Skills section (LinkedIn "Skills" — top 5 pinned first)

Pinned: Solution Architecture · Data Architecture · Data Engineering · Apache Spark · Google Cloud Platform

Then: Apache Iceberg · dbt · Data Modeling · Apache Airflow · BigQuery · Terraform · CI/CD · Kubernetes · Data Governance · Data Security · FinOps · Python · Scala · SQL · Backend Development · API Design · AWS

---

## Notes

- **Attribution rule (updated 2026-09-09):** the Staff Data Platform Engineer bullets are the 12 résumé bullets verbatim (user wants identical wording across PDF, site, and LinkedIn). The Senior Data Platform Engineer role keeps only the two items not already covered there.
- **Honesty guardrails kept:** no "Leader"/people-management claims; "sole architect" = depth in a 6-person data org; MCP verb is "Designed"; AWS beyond S3/Lambda is personal projects; no Azure, Power Platform, or SAP; Japanese stays beginner.
- **Interview-probe readiness:** "up to 90%" query improvement (median vs. best-case); GDPR erasure mechanics on Iceberg snapshots; "runbooks" — be ready to show an operational procedure, not just a README; "semantic layer" — dbt metrics/semantic layer specifics.
