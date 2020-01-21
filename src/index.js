import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(obj) {
  let base = 0;

  for (let numbers of Object.values(obj)) {
    base += numbers;
  }
  return base;
}

console.log(sumSalaries(salaries)); // 650
