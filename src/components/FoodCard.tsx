interface Food {
  detail: [];
  foodID: string;
  foodName: string;
  foodStatus: string;
  price: number;
  quantity: number;
  time: string;
  _id: string;
}

const FoodCard: React.FC<Food> = (props) => {
  const { detail, foodID, foodName, foodStatus, price, quantity, time, _id } =
    props;
  return (
    <div>
      <div className=" relative">
        <div className="bg-slate-500 hover:bg-slate-400 p-10 text-white text-center text-2xl rounded-3xl w-full h-auto ">
          <div className="absolute top-0 left-3">{foodName}</div>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;
