import { Link, useLoaderData } from 'react-router-dom';
import About from '../Home/About/About';
import Banner from '../Home/Banner/Banner';
import Resources from '../Home/Resources/Resources/Resources';

const Articles = () => {
    const resources = useLoaderData();

    const criteria = window.location.href.split('/').pop();

    const selected = resources.filter(resource => resource.items.filter(n => (n.details || n.name).toLowerCase().split(/(-| )+/).includes(criteria.toLowerCase()))).shift().items;

    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <div className='bg-blend-lighten border shadow mb-5 px-10 pb-5 pt-10'>
                <h1 className="text-2xl font-serif leading-none text-start">{`Related Articles: ${selected.length}`}</h1>
            </div>
            <ul className='bg-blend-lighten block text-start mt-5 border shadow'>
                {
                    selected.map(selects =>
                        <Link to={`article/${selects.name}`}>
                            <li className="hover:text-primary hover:bg-gray-200 p-5 border-y" key={selects?.id}>
                                <small className='p-5 text-sm text-secondary'>{selects.name}</small>
                            </li>
                        </Link>
                    )
                }
            </ul>
            <Resources></Resources>
            <About></About>
        </div>
    );
};

export default Articles;