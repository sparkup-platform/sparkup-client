export interface MenuItem {
    id: string;
    label: string;
    icon?: string;
    href: string;
    badge?: number;
  }
  
  export interface MenuGroup {
    title: string;
    items: MenuItem[];
  }