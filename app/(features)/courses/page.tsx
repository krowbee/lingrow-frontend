import { getStaticCoursesList } from "@/lib/api/requests/courses.requests";
import { CourseCard } from "./components/CourseCard";
import { SideBlock } from "./components/SideBlock";

export default async function CoursesPage() {
  const result = (await getStaticCoursesList()) || [];
  return (
    <>
      <main className="w-full h-full flex flex-row">
        {result.ok && result.data ? (
          <>
            <SideBlock courses={result.data}></SideBlock>
            <section className="w-full h-screen p-8">
              <h1 className="text-3xl font-heading text-center">
                Доступні курси
              </h1>

              <div className="cards-container flex flex-wrap w-full gap-4 justify-center py-4">
                {result.data.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          </>
        ) : null}
      </main>
    </>
  );
}
