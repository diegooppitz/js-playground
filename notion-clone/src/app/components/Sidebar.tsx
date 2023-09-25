'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import ProfilePicture from "../../assets/profile-picture.png"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const [pagesData, setPagesData] = useState(null);

  const router = useRouter()

  const generateRandomPageId = () => {
    const randomNumbers = Math.floor(Math.random() * 1000);
    const paddedNumber = randomNumbers.toString().padStart(3, '0');
    return `page-${paddedNumber}`;
  }

  const createNewPage = async () => {
    const newPageId = generateRandomPageId();
    console.log("new page", newPageId);
    try {
      const newPageData = {
        "pageId": newPageId,
        "name": newPageId,
        "textAreas": []
      }

      const response = await fetch('/api/manage-pages-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPageData),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/pages?id=${newPageId}`);
        console.log('save data:', data);
      } else {
        console.error('data save error.');
      }
    } catch (error) {
      console.error('request error:', error);
    }
  }

  const handleMenuItemClick = async (id: string | null) => {
    console.log("aqui", id)
    if (id === "new-page") createNewPage();
    else if (id) router.push(`/pages?id=${id}`)
  }

  const loadPagesData = async () => {
    const newPageOption =  { name: 'New Page', pageId: "new-page" }

    try {
      const response = await fetch(`/api/manage-pages-data`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await response.json();
      data.push(newPageOption);

      if (data) setPagesData(data);
    } catch (error) {
      console.error('load request error:', error);
    }
  };

  useEffect(() => {
    loadPagesData()
  }, [])

  return (
    <div className="sidebar">
      <div className="profile-notion">
        <Image src={ProfilePicture} alt="profile picture" />
        <p>Fulano notion</p>
      </div>
      <ul className='pages'>
        {pagesData && pagesData.map((menuItem, index) => (
          <li key={index} className="menuItem" onClick={() => handleMenuItemClick(menuItem.pageId)}>
            {menuItem.id === "new-page" ? <AddCircleIcon sx={{ cursor: "pointer", fontSize: 16 }} /> : <DescriptionIcon sx={{ cursor: "pointer", fontSize: 16 }} />}
            <p>{menuItem.name}</p></li>
        ))}

      </ul>
    </div>
  );
};

export default Sidebar;