import { useEffect, useState } from "react";
import Task from "./Task";
import ActionButton from "./ActionButton";

import styles from "@/styles/ListTask.module.scss";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface UpdateTask {
  id: string;
  isDone: boolean;
}

interface ListTask {
  taskList: Task[];
  totalPages: number;
  onPageClick: (info: number) => void;
  onRemoveTask: (id: string) => void;
  onUpdateTask: (updateValue: UpdateTask) => void;
}

export default function ListTask({
  onPageClick,
  onRemoveTask,
  onUpdateTask,
  totalPages,
  taskList,
}: ListTask) {
  const [listCurrentPage, setListCurrentPage] = useState<number[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const dataPageTotal = Array.from(
      { length: totalPages },
      (_, index) => index
    );
    setListCurrentPage(dataPageTotal);
  }, [totalPages]);

  const sendDeleteTask = async (id: string) => {
    onRemoveTask(id);
  };

  const sendCurrentPage = (e: any) => {
    setCurrentPage(e.target.innerHTML);
    onPageClick(e.target.innerHTML);
  };

  const sendCheckedTask = (checkedTask: UpdateTask) => {
    onUpdateTask(checkedTask);
  };

  return (
    <div>
      <ul className={styles.listTask}>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <div className="row">
                <div className="grid-11 py-0">
                  <Task
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    onCheck={sendCheckedTask}
                  />
                </div>
                <div className="grid-1 py-0">
                  <ActionButton
                    typeAction="delete"
                    onClick={() => sendDeleteTask(task.id)}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className={`${styles.pageOptionsContainer}`}>
        {listCurrentPage &&
          listCurrentPage.map((_, index) => (
            <li
              key={index}
              value={index}
              onClick={sendCurrentPage}
              className={
                currentPage == index + 1
                  ? styles.currentPage
                  : styles.pageOptions
              }
            >
              {index + 1}
            </li>
          ))}
      </ul>
    </div>
  );
}
