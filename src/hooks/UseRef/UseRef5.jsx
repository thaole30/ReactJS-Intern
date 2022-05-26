import { useEffect, useRef } from "react";

function UserAvatar (props) {
    return <img src={props.src} />
  }
  
  function Username (props) {
    return <h3>Name in ChildComponent {props.name}</h3>
  }
  
 export function UseRef5 () {
    const user = useRef({
      name: "Girl",
      avatarURL: "https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg",
    })
  
    console.log("user", user)
    console.log("Original Name", user.current.name);
    console.log("Original Avatar URL", user.current.avatarURL);
    
    useEffect(() => {
      setTimeout(() => {
        user.current = {
          name: "Boy",
          avatarURL: "https://icdn.dantri.com.vn/thumb_w/640/2020/12/25/12-hot-boy-duoc-cu-dan-mang-yeu-men-nam-2020-docx-1608913577981.jpeg", // a new image
        };
      },3000)
    })
    
    // Both children won't be re-rendered due to shallow rendering mechanism
    // implemented for useRef
    return (<div>
     <h2>Name in Parent Component {user.current.name}</h2>

      <Username name={user.current.name} />
        <UserAvatar src={user.current.avatarURL} />
    </div>);
  }