export default function Greeting({ isMorning }) {
  return <h1>{isMorning ? "Good morning" : "Good evening"}</h1>;
}
