import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import AboutSection from "../../components/home/AboutSection";
import FeaturedProducts from "../../components/home/FeaturedProducts";

function Home() {
  return (
    <MainLayout>

      <Hero />

      <Categories />

      <AboutSection />

      <FeaturedProducts />

    </MainLayout>
  );
}

export default Home;