import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Articles = () => {
    const resources = useLoaderData();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/articles.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>

        </div>
    );
};

export default Articles;