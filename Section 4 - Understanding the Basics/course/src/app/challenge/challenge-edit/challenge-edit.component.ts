import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  challengeDescription = 'Something'
  currentChallenge = ''

  @Output() input = new EventEmitter<string>();

  onSetChallenge(){
      this.currentChallenge = this.challengeDescription;
      this.input.emit(this.challengeDescription)
  }

}
