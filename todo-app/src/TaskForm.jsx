import { useState } from 'react'
import styles from './TaskForm.module.css'

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('pending')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return

    onAddTask({
      id: Date.now(),
      title,
      description,
      status
    })

    setTitle('')
    setDescription('')
    setStatus('pending')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className={styles.textarea}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={styles.select}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  )
}
