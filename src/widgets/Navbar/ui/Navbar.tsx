import { useMenuContext } from 'app/providers/MenuProvider';
import styles from './Navbar.module.scss';
import { memo } from 'react';

const NavbarComponent = () => {
    const { totalValue, selectedCount, sections, activeSectionId } =
        useMenuContext();

    const activeSection = sections.find((s) => s.id === activeSectionId);

    return (
        <div className={styles.navbar}>
            <div className={styles.section}>
                <span>Раздел: {activeSection?.title}</span>
            </div>
            <div className={styles.selected}>
                <span>Выбрано пунктов: {selectedCount}</span>
            </div>
            <div>
                <span className={styles.total}>
                    Общее значение: {totalValue}
                </span>
            </div>
        </div>
    );
};

export const Navbar = memo(NavbarComponent);
