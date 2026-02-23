import { useMenuContext } from 'app/providers/MenuProvider';
import styles from './Sidebar.module.scss';
import { memo } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
    const { sections, activeSectionId, setActiveSection } = useMenuContext();

    return (
        <div className={styles.sidebar}>
            {sections.map((section) => (
                <div key={section.id} className={styles.section}>
                    <div className={styles.arrow}>
                        {activeSectionId === section.id ? '>' : ''}
                    </div>

                    <Button onClick={() => setActiveSection(section.id)}>
                        {section.title}
                    </Button>
                </div>
            ))}
            <Link to={'/'} className={styles.toMain}>
                На главную
            </Link>
        </div>
    );
};

export const Sidebar = memo(SidebarComponent);
