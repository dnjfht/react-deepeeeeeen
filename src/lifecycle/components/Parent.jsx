import { Component } from "react";
import Child from "./Child";

class App extends Component {
  // 상태 초기화 : 클래스 필드 문법
  //constructor 내부에서 this.state를 정의하고 super(props)를 호출하는 과정을 생략하고, 클래스 본문에서 바로 상태를 선언
  state = {
    userName: "첫 번째 사용자",
    showChild: true,
  };

  handleNameChange = () => {
    this.setState({ userName: "두 번째 사용자" });
  };

  handleDisappear = () => {
    this.setState({ userName: "사라지는 아이" });
  };

  handleToggleChild = () => {
    this.setState((prev) => ({ showChild: !prev.showChild }));
  };

  render() {
    console.log("👨‍👩‍👧 App: render - 부모 컴포넌트가 렌더링됩니다.");
    return (
      <div style={{ padding: "20px", border: "2px solid blue" }}>
        <h1>👨‍👩‍👧 Parent Component</h1>

        <button onClick={this.handleNameChange}>자식 이름 바꾸기</button>
        <button onClick={this.handleDisappear}>
          자식 이름 '사라지는 아이'로 바꾸기
        </button>
        <button onClick={this.handleToggleChild}>
          자식 컴포넌트 보이기/숨기기
        </button>

        <hr />

        {this.state.showChild && <Child name={this.state.userName} />}
      </div>
    );
  }
}

export default App;
