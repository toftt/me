import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const getUrl = () => {
    const url = 'h|t|t|p|s|:|/|/|b|h|1|1|3|e|9|h|6|6|.|e|x|e|c|u|t|e|-|a|p|i|.|e|u|-|n|o|r|t|h|-|1|.|a|m|a|z|o|n|a|w|s|.|c|o|m|/|v|0|/|m|u|s|i|c|';
    return url.replace(/\|/g, '');
};

const getMusicData = () => {
    return axios.get(getUrl());
};

const MusicContext = createContext();
export default MusicContext;

export function MusicProvider({ children }) {
  const [state, setState] = useState({ data: {}, isFetching: false });

  useEffect(() => {

    setState({ data: {}, isFetching: true });
    getMusicData()
        .then(({ data }) => {
            setState({
                data,
                isFetching: false
            });
        })
        .catch((err) =>
            setState({
                data: {},
                isFetching: false
            })
        );
  }, []);

  return <MusicContext.Provider value={state}>{children}</MusicContext.Provider>;
}