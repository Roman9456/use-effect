export default async function fetchData(url) {
  try {
    // загружаем список пользователей
    const responseList = await fetch(url + '/users.json');
    if (!responseList.ok) {
      throw new Error(responseList.statusText);
    }
    const items = await responseList.json();
    // загружаем информацию о каждом пользователе
    for (let i = 0; i < items.length; i++) {
      const responseDetails = await fetch(url + `/${items[i].id}.json`);
      if (!responseDetails.ok) {
        throw new Error(responseDetails.statusText);
      }
      const details = await responseDetails.json();
      items[i].details = details;
    }
    return items;
  } catch (e) {
    console.error(e);
  }
}