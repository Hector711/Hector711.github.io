import * as React from "react"

export default function Mail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#31323e"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}