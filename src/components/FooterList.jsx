import React from 'react'

const FooterList = ({footerTitle,liOne,litwo,lithree,liFour,liFive}) => {
  return (
    <div>
        <h5 className='text-[25px] font-poppins font-bold'>{footerTitle}</h5>
        <ul className='flex flex-col font-poppins font-normal py-[10px] gap-y-[20px]'>
            <li className='text-paraText'>{liOne}</li>
            <li className='text-paraText'>{litwo}</li>
            <li className='text-paraText'>{lithree}</li>
            <li className='text-paraText'>{liFour}</li>
            <li className='text-paraText'>{liFive}</li>
        </ul>
    </div>
  )
}

export default FooterList