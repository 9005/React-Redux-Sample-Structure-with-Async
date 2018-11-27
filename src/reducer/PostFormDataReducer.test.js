import { expect } from 'chai';
import {
  PostFormDataReducer,
  POST_FORM_DATA,
  POST_FORM_DATA_ERROR
} from './PostFormDataReducer';
import { verifyDefaultReducerBehaviour } from '../utils/testUtils';

describe('post formData reducer', () => {
  describe('default', () => {
    it('should do nothing with unhandled action', () => {
      const expectedInitialState = {
        errorMessage: '',
        result: []
      };
      verifyDefaultReducerBehaviour(PostFormDataReducer, expectedInitialState);
    });
  });
});

describe('POST_FORM_DATA', () => {
  it('should set value for result field', () => {
    const initialState = {
      result: [],
      errorMessage: ''
    };

    const payload = 'successfully added form data';

    const result = PostFormDataReducer(initialState, {
      type: POST_FORM_DATA,
      payload
    });

    expect(result.result).to.equal(payload);
    expect(result.errorMessage).to.equal('');
  });
});

describe('POST_FORM_DATA_ERROR', () => {
  it('should set value for errorMessage field', () => {
    const initialState = {
      result: [],
      errorMessage: ''
    };

    const payload = 'network error'

    const result = PostFormDataReducer(initialState, {
      type: POST_FORM_DATA_ERROR,
      payload
    });
    expect(result.errorMessage).to.equal(payload);
  });
});



