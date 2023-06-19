import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

import {
  getContacts,
  getFilter,
  getVisibleContacts,
} from "../../redux/selectors";

import { fetchContacts } from "../../redux/operations";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);
  console.log(visibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.item}>
            <ContactItem name={name} number={phone} id={id} />
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export { ContactList };