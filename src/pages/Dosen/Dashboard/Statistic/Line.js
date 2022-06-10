import React from 'react';
import ReactApexChart from 'react-apexcharts';

class StatisticLine extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: 'Desktops',
					data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 167, 180, 178],
				},
			],
			options: {
				chart: {
					height: 350,
					type: 'line',
					zoom: {
						enabled: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: 'straight',
				},
				title: {
					text: 'Data Pengmas per Tahun',
					align: 'left',
				},
				grid: {
					row: {
						colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5,
					},
				},
				xaxis: {
					categories: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
				},
			},
		};
	}

	render() {
		return (
			<div id='chart'>
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type='line'
					height={350}
				/>
			</div>
		);
	}
}

export default StatisticLine;