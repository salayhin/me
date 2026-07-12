# LinkedIn Profile — Source of Truth

> Brand is deliberately different from the résumé (`resume/resume.html`) and that split is intentional.
> Résumé leads with **Staff Data Platform Engineer**; LinkedIn leads with the hybrid
> **Data Platform Architect** (leans toward Head of Data). Same verified metrics back both. Keep in sync.

---

## Headline (mobile-optimized, ~92 chars — front-loads essentials before mobile truncation)

```
Data Platform Architect · Scalable Data Platforms on GCP & AWS · Security, Governance & FinOps
```

*Longer keyword-rich alternative (135 chars, desktop) — swap in if you want dbt/Iceberg/AI search terms:*

```
Data Platform Architect · Scalable Lakehouse Platforms on GCP & AWS · dbt · Iceberg · Security, Governance & FinOps · AI/LLM-Ready Data
```

---

## About

Data Platform Architect
Sole architect and primary technical decision-maker for a company-wide data platform.

I architect and run the data platform other teams build on. For 15+ years I've worked at the convergence of Data Engineering, Platform Engineering, and Data Security & Governance — making the architectural trade-offs that balance engineering velocity, cloud cost, and data risk.

I drive execution across three core pillars:

▪ Data Engineering & Architecture
I design and operate a production Apache Iceberg lakehouse on GCP (GCS + BigLake Metastore, dual-engine BigQuery and Spark on Dataproc), fed by near-real-time Scala/Spark telemetry pipelines from Pub/Sub and orchestrated end-to-end on Cloud Composer (Airflow). I've done this at scale before — 100K+ daily trips at Pathao — turning raw, high-volume event streams into reliable data products that power analytics, ML, and business strategy, with analytics engineers self-serving on a governed dbt modeling layer.

▪ Platform Engineering & FinOps
I build the scalable, observable, automated foundations that power the entire data lifecycle — cloud-native environments provisioned as Infrastructure-as-Code (Terraform), CI/CD for every workload from Spark pipelines to dbt models (GitHub Actions), orchestration, and observability — with FinOps treated as a first-class concern. My most recent cost program cut platform spend ~60% (¥1.2M → under ¥500K), and dbt-driven testing cut data incidents reaching stakeholders from 2–3/month to under one every two months. I also run the BI layer (Tableau, Redash) as platform-managed services.

▪ Data Security & Strategic Governance
I embed compliance and access control into the platform fabric: column-level PII masking at ingest, GDPR right-to-erasure across Iceberg, IAM-as-code in Terraform, end-to-end data lineage and metadata, and SOC 2 support. I extend this to the AI layer — I designed a custom MCP server so LLM applications can query business metrics safely, governed down to curated gold tables. Security and governance as structural enablers, not operational constraints.

A modern platform must treat data as a true product — highly scalable, observable, and cost-efficient, with security, governance, and developer empathy baked into the architecture from day one. I thrive on owning complex data roadmaps, solving hard scalability problems, and driving technical excellence across GCP and AWS.

Let's connect to exchange ideas on modern data strategy, platform engineering, or data governance.

---

## Experience

### Zeals Co., Ltd — Tokyo, Japan / Remote
*Career progression across three roles (Apr 2021 – Present); joined remotely, relocated to Tokyo in 2022.*

#### Staff Data Platform Engineer · Permanent · Nov 2023 – Present · Tokyo, Japan · On-site

- Own the technical direction of the data platform as sole architect and primary decision-maker for architecture, tooling choices, and scalability trade-offs.
- Architected and operate a production Apache Iceberg lakehouse on GCP (GCS + BigLake, dual-engine BigQuery + Spark on Dataproc) serving analytics, ML, and BI.
- Led adoption of dbt with CI/CD, testing, and documentation standards across data teams — cutting data incidents reaching stakeholders from 2–3/month to under one every two months.
- Drove a platform-wide FinOps and cost program (BigQuery optimization + Iceberg migration), lowering monthly cloud spend ~60% (¥1.2M → under ¥500K) while improving performance.
- Established platform governance and security: column-level PII masking at ingest, GDPR right-to-erasure across Iceberg, IAM-as-code in Terraform, and SOC 2 support.
- Designed a custom MCP server for governed, AI-assisted analytics on BigQuery; championed AI adoption and mentored junior engineers.

#### Senior Data Platform Engineer · Permanent · Nov 2022 – Oct 2023 · Tokyo, Japan · On-site

- Built the platform's core pipeline framework — a Docker- and script-driven system that provisions and manages ephemeral Dataproc clusters — running Scala/Spark ingestion of ~100 GB/day (peaks ~1 TB) of protobuf event streams from Pub/Sub through medallion (bronze → gold) layers, orchestrated end-to-end on Cloud Composer (Airflow).
- Established data contracts, quality standards, BigQuery audit logging, and end-to-end data lineage & metadata (dbt + GCP-native) to strengthen governance and compliance across analytics datasets.
- Deployed CI/CD with Terraform (infrastructure-as-code) and GitHub Actions across Spark pipelines and dbt models, improving reliability and reducing manual operational toil.
- Developed the FinOps tooling on GKE — daily cost collection across GCP projects with billing-based actuals and expensive-query alerts — that underpinned the platform-wide cost program.
- Built a semantic gold layer (star-schema dim/fact modeling) powering a customer-facing analytics dashboard.
- Integrated BI tools (Tableau) with the lakehouse gold layer to enable near-real-time business insights for stakeholders.

#### Senior Data & Infrastructure Engineer (Remote) · Full-time · Apr 2021 – Oct 2022 · Dhaka, Bangladesh · Remote

- Developed the initial data lakehouse on GCP (BigQuery + Cloud Storage), establishing the scalable foundation for company-wide analytics and ML.
- Partnered with R&D and analytics teams to support ML model development and BI dashboarding on trusted, well-modeled data.
- Audited and remediated data storage systems with the security team, strengthening data protection and access controls.

### Pathao Ltd — Dhaka, Bangladesh
**Senior Data Engineer, Level 2** · Jun 2018 – May 2021

- Designed and operated batch and near-real-time telemetry pipelines (trip lifecycle, GPS location streams, driver/rider actions) for 100K+ daily trips across ride-sharing, courier, and food delivery — spanning multiple cities in Bangladesh and Nepal.
- Built pipelines integrating 20+ transactional sources plus high-volume streaming (~50 GB/day, peaks of 10K events/sec) on Spark, Dataflow, GCS, and Airflow.
- Created the metrics framework computing 100+ business KPIs (driver earnings, leaderboards, operational metrics) with under-5-minute end-to-end latency.
- Spearheaded the company's data lake and 10 TB BigQuery data warehouse on Google Cloud Storage, halving data-retrieval times.
- Established the analytics ecosystem on Dataproc, Dataflow, BigQuery, and Data Studio, and delivered a scheduled reporting framework generating 10+ financial and operational reports.

### Augmedix Bangladesh Ltd. — Dhaka, Bangladesh
**Senior Data Engineer** · Jun 2015 – Mar 2018

- Core contributor to the design and build of a SQL Server 2016 data warehouse on AWS (S3-backed storage) supporting company-wide business reporting.
- Developed AWS data pipelines (S3, Lambda) consolidating data from third-party APIs, Google Sheets, and MySQL (100+ attributes), plus a reporting suite producing 20+ operational reports.
- Delivered backend services serving millions of warehouse records to internal applications.

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

## Featured / Notes

- **AWS note:** production AWS is S3 + Lambda (Augmedix); S3 Tables (Iceberg), Athena, Glue Catalog, and DynamoDB are hands-on **personal projects** exploring Iceberg-on-AWS — present them that way if asked.
- **Interview-probe readiness:** "up to 90%" query improvement (be ready with median vs. best-case); GDPR erasure mechanics on Iceberg snapshots (rewrite vs. snapshot expiry); "sole architect" scope (6-person data org, design reviews, mentoring — depth not headcount).
