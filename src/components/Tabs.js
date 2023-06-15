import React,{useState} from "react";
import ReactDOM from "react-dom";

function Tabs ({tabs}) {
    let [selectTab, setSelectTab] = useState("Tab 1");
return(
    <div>
        <ul>
            {
                tabs.map(tab => (
                    <li onClick={()=> setSelectTab(()=> setSelectTab(tab.contents))}>{tab.titles}</li>
                ))
            }
        </ul>
        <p>This is the content for {selectTab}</p>
    </div>
);
}

export default Tabs;