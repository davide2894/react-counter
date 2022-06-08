import './Count.scss';

export default function Count(props) {
  
  console.log(props.count);

  console.log("Count rendered");
  
  return (
    <div className="count">
        <h1>{props.count}</h1>
    </div>
  )
}