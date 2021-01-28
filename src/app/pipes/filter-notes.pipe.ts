import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/note';
import { NoteType } from '../models/note-type.enum';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: Note[], args:NoteType): Note[] {
    return notes.filter(note=> note.type == args);
  }
  
}
