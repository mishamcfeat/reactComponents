import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ children, href, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500', 'hover:underline', 'mb-3', className, currentPath === href && activeClassName);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(href);
    };

    return <a className={classes} onClick={handleClick} href={href}>{children}</a>;
}

export default Link;


