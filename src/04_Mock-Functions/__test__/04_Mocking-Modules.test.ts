import axios from 'axios';
import Users from '../04_Mocking-Modules';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  mockedAxios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then((data) => expect(data).toEqual(users));
});
