/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import usersService from './usersService';

export default {

  getUser: () => usersService.get('1.3/?seed=1e0826f984b33586'),

};
