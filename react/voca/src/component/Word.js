import { useState } from "react-router-dom";

export default function Word(props){
  const [word, setWord] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow(){
    setIsShow(!isShow);
  }

  function toggleDone(){
    // setIsDone(!isShow);
    fetch(`http://localhost:3001/words/${word.id}`,{
      method : 'PUT',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        ...word,
        isDone : !isDone
      }),
    }).then(res => {
      if(res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if(window.confirm('삭제 하시겠습니까?')){
      fetch(`http://localhost:3001/words/${word.id}`,{
        method : 'DELETE',
      });
    }
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
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  )
}