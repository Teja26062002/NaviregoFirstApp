import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/';

interface DynamicComponentProps {
  index: number;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ index }) => {
  const [letters, setLetters] = useState<string[]>(Array(30).fill(''));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL + index);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        const newLetter = result.letter;

        // Update the state variable with the new letter and keep only the last 30 letters
        setLetters((prevLetters) => {
          const updatedLetters = [...prevLetters, newLetter].slice(-30);
          return updatedLetters;
        });
      } catch (error) {
        console.error('ERROR FETCHING DATA FROM NAVIREGO:', error);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="dynamic-component">
      

      {letters.map((letter, index) => (
        <>{letter}</>
      ))}

    </div>
  );
};

export default DynamicComponent;
