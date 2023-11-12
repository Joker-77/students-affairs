export const getObservsHall = (data, st, en, current) => {
  return `
    <html lang="ar" dir="rtl">
        <head>
          <title></title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <style>
          * {
            direction: rtl;
          }
          .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
            float: right;
          }
          </style>
        </head>
        <body>
        <div>
            <div class="text-center">
              <div class="row">
                  <div class="col-xs-5" style="text-align: right;">
                      <h4>الجمهورية العربية السورية</h4>
                      <h4>المعهد العالي للعلوم التطبيقية والتكنولوجيا</h4>
                      <h4></h4>
                  </div>
              </div>
            </div>
            <div class="text-center">
                <div class="row"> 
                  <div class="col-xs-12" style="text-align: center;">جدول توزيع المراقبين على القاعات خلال الفترة من: ${st} إلى ${en}</div>
                      <div class="col-xs-12" style="text-align: center;">التاريخ: ${current}</div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <table class="table table-bordered">
                    <thead>
                            <tr>
                              <td>مسلسل</td>
                              <td>اسم المراقب</td>
                              <td>القاعة</td>
                              <td>التاريخ</td>
                              <td>من</td>
                              <td>إلى</td>
                              <td col="5"></td>
                            </tr>
                      </thead>
                      <tbody> 
                            ${data.map((e, index) => {
                              return `
                              <tr> 
                                <td> ${index + 1} </td>
                                <td>${e.employee_name}</td>
                                <td>${e.hall}</td>
                                <td>${e.date}</td>
                                <td>${e.from}</td>
                                <td>${e.to}</td>
                                <td col="5"></td>
                               
                              </tr>`;
                            })}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>;
        <script> 
              $(document).ready(function() {
                  window.print();
              })
        </script>
        </body>
        </html>

    `;
};
