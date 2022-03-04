import SidebarStyles from '../../styles/components/sidebar.module.scss';
import { motion } from 'framer-motion';
import TabList from '../TabList';

const Sidebar = ({toggleSidebar}) => {
  
  return (
    <motion.nav animate={{x: [250,0]}} className={SidebarStyles.nav}>
        <TabList toggleSidebar={toggleSidebar}/>
    </motion.nav>
  )
}

export default Sidebar