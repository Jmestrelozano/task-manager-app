import React from 'react'
import { render  } from '@testing-library/react';
import Home from '@/app/page';

describe('App', () => {
  it('renders the App component', () => {
    render(<Home />)
  })
})