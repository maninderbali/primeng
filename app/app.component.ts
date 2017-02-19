import {Component, ElementRef, EventEmitter} from '@angular/core';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';
import {DataTable} from 'primeng/components/datatable/datatable';


class PrimeCar implements Car {
  constructor(public vin:any, public year:any, public brand:any, public color:any,private element: ElementRef) {}
}

@Component({
  templateUrl: 'app/app.component.html',
  selector: 'my-app'
})
export class AppComponent {

  displayDialog: boolean;

  car: Car = new PrimeCar('','','','');

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar('','','','');
    this.displayDialog = true;
  }

  save() {
    if(this.newCar)
      this.cars.push(this.car);
    else
      this.cars[this.findSelectedCarIndex()] = this.car;

    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    this.cars.splice(this.findSelectedCarIndex(), 1);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event:any) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar('','','','');
    for(let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }



    onHeaderKeydown(event: KeyboardEvent) {
    console.log('event is ', event);
    switch (event.keyCode) {
      case 38:
        // top arrow
        event.preventDefault();

       /* this.values[this.activeSpotIndex].deselect();
        this.values[this.activeSpotIndex].blur();

        this.activeSpotIndex--;
        if (this.activeSpotIndex < 0) { this.activeSpotIndex = 0; }

        this.values[this.activeSpotIndex].focus();*/

        break;

      case 40:
        // down arrow
        event.preventDefault();

     /*   this.values[this.activeSpotIndex].deselect();
        this.values[this.activeSpotIndex].blur();

        this.activeSpotIndex++;
        if (this.activeSpotIndex > (this.values.length - 1)) {
          this.activeSpotIndex =  (this.values.length - 1);
        }
        this.values[this.activeSpotIndex].focus();*/

        break;

      case 13:
        break;
    }
  }
}
