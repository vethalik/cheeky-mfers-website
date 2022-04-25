const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? '/website_land' : '',
  'process.env.ANALYTICS_ID': prod ? 'G-C9HZ46R2M7' : 'G-C9HZ46R2M7'
}