var smallsql = {
	"name_of_project": "TEST_smallProject",
	"duplicates_percentage": "9.74269298000",
	"total_duplicates_lines": "2340",
	"loc_project": "24018",
	"number_of_clones": "2340",
	"number_of_classes": "195",
	"biggest_clone_lines": "116",
	"biggest_clone_class": "4",
	"example_clones": {
		"clone_1": {
			"lines": "20-28",
			"code_lines": "a( '01000',    0, SYNTAX, 'SELECT {ts '2020-02-30 12:30:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {d '2021-02-29'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {d '2021-22-09'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '24:30:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '12:60:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '12:30:65.000'}'),ELITSAa( '01000',    0, SYNTAX,  'SELECT * FROM exceptions JOIN'),ELITSAa( '01000',    0, SYNTAX,  'select 10/2,'),ELITSA",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptions.java|"
		},
		"clone_2": {
			"lines": "95-107",
			"code_lines": "a('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'},  20)'     , '1999-10-12 15:14:13'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'},  21)'     , '1999-10-12 15:14:13.123'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 100)'     , getMonth3L(10) + ' 12 1999 03:14PM'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 101)'     , '10/12/1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 102)'     , '1999.10.12'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 103)'     , '12/10/1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 104)'     , '12.10.1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 105)'     , '12-10-1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 106)'     , '12 ' + getMonth3L(10) + ' 1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 107)'     , getMonth3L(10) + ' 12, 1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 108)'     , '15:14:13'),ELITSAa('convert(varchar(30), {ts '1999-10-12  3:14:13.123456'}, 109)'     , getMonth3L(10) + ' 12 1999 03:14:13:123AM'),ELITSA",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java|"
		},
		"clone_3": {
			"lines": "26-34",
			"code_lines": "a('nvarchar(100)'     , new String('abc'),      new String('qwert')),ELITSAa('varchar2(100)'     , new String('abc'),      new String('qwert')),ELITSAa('nvarchar2(100)'    , new String('abc'),      new String('qwert')),ELITSAa('character(100)'    , new String('abc'),      new String('qwert')),ELITSAa('char(100)'         , new String('abc'),      new String('qwert')),ELITSAa('nchar(100)'        , new String('abc'),      new String('qwert')),ELITSAa('text'              , new String('abc'),      new String('qwert')),ELITSAa('ntext'             , new String('abc'),      new String('qwert')),ELITSA",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestJoins.java|"
		},
		"clone_4": {
			"lines": "53-68",
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();ELITSA}ELITSAfor(int i = 0; i < threadList.size(); i++){ELITSAThread thread = (Thread)threadList.get(i);ELITSAthread.join(5000);ELITSA}ELITSAif(throwable != null){ELITSAthrow throwable;ELITSA}ELITSA",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestThreads.java|"
		},
		"clone_5": {
			"lines": "31-39",
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table Scrollable (i counter, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from Scrollable');ELITSAcon.createStatement().execute('Insert Into Scrollable(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from Scrollable');ELITSAassertRowCount( 0, 'Select * from Scrollable Where 1=0');ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSA",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java|"
		}
	},
	"files": [{
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptions.java|",
		"loc": "89",
		"clones": [{
			"start_line": 20,
			"end_line": 28,
			"code_lines": "a( '01000',    0, SYNTAX, 'SELECT {ts '2020-02-30 12:30:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {d '2021-02-29'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {d '2021-22-09'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '24:30:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '12:60:15.000'}'),ELITSAa( '01000',    0, SYNTAX, 'SELECT {t '12:30:65.000'}'),ELITSAa( '01000',    0, SYNTAX,  'SELECT * FROM exceptions JOIN'),ELITSAa( '01000',    0, SYNTAX,  'select 10/2,'),ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java|",
		"loc": "370",
		"clones": [{
			"start_line": 95,
			"end_line": 107,
			"code_lines": "a('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'},  20)'     , '1999-10-12 15:14:13'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'},  21)'     , '1999-10-12 15:14:13.123'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 100)'     , getMonth3L(10) + ' 12 1999 03:14PM'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 101)'     , '10/12/1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 102)'     , '1999.10.12'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 103)'     , '12/10/1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 104)'     , '12.10.1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 105)'     , '12-10-1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 106)'     , '12 ' + getMonth3L(10) + ' 1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 107)'     , getMonth3L(10) + ' 12, 1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 108)'     , '15:14:13'),ELITSAa('convert(varchar(30), {ts '1999-10-12  3:14:13.123456'}, 109)'     , getMonth3L(10) + ' 12 1999 03:14:13:123AM'),ELITSA"
		}, {
			"start_line": 107,
			"end_line": 115,
			"code_lines": "a('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 109)'     , getMonth3L(10) + ' 12 1999 03:14:13:123PM'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 110)'     , '10-12-1999'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 111)'     , '1999/10/12'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 112)'     , '19991012'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 113)'     , '12 ' + getMonth3L(10) + ' 1999 15:14:13:123'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 114)'     , '15:14:13:123'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 120)'     , '1999-10-12 15:14:13'),ELITSAa('convert(varchar(30), {ts '1999-10-12 15:14:13.123456'}, 121)'     , '1999-10-12 15:14:13.123'),ELITSA"
		}, {
			"start_line": 125,
			"end_line": 135,
			"code_lines": "a('-convert(decimal(38,6), '11.123456')'         , new BigDecimal('-11.123456')),ELITSAa('convert(decimal(38,6), '11.123456') + 1'         , new BigDecimal('12.123456')),ELITSAa('convert(decimal(38,6), '11.123456') - 1'         , new BigDecimal('10.123456')),ELITSAa('convert(decimal(12,2), '11.0000') * 1'         , new BigDecimal('11.00')),ELITSAa('convert(decimal(12,2), '11.0000') * convert(decimal(12,2), 1)'         , new BigDecimal('11.0000')),ELITSAa('convert(decimal(12,2), '11.0000') / 1'         , new BigDecimal('11.0000000')),ELITSAa('convert(decimal(12,0), 11) / convert(decimal(12,2), 1)'         , new BigDecimal('11.000000')),ELITSAa('convert(money, -10000 / 10000.0)'         , new BigDecimal('-1.0000')),ELITSAa('-convert(money, '11.123456')'         , new BigDecimal('-11.1235')),ELITSAa('-convert(smallmoney, '11.123456')'     , new BigDecimal('-11.1235')),ELITSA"
		}, {
			"start_line": 159,
			"end_line": 166,
			"code_lines": "a('{fn TimestampAdd(SQL_TSI_QUARTER,  1, {d '2004-10-17'})}'        , Timestamp.valueOf('2005-01-17 00:00:00.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_MONTH,    1, {d '2004-10-17'})}'        , Timestamp.valueOf('2004-11-17 00:00:00.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_WEEK,     1, {d '2004-10-17'})}'        , Timestamp.valueOf('2004-10-24 00:00:00.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_HOUR,     1, {d '2004-10-17'})}'        , Timestamp.valueOf('2004-10-17 01:00:00.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_MINUTE,  61, {d '2004-10-17'})}'        , Timestamp.valueOf('2004-10-17 01:01:00.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_SECOND,  61, {d '2004-10-17'})}'        , Timestamp.valueOf('2004-10-17 00:01:01.0')),ELITSAa('{fn TimestampAdd(SQL_TSI_FRAC_SECOND,1,{d '2004-10-17'})}'       , Timestamp.valueOf('2004-10-17 00:00:00.001')),ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/BasicTestCase.java|",
		"loc": "282"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestJoins.java|",
		"loc": "156",
		"clones": [{
			"start_line": 26,
			"end_line": 34,
			"code_lines": "a('nvarchar(100)'     , new String('abc'),      new String('qwert')),ELITSAa('varchar2(100)'     , new String('abc'),      new String('qwert')),ELITSAa('nvarchar2(100)'    , new String('abc'),      new String('qwert')),ELITSAa('character(100)'    , new String('abc'),      new String('qwert')),ELITSAa('char(100)'         , new String('abc'),      new String('qwert')),ELITSAa('nchar(100)'        , new String('abc'),      new String('qwert')),ELITSAa('text'              , new String('abc'),      new String('qwert')),ELITSAa('ntext'             , new String('abc'),      new String('qwert')),ELITSA"
		}, {
			"start_line": 40,
			"end_line": 46,
			"code_lines": "a('varbinary(100)'    , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('raw(100)'          , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('long raw'          , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('longvarbinary'     , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('blob'              , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('image'             , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestThreads.java|",
		"loc": "111",
		"clones": [{
			"start_line": 53,
			"end_line": 68,
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();ELITSA}ELITSAfor(int i = 0; i < threadList.size(); i++){ELITSAThread thread = (Thread)threadList.get(i);ELITSAthread.join(5000);ELITSA}ELITSAif(throwable != null){ELITSAthrow throwable;ELITSA}ELITSA"
		}, {
			"start_line": 77,
			"end_line": 85,
			"code_lines": "Statement st = con.createStatement();ELITSAtry{ELITSAst.execute('CREATE TABLE ConcurrentWrite( value int)');ELITSAst.execute('INSERT INTO ConcurrentWrite(value) Values(0)');ELITSAfor(int i = 0; i < 200; i++){ELITSAThread thread = new Thread(new Runnable(){ELITSApublic void run(){ELITSAtry{ELITSA"
		}, {
			"start_line": 90,
			"end_line": 110,
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();ELITSA}ELITSAfor(int i = 0; i < threadList.size(); i++){ELITSAThread thread = (Thread)threadList.get(i);ELITSAthread.join(5000);ELITSA}ELITSAif(throwable != null){ELITSAthrow throwable;ELITSA}ELITSAassertEqualsRsValue(new Integer(200), 'SELECT value FROM ConcurrentWrite');ELITSA}finally{ELITSAdropTable(con, 'ConcurrentWrite');ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java|",
		"loc": "229",
		"clones": [{
			"start_line": 31,
			"end_line": 39,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table Scrollable (i counter, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from Scrollable');ELITSAcon.createStatement().execute('Insert Into Scrollable(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from Scrollable');ELITSAassertRowCount( 0, 'Select * from Scrollable Where 1=0');ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSA"
		}, {
			"start_line": 57,
			"end_line": 65,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table Scrollable (i counter, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from Scrollable');ELITSAcon.createStatement().execute('Insert Into Scrollable(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from Scrollable');ELITSAassertRowCount( 0, 'Select * from Scrollable Where 1=0');ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSA"
		}, {
			"start_line": 79,
			"end_line": 86,
			"code_lines": "try{ELITSArs.getString('v');ELITSAfail('SQLException 'No current row' should be throw');ELITSA}catch(SQLException ex){ELITSAassertSQLException('01000', 0, ex);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 87,
			"end_line": 95,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table Scrollable (i counter, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from Scrollable');ELITSAcon.createStatement().execute('Insert Into Scrollable(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from Scrollable');ELITSAassertRowCount( 0, 'Select * from Scrollable Where 1=0');ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSA"
		}, {
			"start_line": 110,
			"end_line": 117,
			"code_lines": "try{ELITSArs.getString('v');ELITSAfail('SQLException 'No current row' should be throw');ELITSA}catch(SQLException ex){ELITSAassertSQLException('01000', 0, ex);ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java|",
		"loc": "613",
		"clones": [{
			"start_line": 89,
			"end_line": 107,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by v');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSAString newValue = rs.getString('v');ELITSAassertTrue( oldValue + '<' + newValue, oldValue.compareTo( newValue ) < 0 );ELITSAoldValue = newValue;ELITSAcount++;ELITSA}ELITSA"
		}, {
			"start_line": 110,
			"end_line": 124,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by v ASC');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSAString newValue = rs.getString('v');ELITSA"
		}, {
			"start_line": 125,
			"end_line": 131,
			"code_lines": "oldValue = newValue;ELITSAcount++;ELITSA}ELITSArs.close();ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 132,
			"end_line": 140,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by v desc');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSA"
		}, {
			"start_line": 154,
			"end_line": 175,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by v desc, i asc');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAint count = 1;ELITSAwhile(oldValue != null && rs.next()){ELITSAString newValue = rs.getString('v');ELITSAif(newValue != null){ELITSAassertTrue( oldValue.compareTo( newValue ) > 0 );ELITSAcount++;ELITSA}ELITSAoldValue = newValue;ELITSA}ELITSAassertNull(oldValue);ELITSAassertFalse( rs.next() );ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 176,
			"end_line": 189,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT first(v) cc FROM ' + table1 + ' Group By i ORDER  by first(V)');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('cc');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('cc');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSA"
		}, {
			"start_line": 202,
			"end_line": 212,
			"code_lines": "assertTrue( rs.next() );ELITSAoldValue = rs.getString('v');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSAassertTrue( oldValue.compareTo( rs.getString('v') ) < 0 );ELITSAoldValue = rs.getString('v');ELITSAcount++;ELITSA}ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 213,
			"end_line": 226,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by nv');ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('nv');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = rs.getString('nv');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSA"
		}, {
			"start_line": 300,
			"end_line": 319,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAInteger oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by i Asc');ELITSAassertTrue( rs.next() );ELITSAoldValue = (Integer)rs.getObject('i');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = (Integer)rs.getObject('i');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSAassertTrue( oldValue.compareTo( (Integer)rs.getObject('i') ) < 0 );ELITSAoldValue = (Integer)rs.getObject('i');ELITSAcount++;ELITSA}ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 320,
			"end_line": 328,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAInteger oldValue;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by i Desc');ELITSAassertTrue( rs.next() );ELITSAoldValue = (Integer)rs.getObject('i');ELITSA"
		}, {
			"start_line": 331,
			"end_line": 341,
			"code_lines": "if(newValue != null){ELITSAassertTrue( oldValue.compareTo( newValue ) > 0 );ELITSAcount++;ELITSA}ELITSAoldValue = newValue;ELITSA}ELITSAassertNull(oldValue);ELITSAassertFalse( rs.next() );ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 402,
			"end_line": 415,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSALong oldValue;ELITSArs = st.executeQuery('SELECT bi/2 bi_2 FROM ' + table1 + ' ORDER  by (bi/2)');ELITSAassertTrue( rs.next() );ELITSAoldValue = (Long)rs.getObject('bi_2');ELITSAassertNull(oldValue);ELITSAassertTrue( rs.next() );ELITSAoldValue = (Long)rs.getObject('bi_2');ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSA"
		}, {
			"start_line": 466,
			"end_line": 474,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSArs = st.executeQuery('SELECT * FROM ' + table3 + ' ORDER  by vb');ELITSAassertTrue( rs.next() );ELITSAassertNull( rs.getObject('vb') );ELITSAassertTrue( rs.next() );ELITSA"
		}, {
			"start_line": 542,
			"end_line": 564,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSAResultSet rs;ELITSAint count;ELITSArs = st.executeQuery('SELECT * FROM ' + table1 + ' ORDER  by i desc, d');ELITSArs.next();ELITSArs.next();ELITSArs.previous();ELITSArs.last();ELITSAcount = 0;ELITSAwhile(rs.previous()) count++;ELITSAassertEquals( valueCount, count );ELITSArs.beforeFirst();ELITSAcount = -1;ELITSAwhile(rs.next()) count++;ELITSAassertEquals( valueCount, count );ELITSArs.beforeFirst();ELITSAcount = -1;ELITSAwhile(rs.next()) count++;ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 604,
			"end_line": 610,
			"code_lines": "while(rs.next()){ELITSAString newValue = rs.getString('v');ELITSAassertTrue( oldValue.compareTo( newValue ) < 0 );ELITSAoldValue = newValue;ELITSAcount++;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java|",
		"loc": "231",
		"clones": [{
			"start_line": 107,
			"end_line": 113,
			"code_lines": "try{ELITSAst.execute('ALTER TABLE DuplicatedColumn Add Col INT');ELITSAfail('SQLException 'Duplicated Column' should be throw');ELITSA}catch(SQLException e){ELITSAassertSQLException('01000', 0, e);ELITSA}ELITSA"
		}, {
			"start_line": 109,
			"end_line": 117,
			"code_lines": "fail('SQLException 'Duplicated Column' should be throw');ELITSA}catch(SQLException e){ELITSAassertSQLException('01000', 0, e);ELITSA}ELITSA}finally{ELITSAdropTable(con, 'DuplicatedColumn');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 118,
			"end_line": 132,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAStatement st = con.createStatement();ELITSAst.execute('Create Table DuplicatedColumn(col INT)');ELITSAtry{ELITSAst.execute('INSERT INTO DuplicatedColumn(col,Col) Values(1,2)');ELITSAfail('SQLException 'Duplicated Column' should be throw');ELITSA}catch(SQLException e){ELITSAassertSQLException('01000', 0, e);ELITSA}ELITSA}finally{ELITSAdropTable(con, 'DuplicatedColumn');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 139,
			"end_line": 145,
			"code_lines": "try{ELITSAst.execute('Create Table DuplicatedTable(col INT primary key)');ELITSAfail('SQLException 'Duplicated Table' should be throw');ELITSA}catch(SQLException e){ELITSAassertSQLException('01000', 0, e);ELITSA}ELITSA"
		}, {
			"start_line": 168,
			"end_line": 174,
			"code_lines": "fail('SQLException 'Ambiguous name' should be throw');ELITSA}catch(SQLException e){ELITSAassertSQLException('01000', 0, e);ELITSA}ELITSA}finally{ELITSAdropTable(con, 'foo');ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java|",
		"loc": "185",
		"clones": [{
			"start_line": 62,
			"end_line": 68,
			"code_lines": "rs.beforeFirst();ELITSAassertTrue('isBeforeFirst', rs.isBeforeFirst() );ELITSAassertFalse('isAfterLast', rs.isAfterLast() );ELITSAassertEquals('getRow', 0, rs.getRow() );ELITSAassertTrue('next', rs.next() );ELITSAassertTrue('isFirst', rs.isFirst() );ELITSA"
		}, {
			"start_line": 69,
			"end_line": 89,
			"code_lines": "assertEquals('getRow', 1, rs.getRow() );ELITSAassertTrue('isLast', rs.isLast() );ELITSAassertFalse('next', rs.next() );ELITSAassertFalse('isBeforeFirst', rs.isBeforeFirst() );ELITSAassertTrue('isAfterLast', rs.isAfterLast() );ELITSAassertEquals('getRow', 0, rs.getRow() );ELITSAassertTrue('first', rs.first() );ELITSAassertEquals('getRow', 1, rs.getRow() );ELITSAassertFalse('previous', rs.previous() );ELITSAassertEquals('getRow', 0, rs.getRow() );ELITSAassertTrue('isBeforeFirst', rs.isBeforeFirst() );ELITSAassertFalse('isAfterLast', rs.isAfterLast() );ELITSAassertTrue('last', rs.last() );ELITSAassertEquals('getRow', 1, rs.getRow() );ELITSAassertTrue('isLast', rs.isLast() );ELITSArs.afterLast();ELITSAassertFalse('isBeforeFirst', rs.isBeforeFirst() );ELITSAassertTrue('isAfterLast', rs.isAfterLast() );ELITSAassertEquals('getRow', 0, rs.getRow() );ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestOther.java|",
		"loc": "227",
		"clones": [{
			"start_line": 19,
			"end_line": 26,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table TestDistinct (i counter, v varchar(20), n bigint, b boolean)');ELITSAassertRowCount( 0, 'Select * From TestDistinct' );ELITSAcon.createStatement().execute('Insert Into TestDistinct(v,b) Values('qwert1',true)');ELITSAcon.createStatement().execute('Insert Into TestDistinct(v,b) Values('qwert2',true)');ELITSAcon.createStatement().execute('Insert Into TestDistinct(v,b) Values('qwert1',true)');ELITSA"
		}, {
			"start_line": 81,
			"end_line": 87,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table TestInSelect (i counter, v varchar(20), n bigint, b boolean)');ELITSAassertRowCount( 0, 'Select * From TestInSelect WHere i In (Select i from TestInSelect)' );ELITSAcon.createStatement().execute('Insert Into TestInSelect(v,b) Values('qwert1',true)');ELITSAassertRowCount( 1, 'Select * From TestInSelect WHere i In (Select i from TestInSelect)' );ELITSA"
		}, {
			"start_line": 143,
			"end_line": 149,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table CharEqualsVarchar (c char(10))');ELITSAassertRowCount( 0, 'Select * From CharEqualsVarchar' );ELITSAcon.createStatement().execute('Insert Into CharEqualsVarchar(c) Values('qwert1')');ELITSAassertRowCount( 1, 'Select * From CharEqualsVarchar' );ELITSA"
		}, {
			"start_line": 169,
			"end_line": 176,
			"code_lines": "con.createStatement().execute('Insert Into Like(c) Values('qwert1')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('qwert2')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('qwert2.5')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('awert1')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('awert2')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('awert3')');ELITSAcon.createStatement().execute('Insert Into Like(c) Values('qweSGSGSrt1')');ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/AllTests.java|",
		"loc": "71"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestOperatoren.java|",
		"loc": "208",
		"clones": [{
			"start_line": 7,
			"end_line": 21,
			"code_lines": "private static final TestValue[] TESTS = new TestValue[]{ELITSAa('tinyint'           , new Byte( (byte)3),     new Byte( (byte)4)),ELITSAa('byte'              , new Byte( (byte)3),     new Byte( (byte)4)),ELITSAa('smallint'          , new Short( (short)3),   new Short( (short)4)),ELITSAa('int'               , new Integer(3),         new Integer(4)),ELITSAa('bigint'            , new Long(3),            new Long(4)),ELITSAa('real'              , new Float(3.45),        new Float(4.56)),ELITSAa('float'             , new Float(3.45),        new Float(4.56)),ELITSAa('double'            , new Double(3.45),       new Double(4.56)),ELITSAa('smallmoney'        , new Float(3.45),        new Float(4.56)),ELITSAa('money'             , new Float(3.45),        new Float(4.56)),ELITSAa('money'             , new Double(3.45),       new Double(4.56)),ELITSAa('numeric(19,2)'     , new BigDecimal('3.45'), new BigDecimal('4.56')),ELITSAa('decimal(19,2)'     , new BigDecimal('3.45'), new BigDecimal('4.56')),ELITSA"
		}, {
			"start_line": 25,
			"end_line": 40,
			"code_lines": "a('nvarchar(100)'     , new String('abc'),      new String('qwert')),ELITSAa('varchar2(100)'     , new String('abc'),      new String('qwert')),ELITSAa('nvarchar2(100)'    , new String('abc'),      new String('qwert')),ELITSAa('character(100)'    , new String('abc'),      new String('qwert')),ELITSAa('char(100)'         , new String('abc'),      new String('qwert')),ELITSAa('nchar(100)'        , new String('abc'),      new String('qwert')),ELITSAa('text'              , new String('abc'),      new String('qwert')),ELITSAa('ntext'             , new String('abc'),      new String('qwert')),ELITSAa('date'              , new Date(99, 1,1),      new Date(99, 2,2)),ELITSAa('time'              , new Time(9, 1,1),       new Time(9, 2,2)),ELITSAa('timestamp'         , new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),ELITSAa('datetime'          , new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),ELITSAa('smalldatetime'     , new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),ELITSAa('binary(100)'       , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('varbinary(100)'    , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSA"
		}, {
			"start_line": 41,
			"end_line": 50,
			"code_lines": "a('raw(100)'          , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('long raw'          , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('longvarbinary'     , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('blob'              , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('image'             , new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa('boolean'           , Boolean.FALSE,          Boolean.TRUE),ELITSAa('bit'               , Boolean.FALSE,          Boolean.TRUE),ELITSAa('uniqueidentifier'  , '12345678-3445-3445-3445-1234567890ab',      '12345679-3445-3445-3445-1234567890ac'),ELITSA};ELITSA"
		}, {
			"start_line": 52,
			"end_line": 68,
			"code_lines": "this.testValue = testValue;ELITSA}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('drop table ' + table);ELITSAst.close();ELITSA}catch(Throwable e){ELITSA}ELITSA}ELITSApublic void setUp(){ELITSAtearDown();ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSA"
		}, {
			"start_line": 71,
			"end_line": 92,
			"code_lines": "pr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.large);ELITSApr.execute();ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.small);ELITSApr.execute();ELITSApr.setObject( 1, testValue.large);ELITSApr.setObject( 2, testValue.large);ELITSApr.execute();ELITSApr.setObject( 1, testValue.large);ELITSApr.setObject( 2, testValue.small);ELITSApr.execute();ELITSApr.setObject( 1, null);ELITSApr.setObject( 2, testValue.small);ELITSApr.execute();ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, null);ELITSApr.execute();ELITSApr.setObject( 1, null);ELITSApr.setObject( 2, null);ELITSApr.execute();ELITSA"
		}, {
			"start_line": 96,
			"end_line": 103,
			"code_lines": "}ELITSApublic void runTest() throws Exception{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSArs = st.executeQuery('Select * from ' + table + ' where 1 = 0');ELITSAassertFalse( 'To many rows', rs.next() );ELITSA"
		}, {
			"start_line": 108,
			"end_line": 117,
			"code_lines": "assertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a <= b and b <= a');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertEqualsObject( 'Values not equals', rs.getObject(1), rs.getObject(2), false);ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertEqualsObject( 'Values not equals', rs.getObject(1), rs.getObject(2), false);ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where (a > (b))');ELITSAassertTrue( 'To few rows', rs.next() );ELITSA"
		}, {
			"start_line": 121,
			"end_line": 127,
			"code_lines": "assertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where not (a >= b)');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSA"
		}, {
			"start_line": 125,
			"end_line": 131,
			"code_lines": "assertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a < b');ELITSAassertTrue( 'To few rows', rs.next() );ELITSA"
		}, {
			"start_line": 128,
			"end_line": 135,
			"code_lines": "assertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a < b');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a < b or a>b');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSA"
		}, {
			"start_line": 133,
			"end_line": 145,
			"code_lines": "assertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a <= b');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSArs = st.executeQuery('Select * from ' + table + ' where a <> b');ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSA"
		}, {
			"start_line": 160,
			"end_line": 179,
			"code_lines": "assertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSApr.close();ELITSApr = con.prepareStatement('Select * from ' + table + ' where a in(?,?)');ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.large);ELITSArs = pr.executeQuery();ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertTrue( 'To few rows', rs.next() );ELITSAassertFalse( 'To many rows', rs.next() );ELITSApr.close();ELITSApr = con.prepareStatement('Select * from ' + table + ' where a not in(?,?)');ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.large);ELITSArs = pr.executeQuery();ELITSA"
		}, {
			"start_line": 194,
			"end_line": 208,
			"code_lines": "}ELITSAprivate static TestValue a(String dataType, Object small, Object large){ELITSATestValue value = new TestValue();ELITSAvalue.dataType  = dataType;ELITSAvalue.small     = small;ELITSAvalue.large     = large;ELITSAreturn value;ELITSA}ELITSAprivate static class TestValue{ELITSAString dataType;ELITSAObject small;ELITSAObject large;ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java|",
		"loc": "279",
		"clones": [{
			"start_line": 27,
			"end_line": 39,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('drop table ' + table);ELITSAst.close();ELITSA}catch(Throwable e){ELITSA}ELITSA}ELITSApublic void setUp(){ELITSAtearDown();ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestDBMetaData.java|",
		"loc": "217"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestStatement.java|",
		"loc": "242",
		"clones": [{
			"start_line": 3,
			"end_line": 12,
			"code_lines": "private static boolean init;ELITSAprotected void setUp() throws Exception{ELITSAif(init) return;ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAdropTable( con, 'statement');ELITSAst.execute('Create Table statement (c varchar(30), i counter)');ELITSAinit = true;ELITSA}ELITSA"
		}, {
			"start_line": 196,
			"end_line": 202,
			"code_lines": "assertEquals(1,pr.executeUpdate());ELITSArs = pr.getGeneratedKeys();ELITSAassertNotNull('RETURN_GENERATED_KEYS', rs);ELITSAassertEquals('ColumnCount',1,rs.getMetaData().getColumnCount());ELITSAassertEquals('ColumnCount','i',rs.getMetaData().getColumnName(1));ELITSAassertRowCount(1,rs);ELITSA"
		}, {
			"start_line": 209,
			"end_line": 215,
			"code_lines": "assertEquals(1,pr.executeUpdate());ELITSArs = pr.getGeneratedKeys();ELITSAassertNotNull('RETURN_GENERATED_KEYS', rs);ELITSAassertEquals('ColumnCount',1,rs.getMetaData().getColumnCount());ELITSAassertEquals('ColumnCount','i',rs.getMetaData().getColumnName(1));ELITSAassertRowCount(1,rs);ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java|",
		"loc": "185",
		"clones": [{
			"start_line": 83,
			"end_line": 89,
			"code_lines": "try {ELITSAstat.execute('Some nonsensical sentence.');ELITSA}ELITSAcatch (SQLException se) {ELITSAassertMessage(se, 'Errore di sintassi alla posizione 0 in 'Some'. Le parole chiave richieste sono');ELITSA}ELITSA"
		}, {
			"start_line": 90,
			"end_line": 102,
			"code_lines": "try {ELITSAstat.execute('SELECT bar() FROM foo');ELITSA}ELITSAcatch (SQLException se) {ELITSAassertMessage(se, 'Errore di sintassi alla posizione 7 in 'bar'. Funzione sconosciuta');ELITSA}ELITSAtry {ELITSAstat.execute('SELECT UCASE('a', '');');ELITSA}ELITSAcatch (SQLException se) {ELITSAassertMessage(se, 'Errore di sintassi alla posizione 7 in 'UCASE'. Totale parametri non valido.');ELITSA}ELITSA"
		}, {
			"start_line": 101,
			"end_line": 107,
			"code_lines": "}ELITSA}ELITSAfinally {ELITSAconn.close();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 153,
			"end_line": 161,
			"code_lines": "if (diff.size() > 0) {ELITSAfailed = true;ELITSAmsgBuf.append('\nAdditional entries for language ').append( OTHER_LANGUAGES[i] ).append(': ');ELITSAfor (Iterator itr = diff.iterator(); itr.hasNext(); ) {ELITSAmsgBuf.append(itr.next());ELITSAif (itr.hasNext()) msgBuf.append(',');ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java|",
		"loc": "60",
		"clones": [{
			"start_line": 25,
			"end_line": 34,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('create table '+table+' (a varchar(2))');ELITSAst.execute('alter table '+table+' add b varchar(4) primary key');ELITSAResultSet rs = st.executeQuery('Select * From ' + table);ELITSAassertRSMetaData( rs, new String[]{'a', 'b'},  new int[]{Types.VARCHAR, Types.VARCHAR} );ELITSArs = con.getMetaData().getIndexInfo( null, null, table, false, false );ELITSAassertRowCount( 1, rs );ELITSA}ELITSA"
		}, {
			"start_line": 50,
			"end_line": 57,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('create table '+table+' (a varchar(2) unique)');ELITSAst.execute('alter table '+table+' add b varchar(4) primary key');ELITSAResultSet rs = st.executeQuery('Select * From ' + table);ELITSAassertRSMetaData( rs, new String[]{'a', 'b'},  new int[]{Types.VARCHAR, Types.VARCHAR} );ELITSArs = con.getMetaData().getIndexInfo( null, null, table, false, false );ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java|",
		"loc": "96",
		"clones": [{
			"start_line": 5,
			"end_line": 12,
			"code_lines": "public void setUp(){ELITSAtearDown();ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('create table ' + table + '(i int, v varchar(100))');ELITSAst.execute('Insert into ' + table + ' Values(1,'abc')');ELITSA"
		}, {
			"start_line": 11,
			"end_line": 21,
			"code_lines": "st.execute('Insert into ' + table + ' Values(1,'abc')');ELITSAst.execute('Insert into ' + table + ' Values(2,'bcd')');ELITSAst.execute('Insert into ' + table + ' Values(3,'cde')');ELITSAst.execute('Insert into ' + table + ' Values(4,'def')');ELITSAst.execute('Insert into ' + table + ' Values(5,'efg')');ELITSAst.execute('Insert into ' + table + ' Values(6,'fgh')');ELITSAst.execute('Insert into ' + table + ' Values(7,'ghi')');ELITSAst.execute('Insert into ' + table + ' Values(8,'hij')');ELITSAst.execute('Insert into ' + table + ' Values(9,'ijk')');ELITSAst.execute('Insert into ' + table + ' Values(10,'jkl')');ELITSA"
		}, {
			"start_line": 19,
			"end_line": 26,
			"code_lines": "st.execute('Insert into ' + table + ' Values(9,'ijk')');ELITSAst.execute('Insert into ' + table + ' Values(10,'jkl')');ELITSAst.close();ELITSA}catch(Throwable e){ELITSAe.printStackTrace();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 25,
			"end_line": 33,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry {ELITSAdropTable( AllTests.getConnection(), table );ELITSA} catch (SQLException ex) {ELITSAex.printStackTrace();ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestIdentifer.java|",
		"loc": "21"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/BenchTest.java|",
		"loc": "589",
		"clones": [{
			"start_line": 93,
			"end_line": 101,
			"code_lines": "st.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 114,
			"end_line": 127,
			"code_lines": "rs.next();ELITSAint count = rs.getInt(1);ELITSAif (count != rowCount)ELITSASystem.out.println( '  Failed: Only ' + count + ' rows were inserted.');ELITSAelse System.out.println( '  Test time: ' + time + ' ms');ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 161,
			"end_line": 170,
			"code_lines": "else System.out.println( '  Test time: ' + time + ' ms');ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 197,
			"end_line": 203,
			"code_lines": "rs.insertRow();ELITSA}ELITSAtime += System.currentTimeMillis();ELITSArs = st.executeQuery( 'SELECT count(*) FROM ' + tableName);ELITSArs.next();ELITSAint count = rs.getInt(1);ELITSA"
		}, {
			"start_line": 215,
			"end_line": 221,
			"code_lines": "System.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 226,
			"end_line": 244,
			"code_lines": "try{ELITSAStatement st1 = con.createStatement();ELITSAResultSet rs = st1.executeQuery( 'SELECT count(*) FROM ' + tableName);ELITSArs.next();ELITSAint count = rs.getInt(1);ELITSAif (count != rowCount){ELITSAif (count == 0){ELITSAcreateTestDataWithClassicInsert( con );ELITSArs = st1.executeQuery( 'SELECT count(*) FROM ' + tableName);ELITSArs.next();ELITSAcount = rs.getInt(1);ELITSA}ELITSAif (count != rowCount){ELITSASystem.out.println( '  Failed: Only ' + (rowCount-count) + ' rows were found.');ELITSAreturn;ELITSA}ELITSA}ELITSAst1.close();ELITSA"
		}, {
			"start_line": 262,
			"end_line": 272,
			"code_lines": "time += System.currentTimeMillis();ELITSASystem.out.println( '  Test time: ' + time + ' ms');ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 335,
			"end_line": 342,
			"code_lines": "}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 349,
			"end_line": 370,
			"code_lines": "PreparedStatement pr = con.prepareStatement( 'exec sp_' + tableName + ' ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?' );ELITSAlong time = -System.currentTimeMillis();ELITSAfor (int i=0; i<rowCount; i++){ELITSApr.setBytes (  1, byteArray );ELITSApr.setString(  2 , 'Test' );ELITSApr.setDate  (  3 , new Date( System.currentTimeMillis() ) );ELITSApr.setFloat (  4, (float)1234.56789 );ELITSApr.setFloat (  5 , (float)9876.54321 );ELITSApr.setBytes (  6, largeByteArray );ELITSApr.setInt   (  7 , i );ELITSApr.setDouble(  8 , 23.45 );ELITSApr.setDouble(  9 , 567.45 );ELITSApr.setFloat (  10 , (float)78.89 );ELITSApr.setTime  (  11, new Time( System.currentTimeMillis() ) );ELITSApr.setShort (  12, (short)23456 );ELITSApr.setFloat (  13, (float)34.56 );ELITSApr.setString(  14, 'sysname (30) NULL' );ELITSApr.setString(  15 , 'text NULL' );ELITSApr.setByte  (  16, (byte)28 );ELITSApr.setBytes (  17, byteArray );ELITSApr.setString(  18, 'varchar (255) NULL' );ELITSA"
		}, {
			"start_line": 370,
			"end_line": 378,
			"code_lines": "int updateCount = pr.executeUpdate();ELITSAif (updateCount != 1){ELITSASystem.out.println( '  Failed: Update count should be 1 but it is ' + updateCount + '.');ELITSAreturn;ELITSA}ELITSA}ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println( '  Test time: ' + time + ' ms');ELITSA"
		}, {
			"start_line": 380,
			"end_line": 388,
			"code_lines": "pr.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 398,
			"end_line": 404,
			"code_lines": "pr.setBytes (  1, byteArray );ELITSApr.setString(  2 , 'Test' );ELITSApr.setDate  (  3 , new Date( System.currentTimeMillis() ) );ELITSApr.setFloat (  4, (float)1234.56789 );ELITSApr.setFloat (  5 , (float)9876.54321 );ELITSApr.setBytes (  6, largeByteArray );ELITSA"
		}, {
			"start_line": 405,
			"end_line": 417,
			"code_lines": "pr.setDouble(  8 , 23.45 );ELITSApr.setDouble(  9 , 567.45 );ELITSApr.setFloat (  10 , (float)78.89 );ELITSApr.setTime  (  11, new Time( System.currentTimeMillis() ) );ELITSApr.setShort (  12, (short)23456 );ELITSApr.setFloat (  13, (float)34.56 );ELITSApr.setString(  14, 'sysname (30) NULL' );ELITSApr.setString(  15 , 'text NULL' );ELITSApr.setByte  (  16, (byte)28 );ELITSApr.setBytes (  17, byteArray );ELITSApr.setString(  18, 'varchar (255) NULL' );ELITSApr.setInt   (  19 , i );ELITSA"
		}, {
			"start_line": 422,
			"end_line": 435,
			"code_lines": "return;ELITSA}ELITSA}ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println( '  Test time: ' + time + ' ms');ELITSApr.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 463,
			"end_line": 474,
			"code_lines": "}ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println( '  Test time: ' + time + ' ms');ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 495,
			"end_line": 502,
			"code_lines": "}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 503,
			"end_line": 514,
			"code_lines": "System.out.println();ELITSASystem.out.println( 'Test update large binary data with a SP: ' + rowCount + 'KB bytes');ELITSAtry{ELITSAjava.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+'.bin');ELITSAbyte bytes[] = new byte[1024];ELITSAfor(int i=0; i<rowCount; i++){ELITSAfos.write(bytes);ELITSA}ELITSAfos.close();ELITSAjava.io.FileInputStream fis = new java.io.FileInputStream(tableName+'.bin');ELITSAlong time = -System.currentTimeMillis();ELITSA"
		}, {
			"start_line": 521,
			"end_line": 534,
			"code_lines": "pr.close();ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println( '  Test time: ' + time + ' ms');ELITSAfis.close();ELITSAjava.io.File file = new java.io.File(tableName+'.bin');ELITSAfile.delete();ELITSA}catch(Exception e){ELITSASystem.out.println('  Failed:'+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println('===================================================================');ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 541,
			"end_line": 560,
			"code_lines": "'    bi  binary (255) NULL ,'+ELITSA'    c   nchar (255) NULL ,'+ELITSA'    d   datetime NULL ,'+ELITSA'    de  decimal(18, 0) NULL ,'+ELITSA'    f   float NULL ,'+ELITSA'    im  image NULL ,'+ELITSA'    i   int NULL ,'+ELITSA'    m   money NULL ,'+ELITSA'    n   numeric(18, 0) NULL ,'+ELITSA'    r   real NULL ,'+ELITSA'    sd  smalldatetime NULL ,'+ELITSA'    si  smallint NULL ,'+ELITSA'    sm  smallmoney NULL ,'+ELITSA'    sy  sysname NULL ,'+ELITSA'    t   ntext NULL ,'+ELITSA'    ti  tinyint NULL ,'+ELITSA'    vb  varbinary (255) NULL ,'+ELITSA'    vc  nvarchar (255) NULL, '+ELITSA'CONSTRAINT PK_BenchTest2 PRIMARY KEY CLUSTERED (pr) '+ELITSA"
		}, {
			"start_line": 571,
			"end_line": 577,
			"code_lines": "try{ELITSAStatement st = con.createStatement();ELITSAst.execute('drop table ' + tableName);ELITSAst.close();ELITSA}catch(Exception e){}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java|",
		"loc": "66",
		"clones": [{
			"start_line": 12,
			"end_line": 22,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute('drop table ' + table);ELITSAst.close();ELITSA}catch(Throwable e){ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java|",
		"loc": "263",
		"clones": [{
			"start_line": 91,
			"end_line": 97,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAPreparedStatement pr = con.prepareStatement('Select sum(id), name+'a' as ColumnName FROM ' + table1 + ' Group By name+'a' Order By Name+'a'');ELITSAfor(int i=1; i<=3; i++){ELITSAResultSet rs = pr.executeQuery( );ELITSAassertTrue  ( 'loop:'+i, rs.next());ELITSA"
		}, {
			"start_line": 104,
			"end_line": 110,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAPreparedStatement pr = con.prepareStatement('Select abs(sum(abs(3-id))+2) FROM ' + table1 + ' Group By name+'a' Order By 'b'+(Name+'a')');ELITSAfor(int i=1; i<=3; i++){ELITSAResultSet rs = pr.executeQuery( );ELITSAassertTrue  ( 'loop:'+i, rs.next());ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestDeleteUpdate.java|",
		"loc": "94",
		"clones": [{
			"start_line": 62,
			"end_line": 73,
			"code_lines": "assertRowCount( 10, 'Select * from testUpdate');ELITSAst.execute('update testUpdate set value1=1040 Where id=3');ELITSAassertEqualsRsValue( '1040', 'Select value1 from testUpdate Where id=3');ELITSAassertRowCount( 10, 'Select * from testUpdate');ELITSAst.execute('update testUpdate set value1=10400 Where id=3');ELITSAassertEqualsRsValue( '10400', 'Select value1 from testUpdate Where id=3');ELITSAassertRowCount( 10, 'Select * from testUpdate');ELITSAst.execute('update testUpdate set value1=13,id=3 Where id=3');ELITSAassertEqualsRsValue( '13', 'Select value1 from testUpdate Where id=3');ELITSAassertRowCount( 10, 'Select * from testUpdate');ELITSAst.execute('delete from testUpdate Where id=3');ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java|",
		"loc": "345",
		"clones": [{
			"start_line": 34,
			"end_line": 40,
			"code_lines": "con.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Select v From transactions');ELITSAassertRowCount( 2, 'Select * from transactions');ELITSA"
		}, {
			"start_line": 45,
			"end_line": 51,
			"code_lines": "try{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 52,
			"end_line": 58,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from transactions');ELITSA"
		}, {
			"start_line": 59,
			"end_line": 72,
			"code_lines": "con.createStatement().execute('Insert Into transactions(v) Select v From transactions');ELITSAassertRowCount( 2, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions (Select * From transactions)');ELITSAassertRowCount( 4, 'Select * from transactions');ELITSAcon.commit();ELITSAassertRowCount( 4, 'Select * from transactions');ELITSA}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 77,
			"end_line": 84,
			"code_lines": "assertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Select v From transactions');ELITSAassertRowCount( 2, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) (Select v From transactions)');ELITSAassertRowCount( 4, 'Select * from transactions');ELITSA"
		}, {
			"start_line": 86,
			"end_line": 93,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 94,
			"end_line": 105,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert')');ELITSAassertRowCount( 1, 'Select * from transactions');ELITSAcon.setAutoCommit(false);ELITSAcon.createStatement().execute('Insert Into transactions(v) Select v From transactions');ELITSAassertRowCount( 2, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) (Select v From transactions)');ELITSAassertRowCount( 4, 'Select * from transactions');ELITSA"
		}, {
			"start_line": 107,
			"end_line": 114,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 160,
			"end_line": 166,
			"code_lines": "assertEquals( 1, con.createStatement().executeUpdate('Update transactions set v='qwert1'') );ELITSAassertEqualsRsValue('qwert1', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSAassertEquals( 1, con.createStatement().executeUpdate('Update transactions set v='qwert2'') );ELITSAassertEqualsRsValue('qwert2', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSA"
		}, {
			"start_line": 174,
			"end_line": 181,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 197,
			"end_line": 203,
			"code_lines": "assertEquals(1, con.createStatement().executeUpdate('Update transactions set v='qwert 3''));ELITSAassertEqualsRsValue('qwert 3', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSAassertEquals(1, con.createStatement().executeUpdate('Update transactions set v='qwert 4''));ELITSAassertEqualsRsValue('qwert 4', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSA"
		}, {
			"start_line": 200,
			"end_line": 206,
			"code_lines": "assertEquals(1, con.createStatement().executeUpdate('Update transactions set v='qwert 4''));ELITSAassertEqualsRsValue('qwert 4', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSAassertEquals(1, con.createStatement().executeUpdate('Update transactions set v='qwert 5''));ELITSAassertEqualsRsValue('qwert 5', 'Select * from transactions');ELITSAassertEqualsRsValue(new Integer(1), 'Select count(*) from transactions');ELITSA"
		}, {
			"start_line": 216,
			"end_line": 222,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.setAutoCommit(false);ELITSAcon.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert')');ELITSA"
		}, {
			"start_line": 227,
			"end_line": 235,
			"code_lines": "rs.beforeFirst();ELITSAassertTrue( rs.next() );ELITSAassertEquals('qwert2', rs.getString('v'));ELITSAassertFalse( rs.next() );ELITSA}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSA"
		}, {
			"start_line": 231,
			"end_line": 238,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 240,
			"end_line": 259,
			"code_lines": "try{ELITSAcon.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon.createStatement().execute('Insert Into transactions(v) Values('qwert2')');ELITSAResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)ELITSA.executeQuery('Select * from transactions Where v = 'qwert'');ELITSArs.moveToInsertRow();ELITSArs.updateString('v', 'qwert');ELITSArs.insertRow();ELITSArs.beforeFirst();ELITSAassertTrue( rs.next() );ELITSAassertEquals('qwert', rs.getString('v'));ELITSAassertFalse( rs.next() );ELITSA}finally{ELITSAtry{ELITSAcon.createStatement().execute('Drop Table transactions');ELITSA}catch(Throwable e){e.printStackTrace();}ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 282,
			"end_line": 288,
			"code_lines": "con1.createStatement().execute('Create Table transactions (i int identity, v varchar(20))');ELITSAassertRowCount( 0, 'Select * from transactions');ELITSAcon1.setAutoCommit(false);ELITSAcon1.createStatement().execute('Insert Into transactions(v) Values('qwert2')');ELITSAResultSet rs2 = con2.createStatement().executeQuery('Select count(*) from transactions');ELITSAassertTrue( rs2.next() );ELITSA"
		}, {
			"start_line": 289,
			"end_line": 295,
			"code_lines": "}finally{ELITSAdropTable(con1, 'transactions');ELITSAcon1.setAutoCommit(true);ELITSAcon2.close();ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java|",
		"loc": "73",
		"clones": [{
			"start_line": 64,
			"end_line": 70,
			"code_lines": "'GROUP BY id ORDER BY id\r' +ELITSA'-- somment\r\n';ELITSAsuccessTest(SQL_1);ELITSAfinal String SQL_2 =ELITSA'SELECT 10/2 / * this must fail */';ELITSAfailureTest(SQL_2, 'Tokenized not-comment as a multiline-comment.');ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/tools/CommandLine.java|",
		"loc": "65"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MemoryStream.java|",
		"loc": "103"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1.java|",
		"loc": "61"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCeiling.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SQLParser.java|",
		"loc": "1668",
		"clones": [{
			"start_line": 851,
			"end_line": 858,
			"code_lines": "case SQLTokenizer.COMMA:ELITSAcontinue;ELITSAdefault:ELITSAthrow new Error();ELITSA}ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 1599,
			"end_line": 1605,
			"code_lines": "try{ELITSAint maxRows = Integer.parseInt(token.getName(sql));ELITSAselCmd.setMaxRows(maxRows);ELITSA}catch(NumberFormatException e){ELITSAthrow createSyntaxError(token, Language.STXADD_NOT_NUMBER, token.getName(sql));ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionExp.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableStorePage.java|",
		"loc": "31"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/DataSources.java|",
		"loc": "21"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLocate.java|",
		"loc": "19"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ViewResult.java|",
		"loc": "136"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionArithmetic.java|",
		"loc": "858",
		"clones": [{
			"start_line": 144,
			"end_line": 155,
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSAreturn getIntImpl();ELITSAcase SQLTokenizer.BIGINT:ELITSA"
		}, {
			"start_line": 158,
			"end_line": 164,
			"code_lines": "case SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSA"
		}, {
			"start_line": 182,
			"end_line": 195,
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSAreturn getIntImpl();ELITSAcase SQLTokenizer.BIGINT:ELITSAreturn getLongImpl();ELITSAcase SQLTokenizer.REAL:ELITSA"
		}, {
			"start_line": 196,
			"end_line": 202,
			"code_lines": "case SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSA"
		}, {
			"start_line": 223,
			"end_line": 243,
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSAreturn getIntImpl();ELITSAcase SQLTokenizer.BIGINT:ELITSAreturn getLongImpl();ELITSAcase SQLTokenizer.REAL:ELITSAreturn getFloatImpl();ELITSAcase SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSA"
		}, {
			"start_line": 377,
			"end_line": 409,
			"code_lines": "if(isNull()) return null;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? Boolean.TRUE : Boolean.FALSE;ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.VARBINARY:ELITSAreturn getBytes();ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSAreturn new Integer( getInt() );ELITSAcase SQLTokenizer.BIGINT:ELITSAreturn new Long( getLong() );ELITSAcase SQLTokenizer.REAL:ELITSAreturn new Float( getFloat() );ELITSAcase SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAreturn new Double( getDouble() );ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAreturn Money.createFromUnscaledValue( getMoney() );ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSAreturn getNumeric();ELITSAcase SQLTokenizer.CHAR:ELITSAcase SQLTokenizer.NCHAR:ELITSAcase SQLTokenizer.VARCHAR:ELITSAcase SQLTokenizer.NVARCHAR:ELITSAcase SQLTokenizer.LONGNVARCHAR:ELITSAcase SQLTokenizer.LONGVARCHAR:ELITSA"
		}, {
			"start_line": 417,
			"end_line": 426,
			"code_lines": "case SQLTokenizer.LONGVARBINARY:ELITSAreturn getBytes();ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAreturn new DateTime( getLong(), dataType );ELITSAcase SQLTokenizer.UNIQUEIDENTIFIER:ELITSAreturn getBytes();ELITSA"
		}, {
			"start_line": 579,
			"end_line": 589,
			"code_lines": "switch(operation){ELITSAcase IN:ELITSAcase EQUALS_NULL:ELITSAcase EQUALS:    return comp == 0;ELITSAcase GREATER:   return comp >  0;ELITSAcase GRE_EQU:   return comp >= 0;ELITSAcase LESSER:    return comp <  0;ELITSAcase LES_EQU:   return comp <= 0;ELITSAcase UNEQUALS:  return comp != 0;ELITSAcase BETWEEN:ELITSA"
		}, {
			"start_line": 601,
			"end_line": 611,
			"code_lines": "switch(operation){ELITSAcase IN:ELITSAcase EQUALS_NULL:ELITSAcase EQUALS:    return comp == 0;ELITSAcase GREATER:   return comp >  0;ELITSAcase GRE_EQU:   return comp >= 0;ELITSAcase LESSER:    return comp <  0;ELITSAcase LES_EQU:   return comp <= 0;ELITSAcase UNEQUALS:  return comp != 0;ELITSAcase BETWEEN:ELITSA"
		}, {
			"start_line": 674,
			"end_line": 680,
			"code_lines": "case OR:ELITSAcase AND:ELITSAcase NOT:ELITSAcase LIKE:ELITSAcase ISNULL:ELITSAcase ISNOTNULL:ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Table.java|",
		"loc": "391",
		"clones": [{
			"start_line": 222,
			"end_line": 228,
			"code_lines": "Iterator values = locks.values().iterator();ELITSAwhile(values.hasNext()){ELITSATableStorePage lock = (TableStorePage)values.next();ELITSAif(lock.con != con) return null;ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 237,
			"end_line": 248,
			"code_lines": "}ELITSAif(serializeConnections.size() > 0){ELITSAIterator values = locks.values().iterator();ELITSAwhile(values.hasNext()){ELITSATableStorePage lock = (TableStorePage)values.next();ELITSAif(lock.con != con) return null;ELITSA}ELITSA}ELITSAtabLockConnection = con;ELITSAtabLockCount++;ELITSATableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);ELITSA"
		}, {
			"start_line": 368,
			"end_line": 377,
			"code_lines": "}ELITSA}else{ELITSAprev.nextLock = lock.nextLock;ELITSA}ELITSAreturn;ELITSA}ELITSAprev = lock;ELITSAlock = lock.nextLock;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCharLen.java|",
		"loc": "14"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnInt.java|",
		"loc": "36"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionName.java|",
		"loc": "129"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSStatement.java|",
		"loc": "256"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandTable.java|",
		"loc": "78"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StorePage.java|",
		"loc": "42"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableViewResult.java|",
		"loc": "47"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMinute.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMonth.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfMonth.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexDescriptions.java|",
		"loc": "71"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TransactionStep.java|",
		"loc": "12"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSConnection.java|",
		"loc": "249"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StorePageLink.java|",
		"loc": "12"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MemoryResult.java|",
		"loc": "183"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Identity.java|",
		"loc": "73"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableResult.java|",
		"loc": "244"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Command.java|",
		"loc": "85"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampDiff.java|",
		"loc": "104",
		"clones": [{
			"start_line": 89,
			"end_line": 96,
			"code_lines": "if(isNull()) return null;ELITSAreturn new MutableNumeric(getInt());ELITSA}ELITSAObject getObject() throws Exception {ELITSAif(isNull()) return null;ELITSAreturn Utils.getInteger(getInt());ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandCreateView.java|",
		"loc": "16"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRight.java|",
		"loc": "25"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCase.java|",
		"loc": "116"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLCase.java|",
		"loc": "17"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionUCase.java|",
		"loc": "17",
		"clones": [{
			"start_line": 4,
			"end_line": 14,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAreturn getString().getBytes();ELITSA}ELITSAfinal String getString() throws Exception {ELITSAif(isNull()) return null;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/RowSource.java|",
		"loc": "49"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPower.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableViewMap.java|",
		"loc": "22"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SQLTokenizer.java|",
		"loc": "837"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionInsert.java|",
		"loc": "40"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionPI.java|",
		"loc": "10"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionIIF.java|",
		"loc": "65"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandDelete.java|",
		"loc": "16"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1Number.java|",
		"loc": "44"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSpace.java|",
		"loc": "24"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexDescription.java|",
		"loc": "162"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSDatabaseMetaData.java|",
		"loc": "664"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/FileIndex.java|",
		"loc": "40"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Join.java|",
		"loc": "161"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRepeat.java|",
		"loc": "30"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ForeignKey.java|",
		"loc": "16"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDegrees.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCos.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfWeek.java|",
		"loc": "10"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableDouble.java|",
		"loc": "25"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSCallableStatement.java|",
		"loc": "343",
		"clones": [{
			"start_line": 83,
			"end_line": 91,
			"code_lines": "try{ELITSAExpression expr = getValue(i);ELITSAwasNull = expr.isNull();ELITSAreturn expr.getLong();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 104,
			"end_line": 110,
			"code_lines": "wasNull = obj == null;ELITSAreturn obj;ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 143,
			"end_line": 149,
			"code_lines": "wasNull = obj == null;ELITSAreturn obj;ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SQLToken.java|",
		"loc": "22"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/FileIndexNode.java|",
		"loc": "48"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionCot.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StorePageMap.java|",
		"loc": "109"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTan.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/DataSource.java|",
		"loc": "27"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/View.java|",
		"loc": "74"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Utils.java|",
		"loc": "354",
		"clones": [{
			"start_line": 148,
			"end_line": 155,
			"code_lines": "StringBuffer buf = new StringBuffer(bytes.length << 1);ELITSAfor(int i=0; i<bytes.length; i++){ELITSAbuf.append( digits[ (bytes[i] >> 4) & 0x0F ] );ELITSAbuf.append( digits[ (bytes[i]     ) & 0x0F ] );ELITSA}ELITSAreturn buf.toString();ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java|",
		"loc": "101",
		"clones": [{
			"start_line": 60,
			"end_line": 72,
			"code_lines": "if(idx == -1){ELITSAif(status.nodeValue != null){ELITSAif(status.nodeValue instanceof IndexNode){ELITSAlevel++;ELITSAnodeStack.push(ELITSAnew IndexNodeScrollStatus(     (IndexNode)status.nodeValue,ELITSA(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR),ELITSAscroll, level));ELITSAcontinue;ELITSA}elseELITSAreturn getReturnValue(status.nodeValue);ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSoundex.java|",
		"loc": "75"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionChar.java|",
		"loc": "17"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionMod.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSPreparedStatement.java|",
		"loc": "227",
		"clones": [{
			"start_line": 156,
			"end_line": 168,
			"code_lines": "if(failed == null){ELITSAfailed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);ELITSAfailed.initCause(ex);ELITSA}ELITSAfailed.setNextException(ex);ELITSA}ELITSA}ELITSAbatches.clear();ELITSAif(failed != null)ELITSAthrow failed;ELITSAreturn result;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Index.java|",
		"loc": "368",
		"clones": [{
			"start_line": 33,
			"end_line": 42,
			"code_lines": "if(page == null)ELITSAreturn null;ELITSAif(i + 1 == count)ELITSAreturn page.getValue();ELITSAelseELITSApage = (IndexNode)page.getValue();ELITSA}ELITSAthrow new Error();ELITSA}ELITSA"
		}, {
			"start_line": 132,
			"end_line": 140,
			"code_lines": "break;ELITSAcase SQLTokenizer.BIGINT:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSA"
		}, {
			"start_line": 151,
			"end_line": 157,
			"code_lines": "break;ELITSAcase SQLTokenizer.VARBINARY:ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.LONGVARBINARY:ELITSAcase SQLTokenizer.BLOB:ELITSAcase SQLTokenizer.UNIQUEIDENTIFIER:ELITSA"
		}, {
			"start_line": 266,
			"end_line": 273,
			"code_lines": "node.addNode( digit, rowOffset );ELITSAreturn null;ELITSA}ELITSAreturn node.addRoot(digit);ELITSA}ELITSAnode = node.addNode(digit);ELITSAif(node.isEmpty()){ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSSavepoint.java|",
		"loc": "18"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionASin.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableNumeric.java|",
		"loc": "427",
		"clones": [{
			"start_line": 148,
			"end_line": 154,
			"code_lines": "if(num.scale < scale){ELITSAnum.setScale(scale);ELITSA}elseELITSAif(num.scale > scale){ELITSAsetScale(num.scale);ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Scrollable.java|",
		"loc": "146"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableView.java|",
		"loc": "97",
		"clones": [{
			"start_line": 30,
			"end_line": 36,
			"code_lines": "raFile = Utils.openRaFile( file, database.isReadOnly() );ELITSAByteBuffer buffer = ByteBuffer.allocate(8);ELITSAraFile.read(buffer);ELITSAbuffer.position(0);ELITSAint magic   = buffer.getInt();ELITSAint version = buffer.getInt();ELITSA"
		}, {
			"start_line": 50,
			"end_line": 60,
			"code_lines": "}catch(Throwable e){ELITSAif(raFile != null)ELITSAtry{ELITSAraFile.close();ELITSA}catch(Exception e2){ELITSADriverManager.println(e2.toString());ELITSA}ELITSAthrow SmallSQLException.createFromException(e);ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLog10.java|",
		"loc": "9"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexNodeScrollStatus.java|",
		"loc": "18"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/NoFromResult.java|",
		"loc": "77",
		"clones": [{
			"start_line": 59,
			"end_line": 66,
			"code_lines": "}ELITSAfinal boolean rowInserted(){ELITSAreturn false;ELITSA}ELITSAfinal boolean rowDeleted(){ELITSAreturn false;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSResultSetMetaData.java|",
		"loc": "244"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexNode.java|",
		"loc": "239"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLog.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandUpdate.java|",
		"loc": "36"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSDriver.java|",
		"loc": "72"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnString.java|",
		"loc": "37"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Columns.java|",
		"loc": "48"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/UnionAll.java|",
		"loc": "143"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLTrim.java|",
		"loc": "31",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRound.java|",
		"loc": "31"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Money.java|",
		"loc": "78"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Lobs.java|",
		"loc": "12"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionHour.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDayOfYear.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionDifference.java|",
		"loc": "21"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionYear.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSign.java|",
		"loc": "43"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionValue.java|",
		"loc": "564",
		"clones": [{
			"start_line": 146,
			"end_line": 156,
			"code_lines": "if(value == null){ELITSAif(expr.isNull())ELITSAdataType = expr.getDataType();ELITSAelseELITSAinitValue( expr );ELITSA}else if(!expr.isNull()){ELITSAswitch(dataType){ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSA"
		}, {
			"start_line": 358,
			"end_line": 367,
			"code_lines": "if(obj == null) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn (obj == Boolean.TRUE) ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:ELITSAcase SQLTokenizer.INT:ELITSAcase SQLTokenizer.BIGINT:ELITSA"
		}, {
			"start_line": 413,
			"end_line": 420,
			"code_lines": "if(obj == null) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAreturn (obj.equals(Boolean.TRUE)) ? 1 : 0;ELITSAcase SQLTokenizer.INT:ELITSAcase SQLTokenizer.BIGINT:ELITSAcase SQLTokenizer.DOUBLE:ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandDrop.java|",
		"loc": "40"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ColumnExpression.java|",
		"loc": "31"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/JoinScrollIndex.java|",
		"loc": "57"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Expressions.java|",
		"loc": "79"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnFloat.java|",
		"loc": "40"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSqrt.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/GroupResult.java|",
		"loc": "154"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Logger.java|",
		"loc": "18"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunction.java|",
		"loc": "59"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/language/Language.java|",
		"loc": "436",
		"clones": [{
			"start_line": 322,
			"end_line": 435,
			"code_lines": "{ CUSTOM_MESSAGE                     , '01000' },ELITSA{ UNSUPPORTED_OPERATION           , '01000' },ELITSA{ CANT_LOCK_FILE                  , '01000' },ELITSA{ DB_EXISTENT                     , '01000' },ELITSA{ DB_NONEXISTENT                  , '01000' },ELITSA{ DB_NOT_DIRECTORY                , '01000' },ELITSA{ DB_NOTCONNECTED                 , '01000' },ELITSA{ CONNECTION_CLOSED               , '01000' },ELITSA{ VIEW_INSERT                     , '01000' },ELITSA{ VIEWDROP_NOT_VIEW               , '01000' },ELITSA{ VIEW_CANTDROP                   , '01000' },ELITSA{ RSET_NOT_PRODUCED               , '01000' },ELITSA{ RSET_READONLY                   , '01000' },ELITSA{ RSET_FWDONLY                    , '01000' },ELITSA{ RSET_CLOSED                     , '01000' },ELITSA{ RSET_NOT_INSERT_ROW             , '01000' },ELITSA{ RSET_ON_INSERT_ROW              , '01000' },ELITSA{ ROWSOURCE_READONLY              , '01000' },ELITSA{ STMT_IS_CLOSED                  , 'HY010' },ELITSA{ SUBQUERY_COL_COUNT              , '01000' },ELITSA{ JOIN_DELETE                     , '01000' },ELITSA{ JOIN_INSERT                     , '01000' },ELITSA{ DELETE_WO_FROM                  , '01000' },ELITSA{ INSERT_WO_FROM                  , '01000' },ELITSA{ TABLE_CANT_RENAME               , '01000' },ELITSA{ TABLE_CANT_DROP                 , '01000' },ELITSA{ TABLE_CANT_DROP_LOCKED          , '01000' },ELITSA{ TABLE_CORRUPT_PAGE              , '01000' },ELITSA{ TABLE_MODIFIED                  , '01000' },ELITSA{ TABLE_DEADLOCK                  , '01000' },ELITSA{ TABLE_OR_VIEW_MISSING           , '01000' },ELITSA{ TABLE_FILE_INVALID              , '01000' },ELITSA{ TABLE_OR_VIEW_FILE_INVALID      , '01000' },ELITSA{ TABLE_EXISTENT                  , '01000' },ELITSA{ FK_NOT_TABLE                    , '01000' },ELITSA{ PK_ONLYONE                      , '01000' },ELITSA{ KEY_DUPLICATE                   , '01000' },ELITSA{ MONTH_TOOLARGE                  , '01000' },ELITSA{ DAYS_TOOLARGE                   , '01000' },ELITSA{ HOURS_TOOLARGE                  , '01000' },ELITSA{ MINUTES_TOOLARGE                , '01000' },ELITSA{ SECS_TOOLARGE                   , '01000' },ELITSA{ MILLIS_TOOLARGE                 , '01000' },ELITSA{ DATETIME_INVALID                , '01000' },ELITSA{ UNSUPPORTED_CONVERSION_OPER     , '01000' },ELITSA{ UNSUPPORTED_DATATYPE_OPER       , '01000' },ELITSA{ UNSUPPORTED_DATATYPE_FUNC       , '01000' },ELITSA{ UNSUPPORTED_CONVERSION_FUNC     , '01000' },ELITSA{ UNSUPPORTED_TYPE_CONV           , '01000' },ELITSA{ UNSUPPORTED_TYPE_SUM            , '01000' },ELITSA{ UNSUPPORTED_TYPE_MAX            , '01000' },ELITSA{ UNSUPPORTED_CONVERSION          , '01000' },ELITSA{ INSERT_INVALID_LEN              , '01000' },ELITSA{ SUBSTR_INVALID_LEN              , '01000' },ELITSA{ VALUE_STR_TOOLARGE              , '01000' },ELITSA{ VALUE_BIN_TOOLARGE              , '01000' },ELITSA{ VALUE_NULL_INVALID              , '01000' },ELITSA{ VALUE_CANT_CONVERT              , '01000' },ELITSA{ BYTEARR_INVALID_SIZE            , '01000' },ELITSA{ LOB_DELETED                     , '01000' },ELITSA{ PARAM_CLASS_UNKNOWN             , '01000' },ELITSA{ PARAM_EMPTY                     , '01000' },ELITSA{ PARAM_IDX_OUT_RANGE             , '01000' },ELITSA{ COL_DUPLICATE                      , '01000' },ELITSA{ COL_MISSING                     , '01000' },ELITSA{ COL_VAL_UNMATCH                 , '01000' },ELITSA{ COL_INVALID_SIZE                , '01000' },ELITSA{ COL_WRONG_PREFIX                , '01000' },ELITSA{ COL_READONLY                    , '01000' },ELITSA{ COL_INVALID_NAME                , '01000' },ELITSA{ COL_IDX_OUT_RANGE               , '01000' },ELITSA{ COL_AMBIGUOUS                   , '01000' },ELITSA{ GROUP_AGGR_INVALID              , '01000' },ELITSA{ GROUP_AGGR_NOTPART              , '01000' },ELITSA{ ORDERBY_INTERNAL                , '01000' },ELITSA{ UNION_DIFFERENT_COLS            , '01000' },ELITSA{ INDEX_EXISTS                    , '01000' },ELITSA{ INDEX_MISSING                   , '01000' },ELITSA{ INDEX_FILE_INVALID              , '01000' },ELITSA{ INDEX_CORRUPT                   , '01000' },ELITSA{ INDEX_TOOMANY_EQUALS            , '01000' },ELITSA{ FILE_TOONEW                     , '01000' },ELITSA{ FILE_TOOOLD                     , '01000' },ELITSA{ FILE_CANT_DELETE                , '01000' },ELITSA{ ROW_0_ABSOLUTE                  , '01000' },ELITSA{ ROW_NOCURRENT                   , '01000' },ELITSA{ ROWS_WRONG_MAX                  , '01000' },ELITSA{ ROW_LOCKED                      , '01000' },ELITSA{ ROW_DELETED                     , '01000' },ELITSA{ SAVEPT_INVALID_TRANS            , '01000' },ELITSA{ SAVEPT_INVALID_DRIVER           , '01000' },ELITSA{ ALIAS_UNSUPPORTED               , '01000' },ELITSA{ ISOLATION_UNKNOWN               , '01000' },ELITSA{ FLAGVALUE_INVALID               , '01000' },ELITSA{ ARGUMENT_INVALID                , '01000' },ELITSA{ GENER_KEYS_UNREQUIRED           , '01000' },ELITSA{ SEQUENCE_HEX_INVALID            , '01000' },ELITSA{ SEQUENCE_HEX_INVALID_STR        , '01000' },ELITSA{ SYNTAX_BASE_OFS                  , '01000' },ELITSA{ SYNTAX_BASE_END                  , '01000' },ELITSA{ STXADD_ADDITIONAL_TOK              , '01000' },ELITSA{ STXADD_IDENT_EXPECT              , '01000' },ELITSA{ STXADD_IDENT_EMPTY               , '01000' },ELITSA{ STXADD_IDENT_WRONG               , '01000' },ELITSA{ STXADD_OPER_MINUS               , '01000' },ELITSA{ STXADD_FUNC_UNKNOWN               , '01000' },ELITSA{ STXADD_PARAM_INVALID_COUNT      , '01000' },ELITSA{ STXADD_JOIN_INVALID                , '01000' },ELITSA{ STXADD_FROM_PAR_CLOSE                , '01000' },ELITSA{ STXADD_KEYS_REQUIRED                , '01000' },ELITSA{ STXADD_NOT_NUMBER                    , '01000' },ELITSA{ STXADD_COMMENT_OPEN              , '01000' },ELITSA};ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/language/Language_de.java|",
		"loc": "122",
		"clones": [{
			"start_line": 9,
			"end_line": 71,
			"code_lines": "{ UNSUPPORTED_OPERATION           , 'Nicht unterstΞ“Ξ�tzte Funktion: {0}' },ELITSA{ CANT_LOCK_FILE                  , 'Die Datei ''{0}'' kann nicht gelockt werden. Eine einzelne SmallSQL Datenbank kann nur fΞ“Ξ�r einen einzigen Prozess geΞ“Β¶ffnet werden.' },ELITSA{ DB_EXISTENT                     , 'Die Datenbank ''{0}'' existiert bereits.' },ELITSA{ DB_NONEXISTENT                  , 'Die Datenbank ''{0}'' existiert nicht.' },ELITSA{ DB_NOT_DIRECTORY                , 'Das Verzeichnis ''{0}'' ist keine SmallSQL Datenbank.' },ELITSA{ DB_NOTCONNECTED                 , 'Sie sind nicht mit einer Datenbank verbunden.' },ELITSA{ CONNECTION_CLOSED               , 'Die Verbindung ist bereits geschlossen.' },ELITSA{ VIEW_INSERT                     , 'INSERT wird nicht unterstΞ“Ξ�tzt fΞ“Ξ�r eine View.' },ELITSA{ VIEWDROP_NOT_VIEW               , 'DROP VIEW kann nicht mit ''{0}'' verwendet werden, weil es keine View ist.' },ELITSA{ VIEW_CANTDROP                   , 'View ''{0}'' kann nicht gelΞ“Β¶scht werden.' },ELITSA{ RSET_NOT_PRODUCED               , 'Es wurde kein ResultSet erzeugt.' },ELITSA{ RSET_READONLY                   , 'Das ResultSet ist schreibgeschΞ“Ξ�tzt.' },ELITSA{ RSET_FWDONLY                    , 'Das ResultSet ist forward only.' },ELITSA{ RSET_CLOSED                     , 'Das ResultSet ist geschlossen.' },ELITSA{ RSET_NOT_INSERT_ROW             , 'Der Cursor zeigt aktuell nicht auf die EinfΞ“Ξ�geposition (insert row).' },ELITSA{ RSET_ON_INSERT_ROW              , 'Der Cursor zeigt aktuell auf die EinfΞ“Ξ�geposition (insert row).' },ELITSA{ ROWSOURCE_READONLY              , 'Die Rowsource ist schreibgeschΞ“Ξ�tzt.' },ELITSA{ STMT_IS_CLOSED                  , 'Das Statement ist bereits geschlossen.' },ELITSA{ SUBQUERY_COL_COUNT              , 'Die Anzahl der Spalten in der Subquery muss 1 sein und nicht {0}.' },ELITSA{ JOIN_DELETE                     , 'Die Methode deleteRow wird nicht unterstΞ“Ξ�tzt fΞ“Ξ�r Joins.' },ELITSA{ JOIN_INSERT                     , 'Die Methode insertRow wird nicht unterstΞ“Ξ�tzt fΞ“Ξ�r Joins.' },ELITSA{ DELETE_WO_FROM                  , 'Die Methode deleteRow benΞ“Β¶tigt einen FROM Ausdruck.' },ELITSA{ INSERT_WO_FROM                  , 'Die Methode insertRow benΞ“Β¶tigt einen FROM Ausdruck.' },ELITSA{ TABLE_CANT_RENAME               , 'Die Tabelle ''{0}'' kann nicht umbenannt werden.' },ELITSA{ TABLE_CANT_DROP                 , 'Die Tabelle ''{0}'' kann nicht gelΞ“Β¶scht werden.' },ELITSA{ TABLE_CANT_DROP_LOCKED          , 'Die Tabelle ''{0}'' kann nicht gelΞ“Β¶scht werden, weil sie gelockt ist.' },ELITSA{ TABLE_CORRUPT_PAGE              , 'BeschΞ“Β¤digte Tabellenseite bei Position: {0}.' },ELITSA{ TABLE_MODIFIED                  , 'Die Tabelle ''{0}'' wurde modifiziert.' },ELITSA{ TABLE_DEADLOCK                  , 'Deadlock, es kann kein Lock erzeugt werden fΞ“Ξ�r Tabelle ''{0}''.' },ELITSA{ TABLE_OR_VIEW_MISSING           , 'Tabelle oder View ''{0}'' existiert nicht.' },ELITSA{ TABLE_FILE_INVALID              , 'Die Datei ''{0}'' enthΞ“Β¤lt keine gΞ“Ξ�ltige SmallSQL Tabelle.' },ELITSA{ TABLE_OR_VIEW_FILE_INVALID      , 'Die Datei ''{0}'' ist keine gΞ“Ξ�ltiger Tabellen oder View Speicher.' },ELITSA{ TABLE_EXISTENT                  , 'Die Tabelle oder View ''{0}'' existiert bereits.' },ELITSA{ FK_NOT_TABLE                    , '''{0}'' ist keine Tabelle.' },ELITSA{ PK_ONLYONE                      , 'Eine Tabelle kann nur einen PrimΞ“Β¤rschlΞ“Ξ�ssel haben.' },ELITSA{ KEY_DUPLICATE                   , 'Doppelter SchlΞ“Ξ�ssel.' },ELITSA{ MONTH_TOOLARGE                  , 'Der Monat ist zu groΞ“οΏ½ im DATE oder TIMESTAMP Wert ''{0}''.' },ELITSA{ DAYS_TOOLARGE                   , 'Die Tage sind zu groΞ“οΏ½ im DATE oder TIMESTAMP Wert ''{0}''.' },ELITSA{ HOURS_TOOLARGE                  , 'Die Stunden sind zu groΞ“οΏ½ im TIME oder TIMESTAMP Wert ''{0}''.' },ELITSA{ MINUTES_TOOLARGE                , 'Die Minuten sind zu groΞ“οΏ½ im TIME oder TIMESTAMP Wert ''{0}''.' },ELITSA{ SECS_TOOLARGE                   , 'Die Sekunden sind zu groΞ“οΏ½ im TIME oder TIMESTAMP Wert ''{0}''.' },ELITSA{ MILLIS_TOOLARGE                 , 'Die Millisekunden sind zu groΞ“οΏ½ im TIMESTAMP Wert ''{0}''.' },ELITSA{ DATETIME_INVALID                , '''{0}'' ist ein ungΞ“Ξ�ltiges DATE, TIME or TIMESTAMP.' },ELITSA{ UNSUPPORTED_CONVERSION_OPER     , 'Nicht unterstΞ“Ξ�tzte Konvertierung zu Datentyp ''{0}'' von Datentyp ''{1}'' fΞ“Ξ�r die Operation ''{2}''.' },ELITSA{ UNSUPPORTED_DATATYPE_OPER       , 'Nicht unterstΞ“Ξ�tzter Datentyp ''{0}'' fΞ“Ξ�r Operation ''{1}''.' },ELITSA{ UNSUPPORTED_DATATYPE_FUNC       , 'Nicht unterstΞ“Ξ�tzter Datentyp ''{0}'' fΞ“Ξ�r Funktion ''{1}''.' },ELITSA{ UNSUPPORTED_CONVERSION_FUNC     , 'Nicht unterstΞ“Ξ�tzte Konvertierung zu Datentyp ''{0}'' fΞ“Ξ�r Funktion ''{1}''.' },ELITSA{ UNSUPPORTED_TYPE_CONV           , 'Nicht unterstΞ“Ξ�tzter Typ fΞ“Ξ�r CONVERT Funktion: {0}.' },ELITSA{ UNSUPPORTED_TYPE_SUM            , 'Nicht unterstΞ“Ξ�tzter Datentyp ''{0}'' fΞ“Ξ�r SUM Funktion.' },ELITSA{ UNSUPPORTED_TYPE_MAX            , 'Nicht unterstΞ“Ξ�tzter Datentyp ''{0}'' fΞ“Ξ�r MAX Funktion.' },ELITSA{ UNSUPPORTED_CONVERSION          , 'Kann nicht konvertieren ''{0}'' [{1}] zu ''{2}''.' },ELITSA{ INSERT_INVALID_LEN              , 'UngΞ“Ξ�ltige LΞ“Β¤nge ''{0}'' in Funktion INSERT.' },ELITSA{ SUBSTR_INVALID_LEN              , 'UngΞ“Ξ�ltige LΞ“Β¤nge ''{0}'' in Funktion SUBSTRING.' },ELITSA{ VALUE_STR_TOOLARGE              , 'Der String Wert ist zu groΞ“οΏ½ fΞ“Ξ�r die Spalte.' },ELITSA{ VALUE_BIN_TOOLARGE              , 'Ein BinΞ“Β¤re Wert mit LΞ“Β¤nge {0} ist zu groΞ“οΏ½ fΞ“Ξ�r eine Spalte mit der GrΞ“Β¶Ξ“οΏ½e {1}.' },ELITSA{ VALUE_NULL_INVALID              , 'Null Werte sind ungΞ“Ξ�ltig fΞ“Ξ�r die Spalte ''{0}''.' },ELITSA{ VALUE_CANT_CONVERT              , 'Kann nicht konvertieren ein {0} Wert zu einem {1} Wert.' },ELITSA{ BYTEARR_INVALID_SIZE            , 'UngΞ“Ξ�ltige Bytearray GroΞ“οΏ½e {0} fΞ“Ξ�r UNIQUEIDENFIER.' },ELITSA{ LOB_DELETED                     , 'Lob Objekt wurde gelΞ“Β¶scht.' },ELITSA{ PARAM_CLASS_UNKNOWN             , 'Unbekante Parameter Klasse: ''{0}''.' },ELITSA{ PARAM_EMPTY                     , 'Parameter {0} ist leer.' },ELITSA{ PARAM_IDX_OUT_RANGE             , 'Parameter Index {0} liegt auΞ“οΏ½erhalb des GΞ“Ξ�ltigkeitsbereiches. Der Wert muss zwischen 1 und {1} liegen.' },ELITSA"
		}, {
			"start_line": 72,
			"end_line": 106,
			"code_lines": "{ COL_MISSING                     , 'Spalte ''{0}'' wurde nicht gefunden.' },ELITSA{ COL_VAL_UNMATCH                 , 'Die Spaltenanzahl und Werteanzahl ist nicht identisch.' },ELITSA{ COL_INVALID_SIZE                , 'UngΞ“Ξ�ltige SpaltengrΞ“Β¶Ξ“οΏ½e {0} fΞ“Ξ�r Spalte ''{1}''.' },ELITSA{ COL_WRONG_PREFIX                , 'Der Spaltenprefix ''{0}'' passt zu keinem Tabellennamen oder Aliasnamen in dieser Abfrage.' },ELITSA{ COL_READONLY                    , 'Die Spalte {0} ist schreibgeschΞ“Ξ�tzt.' },ELITSA{ COL_INVALID_NAME                , 'UngΞ“Ξ�ltiger Spaltenname ''{0}''.' },ELITSA{ COL_IDX_OUT_RANGE               , 'Spaltenindex auΞ“οΏ½erhalb des GΞ“Ξ�ltigkeitsbereiches: {0}.' },ELITSA{ COL_AMBIGUOUS                   , 'Die Spalte ''{0}'' ist mehrdeutig.' },ELITSA{ GROUP_AGGR_INVALID              , 'Aggregatfunktion sind nicht erlaubt im GROUP BY Klausel: ({0}).' },ELITSA{ GROUP_AGGR_NOTPART              , 'Der Ausdruck ''{0}'' ist nicht Teil einer Aggregatfunktion oder GROUP BY Klausel.' },ELITSA{ ORDERBY_INTERNAL                , 'Interner Error mit ORDER BY.' },ELITSA{ UNION_DIFFERENT_COLS            , 'Die SELECT Teile des UNION haben eine unterschiedliche Spaltenanzahl: {0} und {1}.' },ELITSA{ INDEX_EXISTS                    , 'Index ''{0}'' existiert bereits.' },ELITSA{ INDEX_MISSING                   , 'Index ''{0}'' existiert nicht.' },ELITSA{ INDEX_FILE_INVALID              , 'Die Datei ''{0}'' ist kein gΞ“Ξ�ltiger Indexspeicher.' },ELITSA{ INDEX_CORRUPT                   , 'Error beim Laden des Index. Die Index Datei ist beschΞ“Β¤digt. ({0}).' },ELITSA{ INDEX_TOOMANY_EQUALS            , 'Zu viele identische EintrΞ“Β¤ge im Index.' },ELITSA{ FILE_TOONEW                     , 'Dateiversion ({0}) der Datei ''{1}'' ist zu neu fΞ“Ξ�r diese Laufzeitbibliothek.' },ELITSA{ FILE_TOOOLD                     , 'Dateiversion ({0}) der Datei ''{1}'' ist zu alt fΞ“Ξ�r diese Laufzeitbibliothek.' },ELITSA{ FILE_CANT_DELETE                , 'Datei ''{0}'' kann nicht gelΞ“Β¶scht werden.' },ELITSA{ ROW_0_ABSOLUTE                  , 'Datensatz 0 ist ungΞ“Ξ�ltig fΞ“Ξ�r die Methode absolute().' },ELITSA{ ROW_NOCURRENT                   , 'Kein aktueller Datensatz.' },ELITSA{ ROWS_WRONG_MAX                  , 'Fehlerhafter Wert fΞ“Ξ�r Maximale Datensatzanzahl: {0}.' },ELITSA{ ROW_LOCKED                      , 'Der Datensatz ist gelocked von einer anderen Verbindung.' },ELITSA{ ROW_DELETED                     , 'Der Datensatz ist bereits gelΞ“Β¶scht.' },ELITSA{ SAVEPT_INVALID_TRANS            , 'Der Savepoint ist nicht gΞ“Ξ�ltig fΞ“Ξ�r die aktuelle Transaction.' },ELITSA{ SAVEPT_INVALID_DRIVER           , 'Der Savepoint ist nicht gΞ“Ξ�ltig fΞ“Ξ�r diesen Treiber {0}.' },ELITSA{ ALIAS_UNSUPPORTED               , 'Ein Alias ist nicht erlaubt fΞ“Ξ�r diesen Typ von Rowsource.' },ELITSA{ ISOLATION_UNKNOWN               , 'Unbekantes Transaktion Isolation Level: {0}.' },ELITSA{ FLAGVALUE_INVALID               , 'UngΞ“Ξ�ltiger Wert des Flags in Methode getMoreResults: {0}.' },ELITSA{ ARGUMENT_INVALID                , 'UngΞ“Ξ�ltiges Argument in Methode setNeedGenratedKeys: {0}.' },ELITSA{ GENER_KEYS_UNREQUIRED           , 'GeneratedKeys wurden nicht angefordert.' },ELITSA{ SEQUENCE_HEX_INVALID            , 'UngΞ“Ξ�ltige Hexadecimal Sequenze bei Position {0}.' },ELITSA{ SEQUENCE_HEX_INVALID_STR        , 'UngΞ“Ξ�ltige Hexadecimal Sequenze bei Position {0} in ''{1}''.' },ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/language/Language_en.java|",
		"loc": "3"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/language/Language_it.java|",
		"loc": "122",
		"clones": [{
			"start_line": 3,
			"end_line": 119,
			"code_lines": "addMessages(ENTRIES);ELITSA}ELITSApublic String[][] getEntries() {ELITSAreturn ENTRIES;ELITSA}ELITSAprivate final String[][] ENTRIES = {ELITSA{ UNSUPPORTED_OPERATION           , 'Operazione non supportata: {0}.' },ELITSA{ CANT_LOCK_FILE                  , 'Impossibile bloccare il file ''{0}''. Un database SmallSQL Database puΞ“Β² essere aperto da un unico processo.' },ELITSA{ DB_EXISTENT                     , 'Il database ''{0}'' Ξ“Β¨ giΞ“Β  esistente.' },ELITSA{ DB_NONEXISTENT                  , 'Il database ''{0}'' Non esiste.' },ELITSA{ DB_NOT_DIRECTORY                , 'La directory ''{0}'' non Ξ“Β¨ un database SmallSQL.' },ELITSA{ DB_NOTCONNECTED                 , 'L''utente non Ξ“Β¨ connesso a un database.' },ELITSA{ CONNECTION_CLOSED               , 'La connessione Ξ“Β¨ giΞ“Β  chiusa.' },ELITSA{ VIEW_INSERT                     , 'INSERT non Ξ“Β¨ supportato per una view.' },ELITSA{ VIEWDROP_NOT_VIEW               , 'Non Ξ“Β¨ possibile effettuare DROP VIEW con ''{0}'' perchΞ“Β© non Ξ“Β¨ una view.' },ELITSA{ VIEW_CANTDROP                   , 'Non si puΞ“Β² effettuare drop sulla view ''{0}''.' },ELITSA{ RSET_NOT_PRODUCED               , 'Nessun ResultSet Ξ“Β¨ stato prodotto.' },ELITSA{ RSET_READONLY                   , 'Il ResultSet Ξ“Β¨ di sola lettura.' },ELITSA{ RSET_FWDONLY                    , 'Il ResultSet Ξ“Β¨ forward only.' },ELITSA{ RSET_CLOSED                     , 'Il ResultSet Ξ“Β¨ chiuso.' },ELITSA{ RSET_NOT_INSERT_ROW             , 'Il cursore non Ξ“Β¨ attualmente nella riga ''InsertRow''.' },ELITSA{ RSET_ON_INSERT_ROW              , 'Il cursore Ξ“Β¨ attualmente nella riga ''InsertRow''.' },ELITSA{ ROWSOURCE_READONLY              , 'Il Rowsource Ξ“Β¨ di sola lettura.' },ELITSA{ STMT_IS_CLOSED                  , 'Lo Statement Ξ“Β¨ in stato chiuso.' },ELITSA{ SUBQUERY_COL_COUNT              , 'Il conteggio delle colonne nella subquery deve essere 1 e non {0}.' },ELITSA{ JOIN_DELETE                     , 'DeleteRow non supportato nelle join.' },ELITSA{ JOIN_INSERT                     , 'InsertRow non supportato nelle join.' },ELITSA{ DELETE_WO_FROM                  , 'DeleteRow necessita un''espressione FROM.' },ELITSA{ INSERT_WO_FROM                  , 'InsertRow necessita un''espressione FROM.' },ELITSA{ TABLE_CANT_RENAME               , 'La tabella ''{0}'' non puΞ“Β² essere rinominata.' },ELITSA{ TABLE_CANT_DROP                 , 'Non si puΞ“Β² effettuare DROP della tabella ''{0}''.' },ELITSA{ TABLE_CANT_DROP_LOCKED          , 'Non si puΞ“Β² effettuare DROP della tabella ''{0}'' perchΞ“Β© Ξ“Β¨ in LOCK.' },ELITSA{ TABLE_CORRUPT_PAGE              , 'Pagina della tabella corrotta alla posizione: {0}.' },ELITSA{ TABLE_MODIFIED                  , 'La tabella ''{0}'' Ξ“Β¨ stata modificata.' },ELITSA{ TABLE_DEADLOCK                  , 'Deadlock: non si puΞ“Β² mettere un lock sulla tabella ''{0}''.' },ELITSA{ TABLE_OR_VIEW_MISSING           , 'La tabella/view ''{0}'' non esiste.' },ELITSA{ TABLE_FILE_INVALID              , 'Il file ''{0}'' non include una tabella SmallSQL valida.' },ELITSA{ TABLE_OR_VIEW_FILE_INVALID      , 'Il file ''{0}'' non Ξ“Β¨ un contenitore valido di tabella/view.' },ELITSA{ TABLE_EXISTENT                  , 'La tabella/vista ''{0}'' Ξ“Β¨ giΞ“Β  esistente.' },ELITSA{ FK_NOT_TABLE                    , '''{0}'' non Ξ“Β¨ una tabella.' },ELITSA{ PK_ONLYONE                      , 'Una tabella puΞ“Β² avere solo una primary key.' },ELITSA{ KEY_DUPLICATE                   , 'Chiave duplicata.' },ELITSA{ MONTH_TOOLARGE                  , 'Valore del mese troppo alto del in DATE o TIMESTAMP ''{0}''.' },ELITSA{ DAYS_TOOLARGE                   , 'Valore del giorno troppo altro in DATE o TIMESTAMP ''{0}''.' },ELITSA{ HOURS_TOOLARGE                  , 'Valore delle ore troppo alto in in TIME o TIMESTAMP ''{0}''.' },ELITSA{ MINUTES_TOOLARGE                , 'Valore dei minuti troppo alto in TIME o TIMESTAMP ''{0}''.' },ELITSA{ SECS_TOOLARGE                   , 'Valore dei secondi troppo alto in TIME o TIMESTAMP ''{0}''.' },ELITSA{ MILLIS_TOOLARGE                 , 'VAlore dei millisecondi troppo alto in TIMESTAMP ''{0}''.' },ELITSA{ DATETIME_INVALID                , '''{0}'' Ξ“Β¨ un DATE, TIME or TIMESTAMP non valido.' },ELITSA{ UNSUPPORTED_CONVERSION_OPER     , 'Conversione non supportata verso il tipo di dato ''{0}'' dal tipo ''{1}'' per l''operazione ''{2}''.' },ELITSA{ UNSUPPORTED_DATATYPE_OPER       , 'Tipo di dato ''{0}'' non supportato per l''operazione ''{1}''.' },ELITSA{ UNSUPPORTED_DATATYPE_FUNC       , 'Tipo di dato ''{0}'' non supportato per la funzione ''{1}''.' },ELITSA{ UNSUPPORTED_CONVERSION_FUNC     , 'Conversione verso il tipo di dato ''{0}'' non supportato per la funzione ''{1}''.' },ELITSA{ UNSUPPORTED_TYPE_CONV           , 'Tipo non supportato per la funzione CONVERT: {0}.' },ELITSA{ UNSUPPORTED_TYPE_SUM            , 'Tipo non supportato per la funzione SUM: ''{0}''.' },ELITSA{ UNSUPPORTED_TYPE_MAX            , 'Tipo non supportato per la funzione MAX: ''{0}''.' },ELITSA{ UNSUPPORTED_CONVERSION          , 'Non Ξ“Β¨ possible convertire ''{0}'' [{1}] in ''{2}''.' },ELITSA{ INSERT_INVALID_LEN              , 'Lunghezza non valida ''{0}'' per la funzione INSERT.' },ELITSA{ SUBSTR_INVALID_LEN              , 'Lunghezza non valida ''{0}'' per la funzione SUBSTRING.' },ELITSA{ VALUE_STR_TOOLARGE              , 'Stringa troppo lunga per la colonna.' },ELITSA{ VALUE_BIN_TOOLARGE              , 'Valore binario di lunghezza {0} eccessiva per la colonna di lunghezza {1}.' },ELITSA{ VALUE_NULL_INVALID              , 'Valori nulli non validi per la colonna ''{0}''.' },ELITSA{ VALUE_CANT_CONVERT              , 'Impossible convertire un valore {0} in un valore {1}.' },ELITSA{ BYTEARR_INVALID_SIZE            , 'Lunghezza non valida per un array di bytes: {0}.' },ELITSA{ LOB_DELETED                     , 'L''oggetto LOB Ξ“Β¨ stato cancellato.' },ELITSA{ PARAM_CLASS_UNKNOWN             , 'Classe sconosciuta (''{0}'') per il parametro.' },ELITSA{ PARAM_EMPTY                     , 'Il parametro {0} Ξ“Β¨ vuoto.' },ELITSA{ PARAM_IDX_OUT_RANGE             , 'L''indice {0} per il parametro Ξ“Β¨ fuori dall''intervallo consentito ( 1 <= n <= {1} ).' },ELITSA{ COL_DUPLICATE                      , 'Nome di colonna duplicato: ''{0}''.' },ELITSA{ COL_MISSING                     , 'Colonna ''{0}'' non trovata.' },ELITSA{ COL_VAL_UNMATCH                 , 'Il conteggio di colonne e valori non Ξ“Β¨ identico.' },ELITSA{ COL_INVALID_SIZE                , 'Lunghezza non valida ({0}) per la colonna ''{1}''.' },ELITSA{ COL_WRONG_PREFIX                , 'Il prefisso di colonna ''{0}'' non coincide con un alias o nome di tabella usato nella query.' },ELITSA{ COL_READONLY                    , 'La colonna ''{0}'' Ξ“Β¨ di sola lettura.' },ELITSA{ COL_INVALID_NAME                , 'Nome di colonna non valido ''{0}''.' },ELITSA{ COL_IDX_OUT_RANGE               , 'Indice di colonna fuori dall''intervallo valido: {0}.' },ELITSA{ COL_AMBIGUOUS                   , 'Il nome di colonna ''{0}'' Ξ“Β¨ ambiguo.' },ELITSA{ GROUP_AGGR_INVALID              , 'Funzione di aggregrazione non valida per la clausola GROUP BY: ({0}).' },ELITSA{ GROUP_AGGR_NOTPART              , 'L''espressione ''{0}'' non Ξ“Β¨ parte di una funzione di aggregazione o della clausola GROUP BY.' },ELITSA{ ORDERBY_INTERNAL                , 'Errore interno per ORDER BY.' },ELITSA{ UNION_DIFFERENT_COLS            , 'SELECT appartenenti ad una UNION con numero di colonne differenti: {0} e {1}.' },ELITSA{ INDEX_EXISTS                    , 'L''indice ''{0}'' Ξ“Β¨ giΞ“Β  esistente.' },ELITSA{ INDEX_MISSING                   , 'L''indice ''{0}'' non esiste.' },ELITSA{ INDEX_FILE_INVALID              , 'Il file ''{0}'' non Ξ“Β¨ un contenitore valido per un indice.' },ELITSA{ INDEX_CORRUPT                   , 'Errore durante il caricamento dell''indice. File dell''indice corrotto: ''{0}''.' },ELITSA{ INDEX_TOOMANY_EQUALS            , 'Troppe voci uguali nell''indice.' },ELITSA{ FILE_TOONEW                     , 'La versione ({0}) del file ''{1}'' Ξ“Β¨ troppo recente per questo runtime.' },ELITSA{ FILE_TOOOLD                     , 'La versione ({0}) del file ''{1}'' Ξ“Β¨ troppo vecchia per questo runtime.' },ELITSA{ FILE_CANT_DELETE                , 'File ''(0)'' non possono essere eliminati.' },ELITSA{ ROW_0_ABSOLUTE                  , 'Il numero di riga 0 non Ξ“Β¨ valido per il metodo ''absolute()''.' },ELITSA{ ROW_NOCURRENT                   , 'Nessuna riga corrente.' },ELITSA{ ROWS_WRONG_MAX                  , 'Numero massimo di righe non valido ({0}).' },ELITSA{ ROW_LOCKED                      , 'La riga Ξ“Β¨ bloccata da un''altra connessione.' },ELITSA{ ROW_DELETED                     , 'Riga giΞ“Β  cancellata.' },ELITSA{ SAVEPT_INVALID_TRANS            , 'SAVEPOINT non valido per questa transazione.' },ELITSA{ SAVEPT_INVALID_DRIVER           , 'SAVEPOINT non valido per questo driver {0}.' },ELITSA{ ALIAS_UNSUPPORTED               , 'Alias non supportato per questo tipo di sorgente righe.' },ELITSA{ ISOLATION_UNKNOWN               , 'Livello di Isolamento transazione sconosciuto: {0}.' },ELITSA{ FLAGVALUE_INVALID               , 'Flag non valida nel metodo ''getMoreResults'': {0}.' },ELITSA{ ARGUMENT_INVALID                , 'Argomento non valido nel metodo ''setNeedGenratedKeys'': {0}.' },ELITSA{ GENER_KEYS_UNREQUIRED           , 'GeneratedKeys non richieste.' },ELITSA{ SEQUENCE_HEX_INVALID            , 'Sequenza esadecimale non valido alla posizione {0}.' },ELITSA{ SEQUENCE_HEX_INVALID_STR        , 'Sequence esadecimale non valida alla positione {0} in ''{1}''.' },ELITSA{ SYNTAX_BASE_OFS                  , 'Errore di sintassi alla posizione {0} in ''{1}''. ' },ELITSA{ SYNTAX_BASE_END                  , 'Errore di sintassi, fine inattesa della stringa SQL. ' },ELITSA{ STXADD_ADDITIONAL_TOK              , 'Token aggiuntivo dopo la fine dell''istruzione SQL.' },ELITSA{ STXADD_IDENT_EXPECT              , 'Identificatore atteso.' },ELITSA{ STXADD_IDENT_EMPTY               , 'Identificatore vuoto.' },ELITSA{ STXADD_IDENT_WRONG               , 'Identificatore errato ''{0}''.' },ELITSA{ STXADD_OPER_MINUS               , 'Operatore ''meno'' non valido per il tipo di dato varbinary.' },ELITSA{ STXADD_FUNC_UNKNOWN               , 'Funzione sconosciuta.' },ELITSA{ STXADD_PARAM_INVALID_COUNT      , 'Totale parametri non valido.' },ELITSA{ STXADD_JOIN_INVALID                , 'Sintassi della join non valida.' },ELITSA{ STXADD_FROM_PAR_CLOSE                , 'Parentesi chiusa non attesa nella clausola from.' },ELITSA{ STXADD_KEYS_REQUIRED                , 'Le parole chiave richieste sono: ' },ELITSA{ STXADD_NOT_NUMBER                    , 'Richiesto valore numerico (passato = ''{0}'').' },ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionFloor.java|",
		"loc": "12"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/LongTreeListEnum.java|",
		"loc": "10"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionInSelect.java|",
		"loc": "30"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SSResultSet.java|",
		"loc": "704",
		"clones": [{
			"start_line": 50,
			"end_line": 56,
			"code_lines": "wasNull = expr.isNull();ELITSAreturn expr.getBoolean();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 65,
			"end_line": 71,
			"code_lines": "wasNull = expr.isNull();ELITSAreturn expr.getInt();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 74,
			"end_line": 80,
			"code_lines": "wasNull = expr.isNull();ELITSAreturn expr.getLong();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 83,
			"end_line": 89,
			"code_lines": "wasNull = expr.isNull();ELITSAreturn expr.getFloat();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 101,
			"end_line": 108,
			"code_lines": "wasNull = obj == null;ELITSAif(wasNull) return null;ELITSAreturn obj.toBigDecimal(scale);ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 111,
			"end_line": 117,
			"code_lines": "wasNull = obj == null;ELITSAreturn obj;ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 120,
			"end_line": 127,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getDate( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 130,
			"end_line": 137,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getTime( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 140,
			"end_line": 147,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getTimestamp( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 203,
			"end_line": 209,
			"code_lines": "}ELITSApublic SQLWarning getWarnings(){ELITSAreturn null;ELITSA}ELITSApublic void clearWarnings(){ELITSA}ELITSA"
		}, {
			"start_line": 218,
			"end_line": 224,
			"code_lines": "wasNull = obj == null;ELITSAreturn obj;ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 239,
			"end_line": 246,
			"code_lines": "wasNull = obj == null;ELITSAif(wasNull) return null;ELITSAreturn obj.toBigDecimal();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 552,
			"end_line": 565,
			"code_lines": "}ELITSApublic Ref getRef(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION, 'Ref object');ELITSA}ELITSApublic Blob getBlob(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION, 'Blob object');ELITSA}ELITSApublic Clob getClob(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION, 'Clob object');ELITSA}ELITSApublic Array getArray(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION, 'Array');ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Mutable.java|",
		"loc": "4"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/LongList.java|",
		"loc": "33"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReturnP1StringAndBinary.java|",
		"loc": "36",
		"clones": [{
			"start_line": 2,
			"end_line": 31,
			"code_lines": "final boolean getBoolean() throws Exception {ELITSAif(isNull()) return false;ELITSAreturn Utils.string2boolean(getString().trim());ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Integer.parseInt(getString().trim());ELITSA}ELITSAfinal long getLong() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Long.parseLong(getString().trim());ELITSA}ELITSAfinal float getFloat() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Float.parseFloat(getString().trim());ELITSA}ELITSAfinal double getDouble() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Double.parseDouble(getString().trim());ELITSA}ELITSAfinal long getMoney() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Money.parseMoney(getString().trim());ELITSA}ELITSAfinal MutableNumeric getNumeric() throws Exception {ELITSAif(isNull()) return null;ELITSAreturn new MutableNumeric(getString().trim());ELITSA}ELITSAfinal Object getObject() throws Exception {ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SortedResult.java|",
		"loc": "196",
		"clones": [{
			"start_line": 93,
			"end_line": 99,
			"code_lines": "return false;ELITSA}ELITSAboolean last() throws Exception{ELITSAafterLast();ELITSAreturn previous();ELITSA}ELITSA"
		}, {
			"start_line": 155,
			"end_line": 162,
			"code_lines": "if(!previous()){ELITSAreturn false;ELITSA}ELITSA}ELITSA}ELITSAreturn true;ELITSA}ELITSA"
		}, {
			"start_line": 171,
			"end_line": 180,
			"code_lines": "}ELITSAfinal boolean rowInserted(){ELITSAreturn rowSource.rowInserted();ELITSA}ELITSAfinal boolean rowDeleted(){ELITSAreturn rowSource.rowDeleted();ELITSA}ELITSAvoid nullRow() {ELITSArowSource.nullRow();ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTimestampAdd.java|",
		"loc": "77"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Database.java|",
		"loc": "384",
		"clones": [{
			"start_line": 287,
			"end_line": 293,
			"code_lines": "}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);ELITSAreturn result;ELITSA}ELITSA"
		}, {
			"start_line": 317,
			"end_line": 326,
			"code_lines": "rows.add(row);ELITSA}ELITSA}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);ELITSAreturn result;ELITSA}ELITSA"
		}, {
			"start_line": 327,
			"end_line": 336,
			"code_lines": "List rows = new ArrayList();ELITSAStrings tables = getTables(table);ELITSAfor(int t=0; t<tables.size(); t++){ELITSAString tableName = tables.get(t);ELITSATableView tab = getTableView( con, tableName);ELITSAif(!(tab instanceof Table)) continue;ELITSAIndexDescriptions indexes = ((Table)tab).indexes;ELITSAfor(int i=0; i<indexes.size(); i++){ELITSAIndexDescription index = indexes.get(i);ELITSA"
		}, {
			"start_line": 345,
			"end_line": 354,
			"code_lines": "rows.add(row);ELITSA}ELITSA}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);ELITSAreturn result;ELITSA}ELITSA"
		}, {
			"start_line": 358,
			"end_line": 365,
			"code_lines": "for(int t=0; t<tables.size(); t++){ELITSAString tableName = tables.get(t);ELITSATableView tab = getTableView( con, tableName);ELITSAif(!(tab instanceof Table)) continue;ELITSAIndexDescriptions indexes = ((Table)tab).indexes;ELITSAfor(int i=0; i<indexes.size(); i++){ELITSAIndexDescription index = indexes.get(i);ELITSA"
		}, {
			"start_line": 376,
			"end_line": 383,
			"code_lines": "}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);ELITSAreturn result;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Where.java|",
		"loc": "100"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/DateTime.java|",
		"loc": "658",
		"clones": [{
			"start_line": 366,
			"end_line": 375,
			"code_lines": "buf.append( SHORT_MONTHS[ details.month ]);ELITSAbuf.append(' ');ELITSAformatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSAformatHour12( details.hour, buf );ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSA"
		}, {
			"start_line": 428,
			"end_line": 434,
			"code_lines": "buf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append(':');ELITSAformatMillis( details.millis, buf);ELITSA"
		}, {
			"start_line": 453,
			"end_line": 459,
			"code_lines": "formatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAreturn buf.toString();ELITSA"
		}, {
			"start_line": 461,
			"end_line": 472,
			"code_lines": "formatNumber( details.year, 4, buf);ELITSAbuf.append('-');ELITSAformatNumber( details.month+1, 2, buf);ELITSAbuf.append('-');ELITSAformatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAformatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSA"
		}, {
			"start_line": 483,
			"end_line": 491,
			"code_lines": "formatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append('.');ELITSAformatMillis( details.millis, buf );ELITSAreturn buf.toString();ELITSA"
		}, {
			"start_line": 492,
			"end_line": 498,
			"code_lines": "formatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAbuf.append( SHORT_MONTHS[ details.month ]);ELITSAbuf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSA"
		}, {
			"start_line": 495,
			"end_line": 507,
			"code_lines": "buf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSAformatHour12( details.hour, buf );ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append(':');ELITSAformatMillis( details.millis, buf);ELITSAbuf.append( details.hour < 12 ? 'AM' : 'PM' );ELITSAreturn buf.toString();ELITSA"
		}, {
			"start_line": 513,
			"end_line": 522,
			"code_lines": "buf.append(' ');ELITSAformatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append(':');ELITSAformatMillis( details.millis, buf );ELITSAreturn buf.toString();ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandSelect.java|",
		"loc": "363",
		"clones": [{
			"start_line": 269,
			"end_line": 276,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 305,
			"end_line": 312,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 320,
			"end_line": 327,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/TableStorePageInsert.java|",
		"loc": "19"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/SmallSQLException.java|",
		"loc": "96"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ForeignKeys.java|",
		"loc": "27"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StoreNull.java|",
		"loc": "58"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSin.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Distinct.java|",
		"loc": "73",
		"clones": [{
			"start_line": 16,
			"end_line": 22,
			"code_lines": "}ELITSAfinal void beforeFirst() throws Exception {ELITSArowSource.beforeFirst();ELITSArow = 0;ELITSA}ELITSAfinal boolean first() throws Exception {ELITSA"
		}, {
			"start_line": 48,
			"end_line": 63,
			"code_lines": "}ELITSAfinal long getRowPosition() {ELITSAreturn rowSource.getRowPosition();ELITSA}ELITSAfinal void setRowPosition(long rowPosition) throws Exception {ELITSArowSource.setRowPosition(rowPosition);ELITSA}ELITSAfinal void nullRow() {ELITSArowSource.nullRow();ELITSArow = 0;ELITSA}ELITSAfinal void noRow() {ELITSArowSource.noRow();ELITSArow = 0;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StoreImpl.java|",
		"loc": "1290",
		"clones": [{
			"start_line": 742,
			"end_line": 750,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.VARBINARY:ELITSA"
		}, {
			"start_line": 751,
			"end_line": 758,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:ELITSA"
		}, {
			"start_line": 802,
			"end_line": 810,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.VARBINARY:ELITSA"
		}, {
			"start_line": 811,
			"end_line": 820,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:ELITSAreturn readLong();ELITSAcase SQLTokenizer.REAL:ELITSA"
		}, {
			"start_line": 848,
			"end_line": 861,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAreturn readTimestamp();ELITSAcase SQLTokenizer.TIME:ELITSAreturn readTime();ELITSAcase SQLTokenizer.DATE:ELITSAreturn readDate();ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAreturn readSmallDateTime();ELITSAdefault:ELITSAthrow SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType), 'REAL' });ELITSA}ELITSA}ELITSA@OverrideELITSA"
		}, {
			"start_line": 862,
			"end_line": 870,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.VARBINARY:ELITSA"
		}, {
			"start_line": 871,
			"end_line": 883,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:ELITSAreturn readLong();ELITSAcase SQLTokenizer.REAL:ELITSAreturn readFloat();ELITSAcase SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSA"
		}, {
			"start_line": 908,
			"end_line": 921,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAreturn readTimestamp();ELITSAcase SQLTokenizer.TIME:ELITSAreturn readTime();ELITSAcase SQLTokenizer.DATE:ELITSAreturn readDate();ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAreturn readSmallDateTime();ELITSAdefault:ELITSAthrow SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType), 'NUMERIC' });ELITSA}ELITSA}ELITSA@OverrideELITSA"
		}, {
			"start_line": 1024,
			"end_line": 1033,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAthrow SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType), 'NUMERIC' });ELITSAdefault: throw new Error();ELITSA}ELITSA}ELITSA@OverrideELITSA"
		}, {
			"start_line": 1060,
			"end_line": 1067,
			"code_lines": "case SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSAreturn readNumeric();ELITSAcase SQLTokenizer.CHAR:ELITSAcase SQLTokenizer.NCHAR:ELITSAcase SQLTokenizer.VARCHAR:ELITSAcase SQLTokenizer.NVARCHAR:ELITSA"
		}, {
			"start_line": 1125,
			"end_line": 1138,
			"code_lines": "case SQLTokenizer.CHAR:ELITSAcase SQLTokenizer.NCHAR:ELITSAcase SQLTokenizer.VARCHAR:ELITSAcase SQLTokenizer.NVARCHAR:ELITSAreturn readString();ELITSAcase SQLTokenizer.CLOB:ELITSAcase SQLTokenizer.NCLOB:ELITSAcase SQLTokenizer.LONGNVARCHAR:ELITSAcase SQLTokenizer.LONGVARCHAR:ELITSAreturn readLongString();ELITSAcase SQLTokenizer.JAVA_OBJECT:ELITSAByteArrayInputStream bais = new ByteArrayInputStream(readLongBinary());ELITSAObjectInputStream ois = new ObjectInputStream(bais);ELITSA"
		}, {
			"start_line": 1150,
			"end_line": 1156,
			"code_lines": "case SQLTokenizer.UNIQUEIDENTIFIER:ELITSAreturn Utils.bytes2unique( page, this.offset);ELITSAdefault: throw new Error();ELITSA}ELITSA}ELITSA@OverrideELITSA"
		}, {
			"start_line": 1173,
			"end_line": 1179,
			"code_lines": "case SQLTokenizer.INT:ELITSAcase SQLTokenizer.REAL:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSA"
		}, {
			"start_line": 1221,
			"end_line": 1227,
			"code_lines": "case SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAcase SQLTokenizer.TINYINT:ELITSAoffset++;ELITSAbreak;ELITSAcase SQLTokenizer.SMALLINT:ELITSA"
		}, {
			"start_line": 1227,
			"end_line": 1251,
			"code_lines": "offset += 2;ELITSAbreak;ELITSAcase SQLTokenizer.INT:ELITSAcase SQLTokenizer.REAL:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAoffset += 4;ELITSAbreak;ELITSAcase SQLTokenizer.BIGINT:ELITSAcase SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.JAVA_OBJECT:ELITSAcase SQLTokenizer.LONGVARBINARY:ELITSAcase SQLTokenizer.BLOB:ELITSAcase SQLTokenizer.CLOB:ELITSAcase SQLTokenizer.NCLOB:ELITSAcase SQLTokenizer.LONGNVARCHAR:ELITSAcase SQLTokenizer.LONGVARCHAR:ELITSAcase SQLTokenizer.TIMESTAMP:ELITSAoffset += 8;ELITSAbreak;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Store.java|",
		"loc": "24"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAscii.java|",
		"loc": "19"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRand.java|",
		"loc": "15"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionSubstring.java|",
		"loc": "40"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionOctetLen.java|",
		"loc": "15",
		"clones": [{
			"start_line": 5,
			"end_line": 12,
			"code_lines": "}ELITSAboolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAString str = param1.getString();ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionATan2.java|",
		"loc": "11"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionTruncate.java|",
		"loc": "31",
		"clones": [{
			"start_line": 3,
			"end_line": 22,
			"code_lines": "boolean isNull() throws Exception{ELITSAreturn param1.isNull() || param2.isNull();ELITSA}ELITSAfinal double getDouble() throws Exception{ELITSAif(isNull()) return 0;ELITSAfinal int places = param2.getInt();ELITSAdouble value = param1.getDouble();ELITSAlong factor = 1;ELITSAif(places > 0){ELITSAfor(int i=0; i<places; i++){ELITSAfactor *= 10;ELITSA}ELITSAvalue *= factor;ELITSA}else{ELITSAfor(int i=0; i>places; i--){ELITSAfactor *= 10;ELITSA}ELITSAvalue /= factor;ELITSA}ELITSA"
		}, {
			"start_line": 23,
			"end_line": 31,
			"code_lines": "if(places > 0){ELITSAvalue /= factor;ELITSA}else{ELITSAvalue *= factor;ELITSA}ELITSAreturn value;ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRadians.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Strings.java|",
		"loc": "32"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionAbs.java|",
		"loc": "64",
		"clones": [{
			"start_line": 57,
			"end_line": 64,
			"code_lines": "}ELITSAString getString() throws Exception{ELITSAObject obj = getObject();ELITSAif(obj == null) return null;ELITSAreturn obj.toString();ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableFloat.java|",
		"loc": "25",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "this.value = value;ELITSA}ELITSApublic double doubleValue() {ELITSAreturn value;ELITSA}ELITSApublic float floatValue() {ELITSA"
		}, {
			"start_line": 11,
			"end_line": 22,
			"code_lines": "}ELITSApublic int intValue() {ELITSAreturn (int)value;ELITSA}ELITSApublic long longValue() {ELITSAreturn (long)value;ELITSA}ELITSApublic String toString(){ELITSAreturn String.valueOf(value);ELITSA}ELITSApublic Object getImmutableObject(){ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableLong.java|",
		"loc": "25",
		"clones": [{
			"start_line": 4,
			"end_line": 16,
			"code_lines": "this.value = value;ELITSA}ELITSApublic double doubleValue() {ELITSAreturn value;ELITSA}ELITSApublic float floatValue() {ELITSAreturn value;ELITSA}ELITSApublic int intValue() {ELITSAreturn (int)value;ELITSA}ELITSApublic long longValue() {ELITSA"
		}, {
			"start_line": 18,
			"end_line": 25,
			"code_lines": "public String toString(){ELITSAreturn String.valueOf(value);ELITSA}ELITSApublic Object getImmutableObject(){ELITSAreturn new Long(value);ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandCreateDatabase.java|",
		"loc": "23"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLength.java|",
		"loc": "13"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionACos.java|",
		"loc": "8"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/LongLongList.java|",
		"loc": "41"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Column.java|",
		"loc": "110"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StoreNoCurrentRow.java|",
		"loc": "52"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandSet.java|",
		"loc": "20"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/JoinScroll.java|",
		"loc": "127",
		"clones": [{
			"start_line": 78,
			"end_line": 86,
			"code_lines": "result = left.next();ELITSAif(result){ELITSAresult = right.first();ELITSAif(!result){ELITSAswitch(type){ELITSAcase Join.LEFT_JOIN:ELITSAcase Join.FULL_JOIN:ELITSAisOuterValid = false;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionConvert.java|",
		"loc": "185",
		"clones": [{
			"start_line": 90,
			"end_line": 96,
			"code_lines": "byte[] buffer = new byte[length];ELITSASystem.arraycopy(bytes, 0, buffer, 0, Math.min(bytes.length,length) );ELITSAreturn buffer;ELITSA}ELITSAreturn bytes;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionLeft.java|",
		"loc": "25",
		"clones": [{
			"start_line": 4,
			"end_line": 14,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull() || param2.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAbyte[] bytes = param1.getBytes();ELITSAint length = param2.getInt();ELITSAif(bytes.length <= length) return bytes;ELITSAbyte[] b = new byte[length];ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CreateFile.java|",
		"loc": "41"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableInteger.java|",
		"loc": "25",
		"clones": [{
			"start_line": 4,
			"end_line": 13,
			"code_lines": "this.value = value;ELITSA}ELITSApublic double doubleValue() {ELITSAreturn value;ELITSA}ELITSApublic float floatValue() {ELITSAreturn value;ELITSA}ELITSApublic int intValue() {ELITSA"
		}, {
			"start_line": 14,
			"end_line": 22,
			"code_lines": "}ELITSApublic long longValue() {ELITSAreturn value;ELITSA}ELITSApublic String toString(){ELITSAreturn String.valueOf(value);ELITSA}ELITSApublic Object getImmutableObject(){ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionReplace.java|",
		"loc": "61",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull() || param2.isNull() || param3.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Expression.java|",
		"loc": "128"
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/LongTreeList.java|",
		"loc": "318",
		"clones": [{
			"start_line": 118,
			"end_line": 125,
			"code_lines": "}ELITSAfirstNode = false;ELITSAif(shift != 0) offset += pointerSize;ELITSA}ELITSAshift -= 16;ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 170,
			"end_line": 180,
			"code_lines": "result |= (((long)nextEntry) << shift);ELITSAif(listEnum.stack>=3){ELITSAlistEnum.offsetStack[listEnum.stack] = offset;ELITSAreturn result;ELITSA}ELITSAlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;ELITSAoffset = getPointer();ELITSAshift -= 16;ELITSAlistEnum.stack++;ELITSAlistEnum.resultStack[listEnum.stack] = result;ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java|",
		"loc": "29",
		"clones": [{
			"start_line": 4,
			"end_line": 11,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAbyte[] bytes = param1.getBytes();ELITSA"
		}, {
			"start_line": 15,
			"end_line": 22,
			"code_lines": "byte[] b = new byte[length];ELITSASystem.arraycopy(bytes, 0, b, 0, length);ELITSAreturn b;ELITSA}ELITSAfinal String getString() throws Exception {ELITSAif(isNull()) return null;ELITSAString str = param1.getString();ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandInsert.java|",
		"loc": "129",
		"clones": [{
			"start_line": 105,
			"end_line": 111,
			"code_lines": "keyColumnNames.add(column.getName());ELITSAkeys.add(valueExpress.getObject());ELITSAbreak;ELITSA}ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionBitLen.java|",
		"loc": "15",
		"clones": [{
			"start_line": 5,
			"end_line": 12,
			"code_lines": "}ELITSAboolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAString str = param1.getString();ELITSA"
		}]
	}]
}