import s from './Post.module.scss';

function Post() {
  return <div className={s.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU"
         alt="avatar"/>
    post 1
    <div><span>like</span></div>
  </div>;
}

export default Post;