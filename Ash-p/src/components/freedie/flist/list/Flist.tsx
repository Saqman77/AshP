
type Props = {
  name: string,
  profile: string,
  role: string
}

const Flist = ({name, profile, role}: Props) => {
  return (
    <div className='l-container'>
        <div className="profile">
          <div className="prof-container">
            <img src={profile} alt="prfoile image" />
          </div>
        </div>
        <div className="l-text">
            <div className="l-name">
              <p className='list-name'>{name}</p>
            </div>
            <div className="l-role">
              <p className='role'>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default Flist