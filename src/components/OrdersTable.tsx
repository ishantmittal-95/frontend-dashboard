import { useMemo, useState } from 'react'
import type { Order, OrderStatus } from '../types'
import Button from './Button'

interface OrdersTableProps {
  orders: Order[]
}

const filters: Array<OrderStatus | 'all'> = ['all', 'paid', 'pending', 'refunded', 'failed']
const pageSize = 4

export default function OrdersTable({ orders }: OrdersTableProps) {
  const [filter, setFilter] = useState<OrderStatus | 'all'>('all')
  const [page, setPage] = useState(0)
  const [sortDesc, setSortDesc] = useState(true)

  const visible = useMemo(() => {
    const filtered = filter === 'all' ? orders : orders.filter((order) => order.status === filter)
    return [...filtered].sort((a, b) => (sortDesc ? b.amount - a.amount : a.amount - b.amount))
  }, [orders, filter, sortDesc])

  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize))
  const current = Math.min(page, pageCount - 1)
  const rows = visible.slice(current * pageSize, current * pageSize + pageSize)

  function selectFilter(next: OrderStatus | 'all') {
    setFilter(next)
    setPage(0)
  }

  return (
    <section className="card table-card">
      <header className="card__head">
        <div>
          <h2>Recent orders</h2>
          <p className="card__sub">{visible.length} matching orders</p>
        </div>
        <Button size="sm" variant="ghost" onClick={() => setSortDesc((value) => !value)}>
          Amount {sortDesc ? '↓' : '↑'}
        </Button>
      </header>

      <div className="filters">
        {filters.map((value) => (
          <Button
            key={value}
            size="sm"
            variant={value === filter ? 'primary' : 'ghost'}
            onClick={() => selectFilter(value)}
          >
            {value}
          </Button>
        ))}
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Region</th>
            <th>Date</th>
            <th>Status</th>
            <th className="table__right">Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((order) => (
            <tr key={order.id}>
              <td className="table__mono">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.region}</td>
              <td className="table__mono">{order.placedAt}</td>
              <td><span className={`pill pill--${order.status}`}>{order.status}</span></td>
              <td className="table__right table__mono">${order.amount.toFixed(2)}</td>
              <td className="table__right">
                <Button size="sm" variant="ghost">Open</Button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="table__empty">No orders for this filter.</td>
            </tr>
          )}
        </tbody>
      </table>

      <footer className="pager">
        <span>Page {current + 1} of {pageCount}</span>
        <div className="pager__buttons">
          <Button size="sm" disabled={current === 0} onClick={() => setPage(current - 1)}>Previous</Button>
          <Button size="sm" disabled={current >= pageCount - 1} onClick={() => setPage(current + 1)}>Next</Button>
        </div>
      </footer>
    </section>
  )
}
