import axios from 'axios';

const baseUrl = "http://localhost:8000/api/v1";

// Start LoginForm
export const login = ({ email, password }) => axios({
  method: 'post',
  url: `${baseUrl}/login`,
  data: {
    email,
    password,
  },
});

export const signup = ({ username, email, password }) => axios({
  method: 'post',
  url: `${baseUrl}/signup`,
  data: {
    username,
    email,
    password,
  },
});

export const getListOfSubscription = ({email}) => axios({
  method: 'get',
  url: `${baseUrl}/subscription/${email}`,
})

export const unsubscribe = ({title,artist,year,email}) => axios({
  method: 'put',
  url:`${baseUrl}/subscription`,
  data: {
    title,
    artist,
    year,
    email,
  }
}) 