interface GoldRuleLineProps {
  className?: string
  width?: string
}

export function GoldRuleLine({ className = '', width = 'w-full' }: GoldRuleLineProps) {
  return <div className={`h-px bg-gold ${width} ${className}`} />
}
