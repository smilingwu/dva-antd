//  namespace 表示在全局 state 上的 key
//  state 是初始值，在这里是空数组
//  reducers 等同于 redux 里的 reducer，接收 action，同步更新 state

export default {
  namespace: 'todos',
  state: [],
  reducers: {
    add(state, { payload: name }) {
      let id = state.reduce((previous, current) => previous.id > current.id ? previous : current).id;
      id++;
      return [...state, { name, id }];
    },
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};