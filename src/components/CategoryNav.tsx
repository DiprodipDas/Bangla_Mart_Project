import Link from 'next/link'
import React from 'react'

function CategoryNav() {
  return (
    <>
     <div className="hidden lg:block">
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'> 
            
            <Link className='navbar__link relative' href='#'>
                HOME
            </Link>
            <Link className='navbar__link relative' href='#'>
                CATEGORIES
            </Link>
            <Link className='navbar__link relative' href='#'>
                MEN'S
            </Link>
            <Link className='navbar__link relative' href='#'>
                WOMEN'S
            </Link>
            <Link className='navbar__link relative' href='#'>
                JEWELRY
            </Link>
            <Link className='navbar__link relative' href='#'>
                PERFUME
            </Link>
            
            <Link className='navbar__link relative' href='#'>
                HOT OFFERS
            </Link>
            
            <Link className='navbar__link relative' href='#'>
                BLOG
            </Link>
            
            </div>
        </div>
    </div>
    
    <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div></>
   
  )
}

export default CategoryNav