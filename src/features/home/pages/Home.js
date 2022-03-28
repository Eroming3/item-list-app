import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import AddModal from '../../../common/components/modals/AddModal';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'Guitar',
          description: 'It Rocks'
        },
        {
          id: 2,
          name: 'Piano',
          description: 'Makes Melodies'
        },
        {
          id: 3,
          name: 'Ukulele',
          description: 'Try playing over the rainbow with it!'
        },
        {
          id: 4,
          name: 'Banjo',
          description: 'Every hipster has a folk instrument'
        },
        {
          id: 5,
          name: 'Drums',
          description: 'Bang these around'
        },
      ],
      isVisible: false,
      name: "",
      description: ""
    }
  }

  handleDelete = (id) => {
    const newItems = this.state.items.filter(x => x.id !== id);
    this.setState({
      items: newItems
    });
  }

  handleOk = () => {
    const item = {
      id: this.state.items[this.state.items.length - 1].id + 1,
      name: this.state.name,
      description: this.state.description,
    };

    this.setState({
      items: [...this.state.items, item],
      isVisible: false,
      name: "",
      description: ""
    });
  }

  handleUpdateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleUpdateDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    const tableColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        render: (item) => (
          <Button onClick={() => this.handleDelete(item.id)}>
            Delete
          </Button>
        )
      }
    ];
    return (
      <>
        <div className="app-page-container mt-5">
          <Row>
            <Col span={12}>
              <h1>Erik's App</h1>
            </Col>
            <Col span={12}>
              <div className="float-right">
                <Button onClick={() => this.setState({ isVisible: true})}>Add Item</Button>
              </div>
            </Col>
          </Row>
          <div>
            <Table
              columns={tableColumns}
              dataSource={this.state.items}
              rowKey="id"
            />
          </div>
        </div>

        <AddModal
          title="Add Item"
          visible={this.state.isVisible}
          handleAdd={() => this.handleOk()}
          handleCancel={() => this.setState({ isVisible: false})}
          name={this.state.name}
          description={this.state.description}
          handleChangeName={(e) => this.handleUpdateName(e)}
          handleChangeDescription={(e) => this.handleUpdateDescription(e)}
        />
      </>
    )
  }
} //Class when you have alot functionality in a feature page

export default Home;
