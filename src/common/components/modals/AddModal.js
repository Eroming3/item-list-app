import React from 'react';
import { Modal, Input } from 'antd';

const AddModal = (props) => (
  <Modal
      visible={props.visible}
      title={props.title}
      width={700}
      height={500}
      onOk={() => props.handleAdd()}
      onCancel={() => props.handleCancel()}
  >
        <Input
          type="text"
          placeholder="Name: e.g. Violin "
          value={props.name}
          onChange={(e) => props.handleChangeName(e)}
        />
        <Input
          type="text"
          placeholder="Description e.g. Stringin It"
          value={props.description}
          onChange={(e) => props.handleChangeDescription(e)}
        />
  </Modal>
);

export default AddModal;
