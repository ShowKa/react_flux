import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodos() {
  // 本来ならここでAPIを呼び出すが、ここではsetTimeout()で代用。
  dispatcher.dispatch({
    type: "FETCH_TODOS"
  });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECIEVE_TODOS",
      todos: [
        {
          id: 213464613,
          text: "Go Shopping Again",
          complete: false
        },
        {
          id: 335684679,
          text: "Sleep At The Yard.",
          complete: true
        }
      ]
    });
  }, 1000)
}
