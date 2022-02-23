import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from './friend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  friend: Friend;
  friends: Array<Friend> = [];
  friendForm !: FormGroup;
  constructor(private fb: FormBuilder) {
    this.friend = new Friend('','',11);
  }

  ngOnInit(): void {
    this.friendForm = this.fb.group({
      FriendName:[''],
      FriendEmail:[''],
      FriendAge:['']
    })
  }
  changeDefaultName(str :string){
    this.friend.name = str;
  }
  onSubmit(f:FormGroup){
    this.friend.name = f.get('FriendName')?.value;
    this.friend.email = f.get('FriendEmail')?.value;
    this.friend.age = f.get('FriendAge')?.value;
    let  form_record = new Friend(
      f.get('FriendName')?.value,
      f.get('FriendEmail')?.value,
      f.get('FriendAge')?.value
    );
    this.friends.push(form_record);
  }
}

