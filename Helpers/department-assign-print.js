export const getDepartmentAssign = (data, st, en, current, dept, type) => {
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
                      <h4>المعهد العالي للعلوم التطبيقية والتكنولوجيا</h4>
                      <h4>مديرية شؤون الطلاب</h4>
                  </div>
              </div>
            </div>
            <div class="text-center">
                <div class="row"> 
                ${
                  type == 0
                    ? `<div class="col-xs-7" style="text-align: center;">جدول إرسال تكاليف الأساتذة إلى: ${dept} </div>`
                    : `<div class="col-xs-7" style="text-align: center;">جدول إرسال تكاليف المراقبة إلى: ${dept} </div>`
                }
                    <div class="col-xs-4">التاريخ: ${current}</div>
                </div>
                <div class="row"> 
                    <div class="col-xs-12" style="text-align: center;">خلال الفترة من: ${st} إلى ${en}</div>
                </div>
                <div class="container">
          <div class="row">
          <table class="table table-bordered">
                ${
                  type == 0
                    ? `<thead>
                            <tr>
                              <td>مسلسل</td>
                              <td>اسم المدرس</td>
                              <td>رمز المقرّر</td>
                              <td>السنوات الدراسية</td>
                            </tr>
                      </thead>
                      <tbody> 
                            ${data.map((e, index) => {
                              return `
                              <tr> 
                                <td> ${index + 1} </td>
                                <td>${e.teacher_name}</td>
                                <td>${e.course_code}</td>
                                <td> 
                                ${e.years}
                                </td>
                              </tr>`;
                            })}
                      </tbody>`
                    : `<thead>
                      <tr>
                      <td>مسلسل</td>
                      <td>اسم المراقب</td>
                        <td>عدد المراقبات</td>
                      </tr>
                </thead>
                <tbody> 
                      ${data.map((e, index) => {
                        return `
                        <tr> 
                          <td> ${index + 1} </td>
                          <td>${e.name}</td>
                          <td>${e.observation_count}</td>
                        </tr>`;
                      })}
                </tbody>`
                }
          </table>
          </div>
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
