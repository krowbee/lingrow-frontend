import { ApiResult } from "@/types/api/api-result.type";
import { API_URL } from "../constants";
import { Course } from "@/types/course/course";

export async function getStaticCoursesList(): Promise<ApiResult<Course[]>> {
  const res = await fetch(API_URL + "/course", {
    next: { revalidate: 60 * 60 * 24 },
  });
  const json = await res.json();
  if (!res.ok) {
    return { ok: false, error: json.message };
  }
  return { ok: true, data: json.courses };
}
