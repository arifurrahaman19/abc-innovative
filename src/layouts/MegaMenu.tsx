import React from 'react'
import ABCBlackLogo from '@/assets/svg/abc-logo-black.svg'
import MegaMenuIcon1 from '@/assets/svg/icon-1-m-menu.svg'

const MegaMenu = (props: any) => {
  return (
    <div className="absolute min-w-[300px] bg-neutral-500 p-6 right-0 top-[72px] rounded-3xl" ref={props.megaMenuRef} onMouseLeave={props.onMouseLeave}>
      <div className='flex'>
        <div className='basis-0 grow mr-4 bg-neutral-600 rounded-xl p-4'>
          <div className='hover:bg-[#D3F699] p-2 text-white hover:text-neutral-600 hover:rounded-lg cursor-default'>
            <h3 className='text-base font-medium'>Headless website</h3>
            <p className='text-base font-normal'>Build modern, decoupled web experiences</p>
          </div>
          <div className='hover:bg-[#D3F699] p-2 text-white hover:text-neutral-600 hover:rounded-lg  cursor-default'>
            <h3 className='text-base font-medium'>Headless website</h3>
            <p className='text-base font-normal'>Build modern, decoupled web experiences</p>
          </div>
        </div>
        <div className='flex basis-0 grow-[1.5]'>
          <div className='mr-10 basis-0 grow'>
            <div className='text-white flex'>
              <MegaMenuIcon1 className="w-[32px] h-[32px] mt-1" />
              <div className='ml-4'>
                <h4 className='font-normal text-base'>Progressive Web Apps</h4>
                <p className='font-normal text-sm'>Offline-capable web apps</p></div>
            </div>
          </div>
          <div className='basis-0 grow'>
            <div className='bg-primary-700 p-[40px] rounded-2xl text-center flex flex-col items-center'>
              <ABCBlackLogo className="h-[80px] w-auto" />
              <h3 className='text-[28px] text-black font-medium leading-[1.1]'>The Best Design Agency</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu