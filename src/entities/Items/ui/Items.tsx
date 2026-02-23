import { useMenuContext } from 'app/providers/MenuProvider';
import styles from './Items.module.scss';
import { Item } from 'shared/ui/Item/Item';
import { memo } from 'react';

export const ItemsComponent = () => {
    const { toggleItem, activeSectionId, sections } = useMenuContext();

    const activeSection = sections.find((s) => s.id === activeSectionId);

    return (
        <div className={styles.items}>
            {activeSection?.items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    checked={item.checked}
                    toggleItem={toggleItem}
                    activeSectionId={activeSectionId}
                    label={item.label}
                    value={item.value}
                />
            ))}
        </div>
    );
};

export const Items = memo(ItemsComponent);
