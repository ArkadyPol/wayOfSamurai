import { Component } from 'react'

type PropsType = {
  status: string
}

type StateType = {
  editMode: boolean
}

class ProfileStatus extends Component<PropsType, StateType> {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }

  render() {
    const { status } = this.props
    const { editMode } = this.state
    return (
      <div>
        {!editMode ?
          <div>
            <span onDoubleClick={this.activateEditMode}>{status}</span>
          </div> :
          <div>
            <input autoFocus onBlur={this.deactivateEditMode} value={status} />
          </div>
        }


      </div>
    )
  }
}

export default ProfileStatus