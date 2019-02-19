import api from './api';

describe('API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should fetch from an endpoint. ', () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: '12345'
    }));
    api({
      method: 'GET',
      endpoint: '/coin/',
    }).then((res) => {
      expect(res.data).toEqual('12345');
    });
  });
});