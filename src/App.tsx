import { parser } from "react-split-mde/lib/parser";
import { Editor } from "./containers/Editor";
import "react-split-mde/css/index.css";
import { useApp } from "./hooks/app";

export const App = () => {
  const {
    values,
    addValue,
    removeValue,
    changeText,
    changeContentToDB,
    deleteContentFromDB,
  } = useApp();
  console.log(values);
  return (
    <div className="editor-demo">
      <Editor
        values={values}
        addValue={addValue}
        removeValue={removeValue}
        onChange={changeText}
        parser={parser}
        changeContentToDB={changeContentToDB}
        deleteContentFromDB={deleteContentFromDB}
      />
    </div>
  );
};
