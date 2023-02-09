import React from 'react'
import Category from '../Category'
import MainHeader from './MainHeader'
import Carousel from "./Carousel";
import Support from "../support/Support";

const Main = () => {
  return (
    <>
        <MainHeader />
        <Carousel/>
        <Category />
        <Support />
    </>
  )
}

export default Main
