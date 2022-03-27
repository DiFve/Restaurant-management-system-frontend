interface Example {
  text: string;
}

const Test: React.FC<Example> = (props) => {
  return (
    <div>
      <h1 className="text-red-500 font-light text-xl">
        อ่านหาพ่อมึงหรอ dfdsfdsfds{props.text}
      </h1>
    </div>
  );
};
export default Test;
