function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-[#E8E8EC] p-6 flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        {/* Brand Logo with Genesis typography */}
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-[6px] bg-[#6366F1] flex items-center justify-center text-white text-sm font-bold shadow-[0_2px_8px_rgba(99,102,241,0.3)]">
            G
          </span>
          <span className="font-['General_Sans',sans-serif] text-xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
            Genesis<span className="text-[#6366F1]">.</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8 space-y-1">
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-[6px] bg-[#6366F1]/10 text-[#6366F1] font-medium text-[14px] transition duration-200"
          >
            <span className="text-base">📊</span>
            <span>Overview</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-[6px] text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#F3F4F6] font-medium text-[14px] transition duration-200"
          >
            <span className="text-base">📋</span>
            <span>Design Systems</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3.5 py-2 rounded-[6px] text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#F3F4F6] font-medium text-[14px] transition duration-200"
          >
            <span className="text-base">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* User Profile Card at bottom */}
      <div className="border-t border-[#E8E8EC] pt-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#F3F4F6] text-[#0A0A0A] font-bold flex items-center justify-center text-xs border border-[#E8E8EC]">
          AB
        </div>
        <div className="min-w-0">
          <h4 className="text-[13px] font-semibold text-[#0A0A0A] truncate">Abiyyu Shiddiq</h4>
          <p className="text-[11px] text-[#6B6B6B]">Lead Designer</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar