import ProductCard from "@/components/Card/ProductCard";
import Carousel from "@/components/Carousel";
import Difftext from "@/components/Difftext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Navbar />
        <Carousel/>
        <ProductCard/>
        <Difftext/>
        <Footer/>
       
    </main>
  );
}
