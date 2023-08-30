import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const location = useLocation();

    // Handles the scroll to top when routes change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
}

export default ScrollToTop;
