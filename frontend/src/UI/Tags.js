import "./Tags.css";
import { useEffect, useState } from "react";

const Tags = (props) => {
    const [tags, setTags] = useState([]);
    const [inputBox, setInputBox] = useState([]);

    useEffect(() => {
        setTags(props.tags);
    }, [])

    const inputBoxHandler = (e) => {
        setInputBox(e.target.value);
    }

    const tagHandler = () => {
        if (tags.length === 0) {
            setTags([inputBox]);
            setInputBox("");
        } else {
            setTags([...tags, inputBox]);
            setInputBox("");
        }
    }

    const deleteTagHandler = (item) => {
        setTags(tags.filter((prev) => prev !== item));
    }

    return (
        <div className="tags">
            {props.isModify === true ?
                <div>
                    {tags.length === 3 ?
                        <div className="tags-container">
                            <input type="text" placeholder="태그는 최대 3개까지 입력 가능합니다." disabled value={inputBox} className="tags-input" />
                            <input
                                type="button"
                                className="tags-button"
                                value="등록"
                                disabled
                            />
                        </div>
                        :
                        <div className="tags-container">
                            <input type="text" placeholder="태그 입력하기" value={inputBox} onChange={inputBoxHandler} className="tags-input" />
                            <input
                                type="button"
                                className="tags-button"
                                value="등록"
                                onClick={tagHandler}
                            />
                        </div>}
                </div>
                :
                ""}
            <div className={props.isModify === true ? "tag-tagbox" : "tags-container"}>
                {tags.map((item, index) => (
                    <div className="tags-tag">
                        #{item} &nbsp;
                        {props.isModify === true ?
                            <div className="spacewrite-delete" onClick={() => deleteTagHandler(item)}>
                                X
                            </div>
                            :
                            ""}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tags;

// props : tags([]string), isModify(bool)
// example : <Tags tags={["tag1", "tag2"]}/>