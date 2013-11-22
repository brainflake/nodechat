/*
 * Nested Keys will get concated with an underscore, so the examples below will be accessible by:
 *
 * app.get('mongodb_uri') and app.get('redis')
 */
module.exports = {
  mongodb: {
    uri: 'mongodb://nodechatuser:test123@dharma.mongohq.com:10029/NodeChat'
  },
  redis: 'localhost'
}
