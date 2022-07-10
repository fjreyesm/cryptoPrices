import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const xs = [6, 5, 5, 5, 3, 4, 6, 4, 5];

const labelsXs = [100, 200, 300, 400, 500, 600, 700];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart() {
  // evaluar eliminar use memo, datos de la api varian 7 dias
  // const data = useMemo(function () {
  //   return {
  //     datasets: [
  //       {
  //         label: "Mis datos",
  //         plugins: {
  //           legend: {
  //             display: false,
  //           },
  //         },
  //         data: xs,
  //         tension: 0.3,
  //         borderColor: "rgb(191, 20, 74)",
  //         pointRadius: 2,
  //         pointBackgroundColor: "rgb(75, 192, 192)",
  //       },
  //     ],
  //     labelsXs,
  //   };
  // }, []);

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          plugins: {
            legend: {
              display: false,
            },
          },
          data: xs,
          tension: 0.3,
          borderColor: "rgb(191, 20, 74)",
          pointRadius: 2,
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
      ],
      labelsXs,
    };
  }, []);

  console.log("prueba grafica", { Line });

  return <Line data={data} options={options} />;
}
