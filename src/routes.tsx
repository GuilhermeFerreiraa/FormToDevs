import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import { FormFinished } from './pages/FormFinished';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FormStep1 />} />
                <Route path="/step/2" element={<FormStep2 />} />
                <Route path="/step/3" element={<FormStep3 />} />
                <Route path="/finished" element={<FormFinished />} />
            </Routes>
        </BrowserRouter>
    )
}



