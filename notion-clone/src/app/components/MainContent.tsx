import React, { useEffect, useState } from 'react';
import MarkdownEditor from "./MarkdownEditor";

interface TextAreaProps {
  id: string;
  markdownText: string | null;
}

const MainContent: React.FC<{ pageDataToLoad: TextAreaProps[] | null, pageId: string | null, isHome: boolean | null, createNewPage: () => void }> = ({ pageDataToLoad, pageId, isHome = false, createNewPage }) => {
  const [textAreas, setTextAreas] = useState<{ id: string, markdownText: string | null }[]>([{ id: 'item-0', markdownText: null }]);

  const generateId = (index: number): string => {
    return `item-${String(index)}`;
  }

  const newTextArea = () => {
    const thereIsntId = textAreas.filter((textAreaObject) => textAreaObject.id == generateId(textAreas.length)).length === 0;
    const id: string = thereIsntId ? generateId(textAreas.length) : generateId(textAreas.length + 1);
    const newTextAreas = [...textAreas, { id, markdownText: null }];
    setTextAreas(newTextAreas);
  };

  const removeEmpty = (idToRemove: string) => {
    const newTextAreas = textAreas.filter((textAreaObject) => textAreaObject.id !== idToRemove);
    setTextAreas(newTextAreas);
  };

  const saveContentTextArea = async (idToSave: string, markdownContent: string) => {
    textAreas.forEach((obj) => {
      if (obj.id === idToSave) {
        obj.markdownText = markdownContent;
      }
    });
  };

  const savePageData = async () => {
    try {
      console.log("textareas", textAreas)
      const dataToSave = textAreas ? { pageId, textAreas } : null;
      if (!dataToSave) return;

      const response = await fetch('/api/manage-pages-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('save data:', data);
      } else {
        console.error('data save error.');
      }
    } catch (error) {
      console.error('request error:', error);
    }
  };

  const loadPage = async () => {
    if(pageDataToLoad && pageDataToLoad.length > 0) setTextAreas(pageDataToLoad)
    console.log("test", pageDataToLoad)
    setTextAreas(pageDataToLoad)
  }

  useEffect(() => {
    loadPage();
  }, [pageDataToLoad])

  useEffect(() => {
    if (!textAreas || textAreas.length === 0) {
      setTextAreas([{ id: 'item-0', markdownText: null }])
    }

    // if (textAreas) savePageData();
  }, [textAreas])


  return (
    <div className='main-content'>
      {!isHome && textAreas ?
        textAreas.map((textAreaObject, index) => (
          <MarkdownEditor insertTextAreaValue={null} newTextArea={newTextArea} saveContentTextArea={saveContentTextArea} key={textAreaObject.id} id={textAreas[index].id} removeEmpty={removeEmpty} />
        )) : <a onClick={createNewPage}><h1>No pages, create a new one</h1></a>
      }
    </div>
  );
};

export default MainContent;