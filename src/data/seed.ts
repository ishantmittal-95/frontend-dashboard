import type { Metric, Order, TaskItem } from '../types'

export const metrics: Metric[] = [
  { id: 'revenue', label: 'Revenue', value: '$48,210', delta: 6.4, hint: 'vs. previous 30 days' },
  { id: 'orders', label: 'Orders', value: '1,284', delta: 2.1, hint: 'vs. previous 30 days' },
  { id: 'refunds', label: 'Refund rate', value: '1.8%', delta: -0.4, hint: 'lower is better' },
  { id: 'active', label: 'Active users', value: '9,402', delta: 11.2, hint: 'last 7 days' },
]

export const trend: number[] = [32, 41, 38, 50, 47, 62, 58, 71, 66, 80, 76, 88]

export const orders: Order[] = [
  { id: 'ORD-4821', customer: 'Lena Fischer', region: 'EU', amount: 420.5, status: 'paid', placedAt: '2026-10-01' },
  { id: 'ORD-4822', customer: 'Marcus Hale', region: 'NA', amount: 118.0, status: 'pending', placedAt: '2026-10-01' },
  { id: 'ORD-4823', customer: 'Priya Nair', region: 'APAC', amount: 965.25, status: 'paid', placedAt: '2026-10-02' },
  { id: 'ORD-4824', customer: 'Tomas Ruiz', region: 'LATAM', amount: 76.9, status: 'refunded', placedAt: '2026-10-02' },
  { id: 'ORD-4825', customer: 'Aiko Tanaka', region: 'APAC', amount: 310.0, status: 'paid', placedAt: '2026-10-03' },
  { id: 'ORD-4826', customer: 'Noah Bennett', region: 'NA', amount: 54.4, status: 'failed', placedAt: '2026-10-03' },
  { id: 'ORD-4827', customer: 'Sofia Rossi', region: 'EU', amount: 1240.0, status: 'paid', placedAt: '2026-10-04' },
  { id: 'ORD-4828', customer: 'Daniel Okoro', region: 'MEA', amount: 288.75, status: 'pending', placedAt: '2026-10-04' },
  { id: 'ORD-4829', customer: 'Hannah Weber', region: 'EU', amount: 199.99, status: 'paid', placedAt: '2026-10-05' },
  { id: 'ORD-4830', customer: 'Victor Lima', region: 'LATAM', amount: 640.1, status: 'paid', placedAt: '2026-10-05' },
]

export const tasks: TaskItem[] = [
  { id: 't1', title: 'Reconcile September payouts', owner: 'Finance', done: true },
  { id: 't2', title: 'Review failed payment retries', owner: 'Support', done: false },
  { id: 't3', title: 'Update EU tax rates', owner: 'Ops', done: false },
  { id: 't4', title: 'Archive Q2 export jobs', owner: 'Platform', done: false },
]
