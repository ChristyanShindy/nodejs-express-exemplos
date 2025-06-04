let posts = []

export const createPost = (data, user) => {
  console.log({
    data,
    user
  })

  const post = {
    createdBy: user.email,
    ...data
  }
  posts.push(post)
  return post
}

export const getPosts = (id) => {
  if (id) {
    const post = posts[id]
    if (!post) throw new Error('post_nao_existe')
    //procurar pelo post
    return post
  } 
  return posts
}