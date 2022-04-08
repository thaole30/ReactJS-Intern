import React, {memo} from 'react'

const ChildContent = ({count1, count2=0}) => {
    console.log("child render")
  return (
    <div>
        
        <h2>coun1: {count1} in ChildContent</h2>
        <h2>coun2: {count2} in ChildContent</h2>
    </div>

  )
}

export default memo(ChildContent);