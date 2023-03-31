import React from 'react';
import {
    PDFViewer,
    Document,
    Page,
    Text,
} from "@react-pdf/renderer";
import Modal from '@mui/material/Modal'; 

export default function PDF() {
  return (
    <div>
      
      <Modal>
      <PDFViewer className='PDFcontainer' title="PDF">
        <h1 className='PDFtext'>Hello</h1>
        <Document className="PDFtext">
            <Page className="PDFtext" title="PDF">
                <Text className="PDFtext">This is the PDF renderer</Text>
            </Page>
        </Document>
      </PDFViewer>
      </Modal>
    </div>
  )
}
