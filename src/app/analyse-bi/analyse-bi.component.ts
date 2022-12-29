import { Component, OnInit } from '@angular/core';
import { SparkApiService } from '../services/spark-api.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-analyse-bi',
  templateUrl: './analyse-bi.component.html',
  styleUrls: ['./analyse-bi.component.css']
})
export class AnalyseBIComponent implements OnInit {
  journal_by_month: any

  constructor(private sprkservice: SparkApiService) { }

  ngOnInit(): void {
    this.display_journal_by_month()
    this.display_journal_by_year()
    this.display_journal_by_county()
    this.display_journal_by_quartile()
    this.display_Q1_By_Country()
    this.display_Q2_By_Country()
  }

  display_journal_by_month() {

    //get data
    const months: any[] = []
    const number_of_articles: any[] = []
    this.sprkservice.get_Journal_By_Month().subscribe((data: any) => {
      this.journal_by_month = data
      const date = new Date();

      for (var i = 0; i < Object.keys(data).length; i++) {
        date.setMonth(data[i]["Month"] - 1);
        months.push(date.toLocaleString('en-US', { month: 'long' }));
        number_of_articles.push(data[i]["number_of_articles"])
      }
      //draw chart
      new Chart(
        "Journal_By_month",
        {
          type: 'doughnut',
          data: {
            labels: months,
            datasets: [{
              label: 'Journal By Month',
              data: number_of_articles,
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 0, 255)',
                'rgb(138, 43, 226)',
                'rgb(165, 42, 42)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 255)'
              ],
              hoverOffset: 4
            }]
          }
        }
      );
    });
  }


  display_journal_by_year() {
    const years: any[] = []
    const number_of_articles: any[] = []
    this.sprkservice.get_Journal_By_Year().subscribe((data: any) => {

      for (var i = 0; i < Object.keys(data).length; i++) {
        years.push(data[i]['Year']);
        number_of_articles.push(data[i]["number_of_articles"])
      }


      //draw chart



      new Chart(
        "Journal_By_Year",
        {
          type: 'line',
          data: {
            labels: years,
            datasets: [{
              label: 'number of articles by year',
              data: number_of_articles,
              backgroundColor: [
                'rgb(255, 0, 0)',
              ],
            }]
          }
        }
      );
    })
  }






  display_journal_by_county() {
    const countries: any[] = []
    const count: any[] = []

    this.sprkservice.get_journal_by_country().subscribe((data: any) => {
      for (var i = 0; i < Object.keys(data).length; i++) {
        countries.push(data[i]['Countries']);
        count.push(data[i]["count"])
      }
      new Chart(
        "Journal_By_Country",
        {
          type: 'bar',
          data: {
            labels: countries,
            datasets: [{
              label: 'Journal_By_Country',
              data: count,
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 0, 255)',
                'rgb(138, 43, 226)',
                'rgb(165, 42, 42)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 255)'
              ],
            }]
          }
        }
      );
    })

  }





  display_journal_by_quartile() {
    const SJR_Best_Quartile: any[] = []
    const count: any[] = []
    this.sprkservice.get_journal_by_Quartile().subscribe((data: any) => {
      for (var i = 0; i < Object.keys(data).length; i++) {
        SJR_Best_Quartile.push(data[i]['SJR Best Quartile']);
        count.push(data[i]['count'])
      }

      new Chart(
        "Journals_By_Quartile",
        {
          type: 'bar',
          data: {
            labels: SJR_Best_Quartile,
            datasets: [{
              label: 'journal by quartile',
              data: count,
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 0, 255)',
                'rgb(138, 43, 226)',
                'rgb(165, 42, 42)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 255)'
              ],
            }]
          }
        }
      );



    })
  }
  display_Q1_By_Country() {
    const countries: any[] = []
    const count: any[] = []
    this.sprkservice.get_q1_by_country().subscribe((data: any) => {
      for (var i = 0; i < Object.keys(data).length; i++) {
        countries.push(data[i]['Countries'])
        count.push(data[i]['count'])
      }
      new Chart(
        "Q1_By_Country",
        {
          type: 'bar',
          data: {
            labels: countries,
            datasets: [{
              label: 'Q1 by country',
              data: count,
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 0, 255)',
                'rgb(138, 43, 226)',
                'rgb(165, 42, 42)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 255)'
              ],
            }]
          }
        }
      );

    })
  }

  display_Q2_By_Country() {
    const countries: any[] = []
    const count: any[] = []
    this.sprkservice.get_q2_by_country().subscribe((data: any) => {
      for (var i = 0; i < Object.keys(data).length; i++) {
        countries.push(data[i]['Countries'])
        count.push(data[i]['count'])
      }
      new Chart(
        "Q2_By_Country",
        {
          type: 'bar',
          data: {
            labels: countries,
            datasets: [{
              label: 'Q2 by country',
              data: count,
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 0, 255)',
                'rgb(138, 43, 226)',
                'rgb(165, 42, 42)',
                'rgb(128, 128, 128)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 255)'
              ],
            }]
          }
        }
      );

    })
  }


}