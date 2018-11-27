import { expect } from 'chai';


const verifyResult = (result, expectedAction, expectedPayload) => {
  // test the outcome
  expect(result.type).to.equal(expectedAction);
  expect(result.payload).to.deep.equal(expectedPayload);
};


const verifyMenuRedirect = (result, expectedAction, expectedMenuId, expectedCloseMenu) => {
  // test the outcome
  expect(result.type).to.equal(expectedAction);
  expect(result.menuId).to.deep.equal(expectedMenuId);
  expect(result.closeMenu).to.deep.equal(expectedCloseMenu);
};


const verifyDispatchAction = (mockDispatch, expectedActions) => {
  let expectedActionsHelper = expectedActions;
  // wrap object in an array
  if (!Array.isArray(expectedActionsHelper)) {
    expectedActionsHelper = [expectedActionsHelper];
  }

  // test the outcome
  expect(mockDispatch.callCount).to.equal(expectedActionsHelper.length);
  for (let i = 0; i < expectedActionsHelper.length; i++) {
    const args = mockDispatch.args[i][0];
    expectedActionsHelper[i].payload ?
      verifyResult(args, expectedActionsHelper[i].type, expectedActionsHelper[i].payload) :
      verifyMenuRedirect(args, expectedActionsHelper[i].type, expectedActionsHelper[i].menuId,
        expectedActionsHelper[i].closeMenu);
  }
};


const verifyArguments = (stub, ...args) => {
  args.map((arg, index) => expect(arg).to.deep.equal(stub.args[0][index]));
};


const verifyDefaultReducerBehaviour = (reducer, expectedInitialState) => {
  const result = reducer(undefined, {
    type: 'NONSENSE',
    payload: {}
  });

  expect(result).to.deep.equal(expectedInitialState);
};

export {
  verifyDispatchAction,
  verifyResult,
  verifyArguments,
  verifyMenuRedirect,
  verifyDefaultReducerBehaviour
};

