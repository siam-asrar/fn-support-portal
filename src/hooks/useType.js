import { useEffect, useState } from "react"

const useType = (email) => {
    const [userType, setUserType] = useState('');
    const [userTypeLoading, setUserTypeLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-siam-asrar.vercel.app/users/type/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUserType(data.userType);
                    setUserTypeLoading(false);
                })
        }
    }, [email])
    return [userType, userTypeLoading]
}

export default useType;