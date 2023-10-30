import Calendar from '@/components/Calendar'
import React from 'react'

type Props = {}

export default function MainPage({}: Props) {
  return (
    <main className='MainPage'>
      <Calendar />
    </main>
  )
}