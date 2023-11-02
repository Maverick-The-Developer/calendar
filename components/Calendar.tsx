'use client'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Calendar.css'

export default function Calendar() {
  const plenary = ['2023-10-20', '2023-11-13', '2023-11-16'] // 본회의 일정
  const commitee = ['2023-10-30', '2023-11-13', '2023-11-19'] // 위원회 일정
  const [currentMonth, setCurrentMonth] = useState<string>(dateToString(new Date()))

  function navMonth(step: number) {
    const [year, monthIndex, _] = splitThisMonth(currentMonth)
    const newMonth = new Date(year, monthIndex + step, 1)
    setCurrentMonth(dateToString(newMonth))
  }

  return (
    <div className='Calendar'>
      <div className='calendar-title'>
        <button onClick={() => navMonth(-1)}>
          <FaChevronLeft />
        </button>
        <p>
          {splitThisMonth(currentMonth).at(0)}년 {splitThisMonth(currentMonth).at(1)! + 1}
          월
        </p>
        <button onClick={() => navMonth(+1)}>
          <FaChevronRight />
        </button>
      </div>
      <div className='day-name-bar'>
        <p>일</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
      </div>
      <CalendarBody thisMonth={currentMonth} plenary={plenary} commitee={commitee} />
      <div className='calendar-footer'>
        <p>
          <span className='text-icon bon'></span>
          본회의
        </p>
        <p>
          <span className='text-icon wi'></span>
          위원회
        </p>
      </div>
    </div>
  )
}

function CalendarBody({
  thisMonth,
  plenary,
  commitee,
}: {
  thisMonth: string
  plenary: string[]
  commitee: string[]
}) {
  const [year, monthIndex, _] = splitThisMonth(thisMonth)
  const firstDate = new Date(year, monthIndex, 1)
  const firstDay = firstDate.getDay()
  const lastDate = new Date(year, monthIndex + 1, 0)
  const tempArray = []

  let dateNum = 1
  for (let i = 0; i < 42; i++) {
    if (i < firstDay) {
      tempArray.push('')
    } else if (dateNum > lastDate.getDate()) {
      tempArray.push('')
    } else {
      const tempMonth = (firstDate.getMonth() + 1).toString().padStart(2, '0')
      const tempDate = dateNum.toString().padStart(2, '0')
      const tempDateStr = `${year}-${tempMonth}-${tempDate}`
      tempArray.push(tempDateStr)
      dateNum++
    }
  }

  return (
    <div className='calendar-body'>
      {tempArray.map((date, idx) => {
        return (
          <div key={idx} className={isToday(date) ? 'today' : 'null'}>
            <span>{dateOnly(date)}</span>
            {plenary.includes(date) ? <p className='text-icon bon'></p> : null}
            {commitee.includes(date) ? <p className='text-icon wi'></p> : null}
          </div>
        )
      })}
    </div>
  )
} // end of function CalendarBody(props)

/**
 *
 * @param date : Date
 * @returns string ex: '2023-05-05'
 */
function dateToString(date: Date): string {
  const tempYear = date.getFullYear().toString()
  const tempMonth = (date.getMonth() + 1).toString().padStart(2, '0')
  const tempDate = date.getDate().toString().padStart(2, '0')
  return `${tempYear}-${tempMonth}-${tempDate}`
}

/**
 *
 * @param thisMonth : ex '2023-01-01'
 * @returns array of numbers : ex [2023, 1, 1]
 */
function splitThisMonth(thisMonth: string) {
  const year = parseInt(thisMonth.split('-').at(0)!, 10)
  const monthIndex = parseInt(thisMonth.split('-').at(1)!, 10) - 1
  const date = parseInt(thisMonth.split('-').at(2)!, 10)
  return [year, monthIndex, date]
}

/**
 *
 * @param dateString ex) '2023-04-01
 * @returns int ex) 1
 */
function dateOnly(dateString: string) {
  const tempArray = dateString.split('-')
  if (tempArray && tempArray.length == 3) {
    const tempNum = parseInt(tempArray[2], 10)
    if (isNaN(tempNum)) {
      return ''
    } else {
      return tempNum.toString()
    }
  } else {
    return ''
  }
}

/**
 * 
 * @param dateStr ex) '2023-10-05'
 * @returns true or false
 */
function isToday(dateStr: string): boolean {
  const todayStr = dateToString(new Date())
  return todayStr === dateStr
}

