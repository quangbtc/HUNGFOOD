import React ,{useState,useRef} from 'react';
import JoditEditor from 'jodit-react';

const MyEditor = ({getContent}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const handleSetContent=(newContent)=>{
      setContent(newContent)
      getContent(content)
    }
    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) =>handleSetContent(newContent)}
            />
        </div>
    );
};

export default MyEditor;
