export type OrderStatus = 'paid' | 'pending' | 'refunded' | 'failed'

export interface Order {
  id: string
  customer: string
  region: string
  amount: number
  status: OrderStatus
  placedAt: string
}

export interface Metric {
  id: string
  label: string
  value: string
  delta: number
  hint: string
}

export interface TaskItem {
  id: string
  title: string
  owner: string
  done: boolean
}
