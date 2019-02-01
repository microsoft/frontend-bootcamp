import { actions, actionsWithService } from '../actions';
import { Store, FilterTypes } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoApp } from './TodoApp';

export function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    add: (label: string) => dispatch(actionsWithService.add(label)),
    remove: (id: string) => dispatch(actionsWithService.remove(id)),
    complete: (id: string) => dispatch(actionsWithService.complete(id)),
    edit: (id: string, label: string) => dispatch(actionsWithService.edit(id, label)),
    clear: () => dispatch(actionsWithService.clear()),
    setFilter: (filter: FilterTypes) => dispatch(actions.filter(filter))
  };
}

export const TodoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
