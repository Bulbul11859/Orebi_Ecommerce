import React from 'react'
import Flex from './Flex'

const Header = () => {
  return (
    <div className='px-2.5 2xl:max-w-container mx-auto xl:max-w-[1240px]'>
     <Flex className='flex justify-between'>
     <div className='w-1/4 '>fg</div>
     <div className='w-2/4 text-center'>fg</div>
     <div className='w-1/4 text-right'>fg</div>
    </Flex>   
    
    </div>
  )
}

export default Header
