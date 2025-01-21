import React from 'react'
import { render, screen  } from '@testing-library/react';
import { describe, it } from 'vitest'
import Home from '@/app/page';

describe('App', () => {
  it('renders the App component', () => {
    render(<Home />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})