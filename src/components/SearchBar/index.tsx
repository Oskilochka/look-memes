import Image from "next/image";
import SearchIcon from "/public/images/ic_search.svg";
import styles from "./styles.module.scss";

export function SearchBar() {
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
