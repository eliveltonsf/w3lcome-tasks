import styles from "@/styles/ActionButton.module.scss";

import { FiPlus, FiX } from "react-icons/fi";

export interface ActionButton {
  typeAction: "create" | "delete";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ActionButton({ typeAction, onClick }: ActionButton) {
  return typeAction === "create" ? (
    <button type="submit" className={styles.btnPrimary} onClick={onClick}>
      <FiPlus size={24} />
    </button>
  ) : (
    <button className={`${styles.btnRemove}`} onClick={onClick}>
      <FiX size={24} />
    </button>
  );
}
