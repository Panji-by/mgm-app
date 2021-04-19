import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    itemLabel,
    itemBook
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <ModalBody>
         {itemLabel} Added to Cart
        </ModalBody>
    </div>
  );
}

const ModalTwo = (props) => {
  const {
    itemLabel2,
    itemBook2
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <ModalBody>
         {itemLabel2} Added to Bookmark
        </ModalBody>
    </div>
  );
}

export default ModalExample;
export {ModalTwo};