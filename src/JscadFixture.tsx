import React from "react"

const AxisHelper = () => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: "absolute",
      bottom: 8,
      right: 8,
      width: 60,
      height: 60,
      pointerEvents: "none",
    }}
  >
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
      </marker>
    </defs>
    <line x1="50" y1="50" x2="90" y2="50" stroke="red" strokeWidth="4" markerEnd="url(#arrow)" />
    <text x="94" y="52" fontSize="10" fill="red">X</text>
    <line x1="50" y1="50" x2="50" y2="10" stroke="green" strokeWidth="4" markerEnd="url(#arrow)" />
    <text x="52" y="8" fontSize="10" fill="green">Y</text>
    <line x1="50" y1="50" x2="20" y2="80" stroke="blue" strokeWidth="4" markerEnd="url(#arrow)" />
    <text x="14" y="84" fontSize="10" fill="blue">Z</text>
  </svg>
)

export const JscadFixture = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#fff" }}>
      {children}
      <AxisHelper />
    </div>
  )
}

export default JscadFixture
