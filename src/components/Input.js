import "./Input.css";
const Input = ({text,result}) =>{
return <div className="input-wrapper">
    <div><h1>{result}</h1></div>
    <div><h3>{text}</h3></div>
    </div>
};
export default Input;