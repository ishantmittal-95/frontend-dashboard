import { useState } from 'react'
import Button from './Button'

interface TrendChartProps {
  data: number[]
}

type Mode = 'bars' | 'line'

export default function TrendChart({ data }: TrendChartProps) {
  const [mode, setMode] = useState<Mode>('bars')
  const max = Math.max(...data)
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - (value / max) * 100
      return `${x},${y}`
    })
    .join(' ')

  return (
    <section className="card chart">
      <header className="card__head">
        <div>
          <h2>Revenue trend</h2>
          <p className="card__sub">Monthly, normalised</p>
        </div>
        <div className="segmented">
          <Button size="sm" variant={mode === 'bars' ? 'primary' : 'ghost'} onClick={() => setMode('bars')}>
            Bars
          </Button>
          <Button size="sm" variant={mode === 'line' ? 'primary' : 'ghost'} onClick={() => setMode('line')}>
            Line
          </Button>
        </div>
      </header>

      {mode === 'bars' ? (
        <div className="bars">
          {data.map((value, index) => (
            <div key={index} className="bars__col" title={String(value)}>
              <div className="bars__fill" style={{ height: `${(value / max) * 100}%` }} />
            </div>
          ))}
        </div>
      ) : (
        <svg className="line" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Revenue line chart">
          <polyline points={points} fill="none" stroke="#2f6df6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      )}
    </section>
  )
}
