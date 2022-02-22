import NextLink from 'next/link';
import ItemListStyle from '../styles/components/listitem.module.scss';

const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href;
    return (
        <NextLink href={href} passHref scroll={false}>
            <li className={ active ? ItemListStyle['activePage'] : ItemListStyle['inActivePage']} {...props}>
                {children}
            </li>
        </NextLink>
    );
}


const TabList = ({toggleSidebar, path}) => {
    const openMenu = () => {
		if(toggleSidebar) {
			toggleSidebar(false);
		}
	}   
    return (
        <div className={ItemListStyle}>
            <ul className={ItemListStyle.tab__list}>
                <LinkItem href={"/projects"} path={path} onClick={openMenu}>
                    <div onClick={openMenu} className={ItemListStyle.tab__list__item}>
                        PROJECTS
                    </div>
                </LinkItem>
                <LinkItem href={"/contact"} path={path} onClick={openMenu}>
                    <div onClick={openMenu} className={ItemListStyle.tab__list__item}>
                        CONTACT
                    </div>
                </LinkItem>
                <LinkItem href={"/GithubRepo"} path={path} onClick={openMenu}>
                    <div onClick={openMenu} className={ItemListStyle.tab__list__item}>
                        SOURCE CODE
                    </div>
                </LinkItem>
            </ul>
        </div>
    )
}

export default TabList