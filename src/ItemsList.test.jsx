import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ItemsList } from './ItemsList'

describe('ItemsList', () => {
  // Arrange 
  const mockItems = [
    {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Another Task',
      description: 'Another Description',
      status: 'in progress'
    }
  ]

  it('renders list of items correctly', () => {
    // Arrange
    const expectedItems = mockItems

    // Act
    render(<ItemsList itemsList={expectedItems} />)

    const titles = expectedItems.map(item => screen.getByText(item.title))

    const descriptions = expectedItems.map(item => screen.getByText(item.description))

    const statuses = expectedItems.map(item => screen.getByText(item.status))

    // Assert
    titles.forEach(title => expect(title).toBeInTheDocument())
    descriptions.forEach(desc => expect(desc).toBeInTheDocument())
    statuses.forEach(status => expect(status).toBeInTheDocument())
  })

  it('renders empty list when no items provided', () => {
    // Arrange
    const emptyList = []

    // Act
    render(<ItemsList itemsList={emptyList} />)

    const list = screen.getByRole('list')

    // Assert
    expect(list).toBeInTheDocument()
    expect(list.children).toHaveLength(0)
  })

  it('renders correct number of items', () => {
    // Arrange
    const expectedItemCount = mockItems.length

    // Act
    render(<ItemsList itemsList={mockItems} />)
    
    const list = screen.getByRole('list')

    // Assert
    expect(list.children).toHaveLength(expectedItemCount)
  })
})
