import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function SideBlock() {
  return (
    <SidebarProvider>
      <Sidebar className="py-4">
        <SidebarHeader className="p-0">
          <div className="w-full text-center text-xl font-heading font-bold">
            Доступні курси
          </div>
        </SidebarHeader>
        <SidebarGroup className="p-0 gap-2">
          <div className="w-full flex flex-col shadow-sm py-2 px-4 hover:cursor-pointer">
            <h3 className="text-md font-body">English learning A1</h3>
            <p>0/127</p>
          </div>
          <div className="w-full flex flex-col shadow-sm py-2 px-4 hover:cursor-pointer">
            <h3 className="text-md font-body">English learning A1</h3>
            <p>0/127</p>
          </div>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
}
