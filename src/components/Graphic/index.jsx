import React from "react";
import {Chart as ChartJS} from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

export function Graphic(){ 
    return(
        <Bar
            data = {{
              labels: ['Vitor', 'Marcelo', 'Mano Rosca', 'Sanchez Lindão', 'Gilberto Black da Equip', 'Matheus Touca'],
              datasets: [
                {
                  data: [100, 200],
                  borderWidth: 1,
                  indexAxis: 'y',
                  borderRadius: 200,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                  hoverBackgroundColor: [
                    'rgba(255, 0, 55, 0.438)',
                    'rgba(255, 128, 0, 0.445)',
                    'rgba(255, 179, 0, 0.5)',
                    'rgba(0, 255, 255, 0.521)',
                    'rgba(0, 153, 255, 0.418)7)',
                    'rgba(85, 0, 255, 0.466)9)',
                    'rgba(0, 85, 255, 0.473)'
                  ]
                }
              ]
            }}
        />
    )
}