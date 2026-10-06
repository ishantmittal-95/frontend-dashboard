import Button from './Button'

interface TopbarProps {
  title: string
  range: string
  onRangeChange: (range: string) => void
  onRefresh: () => void
  refreshing: boolean
}

const ranges = ['7d', '30d', '90d']

export default function Topbar({ title, range, onRangeChange, onRefresh, refreshing }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <p className="topbar__sub">Last synced a few minutes ago</p>
      </div>

      <div className="topbar__actions">
        <div className="segmented">
          {ranges.map((value) => (
            <Button
              key={value}
              size="sm"
              variant={value === range ? 'primary' : 'ghost'}
              onClick={() => onRangeChange(value)}
            >
              {value}
            </Button>
          ))}
        </div>
        <Button size="sm" onClick={onRefresh} disabled={refreshing}>
          {refreshing ? 'Refreshing…' : 'Refresh'}
        </Button>
        <Button size="sm" variant="primary">Export CSV</Button>
      </div>
    </header>
  )
}
