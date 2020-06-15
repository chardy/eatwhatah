import React from 'react'

export default function Button(props) {
  const { children, onClick, value } = props
  return (
    <button type="button" onClick={onClick} value={value} className="inline-flex items-center justify-center px-6 py-3 text-base leading-6 font-bold rounded-lg text-black bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 w-full">
      { children }
    </button>
  )
}
