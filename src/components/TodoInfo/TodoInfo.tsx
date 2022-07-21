import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/ToDo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article
    data-id={todo.id}
    className={
      classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })
    }
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>

    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </article>
);
