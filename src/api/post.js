import instance from "../helpers/instance"

export const getAll = async (page, sortby) => {
  const { data } = await instance.get('posts/' + page + '?sort=' + sortby)

  return data
}

export const publish = async (author, text) => {

  if (author.length < 1) return ({
    fail: true,
    message: 'Имя автора не задано'
  })

  if (text.length < 1) return ({
    fail: true,
    message: 'Текст не задан'
  })

  await instance.post('post', {
    author,
    text
  })

  return { fail: false }

}

export const comment = async (author, text, id) => {

  if (author.length < 1) return ({
    fail: true,
    message: 'Имя автора не задано'
  })

  if (text.length < 1) return ({
    fail: true,
    message: 'Текст не задан'
  })

  const { data } = await instance.post('post/comment/' + id, {
    author,
    text
  })

  return data

}

export const like = async (id) => {
  const { data } = await instance.post('post/like/' + id)
  return data.likes
}

export const getComments = async (id) => {
  const { data } = await instance.get('post/comments/' + id)
  return data
}

