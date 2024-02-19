import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
    //Added searchTerm Property
    searchTerm: string = "";

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
