import { Items } from 'entities/Items/ui/Items';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const ListPage = () => {
    return (
        <>
            <Navbar />
            <div className="content" style={{ display: 'flex' }}>
                <Sidebar />

                <Items />
            </div>
        </>
    );
};

export default ListPage;
