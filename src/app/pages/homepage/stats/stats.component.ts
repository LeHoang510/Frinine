import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  barchart: any;
  constructor(
		private elementRef: ElementRef
  ) {}

  ngOnInit() {
	this.statInit();
  }

  statInit(){
	const htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);
	this.barchart  = new Chart(htmlRef, {
		type: 'bar',
		data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
		},
		options: {
		scales: {
			y: {
			beginAtZero: true
			}
		}
		}
	});
  }
}
