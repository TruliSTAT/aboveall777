'use client'

interface FilterBarProps {
  active: string
  onChange: (sport: string) => void
}

const filters = [
  { label: 'All', value: 'all' },
  { label: '⛳ Golf', value: 'golf' },
  { label: '🏓 Pickleball', value: 'pickleball' },
  { label: '🎾 Tennis', value: 'tennis' },
  { label: '🧘 Yoga', value: 'yoga' },
]

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="sticky top-16 z-30 bg-white border-b border-tiffany-pale py-3 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`whitespace-nowrap font-comfortaa text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
              active === f.value
                ? 'bg-tiffany text-white border-tiffany'
                : 'border-tiffany text-tiffany bg-transparent hover:bg-tiffany-pale'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}
