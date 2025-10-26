import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Layout wrapper — used for all routes that need Navbar + Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />

        {/* Dynamic service page */}
        <Route
          path="/services/:slug"
          element={
            <Layout>
              <ServicePage />
            </Layout>
          }
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="p-8 text-center text-red-600 font-semibold">
                Page Not Found
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
