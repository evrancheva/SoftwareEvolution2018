var smallsql = {
	"name_of_project": "TEST_smallProject",
	"duplicates_percentage": "9.72972973000",
	"total_duplicates_lines": "2340",
	"loc_project": "24050",
	"number_of_clones": "2340",
	"number_of_classes": "195",
	"biggest_clone_lines": "116",
	"biggest_clone_class": "4",
	"example_clones": {
		"clone_1": {
			"lines": "20-28",
			"code_lines": "a(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),a(,    0, SYNTAX,),",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptions.java|"
		},
		"clone_2": {
			"lines": "95-107",
			"code_lines": "a(,),ELITSAa(,),ELITSAa(, getMonth3L(10) +),ELITSAa(,),ELITSAa(,),ELITSAa(,),ELITSAa(,),a(,),a(,+ getMonth3L(10) +),a(, getMonth3L(10) +),a(,),a(, getMonth3L(10) +),",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java|"
		},
		"clone_3": {
			"lines": "26-34",
			"code_lines": "a(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),a(, new String(),      new String()),",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestJoins.java|"
		},
		"clone_4": {
			"lines": "53-68",
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();}for(int i = 0; i < threadList.size(); i++){Thread thread = (Thread)threadList.get(i);thread.join(5000);}if(throwable != null){throw throwable;}",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestThreads.java|"
		},
		"clone_5": {
			"lines": "89-107",
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();assertNull(oldValue);assertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(rs.next()){String newValue = rs.getString();assertTrue( oldValue ++ newValue, oldValue.compareTo( newValue ) < 0 );oldValue = newValue;count++;}",
			"file": "|project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java|"
		}
	},
	"files": [{
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptions.java|",
		"loc": "89",
		"clones": [{
			"start_line": 20,
			"end_line": 28,
			"code_lines": "a(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),ELITSAa(,    0, SYNTAX,),a(,    0, SYNTAX,),"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestFunctions.java|",
		"loc": "370",
		"clones": [{
			"start_line": 95,
			"end_line": 107,
			"code_lines": "a(,),ELITSAa(,),ELITSAa(, getMonth3L(10) +),ELITSAa(,),ELITSAa(,),ELITSAa(,),ELITSAa(,),a(,),a(,+ getMonth3L(10) +),a(, getMonth3L(10) +),a(,),a(, getMonth3L(10) +),"
		}, {
			"start_line": 107,
			"end_line": 115,
			"code_lines": "a(, getMonth3L(10) +),ELITSAa(,),ELITSAa(,),ELITSAa(,),ELITSAa(,+ getMonth3L(10) +),ELITSAa(,),ELITSAa(,),a(,),"
		}, {
			"start_line": 125,
			"end_line": 135,
			"code_lines": "a(, new BigDecimal()),ELITSAa(, new BigDecimal()),ELITSAa(, new BigDecimal()),ELITSAa(, new BigDecimal()),ELITSAa(, new BigDecimal()),ELITSAa(, new BigDecimal()),ELITSAa(, new BigDecimal()),a(, new BigDecimal()),a(, new BigDecimal()),a(, new BigDecimal()),"
		}, {
			"start_line": 159,
			"end_line": 166,
			"code_lines": "a(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),ELITSAa(, Timestamp.valueOf()),"
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
			"code_lines": "a(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),a(, new String(),      new String()),"
		}, {
			"start_line": 40,
			"end_line": 46,
			"code_lines": "a(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestThreads.java|",
		"loc": "111",
		"clones": [{
			"start_line": 53,
			"end_line": 68,
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();}for(int i = 0; i < threadList.size(); i++){Thread thread = (Thread)threadList.get(i);thread.join(5000);}if(throwable != null){throw throwable;}"
		}, {
			"start_line": 77,
			"end_line": 85,
			"code_lines": "Statement st = con.createStatement();ELITSAtry{ELITSAst.execute();ELITSAst.execute();ELITSAfor(int i = 0; i < 200; i++){ELITSAThread thread = new Thread(new Runnable(){ELITSApublic void run(){try{"
		}, {
			"start_line": 90,
			"end_line": 110,
			"code_lines": "}catch(Throwable ex){ELITSAthrowable = ex;ELITSA}ELITSA}ELITSA});ELITSAthreadList.add(thread);ELITSAthread.start();}for(int i = 0; i < threadList.size(); i++){Thread thread = (Thread)threadList.get(i);thread.join(5000);}if(throwable != null){throw throwable;}assertEqualsRsValue(new Integer(200),);}finally{dropTable(con,);}}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestScrollable.java|",
		"loc": "229",
		"clones": [{
			"start_line": 31,
			"end_line": 39,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAassertRowCount( 0,);Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);"
		}, {
			"start_line": 57,
			"end_line": 65,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAassertRowCount( 0,);Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);"
		}, {
			"start_line": 79,
			"end_line": 86,
			"code_lines": "try{ELITSArs.getString();ELITSAfail();ELITSA}catch(SQLException ex){ELITSAassertSQLException(, 0, ex);ELITSA}ELITSA}"
		}, {
			"start_line": 87,
			"end_line": 95,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAassertRowCount( 0,);Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);"
		}, {
			"start_line": 110,
			"end_line": 117,
			"code_lines": "try{ELITSArs.getString();ELITSAfail();ELITSA}catch(SQLException ex){ELITSAassertSQLException(, 0, ex);ELITSA}ELITSA}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestOrderBy.java|",
		"loc": "613",
		"clones": [{
			"start_line": 89,
			"end_line": 107,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();assertNull(oldValue);assertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(rs.next()){String newValue = rs.getString();assertTrue( oldValue ++ newValue, oldValue.compareTo( newValue ) < 0 );oldValue = newValue;count++;}"
		}, {
			"start_line": 110,
			"end_line": 124,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();assertNull(oldValue);assertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(rs.next()){String newValue = rs.getString();"
		}, {
			"start_line": 125,
			"end_line": 131,
			"code_lines": "oldValue = newValue;ELITSAcount++;ELITSA}ELITSArs.close();ELITSAassertEquals( valueCount, count );ELITSA}ELITSA"
		}, {
			"start_line": 132,
			"end_line": 140,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();"
		}, {
			"start_line": 154,
			"end_line": 175,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(oldValue != null && rs.next()){String newValue = rs.getString();if(newValue != null){assertTrue( oldValue.compareTo( newValue ) > 0 );count++;}oldValue = newValue;}assertNull(oldValue);assertFalse( rs.next() );assertEquals( valueCount, count );}"
		}, {
			"start_line": 176,
			"end_line": 189,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();assertNull(oldValue);assertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(rs.next()){"
		}, {
			"start_line": 202,
			"end_line": 212,
			"code_lines": "assertTrue( rs.next() );ELITSAoldValue = rs.getString();ELITSAint count = 1;ELITSAwhile(rs.next()){ELITSAassertTrue( oldValue.compareTo( rs.getString() ) < 0 );ELITSAoldValue = rs.getString();ELITSAcount++;}assertEquals( valueCount, count );}"
		}, {
			"start_line": 213,
			"end_line": 226,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAString oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = rs.getString();assertNull(oldValue);assertTrue( rs.next() );oldValue = rs.getString();int count = 1;while(rs.next()){"
		}, {
			"start_line": 300,
			"end_line": 319,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAInteger oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = (Integer)rs.getObject();assertNull(oldValue);assertTrue( rs.next() );oldValue = (Integer)rs.getObject();int count = 1;while(rs.next()){assertTrue( oldValue.compareTo( (Integer)rs.getObject() ) < 0 );oldValue = (Integer)rs.getObject();count++;}assertEquals( valueCount, count );}"
		}, {
			"start_line": 320,
			"end_line": 328,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSAInteger oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = (Integer)rs.getObject();"
		}, {
			"start_line": 331,
			"end_line": 341,
			"code_lines": "if(newValue != null){ELITSAassertTrue( oldValue.compareTo( newValue ) > 0 );ELITSAcount++;ELITSA}ELITSAoldValue = newValue;ELITSA}ELITSAassertNull(oldValue);assertFalse( rs.next() );assertEquals( valueCount, count );}"
		}, {
			"start_line": 402,
			"end_line": 415,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSALong oldValue;ELITSArs = st.executeQuery(+ table1 +);ELITSAassertTrue( rs.next() );oldValue = (Long)rs.getObject();assertNull(oldValue);assertTrue( rs.next() );oldValue = (Long)rs.getObject();int count = 1;while(rs.next()){"
		}, {
			"start_line": 466,
			"end_line": 474,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSArs = st.executeQuery(+ table3 +);ELITSAassertTrue( rs.next() );ELITSAassertNull( rs.getObject() );assertTrue( rs.next() );"
		}, {
			"start_line": 542,
			"end_line": 564,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);ELITSAResultSet rs;ELITSAint count;ELITSArs = st.executeQuery(+ table1 +);ELITSArs.next();rs.next();rs.previous();rs.last();count = 0;while(rs.previous()) count++;assertEquals( valueCount, count );rs.beforeFirst();count = -1;while(rs.next()) count++;assertEquals( valueCount, count );rs.beforeFirst();count = -1;while(rs.next()) count++;assertEquals( valueCount, count );}"
		}, {
			"start_line": 604,
			"end_line": 610,
			"code_lines": "while(rs.next()){ELITSAString newValue = rs.getString();ELITSAassertTrue( oldValue.compareTo( newValue ) < 0 );ELITSAoldValue = newValue;ELITSAcount++;ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestExceptionMethods.java|",
		"loc": "231",
		"clones": [{
			"start_line": 107,
			"end_line": 113,
			"code_lines": "try{ELITSAst.execute();ELITSAfail();ELITSA}catch(SQLException e){ELITSAassertSQLException(, 0, e);ELITSA}ELITSA"
		}, {
			"start_line": 109,
			"end_line": 117,
			"code_lines": "fail();ELITSA}catch(SQLException e){ELITSAassertSQLException(, 0, e);ELITSA}ELITSA}finally{ELITSAdropTable(con,);ELITSA}}"
		}, {
			"start_line": 118,
			"end_line": 132,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAStatement st = con.createStatement();ELITSAst.execute();ELITSAtry{ELITSAst.execute();ELITSAfail();}catch(SQLException e){assertSQLException(, 0, e);}}finally{dropTable(con,);}}"
		}, {
			"start_line": 139,
			"end_line": 145,
			"code_lines": "try{ELITSAst.execute();ELITSAfail();ELITSA}catch(SQLException e){ELITSAassertSQLException(, 0, e);ELITSA}ELITSA"
		}, {
			"start_line": 168,
			"end_line": 174,
			"code_lines": "fail();ELITSA}catch(SQLException e){ELITSAassertSQLException(, 0, e);ELITSA}ELITSA}finally{ELITSAdropTable(con,);ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestResultSet.java|",
		"loc": "185",
		"clones": [{
			"start_line": 62,
			"end_line": 68,
			"code_lines": "rs.beforeFirst();ELITSAassertTrue(, rs.isBeforeFirst() );ELITSAassertFalse(, rs.isAfterLast() );ELITSAassertEquals(, 0, rs.getRow() );ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.isFirst() );ELITSA"
		}, {
			"start_line": 69,
			"end_line": 89,
			"code_lines": "assertEquals(, 1, rs.getRow() );ELITSAassertTrue(, rs.isLast() );ELITSAassertFalse(, rs.next() );ELITSAassertFalse(, rs.isBeforeFirst() );ELITSAassertTrue(, rs.isAfterLast() );ELITSAassertEquals(, 0, rs.getRow() );ELITSAassertTrue(, rs.first() );assertEquals(, 1, rs.getRow() );assertFalse(, rs.previous() );assertEquals(, 0, rs.getRow() );assertTrue(, rs.isBeforeFirst() );assertFalse(, rs.isAfterLast() );assertTrue(, rs.last() );assertEquals(, 1, rs.getRow() );assertTrue(, rs.isLast() );rs.afterLast();assertFalse(, rs.isBeforeFirst() );assertTrue(, rs.isAfterLast() );assertEquals(, 0, rs.getRow() );}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestOther.java|",
		"loc": "227",
		"clones": [{
			"start_line": 19,
			"end_line": 26,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();"
		}, {
			"start_line": 81,
			"end_line": 87,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSA"
		}, {
			"start_line": 143,
			"end_line": 149,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSA"
		}, {
			"start_line": 169,
			"end_line": 176,
			"code_lines": "con.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();ELITSAcon.createStatement().execute();"
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
			"code_lines": "private static final TestValue[] TESTS = new TestValue[]{ELITSAa(, new Byte( (byte)3),     new Byte( (byte)4)),ELITSAa(, new Byte( (byte)3),     new Byte( (byte)4)),ELITSAa(, new Short( (short)3),   new Short( (short)4)),ELITSAa(, new Integer(3),         new Integer(4)),ELITSAa(, new Long(3),            new Long(4)),ELITSAa(, new Float(3.45),        new Float(4.56)),a(, new Float(3.45),        new Float(4.56)),a(, new Double(3.45),       new Double(4.56)),a(, new Float(3.45),        new Float(4.56)),a(, new Float(3.45),        new Float(4.56)),a(, new Double(3.45),       new Double(4.56)),a(, new BigDecimal(), new BigDecimal()),a(, new BigDecimal(), new BigDecimal()),"
		}, {
			"start_line": 25,
			"end_line": 40,
			"code_lines": "a(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),ELITSAa(, new String(),      new String()),a(, new String(),      new String()),a(, new Date(99, 1,1),      new Date(99, 2,2)),a(, new Time(9, 1,1),       new Time(9, 2,2)),a(, new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),a(, new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),a(, new Timestamp(99, 1,1,0,0,0,0),      new Timestamp(99, 2,2,0,0,0,0)),a(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),a(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),"
		}, {
			"start_line": 41,
			"end_line": 50,
			"code_lines": "a(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, new byte[]{12, 45, 1},  new byte[]{12, 45, 2, 56, 89}),ELITSAa(, Boolean.FALSE,          Boolean.TRUE),ELITSAa(, Boolean.FALSE,          Boolean.TRUE),a(,,),};"
		}, {
			"start_line": 52,
			"end_line": 68,
			"code_lines": "this.testValue = testValue;ELITSA}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+ table);st.close();}catch(Throwable e){}}public void setUp(){tearDown();try{Connection con = AllTests.getConnection();Statement st = con.createStatement();"
		}, {
			"start_line": 71,
			"end_line": 92,
			"code_lines": "pr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.large);ELITSApr.execute();ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.small);ELITSApr.execute();ELITSApr.setObject( 1, testValue.large);pr.setObject( 2, testValue.large);pr.execute();pr.setObject( 1, testValue.large);pr.setObject( 2, testValue.small);pr.execute();pr.setObject( 1, null);pr.setObject( 2, testValue.small);pr.execute();pr.setObject( 1, testValue.small);pr.setObject( 2, null);pr.execute();pr.setObject( 1, null);pr.setObject( 2, null);pr.execute();"
		}, {
			"start_line": 96,
			"end_line": 103,
			"code_lines": "}ELITSApublic void runTest() throws Exception{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAResultSet rs;ELITSArs = st.executeQuery(+ table +);ELITSAassertFalse(, rs.next() );"
		}, {
			"start_line": 108,
			"end_line": 117,
			"code_lines": "assertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSAassertEqualsObject(, rs.getObject(1), rs.getObject(2), false);ELITSAassertTrue(, rs.next() );ELITSAassertEqualsObject(, rs.getObject(1), rs.getObject(2), false);ELITSAassertFalse(, rs.next() );rs = st.executeQuery(+ table +);assertTrue(, rs.next() );"
		}, {
			"start_line": 121,
			"end_line": 127,
			"code_lines": "assertTrue(, rs.next() );ELITSAassertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSA"
		}, {
			"start_line": 125,
			"end_line": 131,
			"code_lines": "assertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSA"
		}, {
			"start_line": 128,
			"end_line": 135,
			"code_lines": "assertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSAassertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );"
		}, {
			"start_line": 133,
			"end_line": 145,
			"code_lines": "assertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertFalse(, rs.next() );ELITSArs = st.executeQuery(+ table +);ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );assertFalse(, rs.next() );rs = st.executeQuery(+ table +);assertTrue(, rs.next() );assertTrue(, rs.next() );assertFalse(, rs.next() );"
		}, {
			"start_line": 160,
			"end_line": 179,
			"code_lines": "assertTrue(, rs.next() );ELITSAassertTrue(, rs.next() );ELITSAassertFalse(, rs.next() );ELITSApr.close();ELITSApr = con.prepareStatement(+ table +);ELITSApr.setObject( 1, testValue.small);ELITSApr.setObject( 2, testValue.large);rs = pr.executeQuery();assertTrue(, rs.next() );assertTrue(, rs.next() );assertTrue(, rs.next() );assertTrue(, rs.next() );assertTrue(, rs.next() );assertFalse(, rs.next() );pr.close();pr = con.prepareStatement(+ table +);pr.setObject( 1, testValue.small);pr.setObject( 2, testValue.large);rs = pr.executeQuery();"
		}, {
			"start_line": 194,
			"end_line": 208,
			"code_lines": "}ELITSAprivate static TestValue a(String dataType, Object small, Object large){ELITSATestValue value = new TestValue();ELITSAvalue.dataType  = dataType;ELITSAvalue.small     = small;ELITSAvalue.large     = large;ELITSAreturn value;}private static class TestValue{String dataType;Object small;Object large;}}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestDataTypes.java|",
		"loc": "279",
		"clones": [{
			"start_line": 27,
			"end_line": 39,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+ table);ELITSAst.close();}catch(Throwable e){}}public void setUp(){tearDown();"
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
			"code_lines": "private static boolean init;ELITSAprotected void setUp() throws Exception{ELITSAif(init) return;ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAdropTable( con,);ELITSAst.execute();init = true;}"
		}, {
			"start_line": 196,
			"end_line": 202,
			"code_lines": "assertEquals(1,pr.executeUpdate());ELITSArs = pr.getGeneratedKeys();ELITSAassertNotNull(, rs);ELITSAassertEquals(,1,rs.getMetaData().getColumnCount());ELITSAassertEquals(,,rs.getMetaData().getColumnName(1));ELITSAassertRowCount(1,rs);ELITSA"
		}, {
			"start_line": 209,
			"end_line": 215,
			"code_lines": "assertEquals(1,pr.executeUpdate());ELITSArs = pr.getGeneratedKeys();ELITSAassertNotNull(, rs);ELITSAassertEquals(,1,rs.getMetaData().getColumnCount());ELITSAassertEquals(,,rs.getMetaData().getColumnName(1));ELITSAassertRowCount(1,rs);ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestLanguage.java|",
		"loc": "185",
		"clones": [{
			"start_line": 83,
			"end_line": 89,
			"code_lines": "try {ELITSAstat.execute();ELITSA}ELITSAcatch (SQLException se) {ELITSAassertMessage(se,);ELITSA}ELITSA"
		}, {
			"start_line": 90,
			"end_line": 102,
			"code_lines": "try {ELITSAstat.execute();ELITSA}ELITSAcatch (SQLException se) {ELITSAassertMessage(se,);ELITSA}ELITSAtry {stat.execute();}catch (SQLException se) {assertMessage(se,);}"
		}, {
			"start_line": 101,
			"end_line": 107,
			"code_lines": "}ELITSA}ELITSAfinally {ELITSAconn.close();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 153,
			"end_line": 161,
			"code_lines": "if (diff.size() > 0) {ELITSAfailed = true;ELITSAmsgBuf.append().append( OTHER_LANGUAGES[i] ).append();ELITSAfor (Iterator itr = diff.iterator(); itr.hasNext(); ) {ELITSAmsgBuf.append(itr.next());ELITSAif (itr.hasNext()) msgBuf.append(',');ELITSA}}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestAlterTable2.java|",
		"loc": "60",
		"clones": [{
			"start_line": 25,
			"end_line": 34,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+table+);ELITSAst.execute(+table+);ELITSAResultSet rs = st.executeQuery(+ table);ELITSAassertRSMetaData( rs, new String[]{,},  new int[]{Types.VARCHAR, Types.VARCHAR} );ELITSArs = con.getMetaData().getIndexInfo( null, null, table, false, false );assertRowCount( 1, rs );}"
		}, {
			"start_line": 50,
			"end_line": 57,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+table+);ELITSAst.execute(+table+);ELITSAResultSet rs = st.executeQuery(+ table);ELITSAassertRSMetaData( rs, new String[]{,},  new int[]{Types.VARCHAR, Types.VARCHAR} );ELITSArs = con.getMetaData().getIndexInfo( null, null, table, false, false );"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestAlterTable.java|",
		"loc": "96",
		"clones": [{
			"start_line": 5,
			"end_line": 12,
			"code_lines": "public void setUp(){ELITSAtearDown();ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);"
		}, {
			"start_line": 11,
			"end_line": 21,
			"code_lines": "st.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.execute(+ table +);st.execute(+ table +);st.execute(+ table +);st.execute(+ table +);"
		}, {
			"start_line": 19,
			"end_line": 26,
			"code_lines": "st.execute(+ table +);ELITSAst.execute(+ table +);ELITSAst.close();ELITSA}catch(Throwable e){ELITSAe.printStackTrace();ELITSA}ELITSA}"
		}, {
			"start_line": 25,
			"end_line": 33,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry {ELITSAdropTable( AllTests.getConnection(), table );ELITSA} catch (SQLException ex) {ELITSAex.printStackTrace();ELITSA}}"
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
			"code_lines": "st.close();ELITSA}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();ELITSA}}"
		}, {
			"start_line": 114,
			"end_line": 127,
			"code_lines": "rs.next();ELITSAint count = rs.getInt(1);ELITSAif (count != rowCount)ELITSASystem.out.println(+ count +);ELITSAelse System.out.println(+ time +);ELITSAst.close();ELITSA}catch(Exception e){System.out.println(+e);}finally{System.out.println();System.out.println();}}"
		}, {
			"start_line": 161,
			"end_line": 170,
			"code_lines": "else System.out.println(+ time +);ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();}}"
		}, {
			"start_line": 197,
			"end_line": 203,
			"code_lines": "rs.insertRow();ELITSA}ELITSAtime += System.currentTimeMillis();ELITSArs = st.executeQuery(+ tableName);ELITSArs.next();ELITSAint count = rs.getInt(1);ELITSA"
		}, {
			"start_line": 215,
			"end_line": 221,
			"code_lines": "System.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 226,
			"end_line": 244,
			"code_lines": "try{ELITSAStatement st1 = con.createStatement();ELITSAResultSet rs = st1.executeQuery(+ tableName);ELITSArs.next();ELITSAint count = rs.getInt(1);ELITSAif (count != rowCount){ELITSAif (count == 0){createTestDataWithClassicInsert( con );rs = st1.executeQuery(+ tableName);rs.next();count = rs.getInt(1);}if (count != rowCount){System.out.println(+ (rowCount-count) +);return;}}st1.close();"
		}, {
			"start_line": 262,
			"end_line": 272,
			"code_lines": "time += System.currentTimeMillis();ELITSASystem.out.println(+ time +);ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();System.out.println();}}"
		}, {
			"start_line": 335,
			"end_line": 342,
			"code_lines": "}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();ELITSA}ELITSA}"
		}, {
			"start_line": 349,
			"end_line": 370,
			"code_lines": "PreparedStatement pr = con.prepareStatement(+ tableName +);ELITSAlong time = -System.currentTimeMillis();ELITSAfor (int i=0; i<rowCount; i++){ELITSApr.setBytes (  1, byteArray );ELITSApr.setString(  2 ,);ELITSApr.setDate  (  3 , new Date( System.currentTimeMillis() ) );ELITSApr.setFloat (  4, (float)1234.56789 );pr.setFloat (  5 , (float)9876.54321 );pr.setBytes (  6, largeByteArray );pr.setInt   (  7 , i );pr.setDouble(  8 , 23.45 );pr.setDouble(  9 , 567.45 );pr.setFloat (  10 , (float)78.89 );pr.setTime  (  11, new Time( System.currentTimeMillis() ) );pr.setShort (  12, (short)23456 );pr.setFloat (  13, (float)34.56 );pr.setString(  14,);pr.setString(  15 ,);pr.setByte  (  16, (byte)28 );pr.setBytes (  17, byteArray );pr.setString(  18,);"
		}, {
			"start_line": 370,
			"end_line": 378,
			"code_lines": "int updateCount = pr.executeUpdate();ELITSAif (updateCount != 1){ELITSASystem.out.println(+ updateCount +);ELITSAreturn;ELITSA}ELITSA}ELITSAtime += System.currentTimeMillis();System.out.println(+ time +);"
		}, {
			"start_line": 380,
			"end_line": 388,
			"code_lines": "pr.close();ELITSA}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();ELITSA}}"
		}, {
			"start_line": 398,
			"end_line": 404,
			"code_lines": "pr.setBytes (  1, byteArray );ELITSApr.setString(  2 ,);ELITSApr.setDate  (  3 , new Date( System.currentTimeMillis() ) );ELITSApr.setFloat (  4, (float)1234.56789 );ELITSApr.setFloat (  5 , (float)9876.54321 );ELITSApr.setBytes (  6, largeByteArray );ELITSA"
		}, {
			"start_line": 405,
			"end_line": 417,
			"code_lines": "pr.setDouble(  8 , 23.45 );ELITSApr.setDouble(  9 , 567.45 );ELITSApr.setFloat (  10 , (float)78.89 );ELITSApr.setTime  (  11, new Time( System.currentTimeMillis() ) );ELITSApr.setShort (  12, (short)23456 );ELITSApr.setFloat (  13, (float)34.56 );ELITSApr.setString(  14,);pr.setString(  15 ,);pr.setByte  (  16, (byte)28 );pr.setBytes (  17, byteArray );pr.setString(  18,);pr.setInt   (  19 , i );"
		}, {
			"start_line": 422,
			"end_line": 435,
			"code_lines": "return;ELITSA}ELITSA}ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println(+ time +);ELITSApr.close();ELITSA}catch(Exception e){System.out.println(+e);}finally{System.out.println();System.out.println();}}"
		}, {
			"start_line": 463,
			"end_line": 474,
			"code_lines": "}ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println(+ time +);ELITSAst.close();ELITSA}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{System.out.println();System.out.println();}}"
		}, {
			"start_line": 495,
			"end_line": 502,
			"code_lines": "}catch(Exception e){ELITSASystem.out.println(+e);ELITSA}finally{ELITSASystem.out.println();ELITSASystem.out.println();ELITSA}ELITSA}"
		}, {
			"start_line": 503,
			"end_line": 514,
			"code_lines": "System.out.println();ELITSASystem.out.println(+ rowCount +);ELITSAtry{ELITSAjava.io.FileOutputStream fos = new java.io.FileOutputStream(tableName+);ELITSAbyte bytes[] = new byte[1024];ELITSAfor(int i=0; i<rowCount; i++){ELITSAfos.write(bytes);}fos.close();java.io.FileInputStream fis = new java.io.FileInputStream(tableName+);long time = -System.currentTimeMillis();"
		}, {
			"start_line": 521,
			"end_line": 534,
			"code_lines": "pr.close();ELITSAtime += System.currentTimeMillis();ELITSASystem.out.println(+ time +);ELITSAfis.close();ELITSAjava.io.File file = new java.io.File(tableName+);ELITSAfile.delete();ELITSA}catch(Exception e){System.out.println(+e);}finally{System.out.println();System.out.println();}}"
		}, {
			"start_line": 541,
			"end_line": 560,
			"code_lines": "+ELITSA+ELITSA+ELITSA+ELITSA+ELITSA+ELITSA+++++++++++++"
		}, {
			"start_line": 571,
			"end_line": 577,
			"code_lines": "try{ELITSAStatement st = con.createStatement();ELITSAst.execute(+ tableName);ELITSAst.close();ELITSA}catch(Exception e){}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestMoneyRounding.java|",
		"loc": "66",
		"clones": [{
			"start_line": 12,
			"end_line": 22,
			"code_lines": "}ELITSApublic void tearDown(){ELITSAtry{ELITSAConnection con = AllTests.getConnection();ELITSAStatement st = con.createStatement();ELITSAst.execute(+ table);ELITSAst.close();}catch(Throwable e){}}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestGroupBy.java|",
		"loc": "263",
		"clones": [{
			"start_line": 91,
			"end_line": 97,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAPreparedStatement pr = con.prepareStatement(+ table1 +);ELITSAfor(int i=1; i<=3; i++){ELITSAResultSet rs = pr.executeQuery( );ELITSAassertTrue  (+i, rs.next());ELITSA"
		}, {
			"start_line": 104,
			"end_line": 110,
			"code_lines": "init();ELITSAConnection con = AllTests.getConnection();ELITSAPreparedStatement pr = con.prepareStatement(+ table1 +);ELITSAfor(int i=1; i<=3; i++){ELITSAResultSet rs = pr.executeQuery( );ELITSAassertTrue  (+i, rs.next());ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestDeleteUpdate.java|",
		"loc": "94",
		"clones": [{
			"start_line": 62,
			"end_line": 73,
			"code_lines": "assertRowCount( 10,);ELITSAst.execute();ELITSAassertEqualsRsValue(,);ELITSAassertRowCount( 10,);ELITSAst.execute();ELITSAassertEqualsRsValue(,);ELITSAassertRowCount( 10,);st.execute();assertEqualsRsValue(,);assertRowCount( 10,);st.execute();"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestTransactions.java|",
		"loc": "345",
		"clones": [{
			"start_line": 34,
			"end_line": 40,
			"code_lines": "con.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 2,);ELITSA"
		}, {
			"start_line": 45,
			"end_line": 51,
			"code_lines": "try{ELITSAcon.createStatement().execute();ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 52,
			"end_line": 58,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSA"
		}, {
			"start_line": 59,
			"end_line": 72,
			"code_lines": "con.createStatement().execute();ELITSAassertRowCount( 2,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 4,);ELITSAcon.commit();ELITSAassertRowCount( 4,);ELITSA}finally{try{con.createStatement().execute();}catch(Throwable e){e.printStackTrace();}con.setAutoCommit(true);}}"
		}, {
			"start_line": 77,
			"end_line": 84,
			"code_lines": "assertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 2,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 4,);"
		}, {
			"start_line": 86,
			"end_line": 93,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute();ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}"
		}, {
			"start_line": 94,
			"end_line": 105,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 1,);ELITSAcon.setAutoCommit(false);con.createStatement().execute();assertRowCount( 2,);con.createStatement().execute();assertRowCount( 4,);"
		}, {
			"start_line": 107,
			"end_line": 114,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute();ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}"
		}, {
			"start_line": 160,
			"end_line": 166,
			"code_lines": "assertEquals( 1, con.createStatement().executeUpdate() );ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSAassertEquals( 1, con.createStatement().executeUpdate() );ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSA"
		}, {
			"start_line": 174,
			"end_line": 181,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute();ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}"
		}, {
			"start_line": 197,
			"end_line": 203,
			"code_lines": "assertEquals(1, con.createStatement().executeUpdate());ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSAassertEquals(1, con.createStatement().executeUpdate());ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSA"
		}, {
			"start_line": 200,
			"end_line": 206,
			"code_lines": "assertEquals(1, con.createStatement().executeUpdate());ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSAassertEquals(1, con.createStatement().executeUpdate());ELITSAassertEqualsRsValue(,);ELITSAassertEqualsRsValue(new Integer(1),);ELITSA"
		}, {
			"start_line": 216,
			"end_line": 222,
			"code_lines": "Connection con = AllTests.getConnection();ELITSAtry{ELITSAcon.setAutoCommit(false);ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSA"
		}, {
			"start_line": 227,
			"end_line": 235,
			"code_lines": "rs.beforeFirst();ELITSAassertTrue( rs.next() );ELITSAassertEquals(, rs.getString());ELITSAassertFalse( rs.next() );ELITSA}finally{ELITSAtry{ELITSAcon.createStatement().execute();}catch(Throwable e){e.printStackTrace();}"
		}, {
			"start_line": 231,
			"end_line": 238,
			"code_lines": "}finally{ELITSAtry{ELITSAcon.createStatement().execute();ELITSA}catch(Throwable e){e.printStackTrace();}ELITSAcon.setAutoCommit(true);ELITSA}ELITSA}"
		}, {
			"start_line": 240,
			"end_line": 259,
			"code_lines": "try{ELITSAcon.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon.createStatement().execute();ELITSAResultSet rs = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE)ELITSA.executeQuery();ELITSArs.moveToInsertRow();rs.updateString(,);rs.insertRow();rs.beforeFirst();assertTrue( rs.next() );assertEquals(, rs.getString());assertFalse( rs.next() );}finally{try{con.createStatement().execute();}catch(Throwable e){e.printStackTrace();}}}"
		}, {
			"start_line": 282,
			"end_line": 288,
			"code_lines": "con1.createStatement().execute();ELITSAassertRowCount( 0,);ELITSAcon1.setAutoCommit(false);ELITSAcon1.createStatement().execute();ELITSAResultSet rs2 = con2.createStatement().executeQuery();ELITSAassertTrue( rs2.next() );ELITSA"
		}, {
			"start_line": 289,
			"end_line": 295,
			"code_lines": "}finally{ELITSAdropTable(con1,);ELITSAcon1.setAutoCommit(true);ELITSAcon2.close();ELITSA}ELITSA}ELITSA"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/junit/TestTokenizer.java|",
		"loc": "105",
		"clones": [{
			"start_line": 64,
			"end_line": 70,
			"code_lines": "+ELITSA;ELITSAsuccessTest(SQL_1);ELITSAfinal String SQL_2 =ELITSA;ELITSAfailureTest(SQL_2,);ELITSA"
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
			"code_lines": "case SQLTokenizer.COMMA:ELITSAcontinue;ELITSAdefault:ELITSAthrow new Error();ELITSA}ELITSA}ELITSA}"
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
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:case SQLTokenizer.SMALLINT:case SQLTokenizer.INT:return getIntImpl();case SQLTokenizer.BIGINT:"
		}, {
			"start_line": 158,
			"end_line": 164,
			"code_lines": "case SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSA"
		}, {
			"start_line": 182,
			"end_line": 195,
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:case SQLTokenizer.SMALLINT:case SQLTokenizer.INT:return getIntImpl();case SQLTokenizer.BIGINT:return getLongImpl();case SQLTokenizer.REAL:"
		}, {
			"start_line": 196,
			"end_line": 202,
			"code_lines": "case SQLTokenizer.FLOAT:ELITSAcase SQLTokenizer.DOUBLE:ELITSAcase SQLTokenizer.MONEY:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSA"
		}, {
			"start_line": 223,
			"end_line": 243,
			"code_lines": "if(isNull()) return 0;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:case SQLTokenizer.SMALLINT:case SQLTokenizer.INT:return getIntImpl();case SQLTokenizer.BIGINT:return getLongImpl();case SQLTokenizer.REAL:return getFloatImpl();case SQLTokenizer.FLOAT:case SQLTokenizer.DOUBLE:case SQLTokenizer.MONEY:case SQLTokenizer.SMALLMONEY:case SQLTokenizer.NUMERIC:case SQLTokenizer.DECIMAL:"
		}, {
			"start_line": 377,
			"end_line": 409,
			"code_lines": "if(isNull()) return null;ELITSAint dataType = getDataType();ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn getBoolean() ? Boolean.TRUE : Boolean.FALSE;ELITSAcase SQLTokenizer.BINARY:case SQLTokenizer.VARBINARY:return getBytes();case SQLTokenizer.TINYINT:case SQLTokenizer.SMALLINT:case SQLTokenizer.INT:return new Integer( getInt() );case SQLTokenizer.BIGINT:return new Long( getLong() );case SQLTokenizer.REAL:return new Float( getFloat() );case SQLTokenizer.FLOAT:case SQLTokenizer.DOUBLE:return new Double( getDouble() );case SQLTokenizer.MONEY:case SQLTokenizer.SMALLMONEY:return Money.createFromUnscaledValue( getMoney() );case SQLTokenizer.NUMERIC:case SQLTokenizer.DECIMAL:return getNumeric();case SQLTokenizer.CHAR:case SQLTokenizer.NCHAR:case SQLTokenizer.VARCHAR:case SQLTokenizer.NVARCHAR:case SQLTokenizer.LONGNVARCHAR:case SQLTokenizer.LONGVARCHAR:"
		}, {
			"start_line": 417,
			"end_line": 426,
			"code_lines": "case SQLTokenizer.LONGVARBINARY:ELITSAreturn getBytes();ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAreturn new DateTime( getLong(), dataType );case SQLTokenizer.UNIQUEIDENTIFIER:return getBytes();"
		}, {
			"start_line": 579,
			"end_line": 589,
			"code_lines": "switch(operation){ELITSAcase IN:ELITSAcase EQUALS_NULL:ELITSAcase EQUALS:    return comp == 0;ELITSAcase GREATER:   return comp >  0;ELITSAcase GRE_EQU:   return comp >= 0;ELITSAcase LESSER:    return comp <  0;case LES_EQU:   return comp <= 0;case UNEQUALS:  return comp != 0;case BETWEEN:"
		}, {
			"start_line": 601,
			"end_line": 611,
			"code_lines": "switch(operation){ELITSAcase IN:ELITSAcase EQUALS_NULL:ELITSAcase EQUALS:    return comp == 0;ELITSAcase GREATER:   return comp >  0;ELITSAcase GRE_EQU:   return comp >= 0;ELITSAcase LESSER:    return comp <  0;case LES_EQU:   return comp <= 0;case UNEQUALS:  return comp != 0;case BETWEEN:"
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
			"code_lines": "}ELITSAif(serializeConnections.size() > 0){ELITSAIterator values = locks.values().iterator();ELITSAwhile(values.hasNext()){ELITSATableStorePage lock = (TableStorePage)values.next();ELITSAif(lock.con != con) return null;ELITSA}}tabLockConnection = con;tabLockCount++;TableStorePage lock = new TableStorePage(con, this, LOCK_TAB, page);"
		}, {
			"start_line": 368,
			"end_line": 377,
			"code_lines": "}ELITSA}else{ELITSAprev.nextLock = lock.nextLock;ELITSA}ELITSAreturn;ELITSA}ELITSAprev = lock;lock = lock.nextLock;}"
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
			"code_lines": "if(isNull()) return null;ELITSAreturn new MutableNumeric(getInt());ELITSA}ELITSAObject getObject() throws Exception {ELITSAif(isNull()) return null;ELITSAreturn Utils.getInteger(getInt());ELITSA}"
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
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAreturn getString().getBytes();}final String getString() throws Exception {if(isNull()) return null;"
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
			"code_lines": "try{ELITSAExpression expr = getValue(i);ELITSAwasNull = expr.isNull();ELITSAreturn expr.getLong();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}}"
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
			"code_lines": "StringBuffer buf = new StringBuffer(bytes.length << 1);ELITSAfor(int i=0; i<bytes.length; i++){ELITSAbuf.append( digits[ (bytes[i] >> 4) & 0x0F ] );ELITSAbuf.append( digits[ (bytes[i]     ) & 0x0F ] );ELITSA}ELITSAreturn buf.toString();ELITSA}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/IndexScrollStatus.java|",
		"loc": "101",
		"clones": [{
			"start_line": 60,
			"end_line": 72,
			"code_lines": "if(idx == -1){ELITSAif(status.nodeValue != null){ELITSAif(status.nodeValue instanceof IndexNode){ELITSAlevel++;ELITSAnodeStack.push(ELITSAnew IndexNodeScrollStatus(     (IndexNode)status.nodeValue,ELITSA(expressions.get(level).getAlias() != SQLTokenizer.DESC_STR),scroll, level));continue;}elsereturn getReturnValue(status.nodeValue);}"
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
			"code_lines": "if(failed == null){ELITSAfailed = new BatchUpdateException(ex.getMessage(), ex.getSQLState(), ex.getErrorCode(), result);ELITSAfailed.initCause(ex);ELITSA}ELITSAfailed.setNextException(ex);ELITSA}ELITSA}batches.clear();if(failed != null)throw failed;return result;}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/Index.java|",
		"loc": "368",
		"clones": [{
			"start_line": 33,
			"end_line": 42,
			"code_lines": "if(page == null)ELITSAreturn null;ELITSAif(i + 1 == count)ELITSAreturn page.getValue();ELITSAelseELITSApage = (IndexNode)page.getValue();ELITSA}throw new Error();}"
		}, {
			"start_line": 132,
			"end_line": 140,
			"code_lines": "break;ELITSAcase SQLTokenizer.BIGINT:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAcase SQLTokenizer.MONEY:case SQLTokenizer.SMALLMONEY:"
		}, {
			"start_line": 151,
			"end_line": 157,
			"code_lines": "break;ELITSAcase SQLTokenizer.VARBINARY:ELITSAcase SQLTokenizer.BINARY:ELITSAcase SQLTokenizer.LONGVARBINARY:ELITSAcase SQLTokenizer.BLOB:ELITSAcase SQLTokenizer.UNIQUEIDENTIFIER:ELITSA"
		}, {
			"start_line": 266,
			"end_line": 273,
			"code_lines": "node.addNode( digit, rowOffset );ELITSAreturn null;ELITSA}ELITSAreturn node.addRoot(digit);ELITSA}ELITSAnode = node.addNode(digit);ELITSAif(node.isEmpty()){"
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
			"code_lines": "}catch(Throwable e){ELITSAif(raFile != null)ELITSAtry{ELITSAraFile.close();ELITSA}catch(Exception e2){ELITSADriverManager.println(e2.toString());ELITSA}throw SmallSQLException.createFromException(e);}}"
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
			"code_lines": "}ELITSAfinal boolean rowInserted(){ELITSAreturn false;ELITSA}ELITSAfinal boolean rowDeleted(){ELITSAreturn false;ELITSA}"
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
			"code_lines": "if(value == null){ELITSAif(expr.isNull())ELITSAdataType = expr.getDataType();ELITSAelseELITSAinitValue( expr );ELITSA}else if(!expr.isNull()){ELITSAswitch(dataType){case SQLTokenizer.TINYINT:case SQLTokenizer.SMALLINT:case SQLTokenizer.INT:"
		}, {
			"start_line": 358,
			"end_line": 367,
			"code_lines": "if(obj == null) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn (obj == Boolean.TRUE) ? 1 : 0;ELITSAcase SQLTokenizer.TINYINT:ELITSAcase SQLTokenizer.SMALLINT:case SQLTokenizer.INT:case SQLTokenizer.BIGINT:"
		}, {
			"start_line": 413,
			"end_line": 420,
			"code_lines": "if(obj == null) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAreturn (obj.equals(Boolean.TRUE)) ? 1 : 0;ELITSAcase SQLTokenizer.INT:ELITSAcase SQLTokenizer.BIGINT:ELITSAcase SQLTokenizer.DOUBLE:"
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
			"code_lines": "{ CUSTOM_MESSAGE                     ,},ELITSA{ UNSUPPORTED_OPERATION           ,},ELITSA{ CANT_LOCK_FILE                  ,},ELITSA{ DB_EXISTENT                     ,},ELITSA{ DB_NONEXISTENT                  ,},ELITSA{ DB_NOT_DIRECTORY                ,},ELITSA{ DB_NOTCONNECTED                 ,},{ CONNECTION_CLOSED               ,},{ VIEW_INSERT                     ,},{ VIEWDROP_NOT_VIEW               ,},{ VIEW_CANTDROP                   ,},{ RSET_NOT_PRODUCED               ,},{ RSET_READONLY                   ,},{ RSET_FWDONLY                    ,},{ RSET_CLOSED                     ,},{ RSET_NOT_INSERT_ROW             ,},{ RSET_ON_INSERT_ROW              ,},{ ROWSOURCE_READONLY              ,},{ STMT_IS_CLOSED                  ,},{ SUBQUERY_COL_COUNT              ,},{ JOIN_DELETE                     ,},{ JOIN_INSERT                     ,},{ DELETE_WO_FROM                  ,},{ INSERT_WO_FROM                  ,},{ TABLE_CANT_RENAME               ,},{ TABLE_CANT_DROP                 ,},{ TABLE_CANT_DROP_LOCKED          ,},{ TABLE_CORRUPT_PAGE              ,},{ TABLE_MODIFIED                  ,},{ TABLE_DEADLOCK                  ,},{ TABLE_OR_VIEW_MISSING           ,},{ TABLE_FILE_INVALID              ,},{ TABLE_OR_VIEW_FILE_INVALID      ,},{ TABLE_EXISTENT                  ,},{ FK_NOT_TABLE                    ,},{ PK_ONLYONE                      ,},{ KEY_DUPLICATE                   ,},{ MONTH_TOOLARGE                  ,},{ DAYS_TOOLARGE                   ,},{ HOURS_TOOLARGE                  ,},{ MINUTES_TOOLARGE                ,},{ SECS_TOOLARGE                   ,},{ MILLIS_TOOLARGE                 ,},{ DATETIME_INVALID                ,},{ UNSUPPORTED_CONVERSION_OPER     ,},{ UNSUPPORTED_DATATYPE_OPER       ,},{ UNSUPPORTED_DATATYPE_FUNC       ,},{ UNSUPPORTED_CONVERSION_FUNC     ,},{ UNSUPPORTED_TYPE_CONV           ,},{ UNSUPPORTED_TYPE_SUM            ,},{ UNSUPPORTED_TYPE_MAX            ,},{ UNSUPPORTED_CONVERSION          ,},{ INSERT_INVALID_LEN              ,},{ SUBSTR_INVALID_LEN              ,},{ VALUE_STR_TOOLARGE              ,},{ VALUE_BIN_TOOLARGE              ,},{ VALUE_NULL_INVALID              ,},{ VALUE_CANT_CONVERT              ,},{ BYTEARR_INVALID_SIZE            ,},{ LOB_DELETED                     ,},{ PARAM_CLASS_UNKNOWN             ,},{ PARAM_EMPTY                     ,},{ PARAM_IDX_OUT_RANGE             ,},{ COL_DUPLICATE                      ,},{ COL_MISSING                     ,},{ COL_VAL_UNMATCH                 ,},{ COL_INVALID_SIZE                ,},{ COL_WRONG_PREFIX                ,},{ COL_READONLY                    ,},{ COL_INVALID_NAME                ,},{ COL_IDX_OUT_RANGE               ,},{ COL_AMBIGUOUS                   ,},{ GROUP_AGGR_INVALID              ,},{ GROUP_AGGR_NOTPART              ,},{ ORDERBY_INTERNAL                ,},{ UNION_DIFFERENT_COLS            ,},{ INDEX_EXISTS                    ,},{ INDEX_MISSING                   ,},{ INDEX_FILE_INVALID              ,},{ INDEX_CORRUPT                   ,},{ INDEX_TOOMANY_EQUALS            ,},{ FILE_TOONEW                     ,},{ FILE_TOOOLD                     ,},{ FILE_CANT_DELETE                ,},{ ROW_0_ABSOLUTE                  ,},{ ROW_NOCURRENT                   ,},{ ROWS_WRONG_MAX                  ,},{ ROW_LOCKED                      ,},{ ROW_DELETED                     ,},{ SAVEPT_INVALID_TRANS            ,},{ SAVEPT_INVALID_DRIVER           ,},{ ALIAS_UNSUPPORTED               ,},{ ISOLATION_UNKNOWN               ,},{ FLAGVALUE_INVALID               ,},{ ARGUMENT_INVALID                ,},{ GENER_KEYS_UNREQUIRED           ,},{ SEQUENCE_HEX_INVALID            ,},{ SEQUENCE_HEX_INVALID_STR        ,},{ SYNTAX_BASE_OFS                  ,},{ SYNTAX_BASE_END                  ,},{ STXADD_ADDITIONAL_TOK              ,},{ STXADD_IDENT_EXPECT              ,},{ STXADD_IDENT_EMPTY               ,},{ STXADD_IDENT_WRONG               ,},{ STXADD_OPER_MINUS               ,},{ STXADD_FUNC_UNKNOWN               ,},{ STXADD_PARAM_INVALID_COUNT      ,},{ STXADD_JOIN_INVALID                ,},{ STXADD_FROM_PAR_CLOSE                ,},{ STXADD_KEYS_REQUIRED                ,},{ STXADD_NOT_NUMBER                    ,},{ STXADD_COMMENT_OPEN              ,},};"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/language/Language_de.java|",
		"loc": "122",
		"clones": [{
			"start_line": 9,
			"end_line": 71,
			"code_lines": "{ UNSUPPORTED_OPERATION           ,},ELITSA{ CANT_LOCK_FILE                  ,},ELITSA{ DB_EXISTENT                     ,},ELITSA{ DB_NONEXISTENT                  ,},ELITSA{ DB_NOT_DIRECTORY                ,},ELITSA{ DB_NOTCONNECTED                 ,},ELITSA{ CONNECTION_CLOSED               ,},{ VIEW_INSERT                     ,},{ VIEWDROP_NOT_VIEW               ,},{ VIEW_CANTDROP                   ,},{ RSET_NOT_PRODUCED               ,},{ RSET_READONLY                   ,},{ RSET_FWDONLY                    ,},{ RSET_CLOSED                     ,},{ RSET_NOT_INSERT_ROW             ,},{ RSET_ON_INSERT_ROW              ,},{ ROWSOURCE_READONLY              ,},{ STMT_IS_CLOSED                  ,},{ SUBQUERY_COL_COUNT              ,},{ JOIN_DELETE                     ,},{ JOIN_INSERT                     ,},{ DELETE_WO_FROM                  ,},{ INSERT_WO_FROM                  ,},{ TABLE_CANT_RENAME               ,},{ TABLE_CANT_DROP                 ,},{ TABLE_CANT_DROP_LOCKED          ,},{ TABLE_CORRUPT_PAGE              ,},{ TABLE_MODIFIED                  ,},{ TABLE_DEADLOCK                  ,},{ TABLE_OR_VIEW_MISSING           ,},{ TABLE_FILE_INVALID              ,},{ TABLE_OR_VIEW_FILE_INVALID      ,},{ TABLE_EXISTENT                  ,},{ FK_NOT_TABLE                    ,},{ PK_ONLYONE                      ,},{ KEY_DUPLICATE                   ,},{ MONTH_TOOLARGE                  ,},{ DAYS_TOOLARGE                   ,},{ HOURS_TOOLARGE                  ,},{ MINUTES_TOOLARGE                ,},{ SECS_TOOLARGE                   ,},{ MILLIS_TOOLARGE                 ,},{ DATETIME_INVALID                ,},{ UNSUPPORTED_CONVERSION_OPER     ,},{ UNSUPPORTED_DATATYPE_OPER       ,},{ UNSUPPORTED_DATATYPE_FUNC       ,},{ UNSUPPORTED_CONVERSION_FUNC     ,},{ UNSUPPORTED_TYPE_CONV           ,},{ UNSUPPORTED_TYPE_SUM            ,},{ UNSUPPORTED_TYPE_MAX            ,},{ UNSUPPORTED_CONVERSION          ,},{ INSERT_INVALID_LEN              ,},{ SUBSTR_INVALID_LEN              ,},{ VALUE_STR_TOOLARGE              ,},{ VALUE_BIN_TOOLARGE              ,},{ VALUE_NULL_INVALID              ,},{ VALUE_CANT_CONVERT              ,},{ BYTEARR_INVALID_SIZE            ,},{ LOB_DELETED                     ,},{ PARAM_CLASS_UNKNOWN             ,},{ PARAM_EMPTY                     ,},{ PARAM_IDX_OUT_RANGE             ,},"
		}, {
			"start_line": 72,
			"end_line": 106,
			"code_lines": "{ COL_MISSING                     ,},ELITSA{ COL_VAL_UNMATCH                 ,},ELITSA{ COL_INVALID_SIZE                ,},ELITSA{ COL_WRONG_PREFIX                ,},ELITSA{ COL_READONLY                    ,},ELITSA{ COL_INVALID_NAME                ,},ELITSA{ COL_IDX_OUT_RANGE               ,},{ COL_AMBIGUOUS                   ,},{ GROUP_AGGR_INVALID              ,},{ GROUP_AGGR_NOTPART              ,},{ ORDERBY_INTERNAL                ,},{ UNION_DIFFERENT_COLS            ,},{ INDEX_EXISTS                    ,},{ INDEX_MISSING                   ,},{ INDEX_FILE_INVALID              ,},{ INDEX_CORRUPT                   ,},{ INDEX_TOOMANY_EQUALS            ,},{ FILE_TOONEW                     ,},{ FILE_TOOOLD                     ,},{ FILE_CANT_DELETE                ,},{ ROW_0_ABSOLUTE                  ,},{ ROW_NOCURRENT                   ,},{ ROWS_WRONG_MAX                  ,},{ ROW_LOCKED                      ,},{ ROW_DELETED                     ,},{ SAVEPT_INVALID_TRANS            ,},{ SAVEPT_INVALID_DRIVER           ,},{ ALIAS_UNSUPPORTED               ,},{ ISOLATION_UNKNOWN               ,},{ FLAGVALUE_INVALID               ,},{ ARGUMENT_INVALID                ,},{ GENER_KEYS_UNREQUIRED           ,},{ SEQUENCE_HEX_INVALID            ,},{ SEQUENCE_HEX_INVALID_STR        ,},"
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
			"code_lines": "addMessages(ENTRIES);ELITSA}ELITSApublic String[][] getEntries() {ELITSAreturn ENTRIES;ELITSA}ELITSAprivate final String[][] ENTRIES = {ELITSA{ UNSUPPORTED_OPERATION           ,},{ CANT_LOCK_FILE                  ,},{ DB_EXISTENT                     ,},{ DB_NONEXISTENT                  ,},{ DB_NOT_DIRECTORY                ,},{ DB_NOTCONNECTED                 ,},{ CONNECTION_CLOSED               ,},{ VIEW_INSERT                     ,},{ VIEWDROP_NOT_VIEW               ,},{ VIEW_CANTDROP                   ,},{ RSET_NOT_PRODUCED               ,},{ RSET_READONLY                   ,},{ RSET_FWDONLY                    ,},{ RSET_CLOSED                     ,},{ RSET_NOT_INSERT_ROW             ,},{ RSET_ON_INSERT_ROW              ,},{ ROWSOURCE_READONLY              ,},{ STMT_IS_CLOSED                  ,},{ SUBQUERY_COL_COUNT              ,},{ JOIN_DELETE                     ,},{ JOIN_INSERT                     ,},{ DELETE_WO_FROM                  ,},{ INSERT_WO_FROM                  ,},{ TABLE_CANT_RENAME               ,},{ TABLE_CANT_DROP                 ,},{ TABLE_CANT_DROP_LOCKED          ,},{ TABLE_CORRUPT_PAGE              ,},{ TABLE_MODIFIED                  ,},{ TABLE_DEADLOCK                  ,},{ TABLE_OR_VIEW_MISSING           ,},{ TABLE_FILE_INVALID              ,},{ TABLE_OR_VIEW_FILE_INVALID      ,},{ TABLE_EXISTENT                  ,},{ FK_NOT_TABLE                    ,},{ PK_ONLYONE                      ,},{ KEY_DUPLICATE                   ,},{ MONTH_TOOLARGE                  ,},{ DAYS_TOOLARGE                   ,},{ HOURS_TOOLARGE                  ,},{ MINUTES_TOOLARGE                ,},{ SECS_TOOLARGE                   ,},{ MILLIS_TOOLARGE                 ,},{ DATETIME_INVALID                ,},{ UNSUPPORTED_CONVERSION_OPER     ,},{ UNSUPPORTED_DATATYPE_OPER       ,},{ UNSUPPORTED_DATATYPE_FUNC       ,},{ UNSUPPORTED_CONVERSION_FUNC     ,},{ UNSUPPORTED_TYPE_CONV           ,},{ UNSUPPORTED_TYPE_SUM            ,},{ UNSUPPORTED_TYPE_MAX            ,},{ UNSUPPORTED_CONVERSION          ,},{ INSERT_INVALID_LEN              ,},{ SUBSTR_INVALID_LEN              ,},{ VALUE_STR_TOOLARGE              ,},{ VALUE_BIN_TOOLARGE              ,},{ VALUE_NULL_INVALID              ,},{ VALUE_CANT_CONVERT              ,},{ BYTEARR_INVALID_SIZE            ,},{ LOB_DELETED                     ,},{ PARAM_CLASS_UNKNOWN             ,},{ PARAM_EMPTY                     ,},{ PARAM_IDX_OUT_RANGE             ,},{ COL_DUPLICATE                      ,},{ COL_MISSING                     ,},{ COL_VAL_UNMATCH                 ,},{ COL_INVALID_SIZE                ,},{ COL_WRONG_PREFIX                ,},{ COL_READONLY                    ,},{ COL_INVALID_NAME                ,},{ COL_IDX_OUT_RANGE               ,},{ COL_AMBIGUOUS                   ,},{ GROUP_AGGR_INVALID              ,},{ GROUP_AGGR_NOTPART              ,},{ ORDERBY_INTERNAL                ,},{ UNION_DIFFERENT_COLS            ,},{ INDEX_EXISTS                    ,},{ INDEX_MISSING                   ,},{ INDEX_FILE_INVALID              ,},{ INDEX_CORRUPT                   ,},{ INDEX_TOOMANY_EQUALS            ,},{ FILE_TOONEW                     ,},{ FILE_TOOOLD                     ,},{ FILE_CANT_DELETE                ,},{ ROW_0_ABSOLUTE                  ,},{ ROW_NOCURRENT                   ,},{ ROWS_WRONG_MAX                  ,},{ ROW_LOCKED                      ,},{ ROW_DELETED                     ,},{ SAVEPT_INVALID_TRANS            ,},{ SAVEPT_INVALID_DRIVER           ,},{ ALIAS_UNSUPPORTED               ,},{ ISOLATION_UNKNOWN               ,},{ FLAGVALUE_INVALID               ,},{ ARGUMENT_INVALID                ,},{ GENER_KEYS_UNREQUIRED           ,},{ SEQUENCE_HEX_INVALID            ,},{ SEQUENCE_HEX_INVALID_STR        ,},{ SYNTAX_BASE_OFS                  ,},{ SYNTAX_BASE_END                  ,},{ STXADD_ADDITIONAL_TOK              ,},{ STXADD_IDENT_EXPECT              ,},{ STXADD_IDENT_EMPTY               ,},{ STXADD_IDENT_WRONG               ,},{ STXADD_OPER_MINUS               ,},{ STXADD_FUNC_UNKNOWN               ,},{ STXADD_PARAM_INVALID_COUNT      ,},{ STXADD_JOIN_INVALID                ,},{ STXADD_FROM_PAR_CLOSE                ,},{ STXADD_KEYS_REQUIRED                ,},{ STXADD_NOT_NUMBER                    ,},"
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
			"code_lines": "wasNull = obj == null;ELITSAif(wasNull) return null;ELITSAreturn obj.toBigDecimal(scale);ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}"
		}, {
			"start_line": 111,
			"end_line": 117,
			"code_lines": "wasNull = obj == null;ELITSAreturn obj;ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}ELITSA"
		}, {
			"start_line": 120,
			"end_line": 127,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getDate( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}"
		}, {
			"start_line": 130,
			"end_line": 137,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getTime( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}"
		}, {
			"start_line": 140,
			"end_line": 147,
			"code_lines": "wasNull = expr.isNull();ELITSAif(wasNull) return null;ELITSAreturn DateTime.getTimestamp( expr.getLong() );ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}"
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
			"code_lines": "wasNull = obj == null;ELITSAif(wasNull) return null;ELITSAreturn obj.toBigDecimal();ELITSA}catch(Exception e){ELITSAthrow SmallSQLException.createFromException( e );ELITSA}ELITSA}"
		}, {
			"start_line": 552,
			"end_line": 565,
			"code_lines": "}ELITSApublic Ref getRef(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION,);ELITSA}ELITSApublic Blob getBlob(int i) throws SQLException {ELITSAthrow SmallSQLException.create(Language.UNSUPPORTED_OPERATION,);ELITSA}public Clob getClob(int i) throws SQLException {throw SmallSQLException.create(Language.UNSUPPORTED_OPERATION,);}public Array getArray(int i) throws SQLException {throw SmallSQLException.create(Language.UNSUPPORTED_OPERATION,);}"
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
			"code_lines": "final boolean getBoolean() throws Exception {ELITSAif(isNull()) return false;ELITSAreturn Utils.string2boolean(getString().trim());ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAreturn Integer.parseInt(getString().trim());}final long getLong() throws Exception {if(isNull()) return 0;return Long.parseLong(getString().trim());}final float getFloat() throws Exception {if(isNull()) return 0;return Float.parseFloat(getString().trim());}final double getDouble() throws Exception {if(isNull()) return 0;return Double.parseDouble(getString().trim());}final long getMoney() throws Exception {if(isNull()) return 0;return Money.parseMoney(getString().trim());}final MutableNumeric getNumeric() throws Exception {if(isNull()) return null;return new MutableNumeric(getString().trim());}final Object getObject() throws Exception {"
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
			"code_lines": "if(!previous()){ELITSAreturn false;ELITSA}ELITSA}ELITSA}ELITSAreturn true;ELITSA}"
		}, {
			"start_line": 171,
			"end_line": 180,
			"code_lines": "}ELITSAfinal boolean rowInserted(){ELITSAreturn rowSource.rowInserted();ELITSA}ELITSAfinal boolean rowDeleted(){ELITSAreturn rowSource.rowDeleted();ELITSA}void nullRow() {rowSource.nullRow();"
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
			"code_lines": "rows.add(row);ELITSA}ELITSA}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);return result;}"
		}, {
			"start_line": 327,
			"end_line": 336,
			"code_lines": "List rows = new ArrayList();ELITSAStrings tables = getTables(table);ELITSAfor(int t=0; t<tables.size(); t++){ELITSAString tableName = tables.get(t);ELITSATableView tab = getTableView( con, tableName);ELITSAif(!(tab instanceof Table)) continue;ELITSAIndexDescriptions indexes = ((Table)tab).indexes;for(int i=0; i<indexes.size(); i++){IndexDescription index = indexes.get(i);"
		}, {
			"start_line": 345,
			"end_line": 354,
			"code_lines": "rows.add(row);ELITSA}ELITSA}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);return result;}"
		}, {
			"start_line": 358,
			"end_line": 365,
			"code_lines": "for(int t=0; t<tables.size(); t++){ELITSAString tableName = tables.get(t);ELITSATableView tab = getTableView( con, tableName);ELITSAif(!(tab instanceof Table)) continue;ELITSAIndexDescriptions indexes = ((Table)tab).indexes;ELITSAfor(int i=0; i<indexes.size(); i++){ELITSAIndexDescription index = indexes.get(i);"
		}, {
			"start_line": 376,
			"end_line": 383,
			"code_lines": "}ELITSA}ELITSA}ELITSAObject[][] result = new Object[rows.size()][];ELITSArows.toArray(result);ELITSAreturn result;ELITSA}"
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
			"code_lines": "buf.append( SHORT_MONTHS[ details.month ]);ELITSAbuf.append(' ');ELITSAformatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSAformatHour12( details.hour, buf );buf.append(':');formatNumber( details.minute, 2, buf);"
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
			"code_lines": "formatNumber( details.year, 4, buf);ELITSAbuf.append('-');ELITSAformatNumber( details.month+1, 2, buf);ELITSAbuf.append('-');ELITSAformatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAformatNumber( details.hour, 2, buf);buf.append(':');formatNumber( details.minute, 2, buf);buf.append(':');formatNumber( details.second, 2, buf);"
		}, {
			"start_line": 483,
			"end_line": 491,
			"code_lines": "formatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append('.');ELITSAformatMillis( details.millis, buf );return buf.toString();"
		}, {
			"start_line": 492,
			"end_line": 498,
			"code_lines": "formatNumber( details.day, 2, buf);ELITSAbuf.append(' ');ELITSAbuf.append( SHORT_MONTHS[ details.month ]);ELITSAbuf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSA"
		}, {
			"start_line": 495,
			"end_line": 507,
			"code_lines": "buf.append(' ');ELITSAformatNumber( details.year, 4, buf);ELITSAbuf.append(' ');ELITSAformatHour12( details.hour, buf );ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');formatNumber( details.second, 2, buf);buf.append(':');formatMillis( details.millis, buf);buf.append( details.hour < 12 ?:);return buf.toString();"
		}, {
			"start_line": 513,
			"end_line": 522,
			"code_lines": "buf.append(' ');ELITSAformatNumber( details.hour, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.minute, 2, buf);ELITSAbuf.append(':');ELITSAformatNumber( details.second, 2, buf);ELITSAbuf.append(':');formatMillis( details.millis, buf );return buf.toString();"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/CommandSelect.java|",
		"loc": "363",
		"clones": [{
			"start_line": 269,
			"end_line": 276,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}"
		}, {
			"start_line": 305,
			"end_line": 312,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}"
		}, {
			"start_line": 320,
			"end_line": 327,
			"code_lines": "}catch(Throwable e){ELITSAcon.rollback(savepoint);ELITSAthrow SmallSQLException.createFromException(e);ELITSA}finally{ELITSAif(con.getAutoCommit()) con.commit();ELITSA}ELITSA}"
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
			"code_lines": "}ELITSAfinal long getRowPosition() {ELITSAreturn rowSource.getRowPosition();ELITSA}ELITSAfinal void setRowPosition(long rowPosition) throws Exception {ELITSArowSource.setRowPosition(rowPosition);ELITSA}final void nullRow() {rowSource.nullRow();row = 0;}final void noRow() {rowSource.noRow();row = 0;}"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/StoreImpl.java|",
		"loc": "1290",
		"clones": [{
			"start_line": 742,
			"end_line": 750,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:case SQLTokenizer.VARBINARY:"
		}, {
			"start_line": 751,
			"end_line": 758,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:"
		}, {
			"start_line": 802,
			"end_line": 810,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:case SQLTokenizer.VARBINARY:"
		}, {
			"start_line": 811,
			"end_line": 820,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:return readLong();case SQLTokenizer.REAL:"
		}, {
			"start_line": 848,
			"end_line": 861,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAreturn readTimestamp();ELITSAcase SQLTokenizer.TIME:ELITSAreturn readTime();ELITSAcase SQLTokenizer.DATE:ELITSAreturn readDate();ELITSAcase SQLTokenizer.SMALLDATETIME:return readSmallDateTime();default:throw SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType),});}}@Override"
		}, {
			"start_line": 862,
			"end_line": 870,
			"code_lines": "this.offset = valueOffset;ELITSAif(readBoolean()) return 0;ELITSAswitch(dataType){ELITSAcase SQLTokenizer.BIT:ELITSAcase SQLTokenizer.BOOLEAN:ELITSAreturn readBoolean() ? 1 : 0;ELITSAcase SQLTokenizer.BINARY:case SQLTokenizer.VARBINARY:"
		}, {
			"start_line": 871,
			"end_line": 883,
			"code_lines": "case SQLTokenizer.TINYINT:ELITSAreturn readUnsignedByte();ELITSAcase SQLTokenizer.SMALLINT:ELITSAreturn readShort();ELITSAcase SQLTokenizer.INT:ELITSAreturn readInt();ELITSAcase SQLTokenizer.BIGINT:return readLong();case SQLTokenizer.REAL:return readFloat();case SQLTokenizer.FLOAT:case SQLTokenizer.DOUBLE:"
		}, {
			"start_line": 908,
			"end_line": 921,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAreturn readTimestamp();ELITSAcase SQLTokenizer.TIME:ELITSAreturn readTime();ELITSAcase SQLTokenizer.DATE:ELITSAreturn readDate();ELITSAcase SQLTokenizer.SMALLDATETIME:return readSmallDateTime();default:throw SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType),});}}@Override"
		}, {
			"start_line": 1024,
			"end_line": 1033,
			"code_lines": "case SQLTokenizer.TIMESTAMP:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.DATE:ELITSAcase SQLTokenizer.SMALLDATETIME:ELITSAthrow SmallSQLException.create(Language.VALUE_CANT_CONVERT, new Object[] { SQLTokenizer.getKeyWord(dataType),});ELITSAdefault: throw new Error();ELITSA}}@Override"
		}, {
			"start_line": 1060,
			"end_line": 1067,
			"code_lines": "case SQLTokenizer.NUMERIC:ELITSAcase SQLTokenizer.DECIMAL:ELITSAreturn readNumeric();ELITSAcase SQLTokenizer.CHAR:ELITSAcase SQLTokenizer.NCHAR:ELITSAcase SQLTokenizer.VARCHAR:ELITSAcase SQLTokenizer.NVARCHAR:"
		}, {
			"start_line": 1125,
			"end_line": 1138,
			"code_lines": "case SQLTokenizer.CHAR:ELITSAcase SQLTokenizer.NCHAR:ELITSAcase SQLTokenizer.VARCHAR:ELITSAcase SQLTokenizer.NVARCHAR:ELITSAreturn readString();ELITSAcase SQLTokenizer.CLOB:ELITSAcase SQLTokenizer.NCLOB:case SQLTokenizer.LONGNVARCHAR:case SQLTokenizer.LONGVARCHAR:return readLongString();case SQLTokenizer.JAVA_OBJECT:ByteArrayInputStream bais = new ByteArrayInputStream(readLongBinary());ObjectInputStream ois = new ObjectInputStream(bais);"
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
			"code_lines": "offset += 2;ELITSAbreak;ELITSAcase SQLTokenizer.INT:ELITSAcase SQLTokenizer.REAL:ELITSAcase SQLTokenizer.SMALLMONEY:ELITSAcase SQLTokenizer.TIME:ELITSAcase SQLTokenizer.DATE:case SQLTokenizer.SMALLDATETIME:offset += 4;break;case SQLTokenizer.BIGINT:case SQLTokenizer.FLOAT:case SQLTokenizer.DOUBLE:case SQLTokenizer.MONEY:case SQLTokenizer.JAVA_OBJECT:case SQLTokenizer.LONGVARBINARY:case SQLTokenizer.BLOB:case SQLTokenizer.CLOB:case SQLTokenizer.NCLOB:case SQLTokenizer.LONGNVARCHAR:case SQLTokenizer.LONGVARCHAR:case SQLTokenizer.TIMESTAMP:offset += 8;break;"
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
			"code_lines": "}ELITSAboolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAString str = param1.getString();"
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
			"code_lines": "boolean isNull() throws Exception{ELITSAreturn param1.isNull() || param2.isNull();ELITSA}ELITSAfinal double getDouble() throws Exception{ELITSAif(isNull()) return 0;ELITSAfinal int places = param2.getInt();ELITSAdouble value = param1.getDouble();long factor = 1;if(places > 0){for(int i=0; i<places; i++){factor *= 10;}value *= factor;}else{for(int i=0; i>places; i--){factor *= 10;}value /= factor;}"
		}, {
			"start_line": 23,
			"end_line": 31,
			"code_lines": "if(places > 0){ELITSAvalue /= factor;ELITSA}else{ELITSAvalue *= factor;ELITSA}ELITSAreturn value;ELITSA}}"
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
			"code_lines": "}ELITSAString getString() throws Exception{ELITSAObject obj = getObject();ELITSAif(obj == null) return null;ELITSAreturn obj.toString();ELITSA}ELITSA}"
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
			"code_lines": "}ELITSApublic int intValue() {ELITSAreturn (int)value;ELITSA}ELITSApublic long longValue() {ELITSAreturn (long)value;ELITSA}public String toString(){return String.valueOf(value);}public Object getImmutableObject(){"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/MutableLong.java|",
		"loc": "25",
		"clones": [{
			"start_line": 4,
			"end_line": 16,
			"code_lines": "this.value = value;ELITSA}ELITSApublic double doubleValue() {ELITSAreturn value;ELITSA}ELITSApublic float floatValue() {ELITSAreturn value;}public int intValue() {return (int)value;}public long longValue() {"
		}, {
			"start_line": 18,
			"end_line": 25,
			"code_lines": "public String toString(){ELITSAreturn String.valueOf(value);ELITSA}ELITSApublic Object getImmutableObject(){ELITSAreturn new Long(value);ELITSA}ELITSA}"
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
			"code_lines": "result = left.next();ELITSAif(result){ELITSAresult = right.first();ELITSAif(!result){ELITSAswitch(type){ELITSAcase Join.LEFT_JOIN:ELITSAcase Join.FULL_JOIN:isOuterValid = false;"
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
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull() || param2.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAbyte[] bytes = param1.getBytes();int length = param2.getInt();if(bytes.length <= length) return bytes;byte[] b = new byte[length];"
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
			"code_lines": "this.value = value;ELITSA}ELITSApublic double doubleValue() {ELITSAreturn value;ELITSA}ELITSApublic float floatValue() {ELITSAreturn value;}public int intValue() {"
		}, {
			"start_line": 14,
			"end_line": 22,
			"code_lines": "}ELITSApublic long longValue() {ELITSAreturn value;ELITSA}ELITSApublic String toString(){ELITSAreturn String.valueOf(value);ELITSA}public Object getImmutableObject(){"
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
			"code_lines": "}ELITSAfirstNode = false;ELITSAif(shift != 0) offset += pointerSize;ELITSA}ELITSAshift -= 16;ELITSA}ELITSA}"
		}, {
			"start_line": 170,
			"end_line": 180,
			"code_lines": "result |= (((long)nextEntry) << shift);ELITSAif(listEnum.stack>=3){ELITSAlistEnum.offsetStack[listEnum.stack] = offset;ELITSAreturn result;ELITSA}ELITSAlistEnum.offsetStack[listEnum.stack] = offset+pointerSize;ELITSAoffset = getPointer();shift -= 16;listEnum.stack++;listEnum.resultStack[listEnum.stack] = result;"
		}]
	}, {
		"file_name": "|project://smallsql0.21_src/src/smallsql/database/ExpressionFunctionRTrim.java|",
		"loc": "29",
		"clones": [{
			"start_line": 4,
			"end_line": 11,
			"code_lines": "}ELITSAfinal boolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal byte[] getBytes() throws Exception{ELITSAif(isNull()) return null;ELITSAbyte[] bytes = param1.getBytes();"
		}, {
			"start_line": 15,
			"end_line": 22,
			"code_lines": "byte[] b = new byte[length];ELITSASystem.arraycopy(bytes, 0, b, 0, length);ELITSAreturn b;ELITSA}ELITSAfinal String getString() throws Exception {ELITSAif(isNull()) return null;ELITSAString str = param1.getString();"
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
			"code_lines": "}ELITSAboolean isNull() throws Exception {ELITSAreturn param1.isNull();ELITSA}ELITSAfinal int getInt() throws Exception {ELITSAif(isNull()) return 0;ELITSAString str = param1.getString();"
		}]
	}]
}