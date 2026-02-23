import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss';
import MenuProvider from 'app/providers/MenuProvider/ui/MenuProvider';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <MenuProvider>
            <BrowserRouter basename="/test-app">
                <App />
            </BrowserRouter>
        </MenuProvider>,
    );
}
