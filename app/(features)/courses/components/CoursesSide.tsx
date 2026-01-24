import { SidebarGroup } from "@/components/ui/sidebar";
import { COURSES_URL } from "@/urls/courses";
import Link from "next/link";

export function CoursesSide() {
  return (
    <SidebarGroup className="p-0 gap-2 pt-2 border-t-1 border-b-1">
      <h3 className="font-accent text-lg text-center">
        <Link href={COURSES_URL.courses_page}>Курси</Link>
      </h3>

      <div className="courses-side-container flex flex-col max-h-[110px] overflow-y-auto hide-scrollbar gap-2">
        <div className="w-full flex flex-col px-4 border-1   hover:cursor-pointer">
          <h3 className="text-md font-body">English learning A1</h3>
          <p>0/127</p>
        </div>
        <div className="w-full flex flex-col border-1 px-4 hover:cursor-pointer">
          <h3 className="text-md font-body">English learning A1</h3>
          <p>0/127</p>
        </div>
        <div className="w-full flex flex-col border-1 px-4 hover:cursor-pointer">
          <h3 className="text-md font-body">English learning A1</h3>
          <p>0/127</p>
        </div>
      </div>
    </SidebarGroup>
  );
}
