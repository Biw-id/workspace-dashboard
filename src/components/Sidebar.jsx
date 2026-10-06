function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-border-subtle p-6 flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        {/* Brand Logo with Genesis typography */}
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white text-sm font-bold shadow-[0_2px_8px_rgba(99,102,241,0.3)]">
            G
          </span>
          <span className="font-['General_Sans',sans-serif] text-xl font-bold tracking-[-0.03em] text-text-primary">
            Genesis<span className="text-primary">.</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8 space-y-1">
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-md bg-primary/10 text-primary font-medium text-lg transition duration-200"
          >
            <span className="text-base">📊</span>
            <span>Overview</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-[#F3F4F6] font-medium text-lg transition duration-200"
          >
            <span className="text-base">📋</span>
            <span>Design Systems</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-[#F3F4F6] font-medium text-lg transition duration-200"
          >
            <span className="text-base">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* User Profile Card at bottom */}
      <div className="border-t border-border-subtle pt-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#F3F4F6] text-text-primary font-bold flex items-center justify-center text-xs border border-border-subtle">
          AB
        </div>
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-text-primary truncate">Abiyyu Shiddiq</h4>
          <p className="text-xs text-text-secondary">Lead Designer</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar