import { Button } from "@/components/ui/button";
import api from "@/services/api";

const Dashboard = () => {
  const redeemBadge = async () => {
    try {
      await api.post(`/badges/redeem/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-5 flex justify-center items-centers flex-col">
      <h1 className="text-white text-3xl font-bold mb-3 text-center">
        Resgate seu emblema
      </h1>
      <Button onClick={redeemBadge} variant={"outline"}>
        Resgatar
      </Button>
    </div>
  );
};

export default Dashboard;
