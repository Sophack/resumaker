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
      <PDFViewer>
        <Document>
            <Page>
                <Text>Hello</Text>
            </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
