import ProductCard from "@/components/Card/ProductCard";
import Carousel from "@/components/Carousel";
import Difftext from "@/components/Difftext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewProducts from "@/components/Products/NewProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Navbar />
        <Carousel/>
        <NewProducts></NewProducts>
        <Difftext/>
        <Footer/>
       
    </main>
  );
}
