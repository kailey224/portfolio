import { useEffect } from 'react';
import axios from 'axios';

const GaApi = () => {
  useEffect(() => {
    // 'client_id', 'client_secret', 'refresh_token'을 사용하여 갱신된 'access_token'을 요청한다.
    axios
      .post('https://accounts.google.com/o/oauth2/token', {
        client_id: `${process.env.OAUTH_CLIENT_ID}`,
        client_secret: `${process.env.OAUTH_CLIENT_SECRET}`,
        refresh_token: `${process.env.OAUTH_REFRESH_TOKEN}`,
        grant_type: 'refresh_token',
      })
      .then(response => {
        // 만약 정상적으로 'access_token'을 받았다면, 기본 보고서(runReport)를 호출하는 요청을 보낸다.
        axios
          .post(
            `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.GA4_PROPERTY_ID}:runReport`,
            // runReport 요청에 필요한 'dimensions', 'metrics', 'dataRanges'를 data에 포함하여 전송한다.
            {
              dimensions: [{ name: 'date' }],
              metrics: [
                { name: 'activeUsers' },
                { name: 'screenPageViews' },
                { name: 'sessions' },
              ],
              dateRanges: [{ startDate: '2024-01-01', endDate: 'today' }],
              keepEmptyRows: true,
            },
            // 이전에 전달받은 'access_token'을 headers에 담는다(인증).
            {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            }
          )
          // 정상적으로 응답을 받았다면, 콘솔창에 runReport의 결과가 나타날 것이다.
          // eslint-disable-next-line no-shadow
          .then(response => {
            console.log(response);
          })
          // runReport가 정상적으로 호출되지 않았다면, [REPORT ERROR]라는 문구와 함께 콘솔창에 에러가 보일 것이다.
          .catch(error => {
            console.log('[REPORT ERROR] ', error);
          });
      })
      // 'access_token'을 호출하는 것에 실패했다면, [TOKEN ERROR]라는 문구와 함께 콘솔창에 에러가 보일 것이다.
      .catch(error => {
        console.log('[TOKEN ERROR] ', error);
      });
  });
};

export default GaApi;
