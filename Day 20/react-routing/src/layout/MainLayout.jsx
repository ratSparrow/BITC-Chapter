import { Outlet } from "react-router-dom";
import Footer from "../components/share/Footer";
import Header from "../components/share/Header";

export default function MainLayout() {
  return (
    <>
      <Header></Header>
        <Outlet></Outlet>
        <div className="min-h-screen"></div>
      <Footer></Footer>
    </>
  )
}
