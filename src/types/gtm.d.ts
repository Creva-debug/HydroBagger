interface Window {
  dataLayer?: Record<string, unknown>[]
  gtag?: (...args: unknown[]) => void
  __ga4Configured?: boolean
}
