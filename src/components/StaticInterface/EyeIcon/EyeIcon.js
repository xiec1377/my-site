import React from 'react'
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi'
// import { ReactIconsProvider } from 'react-icons-context'
// import { IconContext } from 'react-icons'
import { useRef, useEffect } from 'react'

function EyeIcon() {
  const buttonRef = useRef()

  useEffect(() => {
    const applyContainerProperties = () => {
      buttonRef.current.classList.add('effect-container')
    }
    const onClick = () => {
      buttonRef.current.classList.remove('active')
      buttonRef.current.classList.add('active')
    }
    applyContainerProperties()
    buttonRef.current.addEventListener('mouseup', onClick)
    const cleanupRef = buttonRef.current
    return () => {
      cleanupRef.removeEventListener('mouseup', onClick)
    }
  })

  return (
    <div className="hello" ref={buttonRef}>
      <button>Button</button>
    </div>
  )
}

export default EyeIcon

{
  /* <<div style={{ color: 'red' }}>
      <HiOutlineEye size={100} />
    </div>
) */
}
