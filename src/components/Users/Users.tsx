import s from './Users.module.scss'
import { UserType } from '../../redux/users-reducer'
import User from './User/User'

type PropsType = {
  users: UserType[]
  toggleFollow: (userId: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

function Users(props: PropsType) {
  const { users, toggleFollow, totalUsersCount, pageSize, onPageChanged, currentPage } = props

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const pagesElements = pages.map(p => (
    <span key={p}
          onClick={() => {
            onPageChanged(p)
          }}
          className={`${s.page} ${(p === currentPage) && s.selectedPage}`}>{p}
      </span>
  ))
  const usersElements = users.map(u => <User key={u.id} user={u} toggleFollow={toggleFollow} />)
  return (
    <>
      <div> {pagesElements} </div>
      <div className={s.users}> {usersElements} </div>
    </>
  )
}

export default Users