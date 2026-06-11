import AppRoutes from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import Loader from "./components/common/Loader";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {

 const [loading, setLoading] = useState(true);

useEffect(() => {
  const handleLoad = () => {
    setTimeout(() => setLoading(false), 800);
  };

  window.addEventListener("load", handleLoad);

  return () => window.removeEventListener("load", handleLoad);
}, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <WhatsAppFloat />
    </>
  );
}

export default App;