import React, {useState, useRef, useCallback} from 'react'
import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'

const Test5 = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '텍스트1', checked: true, },
        { id: 2, text: '텍스트2', checked: true, },
        { id: 3, text: '텍스트3', checked: false, },
    ]);
    const nextId = useRef(4);   //이후 추가되는 요소에 대한 id값을 ref 변수에 담기
    const onInsert = useCallback(
        text => {
            const todo = { id: nextId.current, text, checked: false, };
            setTodos(todos.concat(todo));
            nextId.current += 1; //nextId 1씩 더하깅..
        }, [todos],
    );
    const onRemove = useCallback(
        id => { setTodos(todos.filter(todo => todo.id !== id)); },[todos],
        );
    const onToggle = useCallback(
      id => {
        setTodos(
          todos.map(todo => todo.id === id ? { ...todo, checkd: !todo.checked } : todo, ),
        ); }, [todos],
        );

        return (
          <>
              <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
              </TodoTemplate>
          </>
        )
      }

export default Test5