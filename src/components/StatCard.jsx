function StatCard({ title, value, change, isPositive, icon }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
      <div className="flex items-center justify-between text-slate-400">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}

export default StatCard