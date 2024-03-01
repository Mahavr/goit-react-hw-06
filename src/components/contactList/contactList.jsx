import { Contact } from "../contact/contact";
import css from "./contactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const users = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {visibleUsers.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};
