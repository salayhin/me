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

## About (1,976 chars; LinkedIn limit 2,600)

Data Platform Architect
Sole architect and primary technical decision-maker for a company-wide data platform.

I design and deliver the data platforms other teams build on. Over 15+ years I have moved from backend engineering into large-scale cloud data platforms, and today I own the full arc: requirements to technical specifications, target architecture and design standards, and delivery through release and run, with security and compliance integrated from day one.

Three areas I drive:

▪ Solution Architecture & Delivery
I define target architectures, write the design documents behind them (HLD/LLD, architecture decision records, non-functional requirements), and lead design reviews. Delivery is owned end-to-end: CI/CD for every workload, release readiness and UAT coordination, runbooks, and data contracts and SLAs across teams.

▪ Data Engineering at Scale
I architected and operate a production Apache Iceberg lakehouse on GCP (BigQuery and Spark on Dataproc), fed by Scala/Spark pipelines ingesting approximately 100 GB/day of protobuf events, orchestrated on Cloud Composer (Airflow), with dbt Cloud as the modeling and semantic layer. Results: monthly spend cut by approximately 60% (from ¥1.2M to under ¥500K), stakeholder-facing data incidents reduced from 2–3 per month to fewer than one every two months, and pipeline maintenance down from 1–2 days a week to a few hours.

▪ Security, Governance & FinOps by Design
Column-level PII masking at ingest, GDPR right-to-erasure across Iceberg, IAM and secrets as Infrastructure-as-Code in Terraform, end-to-end lineage, and SOC 2 support. I extended the same governance to the AI layer with a custom MCP server, a governed data-access API for LLM applications.

I believe a modern platform must treat data as a product, and that the architect's job is to make trade-offs explicit, write them down, and see them through to production. Open to conversations on solution architecture and data platform strategy.

---

## Experience

### Zeals Co., Ltd · Tokyo, Japan / Remote
*Career progression across three roles (Apr 2021 – Present); joined remotely, relocated to Tokyo in 2022.*

#### Staff Data Platform Engineer · Permanent · Nov 2023 – Present · Tokyo, Japan · On-site · 1,902 chars when pasted with blank lines (limit 2,000)

- Sole architect and primary technical decision-maker for the company-wide data platform used by analytics, ML, and BI teams. Operate the BI layer (Tableau, Redash) as a platform-managed service.
- Translate stakeholder requirements into technical specifications. Author design documents (HLD-style proposals, architecture decision records) and platform standards, and lead design reviews.
- Led adoption of dbt Cloud as the platform's modeling and semantic/metrics layer, with automated testing and documentation standards; analytics engineers now own their models. Reduced stakeholder-facing data incidents from 2–3 per month to fewer than one every two months, and pipeline maintenance from 1–2 days/week to a few hours.
- Own security and compliance by design: column-level PII masking at ingest, GDPR right-to-erasure across Iceberg tables and snapshots, and cloud resources, IAM, and secrets managed as Infrastructure-as-Code via Terraform. End-to-end data lineage and metadata via dbt and GCP-native lineage tracking; partnered with security engineers on SOC 2 compliance.
- Drove a platform-wide cost program spanning BigQuery optimization and the Iceberg migration, lowering monthly spend by approximately 60% (from ¥1.2M to under ¥500K).
- Delivered an end-to-end FinOps & observability application on GKE (Kubernetes): daily cost collection across all GCP projects, expensive-query and cache-miss alerts, BigQuery freshness and quota alerts, pipeline summaries, and a central observability dashboard.
- Designed a custom MCP server, a governed data-access API for AI-assisted analytics on BigQuery: schema discovery and plain-language querying of business metrics, restricted to gold tables via a security layer. Now extending it into active cost governance (dry-run cost gating, optimization advisor).
- Mentor engineers and drive reuse of platform patterns to reduce technical debt.

#### Senior Data Platform Engineer · Permanent · Nov 2022 – Oct 2023 · Tokyo, Japan · On-site · 1,177 chars when pasted with blank lines (limit 2,000)

- Defined and delivered the target architecture: a production Apache Iceberg lakehouse on GCS (BigLake Metastore), queried by both BigQuery and Spark on Dataproc. Selected based on documented trade-offs: cost, multi-engine reads without duplication, and protobuf schema evolution.
- Built the team's core pipeline framework: a Docker- and script-driven system that provisions ephemeral Dataproc clusters. It runs Scala/Spark ingestion of approximately 100 GB/day (peaking at 1 TB) of protobuf events from Pub/Sub through landing, bronze, and gold medallion layers, with automated Iceberg table maintenance. Orchestrated end-to-end on Cloud Composer (Airflow), the platform's primary orchestrator.
- Optimized BigQuery workloads using system tables and billing exports: partitioning, clustering, and gold-layer star-schema modeling (dim_/fact_ tables). Reduced query runtime by up to 90% and scan volume by 80%.
- Own technical delivery practices: CI/CD via GitHub Actions for all platform workloads (Spark pipelines and dbt models), release readiness and UAT coordination, and runbooks for support readiness. Defined data contracts, quality standards, and SLAs across teams.

#### Senior Data & Infrastructure Engineer (Remote) · Full-time · Apr 2021 – Oct 2022 · Dhaka, Bangladesh · Remote

- Developed the initial data platform on GCP (BigQuery + Cloud Storage), establishing the foundation for company-wide analytics and ML.
- Partnered with R&D and analytics teams to support ML model development and BI dashboarding on trusted, well-modeled data.
- Audited and remediated data storage systems with the security team, strengthening data protection and access controls.

### Pathao Ltd · Dhaka, Bangladesh
*Two roles (Jun 2018 – May 2021). Bullets are split by period to avoid duplicates; the résumé shows them as one entry.*

#### Senior Data Engineer, Level 2 · Permanent · Jan 2020 – May 2021 · Dhaka, Bangladesh

- Designed and operated batch and near-real-time telemetry pipelines (trip lifecycle, GPS location streams, driver/rider actions) for a logistics network handling 100K+ daily trips across courier delivery, ride-sharing, and food delivery, spanning multiple cities across Bangladesh and Nepal.
- Implemented data pipelines integrating transaction data from 20+ sources plus streaming data at high volume (approximately 50 GB/day) and velocity (peaks of 10K events/sec) on Spark, Dataflow, GCS, and Airflow.
- Created the metrics framework computing 100+ operational and financial KPIs (driver earnings, leaderboards, fleet and delivery operations) with under-5-minute end-to-end latency.
- Established the analytics ecosystem on Dataproc, Dataflow, BigQuery, and Data Studio for analytics and business stakeholders.

#### Senior Data Engineer · Permanent · Jun 2018 – Dec 2019 · Dhaka, Bangladesh

- Spearheaded the company's data lake on Google Cloud Storage and 10 TB BigQuery data warehouse, halving data retrieval times and enabling stakeholders to analyze key metrics.
- Delivered a scheduled reporting framework in BigQuery generating 10+ financial and operational reports for business stakeholders.
- Designed and implemented dimensional models for the rides, food, and courier verticals, consolidating metrics into a unified dashboard.
- Built an automated pipeline monitoring framework with real-time alerting and a monitoring dashboard, giving stakeholders transparent visibility into data health.

### Augmedix Bangladesh Ltd. · Dhaka, Bangladesh
**Senior Data Engineer** · Jun 2015 – Mar 2018

- Core contributor to the design and build of a SQL Server 2016 data warehouse on AWS (S3-backed storage) supporting company-wide business reporting.
- Developed AWS data pipelines (S3, Lambda) consolidating data from third-party APIs, Google Sheets, and MySQL (100+ attributes), and a reporting suite producing 20+ operational reports.
- Delivered backend services and APIs serving millions of warehouse records to internal web applications, owning quality across the API and data layers.

### Nascenia Ltd · Dhaka, Bangladesh
**Software Engineer** · Jun 2013 – May 2015

- Launched a B2B agricultural marketplace platform with Ruby on Rails and MySQL.
- Developed a social media analytics and post-scheduling web application with Rails and PostgreSQL.

### Right Brain Solution Ltd · Dhaka, Bangladesh
**Software Engineer** · Nov 2011 – May 2013

- Co-authored a high-traffic automotive web portal for the Toronto Star.
- Created APIs for social media mobile apps and a multilingual B2C ski-rental e-commerce platform.

### Earlier roles
- **Assistant Programmer**, Nanosoft (2011): PHP/MySQL appointment scheduling.
- **Software Developer**, Sitebloom (2010–2011): CodeIgniter school-management system.

---

## Skills section (LinkedIn "Skills" — top 5 pinned first)

Pinned: Solution Architecture · Data Architecture · Data Engineering · Apache Spark · Google Cloud Platform

Then: Apache Iceberg · dbt · Data Modeling · Apache Airflow · BigQuery · Terraform · CI/CD · Kubernetes · Data Governance · Data Security · FinOps · Python · Scala · SQL · Backend Development · API Design · AWS

---

## Notes

- **Attribution rule (updated 2026-09-09):** LinkedIn caps each role description at 2,000 characters, so the 12 résumé bullets are split verbatim across two roles: Staff (architecture/leadership, dbt, security, cost program, FinOps app, MCP, mentoring; delivery-practices bullet is under Senior per user 2026-09-09; lightly trimmed to 1,902 chars incl. blank lines: BI "service" singular, "lead design reviews", "own their models", no "with stakeholders"/"with PR review"/"for the analytics layer"/"(BigQuery policies)", MCP cost-governance clause parenthetical) and Senior Data Platform Engineer (Iceberg target architecture, pipeline framework, BigQuery optimization, delivery practices/CI-CD; built in that period, extended as Staff; FinOps app moved to Staff per user 2026-09-09). About is capped at 2,000 by user preference (LinkedIn limit 2,600).
- **Honesty guardrails kept:** no "Leader"/people-management claims; "sole architect" = depth in a 6-person data org; MCP verb is "Designed"; AWS beyond S3/Lambda is personal projects; no Azure, Power Platform, or SAP; Japanese stays beginner.
- **Pathao on LinkedIn (2026-09-09):** two roles (Senior Data Engineer Jun 2018–Dec 2019; Level 2 Jan 2020–May 2021, start date inferred from the earlier role's end, confirm). Lake/warehouse + reporting framework live under the earlier role; telemetry, 20+ sources, metrics framework, analytics ecosystem under Level 2. Removed unmeasurable 70% / 90% / 99.9% figures from the earlier role per the verified-metrics rule.
- **Interview-probe readiness:** "up to 90%" query improvement (median vs. best-case); GDPR erasure mechanics on Iceberg snapshots; "runbooks" — be ready to show an operational procedure, not just a README; "semantic layer" — dbt metrics/semantic layer specifics.
