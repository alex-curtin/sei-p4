import React from 'react'

export default function Turntable(props) {
  return (
    <div>
      <div className={`turntable  ${props.size}`}>
        <div className="tt-base">
          <div className="knob-1"></div>
          <div className="knob-2"></div>
          <div className="tt-arm">
            <div className="tt-arm-1"></div>
            <div className="tt-arm-2"></div>
            <div className="tt-arm-3"></div>
          </div>
          <div className="tt-disc">
            <div className="tt-ring-1">
              <div className="tt-ring-2">
                <div className="tt-ring-3">
                  <div className="tt-center">
                    <div className="tt-spindle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
