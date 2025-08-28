// ? : 연쇄 조건을 if 문과 변수로 리팩토링

export default function Drink({ name }) {
  let type, caffein, age;

  if (name === "tea") {
    type = "leaf";
    caffein = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    type = "bean";
    caffein = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>

      <dl>
        <dt>Part of plant</dt>
        <dd>{type}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffein}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}
