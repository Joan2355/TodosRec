import React from "react";
function useLocalStorange(ItemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
   setTimeout (() =>{
    try {
      const localStorageItem = localStorage.getItem(ItemName);

      let paserdItem;
      if (!localStorageItem) {
        localStorage.setItem(ItemName, JSON.stringify(initialValue));
        paserdItem = initialValue;
      } else {
        paserdItem = JSON.parse(localStorageItem);
        setItem(paserdItem);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }

   }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(ItemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorange };


