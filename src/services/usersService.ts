import axios from 'axios';

const usersService = axios.create({
  baseURL: 'https://randomuser.me/api/',

});

export default usersService;
