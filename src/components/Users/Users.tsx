import s from './Users.module.scss'
import { UserType } from '../../redux/users-reducer'
import User from './User/User'
import getPages from '../../utils/getPages'

type PropsType = {
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  currentPage: number
  followingInProgress: number[]
  toggleFollow: (userId: number, followed: boolean) => void
  onPageChanged: (pageNumber: number) => void
}

function Users(props: PropsType) {
  const {
    users,
    toggleFollow,
    totalUsersCount,
    pageSize,
    onPageChanged,
    currentPage,
    followingInProgress
  } = props

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = getPages(currentPage, pagesCount)

  const pagesElements = pages.map((p, i) => (
    <span key={i}
          onClick={() => {
            onPageChanged(p)
          }}
          className={`${s.page} ${(p === currentPage) && s.selectedPage}`}>{p}
      </span>
  ))
  const usersElements = users.map(u =>
    <User key={u.id} user={u} toggleFollow={toggleFollow} followingInProgress={followingInProgress} />)
  return (
    <>
      <div> {pagesElements} </div>
      <div className={s.users}> {usersElements} </div>
    </>
  )
}

export default Users