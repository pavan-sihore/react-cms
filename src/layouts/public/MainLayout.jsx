import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Navbar from "./partials/Navbar";
import { useRef } from "react";
import HeadNavbar from "./partials/HeadNavbar";

export default function MainLayout() {

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <Header onScrollToTarget={scrollToTarget} />
        <HeadNavbar/>
        <Navbar ref={targetRef} />
        <Outlet/>
    </>
  )
}