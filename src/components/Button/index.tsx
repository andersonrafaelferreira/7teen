import styles from './styles.module.css'

export function Button() {
  return(
    <button className={styles.button}>
      <div><svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="28"
      viewBox="0 0 27 28"
    >
      <g fill="none" fillRule="evenodd" transform="translate(.402 1.556)">
        <rect
          width="23.112"
          height="13.544"
          x="1.25"
          y="1.25"
          stroke="#BC431A"
          strokeWidth="2.5"
          rx="1"
        ></rect>
        <path
          stroke="#BC431A"
          strokeLinecap="round"
          strokeWidth="2.5"
          d="M8.537 20.372l4.336 3.898a.1.1 0 00.133 0l4.335-3.898h0"
        ></path>
        <path
          fill="yellow"
          d="M3.767 3.846h1.6V5.43h-1.6zm3.308 0h1.6V5.43h-1.6zm3.308 0h1.6V5.43h-1.6zm3.308 0h1.601V5.43h-1.6zm3.309 0h1.6V5.43H17zm3.308 0h1.6V5.43h-1.6zM3.767 7.118h1.6v1.584h-1.6zm3.308 0h1.6v1.584h-1.6zm3.308 0h1.6v1.584h-1.6zm3.308 0h1.601v1.584h-1.6zm3.309 0h1.6v1.584H17zm3.308 0h1.6v1.584h-1.6zM3.767 10.39h1.6v1.584h-1.6zm3.308 0H18.6v1.584H7.075zm13.233 0h1.6v1.584h-1.6z"
        ></path>
      </g>
    </svg></div>
    </button>
  )
}