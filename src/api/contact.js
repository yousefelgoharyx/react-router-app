let contacts = [
  {
    id: 1,
    name: "Yousef",
    number: "0122",
  },
  {
    id: 2,
    name: "Ahmed",
    number: "0122",
  },
  {
    id: 3,
    name: "Mohamed",
    number: "0122",
  },
  {
    id: 4,
    name: "Bassem",
    number: "0122",
  },
];

export function getContacts() {
  return contacts;
}
export function getContact(id) {
  return contacts.find((contact) => contact.id === id);
}

export function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}
