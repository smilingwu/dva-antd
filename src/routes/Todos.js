import React from 'react';
import { connect } from 'dva';
import Todolists from '../components/TodoList';
import Add from '../components/Add';

const Todos = ({ dispatch, todos, inputs }) => {
  function handleDelete(id) {
    dispatch({
      type: 'todos/delete',
      payload: id,
    });
  }
  function handleAdd() {
    dispatch({
      type: 'todos/add',
      payload: inputs.input,
    });
  }
  function handelChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    })
  }

  return (
    <div>
      <Add onAdd={handleAdd} onChange={handelChange} input={inputs.input} />
      <br />
      <hr />
      <h2>List of Todos</h2>
      <Todolists onDelete={handleDelete} todos={todos} />
    </div>
  )
};
// export default Products;
export default connect(({ inputs, todos }) => ({
  inputs, todos,
}))(Todos);