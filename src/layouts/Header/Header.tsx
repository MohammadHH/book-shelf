import { Brand } from "../../components/Brand/Brand";
import Link from "../../components/Link/Link";
import { SearchLink } from "../../components/Link/SearchLink/SearchLink";
import styles from "./Header.module.scss";

interface HeaderProps {
  links: string[];
}

export function Header({ links }: HeaderProps) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light padding ${styles.header}`}
    >
      <Brand />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          {links.map((link: any, index: any) => (
            <Link key={index} name={link} />
          ))}
          <SearchLink />
        </ul>
      </div>
    </nav>
  );
}
