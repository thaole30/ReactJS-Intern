import React, {useCallback, useState} from 'react'

const Wrap = () => {
  console.log("wrapped render");
    const [isChecked, setIsChecked] = React.useState(false);
    const toggleChecked = useCallback(() =>{
        console.log("go to onclick");
        setIsChecked(!isChecked);

    } , [
      isChecked
    ]);
  
    return <Checkbox value={isChecked} onClick={toggleChecked} />;
  };
  
  const Checkbox = React.memo(({ value, onClick }) => {
    console.log('Checkbox is renderd!');
    return (
      <div style={{ cursor: 'pointer', backgroundColor: 'pink' }} onClick={onClick}>
        {value ? '☑' : '□'}
      </div>
    );
 
  });

const UseCallback = () => {
  const [text, setText] = useState('');

  return (
    <>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <Wrap />
    </>
  )
}

export default UseCallback