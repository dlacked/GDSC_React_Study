import { useContext } from 'react'
import DiaryItem from './DiaryItem'
import { DiaryStateContext } from './App'
const DiaryList = () => {

    const DiaryList = useContext(DiaryStateContext)
    return (
        <div className = "DiaryList">
            <h2>일기 리스트</h2>
            <h4>{DiaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {DiaryList.map((it)=>(
                    <DiaryItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps={
    DiaryList:[],
}

export default DiaryList