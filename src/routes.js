import Changmin from 'layouts/changmin';
import DietMonth from 'layouts/dietMonth';

// haein
import CalorieInfomation from 'layouts/calinfo';
import MainMenu from 'layouts/mainmenu';

// @mui icons
import Icon from '@mui/material/Icon';

const routes = [
  {
    type: 'collapse',
    name: 'dietMonth',
    key: 'dietMonth',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/dietMonth',
    component: <DietMonth />,
  },
  {
    type: 'collapse',
    name: 'chagnmin',
    key: 'changmin',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/changmin',
    component: <Changmin />,
  },
  {
    type: 'collapse',
    name: 'Calorie Infomation',
    key: 'calinfo',
    icon: <Icon fontSize="small">assignment</Icon>,
    route: '/calinfo',
    component: <CalorieInfomation />,
  },
  {
    type: 'collapse',
    name: 'Main Menu',
    key: 'main-menu',
    icon: <Icon fontSize="small">Menu</Icon>,
    route: '/mainmenu',
    component: <MainMenu />,
  },
];

export default routes;
