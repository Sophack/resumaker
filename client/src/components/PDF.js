import React from 'react';
import {
    PDFViewer,
    Document,
    Page,
    Text,
} from "@react-pdf/renderer";

export default function PDF() {
  return (
    <div>
      <PDFViewer className='PDFcontainer'>
        <Document>
            <Page className="PDFtext">
                <Text className="PDFtext">This is the PDF renderer</Text>
            </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
