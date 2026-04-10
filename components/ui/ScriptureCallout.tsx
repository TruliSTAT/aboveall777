interface ScriptureCalloutProps {
  verse: string
  reference: string
  className?: string
}

export function ScriptureCallout({ verse, reference, className = '' }: ScriptureCalloutProps) {
  return (
    <div className={`border-l-4 border-gold bg-tiffany-pale/50 pl-6 py-4 rounded-r-lg ${className}`}>
      <p className="font-nunito italic text-tiffany-dark text-base leading-relaxed">&ldquo;{verse}&rdquo;</p>
      <p className="font-comfortaa text-xs text-gold font-bold mt-2 uppercase tracking-wider">{reference}</p>
    </div>
  )
}
