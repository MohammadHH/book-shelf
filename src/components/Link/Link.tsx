import "./Link.scss";

interface LinkProps {
  active?: boolean;
  footer?: boolean;
  url?: string;
  name: string;
  [key: string]: any;
}

const Link = ({ active, footer, url, name, ...restProps }: LinkProps) => {
  return (
    <li className={`nav-item ${active ? "active" : ""}`}>
      <a
        className={`navbar-nav navbar-light nav-link link ${
          footer ? "navigation" : ""
        }`}
        href={url}
        {...restProps}
      >
        {name}
      </a>
    </li>
  );
};

export default Link;
