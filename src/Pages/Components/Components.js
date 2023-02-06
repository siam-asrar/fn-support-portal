import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Components = () => {
    const [components, setComponents] = useState([]);
    const [searched, setSearched] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [searchCriteria, setSearchCriteria] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const criteria = form.search.value;
        const results = components.filter(component => component.name.toLowerCase().split(/(-| )+/).find(n => n.includes(criteria.toLowerCase())));

        if (!criteria.length) {
            return;
        } else {
            setSearchCriteria(criteria);
        }

        if (results.length) {
            setComponents(results);
            setSearched(true);
        } else {
            setComponents([]);
            setSearched(true);
        }
    }

    useEffect(() => {
        fetch('/components.json')
            .then(res => res.json())
            .then(res => setComponents(res))
    }, []);

    return (
        <section className="bg-blend-soft-light min-h-screen">
            <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
                <h1 className="text-2xl font-serif leading-none text-center">Components</h1>
                <div className="mt-6 relative flex justify-center">
                    {
                        !searched ?
                            <>
                                <form className={`${hidden ? 'hidden' : ''} flex items-center`} onSubmit={handleSubmit}>
                                    <input type="search" name="search" placeholder="Search keywords or topics" className="w-full h-8 m-2 px-5 text-sm rounded sm:w-96 focus:outline-none dark:bg-gray-200 dark:text-gray-900 focus:dark:bg-blue-100"
                                    />
                                    <button type="submit" className='absolute px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 fill-gray-500">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </form>
                                <button onClick={() => setHidden(!hidden)} type="submit" className="focus:outline-none">
                                    {hidden ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 fill-current  hover:text-secondary">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                        :
                                        <p className='w-4 fill-current hover:text-secondary'>X</p>
                                    }
                                </button>
                            </>
                            :
                            <form onSubmit={() => setComponents(components)}>
                                {!components ?
                                    <small className='font-bold'>Filtering No items found by Search: {searchCriteria}
                                        <br /><button type="submit" title='Reset Filter' className='text-primary hover:text-lg'><FaRegTrashAlt></FaRegTrashAlt></button>
                                    </small>
                                    :
                                    <small className='font-bold'>Filtering {components.length} items by Search Results: {searchCriteria}
                                        <br /><button type="submit" title='Reset Filter' className='text-primary hover:text-lg'><FaRegTrashAlt></FaRegTrashAlt></button>
                                    </small>
                                }
                            </form>
                    }
                </div>
                <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-10 my-5'>
                    {
                        components.map(component =>
                            <Link to={`/dashboard/component/${component.name}`}>
                                <li className="dark:bg-blend-hue flex items-center justify-around p-4 sm:py-8 lg:py-12 border-2 border-t-blue-800 rounded-md text-orange-500 font-semibold border-gray-100 w-72 h-40  shadow-lg hover:bg-blue-100" title={component.about} >
                                    <small>{component.name}</small>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default Components;
