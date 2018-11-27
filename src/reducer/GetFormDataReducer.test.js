import { expect } from 'chai';
import {
  GetFormDataReducer,
  GET_FORM_DATA,
  GET_FORM_DATA_ERROR
} from './GetFormDataReducer';
import { verifyDefaultReducerBehaviour } from '../utils/testUtils';

describe('get formData reducer', () => {
  describe('default', () => {
    it('should do nothing with unhandled action', () => {
      const expectedInitialState = {
        errorMessage: '',
        result: []
      };
      verifyDefaultReducerBehaviour(GetFormDataReducer, expectedInitialState);
    });
  });
});

describe('GET_FORM_DATA', () => {
  it('should set value for result field', () => {
    const initialState = {
      result: [],
      errorMessage: ''
    };

    const payload = [
      {
        userId: 1,
        id: 1,
        title: 'Cricketer',
        body: 'International'
      }
    ];

    const result = GetFormDataReducer(initialState, {
      type: GET_FORM_DATA,
      payload
    });

    expect(result.result).to.equal(payload);
    expect(result.errorMessage).to.equal('');
  });
});

describe('GET_FORM_DATA_ERROR', () => {
  it('should set value for errorMessage field', () => {
    const initialState = {
      result: [],
      errorMessage: ''
    };

    const payload = 'network error'

    const result = GetFormDataReducer(initialState, {
      type: GET_FORM_DATA_ERROR,
      payload
    });
   expect(result.errorMessage).to.equal(payload);
  });
});



