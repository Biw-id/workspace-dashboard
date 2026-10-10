import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TaskList from './components/TaskList'
import NewTaskModal from './components/NewTaskModal'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('genesis_tasks')
    if (saved) {
      return JSON.parse(saved)
    }
    
    return [
      { id: 1, title: 'Export Figma Tokens to Tailwind v4 Theme', category: 'Design System', status: 'Completed', priority: 'High' },
      { id: 2, title: 'Refactor StatCard Component Elevation to Flat-Border', category: 'Core UI', status: 'Completed', priority: 'High' },
      { id: 3, title: 'Implement DM Sans & General Sans Typography Hierarchy', category: 'Typography', status: 'In Progress', priority: 'Medium' },
      { id: 4, title: 'Build Modal Dialog for New Design System Upload', category: 'Feature', status: 'In Progress', priority: 'Low' }
    ]
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    localStorage.setItem('genesis_tasks', JSON.stringify(tasks))
  }, [tasks])

  const [activeTab, setActiveTab] = useState('overview')
  
  return (
    <div className="min-h-screen bg-background text-text-primary flex font-['DM_Sans',sans-serif]">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-md border-b border-border-subtle px-6 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-text-secondary">Design Systems</span>
            <span className="text-neutral-muted">/</span>
            <span className="text-base font-semibold text-text-primary capitalize">{activeTab}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* ⌘K Search trigger placeholder */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border-subtle bg-background text-base text-neutral-muted">
              <span>Search systems...</span>
              <kbd className="px-1.5 py-0.5 rounded-sm bg-white border border-border-subtle text-2xs font-mono text-text-secondary">⌘K</kbd>
            </div>
          </div>
        </header>

        {/* Dashboard Body Container (Max 1280px, 24px padding) */}
        <div className="max-w-[1280px] mx-auto p-6 sm:p-8">
          
          {/* Section Heading & Primary CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-border-subtle">
            <div>
              <h1 className="font-['General_Sans',sans-serif] text-4xl font-bold tracking-[-0.03em] text-text-primary leading-tight">
                Design System Manager
              </h1>
              <p className="text-xl text-text-secondary mt-1">
                Editorial precision interface for managing and distributing design tokens.
              </p>
            </div>

            {/* Primary Button adhering to Genesis: 6px radius, hover glow, 1px lift */}
            <button onClick={() => setIsModalOpen(true)} className="h-[38px] px-4 rounded-md bg-primary hover:bg-primary-hover text-white text-lg font-medium transition duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(99,102,241,0.35)] flex items-center gap-2">
              <span>+ New System File</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <StatCard 
                  title="Total Systems Tasks" 
                  value={`${tasks.length} Tasks`} 
                  change={`+${tasks.length} total`} 
                  isPositive={true} 
                  icon="📦" 
                />
                <StatCard 
                  title="Completed Rate" 
                  value={`${tasks.length > 0 ? Math.round((tasks.filter(t => t.status === 'Completed').length / tasks.length) * 100) : 0}%`} 
                  change="Live Progress" 
                  isPositive={true} 
                  icon="🎯" 
                />
                <StatCard 
                  title="Pending Issues" 
                  value={`${tasks.filter(t => t.status === 'In Progress').length} Issues`} 
                  change="Need action" 
                  isPositive={tasks.filter(t => t.status === 'In Progress').length === 0} 
                  icon="⚠️" 
                />
              </div>

              {/* Interactive Task List */}
              <div className="mt-8">
                <TaskList tasks={tasks} setTasks={setTasks} />
              </div>
            </>
          )}

          {/* TAB 2: DESIGN SYSTEMS */}
          {activeTab === 'systems' && (
            <div className="my-8 p-8 bg-surface border border-border-subtle rounded-xl">
              <span className="text-4xl">🎨</span>
              <h3 className="font-['General_Sans',sans-serif] text-2xl font-bold text-text-primary mt-3">
                Genesis Design Token Library
              </h3>
              <p className="text-base text-text-secondary mt-1 max-w-lg">
                Daftar token warna, tipografi, dan radius yang terdistribusi secara global melalui Tailwind v4 theme.
              </p>

              {/* Mini Token Preview Palette */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-md border border-border-subtle bg-background">
                  <div className="w-full h-8 rounded-sm bg-primary mb-2"></div>
                  <p className="text-sm font-semibold text-text-primary">Primary</p>
                  <p className="text-xs text-text-secondary font-mono">#6366F1</p>
                </div>
                <div className="p-4 rounded-md border border-border-subtle bg-background">
                  <div className="w-full h-8 rounded-sm bg-success mb-2"></div>
                  <p className="text-sm font-semibold text-text-primary">Success</p>
                  <p className="text-xs text-text-secondary font-mono">#10B981</p>
                </div>
                <div className="p-4 rounded-md border border-border-subtle bg-background">
                  <div className="w-full h-8 rounded-sm bg-warning mb-2"></div>
                  <p className="text-sm font-semibold text-text-primary">Warning</p>
                  <p className="text-xs text-text-secondary font-mono">#F59E0B</p>
                </div>
                <div className="p-4 rounded-md border border-border-subtle bg-background">
                  <div className="w-full h-8 rounded-sm bg-error mb-2"></div>
                  <p className="text-sm font-semibold text-text-primary">Error</p>
                  <p className="text-xs text-text-secondary font-mono">#EF4444</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="my-8 p-8 bg-surface border border-border-subtle rounded-xl space-y-6">
              <div>
                <h3 className="font-['General_Sans',sans-serif] text-2xl font-bold text-text-primary">
                  Workspace Preferences
                </h3>
                <p className="text-base text-text-secondary mt-1">
                  Pengaturan lingkungan kerja dan profil sistem.
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-text-primary">Genesis Theme Engine</h4>
                  <p className="text-base text-text-secondary">Standar desain editorial dengan Tailwind CSS v4 & General Sans.</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">
                  Active
                </span>
              </div>

              <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-text-primary">Local Storage Sync</h4>
                  <p className="text-base text-text-secondary">Sinkronisasi tugas aktif ke memori browser via useEffect.</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  Synced
                </span>
              </div>
            </div>
          )}
        </div>
        <NewTaskModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onAddTask={(newTask) => setTasks([...tasks,newTask])} 
          />
      </main>
    </div>
  )
}

export default App