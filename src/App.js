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

  const onRemove = (targetId)=>{
    const newDiaryList = data.filter((it)=>it.id !== targetId)
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=>it.id === targetId ? {...it, content:newContent}: it)
    )
  }
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} DiaryList={data} />
    </div>
  );
}

export default App;
