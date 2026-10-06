import { useState } from 'react'

function TaskList({ tasks, setTasks }) {
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
    <div className="bg-white border border-border-subtle rounded-xl overflow-hidden">
      
      {/* Header & Filter Chips */}
      <div className="p-6 border-b border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-['General_Sans',sans-serif] text-2xl font-bold tracking-[-0.03em] text-text-primary">
            Design System Roadmap & Tasks
          </h2>
          <p className="text-base text-text-secondary mt-0.5">
            Track implementation progress according to Genesis design specification.
          </p>
        </div>

        {/* Filter Chips adhering to Genesis chip guidelines */}
        <div className="flex gap-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-3 py-1 rounded-full text-sm font-medium transition duration-200 ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-text-primary'
            }`}
          >
            All ({tasks.length})
          </button>
          <button 
            onClick={() => setFilter('In Progress')} 
            className={`px-3 py-1 rounded-full text-sm font-medium transition duration-200 ${
              filter === 'In Progress' 
                ? 'bg-primary text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-text-primary'
            }`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter('Completed')} 
            className={`px-3 py-1 rounded-full text-sm font-medium transition duration-200 ${
              filter === 'Completed' 
                ? 'bg-primary text-white' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:text-text-primary'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* List Rows with 1px dividers */}
      <div className="divide-y divide-border-subtle">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className="py-3.5 px-6 flex items-center justify-between gap-4 transition duration-150 hover:bg-[#F9F9FB] group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Checkbox adhering to Genesis 20px rounded-full checkbox */}
              <button 
                onClick={() => toggleTaskStatus(task.id)}
                className={`w-5 h-5 rounded-full border flex items-center justify-center text-2xs font-bold transition duration-200 shrink-0 ${
                  task.status === 'Completed' 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-[#D1D5DB] bg-white text-transparent hover:border-neutral-muted'
                }`}
              >
                ✓
              </button>

              {/* Task Title & Metadata */}
              <div className="min-w-0">
                <p className={`text-lg font-medium truncate transition ${
                  task.status === 'Completed' 
                    ? 'line-through text-neutral-muted' 
                    : 'text-text-primary'
                }`}>
                  {task.title}
                </p>
                <span className="text-sm text-text-secondary">{task.category}</span>
              </div>
            </div>

            {/* Semantic Priority Chips & Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                task.priority === 'High' ? 'bg-error/10 text-error' :
                task.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                'bg-[#F3F4F6] text-text-secondary'
              }`}>
                {task.priority}
              </span>

              <button 
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 p-1 text-neutral-muted hover:text-error transition duration-150"
                title="Delete task"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="py-12 text-center text-text-secondary text-base">
            No tasks found in this section.
          </div>
        )}
      </div>

    </div>
  )
}

export default TaskList