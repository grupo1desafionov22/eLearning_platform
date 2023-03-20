import { useState } from "react";

    const useFetch = (url) => {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
    
        const handleGoogle = async (response) => {
        setLoading(true);
        console.log(response);
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
    
            body: JSON.stringify({ credential: response.credential }),
        })
            .then((res) => {
            setLoading(false);
                console.log(res);
            return res.json();
            })
            .then((data) => {
            if (data?.user) {

                localStorage.setItem("user", JSON.stringify(data?.user));
                window.location.reload();
            }
    
            throw new Error(data?.message || data);
            })
            .catch((error) => {
            setError(error?.message);
            });
            console.log(error);
        };
        return handleGoogle ;
    };
    
    export default useFetch;