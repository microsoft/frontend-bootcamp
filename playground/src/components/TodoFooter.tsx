import React from 'react';

import { Store } from '../store';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actionsWithService } from '../actions';
import { connect } from 'react-redux';

// Redux Container
export function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    clear: () => dispatch(actionsWithService.clear())
  };
}

type TodoFooterProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const TodoFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
});
