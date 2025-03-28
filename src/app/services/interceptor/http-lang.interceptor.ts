import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const httpLangInterceptor: HttpInterceptorFn = (req, next) => {

  const lang = localStorage.getItem("lang") as string;

  if (lang) {
    const langRequest: HttpRequest<any> = req.clone({
      url: req.url + "?lang=" + lang
    });
    return next(langRequest);
  }

  return next(req);
};
