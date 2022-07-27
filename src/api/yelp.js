import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer OP27gF3PrhxzV9INA9zyS460-_eW8Wg40o7wgpgAWFS6OFQMa7HpRi0H74WCdlPNjLayQtnvtSkSolvWhSZTgHcHqtC9LFn_LOYn_E5X7jey_D5zYdC0-OwPaNLfYnYx'
  }
})
