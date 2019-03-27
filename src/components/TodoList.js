import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const TodoList = ({ onDelete, todos }) => {
  const columns = [{
    title: 'Id',
    dataIndex: 'id',
  }
    , {
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={todos}
      columns={columns}
      pagination={{ pageSize: 6 }}
    />
  );
};

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default TodoList;