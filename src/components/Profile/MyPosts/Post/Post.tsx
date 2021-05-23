import s from './Post.module.scss'

type PostType = {
  message: string
  likesCount: number
}

function Post(props: PostType) {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like </span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
