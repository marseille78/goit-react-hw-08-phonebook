const BASE_URL = "https://64823d6929fa1c5c5032c12d.mockapi.io";

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContact = async (data) => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return await res.json();
};

export const removeContact = async (id) => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE'
  });
  return await res.json();
}
