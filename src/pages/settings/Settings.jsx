import'./settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper"> 
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle">Delete Account</span>
      </div>
      <form action="" className="settingsFrom">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
           alt="" />
          <label htmlFor="fileInput">
          <i className="settingsPPIcon fa-solid fa-user"></i>
          </label>
          <input type="file" id="fileInput" style={{display: "none"}}/>
        </div>
          <label> User Name</label>
          <input type="text" placeholder='MKM' />
          <label> Email</label>
          <input type="email" placeholder='MKM@gmail.com' />
          <label>Password</label>
          <input type="password" placeholder='Password'/>
          <button className="settingsSubmit">Update</button>
      </form>
      </div>
      <Sidebar/>
    </div>
  )
}
