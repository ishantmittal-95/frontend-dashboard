import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MetricCard from './components/MetricCard'
import TrendChart from './components/TrendChart'
import OrdersTable from './components/OrdersTable'
import TaskList from './components/TaskList'
import Button from './components/Button'
import { metrics, orders, tasks, trend } from './data/seed'

export default function App() {
  const [section, setSection] = useState('Overview')
  const [range, setRange] = useState('30d')
  const [refreshing, setRefreshing] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  function refresh() {
    setRefreshing(true)
    setNote(null)
    window.setTimeout(() => setRefreshing(false), 700)
  }

  return (
    <div className="shell">
      <Sidebar active={section} onSelect={setSection} />

      <main className="main">
        <Topbar
          title={section}
          range={range}
          onRangeChange={setRange}
          onRefresh={refresh}
          refreshing={refreshing}
        />

        {note && (
          <div className="banner">
            <span>{note}</span>
            <Button size="sm" variant="ghost" onClick={() => setNote(null)}>Dismiss</Button>
          </div>
        )}

        <div className="metrics">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              onDetails={(id) => setNote(`Breakdown for "${id}" is not wired up yet.`)}
            />
          ))}
        </div>

        <div className="grid">
          <TrendChart data={trend} />
          <TaskList initial={tasks} />
        </div>

        <OrdersTable orders={orders} />

        <footer className="foot">
          <span>Range: {range}</span>
          <div className="foot__actions">
            <Button size="sm" variant="ghost">Documentation</Button>
            <Button size="sm" variant="ghost">Report an issue</Button>
          </div>
        </footer>
      </main>
    </div>
  )
}
