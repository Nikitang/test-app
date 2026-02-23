import { createContext } from 'react';

export interface MenuItem {
    id: number;
    label: string;
    value: number;
    checked: boolean;
}

export interface MenuSection {
    id: number;
    title: string;
    items: MenuItem[];
}

export interface MenuContextProps {
    sections: MenuSection[];
    activeSectionId: number | null;
    selectedCount: number;
    totalValue: number;
    setActiveSection: (id: number) => void;
    toggleItem: (sectionId: number, itemId: number) => void;
}

export const MenuContext = createContext<MenuContextProps | null>(null);
