import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  mobiles=[
    {
      id: 11,
      model: 'iphone XS Max',
      company: 'Apple',
      price : 144000,
      color:'space-grey'
    },
    {
      id: 32,
      model: 'iphone 7 plus',
      company: 'Apple',
      price : 95000,
      color:'rose-red'
    },

    {
      id: 13,
      model: 'iphone 6 plus',
      company: 'Apple',
      price : 95000,
      color:'dark-grey'
    },{
      id: 54,
      model: 'iphone 4',
      company: 'Apple',
      price : 60000,
      color:'space-grey'
    },
    {
      id: 25,
      model: 'iphone 3Gs',
      company: 'Apple',
      price : 45000,
      color:'rose-red'
    },

    {
      id: 63,
      model: 'Z10',
      company: 'BlackBerry',
      price : 45000,
      color:'rose-red'
    },
    
    {
      id: 72,
      model: 'Galaxy S3',
      company: 'Samsung',
      price : 43000,
      color:'rose-red'
    },
    {
      id: 18,
      model: 'Nexus One',
      company: 'HTC',
      price : 30000,
      color:'white'
    },
    {
      id: 99,
      model: 'Nokia 770',
      company: 'Nokia',
      price : 41000,
      color:'Black'
    },
    
    {
      id: 17,
      model: 'Note 9 pro',
      company: 'XioMi',
      price : 15999,
      color:'Sky-blue'
    }
  ]


  
  onDelete(mobile,index){
    const answer = confirm(`Are you sure want to delete ${mobile['model']}`)
    if(answer){
    alert('Deleting...')
    this.mobiles.splice(index,1)
  }
}

  onEdit(mobile){
    alert(`Editing ${mobile['model']}`)

  }


  constructor() { }

  ngOnInit(): void {
  }

}
