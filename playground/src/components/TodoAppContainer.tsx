import { actions, TodoAction } from '../actions';
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

export function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
  return {
    add: (label: string) => dispatch(actions.add(label)),
    remove: (id: string) => dispatch(actions.remove(id)),
    complete: (id: string) => dispatch(actions.complete(id)),
    edit: (id: string, label: string) => dispatch(actions.edit(id, label)),
    clear: () => dispatch(actions.clear()),
    setFilter: (filter: FilterTypes) => dispatch(actions.filter(filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
