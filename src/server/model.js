const { init, submitReport } = require('./model/queries.js')
const { connect } = require('./model/helpers.js')
const { sendEmail, createSes } = require('./model/email.js')
const { saveImage, parsePhotoData, createS3, getUrl } =
  require('./model/image.js')

const bindFirst = (f, arg) => (...args) => f(arg, ...args)

const register = (server, { query, s3, ses }, next) => {
  server.expose('init', bindFirst(init, query))
  server.expose('submitReport', bindFirst(submitReport, query))
  server.expose('saveImage', bindFirst(saveImage, s3))
  server.expose('parsePhotoData', parsePhotoData)
  server.expose('sendEmail', bindFirst(sendEmail, ses))
  server.expose('getUrl', getUrl)

  next()
}

register.attributes = {
  name: 'model'
}

module.exports = {
  model: register,
  dbConnect: connect,
  createS3,
  bindFirst,
  createSes
}
