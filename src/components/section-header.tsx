type SectionHeaderProps = {
  title: string
  actionLabel: string
  actionHref: string
  className?: string
}

export function SectionHeader({ title, actionLabel, actionHref, className = '' }: SectionHeaderProps) {
  return (
    <div className={`section-header d-flex justify-content-between align-items-center mb-3 ${className}`}>
      <h2 className="section-header__title mb-0 text-uppercase">{title}</h2>
      <a href={actionHref} className="section-header__link text-uppercase fw-semibold">
        {actionLabel}
      </a>
    </div>
  )
}
