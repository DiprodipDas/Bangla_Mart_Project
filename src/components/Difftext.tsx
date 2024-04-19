import React from 'react'

function Difftext() {
  return (
    <div className='hidden lg:block' style={{
        marginBottom:'15px'
    }}>
<div className="diff aspect-[5/1]">
  <div className="diff-item-1">
    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">BanglaMart</div>
  </div>
  <div className="diff-item-2">
    <div className="bg-base-200 text-9xl font-black grid place-content-center">BanglaMart</div>
  </div>
  <div className="diff-resizer"></div>
</div>

    </div>
  )
}

export default Difftext