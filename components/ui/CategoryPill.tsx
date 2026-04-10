interface CategoryPillProps {
  label: string
  className?: string
}

export function CategoryPill({ label, className = '' }: CategoryPillProps) {
  return (
    <span className={`inline-block text-xs font-comfortaa font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-tiffany-pale text-tiffany-dark ${className}`}>
      {label}
    </span>
  )
}
