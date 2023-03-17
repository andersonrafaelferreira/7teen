
import classes from '../keyboard/Keyboard.module.css'

function Button(props: any) {

  const BtnEsconder = () => (
    <button type="button" className={classes['apagar-esconder']} onClick={() => props.hideHandler()}>
      <span className={classes['imagem']}>
        <svg
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
              fill="#BC431A"
              d="M3.767 3.846h1.6V5.43h-1.6zm3.308 0h1.6V5.43h-1.6zm3.308 0h1.6V5.43h-1.6zm3.308 0h1.601V5.43h-1.6zm3.309 0h1.6V5.43H17zm3.308 0h1.6V5.43h-1.6zM3.767 7.118h1.6v1.584h-1.6zm3.308 0h1.6v1.584h-1.6zm3.308 0h1.6v1.584h-1.6zm3.308 0h1.601v1.584h-1.6zm3.309 0h1.6v1.584H17zm3.308 0h1.6v1.584h-1.6zM3.767 10.39h1.6v1.584h-1.6zm3.308 0H18.6v1.584H7.075zm13.233 0h1.6v1.584h-1.6z"
            ></path>
          </g>
        </svg>
      </span>
    </button>
  )

  const BtnApagar = () => (
    <button type="button" className={classes['apagar-esconder']} onClick={() => props.deleteHandler()}>
      <span className={classes['imagem']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#BC431A"
              fillRule="nonzero"
              d="M18.86 9.556a.997.997 0 011.4-.016l-.018-.015.068.075a.976.976 0 01.01 1.2l-.081.094-2.48 2.5 2.48 2.5a.976.976 0 01.071 1.294l-.068.073-.076.066a.998.998 0 01-1.305-.096l-2.454-2.475-2.452 2.475a.998.998 0 01-1.306.096l-.08-.069-.064-.07a.976.976 0 01-.01-1.201l.081-.093 2.48-2.5-2.48-2.5a.976.976 0 01-.071-1.294l.063-.072.08-.068a.998.998 0 011.307.096l2.452 2.474z"
            ></path>
            <path
              stroke="#BC431A"
              strokeWidth="2.5"
              d="M22.014 5.583c.76 0 1.447.308 1.944.806.498.497.806 1.185.806 1.944v10.353c0 .76-.308 1.447-.806 1.945a2.741 2.741 0 01-1.944.805h-11.69a.75.75 0 01-.532-.222l-7.63-7.704 7.63-7.704a.75.75 0 01.533-.223z"
            ></path>
          </g>
        </svg>
      </span>
    </button>
  )

  return (
    <div>
      <BtnApagar />
      <BtnEsconder />
    </div>
  )
}

export default Button
