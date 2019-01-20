import shutdown from '../../images/shutdown.png';
import run from '../../images/run.png';
import help from '../../images/help.png';
import find from '../../images/find.png';
import settings from '../../images/settings.png';
import documents from '../../images/documents.png';
import favorites from '../../images/favorites.png';
import programs from '../../images/programs.png';

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
