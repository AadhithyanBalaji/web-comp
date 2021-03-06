import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.get().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
