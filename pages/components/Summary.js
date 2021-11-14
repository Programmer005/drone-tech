import React from "react"

export default function Summary({ title, desc }) {
  return (
    <>
      <details>
        <summary>{title}</summary>
        <p>{desc}</p>
      </details>
    </>
  )
}
