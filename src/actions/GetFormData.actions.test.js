import sinon from 'sinon';
import { expect } from 'chai';
import { getFormDetails } from './GetFormData.actions';
import { GET_FORM_DATA, GET_FORM_DATA_ERROR } from '../reducer/GetFormDataReducer';
import { verifyDispatchAction } from '../utils/testUtils';
import loaders from '../utils/loaderUtils';

describe('GetFormData Details', () => {
  describe('getFormDetails()', () => {
    afterEach(() => {
      loaders.getFormDetails.restore && loaders.getFormDetails.restore();
    });
    const result = [
      {
        userId: 1, id: 2, title: 'Cricketer', body: 'International'
      }
    ];

    it('should work', async () => {
      sinon.stub(loaders, 'getFormDetails').callsFake(async () => result);
      const dispatch = sinon.stub();

      await getFormDetails()(dispatch);

      expect(loaders.getFormDetails.calledOnce, 'load of get form data details should be triggered once').to.equal(true);

      const expectedAction = [
        {
          type: GET_FORM_DATA,
          payload: result
        }
      ];

      verifyDispatchAction(dispatch, expectedAction);
    });

    it('should not work', async () => {
      sinon.stub(loaders, 'getFormDetails').throws(async () => 'network error');
      const dispatch = sinon.stub();

      await getFormDetails()(dispatch);

      expect(loaders.getFormDetails.calledOnce, 'load of get form data details should be triggered once').to.equal(true);

      const expectedAction = [
        {
          type: GET_FORM_DATA_ERROR,
          payload: 'network error'
        }
      ];

      verifyDispatchAction(dispatch, expectedAction);
    });

  });
});

