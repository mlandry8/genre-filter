import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';

const Home = ({params}) => {
   const [accessToken, setAccessToken] = useState();

   const code = params.get('code');
   const redirectUri = 'http://localhost:3000/';

   useEffect (()=>{
      if (code) {
         axios.post('http://localhost:3000/login', {
            code: code,
            redirectUri: redirectUri
          })
          .then(function (response) {
            console.log(response.data.accessToken);
            setAccessToken(response.data.accessToken)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, [code])

   useEffect (() => {
      if (accessToken){
         const authString = 'Bearer ' + accessToken
         axios.get('https://api.spotify.com/v1/me', {headers: {Authorization: authString}}
         ).then(function (response) {
            console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });
      }
   }, [accessToken])

   const handleLogin = () => {
      const clientId = '69bb29ca8dfd409c8e267eaddff523cf'
      window.location.replace(
         'https://accounts.spotify.com/authorize?' +
         'client_id=' + clientId + 
         '&response_type=code' +
         '&redirect_uri=' + redirectUri
      );
   }

   return (
      <Button label='Login w/ Spotify' onClick={handleLogin} />
   );
}

export default Home