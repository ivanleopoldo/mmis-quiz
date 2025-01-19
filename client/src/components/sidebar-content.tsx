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
import { MouseEventHandler } from "react";
import { Link } from "react-router";

export function SidebarGroupContent({
  content,
}: {
  content: {
    title: string;
    action?: {
      icon: LucideIcon;
      onClick: MouseEventHandler<HTMLButtonElement>;
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
              <SidebarGroupAction onClick={item.action.onClick}>
                <item.action.icon />
              </SidebarGroupAction>
            )}
            <SidebarMenu>
              {item.items &&
                item.items.map((item) => {
                  return (
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        className="text-sidebar-foreground/70"
                        asChild
                      >
                        <Link to={item.url!}>
                          {item.icon && (
                            <item.icon className="text-sidebar-foreground/70" />
                          )}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
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
