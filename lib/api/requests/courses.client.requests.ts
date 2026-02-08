import { ApiResult } from "@/types/api/api-result.type";
import { API_URL } from "../constants";
import { fetchToApi } from "../fetchWithRefresh";
import { LessonProgress, LessonWithTasks } from "@/types/course/course";

export async function getLessonProgress(
  courseSlug: string,
): Promise<ApiResult<LessonProgress[]>> {
  const res = await fetchToApi(API_URL + `/progress/course/${courseSlug}`);
  const data = await res.json();
  if (!res.ok) {
    return { ok: false, error: data.message };
  }
  return { ok: true, data };
}

export async function getLessonWithProgress(
  lessonSlug: string,
): Promise<ApiResult<LessonWithTasks>> {
  const res = await fetchToApi(API_URL + `/lessons/${lessonSlug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    return { ok: false, error: data.message };
  }
  return { ok: true, data: data.lesson };
}

export async function updateTaskProgress(
  taskId: number,
  answerId: number,
  hasProgress: boolean,
) {
  const url = hasProgress
    ? `${API_URL}/progress/${taskId}`
    : `${API_URL}/progress`;
  const res = await fetchToApi(url, {
    method: hasProgress ? "PATCH" : "POST",
    body: JSON.stringify({
      ...(hasProgress ? {} : { taskId }),
      answerId,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    return { ok: false, error: data.message };
  }
  return { ok: true, data };
}
