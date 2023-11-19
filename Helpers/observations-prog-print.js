export const getObservProgToPrint = (data, headerDate, startDate, endDate) => {
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
          td {
            font-size: 10px;
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
          <div class="text-center" style="margin: 40px 0;">
            <h4>
            برنامج مراقبات امتحانات الفصل: الأول العام الدراسي: ${headerDate}
            </h4>
            <div class="row"> 
                <div class="col-9">
                   <h5> من ${startDate} إلى ${endDate}</h5>
                </div>
            </div>
          </div>
        <div class="row">
           <h3></h3>
        </div>
        <div class="container">
          <div class="row">
          <table class="table table-bordered">
          <thead>
          <tr>
            <td>التاريخ</td>
            <td>القاعة</td>
            <td>التوقيت</td>
            <td>رمز المقرر</td>
            <td>اسم المقرر</td>
            <td colspan="3"></td>
            <td>نوع الامتحان</td>
            <td>العدد</td>
            <td colspan="2">رئيس القاعة</td>
            <td colspan="2">المراقبون</td>
          </tr>
      </thead>
      <tbody> 
          ${data.map((e, index) => {
            return `<tr> 
            <td>${e.date}</td>
            <td>${e.hall}</td>
            <td> 
            ${e.time}
            </td>
            <td>${e.code}</td>
            <td> 
            ${e.name}
            </td>
            <td colspan="3"></td>
            <td>${e.type}</td>
            <td>${e.numbers}</td>
            <td colspan="2"></td>
            <td colspan="2"></td>
            </tr>`;
          })}
      </tbody>
          </table>
          </div>
        </div>
        <script> 
              $(document).ready(function() {
                  window.print();
              })
        </script>
        </body>
        </html>

    `;
};
