import { useState } from 'react'
import type { TaskItem } from '../types'
import Button from './Button'

interface TaskListProps {
  initial: TaskItem[]
}

export default function TaskList({ initial }: TaskListProps) {
  const [items, setItems] = useState(initial)

  function toggle(id: string) {
    setItems((list) => list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  const open = items.filter((item) => !item.done).length

  return (
    <section className="card tasks">
      <header className="card__head">
        <div>
          <h2>Follow-ups</h2>
          <p className="card__sub">{open} open</p>
        </div>
        <Button size="sm" variant="ghost" onClick={() => setItems(initial)}>Reset</Button>
      </header>

      <ul className="tasks__list">
        {items.map((item) => (
          <li key={item.id} className={item.done ? 'tasks__item tasks__item--done' : 'tasks__item'}>
            <div>
              <p className="tasks__title">{item.title}</p>
              <p className="tasks__owner">{item.owner}</p>
            </div>
            <Button size="sm" variant={item.done ? 'ghost' : 'secondary'} onClick={() => toggle(item.id)}>
              {item.done ? 'Reopen' : 'Done'}
            </Button>
          </li>
        ))}
      </ul>

      <div className="tasks__actions">
        <Button size="sm" variant="primary">Add follow-up</Button>
        <Button size="sm" variant="danger" onClick={() => setItems([])}>Clear all</Button>
      </div>
    </section>
  )
}
