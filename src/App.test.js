import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Todo App',()=>{
    // Write tests for Todo App
    // Add and  Delete Todo
    it('adding and deleting data from todo app', () => {
      //let todos;
      //const addTodo = data => (todos = data)
      render(<App/>);
      const entry=screen.getByPlaceholderText("New Todo");
      const count=screen.getByTestId("todoCount");
      userEvent.type(entry, 'hello world')
      const addBtn=screen.getByRole('button',{name:/create/i});
      userEvent.click(addBtn);
      expect(count).toHaveTextContent('1 todos');
      const delBtn=screen.getAllByRole('button',{name:/delete/i});
      userEvent.click(delBtn[0]);
      expect(count).toHaveTextContent('0 todos');
    })
})
