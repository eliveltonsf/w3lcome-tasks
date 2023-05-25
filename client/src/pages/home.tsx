import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ActionButton from "@/components/ActionButton";
import ListTask from "@/components/ListTask";

import api from "@/services/api";
import showToast from "@/util/getToast";
import { ToastContainer } from "react-toastify";

import styles from "@/styles/Home.module.scss";

interface UpdateTask {
  id: string;
  isDone: boolean;
}

export default function Home() {
  const [taskDescription, setTaskDescription] = useState("");
  const [user, setUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorInput, setErrorInput] = useState(false);
  const [dataTasks, setDataTasks] = useState([]);

  const loadData = useCallback(async () => {
    const [task] = await Promise.all([api.get(`/tasks?offset=${currentPage}`)]);

    const taskData = task.data.tasks;
    const totalPages = task.data.totalPages;
    setDataTasks(taskData);
    setTotalPages(totalPages);
  }, [currentPage]);

  useEffect(() => {
    setUser(localStorage.getItem("@user") as string);
    loadData();
  }, [loadData]);

  const getChangeTaskDescription = (event: any) => {
    setTaskDescription(event.target.value);
  };

  const handleCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const addTask = async (event: any) => {
    event.preventDefault();

    !taskDescription && setErrorInput(true);

    const obj = {
      title: taskDescription,
    };

    try {
      await api.post("tasks/", obj);
      loadData();
      setTaskDescription("");
      setErrorInput(false);
      showToast("success", "Task cadastrada com sucesso!");
    } catch (err) {
      console.log(err);
      showToast(
        "error",
        "Verifique os dados inseridos. Algo parece estar incorreto."
      );
    }
  };

  const removeTask = async (id: string) => {
    try {
      await api.delete(`tasks/${id}`);
      showToast("success", "Task excluída com sucesso!");
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (updateValue: UpdateTask) => {
    const { id, isDone } = updateValue;
    try {
      await api.patch(`tasks/${id}`, {
        isDone,
      });
      loadData();
      showToast("success", "Task atualizada com sucesso!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <Header user={user} />

        <form className={`${styles.form} mb-3`}>
          <div className="row">
            <div className="grid-11 p-0">
              <Input
                name="title"
                placeholder="Digite a descrição da tarefa"
                value={taskDescription}
                onChange={getChangeTaskDescription}
                required
                errorInput={{
                  status: errorInput,
                  message: "A descrição da tarefa é obrigatória!",
                }}
              />
            </div>
            <div className="grid-1 p-0">
              <ActionButton typeAction="create" onClick={addTask} />
            </div>
          </div>
        </form>

        <ListTask
          taskList={dataTasks}
          totalPages={totalPages}
          onPageClick={handleCurrentPage}
          onRemoveTask={removeTask}
          onUpdateTask={updateTask}
        />
      </main>
      <ToastContainer />
    </>
  );
}
