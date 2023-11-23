export const getExamBetweenToPrint = (data, startDate, endDate) => {
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
          <div class="text-center">
              <div class="row">
                  <div class="col-xs-5" style="text-align: right;">
                      <h4>الجمهورية العربية السورية</h4>
                      <h4>المعهد العالي للعلوم التطبيقية والتكنولوجيا</h4>
                  </div>
              </div>
          </div>
      ${data.map((dt) => {
        return `<div class="text-center" style="margin: 5em 0;">
          <h3> برنامج الامتحانات ${dt.year_name} ${
          dt.speciality_name
        } بين ${startDate} و ${endDate}</h3>
        </div>
        <div class="container" style="height: 80%">
          <div class="row">
          ${
            dt.exams.length > 0
              ? `<table class="table table-bordered">
            <thead>
                <tr>
                  <td>اليوم والتاريخ</td>
                  <td>رمز المقرّر</td>
                  <td>نوع الامتحان</td>
                  <td>اسم المقرّر</td>
                  <td>التوقيت</td>
                </tr>
            </thead>
            <tbody> 
                ${dt.exams.map((e, index) => {
                  return `<tr> 
                  <td>${e.date}</td>
                  <td>${e.course.code}</td>
                  <td> 
                  ${e.type}
                  </td>
                  <td> 
                  ${e.course.ar_name}
                  </td>
                  <td>${e.time}</td>
                  </tr>`;
                })}
            </tbody>
        </table>`
              : ``
          }
          </div>
        </div>
        `;
      })}
      <script> 
            $(document).ready(function() {
                window.print();
            })
      </script>
      </body>
      </html>
    `;
};
