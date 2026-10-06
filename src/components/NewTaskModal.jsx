import { useState } from "react"

// src/components/NewTaskModal.jsx
function NewTaskModal({ isOpen, onClose, onAddTask }) {
  // Jika instruksinya false (tutup), maka jangan gambar apa-apa di layar
  if (!isOpen) return null 
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Design System')
  const [priority, setPriority] = useState('Low')
  const handleSubmit = (e) => {
    e.preventDefault() // Wajib! Mencegah halaman web ter-refresh otomatis saat form disubmit
    
    // 1. Siapkan bungkusan tugas baru
    const newTask = {
      id: Date.now(), // Bikin ID acak pakai waktu saat ini
      title: title,
      category: category,
      status: 'In Progress', // Default status
      priority: priority
    }

    // 2. Serahkan bungkusan ke kurir
    onAddTask(newTask)

    // 3. Bersihkan form & tutup modal
    setTitle('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-border-subtle p-6">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-['General_Sans',sans-serif] text-2xl font-bold text-text-primary">Add New Task</h3>
          <button onClick={onClose} className="text-neutral-muted hover:text-error text-xl">&times;</button>
        </div>

        <div className="text-lg text-text-secondary py-4">
          {/* Form Inputs */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Task Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g., Update color tokens..."
                className="w-full px-3.5 py-2.5 bg-surface border border-border-subtle rounded-md text-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3.5 py-2.5 bg-surface border border-border-subtle rounded-md text-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition appearance-none">
                  <option>Design System</option>
                  <option>Core UI</option>
                  <option>Typography</option>
                  <option>Feature</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full px-3.5 py-2.5 bg-surface border border-border-subtle rounded-md text-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10 transition appearance-none">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex gap-3 justify-end border-t border-border-subtle mt-6">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-border-subtle text-text-primary text-lg font-medium hover:bg-[#F3F4F6] transition">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white text-lg font-medium hover:bg-primary-hover hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(99,102,241,0.35)] transition">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewTaskModal