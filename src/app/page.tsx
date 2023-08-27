import React from "react";
import Image from "next/image";
import CategoriesSection from "@/components/CategoriesSection/categoriesSection";
import Header from "@/components/Header/header";
import SearchBar from "@/components/Header/SearchBar/searchBar";
import LogoIcon from "/public/images/logo.svg";

export default function Home() {
  return (
    <main>
      <Header>
        <Image src={LogoIcon} alt="logo" priority={true} />
        <SearchBar />
      </Header>
      <CategoriesSection />
    </main>
  );
}
