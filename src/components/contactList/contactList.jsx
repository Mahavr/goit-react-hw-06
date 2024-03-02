import { Contact } from "../contact/contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const users = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleUsers.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
