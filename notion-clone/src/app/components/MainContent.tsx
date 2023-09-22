import React, { useEffect, useState } from 'react';
import MarkdownEditor from "./MarkdownEditor";

interface TextAreaProps {
  id: string;
  markdownText: string | null;
}

const MainContent: React.FC<{ pageDataToLoad: TextAreaProps[] | null }> = ({ pageDataToLoad }) => {
  const [textAreas, setTextAreas] = useState<{ id: string, markdownText: string | null }[]>([{ id: 'item-0', markdownText: null }]);
  const [ableToSave, setAbleToSave] = useState(false);

  const generateRandomPageId = () => {
    const randomNumbers = Math.floor(Math.random() * 1000);
    const paddedNumber = randomNumbers.toString().padStart(3, '0');
    return `page-${paddedNumber}`;
  }

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

    setAbleToSave(true);
  };

  const savePageData = async () => {
    try {
      const dataToSave = textAreas ? { pageId: 'page1', textAreas } : null;
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
  }

  useEffect(() => {
    loadPage();
  }, [pageDataToLoad])

  useEffect(() => {
    if (!textAreas || textAreas.length === 0) {
      setTextAreas([{ id: 'item-0', markdownText: null }])
    }

    if (textAreas && ableToSave) savePageData();
  }, [textAreas])


  return (
    <div className='main-content'>
      {!pageDataToLoad ?
        textAreas.map((textAreaObject, index) => (
          <MarkdownEditor insertTextAreaValue={null} newTextArea={newTextArea} saveContentTextArea={saveContentTextArea} key={textAreaObject.id} id={textAreas[index].id} removeEmpty={removeEmpty} />
        )) :
        textAreas.map((textAreaObject, index) => (
          <MarkdownEditor insertTextAreaValue={textAreaObject.markdownText} newTextArea={newTextArea} saveContentTextArea={saveContentTextArea} key={textAreaObject.id} id={textAreas[index].id} removeEmpty={removeEmpty} />
        ))
      }
    </div>
  );
};

export default MainContent;