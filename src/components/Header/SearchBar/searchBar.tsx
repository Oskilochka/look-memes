import styles from "./searchBar.module.scss";
import SearchIcon from "/public/images/ic_search.svg";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="text"
        id="header-search"
        placeholder="Search"
        name="s"
      />
      <Image src={SearchIcon} alt={"search"} />
    </div>
  );
}
