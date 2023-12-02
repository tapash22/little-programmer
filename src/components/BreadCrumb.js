import {Link, useLocation} from 'react-router-dom';

const BreadCrumb = () =>{

    const location = useLocation();

    let currentLink = [];

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink.push(`/${crumb}`)

        return (
            <div className='crumb px-2' key={crumb}>
                <Link to={currentLink.join('/')} className='text-sm font-medium tracking-wide ' >{crumb}</Link>
            </div>
        )
    })

    return (
        <div className='flex justify-end px-5'>
            {
                crumbs
            }
        </div>
    )
}

export default BreadCrumb;