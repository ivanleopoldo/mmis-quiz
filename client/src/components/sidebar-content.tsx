import { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";

export function SidebarGroupContent({
  content,
}: {
  content: {
    title: string;
    action?: {
      icon: LucideIcon;
      onClick: () => {};
    };
    items?: {
      title: string;
      url?: string;
      isActive?: boolean;
      onClick?: () => {};
      icon?: LucideIcon;
      subitems?: {
        title: string;
        onClick?: () => {};
        url?: string;
      }[];
    }[];
  }[];
}) {
  return (
    <>
      {content.map((item) => {
        return (
          <SidebarGroup>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            {item.action && (
              <SidebarGroupAction>
                <item.action.icon />
              </SidebarGroupAction>
            )}
            <SidebarMenu>
              {item.items &&
                item.items.map((item) => {
                  return (
                    <SidebarMenuItem>
                      <SidebarMenuButton>{item.title}</SidebarMenuButton>
                      <SidebarMenuSub>
                        {item.subitems &&
                          item.subitems.map((subitem) => {
                            return (
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton>
                                  <a>{subitem.title}</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  );
                })}
            </SidebarMenu>
          </SidebarGroup>
        );
      })}
    </>
  );
}
