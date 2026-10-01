function StatCard({ title, value, change, isPositive, icon }) {
  return (
    <div className="bg-white border border-[#E8E8EC] rounded-[12px] p-6 flex flex-col justify-between transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-[#6B6B6B]">{title}</span>
        <span className="text-xl opacity-80">{icon}</span>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-['General_Sans',sans-serif] text-[28px] font-bold tracking-[-0.03em] text-[#0A0A0A]">
          {value}
        </h3>
        <span className={`text-[12px] font-medium px-3 py-1 rounded-full ${
          isPositive 
            ? 'bg-[#10B981]/10 text-[#10B981]' 
            : 'bg-[#EF4444]/10 text-[#EF4444]'
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}

export default StatCard