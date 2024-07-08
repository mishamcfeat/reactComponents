import Link from './Link';


function Sidebar() {
    const links = [
        {
            href: '/',
            text: 'Dropdown',
        },
        {
            href: '/accordion',
            text: 'Accordion',
        },
        {
            href: '/buttons',
            text: 'Buttons',
        },
        {
            href: '/modal',
            text: 'Modal',
        },
        {
            href: '/table',
            text: 'Table',
        },
        {
            href: '/counter',
            text: 'Counter',
        }
    ]



    const renderedLinks = links.map((link) => (
        <Link href={link.href} key={link.href} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.text}</Link>
    ));

    return (
        <div className="sticky top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;
