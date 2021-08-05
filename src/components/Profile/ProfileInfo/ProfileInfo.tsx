import s from './ProfileInfo.module.scss'
import { ProfileType } from '../../../redux/profile-reducer'
import userPhoto from '../../../assets/images/user.jpg'
import Preloader from '../../common/Preloader/Preloader'
import { Fragment } from 'react'

type PropsType = {
  profile: ProfileType | null
}

function ProfileInfo(props: PropsType) {
  const { profile } = props
  if (!profile) {
    return <Preloader />
  }
  return (
    <>
      <div className={s.backImage}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU'
          alt='background'
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt='large avatar' />
        <div>{profile.fullName}</div>
        <div> {profile.aboutMe}</div>
        <div> {profile.lookingForAJob}</div>
        <div> {profile.lookingForAJobDescription}</div>
        <div className={s.contacts}>
          {Object.entries(profile.contacts).map(([key, value]) =>
            <Fragment key={key}>
              <a target='_blank' rel='noreferrer'  href={value || '/404'}>{key}</a>
              {" "}
            </Fragment>)}
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
