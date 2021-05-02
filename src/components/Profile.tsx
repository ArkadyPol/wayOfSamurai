import s from './Profile.module.scss';

function Profile() {
  return <div className={s.content}>
    <div>
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
          alt="background"/>
    </div>
    <div>
      avatar + description
    </div>
    <div>
      My Posts
      <div>
        New Post
      </div>
      <div className="posts">
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
        <div className={s.item}>post 3</div>
      </div>
    </div>
  </div>;
}

export default Profile;