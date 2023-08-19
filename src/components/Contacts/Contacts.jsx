import React from 'react'
import PropTypes from 'prop-types'

import {List} from './Contacts.styled'
import { ContactItem } from './ContactItem/ContactItem';
import { Filter } from './Filter/Filter';

export const Contacts = ({contacts, onChange, value, onClick}) => {
    return (
        <>
            <label>
                Find contacts by name
                <Filter
                    onChange={onChange}
                    value={value}
                />
            </label>
            <List>
                {contacts.map(el =>
                    <ContactItem
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        phone={el.number}
                        onClick={() => onClick(el.id)}
                    />
                )}
            </List>
        </>
        
    )
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    onClick:  PropTypes.func.isRequired
}