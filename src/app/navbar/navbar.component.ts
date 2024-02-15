import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
    //Added searchTerm Property
    searchTerm: String = "";

    constructor(private route:ActivatedRoute, private router: Router){}

    ngOnInit(): void {
      this.route.params.subscribe(params =>{
        if(params['searchTerm'])
          this.searchTerm = params['searchTerm'];
      })
    }

    //Search function
    search():void{
      if(this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
}
