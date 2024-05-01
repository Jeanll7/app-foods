import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

function Home() {
  return (
    <>
      <Header />
      <Search />
      <CategoryList />

      <div className="pt-2">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
}

export default Home;
