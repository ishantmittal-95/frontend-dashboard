# Operations Dashboard

A small React + TypeScript dashboard built with Vite. It renders metric cards, a
revenue trend chart, a filterable and sortable orders table, and a follow-up list.
All data is local seed data in `src/data/seed.ts`.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.tsx              page composition and shared state
  components/
    Button.tsx         shared button (primary/secondary/ghost/danger, sm/md)
    Sidebar.tsx        section navigation
    Topbar.tsx         title, range selector, refresh and export actions
    MetricCard.tsx     single KPI tile
    TrendChart.tsx     bar/line toggle, plain SVG + CSS
    OrdersTable.tsx    status filter, amount sort, pagination
    TaskList.tsx       toggleable follow-ups
  data/seed.ts         static sample data
  types.ts             shared types
  styles.css           all styling
```
