import { API } from 'aws-amplify';

function postData() {
  const apiName = 'payment';
  const path = '/payment';
  const myInit = {
    // OPTIONAL
    headers: {}, // OPTIONAL
  };
  console.log('inin');
  return API.get(apiName, path, myInit);
}

export default postData;
