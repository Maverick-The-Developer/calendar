import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Calendar.css'

type Props = {}

export default function Calendar({}: Props) {

  const plenary = ['2023-10-20', '2023-11-13', '2023-11-16']  // 본회의 일정
  const commitee = ['2023-10-30', '2023-11-13', '2023-11-19'] // 위원회 일정

  return (
    <div className='Calendar'>
      <div className='calendar-title'>
        <button>
          <FaChevronLeft />
        </button>
        <p>2023년 11월</p>
        <button>
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
      <div className='calendar-body'>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <div>
          <span>4</span>
        </div>
        <div>
          <span>5</span>
        </div>
        <div>
          <span>6</span>
        </div>
        <div>
          <span>7</span>
        </div>
        <div>
          <span>8</span>
        </div>
        <div>
          <span>9</span>
        </div>
        <div>
          <span>10</span>
        </div>
        <div>
          <span>11</span>
        </div>
        <div>
          <span>12</span>
        </div>
        <div>
          <span>13</span>
          <p className='text-icon bon'></p>
          <p className='text-icon wi'></p>
        </div>
        <div>
          <span>14</span>
        </div>
        <div className='today'>
          <span>15</span>
        </div>
        <div>
          <span>16</span>
          <p className='text-icon bon'></p>
        </div>
        <div>
          <span>17</span>
        </div>
        <div>
          <span>18</span>
        </div>
        <div>
          <span>19</span>
          <p className='text-icon wi'></p>
        </div>
        <div>
          <span>20</span>
        </div>
        <div>
          <span>21</span>
        </div>
        <div>
          <span>22</span>
        </div>
        <div>
          <span>23</span>
        </div>
        <div>
          <span>24</span>
        </div>
        <div>
          <span>25</span>
        </div>
        <div>
          <span>26</span>
        </div>
        <div>
          <span>27</span>
        </div>
        <div>
          <span>28</span>
        </div>
        <div>
          <span>29</span>
        </div>
        <div>
          <span>30</span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>
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
