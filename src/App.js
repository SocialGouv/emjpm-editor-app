import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

const editorId = process.env.REACT_APP_EMJPM_EDITOR_ID || 1;
const editorSecret = process.env.REACT_APP_EMJPM_EDITOR_SECRET || "c1uhbrbyr7d";
const redirectUrl = process.env.REACT_APP_EMJPM_REDIRECT_URL || "http://localhost:3001";
const emjpmUrl = process.env.REACT_APP_EMJPM_URL || "https://emjpm.num.social.gouv.fr";
const emjpmAuthQueryString = queryString.stringify({
  editor_id: editorId,
  editor_secret: editorSecret,
  redirect_url: redirectUrl
});
const emjpmAuthUrl = `${emjpmUrl}/application/authorization?${emjpmAuthQueryString}`;
const emjpmApiUrl = process.env.REACT_API_EMJPM_URL || "http://localhost:4000/api/v2";
const emjpmApiMesuresUrl = `${emjpmApiUrl}/editors/mesures`;

function App() {
  const [token, setToken] = useState(null);
  const [mesures, setMesures] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem('token')

    if (localToken) {
      setToken(localToken);
      return;
    }

    const newToken = queryString.parse(window.location.search).token;

    if (newToken) {
      localStorage.setItem('token', newToken);
      window.location.replace(window.location.origin);
    }
  }, [setToken]);

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchMesures = async () => {
      const res = await fetch(emjpmApiMesuresUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { mesures } = await res.json();

      setMesures(mesures);
    };

    fetchMesures();
  }, [token]);

  return (
    <div className="App">
      <h1>eMJPM - Application métier</h1>
      {token ? (
        <code styles={{ o: "80%"}}>{token}</code>
      ) : (
        <a href={emjpmAuthUrl} className="button">
          Connexion eMJPM
        </a>
      )}
      {mesures && (
        <div>
          <h4>Mesures</h4>
          {mesures.map(mesure => (
            <div key={mesure.id}>
              <span>#{mesure.id} - {mesure.ville}</span>
              <span>{mesure.ville}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
