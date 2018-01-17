const reducer = require('../reducer');
const { actions } = require('../constants');

const initialState = {
  stateMachines: [],
  executions: [],
};

describe('Reducer actions related to state machines', () => {
  it('should call reducer with action CREATE_STATE_MACHINE', () => {
    try {
      const action = {
        type: actions.CREATE_STATE_MACHINE,
        result: {
          stateMachine: {
            stateMachineArn: 'my-state-machine-arn',
          },
        },
      };
      const { stateMachines } = reducer(initialState, action);
      expect(stateMachines).toHaveLength(1);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action DELETE_STATE_MACHINE', () => {
    try {
      const action = {
        type: actions.DELETE_STATE_MACHINE,
        result: {
          index: 1,
        },
      };
      const state = {
        ...initialState,
        stateMachines: [
          {
            name: 'one-state-machine',
            status: 'ACTIVE',
          },
          {
            name: 'state-machine-to-delete',
            status: 'DELETING',
          },
        ],
      };
      const stateMachinesNb = state.stateMachines.length;
      const { stateMachines } = reducer(state, action);
      expect(stateMachines).toHaveLength(stateMachinesNb - 1);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action DESCRIBE_STATE_MACHINE', () => {
    try {
      const action = {
        type: actions.DESCRIBE_STATE_MACHINE,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action DESCRIBE_STATE_MACHINE_FOR_EXECUTION', () => {
    try {
      const action = {
        type: actions.DESCRIBE_STATE_MACHINE_FOR_EXECUTION,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action LIST_STATE_MACHINES', () => {
    try {
      const action = {
        type: actions.LIST_STATE_MACHINES,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action UPDATE_STATE_MACHINE', () => {
    try {
      const action = {
        type: actions.UPDATE_STATE_MACHINE,
        result: {
          index: 1,
          stateMachine: {
            name: 'state-machine-to-update',
            roleArn: 'my-updated-role',
          },
        },
      };
      const state = {
        ...initialState,
        stateMachines: [
          {
            name: 'one-state-machine',
            status: 'ACTIVE',
          },
          {
            name: 'state-machine-to-update',
            roleArn: 'my-role',
            status: 'ACTIVE',
          },
        ],
      };
      const { stateMachines } = reducer(state, action);
      expect(stateMachines[action.result.index]).toMatchObject(action.result.stateMachine);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });
});

describe('Reducer actions related to activities', () => {
  it('should call reducer with action CREATE_ACTIVITY', () => {
    try {
      const action = {
        type: actions.CREATE_ACTIVITY,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action LIST_ACTIVITIES', () => {
    try {
      const action = {
        type: actions.LIST_ACTIVITIES,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action DELETE_ACTIVITY', () => {
    try {
      const action = {
        type: actions.DELETE_ACTIVITY,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action DESCRIBE_ACTIVITY', () => {
    try {
      const action = {
        type: actions.DESCRIBE_ACTIVITY,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action GET_ACTIVITY_TASK', () => {
    try {
      const action = {
        type: actions.GET_ACTIVITY_TASK,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action SEND_TASK_FAILURE', () => {
    try {
      const action = {
        type: actions.SEND_TASK_FAILURE,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action SEND_TASK_HEARTBEAT', () => {
    try {
      const action = {
        type: actions.SEND_TASK_HEARTBEAT,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action SEND_TASK_SUCCESS', () => {
    try {
      const action = {
        type: actions.SEND_TASK_SUCCESS,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });
});

describe('Reducer actions related to executions', () => {
  it('should call reducer with action DESCRIBE_EXECUTION', () => {
    try {
      const action = {
        type: actions.DESCRIBE_EXECUTION,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action GET_EXECUTION_HISTORY', () => {
    try {
      const action = {
        type: actions.GET_EXECUTION_HISTORY,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action LIST_EXECUTIONS', () => {
    try {
      const action = {
        type: actions.LIST_EXECUTIONS,
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action START_EXECUTION', () => {
    try {
      const action = {
        type: actions.START_EXECUTION,
        result: {
          execution: {
            executionArn: 'my-execution-arn',
          },
        },
      };
      const { executions } = reducer(initialState, action);
      expect(executions).toHaveLength(1);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action STOP_EXECUTION', () => {
    try {
      const action = {
        type: actions.STOP_EXECUTION,
        result: {
          index: 1,
          execution: {
            name: 'execution-to-stop',
            status: 'ABORTED',
          },
        },
      };
      const state = {
        ...initialState,
        executions: [
          {
            name: 'one-execution',
            status: 'SUCCEEDED',
          },
          {
            name: 'execution-to-stop',
            status: 'RUNNING',
          },
        ],
      };
      const { executions } = reducer(state, action);
      expect(executions[action.result.index]).toMatchObject(action.result.execution);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });
});

describe('Other reducer actions', () => {
  it('should call reducer with undefined action', () => {
    try {
      const action = {
        type: 'undefined',
      };
      const newState = reducer(initialState, action);
      expect(newState).toMatchObject(initialState);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action ADD_HISTORY_EVENT', () => {
    try {
      const action = {
        type: actions.ADD_HISTORY_EVENT,
        result: {
          executionArn: 'my-execution-arn',
          event: {
            name: 'my-new-event',
          },
        },
      };
      const state = {
        ...initialState,
        executions: [
          {
            executionArn: 'my-execution-arn',
            events: [],
          },
        ],
      };
      const { executions } = reducer(state, action);
      expect(executions[0].events[0]).toMatchObject(action.result.event);
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });

  it('should call reducer with action UPDATE_EXECUTION', () => {
    try {
      const action = {
        type: actions.UPDATE_EXECUTION,
        result: {
          executionArn: 'my-execution-arn',
          updateFields: {
            stopDate: Date.now() / 1000,
            status: 'UPDATED_STATUS',
          },
        },
      };
      const state = {
        ...initialState,
        executions: [
          {
            name: 'one-execution',
            status: 'SUCCEEDED',
          },
          {
            executionArn: 'my-execution-arn',
          },
        ],
      };
      const { executions } = reducer(state, action);
      expect(executions.find(e => e.executionArn === action.result.executionArn))
        .toMatchObject(state.executions.find(e => e.executionArn === action.result.executionArn));
    } catch (e) {
      expect(e).not.toBeDefined();
    }
  });
});
