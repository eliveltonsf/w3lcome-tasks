import styles from "@/styles/Task.module.scss";

interface UpdateTask {
  id: string;
  isDone: boolean;
}

interface Task {
  id: string;
  title: string;
  isDone: boolean;
  onCheck: (checked: UpdateTask) => void;
}

export default function Task({ id, onCheck, title, isDone = false }: Task) {
  const sendCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheck({ id: e.target.value, isDone: e.target.checked });
  };
  return (
    <div className={styles.taskInfo}>
      <input
        type="checkbox"
        defaultChecked={isDone}
        value={id}
        onChange={sendCheck}
      />
      <span className={`${isDone && styles.isChecked}`}>{title}</span>
    </div>
  );
}
