"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
// import {signIn, singOut, useSession, getProvider} from "next-auth/react";


 export const isUserLoggedIn = true;

const Nav = () => {

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
        <img src="https://i.ibb.co/3RpKwv4/logo.jpg" alt="CookItUplogo"width={37} height={37} className="object-contain"/>
        {/* <Image src="https://ibb.co/3hcpmHw" alt="" width={37} height={37} className="object-contain"/> */}
        <p className='logo_text'>CookItUp</p>
        </Link>
        {/* desktop navigation */}
        <div classNAme="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                {/* profile */}
                <Link href="/profile">
                    <img src="./assets/images/logo.svg" width={37} height={37} className="round-full" alt="profile"/>
                </Link>
                </div>
            ): (
                <Link href="/login">
                    <button
                    type="button"
                    className="black_btn">Login</button>
                {/* login  */}
                </Link>
                )
            }

        </div>
    </nav>
  )
}

const NavLoginPage = () => {

    return (
      <nav className='flex-between w-full mb-16 pt-3'>
          <Link href='/' className='flex gap-2 flex-center'>
          <img src="https://i.ibb.co/3RpKwv4/logo.jpg" alt="CookItUplogo"width={37} height={37} className="object-contain"/>
          {/* <Image src="https://ibb.co/3hcpmHw" alt="" width={37} height={37} className="object-contain"/> */}
          <p className='logo_text'>CookItUp</p>
          </Link>
      </nav>
    )
  }


export { Nav, NavLoginPage}