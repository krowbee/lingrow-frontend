import { TaskWithAnswers } from "@/types/course/course";

export function TaskBlock({ task }: { task: TaskWithAnswers }) {
  return <p>{task.question}</p>;
}
