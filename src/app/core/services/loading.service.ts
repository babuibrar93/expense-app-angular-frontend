import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the app
})
export class LoadingService {
  // Private BehaviorSubject that holds the current loading state (boolean)
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // Public observable that components can subscribe to in order to receive the loading state
  loading$ = this.loadingSubject.asObservable();

  constructor() {}

  /**
   * Updates the loading state in the service.
   *
   * This method is used to set the loading state of the application.
   * It updates the internal BehaviorSubject to notify any components
   * or services that are subscribed to the loading state about the
   * current loading status.
   *
   * @param state - A boolean value representing the loading state.
   *                `true` indicates that the application is loading,
   *                while `false` indicates that the loading process has completed.
   */
  setLoading(state: boolean) {
    this.loadingSubject.next(state); // Update the BehaviorSubject with the new loading state
  }
}
