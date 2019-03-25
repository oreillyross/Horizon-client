import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'
import Keywords from '../pages/Keywords'
import Downshift from 'downshift'

const StyledModal = styled.div`
    width: 50%;
	height: 50%;
	padding: 15px;
	background-color: teal;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
  	outline: black;
	margin: auto;
	box-shadow: 5px 10px;
	text-align: center;
`

const StyledInnerModal = styled.div`
  border: 1px solid darkslategray;
  background-color: white;
  height: 60%;
  padding: 20px;
   
`
const items = [
  {name: 'Hariri'},
  {name: 'Lebanon'},
  {name: 'Rifi'},
]

const KeywordModal = ({openState, handleClose, modalArticle}) => {
    
    
   return (
      <Modal
        open={openState}
        onClose={handleClose}
      >
        <StyledModal>
          <h3 style={{textDecoration: 'underline', color: 'white'}}> 
            {modalArticle.title}
          </h3>
              <Downshift
                 onChange={selection => alert(`You selected ${selection.value}`)}
                 itemToString={item => (item ? item.name : '')}
              >
                {
                   ({
                      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
                     
                   }) => {
                     return <div style={{backgroundColor: "yellow"}}>
                        <label {...getLabelProps()}>Add a keyword</label>
                       <input {...getInputProps()} />
                       <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.name.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
                     </div>
                   }
                 }
              </Downshift>
          <StyledInnerModal>
              {(modalArticle.keywords && modalArticle.keywords.length > 0) ? <h4> Keywords </h4> : null}
              {(modalArticle.keywords) ? 
                  
                  modalArticle.keywords.map(keyword => <div key={keyword.id}> {keyword.name} </div>) 
                : null
              }
              <h2>Keywords</h2>
              <Keywords />
          </StyledInnerModal>
          
        </StyledModal>
      </Modal>
    )
}

export default KeywordModal