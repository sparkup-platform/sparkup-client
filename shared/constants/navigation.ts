import { MenuGroup } from '@/shared/types/navigation';

export const NAVIGATION_MENU: MenuGroup[] = [
  {
    title: "둘러보기",
    items: [
      { id: "ideas", label: "아이디어", icon: "💡", href: "/ideas" },
      { id: "projects", label: "프로젝트", icon: "🚀", href: "/projects" }
    ]
  },
  {
    title: "마이페이지", 
    items: [
      { id: "my-ideas", label: "내 아이디어", icon: "📝", href: "/my/ideas" },
      { id: "my-projects", label: "내 프로젝트", icon: "🛠️", href: "/my/projects" },
      { id: "notifications", label: "알림", icon: "🔔", href: "/my/notifications", badge: 3 },
      { id: "profile", label: "내 프로필", icon: "⚙️", href: "/my/profile" }
    ]
  }
];