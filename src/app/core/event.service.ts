import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event'
import { MockEventsDb } from '../interfaces/mock-events'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEventByID(id): Observable<Event>{
    const event = MockEventsDb.find(e => e.id ===id)!;
    return of(event);
  }
}
