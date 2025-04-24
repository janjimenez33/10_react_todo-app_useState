import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ItemCard } from './ItemCard'
import styles from './ItemCard.module.css'

describe('ItemCard', () => {
  it('renders pending task correctly', () => {
    // Arrange
    const pendingItem = {
      title: 'Pending Task',
      description: 'Test Description',
      status: 'pending'
    }

    // Act
    render(<ItemCard item={pendingItem} />)

    const title = screen.getByText('Pending Task')

    const description = screen.getByText('Test Description')

    const status = screen.getByText('pending')

    // Assert
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass(styles['item-card__status--pending'])
  })

  it('renders in progress task correctly', () => {
    // Arrange
    const inProgressItem = {
      title: 'In Progress Task',
      description: 'Test Description',
      status: 'in progress'
    }

    // Act
    render(<ItemCard item={inProgressItem} />)

    const title = screen.getByText('In Progress Task')

    const description = screen.getByText('Test Description')

    const status = screen.getByText('in progress')

    // Assert
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(title).toHaveClass(styles['item-card__title--in-progress'])
    expect(status).toHaveClass(styles['item-card__status--in-progress'])
  })

  it('renders done task correctly', () => {
    // Arrange
    const doneItem = {
      title: 'Done Task',
      description: 'Test Description',
      status: 'done'
    }

    // Act
    render(<ItemCard item={doneItem} />)

    const title = screen.getByText('Done Task')

    const description = screen.getByText('Test Description')
    
    const status = screen.getByText('done')

    // Assert
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(title).toHaveClass(styles['item-card__title--done'])
    expect(status).toHaveClass(styles['item-card__status--done'])
  })
})
