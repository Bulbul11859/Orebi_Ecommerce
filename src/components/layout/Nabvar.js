import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Images from './Images'
import List from './List'
import ListItem from './ListItem'
import {GoThreeBars} from 'react-icons/go'

const Nabvar = () => {
    let [show,setShow]=useState(true)
    useEffect(()=>{
      function scrollWidth(){
        if(window.innerWidth<1024){
          setShow(false)
        }
        else{
          setShow(true)
        }
      }
      scrollWidth()
      window.addEventListener('resize',scrollWidth)
    },[])
    console.log(show);
  return (
    <nav className='py-8 px-2.5 2xl:max-w-container mx-auto xl:max-w-[1240px]'>
    <Flex className='flex'>
      <div className='w-3/12	'> 
      <Images imgsrc="assets/logo.png"/>
      </div>
      
      <div className='w-9/12 '>
      <div className='lg:hidden flex justify-end' onClick={(()=>setShow(!show))}><GoThreeBars/></div>
      {show &&
     
        <List className='flex mt-5 px-5 lg:mt-0 lg:px-0 flex-col lg:flex-row text-right justify-end gap-x-10 gap-y-6 font-dm text-sm font-regular'>
          <ListItem className='hover:font-bold cursor-pointer' item='Home' />
          <ListItem className='hover:font-bold cursor-pointer' item='Shop'/>
          <ListItem className='hover:font-bold cursor-pointer' item='About'/>
          <ListItem className='hover:font-bold cursor-pointer' item='Contact'/>
          <ListItem className='hover:font-bold cursor-pointer' item='Journal'/>
        </List>
         }
        </div>
    </Flex>
  </nav>
  )
}

export default Nabvar
