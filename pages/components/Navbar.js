import React from "react"

export default function Navbar() {
  return (
    <nav>
      <span>Drone Technology</span>
      <ul>
        <li>
          <a href="/?home=true">Home</a>
        </li>
        <li>
          <a href="/about">Why drones?</a>
        </li>
      </ul>
    </nav>
  )
}
