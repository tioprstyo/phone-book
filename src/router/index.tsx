import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { MainPage, ContactPage, ContactDetailPage, AddContactPage, EditContactPage } from 'src/views';

function Router() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="contact/detail" element={<ContactDetailPage />} />
                <Route path="contact/add" element={<AddContactPage />} />
                <Route path="contact/edit" element={<EditContactPage />} />
            </Routes>
        </div>
    )
}

export default Router;