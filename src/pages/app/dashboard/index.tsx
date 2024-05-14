import { useState } from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "../../../components/charts/pie-chart";
import { WaterTankProps } from "@/types";
import { fetchData } from "@/api";
import { useNavigate } from "react-router-dom";

export function DashBoard() {
  let waterTank: WaterTankProps[] = fetchData();

  return (
    <div className="grid h-full w-full  md:grid-cols-2 md:grid-rows-4 md:gap-x-10 md:gap-y-0 lg:grid-cols-4 lg:grid-rows-2">
      {waterTank.map((item, _) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isClicked, setIsClicked] = useState(false);
        const navigate = useNavigate();

        const toggleHover = () => setIsHovered(!isHovered);

        function toggleClick() {
          setIsClicked(!isClicked);
          navigate("/dashboard/" + item.id);
        }

        return (
          <div
            key={item.id}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={toggleClick}
            className={` m-6 flex w-full flex-col rounded-xl border-0 shadow-lg shadow-ring transition-shadow duration-300
            ${isHovered ? "shadow-md" : "shadow-lg"}
                        ${isClicked ? "scale-105" : "scale-100"}`}
          >
            <CardHeader className="mt-0 flex flex-row justify-around space-y-0 rounded-t-xl bg-gray-dark p-4 align-top shadow-sm">
              <h3 className="text-blue-50 text-white text-center text-lg capitalize">
                {item.name}
              </h3>
              <h3 className="text-red-300 text-white text-center text-lg capitalize">
                {item.data_counter[0]}
              </h3>
            </CardHeader>
            <CardContent className="flex h-full w-full">
              <PercentageChart
                data={[{ name: "Active", value: item.data_counter[0] }]}
                labelData={{
                  viewBox: { cx: "50%", cy: "50%" },
                  value: item.data_counter[0],
                }}
              />
            </CardContent>
          </div>
        );
      })}
    </div>
  );
}
