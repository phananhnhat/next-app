import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { post_id } = router.query

  return <h1>Post Slug: {post_id}</h1>
}
