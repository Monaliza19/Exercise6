import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const App = () => {
  const data = {
    accounts: [
      { ID: 1, Username: 'Teacher 1', PASSWORD: 'Pass1', USERTYPE: 'Teacher' },
      { ID: 2, Username: 'Student 2', PASSWORD: 'Pass2', USERTYPE: 'Student' },
      { ID: 3, Username: 'Teacher 3', PASSWORD: 'Pass3', USERTYPE: 'Teacher' },
      { ID: 4, Username: 'Student 4', PASSWORD: 'Pass4', USERTYPE: 'Student' },
      { ID: 5, Username: 'Teacher 5', PASSWORD: 'Pass5', USERTYPE: 'Teacher' },
      { ID: 6, Username: 'Student 6', PASSWORD: 'Pass6', USERTYPE: 'Student' },
      
    ],
    users: [
      { ID: 1, FIRSTNAME: 'Mona', LASTNAME: 'Reyes',   COURSE: 'BEED',YEAR: '2018', SECTION: 'A-1' },
      { ID: 2, FIRSTNAME: 'Marie', LASTNAME: 'Lie',   COURSE: 'TVL',  YEAR: '2019',  SECTION: 'A-2' },
      { ID: 3, FIRSTNAME: 'Mike',  LASTNAME: 'Mith', COURSE: ' BUSINESS', YEAR: '2020',  SECTION: 'B-1' },
      { ID: 4, FIRSTNAME: 'Jessel', LASTNAME: 'Hary', COURSE: 'ENGINEERING', YEAR: '2021',  SECTION: 'B-2' },
      { ID: 5, FIRSTNAME: 'Miko',   LASTNAME: 'Libron', COURSE: 'ARTS', YEAR: '2022',  SECTION: 'C-1' },
      { ID: 6, FIRSTNAME: 'Mae',   LASTNAME: 'Lhioe', COURSE: 'HUMANITIES', YEAR: '2023',  SECTION: 'C-2' },

    ],
    students: [
      { ID: 1, NAME: 'Mona Reyes',  COURSE: 'BEED' },
      { ID: 2, NAME: 'Marie Lie',   COURSE: 'TVL' },
      { ID: 3, NAME: 'Mike Mith',   COURSE: 'BUSINESS' },
      { ID: 4, NAME: 'Jessel Hary', COURSE: 'ENGINEERING' },
      { ID: 5, NAME: 'Miko Libron', COURSE: 'ARTS' },
      { ID: 6, NAME: 'Mae Lhioe',   COURSE: 'HUMANITIES' },


      

  ],

  };

  const renderTable = (tableData, columnNames, numRows) => (
    <View>
      <Table borderStyle={{ borderWidth: 0 }}>
        <Row
          data={columnNames}
          widthArr={Array(columnNames.length).fill(100)}
          style={{ height:50, backgroundColor: 'skyblue', justifyContent: 'center' }}
          textStyle={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}
        />
        {tableData.slice(0, numRows).map((rowData, index) => (
          <Row
            key={rowData.ID}
            data={columnNames.map((columnName) => rowData[columnName])}
            widthArr={Array(columnNames.length).fill(100)}
            style={{
              height: 30,
              backgroundColor: index % 3 === 1 ? 'pink' : '#FFC0CB',
              justifyContent: 'center',
            }}
            textStyle={{ textAlign: 'center', fontWeight: '50', color: 'black' }}
          />
        ))}
      </Table>
    </View>
  );

  return (
    <ScrollView>
      <View>
        <Text style={styles.tableHeader}>ACCOUNTS TABLE</Text>
        {renderTable(data.accounts, ['ID', 'Username', 'PASSWORD', 'USERTYPE'], 6)}
      </View>
      <View>
        <Text style={styles.tableHeader}>USERS TABLE</Text>
        {renderTable(data.users, ['ID', 'FIRSTNAME', 'LASTNAME', 'COURSE', 'YEAR', 'SECTION'], 6)}
      </View>
      <View>
        <Text style={styles.tableHeader}>STUDENTS TABLE</Text>
        {renderTable(data.students, ['ID', 'NAME', 'COURSE'] , 6)}
      </View>
    </ScrollView>
  );
};

const styles = {
  tableHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#8B00FF',
  },
};

export default App;