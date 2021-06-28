import { UsersPropsType } from './UsersContainer'
import User from './User/User'
import { v1 } from 'uuid'
import { useEffect } from 'react'

function Users(props: UsersPropsType) {
  const { setUsers } = props

  useEffect(() => {
    setUsers([
      {
        id: v1(),
        followed: false,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
        fullName: 'Dmitry',
        status: 'Who am I?',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: v1(),
        followed: true,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
        fullName: 'Alexandr',
        status: 'Where am I?',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: v1(),
        followed: false,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
        fullName: 'Andrew',
        status: 'Why am I?',
        location: { city: 'Kiev', country: 'Ukraine' }
      }
    ])
  }, [setUsers])

  const users = props.users.map(u => <User key={u.id} user={u} toggleFollow={props.toggleFollow} />)

  return <div>{users}</div>
}

export default Users