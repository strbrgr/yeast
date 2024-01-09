import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from '@/app/dashboard/projects/page'

test('Index', () => {
  render(<Projects />)
  expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeDefined()
})
