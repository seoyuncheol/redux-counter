import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHAGNE = "toto/CHANGE";
const INSERT = "todo/INSERT";
const UPDATE = "todo/UPDATE";
const REMOVE = "todo/REMOVE";

export const change = createAction(CHAGNE);
export const insert = createAction(INSERT);
export const update = createAction(UPDATE);
export const remove = createAction(REMOVE);

let id = 1;
const initialState = {
  input: "",
  todoList: [
    { id: 0, text: "리액트 공부하기", done: true },
    { id: 1, text: "컴포넌트 스타일링 해보기", done: false }
  ]
};

export default handleActions(
  {
    [CHAGNE]: (state, { payload }) => {
      return {
        ...state,
        input: payload
      };
    },
    [INSERT]: (state, { payload }) =>
      produce(state, draft => {
        draft.todoList.push(payload);
      }),
    [UPDATE]: (state, { payload }) =>
      produce(state, draft => {
        const { id, update } = payload;
        draft.todoList[id] = update;
      }),
    [REMOVE]: (state, action) => ({})
  },
  initialState
);
