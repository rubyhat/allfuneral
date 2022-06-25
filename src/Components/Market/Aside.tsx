import classNames from "classnames/bind";
import AsideList from "./AsideList";

import styles from "./styles.module.scss";

const Aside = () => {
  const cn = classNames.bind(styles);
  return (
    <div className={cn("aside")}>
      <div className={cn("aside__header")}>
        <h3 className={cn("aside__title")}>ЧЕСТНЫЙ АГЕНТ</h3>
        <p className={cn("aside__subtitle")}>МЕНЕДЖЕР ПРОЦЕССА</p>
      </div>
      <AsideList />
    </div>
  );
};

export default Aside;
