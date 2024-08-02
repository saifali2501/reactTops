import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Table } from "reactstrap";

export default function UserTable({ modal, toggle, mycard }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Information</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {mycard.map((e, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </div>
  );
}
