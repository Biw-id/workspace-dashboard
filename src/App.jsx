import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] flex font-['DM_Sans',sans-serif]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-md border-b border-[#E8E8EC] px-6 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium text-[#6B6B6B]">Design Systems</span>
            <span className="text-[#9C9C9C]">/</span>
            <span className="text-[13px] font-semibold text-[#0A0A0A]">Overview</span>
          </div>

          <div className="flex items-center gap-3">
            {/* ⌘K Search trigger placeholder */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-[#E8E8EC] bg-[#FAFAFA] text-[13px] text-[#9C9C9C]">
              <span>Search systems...</span>
              <kbd className="px-1.5 py-0.5 rounded-[4px] bg-white border border-[#E8E8EC] text-[10px] font-mono text-[#6B6B6B]">⌘K</kbd>
            </div>
          </div>
        </header>

        {/* Dashboard Body Container (Max 1280px, 24px padding) */}
        <div className="max-w-[1280px] mx-auto p-6 sm:p-8">
          
          {/* Section Heading & Primary CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-[#E8E8EC]">
            <div>
              <h1 className="font-['General_Sans',sans-serif] text-[32px] font-bold tracking-[-0.03em] text-[#0A0A0A] leading-tight">
                Design System Manager
              </h1>
              <p className="text-[15px] text-[#6B6B6B] mt-1">
                Editorial precision interface for managing and distributing design tokens.
              </p>
            </div>

            {/* Primary Button adhering to Genesis: 6px radius, hover glow, 1px lift */}
            <button className="h-[38px] px-4 rounded-[6px] bg-[#6366F1] hover:bg-[#4F46E5] text-white text-[14px] font-medium transition duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(99,102,241,0.35)] flex items-center gap-2">
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
            <TaskList />
          </div>

        </div>
      </main>
    </div>
  )
}

export default App