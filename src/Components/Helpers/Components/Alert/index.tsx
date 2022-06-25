import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface IALert {
  text: string;
}

const Alert = ({ text }: IALert) => {
  const cn = classNames.bind(styles);
  return <div className={cn("alert")}>{text}</div>;
};

export default Alert;
