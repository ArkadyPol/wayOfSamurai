import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return <div>
    <div>
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
          alt="background"/>
    </div>
    <div>
      avatar + description
    </div>
    <MyPosts/>
  </div>;
}

export default Profile;