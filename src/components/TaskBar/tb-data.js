import shutdown from '../../images/taskbar/shutdown.png';
import run from '../../images/taskbar/run.png';
import help from '../../images/taskbar/help.png';
import find from '../../images/taskbar/find.png';
import settings from '../../images/taskbar/settings.png';
import documents from '../../images/taskbar/documents.png';
import favorites from '../../images/taskbar/favorites.png';
import programs from '../../images/taskbar/programs.png';

const menuData = [
  {
    text: 'Programs',
    image: programs,
    id: 0
  },
  {
    text: 'Favorites',
    image: favorites,
    id: 1
  },
  {
    text: 'Documents',
    image: documents,
    id: 2
  },
  {
    text: 'Settings',
    image: settings,
    id: 3
  },
  {
    text: 'Find',
    image: find,
    id: 4
  },
  {
    text: 'Help',
    image: help,
    id: 5
  },
  {
    text: 'Run...',
    image: run,
    id: 6
  },
  {
    text: 'Shut Down...',
    image: shutdown,
    id: 7
  }];

  export default menuData;
