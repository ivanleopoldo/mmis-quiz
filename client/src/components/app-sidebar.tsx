import {
  Brain,
  ClipboardPen,
  Edit,
  LayoutDashboard,
  PieChart,
  Scale,
  Settings,
} from "lucide-react";
import * as React from "react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarGroupContent } from "./sidebar-content";
import { Button } from "./ui/button";
import { Link } from "react-router";

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const content = [
  {
    title: "Platform",
    items: [
      { title: "Dashboard", icon: LayoutDashboard },
      { title: "Quizzes", icon: ClipboardPen },
      { title: "Analytics", icon: PieChart },
      { title: "Settings", icon: Settings },
    ],
  },
  {
    title: "Recent Quizzes",
    items: [
      {
        title: "Section A",
        subitems: [{ title: "Quiz 1" }, { title: "Quiz 2" }],
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/home">
                <div className="size-8 flex aspect-square items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Brain />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">BrightMind</span>
                  <span className="truncate text-xs">
                    a quizlet for bright minds
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {state !== "collapsed" && (
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Button variant={"secondary"} className="text-foreground">
                  <Edit />
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent content={content} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
