import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page>
      <View>
        <Text>Hello, world!</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;