import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {

  elementsArr = [];
  pointer = 0;
  checklen = 0;
  alert = false;
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  feedArray(val){
    this.elementsArr = val.split(' ');
    this.checklen = this.elementsArr.length;
  }

  bubbleSort(){
    console.log('this.elementsArr:', this.elementsArr);

    if (this.elementsArr[this.pointer] > this.elementsArr[this.pointer + 1])
    {
      let tmp = this.elementsArr[this.pointer];
      this.elementsArr[this.pointer] = this.elementsArr[this.pointer + 1];
      this.elementsArr[this.pointer + 1] = tmp;
    }
    console.log('this.elementsArr:', this.elementsArr);
    this.pointer++; // 1
    console.log('this.pointer:', this.pointer);
    if (this.pointer >= this.checklen){
      this.checklen--;
      this.pointer = 0;
    }
    console.log('this.checklen:', this.checklen);
    this.elementsArr = this.elementsArr;
    if (this.checklen <= 0){
      this.alert = true;
      this.notifier.notify('success', 'Sorting Done!');
      console.log('Sorting done');
    }else{
      console.log('Calling bubbleSort() again');
      setTimeout(() => this.bubbleSort(), 500);
    }
  }

}
