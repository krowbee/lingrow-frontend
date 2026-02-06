import { TaskWithAnswers } from "@/types/course/course";
import { Step } from "./LessonBlock";
import { Button } from "@/components/ui/button";

type Props = {
  tasks: TaskWithAnswers[];
  step: "theory" | "task";
  setStep: (step: Step) => void;
  taskIndex: number;
  setTaskIndex: (index: number) => void;
};
export function LessonNavigation({
  tasks,
  step,
  setStep,
  taskIndex,
  setTaskIndex,
}: Props) {
  const chooseTask = (taskOrder: number) => {
    if (taskOrder < 1 || taskOrder > tasks.length) return;
    setStep("task");
    setTaskIndex(taskOrder - 1);
  };

  const chooseTheory = () => {
    setStep("theory");
    setTaskIndex(0);
  };

  const changeTask = (direction: "prev" | "next") => {
    if (direction === "next") {
      if (step === "theory") {
        setStep("task");
        return;
      }
      if (taskIndex + 1 < tasks.length) {
        setTaskIndex(taskIndex + 1);
        return;
      }
      return;
    }

    // prev
    if (step === "task" && taskIndex === 0) {
      setStep("theory");
      return;
    }
    if (taskIndex > 0) {
      setTaskIndex(taskIndex - 1);
      return;
    }
  };
  return (
    <div className="w-full flex px-8 justify-center gap-2">
      <Button onClick={() => changeTask("prev")} className="cursor-pointer">
        Назад
      </Button>
      <div className="flex flex-row gap-2 justify-center">
        <Button
          className={`${step === "theory" && "bg-accent"} cursor-pointer`}
          onClick={() => chooseTheory()}
        >
          Теорія
        </Button>
        {tasks.map((task) => (
          <Button
            key={task.id}
            className={`cursor-pointer ${task.order - 1 === taskIndex && step === "task" && "bg-accent"}`}
            onClick={() => chooseTask(task.order)}
          >
            {task.order}
          </Button>
        ))}
      </div>
      <Button onClick={() => changeTask("next")} className="cursor-pointer">
        Далі
      </Button>
    </div>
  );
}
