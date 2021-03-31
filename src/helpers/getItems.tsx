const url: string = process.env.REACT_APP_GET_ITEMS || '';

export const getItems = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
