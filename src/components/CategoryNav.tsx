"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa";

function CategoryNav() {
  const cart = useAppSelector((state) => state.cartSlice.products);
  return (
    <div className='hidden lg:block'>
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
          <div className='flex'>
            <FaOpencart />
            {!!cart && cart.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryNav;
