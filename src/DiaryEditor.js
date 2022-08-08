import {useState} from "react";

const DiaryEditor = () => {
    
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('2022년 8월 7일');
    
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    name="author"
                    value={author} 
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}
                />
            </div>
            <div>
                <textarea 
                    value={content}

                />
            </div>
        </div>
    );
}

export default DiaryEditor;