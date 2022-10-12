import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import { publicRoute } from './routes';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component;

                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
