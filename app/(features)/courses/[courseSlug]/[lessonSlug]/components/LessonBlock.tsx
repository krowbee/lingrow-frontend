"use client";
import { useEffect, useState } from "react";
import { TheoryBlock } from "./TheoryBlock";
import { getLessonWithProgress } from "@/lib/api/requests/courses.client.requests";
import { LessonWithTasks } from "@/types/course/course";
import { Spinner } from "@/components/ui/spinner";
import { TaskBlock } from "./TaskBlock";
import { LessonNavigation } from "./LessonNavigation";

export type Step = "theory" | "task";
export function LessonBlock({ lessonSlug }: { lessonSlug: string }) {
  const [lesson, setLesson] = useState<LessonWithTasks>();
  const [step, setStep] = useState<Step>("theory");
  const [taskIndex, setTaskIndex] = useState(0);

  useEffect(() => {
    const getLesson = async () => {
      const result = await getLessonWithProgress(lessonSlug);
      if (!result.ok) {
        return;
      }
      console.log(result.data);
      setLesson(result.data);
    };
    getLesson();
  }, [lessonSlug]);

  if (!lesson)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner></Spinner>
      </div>
    );

  return (
    <div className="lesson-container w-full flex flex-col justify-center p-4">
      {step === "theory" && <TheoryBlock theory={lesson.theory} />}
      {step === "task" && (
        <TaskBlock task={lesson.tasks[taskIndex]}></TaskBlock>
      )}
      <LessonNavigation
        step={step}
        setStep={setStep}
        tasks={lesson.tasks}
        taskIndex={taskIndex}
        setTaskIndex={setTaskIndex}
      />
    </div>
  );
}
