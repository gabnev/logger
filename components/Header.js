import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Some</span> Header
      </h1>
      <p className={headerStyles.description}>Some subtitle</p>
    </div>
  );
};

export default Header;
