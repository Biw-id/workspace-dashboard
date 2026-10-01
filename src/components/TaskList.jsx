import { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Export Figma Tokens to Tailwind v4 Theme', category: 'Design System', status: 'Completed', priority: 'High' },
    { id: 2, title: 'Refactor StatCard Component Elevation to Flat-Border', category: 'Core UI', status: 'Completed', priority: 'High' },
    { id: 3, title: 'Implement DM Sans & General Sans Typography Hierarchy', category: 'Typography', status: 'In Progress', priority: 'Medium' },
    { id: 4, title: 'Build Modal Dialog for New Design System Upload', category: 'Feature', status: 'In Progress', priority: 'Low' }
  ])

  const [filter, setFilter] = useState('all')

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === 'Completed' ? 'In Progress' : 'Completed'
        }
      }
      return task
    }))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    return task.status === filter
  })

  return (
    <div className="bg-white border border-[#E8E8EC] rounded-[12px] overflow-hidden">
      
      {/* Header & Filter Chips */}
      <div className="p-6 border-b border-[#E8E8EC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-['General_Sans',sans-serif] text-[20px] font-bold tracking-[-0.03em] text-[#0A0A0A]">
            Design System Roadmap & Tasks
          </h2>
          <p className="text-[13px] text-[#6B6B6B] mt-0.5">
            Track implementation progress according to Genesis design specification.
          </p>
        </div>

        {/* Filter Chips adhering to Genesis chip guidelines */}
        <div className="flex gap-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-3 py-1 rounded-full text-[12px] font-medium transition duration-200 ${
              filter === 'all' 
                ? 'bg-[#6366F1] text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-[#0A0A0A]'
            }`}
          >
            All ({tasks.length})
          </button>
          <button 
            onClick={() => setFilter('In Progress')} 
            className={`px-3 py-1 rounded-full text-[12px] font-medium transition duration-200 ${
              filter === 'In Progress' 
                ? 'bg-[#6366F1] text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-[#0A0A0A]'
            }`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter('Completed')} 
            className={`px-3 py-1 rounded-full text-[12px] font-medium transition duration-200 ${
              filter === 'Completed' 
                ? 'bg-[#6366F1] text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-[#0A0A0A]'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* List Rows with 1px dividers */}
      <div className="divide-y divide-[#E8E8EC]">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className="py-3.5 px-6 flex items-center justify-between gap-4 transition duration-150 hover:bg-[#F9F9FB] group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Checkbox adhering to Genesis 20px rounded-full checkbox */}
              <button 
                onClick={() => toggleTaskStatus(task.id)}
                className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold transition duration-200 shrink-0 ${
                  task.status === 'Completed' 
                    ? 'bg-[#6366F1] border-[#6366F1] text-white' 
                    : 'border-[#D1D5DB] bg-white text-transparent hover:border-[#9C9C9C]'
                }`}
              >
                ✓
              </button>

              {/* Task Title & Metadata */}
              <div className="min-w-0">
                <p className={`text-[14px] font-medium truncate transition ${
                  task.status === 'Completed' 
                    ? 'line-through text-[#9C9C9C]' 
                    : 'text-[#0A0A0A]'
                }`}>
                  {task.title}
                </p>
                <span className="text-[12px] text-[#6B6B6B]">{task.category}</span>
              </div>
            </div>

            {/* Semantic Priority Chips & Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                task.priority === 'High' ? 'bg-[#EF4444]/10 text-[#EF4444]' :
                task.priority === 'Medium' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                'bg-[#F3F4F6] text-[#6B6B6B]'
              }`}>
                {task.priority}
              </span>

              <button 
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 p-1 text-[#9C9C9C] hover:text-[#EF4444] transition duration-150"
                title="Delete task"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="py-12 text-center text-[#6B6B6B] text-[13px]">
            No tasks found in this section.
          </div>
        )}
      </div>

    </div>
  )
}

export default TaskList