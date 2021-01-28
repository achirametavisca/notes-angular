import { NoteType } from './note-type.enum';

export class Note {
  id:number;
  message: string;
  type: NoteType;
  upVote: number;

  constructor(id:number,message:string, type:NoteType) {
    this.message = message;
    this.type = type;
    this.id = id;
    this.upVote = 0;
  }
}
