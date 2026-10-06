import Button from './Button'

const sections = ['Overview', 'Orders', 'Customers', 'Reports', 'Settings'] as const

interface SidebarProps {
  active: string
  onSelect: (section: string) => void
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__mark">NG</span>
        <span>Operations</span>
      </div>

      <nav className="sidebar__nav">
        {sections.map((section) => (
          <Button
            key={section}
            variant={section === active ? 'primary' : 'ghost'}
            size="sm"
            className="sidebar__link"
            onClick={() => onSelect(section)}
          >
            {section}
          </Button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <p className="sidebar__note">Workspace: Production</p>
        <Button variant="ghost" size="sm">Switch workspace</Button>
      </div>
    </aside>
  )
}
