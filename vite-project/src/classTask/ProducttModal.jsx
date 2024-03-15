import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputProduct from "./InputProduct";

function ProducttModal({
  modal,
  toggle,
  refresHandler,
  produc,
  setProduc,
  updatemod,
  intialProduc,
  setUpdatemod,
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <InputProduct
            togle={toggle}
            refresHandle={refresHandler}
            product={produc}
            setProduct={setProduc}
            updatemode={updatemod}
            intialProduct={intialProduc}
            setUpdatemode={setUpdatemod}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ProducttModal;