import React from 'react';
import { setFilter } from '../filter/actionCreators';
import { FilterState } from '../filter/state';
import { useAppDispatch, useAppSelector } from '../store';

export const FilterSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(state => state.filter);

  const renderFilter = (filter: FilterState, text: string) => {
    if (filter === currentFilter) {
      return <b>{text}</b>
    }
    return (
      <button  onClick={_ => dispatch(setFilter(filter))}>{text}</button>
    );
  }

  return (
    <>
      フィルター：
      {renderFilter('all', 'すべて')}&nbsp;
      {renderFilter('todo', '未完了')}&nbsp;
      {renderFilter('completed', '完了')}
    </>
  )
}