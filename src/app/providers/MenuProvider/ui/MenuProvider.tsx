import { useState, useMemo } from 'react';
import { MenuContext, MenuSection } from '../lib/MenuContext';

interface MenuProviderProps {
    children: React.ReactNode;
}

const SECTIONS_LIST = [
    {
        id: 1,
        title: 'Тип 1',
        items: [
            { id: 1, label: 'Item 1', value: 20, checked: false },
            { id: 2, label: 'Item 2', value: 30, checked: false },
            { id: 3, label: 'Item 1', value: 50, checked: false },
            { id: 4, label: 'Item 2', value: 40, checked: false },
        ],
    },
    {
        id: 2,
        title: 'Тип 2',
        items: [
            { id: 3, label: 'Item 3', value: 40, checked: false },
            { id: 4, label: 'Item 4', value: 50, checked: false },
        ],
    },
];

const MenuProvider = ({ children }: MenuProviderProps) => {
    const [sections, setSections] = useState<MenuSection[]>(SECTIONS_LIST);

    const [activeSectionId, setActiveSectionId] = useState<number | null>(1);

    const { selectedCount, totalValue } = useMemo(() => {
        const activeSection = sections.find((s) => s.id === activeSectionId);

        if (!activeSection) {
            return { selectedCount: 0, totalValue: 0 };
        }

        let count = 0;
        let total = 0;

        activeSection.items.forEach((item) => {
            if (item.checked) {
                count++;
                total += item.value;
            }
        });

        return { selectedCount: count, totalValue: total };
    }, [sections, activeSectionId]);

    const setActiveSection = (id: number) => {
        setActiveSectionId(id);
    };

    const toggleItem = (sectionId: number, itemId: number) => {
        setSections((prevSections) =>
            prevSections.map((section) => {
                if (section.id !== sectionId) return section;

                return {
                    ...section,
                    items: section.items.map((item) =>
                        item.id === itemId
                            ? { ...item, checked: !item.checked }
                            : item,
                    ),
                };
            }),
        );
    };

    const contextValue = {
        sections,
        activeSectionId,
        selectedCount,
        totalValue,
        setActiveSection,
        toggleItem,
    };

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;
