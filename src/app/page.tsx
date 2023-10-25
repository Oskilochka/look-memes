import React from "react";
import Image from "next/image";
import { SearchBar, Header, CategoriesSection } from "@/components";
import LogoIcon from "/public/images/logo.svg";

export function Home() {
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
