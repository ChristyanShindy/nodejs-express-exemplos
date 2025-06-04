import { Router } from "express"
import { verifyAccessToken } from "../../utils/auth"
import { createPost, getPosts } from "./postService"

const router = Router()
/*
  POSTS:
    CRIAR POSTS
    LISTAR POSTS
*/

router.post('/', verifyAccessToken, (req, res) => {
  try {
    const post = createPost(req.body, req.user)
    res.status(200).send(post)
  } catch (error) {
      res.status(500).send(error.message)
  }
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  //DUAS OPÇÕES: LISTAR TODOS OU APENAS UM
  try {
    const posts = getPosts(req.params.id)
    res.status(200).send(posts)
  } catch (error) {
    if (error.message === 'post_nao_existe')
    return res.status(400).send(error.message)

    res.status(500).send(error.message)
  }

})

export default router