import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Permissions from 'react-native-permissions';

function App() {


  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  const orderLines = [
    {
      id: 1,
      header: 'EMPLOYEE ID',
      product: 'RTS/ST/230110',
      quantity: 'EMPLOYEE NAME',
      price: 'Duddu Koti',
    },
    {
      id: 2,
      header: 'DESIGNATION',

      product: 'React Native Developer',
      quantity: 'DEPARTMENT',
      price: 'Software ',
    },
    {
      id: 3,
      header: 'PAN',
      product: 'EKYPD4100C',
      quantity: 'MONTH/YEAR',
      price: 'Feb-24',
    },
    {
      id: 4,
      header: 'ACCOUNT NUMBER',
      product: '50100584537741',
      quantity: ' BANK NAME',
      price: 'HDFC',
    },
    {
      id: 5,
      header: 'DAY S IN MONTH',
      product: '31',
      quantity: 'PRESENT DAY S',
      price: '31',
    },
  ];

  const orderLines2 = [
    {
      id: 1,
      header: 'BASIC',
      product: '10000',
      quantity: 'PROFESSIONAL TAX',
      price: '150',
    },
    {
      id: 2,
      header: 'HRA',
      product: '4000',
      quantity: 'LOP',
      price: '',
    },
    {
      id: 3,
      header: 'SPECIAL ALLOWANCE',
      product: '1000',
      quantity: '',
      price: '',
    },
    {
      id: 4,
      header: 'IA',
      product: '1000',
      quantity: '',
      price: '',
    },
    {
      id: 5,
      header: 'MEDICAL',
      product: '4000',
      quantity: '',
      price: '',
    },
    {
      id: 6,
      header: 'OTHER',
      product: '5000',
      quantity: '',
      price: '',
    },
    {
      id: 7,
      header: 'TOTAL',
      product: '25000',
      quantity: 'TOTAL',
      price: '150',
    },
  ];


  

  const generatePDF = async () => {
    setIsLoading(true);

    


    try {
     


      const html = `
        <html>
          <head>
          <style>
          body { font-family: 'Helvetica'; font-size: 12px; padding:40px ;border:4px solid black; margin: 20px; }
          header, footer { height: 40px; background-color: #fff; color: #000; display: flex; justify-content: center;padding: 0 30px   }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #000; padding: 5px; text-align: center;
          vertical-align: middle; }
          th { background-color: #ccc; }
          h5 { margin-bottom: 55px; } 

        </style>
          </head>
          <body>
          <div style="display: flex; justify-content: space-between;">
                  <div style="width: 20%;"> 
                    <img src="https://raicetechsoft.com/assets/img/logo.jpeg" alt="Rts Logo" style="width: 100%;">
                  </div>
                  <div style="width: 80%; text-align: center;"> 
                    <header>
                      <h1>RAICETECH SOFT PRIVATE LIMITED</h1>
                    </header>
                    <header>
                      <h5   style="width: 75%; text-align: center;" >3rd Floor, LP Tower, Opposite Melange Towers, Ratnadeep Beside Lane High-Tech City, Madhapur, Hyderabad, Telangana 500081</h5>
                    </header>
                  </div>
                </div>
        
            
             <h3 style="border-bottom: 2px solid #000000; width: 100%; text-align: center;margin-bottom:25px;">SALARY SLIP</h3>

             <table>
             ${orderLines
               .map(
                 line => `
                 <tr>
                 <td><strong>${line.header}</strong></td>
                 <td>${line.product}</td>
                 <td><strong>${line.quantity}</strong></td>
                 <td>${line.price}</td>
               </tr>
               
             `,
               )
               .join('')}
           </table>
            
           <br />

            <table style="margin-top:25px ">
            <tr>
            <th colspan="2">EARNINGS</th>
            <th colspan="2">DEDUCTIONS</th>
          </tr>
             
              ${orderLines2
                .map(
                  line => `
                <tr>
                  <td>${line.header}</td>
                  <td>${line.product}</td>
                  <td>${line.quantity}</td>
                  <td>${line.price}</td>
                </tr>
              `,
                )
                .join('')}
            </table>

             <table style="margin-top:30px" >
               <tr> 
               <td style="width:30% ;text-align: center;" > NET SALARY </td>
               <td style="width:65% ; text-align: center;"> 24850</td>
               </tr>
               <tr> 
               <td style="width:30% ;text-align: center;"> SALARY IN WORDS </td>
               <td style="width:65%;text-align: center;"> TWENTY-FOUR  THOUSAND EIGHT HUNDRED FIFTY RUPEES ONLY</td>
               </tr>
              </table>

            
              <div style="display: flex; justify-content: center; align-items: center;">
              <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin-top: 30px;">
                <label>SALARY PAID BY:</label>
                <div style="display: flex; align-items: center;">
                  <input type="checkbox" id="bike1">
                  <label for="bike1" style="margin-left: 5px;">CASH</label>
                </div>
                <div style="display: flex; align-items: center;">
                  <input type="checkbox" id="bike2">
                  <label for="bike2" style="margin-left: 5px;">CHEQUE</label>
                </div>
                <div style="display: flex; align-items: center;">
                <input type="checkbox" id="bike3" checked>
                <label for="bike3" style="margin-left: 5px;">NEFT</label>
              </div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 50px; display: flex; justify-content: space-around;">
            <div style="display: flex; align-items: center;">
                <span>EMPLOYEE SIGNATURE</span>
                <div style="border-bottom: 1px solid black; width: 150px; margin-left: 10px;margin-top:5px;"></div>
            </div>
            <div style="display: flex; align-items: center;">
                <span>DIRECTOR</span>
                <div style="border-bottom: 1px solid black; width: 150px; margin-left: 10px;margin-top:5px"></div>
            </div>
        </div>



        
          </body>
        </html>
      `;

      const options = {
        html,
        fileName: `invoice_${count}`,
        directory: 'docs',
      };

      const file = await RNHTMLtoPDF.convert(options);

      // Request permission to write to external storage
      const granted = await Permissions.request(
        'android.permission.WRITE_EXTERNAL_STORAGE',
      );
      if (granted !== 'granted') {
        throw new Error('Storage Permission Denied');
      }

      const downloadsPath = `${RNFS.ExternalStorageDirectoryPath}/Download/invoice_${count}.pdf`;
      await RNFS.moveFile(file.filePath, downloadsPath);

      Alert.alert('Success', `PDF saved to Downloads`);
      setCount(count + 1);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Generating Pay Slip...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={generatePDF}>
        <Text style={styles.text}>Pay Slip</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aac',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  button: {
    backgroundColor: '#6c8ee3',
    padding: 15,
    paddingHorizontal:30,
    borderRadius: 10,
    margin: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aac'
  },loadingText:{
    fontSize:25,
    fontWeight:'600'
  }
});

export default App;
