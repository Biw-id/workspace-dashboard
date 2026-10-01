function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between hidden md:flex">
      <div>
        <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-indigo-500/20">W</span>
          <span>Workspace<span className="text-indigo-400">Pro</span></span>
        </div>

        <nav className="mt-8 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm transition">
            <span>📊</span>
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium text-sm transition">
            <span>📋</span>
            <span>Tasks & Projects</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium text-sm transition">
            <span>⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Profile Card */}
      <div className="border-t border-slate-800/80 pt-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
          AB
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white truncate">Abiyyu Shiddiq</h4>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar