"use client";
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const DynamicPage = () => {
    const [pageData, setPageData] = useState(null);
    const searchParams = useSearchParams()
    const pageId = searchParams?.get('id') ?? '';

  const loadPageData = async () => {
    try {
      const response = await fetch(`/api/manage-pages-data?pageId=${pageId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setPageData(data.textAreas);
        console.log('loaded data:', data);
      } else {
        console.error('data load error.');
      }
    } catch (error) {
      console.error('load request error:', error);
    }
  };

  useEffect(() => {
    loadPageData()
  }, [])

  return (
    <div className="notion-app">
      <Sidebar />
      <MainContent pageDataToLoad={pageData} />
    </div>
  );
};

export default DynamicPage;