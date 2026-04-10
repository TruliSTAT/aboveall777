'use client'

interface Logo777Props {
  variant?: 'primary' | 'dark' | 'tiffany' | 'reversed'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Logo777({ variant = 'primary', size = 'md', className = '' }: Logo777Props) {
  const sizes = {
    sm: { container: 'h-10', script: 'text-2xl', rule: 'my-0.5', nums: 'text-xl gap-0.5' },
    md: { container: 'h-14', script: 'text-3xl', rule: 'my-1', nums: 'text-2xl gap-1' },
    lg: { container: 'h-20', script: 'text-5xl', rule: 'my-1.5', nums: 'text-4xl gap-1.5' },
    xl: { container: 'h-28', script: 'text-7xl', rule: 'my-2', nums: 'text-6xl gap-2' },
  }

  const variants = {
    primary: {
      bg: 'bg-white',
      script: 'text-tiffany',
      rule: 'bg-gold',
      outerNum: 'text-tiffany-pale',
      centerNum: 'text-tiffany-mid',
    },
    dark: {
      bg: 'bg-brand-dark',
      script: 'text-tiffany',
      rule: 'bg-gold',
      outerNum: 'text-tiffany-dark',
      centerNum: 'text-tiffany-mid',
    },
    tiffany: {
      bg: 'bg-tiffany',
      script: 'text-white',
      rule: 'bg-gold',
      outerNum: 'text-tiffany-pale',
      centerNum: 'text-white',
    },
    reversed: {
      bg: 'bg-tiffany',
      script: 'text-white',
      rule: 'bg-white',
      outerNum: 'text-white/40',
      centerNum: 'text-white',
    },
  }

  const s = sizes[size]
  const v = variants[variant]

  return (
    <div className={`inline-flex flex-col items-center px-4 py-2 ${v.bg} ${className}`}>
      <span className={`font-sacramento ${s.script} ${v.script} leading-none`}>
        Above All
      </span>
      <div className={`w-full h-px ${v.rule} ${s.rule}`} />
      <div className={`flex items-center font-fredoka font-bold ${s.nums}`}>
        <span className={v.outerNum}>7</span>
        <span className={v.centerNum}>7</span>
        <span className={v.outerNum}>7</span>
      </div>
    </div>
  )
}
