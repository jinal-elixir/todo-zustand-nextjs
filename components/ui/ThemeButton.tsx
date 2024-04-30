'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='rounded  bg-slate-400 px-2 py-1 dark:bg-slate-800 dark:text-white'
      >
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
      {/* <button onClick={() => setTheme('dark')}>Dark Mode</button> */}
    </div>
  )
}

export default ThemeButton
