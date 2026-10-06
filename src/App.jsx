import { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TaskList from './components/TaskList'
import NewTaskModal from './components/NewTaskModal'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Export Figma Tokens to Tailwind v4 Theme', category: 'Design System', status: 'Completed', priority: 'High' },
    { id: 2, title: 'Refactor StatCard Component Elevation to Flat-Border', category: 'Core UI', status: 'Completed', priority: 'High' },
    { id: 3, title: 'Implement DM Sans & General Sans Typography Hierarchy', category: 'Typography', status: 'In Progress', priority: 'Medium' },
    { id: 4, title: 'Build Modal Dialog for New Design System Upload', category: 'Feature', status: 'In Progress', priority: 'Low' }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-background text-text-primary flex font-['DM_Sans',sans-serif]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-md border-b border-border-subtle px-6 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-text-secondary">Design Systems</span>
            <span className="text-neutral-muted">/</span>
            <span className="text-base font-semibold text-text-primary">Overview</span>
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

          {/* Metric Cards Grid (24px gap, 12px radius, minimal shadows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <StatCard 
              title="Published Systems" 
              value="14 Systems" 
              change="+24% this mo" 
              isPositive={true} 
              icon="📦" 
            />
            <StatCard 
              title="Token Coverage" 
              value="94.2%" 
              change="+4.5% vs target" 
              isPositive={true} 
              icon="🎯" 
            />
            <StatCard 
              title="Unresolved Issues" 
              value="3 Issues" 
              change="-2 vs last wk" 
              isPositive={false} 
              icon="⚠️" 
            />
          </div>

          {/* Interactive Task List */}
          <div className="mt-8">
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
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