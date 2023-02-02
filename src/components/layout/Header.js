import React,{useEffect, useRef,useState} from "react";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import List from "./List";
import ListItem from "./ListItem";

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropSownShow, setUserDropSownShow] = useState(false);
  let [cartDropSownShow, setCartDropSownShow] = useState(false);
  let categooryRef = useRef();
  useEffect(()=>{
    document.body.addEventListener('click',(e)=>{
      if(categooryRef.current.contains(e.target)){
        setCategoryDropDownShow(true)
      }
      else{
        setCategoryDropDownShow(false)
      }
    })
  },[])
  
  return (
    <div className="mx-auto px-2.5 xl:max-w-[1240px] 2xl:max-w-container">
      <Flex className="flex justify-between">
        <div className="w-1/6">
          <Dropdown className="relative z-50" dropref={categooryRef}>
            <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
              <FaBars />{" "}
              <span className="hidden lg:inline-block">Shop by Category</span>
            </p>
            {categoryDropDownShow && (
                <List className="font-regular absolute top-8 w-[263px] bg-primary font-dm text-sm text-[#767676]">
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Accesories"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Furniture "
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Electronics"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Clothes"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Bags"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    item="Home appliances"
                  />
                </List>
              )}
          </Dropdown>
        </div>
        <div className="w-2/4 text-center">fg</div>
        <div className="w-1/4 text-right">fg</div>
      </Flex>
    </div>
  );
};

export default Header;
