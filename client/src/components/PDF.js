import React from 'react';
import {
    PDFViewer,
    Document,
    Page,
    Text,
    View, 
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: '#f0eefd' },
  section: { color: '#252a89', textAlign: 'center', margin: 'auto' },

  text: {
    color: '#0765f3', 
    fontSize: '40px',
  },

  section: {
    width: 400,
    '@media max-width: 400': {
      width: 300,
    },
    '@media orientation: landscape': {
      width: 400,
    },
  }
});

export default function PDF() {
  return (
    <div>
      
      
      <PDFViewer className='PDFcontainer'>
      <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Resumaker Template</Text>
      </View>
    </Page>
  </Document>
      </PDFViewer>



    </div>
  )
}