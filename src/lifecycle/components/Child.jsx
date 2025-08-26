import { Component } from "react";

class Child extends Component {
  // 상태 초기화 : 전통적인 constructor
  // super(props)를 호출해 this 초기화 후 this.state 정의
  constructor(props) {
    super(props);
    console.log("👶 Child: constructor - 컴포넌트가 생성됩니다.");
    this.state = {
      internalData: "초기 내부 데이터",
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "👶 Child: getDerivedStateFromProps - props 변경 시 state를 동기화합니다."
    );
    // props의 name이 '사라지는 아이'가 되면, 내부 데이터를 업데이트
    if (nextProps.name === "사라지는 아이") {
      return { internalData: "props에 따라 내부 데이터 변경" };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "👶 Child: shouldComponentUpdate - 리렌더링할까요?",
      "nextProps",
      nextProps,
      "nextState",
      nextState,
      "props",
      this.props,
      "state",
      this.state
    );
    // name props가 변경되었을 때만 업데이트
    // 만약 항상 false를 반환하면 컴포넌트는 절대 업데이트되지 않는다.
    return nextProps.name !== this.props.name;
  }

  render() {
    console.log("👶 Child: render - UI를 그립니다.");
    return (
      <div
        style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}
      >
        <h3>👶 Child Component</h3>
        <p>부모로부터 받은 이름: {this.props.name}</p>
        <p>내부 데이터: {this.state.internalData}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log(
      "👶 Child: componentDidMount - 컴포넌트가 화면에 나타났습니다."
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "👶 Child: componentDidUpdate - 컴포넌트가 업데이트되었습니다."
    );
    console.log("이전 props:", prevProps);
    console.log("이전 state:", prevState);
    // props나 state 변경에 따른 추가 작업 (ex: 데이터 다시 불러오기)
  }

  componentWillUnmount() {
    console.log("👋 Child: componentWillUnmount - 컴포넌트가 사라집니다.");
    // 타이머 제거, 이벤트 리스너 해제 등 정리 작업
  }
}

export default Child;
