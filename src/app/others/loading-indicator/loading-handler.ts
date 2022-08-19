import { BehaviorSubject, Observable, of,delay, switchMap } from "rxjs";
 
export class LoadingHandler{

    private isLoading$ = new BehaviorSubject(false);

    isLoading:Observable<boolean> = this.isLoading$.pipe(
        switchMap((loading)=>{
            if(!loading){
                return of(false);
            }
            return of(true).pipe(delay(1000))
        })
    );

    start(){
        this.isLoading$.next(true);
    }
    finish(){
        this.isLoading$.next(false);
    }
}