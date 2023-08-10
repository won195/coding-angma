import { useState } from "react-router-dom";

export default function Word({ word }){
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow(){
    setIsShow(!isShow);
  }

  function toggleDone(){
    setIsDone(!isShow);
  }

  return (          
    <tr className={word.isDone ? 'off' : ''}>
      <td>
        <input type='checkbox' checked={word.isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 보기{isShow ? '숨기기' : '보기'}</button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  )
}