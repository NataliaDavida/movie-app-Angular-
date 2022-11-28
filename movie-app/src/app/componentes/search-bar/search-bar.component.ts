import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  public searchTerm: string = '';

  constructor(private router: Router,
    private searchService: SearchService,
    public authService: AuthService,
    ) { }


  ngOnInit() {}

  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.searchService.search.next(this.searchTerm)
  }

  logOut() {
    this.authService.logout().subscribe(()=>{
      localStorage.removeItem('session_id')
      this.router.navigate(['/'])
    })
  }
}




