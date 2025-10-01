interface Env {
  HOST?: string
  PORT?: number
  FAIL_SUBMISSION?: boolean
  DATABASE_URL?: string
  /** Highlight project ID */
  HIGHLIGHT_PROJECT_ID?: string
}

//type Severity = 'malware' | 'phishing' | 'illegal redistribution' | 'shady ads'

//type ReportSource = 'manual review' | 'report' | 'auto-feed'

enum Severity {}

interface DB {
  /** full domain or subdomain (e.g., "badpage.github.io") */
  domain: string
  /** optional: other domains pointing to the same site */
  aliases?: string[]
  /** See {@link Severity}. */
  categories: Severity[]
  severity: "low" | "medium" | "high" | "critical"
  /** active = blocked, removed = whitelisted/false positive */
  status: "active" | "removed"
  /** unix timestamp when added */
  added_at: 1727184000
  source: ReportSource[]
  /** connected domains */
  related?: string[]
  /** free-text human notes */
  notes?: string
}
