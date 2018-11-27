import sinon from 'sinon';
import { expect } from 'chai';
import { submitFormData, clearNotificationMessage } from './PostFormData.actions';
import { POST_FORM_DATA, POST_FORM_DATA_ERROR } from '../reducer/PostFormDataReducer';
import { verifyDispatchAction, verifyResult } from '../utils/testUtils';
import loaders from '../utils/loaderUtils';

describe('PostFormData Details', () => {
  describe('submitFormData()', () => {
    afterEach(() => {
      loaders.submitFormData.restore && loaders.submitFormData.restore();
    });

    it('should work', async () => {
      sinon.stub(loaders, 'submitFormData').callsFake(async () => 'successfully added form data');
      const dispatch = sinon.stub();

      await submitFormData()(dispatch);

      expect(loaders.submitFormData.calledOnce, 'load of submit form data details should be triggered once').to.equal(true);

      const expectedAction = [
        {
          type: POST_FORM_DATA,
          payload: 'successfully added form data'
        }
      ];

      verifyDispatchAction(dispatch, expectedAction);
    });

    it('should not work', async () => {
      sinon.stub(loaders, 'submitFormData').throws(async () => 'network error');
      const dispatch = sinon.stub();

      await submitFormData()(dispatch);

      expect(loaders.submitFormData.calledOnce, 'load of submit form data details should be triggered once').to.equal(true);

      const expectedAction = [
        {
          type: POST_FORM_DATA_ERROR,
          payload: 'network error'
        }
      ];

      verifyDispatchAction(dispatch, expectedAction);
    });
  });
  describe('should work for clearNotificationMessage', () => {
    describe('clearNotificationMessage()', () => {
      it('clearNotificationMessage', async () => {
        const result = clearNotificationMessage();
        verifyResult(result, POST_FORM_DATA,'');
      });
    });
  });
});

