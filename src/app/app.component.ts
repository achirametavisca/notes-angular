import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Note } from './models/note';
import { NoteType } from './models/note-type.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNotes : Note[]=[];
  noteType=NoteType;
  constructor(private dataService:DataService){
    this.myNotes = dataService.getNotes();
    
  }

  deleteNote(note:Note){
    this.myNotes = this.myNotes.filter(item => item !== note);
  }

  upVote(note:Note){
    note.upVote++;
  }

  addNote(noteType:NoteType){
    debugger
    this.myNotes = this.myNotes.filter(item=>item.message != "");
    this.myNotes.push(this.dataService.getEmptyNote(noteType));
  }
  
  
}
