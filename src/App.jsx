import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Area Sidebar Kiri Nanti di Sini */}
      <Sidebar />

      {/* Area Konten Utama Kanan */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center pb-8 border-b border-slate-900">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-sm text-slate-400 mt-1">Selamat datang kembali, Kapten! Pantau progres kerjamu hari ini.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/20 transition">
            + Tambah Tugas
          </button>
        </header>
        {/* Grid 3 Kartu Statistik Menggunakan Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <StatCard 
            title="Total Proyek" 
            value="12 Proyek" 
            change="+25% bln ini" 
            isPositive={true} 
            icon="💼" 
          />
          <StatCard 
            title="Tugas Selesai" 
            value="48 / 60" 
            change="+12% bln ini" 
            isPositive={true} 
            icon="✅" 
          />
          <StatCard 
            title="Jam Produktif" 
            value="128 Jam" 
            change="-4% bln ini" 
            isPositive={false} 
            icon="⏱️" 
          />
        </div>

        <div className="mt-8 text-slate-600 border border-dashed border-slate-800 rounded-2xl h-96 flex items-center justify-center">
          (Area Statistik & Data Table Nanti di Sini)
        </div>
      </main>
    </div>
  )
}

export default App