module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/face-manage': {
        target: 'http://172.28.60.122:8083',
        changeOrigin: true
      }
    }
  }
}