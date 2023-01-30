import { useEffect } from "react"

// Update the title based on route

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}:: Field Nation Support`;
    }, [title])
};

export default useTitle;
