const storeLanguage = async (value) => {
  try {
    await localStorage.setItem("deviceLanguage", value);
  } catch (e) {
    console.error("Error on storeLanguage Async Storage", "Services");
  }
};

export default storeLanguage;
