import s from './ProfileInfo.module.scss'

function ProfileInfo() {
  return (
    <>
      <div className={s.backImage}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
          alt="background"
        />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </>
  )
}

export default ProfileInfo
