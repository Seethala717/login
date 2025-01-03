import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

export const Browser = () => {
  return (
    <div>
        <BrowserRouter>
        <Router></Router>
        </BrowserRouter>
    </div>
  )
}
