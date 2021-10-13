import styles from "./alert.module.css";
import conditionClassname from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={conditionClassname({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
