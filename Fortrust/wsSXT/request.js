const http = require('http')
const https = require('https')

/**
 * 发送GET请求
 * @param {string} url - 请求的URL
 * @returns {Promise<Object>} - 包含响应数据的Promise
 */
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const req = protocol.get(url, (res) => {
      let data = ''

      // 监听数据接收事件
      res.on('data', (chunk) => {
        data += chunk
      })

      // 监听响应结束事件
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        })
      })
    })

    // 监听错误事件
    req.on('error', (error) => {
      reject(error)
    })

    // 结束请求
    req.end()
  })
}

/**
 * 发送POST请求
 * @param {string} url - 请求的URL
 * @param {Object} data - 请求的数据
 * @param {Object} headers - 请求头
 * @returns {Promise<Object>} - 包含响应数据的Promise
 */
function postRequest(url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const parsedUrl = new URL(url)
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }

    const req = protocol.request(options, (res) => {
      let responseData = ''

      res.on('data', (chunk) => {
        responseData += chunk
      })

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: responseData
        })
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    // 写入请求数据
    req.write(JSON.stringify(data))
    req.end()
  })
}

/**
 * 发送PUT请求
 * @param {string} url - 请求的URL
 * @param {Object} data - 请求的数据
 * @returns {Promise<Object>} - 包含响应数据的Promise
 */
function putRequest(url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const parsedUrl = new URL(url)
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }

    const req = protocol.request(options, (res) => {
      let responseData = ''

      res.on('data', (chunk) => {
        responseData += chunk
      })

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: responseData
        })
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.write(JSON.stringify(data))
    req.end()
  })
}

/**
 * 发送DELETE请求
 * @param {string} url - 请求的URL
 * @returns {Promise<Object>} - 包含响应数据的Promise
 */
function deleteRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const parsedUrl = new URL(url)
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'DELETE'
    }

    const req = protocol.request(options, (res) => {
      let responseData = ''

      res.on('data', (chunk) => {
        responseData += chunk
      })

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: responseData
        })
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}

// 使用示例
async function example() {
  try {
    // 发送GET请求
    const getResponse = await getRequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    console.log('GET Response:', getResponse.statusCode, getResponse.data)

    // 发送POST请求
    const postResponse = await postRequest(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    )
    console.log('POST Response:', postResponse.statusCode, postResponse.data)

    // 发送PUT请求
    const putResponse = await putRequest(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        title: 'updated title',
        body: 'updated body',
        userId: 1
      }
    )
    console.log('PUT Response:', putResponse.statusCode, putResponse.data)

    // 发送DELETE请求
    const deleteResponse = await deleteRequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    console.log(
      'DELETE Response:',
      deleteResponse.statusCode,
      deleteResponse.data
    )
  } catch (error) {
    console.error('Request error:', error)
  }
}

// 执行示例
// example()
module.exports = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
}
