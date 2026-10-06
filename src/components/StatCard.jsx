function StatCard({ title, value, change, isPositive, icon }) {
  return (
    <div className="bg-white border border-border-subtle rounded-xl p-6 flex flex-col justify-between transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-text-secondary">{title}</span>
        <span className="text-xl opacity-80">{icon}</span>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-['General_Sans',sans-serif] text-3xl font-bold tracking-[-0.03em] text-text-primary">
          {value}
        </h3>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          isPositive 
            ? 'bg-success/10 text-success' 
            : 'bg-error/10 text-error'
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}

export default StatCard