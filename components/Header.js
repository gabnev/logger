import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Log</span>ger
      </h1>
      <p className={headerStyles.description}>Never forget your own story</p>
    </div>
  );
};

export default Header;
