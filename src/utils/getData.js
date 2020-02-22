const getData = (API) => {
  let data = '';
  try {
    data = window.fetch(API).then((res) => res.json());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return data;
};

export default getData;
