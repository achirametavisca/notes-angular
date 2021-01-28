import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { NoteType } from '../models/note-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nextId:number=0;
  constructor() { }

  getNotes():Note[]{
    let myNotes:Note[] = [];
    myNotes.push(new Note(this.getNextId(),"this isdasadssa note", NoteType.Priority1)); 
    myNotes.push(new Note(this.getNextId(),"this is34353 note", NoteType.Priority1)); 
    myNotes.push(new Note(this.getNextId(),"this isf 34t wa 4 note", NoteType.Priority2)); 
    myNotes.push(new Note(this.getNextId(),"this iaeg5v684egs note", NoteType.Priority3)); 

    return myNotes;
  }
  getEmptyNote(noteType:NoteType):Note{
    let note = new Note(this.getNextId(),"", noteType);
    return note;
  }

  getNextId(){
    return this.nextId++;
  }
}
