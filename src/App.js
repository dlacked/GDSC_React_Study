import { useState, useRef } from 'react';
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'


function App() {
  const [data, setData] = useState([])

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1
    setData([newItem, ...data])
  }

  const onDelete = (targetId)=>{
    const newDiaryList = data.filter((it)=>it.id !== targetId)
    setData(newDiaryList)
  }

  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} DiaryList={data} />
    </div>
  );
}

export default App;
