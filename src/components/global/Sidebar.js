import SidebarStyles from '../../styles/components/sidebar.module.scss';
import CloseIcon from '@mui/icons-material/Close';
 
import TabList from '../TabList';

const Sidebar = ({toggleSidebar}) => {

    const openMenu = () => {
		if(toggleSidebar) {
			toggleSidebar(false);
		}
	}
  
  return (
    <nav className={SidebarStyles.nav}>
        <TabList toggleSidebar={toggleSidebar}/>
        <button className={SidebarStyles.nav__btn} onClick={openMenu}>
            <CloseIcon className={SidebarStyles.nav__hamburger__icon}/>
        </button>
    </nav>
  )
}

export default Sidebar