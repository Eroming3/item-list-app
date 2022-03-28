import React from 'react';
import { Modal, Input, Row, Col } from 'antd';
const AddModal = (props) => (
  <Modal
      visible={props.visible}
      title={props.title}
      width={700}
      height={500}
      onOk={() => props.handleAdd()}
      onCancel={() => props.handleCancel()}
  >
    <Row gutter={[32, 8]}>
      <Col span={12}>
        <label>Name</label>
        <Input
          type="text"
          placeholder="Name: e.g. Violin "
          value={props.name}
          onChange={(e) => props.handleChangeName(e)}
        />
      </Col>
      <Col span={12}>
        <label>Description</label>
        <Input
          type="text"
          placeholder="Description e.g. Stringin It"
          value={props.description}
          onChange={(e) => props.handleChangeDescription(e)}
        />
      </Col>
    </Row>
  </Modal>
);
export default AddModal;
