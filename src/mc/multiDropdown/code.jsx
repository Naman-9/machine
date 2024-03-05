import React from 'react'
import { menuData } from './menuData'

/**
 * style.display == none for first time
 * event propogation
 * 
 */


function DropDown() {

    /* function getting triggered twice due to event prop 
        from child to parent making block to none 
    */
    const toggleSubMenu = (e) => {
        e.stopPropagation();
        let subMenu = e.target.querySelector("ul");   // accessning submenu of parent

        if(!subMenu) return;

        if(subMenu.style.display === "none" || !subMenu.style.display ){
            subMenu.style.display = "block";
        } else {
            subMenu.style.display = "none";
        }

    }

    const renderSubMenu = (subMenu) => {
        return(
            // children menu's
            <ul className='ml-4 hidden'>
            {
                subMenu.map((item, idx) =>  (
                    <li 
                        key={idx} 
                        onClick={toggleSubMenu}
                        className= {item.submenu && `before:h-4 before:w-4 before:rounded-full` }
                    >
                        
                        {item.label}                        
                        { item.submenu && renderSubMenu(item.submenu) }

                    </li>
                ) )
            }
        </ul>
        )
    }

  return (
    <div>
        <ul>
            {
                menuData.map((item, idx) =>  (
                    <li key={idx} onClick={toggleSubMenu} className= {item.submenu && `before:h-4 before:w-4 before:rounded-full` }
                    >
                        
                        {item.label}
                        
                        { item.submenu && renderSubMenu(item.submenu) }

                    </li>
                ) )
            }
        </ul>
    </div>
  )
}

export default DropDown




