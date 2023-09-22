'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProfilePicture from "../../assets/profile-picture.png"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';

interface MenuItem {
  name: string;
  id: string;
}

interface IconProps {
  iconName: string | null;
}

const menuMock: MenuItem[] = [
  { name: "Search", id: "search" },
  { name: 'Updates', id: "updates" },
  { name: 'Settings & members', id: "settings" },
  { name: 'New Page', id: "new-page" }
];

const pagesMock: MenuItem[] = [
  { name: "Page 353", id: "page-353"},
];

const IconComponent: React.FC<IconProps> = ({ iconName }) => {
  const returnIcon = (): React.ReactElement | null => {
    switch (iconName) {
      case 'search':
        return <SearchIcon sx={{ cursor: "pointer", fontSize: 18 }} />
      case 'settings':
        return <SettingsIcon sx={{ cursor: "pointer", fontSize: 16 }} />
      case 'updates':
        return <AccessTimeIcon sx={{ cursor: "pointer", fontSize: 16 }} />
      case 'new-page':
        return <AddCircleIcon sx={{ cursor: "pointer", fontSize: 16 }} />
      default:
        return null;
    }
  };

  return returnIcon();
};

const Sidebar: React.FC = () => {
  const router = useRouter()

  const handleMenuItemClick = (id: string | null) => {
    if(id) router.push(`/pages?id=${id}`)
  }

  return (
    <div className="sidebar">
      <div className="profile-notion">
        <Image src={ProfilePicture} alt="profile picture" />
        <p>Fulano notion</p>
      </div>
      {/* <ul className="menu">
        {menuMock.map((menuItem, index) => (
          <li key={index} className="menuItem">
            <IconComponent iconName={menuItem.id} />
            <p>{menuItem.name}</p></li>
        ))}
      </ul> */}
      <ul className='pages'>
        {pagesMock.map((menuItem, index) => (
          <li key={index} className="menuItem" onClick={() => handleMenuItemClick(menuItem.id)}>
            <DescriptionIcon sx={{ cursor: "pointer", fontSize: 16 }} />
            <p>{menuItem.name}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;