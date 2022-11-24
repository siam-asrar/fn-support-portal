import { useEffect } from "react"

// Update the title based on route

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}: Mobi-Cart™`;
    }, [title])
};

export default useTitle;
