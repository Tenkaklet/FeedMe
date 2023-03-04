import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	constructor(private spinner: NgxSpinnerService) {}
	
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	  ): Observable<HttpEvent<unknown>> {
		this.spinner.show();
		console.log('http incoming');
		
		return next.handle(request).pipe(
		  finalize(() => {
			console.log('http outgoing');
			
			this.spinner.hide();
		  })
		);
	  }
}
