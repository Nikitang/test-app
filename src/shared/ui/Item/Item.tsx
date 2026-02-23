import { memo } from 'react';
import styles from './Item.module.scss';

export interface MenuItem {
    id: number;
    label: string;
    value: number;
    checked: boolean;
}

interface ItemProps extends MenuItem {
    toggleItem: (sectionId: number, itemId: number) => void;
    activeSectionId: number | null;
}

const ItemComponent = ({
    id,
    checked,
    toggleItem,
    activeSectionId = 1,
    label,
    value,
}: ItemProps) => {
    const onToggleItem = () => {
        toggleItem(activeSectionId ?? 1, id);
    };

    const onCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
        onToggleItem();
    };

    return (
        <div className={styles.item} onClick={onToggleItem}>
            <input
                type="checkbox"
                checked={checked}
                onClick={onCheckboxClick}
            />
            <div className={styles.label}>
                <div>{label}</div>
                <div>Value: {value}</div>
            </div>
        </div>
    );
};

export const Item = memo(ItemComponent);
