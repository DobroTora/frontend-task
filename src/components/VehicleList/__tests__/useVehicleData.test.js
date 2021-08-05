import fetch from 'node-fetch';
import getData from '../../../api';
import responseData from '../../../../public/api/vehicles.json';

const { Response } = jest.requireActual('node-fetch');

const url = 'http://localhost:8000/api/vehicles';
const carObject = {
  id: 'xe',
  modelYear: 'k17',
  apiUrl: '/api/vehicle_xe.json',
  media: [
    {
      name: 'vehicle',
      url: '/images/16x9/xe_k17.jpg',
    },
    {
      name: 'vehicle',
      url: '/images/1x1/xe_k17.jpg',
    },
  ],
};

test('getData calls fetch with the right args and returns an array of objects', async () => {
  fetch.mockReturnValue(new Response(JSON.stringify(responseData)));

  const data = await getData(url);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(url);
  expect(data).toEqual(expect.arrayContaining([carObject]));
});
