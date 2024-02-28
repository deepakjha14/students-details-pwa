import { Injectable, ApplicationRef } from "@angular/core";
import { SwUpdate} from "@angular/service-worker";

import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UpdateCheckService {
	constructor(
        private appRef: ApplicationRef,
		private updateService: SwUpdate
	){}

    checkForUpdate() {
        const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
        const everyTwoMinutes$ = interval(2 * 60 * 1000);
        const everyTwoMinutesOnceAppIsStable$ = concat(appIsStable$, everyTwoMinutes$);
        everyTwoMinutesOnceAppIsStable$.subscribe(async () => {
            try {
                const updateFound = await this.updateService.checkForUpdate();
                console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
            } catch (err) {
                console.error('Failed to check for updates:', err);
            }
        });
    }

}