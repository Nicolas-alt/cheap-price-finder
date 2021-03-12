export const getItems = async () => {
  const response = await fetch(REACT_APP_GET_ITEMS);
  const data = await response.json();
  return data;
};
