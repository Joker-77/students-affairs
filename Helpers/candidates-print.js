export const getCandidatesToPrint = (candidates, eduYear, spec, specYear) => {
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
                <div class="col-xs-2">
                    <img style="width: 80px;height: 80px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB4CAYAAAAjWNZcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAADahSURBVHhe7X0JSFTr+//NfV9yzbLF9rKS0qikokgUQymiiEKSiCSkuEQkEaKERBEihYQiYUQRhRRFYiRKiiZWkmXZYqZZrjPqOI6Os37+z3Nm1Dkzx67db9f69e9Dn872nuM5z+e873med5u/8Ae/Ff4I+pvhj6C/Gf4I+pvhj6C/Gf4I+pthygTVdaYDMicYO5xQsnsanjx5Yj5Cx5qnAZ2uQLsjUudNg0KhEPZrh+XQ9zgC3Y5Q1NhhR8JWYT9D3RJrul6nE44ttUNfX5+wX6+mc9ocYaRzBh/ZY39CtLCfof6SCPQ6CX/n/Wk75F7MMR+he2jyoXtwgbHZCSsD7cx76Xq9FTDSPRi7nPDxnB2yz2eZj9CxFj+6N2eAzlkVSM9ghtGgh/a9A53nBN1rB2xaNtN85L/HlAn6vjAdOlkcrd3BpjmuIkEfHnCg/2th0F+Ht8u4oIruTrQVedBaOe7khWDz5s3Cfkb5ySgY1KfJeCXwdPlrTNABWTc6LpKhUYPqGwsRHT0u6OO0aDonldaKcSo2CDk544LW7yBBjVVQK7Lg4jguaPfTMgzVLaK1GmTvCEBW1rigDUn0dwxF0CjS4GI/Lqhep8PrPS60VoHON1sRHBxsOjAFmDJBX+WnQ9vGhtmJcH8nkaAPYtiAOWSIPXCzGxe0r6sTby9SjsIZFJz1xdat4zn0weEo6FQkkGEfXO3GBe2XydCczudkIS/LXyRo8ZFo6FXraW0PDkZ6iAStXs+CHoOyeyMc7cYF7awph/IxC5KG1A2eIkGr41jQJAzLE+A0TSxoeYw9rR1HXXnY7ylo/eV0aD4vo7VkLLEStGIrG/AoGSIGbvSmjwraS4J+uERFGk6j4Mx0kaD3SVD90CoSdBOdIxa0MYvPSUfBRbGgJanR0A1xLt+Po+vEgr7cQIIaEjHUvQJOFoJ21FaQoEG0dhLJ0V4iQau2saCHoZZvsxG0eDsLmor6mt9U0KcFp0nQ5bR2CMtJ0OrqatMBQukWNmAWGSKWiq6/xgXt7MT7HC6OT+PaaV9s2bJF2M+4fiQSuuE1JCid4/AXent7hf39VOQ2Cjn0IPIv+GLDhg3CfsbDIxugVW2itVSkRrojOzvbdIBQvc6biu99UHatFOXQjiePMVDuT2uHSFB3nDlzxnSAIAiqPwKVPByO08ZNyYLej2VBd+NF1SwEBfELMTWY2hz6dTGtJWBpoKMoh5YKxVMuGWKDTQ5tyuZvURryznqKcui9I1TkDq0mQbdQMS3Ooe/STbm6KFOcQ69zDlVF0Foq9m9xFeXQWqHIPYEB+RY42o8L2v68AvIKzmGpSN7iIsqh9+I5hx6Aqm8pvQTiHPpgBz/TQbyrWPB75tAGochdSWtHbYrce9v44U+SIVbD1UJQORe5Z02CXsl0EQlazEXu4AYSNM5G0I+CoIdxO8tXJOgD+obqlJxjj2DfRk+RoBWbWdBkKGVRIkGbaiogexJKa2k4st5NJGjNVhb0JAm6wUbQ4l38TIl493jO7yno6wJ2iubT2kEbp6gsmh8+gQyxnBwcsVP04QwfS0LeGR+RoGXJ5OWqwknQ7UIxPSqoYkzQoyTodNtvqHIVrW0jQb1FgpZvZUF3UpG7RlTkttVXoLdyFq3twOH14m9oRSwLehCqXltBHwmlzh4SNPT3FPTWpXRUnXFFf+Nc+LjaiQTd7m+HV7dnojrfBw7kXIwK2kPf0BMr7NFRPRcRs8U5NC0+Ck33PNBeHQx7+n6NCionQVPm2aPl0TJsX+omEvTEnmg8zPBAMxWhgT6OIkGPhPqg/eksVGQFwN5C0MYnFShIcIPycyjC/B1Egh5c6IfXN/3w6MwM2Fk5RQkhduiqno/dUe6/p6CPHj0SHszVYRrCwsLw6dMn8xEgPDwc3t7ecHd3F9aHhoaE/f39/Vi+fLlgrHnz5uHixYvCfgY7J/6+PnCiIprTDA4OCvsHBgaEa7i5usLX1xfnz58X9jN4fc6cOcL1OE1VVZX5CL1U27fDy90Nbs5OWLmSPw0mfPz4Ufjb/Cng+y8vLzcfoQBs504EBgbCydFRuN4o9Hq9sM37+Zz9+/ebj/z3mDJBGR+f1mJlIOVSEsoaV7LTsHULe6BiGI1GeDtNg1wuN+8Zx/0LmVgUyEWbLc5tWS0ScxR93d3wcRzPTZa4tHcDNqyaZ94aRy/97fAQZ9TV1Zn3jON5ZRkWzg40b4mxeJYvampqzFtTgykVtP1FLY7Eh0sK+r4iDTu2SwsaESIt6KurmYiN9jZvifEmQ1pQpbwby4KkBX19fhf27Nll3hrHAP3tU/tDJQVtqSvD1khpQY/G/O6C1tXg+Pbwse+dJZrLMrAjfqN5axws6JpZf0FG30ZrPL2ZgdjNHCPaoj4tAufOnTNvjWOwtwsRwdKCNpxLIEFjzFvjUMhlOLl3AZ4/f27eM47WF6XYNoGgf2/1F/kKU4EpFVTdXYvslDWSOVQty0b64fGKgzGQoPdPuErm0P7PF7Fre5R5S4yBN1EoyLXNoXpVN07FO5q3xFC+3o/9e/aYt8ahGZahrHAlnj17Zt4zjqG+GmQkzzVvifHhVhhqf9ccquujN1WzAP0d2Yic646XL1+aj5CRZQvI/Y9H1yM/7FvoAaVSKezXaVTQKkKI4Xh+xB3HDx4Q9jP0qny63kG0NuxCWJDHmGes0wxQfLoIRt18XN3ng30WAo30kIc6EoahjuXIO+CB2zdvmI/QeV9W0DmZeJu7EnP9vMx76e8oG2AYWgDNUAaSl7vgSj79XTO0XQmUYAU6y4PIa+ZGBBMMBj3UnUtg1MxC/QkPxKzjGrKpwZQJ2nQjHfo+zoGlWBPqJiqKalM4x3yAQZ8PH4vWlr7uTny+z8ZtwL3LoaKw5XH6eujVJ2E05MHT0SIOpeKx8xrFlKjH/cshorDl8SlubTlFaxU4FhssClsad3Eceg9q+TGKa8fDli6KQ4ca2IOtQEa8OA6tP8hxaC3U/RlwtoxDyct9nswVIvfR1hj3fz1sMZqXYvQ2kqBKFuQoVlhVLJRuYU/1PMVvm0StLVyX25jJ9bLnkJ8lrpy/l8I1RQspN+wUVSxwTVFrFp+TiaILniJB73LFwuBqWjuKfWvENUVPuerPcAiD3dE2lfOKRyzI3ziy3l0kaKXQ2nIIw7It4sp5ErQsnp8pGW1vQhAcxN9YA5FtM8r/Bj9cUK3qCupuRJMAm5CfvQX5uatx4+IGvC30hlHLTVe7ERFgVfW3mR/+CAlK8aOVoM1nuXL+JAoyxIIWs6CqMKHqz9Wqpqj5NOf4TNy55CoS9LZQl8stPvuQatV8VruWBT0MVc86im3FgiorWJDDOGZVU/REEHQXCUovgZWgj4XqzD0YpKLX08kOp3bOwfXCaFzPX0tcjbLbCXhbshNtLc2mk34QfrigBxKWCs5DN8V7lkzZvQsDzRywp1IOdRS1tjwSWlvOkqDRQr2spaDvL3BuO4vLmX6i1paiQ5GUQ7m1Za+QQ8daW+Q9aM7gc3Jw+6yXqLWl6MgGyqFcfB7DoSgPUWtL7XoKfwzHhRxqWfXX/uQxlOWcQ0/h6HpPUWtL6bbpMOqPYEi2FY5/jZuSBS3ZyoKm4mPNHEyfPp289G6KZ8epIB6KW4anT5+aTvpB+OGCHopdNmZcSzw+nw7ZHR/ydFditreDKIdeWGxHjkoUlJ+DhTd9VFA5CVqaZA91zzKciBNX/V3ZHwXFO3+oviwQmq4sc2h1vAN5zdHI3OkiyqGFydHof+VP1wvHplAXUQ69F873thjtZf5iQasr0JruBY08AvGznUQ5tCjSDwNtS9BRFSJUWY6CBS1cag9N33IUn/ae8Bt67dx+Sc/5f8EPF/R4grSgGenpsKeH5krsabS0FJSr4hxoP5OPjQraSYKOnsNpLAVdGxUlpOdjf1HuGBWU41XLcywF3UTro+fw37EUdLqPj7Dfns+zELSyokIQy9HedI6loIF+fkL60fseBQsq3AOdw/cwkaBFF2J+fUFTqRiREpTBlQThixePGX8UvL/z82ds27RRWLcEb7PbL1WxoFYp4OftKXnOjWsXcfbsWdExXtfrNXB3c7E5h1H24C69eKclrxfs7w2NWm3eM46hIZVQnyt1zqlDyai2qC+2xq3sxF9f0GuHJxaUcWr7EumKhb421JScNW+J0f5si2TFAmPvanJMJPDp1VXJqj+KOLF0hqt5XQx521M8rakwb4lRdGktNCMj5q1x6LVqRC+WrilSNBeh/oVt7dIoGu5unAJB9RTUj1BuUI/TOErarx+SQSvxplL0T7aSQdESDUXbC4r3ZBhUmopOSxRMIKiGBH1aMV6cWaKnbr20oEY99q90N2+I0Vx3ETmSgmqxYibHiLbo63iB+vp685YYRXkrJhQ0Yam0oOqO23Q9K0GNWvpHdiVbaZXJaK4qFGyrVlg9Hz0bOB0dk6LpHFq3go2ghoEoerIQchep3O8PEpZGRQgxiBiIzpuuuG3x7WEYBk4CKkqvXgmD/jB0HUugbXVH+LwAc4pxvM6zLXIZelUbnldfMG+JoWjdK1nkwjCMC7t9zRtifHqRhWyJulx6dRAxS1rQEcUrWwHMePZgl6SgBr0aBUnSghr6S2yup+7OgVFJHvUQhU+GHOja5sHY442U4PHvNoNFNyrdyP4zzDqYSTqg3x/G7kAs8bHNjzZ75GXc4sFtfneIt4k3iQ+IZcTzGG6fiUtLHWH4tJy8lhhAuY3UCKNj3BJxi8ii3IC2fxt86FvV/v4qbVOuN/aTQdrw6OZaPMzfCaOB3kgjC8vHZDBoL+FuHhXXbfdpm48N0AN307Ibyp6TyD+xmYzXaTrHTIO2Bi9vBqD9dZ45rQzDivsUyujQ/iEP2ZI5VINNC81FrvB3XtL909LQQ5kiH7fS19ObXzv2N4Q0aET/hx14+TBFSDd+jO/9GV7e9UdfG92DcD2+D7pPyPGlJQcXklbTdTtoH6enXNlLdjNm0HFKjwLiZeI5VMTZ4+tFX0pCYVY3aaBZQPsLiSVEtivbkbdZh1wMKY4JTpc1bARtTI9CY/lyvCibjWdloXhZNgd15SGoK12IelqPX+GI4KAgxMXGIC4uTuCcQE9U3AzF87L5eFEeivrSMFw/4gNPT088oXiTYy0mV1RzozJzdN8oL+ecx9w5s8n7HU9vYi0WhgTj7JkMYd3yWMnNHLg52VNMO369iyfi0P5iH1SDzyb4ho7gfdEmclqUuHn1GO7fKkRFSRFKS0qQELMWK5ctwaPiYpQ9fDjG0pJieLi5Ii83F7W1T4R95aWlwrPlXTwPLy96zie2zzT+rOP3vX1TFO5lBuNJ6Tw8I74om4eH14Ph7jgN27ZuIXvGCoyKXI2DUS54VboIdSVhZNN5Armf7wvS48aFUMGDtoaNoDExMXBzc/smr1+/bk5tQkJCgmS6BQv4LZschnraUHg22bwlRnVepOQ31KCVY12Y+BvK3T8OJqzDnfwlEwiqRd/rJYiJ9sLXL23mfSZ8aijFnVucc2yRFD9bssjVajRYHErF4CRx4cIFSVt5eIxX7jP4sySVzprWsC2EfxJG+skpquQixRZd9RN4uSTovnDbh9KQkTn2S0rcTMWbVThhUCBqtgMaX9o6P/3tdfTNk/Y6i/LDJ3CKNIhfOnlB/2v8MoKavNzxpilLdL/YPKGg+5fbCsrgfkkxEcH40njPvIehw+eGQ7h0PtO8LYaigwWVroqrfLh/QkFjlvzKgmq7YBx8Rz4JkZdW1Pa9g0pJDosljAay4DuAjo/SqHyH3m5xkfYtDHMcWvG3eUuM7voJBDV0Udgi7bEyuMNY1o650GvqySF+g4HeS8jPzbapBBhF3zcEvXdl/cQ5dNl3CGrUkKtrYVOyGy8V7e/NCSygIUfKbM8xu6rMpPXeL7TPCjaC6geomBpeSwKRNzYUTowgziXOI4ai+bITLlv0vmOMdJOnO0xu+OAaSkNhjyoC2i/BCAuVdueloOOw5ckx85YY3fWbJhC0F/tWSufQUaiHXlPMNg/6vlDERIZNKCZD3v6tOHSVtKA6Dc7vnryg6vYzZLBQshPbdzFxAWWe+VjhKw5bhGGRAxSSqUiDwZWUjrXgc1YTo4HehQjzmoRTJHvIdZ9c9HFu4XiTv2vcKsHMRfPj2dgc5gfVwFsMdp6Fuq8AeuVMevMo3BDc8CvEPIq3IuHj6YHO1koyaiPUw9XEWuJLM1+Zl2+gVj+nZQXuXh5vGbFEz/MN0nEoeaqnkrl9cwIYdZQDSERdFQy684gPscOb5xyGSYv65W0Vaqr4OWxRdHm1UEdrDaN+EFXXVkHWXmN+nhfEBvO6+TnV5bSsoGU9hr+upHM4bGEbc4h3gl7Mc1gfYIcXd1Kh6k7DsOw0+RSplJmT6Pio/Tktk8Oca1D1HYSjnW0Ba7Pnyd+RuJs7C0WX/FCUG0wMwa1Lwbh5aSbtm4HIMCehX21qauoYV4b4ID/dR0h750IwSi4G4UKCq9DX9s7t+3hQdBctLS3IOXsWZzLTzTxFPI3CK9dw7vRRXMnNx4ygADTXjfd7HYVM8htqhELxFpcuSlcX8nGjdid5wodxO3sNTm9zhLJtPnYscEZz02tzGjEU/b2IWROE7nbbNsqivAiJHKpBy/tMHE89hPxzZ5F96jjOnx59vtNmpqOk+AGKbt9D8Z17OLBuCS5TSHfrUijZcxZu5QYh/3gInCmmtLTpru3x2LXMEcW5gSgiexbxUiDr4ofzB70nF7YcPHgQM2bM+CZLKGazxJEjRyTTWbZ0TAbdHa3YG+6Cz03i71j3y3Xo7KDg3AKDg3JkZ5+bsAg1jhyncmsPjiQuhieFBBGrlmOOnxMG3wZg52JHtLd9NKcUg8VMjPRBv4wrB8ZhK6gBXV21uHmTc/zkwSGflK1mzhSP8uYWJ6l01rSGbZ79yeD639R1nuj7Ou4kdL6MQEfbB/OWnoqup8jIOA2Dgbt1SGAkj4q1zTidsgquLi7obP8qFJcbV0cgLMAeivdLsCvUGfJu8Usyii+tTTi00BfK/vFi/uHtGOi0WvOWnkqMcly5Iu2V/0z8coIyWt7UYfuS6eiTmbzkvg/JZGRTManV3kNaWvKEYhqHrpKHtRolhbFwdHRAW2ur+Qjt1ukQsXQxkhY6YbgzCLGz3aFU2DYUMD401uH0bj8MDZp6IL56dRtaDedQA710pTh/fuLS4WfCVlAN5YSBhxRli2k0L7XdDzEgFzsoRq4LVdJxxXhag/whvjbb9jSfLLhF5tbfgTCMvMHwQAQG5U/IlkfQ3zIX2pEhipTI/bemnhwaPXncaMfB+XZ4+zSH7m2A0qqIaoEGcmKaHyykdElQNc9DWpgHNEPvTen0lE6voGv1Egeh07zB+zy+BwVknzZCP9KCIdUzKh245+C/A/8NqMbtKtir7yG6Xj8ypzCBn8+oLhOlE9KOLumc7pe0bgUbQXVy+u5pt5Kw64gbiVuI24mJVJTF4HWeOzki4rBF203n6CPNaZmbaN9MzAmZfNgihcGed+S6c18fKl77l9JTXoCuL5rCz2AYlN70cN6034c4nWIzHqrIVZKviLnQKRZgqDmY0nMaIoUABgWFARwygPsz8WCpZEo3FyOfSTQ5pen1gZGW6POiOC+Y/i49izaftF1P6+nQtAcgJsp/4qJ+EhhoOU3eKz2LJobuZR8tKUykMG+Zl1XYMiKnZ/SiNKTFCKUhm5rIumyhUGc1gj0n4RT13eHhCGwYrk3hDlFcH5pOZHf5b7QWByA80AOt9XvR9joGXS0ZGO7i4Qh3zWk41MmDpovCFjc3vH92Hyp5MaXJgbqnHupOWoqYDXXHBeJZ6FWXyIBUZA7QuuwctF17ybAJ5Knm4+HNxTjz93JkZYQgK3MlstIX4/yZ1ZB93El/j520asq9O3DhpCuyktyQleqNrNNLKC2dc8bMzGXEcGE9MzUU55K98P5hCOUavu8n0AzexNWLOynNRmRlLSbOQuaJJcjOmofh/kNQdcyHHzlYA90vycj5JP5ZegkodOs8b/VM1jQ9n6bvLkaaKfY0pNHf47CQ7XyUtvdhi/80lBbuRHvTXrS+TEJvazwMaspEQnjDYQvrwGHLSeJ1DPVtF7rMWMNG0KacNfhMf/TTh1DiXHz6yMsQtHwIREvzHMSHO2PVqlXIy8sb44rZgWio8cWnZkorcCYqL3oKwwPz6fida3l4cCUPxfnfZlXJVXqYY1g6zwuVdy7j8qkUNJ7xxN2sQCEE4nDJmtc3cpfNOLwunyVMRyOV5lv0ons8GO9GRXEKLu5zEeqApdLtX+GEt1W+QgvS3Vv5yMk+gOiV01F5NxfFhdLPY82yG3nYFbkY9SUhgn1bmE0haKB7d7a3E9n0xLFjSFnnQLacg09NxHczibNIj2DBxtVFs4R+S9awETSCxOJOV9+iZecqRlRUlGS6gADbBu5vQ4v0v1eh1ezIcK+/lgsu2LPJQzQ2dAz6TugHo9D0dBcc7f/CvXuW9baTQ3+fHF4ebjiV4Iav5Z4Uhy6XrEDIi/PCo1uBY+EFO0T79u3DpRPfN/bzxIkTkray7JjG4IoUqXTWtIbNHr5R/kZ8i9be3UTnfJ8XaERLywNhgO0olPJOdBW6YNdaD1y6RMWxJXQ9VOyFobMlB06UMwsKuJbq36GnWwZ3V1fknvRDe7Y3jmyItLn3N/u9UXxnNmbN4uH54zi6LwZ196TroKXwLftaQyqNNa1hK/FPgNGoR2NdElqbxRXUAyRo5xUX7N7oJRaUPVJtKGStl+HhYi/q/Pxv8fVLO1ydnfH4rB9qs9yRmhgnMpggaNE8G0E5zYmDG/CmVqrtdephK6h+GHqNgthvQd5m9kKr7sWIRCcxg37EIp0CBt0whs1D678NHR5cO4rXL2yH3Y0KumvjeA41GljMMCi6z8Hbw1GopfpRaPrQJAzJf5YXjLs7XXHpUNJYTn2Vwjl0gY2gDC6i9yeE40OtuOF/Ihi0SrLRqG17haVKKdFT0qgTbClJ7SDFyLYxtI2gesU2cvEX0HIm9P2hxLm0Pps4h9YD0XHdBdesvmdG1REYhsIpzTxKM5+WYdB+DcGKRbYPL4JxBEW3MvHuNYcatlDI6Bt63QOpW/1MghqGYRxehH55FnzcHbB79+7vLNb/Ga+eP4erkz0qrgWibKsr7mScEPZ/Pu2N8jsLJQVlcKVFUgJ53R2jNVrS0MopDFIGk41mmdhP67IQJM0Sf0MNun6y6SKzTZlh5iWR9/XMwiKrFhqGjaDdQiexUiJ3EuPAlTuIsevMHcayMdQxGycWO0LdGoKRvlDoBpfQX+eedy+IlUTuxFSKkf5EcvFd0NPG+2wh9JYruIS2tonbTDmHfijwwnMqBu9fPUjWiICy/yp8vV2EiRylviE/ApUVD8ljnoYP92bidrwDFK3noSODPrwbNaGgjJGRERw/FI/ORnYaJV40+rTo22Lp4fmby6ESd3fhtOdQttcOX3LcoZUtgE6+jnIxxcFGLsa5nzA3WIySW4NKoFKcmFwnsRfnVqOmMgTVlYGorghG9eMQVJXOReXjBagsDcPOFa4IDgxEXOxmxMVxp6atmB3iiYfkAVY/DkRVWZDAaylugotfXVUx1kFKxNoadHV1mf+qNJR9nWgjp8io3yNUtg8pqxHo5yrMUvKjc6Y1HpU8EMKgL89n0N9mT1aB6tvSRa4lhoeHUVU5wTM/rUXipkjcPhOESgpVqsrnkV1D8TB/DrzoBYrZssls022IjFyBpE2OqHo8g9KRBuZlZQXZl+x847z35MKWbdu2wZU8vm/x2rVr5tQmxMfHS6bj+O1/gbK3Ex1XuctlBtR9sQj2ccDixYslw4r/AgX5hfBwskP3xzW0dQXV9NL+k6D/BO64JmUrjtktwZ3EpNJZ0xq2TtEvBPVgJ9QtIdCpd2FegCNCQ0OhHWvxmBqcyTwLTxc7KNpnofmpv00z16+GX1dQI8VZw/voe5OHkuxgYUZLtdQQjP8YXLTnXczB8WXT6MXaiI3+DmhufGM++uvBRlCjrhe64SZoVcxmYivxwxjVAy3kYpualEZhJAdHN9wG7RBR9Yn4GdrBJvJSv5hT/AsMUzhiPE4rV7B3s5ttxcIUgp2vu1s86X52Q909F4mBjvhi0Sz3XRA89Ray0UeTnQQ7f0Bfd5M5wTiM2g7oh1qhF3QY1aAZOvO2vNO2kd5GUMPAFvqD6ygUWU1cBeNQhGkprK9Ax213FGSbes4JjglRP5gIozqc0qwxp10BbXswFn5HJzERhtPoRlJg1JBHZ9yJPZum/VRBGa+SeYIr8k6N+zHSOQ8J/s7C9K/fC3V7Jj3fArIROXZDRNVyGClM3Gke2zJqV4O2VwhvjEOjGoySbRwBQ18YQibVSewRz/jMg3F5PAVXp3HIwuu8vIzhtjCkh05D/wsvqFoDMNwTCo2K62z5HB5/wVPF3IK2fz0C3J0hay6morKFeJrc+qvERmIZRtTNGFFJGGT4Mr2Zu3D28Er4u0yDrNgFu9bb/XxBD3hD3b8FC72nYedCJyhezCIRXCgmturrZNRCN/KWnvEFsYb4nEgvwUgB8T2GOzbQ14QHUbE92V65xBxUJdjh9XFPKL96EX0wws19eh6Nxw4o68BpmVx5cRdD8uTJtbY8PhmBG5f9ceWyD67k+5Kn50PxIuXKyx5Ef6wKcxEmMzx8+PAYgwN9cf40pb3kT7nXj5YBSIs3dRJrbm6W5Id375CVGg4FhSajMA7foiI/FuePb4CLiwvu3bqCRyme2B3t+9MF5aq/uodh8PPzw87ERKyf60wxezC2BXlgwDzi3Ejf/Zf1hbh4Lh1Z6UeQfjoV6SdTcPxIGk4cyxDW186fiawUF7KpH9l4OtEbOSd94eIwTWTT2NhYrF9oJ9iy4BLZNps5HQW5bOdAnE7xnVwnseTkZKEJ6VssLi42pzYhJSVFMp3lhBVSGFEPo7LkJrQkJHQ19HIvx4Xj2+Ds6ChUOPR3d6Il202oy5VsbZlCNBzyQllRyJiXe+DAAWygnCov88PJRb6UKwfx5k3yP87td/XqVUlbhYSEmFOYwJ3EpNJZ0xo2gk41BgeUGO4khwPn0dxwAo4ODnj79q1wbLQud8dG95+eQxsphz4uWjEWh7KjxFOyPsz0g/pLID5fdsXVQi4+fy5+uqCM8kP2FBKkoa4oAFs2cdWjCYKg+Vw57/nTBW04xIKKW1sM2mH6lgbTchu2UvEoNVnkVMNGUKOuE/qBCugUlcTH0BO1iipaf0Lr5VB1V6DXqhe70TAIrbIOGgVxwEQdhTBd7f88tsWgH8a6JSHwdrKD7LE3Ds1xwpMSdhjMgua5Yad189lPAH9DHxeJa4r4E6HTXMaSYEc40mciafcOk+f/DfB31jD0muxZJthYS0utogJtDVwHbgH2dNVvx23KSzN1ihrh3JaXXOcuho2g2p5oQLObPnA7idvN3EPcQYzG64seNp3ENB3ceWkr+eSURsPpEqHtmoPZk+gk9vjxXcFJ4m4X/KtKvc8DcGihPRpryZMb6ILivht2rP75RW4DhS2195cIgnL7LbRHodeco5fRG4sWLRKqI1P2JODpPe5/NTGGvvDYlqXEWGICMQ5QbsEyb6vWFu4kpuJObaQDd9Dj/kVMQY9NFF5GItRjEk5RzwPuJMYtLdwKwMKxIXnJNf9JaC7xxw5/D3RVz4bsdShkH5ZTruUBQzwGgzsx8XfkIjTytfDxdMObmmzIeu6hp/smZN3XibTszIdMVoNr+fl483p8WEJmZiZ8PRwgb/DHxQ3O9BZmUswVhfi1P7/IfUdhS39zNDI3+8KoP0Mly0VsjvLF/PnzoVKZ2n35u5qdthdt1QfpGfk5rwjP2sPL7htkhxIMNC4D9IcoNY9v4TDkJJ14HLH+dnh6IgSyBrJp4yLIW2dAz2ILafjZuXVmtIVmB1R9eycXtnzMjUTHJ2YYvjYvJC7F108R+PJpDb62rMK2ZaY52XNzc8e4YE4A3lWEoqN5OXEVnRuBihxfYc730gf3cftWPu7cuCwsi27m4cHVXNRWPhamjLMGe8wz6G0d7KQAWsfxrwy7o9x+upfbuN+LDJ8CgyYJBl0TEmNnC54pDy62BOfUmqrneFJRg+Lr13DvRiEeXCvA3et5KL6Siz1rFqHhdgjaPi1AW/NaWobhVUUInB3sRDbl8S0pG53QTlp8bY5EO9u1eTVtxxAXouZBGIUtti6QzZ6oiAghvmHy7FhStDbu2rVrhf2j542eyxMyfS/4G8ST88/0sYN6gLsx7sOezc4/PYe+SjXVFBkNp7Bzgx/8/f2FprLvxcmTJyVta91JjAdn2aSx2mZaw0ZQLjb+idYffqk0o/y34IFOi6kY0g8twYXDLqKJFn8G+mr96UFzkBnvK1SYjP5yxfdCqNaTsBPTGlJprGkN2zz7i4BvdvXq1ajOcsNg+0KE+TljoM+2iJ4KGLXkyOhOoKdthzAbCo8M/1VhK6iOQg1dn0CjthOaXq7F6aWc8gbavstQtl5Ex1dxK4pRryTX+zY5QteIt4TliKwAr6rFNUrfC/6prDdppp+9kpP3uy3EDUNKurephJacQ308rTxH9a2g/7mB26BTw6C4arIT2ZaXatlVvCy36oZK4Y1+qNycpsBs19FzrpJ9L6Hp6STGtgy1bxbeRmiTaHmYeMzMFNp3CA3nfGzDFtkWemg+nkk8JSw13SsQ+j+ObeFOYt1XXOjh6Nul3o7OmulIDPPGsGqKcojhDXE1PQ9PRJWC0uvT/2dBFc1pZMuVdE226d+0TAWGd2GRVdiiU/dAP0j2052lNOQRj1LH56fDMLgTAW6T+Ib2P+SwhUMQ7u02OgScOzXxGJJEfC0NwDpPJzRc8ULjfXc01nhA3sy5iIfi8zn0EtBSIw+Ht6sLyq4eR+e7i+j8cA5dHyiEeXdJoHaoHmrltyseuGKh54o7WmsXwt91Gs4neuLrfV/sWuQLreb7HZLvguYxGS4Kb54eg6+7He7ucUb5Ne9/FpRHwWnfU6z4lths5kfaR9R9gL5tOaXhkIXHqHD4coC204WfC7sZS/Z8SCz1QHOtF7RqrjXjMUZsf07P9uXlaQz1bp1c2NJwLhKNT5bgdXUQXlfNxtuq+XhdGYb6yuV4WbUcK+e4YNOmTcJPRo1y6ZwQPCkMQEPVPDonlJZhuJnmIXQS4+MVFqw0s6amCkmxS9D8WrpXIEOoKSr0QGqMHw4eTIavjw8y9rrgyy1vHI0Ihl5rO4nFj4BRT2JoZ6DpXSYcHe1x8/pVpG3zQnHRPxW5BjQ33UBhYYHQIcy2k1gNEtavwY0MX7whW76qXEScj5LLoeBfRLS0KUcSO5c44E1lqKDD66qZZs4iPRbh0cWgyXUS42nAuenqW+QWA0vw9HBS6f6pkxj3D0qJW4LuZumZRxRC5bw3dm/0Ex6Qf/7Di16Si4f80JjjgqS1odDrfnAfI2MLoJ6Lzx/PwdnZYWz606o9Xigtmv+NPkV6tH+5i3t3eRTexOD6XilbWc8Kxp3EpNJZ0xq2TtEUg/uy7t86G91ttrNgCoIWupKg41V/HJ9xD7nLp/zw9JQXzmzlX4b4Qb0A9eTsaYPR00VGd7YjX2E8VHq/1xtVdyImyKEGtL1JR+MzrmH7ufjpgjJUKhX2bAqBqlfcT0ch66Yc6k6Ciqv+uD+vq4szKi4EofaoJ9J384+r/2+iGg1K+m7ORK88j14YR/McDuPXfJXkjfKiMElBP7+7jZbmX6PjmK2g2h5ydekDrrKlkagf+Ai1ed6BMegpyDafYxw0LQ207JO1mxP8Mzi2SzuwhDzY8S4dpuYzN+zZYluXy0MO3Zwd8aF4Fkp2O+HykW02FR6Thr6Xigp6oZRX4O3lKEywaI33+71RfSfERtDPTcfxvPw7ciY7TcMmWwpUmuyl7LCeSkdncqbomCVH7cvnKjto3Qo2guoVG+gPLqaT5hHnExcSVwD8y7hD8yG/64FbVmGLYTCW3m5Ov4i4gNItgK7Lh5yl7wtbBvp6Kd6MhUpOLxVB1d+J4RpfnNlPoZJE1V9b6zuU7HGk2G43bsW4oizfVoh/BE/VNkL3bCzD6YO+2LSOf6PbFoOV/qh7bDkUwoCR4SOoKf6+YYyarnT6ewH0cGxjCl/YZn3zkRxiNU5FSy+22sN0fEwHJvklbOPeuQjzmYRTZBqSX0Tk1hYmhy38LeGK8jMYbp2N07OnQV03C5rmFRRvRkI3MoeOsfPAHcR43p7r0Mo2w9PVibyyDPDExyMjX2jZTfxqxR5oNGpatkFNsVdZcQxWh3kI8wgNtqdRED4Hw/1z0ZxHwsl8ASbPhaDwo5c4kv4WV16QI6Lbie4CN2ibZsDYF01cD0PfBhh7adlLS/kG07IvHMYBdyI5ISoymD6UxORuI7cw3BSIfnouY98ySr+e0hCV60mFPZTmDvraVsCLivrP766jsT4ZmSkeqLy5Cxo1PYdGQ8/YLjyH9TOanr1TWFd+IkEMPFkWN4Zzywmvn0Jlgh3qjzlC83kJNJ/WQKOcAYOej7MWbPvRJZ93F0OTbW15eSISZYXkShcE477AUNwi3i+Yibu0HTXbEXPnzhUmqBrlrGAfFJ7xFdIX5wYJzDJ3EuMBvP+WD+7eQeYGezSVrqRQaDvePNtF3EGMw7vqLfhYmowPj9PRVBaGL4/9oVFx3MbF3z1aP4C3tfF4+Tger2vj8L4qDq+fxNG5Cehv5z6/POtIDfT6GsibNqPp7my63iZiEl17O94+4b+XSIwnHsfL0uO4kOQhdBKTutfJcnfMVhTs90RRwQzcvxKIe1f8cem0vzA4ytKmPG9xwiJ7lOb5o7gg0KwFM4TOm4uslOlCZb01bARNSkoSWkm+xQcPeETaOA4dOiSZbt26deYU/w4qRTMCfT0kry1FH9dpkDVyqLQHEUF2gvGl0oUFutG3KATa4RiEz3YRxohIpbMmX48nKv5fevAXFhZKXtu6wxd3EpNKZ01r2DpFvwgM5DxkZSV/l/H4OzvdeRr6W2ZjHwXlJfckpm3jQbSyaBIzG4tDnTEzJAT9/ba/XiEFdroupJ1Exd0TwiycvyJ+TUENw8g6s0MIZ74Xp06dgi+Jqnwfjj1z7NHaaPVDONpd4N8ri15Lb3iAP4UpE//GzEQozD2Biiu76RtHnugvBltBue6xv1xMhWlpJGq7yyleFPcWN+r7yYGwPqcaso7vH9tiNGqRk71u7Edh/w34GzTT0x6Db8KwM8ge3Z/NI8S1RyiDJmP/zkXC4KfRDtLfC86pqSm78OmlePavycBooBBvUGwrtmvPe+sfAKIQjBwsy3SW5HO639K6FWwE1fXwzFVbiORBCqQwRuggxh2aVqH7kTsKMtJg1NKNcfxJN6hXxZCxyDseiSJXm9NvFMa2fO9MYkbjCK4WnpWe7Pg7wWNW5053hOLlLDw74EIPtpeMuQtHD4cJVWZfv/wPA6kI3NXk8MEEvK34vgk7htpPk61GO4mxnaMpTIzEvmA76EfInjoTjdpPQhWkYH81pRF0IJ9khMKqkXjyAeYhZDKdxOQldKIwnoI7hXHIwvFfKpHntzuKobY5ODRzGjqfBEP+YQnkbSuh4h/uEYbic9jC5xZCQyGCt5sbXtXeIYE+QiZrEpbSbCPKkZFxRPgBux8BbiDfuHEjlgc5Q0seL4xPkZmxDW5urvTN/DFtqlwXfWDHWtSV55qfo5r43rw+zvFn/wBl/Wp6G3hEOPcO5LEr3HpyCvc326FityPkLxZCXh+Jvq/+0Ks5DU+FwHXnbFsmv0AlGOqPmVzYUnwkEtl/B+DsUR+iHzEA6Ud9cSo1kJZBmBfoiBUrVgiV5aOcO8MfJ3d54yylyaL0Z48GYv8aV6GTGFcyT5b/tlvHROBctGZ1BA5tdMT1rOlwsLfH28YG89EfAxZV6lkmYsqe3TgU44X0VH+cIjudJhsf2+krtLZY2pQ7y60KcsC51CBcSA0WdGC7Zh2djoxjATgY6z65sCUjIwPh4eHfpOWPuTL4Jxil0u2R+MX5qcbIsIzeZDuhQxUP5//Z4HFBUrbinpSWYB9CKp01rWHrFP1WGMHDuxvR0NAg5NbtsRvxrOh/n6TqV8ZvLKgOr18V4tmz8enO+buanBCBuhLbeuHfBbaCjpABenMBGVFu5ug6LUeayQH4+tWc2AQDdyzry4VxND3R0JWL9zX/Wyexfw2jDh8/XBBa/q3BE0TtjQ7FxzquG5168IRSUI7bSWBPLj6XW/1El1FN3i8dY9uTbYWlhSbG7ly0PaJ1K9gIOiIjF1noHLaPSN6YQPoW6hLJA9iLN5dtO4lp5WvJA4mnNORNCp3L9kErm4+5wf9bJ7F/Bz2+tJ3H/fvSP9fBUA+rkBLjj55msS8wFRhqo7BlZI1gI8FeOrLXcALCpMa2DHrT8WRzWrarmdrDdCwRAe6TcIr67nHYwm8vu9Q8jx53UGIBeQKLA2gr8UeYjzOqrofhyb35eFXFU3370DHuWMYuuKlDE3cSc3N1QXHhSbxrvI53by7RMhvv3p758Xw3uryJ8tLjuHGDO6x9G4ODg0hY44WG6gt03rXxa/wXFK59Du/fXkdPOU+PzjZie5o7fhnSEBMwDWcTfVFfuggvHsWh9cVKGNQU3wtjYEY7hzGPErmTWNzkwpbGjDV4XjkHtdXBxFmorZqB2ho/WvrhadUsRM5zFHq1P3r0aIzL587Ag2u+qH1C6SspPaW7edxdGC7Q3v4Zz2vLBH5ubRLc/P+K7S1NaHz10vwk/wwW9e3LxxhQ9Ete70exqakBT2tq0PLpI3ZvWY2i885ko1DBTk+rA/EwPwBO9tNENs25cAF7ltjj2ROy55MQ0oI5kxhAnI37OTNFv8w/ChtBeQ49645I1rSem5ZnH5NKx81sfyAG/9C7lK2YluCKFqk01rSGrVP0B/+n8UfQ3wx/BP3N8EfQ3wx/BP3N8EfQ3ww/SVA9FC9u4mzKTsTHxQljY+IT9uNUXinahrmztBGa7ipcST+AxHjT8bj4HTh05hpqZQP4UpaHtH0J5nPjsX3338i+9QKKCTvPG6GqSkRC+aDUxOFiGNVoK0pGRAiP1PaBb/BCbD1+Cy/bXuHC4UoMChfQQ/4gBQnme/82E3G0tI/OmBr81BxqVNcj1tX0gzLBuXLbhzYM4O4Ce+G44+oKqCzU0MvzMEP4MRoXbK1Xf1sogxw5gZQ24ALk37KscRiv9vjA3m018lqGwAPe9UNf8DB1Ppz5bwVfx4Dwh0bwYo0THGck4sKdUlRUVaPq3gH4cBr7uUh/VI3qqscoLjyOtb52cN74BlPVpeznFrlGJW4GsyjO2PpO6pF1+HLYUxDUN7NHLLj2A2Jd+Nxg3DBZeUJoPyfBQxDfAwc+T9yxS9d+DN5/2WNpxZDVC6JD97lgEnBUUDVqt8ahamg8lXGoBLP4bzhvgeWjGJXF2BRbR6/A1OAnC6rC3RA2tAvimqSGBerQftRLEHT6OascrP2I7YKgM1BkKgelQbnu6TpP+IS4Cddx2vACasnkVCw/mElp7LGk3FpQvkwNNq+6ZRZUg/aqz6LrTCQoHcCHyi5M1cTqv72gBsUNhHlvRl33PSywo/R283FPKZ1+5EUkHAVRwpH3dUQsKt1rXW6dqNi3xISCTjF+c0H16EwLgF/qV+jI2amPdhKu5X9OJr7WKLStSPHlazLdsPh4NeTaiV8WS/wRlDEmqAPmn3kk9FUSsxyX1rgIBv5XgmreIt5nNgr6TPP56NoOmr6l7vvROkEZyBNX7vK3M4vKAoVi1602qP9hyqU/gjLGBLWD/5YUHD9+3Iqp2D7T4V8KSt/ER8vhvaYKY77LqLf7lxPWPf+GZ6wfQH3GKnhN47QmOgTvRlmfZL4W8EdQxn9Z5LJ4wS4ITSuxyPGVuJFoup5d2B1M8Ckdg175Bjkb/WBvFvUvt214auHZWuKPoIz/UFDt5wPw9V6Dw2mnhPEuYzyegBB7Ps8PWTJxjjMMdUM+Yn0tA1SvT2CWcA7dh3X4ZMYfQRn/laBCqOKNxfeVEsWqFq373YVruu9tEYUTmoZdiKseljjHgIFbc2BH5zhEvJCMKf8IyjAOomiGSdDYDxMIesRUsTD9rJVnqm0aE/S2VdlpUFxHmM9WvJogmucfbPdn4ztG4olQ1WiC5tV6eC95IFkUa1v2wJ3O8T7ROUEOLTYJ6rQZb/+/FVTfg0whTHDA6hdS1tfg3VZnQVCPQ19IXguM1GG1A5/rj5xeCxfUOIJ3Ozzgsv7VxNVt+m6c8uFz6UVJax+7ruZVFMWhjph/7pO48sE4hNoYV3oBluKOQtrdNfTmwI8FtVuCJ1P/i15j+EmC6qF4dh1Ze+bBiY3ApO/dkYslaB1mgxmh6apAwamtCODKAD5uH4yYtAJU9wyg7dFl/L3OF9PM5zrNSUT61afoG3iHS9tDTJUDjqHYnv4A7VbfROPIV9w/EQkv87lcOszdcRH1SgMVudsQvCAKK2f5wN13HtYlHkDKwUSsDnKBo3ckLn22qmxgGJRouH0eSQtM4dVff02Dz7rjuFz6ZYIaqf8WPzeH/mIwDMvQpzGpYBjpQ+vLJ3hcUYPXXwYwyfqFn44/gv5m+CPobwXg/wEXbR3M0YcdMgAAAABJRU5ErkJggg=="/>
                </div>
            </div>
          </div>
          <div class="text-center" style="margin: 40px 0;">
           ${
             spec == "مشترك"
               ? ` <h3>
            أسماء طلاب السنة ${specYear} ${spec}
            </h3>`
               : `<h3>
                 أسماء طلاب السنة ${specYear} اختصاص ${spec}
               </h3>`
           }
          </div>
          <div class="text-center" style="margin: 40px 0;">
            <h3>للعام الدراسي ${eduYear}</h3>
          </div>
        <div class="row">
          <div class="col-xs-4" style="text-align: right;">
          المادة:
          </div>
          <div class="col-xs-4" style="text-align: right;">
          الفصل:
          </div>
          <div class="col-xs-4" style="text-align: right;">
          اسم المدرّس
          </div>
        </div>
        <div class="container">
          <div class="row">
          <table class="table table-bordered">
              <thead>
                  <tr>
                    <td>مسلسل</td>
                    <td>الرقم الذاتي</td>
                    <td>الاسم والشهرة</td>
                    <td colspan="7"></td>
                  </tr>
              </thead>
              <tbody> 
                  ${candidates.map((e, index) => {
                    return `<tr> 
                      <td>${index + 1}</td>
                      <td>${e.personal_number}</td>
                      <td> 
                      ${e.person?.first_name} ${e.father?.first_name} ${
                      e.person?.last_name
                    }
                      </td>
                      <td colspan="7"></td>
                    </tr>`;
                  })}
              </tbody>
          </table>
          </div>
        </div>
        </body>
        </html>
    `;
};
