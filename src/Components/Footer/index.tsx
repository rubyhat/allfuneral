import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const Footer = () => {
  const cn = classNames.bind(styles);
  return (
    <footer className={cn("footer")}>
      <p className={cn("footer__text")}>
        © 1992 - 2020 Честный Агент © Все права защищены.
      </p>
      <p className={cn("footer__text")}>8 (495) 150-21-12</p>
    </footer>
  );
};

export default Footer;
