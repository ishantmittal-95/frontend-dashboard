import type { Metric } from '../types'
import Button from './Button'

interface MetricCardProps {
  metric: Metric
  onDetails: (id: string) => void
}

export default function MetricCard({ metric, onDetails }: MetricCardProps) {
  const positive = metric.delta >= 0
  return (
    <article className="card metric">
      <header className="metric__head">
        <span className="metric__label">{metric.label}</span>
        <span className={positive ? 'delta delta--up' : 'delta delta--down'}>
          {positive ? '+' : ''}{metric.delta}%
        </span>
      </header>
      <p className="metric__value">{metric.value}</p>
      <p className="metric__hint">{metric.hint}</p>
      <Button size="sm" variant="ghost" onClick={() => onDetails(metric.id)}>
        View breakdown
      </Button>
    </article>
  )
}
