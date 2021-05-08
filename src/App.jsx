import React from "react";
//React17Update JSXのみ使用の場合　import必須では無い
import ColorfullMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
