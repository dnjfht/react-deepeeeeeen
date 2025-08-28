// 항목 중요도를 && 연산자로 표시하기.
// 이 예시에서 각 항목은 숫자형 중요도 속성을 받는다.
// && 연산자를 사용해 (중요도: X)를 기울임꼴로 렌더링하되, 중요도가 0이 아닌 항목에만 적용한다.
// 최종 항목 목록은 다음과 같아야 한다.

export default function Item({ isPacked, importance, name }) {
  // if (isPacked) {
  //   return <li className="item">{name} ✅</li>;
  // }
  // return <li className="item">{name}</li>;

  return (
    // <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
    //   <li className="item">
    //   {name} {isPacked && ‘✅’}
    // </li>
    // <li className="item">
    //   {name} {isPacked ? " ✅" : " ❌"}
    // </li>
    <li>
      {name} {importance > 0 && <i>중요도 {importance}</i>}
    </li>
  );
}
