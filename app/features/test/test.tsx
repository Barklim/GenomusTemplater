// import React from 'react';

// class Test extends React.Component {

//   render() {

//     return (
//       <div className="ImportTablePage">
//         TESTSTSER
//       </div>
//     );
//   }
// }

// export default Test;




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { PDFViewer } from '@react-pdf/renderer';

// const Test = () => (
//   <PDFViewer>
//     <MyDocument />
//   </PDFViewer>
// );x

// ReactDOM.render(<App />, document.getElementById('root'));




    // <Button variant="warning" >Export</Button>

    // <PDFViewer>
    //   <Text style={styles.header} fixed>
    //     ~ Created with react-pdf ~
    //   </Text>
    //  </PDFViewer>

        //     <Document>
        //   <Page >
        //     <Text fixed>
        //       ~ Created with react-pdf ~
        //     </Text>
        //    </Page>
        // </Document>

      //         <Document>
      //   <Page size="A4" >
      //     <View >
      //       <Text>Section #1</Text>
      //     </View>
      //     <View>
      //       <Text>Section #2</Text>
      //     </View>
      //   </Page>
      // </Document>







import React from 'react';
// import Button from 'react-bootstrap/Button';

// import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';

export const Test = () => {

    return (
      <Document>
        <Page size="A4" >
          <View >
            <Text>Section #1</Text>
          </View>
          <View>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    )
}

// ReactPDF.render(<Test />, `${__dirname}/example.pdf`);