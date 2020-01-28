const bodyParser = require("body-parser");
const express = require("express");
let fs = require("fs"),
  PDFParser = require("pdf2json");
const app = express();

app.use(bodyParser.json());

app.get("/reader/:start?/:end?", (req, res) => {
  let pdfParser = new PDFParser();

  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
  pdfParser.on("pdfParser_dataReady", pdfData => {
    let start = req.params.start ? req.params.start : 0;
    let end = req.params.end ? req.params.end : pdfData.formImage.Pages.length;
    let index = 0;
    let newData = {
      data: []
    };

    for (let startPage = start; start <= end; start++) {
        newData.data.push(
            {
            content: [],
            idPage: Number(start) + 1 
            }
        );
        let elements = newData.data[index];
        for (let j = 0; j < pdfData.formImage.Pages[start].Texts.length; j++) {
            elements.content.push(decodeURI(pdfData.formImage.Pages[start].Texts[j].R[0].T));
            
        }
        index++;
        
    }
    res.send(newData);
  });

  pdfParser.loadPDF("./bel_ami_chall48.pdf");
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening`, process.env.PORT || 3000);
});
