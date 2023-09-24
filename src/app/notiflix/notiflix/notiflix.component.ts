import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

@Component({
  selector: 'app-notiflix',
  templateUrl: './notiflix.component.html',
  styleUrls: ['./notiflix.component.css']
})
export class NotiflixComponent {

  notify(type: string) {
    Notify.success('hello world')
  };

  confirm() {
    Confirm.ask(
      'Notiflix',
      'It is notiflix ? write yes',
      'yes',
      'agree',
      'back',
      () => {
        alert('right');
      },
      () => {
        alert('repeat again');
      },
      {
      },
    );
  }

  loading() {
    Loading.standard('Загрузка...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
  };

  report() {
    Report.info(
      'Notiflix ',
      `Netflix - это JavaScript-библиотека  
       для неблокирующих уведомлений на стороне клиента`,
      'Ok',
    );
  }

}
