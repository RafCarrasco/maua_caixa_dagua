import { useState } from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { PercentageChart } from "./pie-chart";

export function DashBoard() {
  const waterBoxAmount = [
    { id: 0, title: "Água 01", amount: 40 },
    { id: 1, title: "Água 02", amount: 10 },
    { id: 2, title: "Água 03", amount: 10 },
    { id: 3, title: "Água 04", amount: 10 },
    { id: 4, title: "Água 05", amount: 10 },
    { id: 5, title: "Água 06", amount: 10 },
    { id: 6, title: "Água 07", amount: 10 },
    { id: 7, title: "Água 08", amount: 10 },
  ];

  return (
    <div className="grid h-full w-full  md:gap-x-10 md:gap-y-0 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
      {waterBoxAmount.map((item, _) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isClicked, setIsClicked] = useState(false);

        const toggleHover = () => setIsHovered(!isHovered);
        const toggleClick = () => setIsClicked(!isClicked);
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
            <CardHeader className="rounded-t-xl  mt-0 flex flex-row justify-around space-y-0 p-4 align-top shadow-sm bg-gray-dark">
              <h3 className="text-blue-50 text-center text-lg text-gray-light">{item.title}</h3>
              <h3 className="text-red-300 text-center text-lg text-gray-light">{item.title}</h3>
            </CardHeader>
            <CardContent className="flex w-full justify-center">
              <PercentageChart
                labelData={{
                  viewBox: { cx: -10, cy: -10 },
                  value: item.amount,
                }}
                data={[{ name: "Active", value: item.amount }]}
              />
            </CardContent>
          </div>
        );
      })}
    </div>
  );
}
