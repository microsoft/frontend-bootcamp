import * as actions from '../actions';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoApp } from './TodoApp';

export function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    add: (label: string) => dispatch(actions.add(label)),
    remove: (id: string) => dispatch(actions.remove(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
