import * as React from 'react'
const styles = require('./TextAutoComplete.module.css')
import Downshift from 'downshift';
import { Container, Col, Row, Input } from 'reactstrap'

export default ({suggestedItems}) => {
      
      return (
          <Downshift
            itemToString={item => (item ? item.name : '')}
          >
            {({isOpen, getInputProps, getItemProps, getMenuProps, inputValue, highlightedIndex, selectedItem}) => (
                      <div>
                        <Input {...getInputProps(
                               { placeholder: 'Type a keyword',
                                 type:'text',
                                 name:'keyword',
                                 id:'keyword',
                                 
                                }
                               )}
                        />
                      <ul {...getMenuProps({className: styles.downshift_dropdown})}>
                        {isOpen
                          ? suggestedItems
                            .filter(item => !inputValue || item.name.includes(inputValue))
                            .map((item, index) => (
                              <li
                                {...getItemProps({
                                  key: item.name,
                                  index,
                                  item,
                                  className: styles.dropdown_item,
                                  style: { backgroundColor:
                                           highlightedIndex === index ? 'lightgray' : null,
                                  fontWeight: selectedItem === item ? 'bold' : 'normal',
                                  }
                                })}
                              >
                                {item.name}
                              </li>
                            ))
                         : null }
                      </ul>
                    </div>
           )}
          </Downshift>  
  )}