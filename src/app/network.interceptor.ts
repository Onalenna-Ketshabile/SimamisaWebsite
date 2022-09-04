import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingIndicatorSpinnerComponent } from './others/loading-indicator-spinner/loading-indicator-spinner.component';
import { SpinnerIndicatorService } from './services/spinner-indicator.service';
import { finalize } from 'rxjs/operators'
@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: SpinnerIndicatorService) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
