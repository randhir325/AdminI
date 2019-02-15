import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
    alertify.set('notifier','position', 'buttom-right');
   }

   confirm(message: string, OkCallBack: () => any) {
    alertify.confirm(message, function (e) {
        if (e) {
            OkCallBack();
        }
        else {

        }
    });
}
success(message: string) {      
    alertify.success(message);
}
error(message: string) {
    alertify.error(message);
}
warning(message: string) {
    alertify.warning(message);
}
message(message: string) {
    alertify.message(message);
}
}
