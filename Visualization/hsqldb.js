var hsqldb = {
	"name_of_project": "TEST_smallProject",
	"duplicates_percentage": "13.8291896100",
	"total_duplicates_lines": "23879",
	"loc_project": "172671",
	"number_of_clones": "23879",
	"number_of_classes": "1829",
	"biggest_clone_lines": "2486",
	"biggest_clone_class": "12",
	"example_clones": {
		"clone_1": {
			"lines": "64-74",
			"code_lines": "}LiNeBrEaKif (c != null) try {LiNeBrEaKc.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKlog.error('Failed to close emulation database setup Connection',LiNeBrEaKse);LiNeBrEaK} finally {LiNeBrEaKc = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK",
			"file": "|project://hsqldb-2.3.1/hsqldb/integration/extAuthWithSpring/src/org/hsqldb/sample/SpringExtAuth.java|"
		},
		"clone_2": {
			"lines": "75-81",
			"code_lines": "registerFunction( 'ltrim', new StandardSQLFunction( 'ltrim' ) );LiNeBrEaKregisterFunction( 'rtrim', new StandardSQLFunction( 'rtrim' ) );LiNeBrEaKregisterFunction( 'reverse', new StandardSQLFunction( 'reverse' ) );LiNeBrEaKregisterFunction( 'space', new StandardSQLFunction( 'space', Hibernate.STRING ) );LiNeBrEaKregisterFunction( 'rawtohex', new StandardSQLFunction( 'rawtohex' ) );LiNeBrEaKregisterFunction( 'hextoraw', new StandardSQLFunction( 'hextoraw' ) );LiNeBrEaK",
			"file": "|project://hsqldb-2.3.1/hsqldb/integration/hibernate_3_3_1/src/org/hibernate/dialect/HSQLDialect.java|"
		},
		"clone_3": {
			"lines": "4-10",
			"code_lines": "import org.hibernate.LockMode;LiNeBrEaKimport org.hibernate.StaleObjectStateException;LiNeBrEaKimport org.hibernate.JDBCException;LiNeBrEaKimport org.hibernate.engine.SessionImplementor;LiNeBrEaKimport org.hibernate.persister.entity.Lockable;LiNeBrEaKimport org.hibernate.cfg.Environment;LiNeBrEaK",
			"file": "|project://hsqldb-2.3.1/hsqldb/integration/hibernate/src/org/hibernate/dialect/HSQLDialect.java|"
		},
		"clone_4": {
			"lines": "33-41",
			"code_lines": "super(StatementTypes.INSERT, StatementTypes.X_SQL_DATA_CHANGE,LiNeBrEaKsession.getCurrentSchemaHsqlName());LiNeBrEaKthis.targetTable = targetTable;LiNeBrEaKthis.baseTable   = targetTable.isTriggerInsertable() ? targetTableLiNeBrEaK: targetTableLiNeBrEaK.getBaseTable();LiNeBrEaKthis.insertColumnMap    = columnMap;LiNeBrEaKthis.insertCheckColumns = checkColumns;LiNeBrEaK",
			"file": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementInsert.java|"
		},
		"clone_5": {
			"lines": "293-299",
			"code_lines": "addColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaK",
			"file": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/dbinfo/DatabaseInformationFull.java|"
		}
	},
	"files": [{
		"file_name": "|project://hsqldb-2.3.1/hsqldb/integration/extAuthWithSpring/src/org/hsqldb/sample/JdbcAppClass.java|",
		"loc": "66"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/integration/extAuthWithSpring/src/org/hsqldb/sample/SpringExtAuth.java|",
		"loc": "103",
		"clones": [{
			"start_line": 64,
			"end_line": 74,
			"code_lines": "}LiNeBrEaKif (c != null) try {LiNeBrEaKc.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKlog.error('Failed to close emulation database setup Connection',LiNeBrEaKse);LiNeBrEaK} finally {LiNeBrEaKc = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 101,
			"code_lines": "c.commit();LiNeBrEaK} finally {LiNeBrEaKif (st != null) try {LiNeBrEaKst.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKlog.error('Failed to close emulation database setup Connection',LiNeBrEaKse);LiNeBrEaK} finally {LiNeBrEaKst = null;LiNeBrEaK}LiNeBrEaKif (c != null) try {LiNeBrEaKc.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKlog.error('Failed to close emulation database setup Connection',LiNeBrEaKse);LiNeBrEaK} finally {LiNeBrEaKc = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/integration/hibernate_3_3_1/src/org/hibernate/dialect/HSQLDialect.java|",
		"loc": "377",
		"clones": [{
			"start_line": 75,
			"end_line": 81,
			"code_lines": "registerFunction( 'ltrim', new StandardSQLFunction( 'ltrim' ) );LiNeBrEaKregisterFunction( 'rtrim', new StandardSQLFunction( 'rtrim' ) );LiNeBrEaKregisterFunction( 'reverse', new StandardSQLFunction( 'reverse' ) );LiNeBrEaKregisterFunction( 'space', new StandardSQLFunction( 'space', Hibernate.STRING ) );LiNeBrEaKregisterFunction( 'rawtohex', new StandardSQLFunction( 'rawtohex' ) );LiNeBrEaKregisterFunction( 'hextoraw', new StandardSQLFunction( 'hextoraw' ) );LiNeBrEaK"
		}, {
			"start_line": 90,
			"end_line": 100,
			"code_lines": "registerFunction( 'dayofweek', new StandardSQLFunction( 'dayofweek', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'dayofyear', new StandardSQLFunction( 'dayofyear', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'dayofmonth', new StandardSQLFunction( 'dayofmonth', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'month', new StandardSQLFunction( 'month', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'year', new StandardSQLFunction( 'year', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'week', new StandardSQLFunction( 'week', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'quater', new StandardSQLFunction( 'quater', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'hour', new StandardSQLFunction( 'hour', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'minute', new StandardSQLFunction( 'minute', Hibernate.INTEGER ) );LiNeBrEaKregisterFunction( 'second', new StandardSQLFunction( 'second', Hibernate.INTEGER ) );LiNeBrEaK"
		}, {
			"start_line": 105,
			"end_line": 115,
			"code_lines": "registerFunction( 'asin', new StandardSQLFunction( 'asin', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'atan', new StandardSQLFunction( 'atan', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'cos', new StandardSQLFunction( 'cos', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'cot', new StandardSQLFunction( 'cot', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'exp', new StandardSQLFunction( 'exp', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'log', new StandardSQLFunction( 'log', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'log10', new StandardSQLFunction( 'log10', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'sin', new StandardSQLFunction( 'sin', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'sqrt', new StandardSQLFunction( 'sqrt', Hibernate.DOUBLE ) );LiNeBrEaKregisterFunction( 'tan', new StandardSQLFunction( 'tan', Hibernate.DOUBLE ) );LiNeBrEaK"
		}, {
			"start_line": 232,
			"end_line": 252,
			"code_lines": "public String extractConstraintName(SQLException sqle) {LiNeBrEaKString constraintName = null;LiNeBrEaKint errorCode = JDBCExceptionHelper.extractErrorCode( sqle );LiNeBrEaKif ( errorCode == -8 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -9 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -104 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -177 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK"
		}, {
			"start_line": 316,
			"end_line": 323,
			"code_lines": "if ( hsqldbVersion < 20 ) {LiNeBrEaKreturn Boolean.TRUE;LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn Boolean.FALSE;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/integration/hibernate/src/org/hibernate/dialect/HSQLDialect.java|",
		"loc": "428",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hibernate.LockMode;LiNeBrEaKimport org.hibernate.StaleObjectStateException;LiNeBrEaKimport org.hibernate.JDBCException;LiNeBrEaKimport org.hibernate.engine.SessionImplementor;LiNeBrEaKimport org.hibernate.persister.entity.Lockable;LiNeBrEaKimport org.hibernate.cfg.Environment;LiNeBrEaK"
		}, {
			"start_line": 20,
			"end_line": 68,
			"code_lines": "import org.hibernate.util.ReflectHelper;LiNeBrEaKimport org.slf4j.Logger;LiNeBrEaKimport org.slf4j.LoggerFactory;LiNeBrEaKpublic class HSQLDialect extends Dialect {LiNeBrEaKprivate static final Logger log = LoggerFactory.getLogger( HSQLDialect.class );LiNeBrEaKprivate int hsqldbVersion = 18;LiNeBrEaKpublic HSQLDialect() {LiNeBrEaKsuper();LiNeBrEaKtry {LiNeBrEaKClass props = ReflectHelper.classForName( 'org.hsqldb.persist.HsqlDatabaseProperties' );LiNeBrEaKString versionString = (String) props.getDeclaredField( 'THIS_VERSION' ).get( null );LiNeBrEaKhsqldbVersion = Integer.parseInt( versionString.substring( 0, 1 ) ) * 10;LiNeBrEaKhsqldbVersion += Integer.parseInt( versionString.substring( 2, 3 ) );LiNeBrEaK}LiNeBrEaKcatch ( Throwable e ) {LiNeBrEaK}LiNeBrEaKregisterColumnType( Types.BIGINT, 'bigint' );LiNeBrEaKregisterColumnType( Types.BINARY, 'binary($l)' );LiNeBrEaKregisterColumnType( Types.BIT, 'bit' );LiNeBrEaKregisterColumnType( Types.BOOLEAN, 'boolean' );LiNeBrEaKregisterColumnType( Types.CHAR, 'char($l)' );LiNeBrEaKregisterColumnType( Types.DATE, 'date' );LiNeBrEaKregisterColumnType( Types.DECIMAL, 'decimal($p,$s)' );LiNeBrEaKregisterColumnType( Types.DOUBLE, 'double' );LiNeBrEaKregisterColumnType( Types.FLOAT, 'float' );LiNeBrEaKregisterColumnType( Types.INTEGER, 'integer' );LiNeBrEaKregisterColumnType( Types.LONGVARBINARY, 'longvarbinary' );LiNeBrEaKregisterColumnType( Types.LONGVARCHAR, 'longvarchar' );LiNeBrEaKregisterColumnType( Types.SMALLINT, 'smallint' );LiNeBrEaKregisterColumnType( Types.TINYINT, 'tinyint' );LiNeBrEaKregisterColumnType( Types.TIME, 'time' );LiNeBrEaKregisterColumnType( Types.TIMESTAMP, 'timestamp' );LiNeBrEaKregisterColumnType( Types.VARCHAR, 'varchar($l)' );LiNeBrEaKregisterColumnType( Types.VARBINARY, 'varbinary($l)' );LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKregisterColumnType( Types.NUMERIC, 'numeric' );LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKregisterColumnType( Types.NUMERIC, 'numeric($p,$s)' );LiNeBrEaK}LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKregisterColumnType( Types.BLOB, 'longvarbinary' );LiNeBrEaKregisterColumnType( Types.CLOB, 'longvarchar' );LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKregisterColumnType( Types.BLOB, 'blob' );LiNeBrEaKregisterColumnType( Types.CLOB, 'clob' );LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 99,
			"end_line": 108,
			"code_lines": "registerFunction( 'dayofweek', new StandardSQLFunction( 'dayofweek', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'dayofyear', new StandardSQLFunction( 'dayofyear', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'dayofmonth', new StandardSQLFunction( 'dayofmonth', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'month', new StandardSQLFunction( 'month', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'year', new StandardSQLFunction( 'year', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'week', new StandardSQLFunction( 'week', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'quarter', new StandardSQLFunction( 'quarter', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'hour', new StandardSQLFunction( 'hour', StandardBasicTypes.INTEGER ) );LiNeBrEaKregisterFunction( 'minute', new StandardSQLFunction( 'minute', StandardBasicTypes.INTEGER ) );LiNeBrEaK"
		}, {
			"start_line": 114,
			"end_line": 124,
			"code_lines": "registerFunction( 'asin', new StandardSQLFunction( 'asin', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'atan', new StandardSQLFunction( 'atan', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'cos', new StandardSQLFunction( 'cos', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'cot', new StandardSQLFunction( 'cot', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'exp', new StandardSQLFunction( 'exp', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'log', new StandardSQLFunction( 'log', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'log10', new StandardSQLFunction( 'log10', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'sin', new StandardSQLFunction( 'sin', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'sqrt', new StandardSQLFunction( 'sqrt', StandardBasicTypes.DOUBLE ) );LiNeBrEaKregisterFunction( 'tan', new StandardSQLFunction( 'tan', StandardBasicTypes.DOUBLE ) );LiNeBrEaK"
		}, {
			"start_line": 138,
			"end_line": 275,
			"code_lines": "getDefaultProperties().setProperty( Environment.STATEMENT_BATCH_SIZE, DEFAULT_BATCH_SIZE );LiNeBrEaK}LiNeBrEaKpublic String getAddColumnString() {LiNeBrEaKreturn 'add column';LiNeBrEaK}LiNeBrEaKpublic boolean supportsIdentityColumns() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic String getIdentityColumnString() {LiNeBrEaKreturn 'generated by default as identity (start with 1)';LiNeBrEaK}LiNeBrEaKpublic String getIdentitySelectString() {LiNeBrEaKreturn 'call identity()';LiNeBrEaK}LiNeBrEaKpublic String getIdentityInsertString() {LiNeBrEaKreturn hsqldbVersion < 20 ? 'null' : 'default';LiNeBrEaK}LiNeBrEaKpublic boolean supportsLockTimeouts() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic String getForUpdateString() {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaKpublic boolean supportsUnique() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean supportsLimit() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic String getLimitString(String sql, boolean hasOffset) {LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKreturn new StringBuffer( sql.length() + 10 )LiNeBrEaK.append( sql )LiNeBrEaK.insert(LiNeBrEaKsql.toLowerCase().indexOf( 'select' ) + 6,LiNeBrEaKhasOffset ? ' limit ? ?' : ' top ?'LiNeBrEaK)LiNeBrEaK.toString();LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn new StringBuffer( sql.length() + 20 )LiNeBrEaK.append( sql )LiNeBrEaK.append( hasOffset ? ' offset ? limit ?' : ' limit ?' )LiNeBrEaK.toString();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic boolean bindLimitParametersFirst() {LiNeBrEaKreturn hsqldbVersion < 20;LiNeBrEaK}LiNeBrEaKpublic boolean supportsIfExistsAfterTableName() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean supportsColumnCheck() {LiNeBrEaKreturn hsqldbVersion >= 20;LiNeBrEaK}LiNeBrEaKpublic boolean supportsSequences() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean supportsPooledSequences() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKprotected String getCreateSequenceString(String sequenceName) {LiNeBrEaKreturn 'create sequence ' + sequenceName;LiNeBrEaK}LiNeBrEaKprotected String getDropSequenceString(String sequenceName) {LiNeBrEaKreturn 'drop sequence ' + sequenceName;LiNeBrEaK}LiNeBrEaKpublic String getSelectSequenceNextValString(String sequenceName) {LiNeBrEaKreturn 'next value for ' + sequenceName;LiNeBrEaK}LiNeBrEaKpublic String getSequenceNextValString(String sequenceName) {LiNeBrEaKreturn 'call next value for ' + sequenceName;LiNeBrEaK}LiNeBrEaKpublic String getQuerySequencesString() {LiNeBrEaKreturn 'select sequence_name from information_schema.system_sequences';LiNeBrEaK}LiNeBrEaKpublic ViolatedConstraintNameExtracter getViolatedConstraintNameExtracter() {LiNeBrEaKreturn hsqldbVersion < 20 ? EXTRACTER_18 : EXTRACTER_20;LiNeBrEaK}LiNeBrEaKprivate static ViolatedConstraintNameExtracter EXTRACTER_18 = new TemplatedViolatedConstraintNameExtracter() {LiNeBrEaKpublic String extractConstraintName(SQLException sqle) {LiNeBrEaKString constraintName = null;LiNeBrEaKint errorCode = JDBCExceptionHelper.extractErrorCode( sqle );LiNeBrEaKif ( errorCode == -8 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'Integrity constraint violation ', ' table:', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -9 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'Violation of unique index: ', ' in statement [', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -104 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'Unique constraint violation: ', ' in statement [', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -177 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'Integrity constraint violation - no parent ', ' table:',LiNeBrEaKsqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKreturn constraintName;LiNeBrEaK}LiNeBrEaK};LiNeBrEaKprivate static ViolatedConstraintNameExtracter EXTRACTER_20 = new TemplatedViolatedConstraintNameExtracter() {LiNeBrEaKpublic String extractConstraintName(SQLException sqle) {LiNeBrEaKString constraintName = null;LiNeBrEaKint errorCode = JDBCExceptionHelper.extractErrorCode( sqle );LiNeBrEaKif ( errorCode == -8 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -9 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -104 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKelse if ( errorCode == -177 ) {LiNeBrEaKconstraintName = extractUsingTemplate(LiNeBrEaK'; ', ' table: ', sqle.getMessage()LiNeBrEaK);LiNeBrEaK}LiNeBrEaKreturn constraintName;LiNeBrEaK}LiNeBrEaK};LiNeBrEaKpublic String getSelectClauseNullString(int sqlType) {LiNeBrEaKString literal;LiNeBrEaKswitch ( sqlType ) {LiNeBrEaK"
		}, {
			"start_line": 289,
			"end_line": 297,
			"code_lines": "literal = 'cast(null as blob)';LiNeBrEaKbreak;LiNeBrEaKcase Types.DATE:LiNeBrEaKliteral = 'cast(null as date)';LiNeBrEaKbreak;LiNeBrEaKcase Types.TIMESTAMP:LiNeBrEaKliteral = 'cast(null as timestamp)';LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 301,
			"end_line": 368,
			"code_lines": "literal = 'cast(null as bit)';LiNeBrEaKbreak;LiNeBrEaKcase Types.TIME:LiNeBrEaKliteral = 'cast(null as time)';LiNeBrEaKbreak;LiNeBrEaKdefault:LiNeBrEaKliteral = 'cast(null as int)';LiNeBrEaK}LiNeBrEaKreturn literal;LiNeBrEaK}LiNeBrEaKpublic boolean supportsUnionAll() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean supportsTemporaryTables() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic String generateTemporaryTableName(String baseTableName) {LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKreturn 'HT_' + baseTableName;LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn 'MODULE.HT_' + baseTableName;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getCreateTemporaryTableString() {LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKreturn 'create global temporary table';LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn 'declare local temporary table';LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getCreateTemporaryTablePostfix() {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaKpublic String getDropTemporaryTableString() {LiNeBrEaKreturn 'drop table';LiNeBrEaK}LiNeBrEaKpublic Boolean performTemporaryTableDDLInIsolation() {LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKreturn Boolean.TRUE;LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn Boolean.FALSE;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic boolean dropTemporaryTableAfterUse() {LiNeBrEaKif ( hsqldbVersion < 20 ) {LiNeBrEaKreturn Boolean.TRUE;LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn Boolean.FALSE;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic boolean supportsCurrentTimestampSelection() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean isCurrentTimestampSelectStringCallable() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic String getCurrentTimestampSelectString() {LiNeBrEaKreturn 'call current_timestamp';LiNeBrEaK}LiNeBrEaKpublic String getCurrentTimestampSQLFunctionName() {LiNeBrEaKreturn 'current_timestamp';LiNeBrEaK}LiNeBrEaKpublic LockingStrategy getLockingStrategy(Lockable lockable, LockMode lockMode) {LiNeBrEaK"
		}, {
			"start_line": 383,
			"end_line": 394,
			"code_lines": "if ( hsqldbVersion < 20 ) {LiNeBrEaKreturn new ReadUncommittedLockingStrategy( lockable, lockMode );LiNeBrEaK}LiNeBrEaKelse {LiNeBrEaKreturn new SelectLockingStrategy( lockable, lockMode );LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static class ReadUncommittedLockingStrategy extends SelectLockingStrategy {LiNeBrEaKpublic ReadUncommittedLockingStrategy(Lockable lockable, LockMode lockMode) {LiNeBrEaKsuper( lockable, lockMode );LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 406,
			"end_line": 428,
			"code_lines": "public boolean supportsEmptyInList() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean requiresCastingOfParametersInSelectClause() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean doesReadCommittedCauseWritersToBlockReaders() {LiNeBrEaKreturn hsqldbVersion >= 20;LiNeBrEaK}LiNeBrEaKpublic boolean doesRepeatableReadCauseReadersToBlockWriters() {LiNeBrEaKreturn hsqldbVersion >= 20;LiNeBrEaK}LiNeBrEaKpublic boolean supportsLobValueChangePropogation() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic String toBooleanValueString(boolean bool) {LiNeBrEaKreturn String.valueOf( bool );LiNeBrEaK}LiNeBrEaKpublic boolean supportsTupleDistinctCounts() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementInsert.java|",
		"loc": "119",
		"clones": [{
			"start_line": 33,
			"end_line": 41,
			"code_lines": "super(StatementTypes.INSERT, StatementTypes.X_SQL_DATA_CHANGE,LiNeBrEaKsession.getCurrentSchemaHsqlName());LiNeBrEaKthis.targetTable = targetTable;LiNeBrEaKthis.baseTable   = targetTable.isTriggerInsertable() ? targetTableLiNeBrEaK: targetTableLiNeBrEaK.getBaseTable();LiNeBrEaKthis.insertColumnMap    = columnMap;LiNeBrEaKthis.insertCheckColumns = checkColumns;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/FunctionSQLInvoked.java|",
		"loc": "216"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/dbinfo/DITableInfo.java|",
		"loc": "100"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/dbinfo/DatabaseInformationFull.java|",
		"loc": "4832",
		"clones": [{
			"start_line": 293,
			"end_line": 299,
			"code_lines": "addColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 369,
			"end_line": 375,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 638,
			"end_line": 644,
			"code_lines": "for (int j = 0; j < array.length; j++) {LiNeBrEaKif (j > 0) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(array[j].getId());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 737,
			"end_line": 743,
			"code_lines": "addColumn(t, 'CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'SPACE_ID', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'ALLOCATED_SPACE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'USED_SPACE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'USED_MEMORY', CARDINAL_NUMBER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 744,
			"end_line": 750,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2,LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 915,
			"end_line": 924,
			"code_lines": "addColumn(t, 'CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_REPERTOIRE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FORM_OF_USE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_COLLATE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_COLLATE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_COLLATE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 925,
			"end_line": 931,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 970,
			"end_line": 977,
			"code_lines": "addColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 981,
			"end_line": 987,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int constraint_catalog = 0;LiNeBrEaKfinal int constraint_schema  = 1;LiNeBrEaKfinal int constraint_name    = 2;LiNeBrEaK"
		}, {
			"start_line": 1069,
			"end_line": 1075,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int constraint_catalog = 0;LiNeBrEaKfinal int constraint_schema  = 1;LiNeBrEaKfinal int constraint_name    = 2;LiNeBrEaK"
		}, {
			"start_line": 1127,
			"end_line": 1134,
			"code_lines": "row[constraint_name]    = constraint.getName().name;LiNeBrEaKtry {LiNeBrEaKrow[check_clause] = constraint.getCheckSQL();LiNeBrEaK} catch (Exception e) {}LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1192,
			"end_line": 1198,
			"code_lines": "addColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEPENDENT_COLUMN', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1199,
			"end_line": 1205,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1210,
			"end_line": 1217,
			"code_lines": "Iterator tables;LiNeBrEaKTable    table;LiNeBrEaKObject[] row;LiNeBrEaKtables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaK"
		}, {
			"start_line": 1213,
			"end_line": 1222,
			"code_lines": "tables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (table.isView()LiNeBrEaK|| !session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKtable.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1251,
			"end_line": 1259,
			"code_lines": "addColumn(t, 'DOMAIN_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1311,
			"end_line": 1319,
			"code_lines": "addColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1320,
			"end_line": 1326,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1333,
			"end_line": 1348,
			"code_lines": "int      columnCount;LiNeBrEaKIterator tables;LiNeBrEaKTable    table;LiNeBrEaKObject[] row;LiNeBrEaKType     type;LiNeBrEaKHsqlName tableName;LiNeBrEaKtables = allTables();LiNeBrEaKGrantee grantee = session.getGrantee();LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable       = (Table) tables.next();LiNeBrEaKcolumnCount = table.getColumnCount();LiNeBrEaKtableName   = table.getName();LiNeBrEaKfor (int i = 0; i < columnCount; i++) {LiNeBrEaKColumnSchema column = table.getColumn(i);LiNeBrEaKtype = column.getDataType();LiNeBrEaK"
		}, {
			"start_line": 1378,
			"end_line": 1385,
			"code_lines": "addColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CHARACTER_MAXIMUM_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 1388,
			"end_line": 1402,
			"code_lines": "addColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1481,
			"end_line": 1489,
			"code_lines": "columnList =LiNeBrEaKsession.getGrantee().getColumnsForAllPrivileges(table);LiNeBrEaKif (columnList.isEmpty()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKcolumnCount = table.getColumnCount();LiNeBrEaKfor (int i = 0; i < columnCount; i++) {LiNeBrEaKColumnSchema column = table.getColumn(i);LiNeBrEaK"
		}, {
			"start_line": 1490,
			"end_line": 1498,
			"code_lines": "if (!columnList.contains(column.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaKrow[table_cat]        = database.getCatalogName().name;LiNeBrEaKrow[table_schem]      = table.getSchemaName().name;LiNeBrEaKrow[table_name]       = table.getName().name;LiNeBrEaKrow[column_name]      = column.getName().name;LiNeBrEaK"
		}, {
			"start_line": 1612,
			"end_line": 1620,
			"code_lines": "addColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1621,
			"end_line": 1627,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1643,
			"end_line": 1653,
			"code_lines": "Object[]     row;LiNeBrEaKtables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (table.isView()LiNeBrEaK|| !session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKtable.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1707,
			"end_line": 1714,
			"code_lines": "row[constraint_catalog] = constraintCatalog;LiNeBrEaKrow[constraint_schema]  = constraintSchema;LiNeBrEaKrow[constraint_name]    = constraintName;LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1714,
			"end_line": 1720,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1724,
			"end_line": 1731,
			"code_lines": "addColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1732,
			"end_line": 1738,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1752,
			"end_line": 1758,
			"code_lines": "addColumn(t, 'OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_TYPE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1759,
			"end_line": 1765,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1777,
			"end_line": 1783,
			"code_lines": "addColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1780,
			"end_line": 1786,
			"code_lines": "addColumn(t, 'DOMAIN_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DOMAIN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'IS_DEFERRABLE', YES_OR_NO);LiNeBrEaKaddColumn(t, 'INITIALLY_DEFERRED', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1790,
			"end_line": 1796,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int constraint_catalog = 0;LiNeBrEaKfinal int constraint_schema  = 1;LiNeBrEaKfinal int constraint_name    = 2;LiNeBrEaK"
		}, {
			"start_line": 1801,
			"end_line": 1812,
			"code_lines": "Iterator it =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.DOMAIN);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKType domain = (Type) it.next();LiNeBrEaKif (!domain.isDomainType()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKdomain.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1839,
			"end_line": 1849,
			"code_lines": "addColumn(t, 'CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 1845,
			"end_line": 1852,
			"code_lines": "addColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DOMAIN_DEFAULT', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 1917,
			"end_line": 1937,
			"code_lines": "row[collation_name] =LiNeBrEaK((CharacterType) type).getCollation().getName().name;LiNeBrEaK} else if (type.isNumberType()) {LiNeBrEaKrow[numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKrow[declared_numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKif (type.isExactNumberType()) {LiNeBrEaKrow[numeric_scale] = row[declared_numeric_scale] =LiNeBrEaKValuePool.getLong(type.scale);LiNeBrEaK}LiNeBrEaKrow[numeric_precision_radix] =LiNeBrEaKValuePool.getLong(type.getPrecisionRadix());LiNeBrEaK} else if (type.isBooleanType()) {LiNeBrEaK} else if (type.isDateTimeType()) {LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isIntervalType()) {LiNeBrEaKrow[data_type] = 'INTERVAL';LiNeBrEaKrow[interval_type] =LiNeBrEaK((IntervalType) type).getQualifier(type.typeCode);LiNeBrEaK"
		}, {
			"start_line": 1938,
			"end_line": 1954,
			"code_lines": "row[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isBinaryType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isBitType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isArrayType()) {LiNeBrEaKrow[maximum_cardinality] =LiNeBrEaKValuePool.getLong(type.arrayLimitCardinality());LiNeBrEaKrow[data_type] = 'ARRAY';LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1969,
			"end_line": 1989,
			"code_lines": "addColumn(t, 'OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_TYPE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLECTION_TYPE_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_MAXIMUM_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 1988,
			"end_line": 1997,
			"code_lines": "addColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MAXIMUM_CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1995,
			"end_line": 2001,
			"code_lines": "addColumn(t, 'MAXIMUM_CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DECLARED_DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2019,
			"end_line": 2036,
			"code_lines": "int            columnCount;LiNeBrEaKIterator       tables;LiNeBrEaKTable          table;LiNeBrEaKObject[]       row;LiNeBrEaKOrderedHashSet columnList;LiNeBrEaKType           type;LiNeBrEaKtables = allTables();LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKcolumnList =LiNeBrEaKsession.getGrantee().getColumnsForAllPrivileges(table);LiNeBrEaKif (columnList.isEmpty()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKcolumnCount = table.getColumnCount();LiNeBrEaKfor (int i = 0; i < columnCount; i++) {LiNeBrEaKColumnSchema column = table.getColumn(i);LiNeBrEaK"
		}, {
			"start_line": 2079,
			"end_line": 2091,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isAccessible(type)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                             = t.getEmptyRowData();LiNeBrEaKrow[object_catalog]             = database.getCatalogName().name;LiNeBrEaKrow[object_schema]              = type.getSchemaName().name;LiNeBrEaKrow[object_name]                = type.getName().name;LiNeBrEaKrow[object_type]                = 'USER-DEFINED TYPE';LiNeBrEaKrow[collection_type_identifier] = type.getDefinition();LiNeBrEaKaddTypeInfo(row, ((ArrayType) type).collectionBaseType());LiNeBrEaK"
		}, {
			"start_line": 2088,
			"end_line": 2095,
			"code_lines": "row[object_type]                = 'USER-DEFINED TYPE';LiNeBrEaKrow[collection_type_identifier] = type.getDefinition();LiNeBrEaKaddTypeInfo(row, ((ArrayType) type).collectionBaseType());LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2111,
			"end_line": 2118,
			"code_lines": "row[object_type]                = 'ROUTINE';LiNeBrEaKrow[collection_type_identifier] = type.getDefinition();LiNeBrEaKaddTypeInfo(row, ((ArrayType) type).collectionBaseType());LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2130,
			"end_line": 2142,
			"code_lines": "row                             = t.getEmptyRowData();LiNeBrEaKrow[object_catalog] = database.getCatalogName().name;LiNeBrEaKrow[object_schema]              = routine.getSchemaName().name;LiNeBrEaKrow[object_name]                = routine.getName().name;LiNeBrEaKrow[object_type]                = 'ROUTINE';LiNeBrEaKrow[collection_type_identifier] = type.getDefinition();LiNeBrEaKaddTypeInfo(row, ((ArrayType) type).collectionBaseType());LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2173,
			"end_line": 2201,
			"code_lines": "row[character_set_name] =LiNeBrEaK((CharacterType) type).getCharacterSet().getName().name;LiNeBrEaKrow[collation_catalog] = database.getCatalogName().name;LiNeBrEaKrow[collation_schema] =LiNeBrEaK((CharacterType) type).getCollation().getSchemaName().name;LiNeBrEaKrow[collation_name] =LiNeBrEaK((CharacterType) type).getCollation().getName().name;LiNeBrEaK} else if (type.isNumberType()) {LiNeBrEaKrow[numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKrow[declared_numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKif (type.isExactNumberType()) {LiNeBrEaKrow[numeric_scale] = row[declared_numeric_scale] =LiNeBrEaKValuePool.getLong(type.scale);LiNeBrEaK}LiNeBrEaKrow[numeric_precision_radix] =LiNeBrEaKValuePool.getLong(type.getPrecisionRadix());LiNeBrEaK} else if (type.isBooleanType()) {LiNeBrEaK} else if (type.isDateTimeType()) {LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isIntervalType()) {LiNeBrEaKrow[data_type] = 'INTERVAL';LiNeBrEaKrow[interval_type] =LiNeBrEaK((IntervalType) type).getQualifier(type.typeCode);LiNeBrEaKrow[interval_precision] = ValuePool.getLong(type.precision);LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isBinaryType()) {LiNeBrEaK"
		}, {
			"start_line": 2220,
			"end_line": 2227,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[]{ 0 }, true);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKIterator grantees;LiNeBrEaKGrantee  grantee;LiNeBrEaKObject[] row;LiNeBrEaK"
		}, {
			"start_line": 2240,
			"end_line": 2247,
			"code_lines": "addColumn(t, 'PATH_JAR_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PATH_JAR_SCHAMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PATH_JAR_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2248,
			"end_line": 2254,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2291,
			"end_line": 2300,
			"code_lines": "addColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDINAL_POSITION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'POSITION_IN_UNIQUE_CONSTRAINT', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 2377,
			"end_line": 2384,
			"code_lines": "t.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2407,
			"end_line": 2413,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDINAL_POSITION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'PARAMETER_MODE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_RESULT', YES_OR_NO);LiNeBrEaK"
		}, {
			"start_line": 2414,
			"end_line": 2422,
			"code_lines": "addColumn(t, 'PARAMETER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FROM_SQL_SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FROM_SQL_SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FROM_SQL_SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TO_SQL_SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TO_SQL_SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TO_SQL_SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 2423,
			"end_line": 2448,
			"code_lines": "addColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_CATALOG', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MAXIMUM_CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DECLARED_DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2531,
			"end_line": 2544,
			"code_lines": "if (type.isCharacterType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision * 2);LiNeBrEaKrow[character_set_catalog] =LiNeBrEaKdatabase.getCatalogName().name;LiNeBrEaKrow[character_set_schema] =LiNeBrEaK((CharacterType) type).getCharacterSet()LiNeBrEaK.getSchemaName().name;LiNeBrEaKrow[character_set_name] =LiNeBrEaK((CharacterType) type).getCharacterSet().getName()LiNeBrEaK.name;LiNeBrEaK"
		}, {
			"start_line": 2561,
			"end_line": 2567,
			"code_lines": "} else if (type.isIntervalType()) {LiNeBrEaKrow[data_type] = 'INTERVAL';LiNeBrEaKrow[interval_type] =LiNeBrEaK((IntervalType) type).getQualifier(type.typeCode);LiNeBrEaKrow[interval_precision] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK"
		}, {
			"start_line": 2569,
			"end_line": 2584,
			"code_lines": "} else if (type.isBinaryType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isBitType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isArrayType()) {LiNeBrEaKrow[maximum_cardinality] =LiNeBrEaKValuePool.getLong(type.arrayLimitCardinality());LiNeBrEaKrow[data_type] = 'ARRAY';LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2583,
			"end_line": 2589,
			"code_lines": "}LiNeBrEaKif (type.isDistinctType()) {LiNeBrEaKrow[udt_catalog] = database.getCatalogName().name;LiNeBrEaKrow[udt_schema]  = type.getSchemaName().name;LiNeBrEaKrow[udt_name]    = type.getName().name;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2600,
			"end_line": 2607,
			"code_lines": "addColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UNIQUE_CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UNIQUE_CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UNIQUE_CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MATCH_OPTION', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 2603,
			"end_line": 2609,
			"code_lines": "addColumn(t, 'UNIQUE_CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UNIQUE_CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UNIQUE_CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MATCH_OPTION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'UPDATE_RULE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'DELETE_RULE', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 2611,
			"end_line": 2617,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2,LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2629,
			"end_line": 2636,
			"code_lines": "Constraint   constraint;LiNeBrEaKObject[]     row;LiNeBrEaKtables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (table.isView()LiNeBrEaK"
		}, {
			"start_line": 2669,
			"end_line": 2676,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 2682,
			"end_line": 2695,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKResult rs = sys.executeDirectStatement(LiNeBrEaK'SELECT GRANTOR, GRANTEE, TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, PRIVILEGE_TYPE, IS_GRANTABLE 'LiNeBrEaK+ 'FROM INFORMATION_SCHEMA.COLUMN_PRIVILEGES 'LiNeBrEaK+ 'JOIN INFORMATION_SCHEMA.APPLICABLE_ROLES ON GRANTEE = ROLE_NAME;');LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKsys.close();LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2699,
			"end_line": 2710,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2714,
			"end_line": 2722,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKResult rs = sys.executeDirectStatement(LiNeBrEaK'SELECT GRANTOR, GRANTEE, SPECIFIC_CATALOG, SPECIFIC_SCHEMA, 'LiNeBrEaK+ 'SPECIFIC_NAME, ROUTINE_CATALOG, ROUTINE_SCHEMA, ROUTINE_NAME, 'LiNeBrEaK"
		}, {
			"start_line": 2744,
			"end_line": 2751,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaK"
		}, {
			"start_line": 2757,
			"end_line": 2766,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKResult rs = sys.executeDirectStatement(LiNeBrEaK'SELECT GRANTOR, GRANTEE, TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, 'LiNeBrEaK+ 'PRIVILEGE_TYPE, IS_GRANTABLE, 'NO' 'LiNeBrEaK+ 'FROM INFORMATION_SCHEMA.TABLE_PRIVILEGES 'LiNeBrEaK"
		}, {
			"start_line": 2765,
			"end_line": 2771,
			"code_lines": "+ 'FROM INFORMATION_SCHEMA.TABLE_PRIVILEGES 'LiNeBrEaK+ 'JOIN INFORMATION_SCHEMA.APPLICABLE_ROLES ON GRANTEE = ROLE_NAME;');LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKsys.close();LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2775,
			"end_line": 2783,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2786,
			"end_line": 2799,
			"code_lines": "return t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKResult rs = sys.executeDirectStatement(LiNeBrEaK'SELECT GRANTOR, GRANTEE, UDT_CATALOG, UDT_SCHEMA, UDT_NAME, 'LiNeBrEaK+ 'PRIVILEGE_TYPE, IS_GRANTABLE 'LiNeBrEaK+ 'FROM INFORMATION_SCHEMA.UDT_PRIVILEGES 'LiNeBrEaK+ 'JOIN INFORMATION_SCHEMA.APPLICABLE_ROLES ON GRANTEE = ROLE_NAME;');LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKsys.close();LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2803,
			"end_line": 2810,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 2816,
			"end_line": 2830,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKResult rs = sys.executeDirectStatement(LiNeBrEaK'SELECT GRANTOR, GRANTEE, OBJECT_CATALOG, OBJECT_SCHEMA, OBJECT_NAME, 'LiNeBrEaK+ 'OBJECT_TYPE, PRIVILEGE_TYPE, IS_GRANTABLE 'LiNeBrEaK+ 'FROM INFORMATION_SCHEMA.USAGE_PRIVILEGES 'LiNeBrEaK+ 'JOIN INFORMATION_SCHEMA.APPLICABLE_ROLES ON GRANTEE = ROLE_NAME;');LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKsys.close();LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2834,
			"end_line": 2845,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2888,
			"end_line": 2895,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2899,
			"end_line": 2910,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2911,
			"end_line": 2917,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6, 7, 8, 9LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2957,
			"end_line": 2963,
			"code_lines": "row[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaKrow[routine_catalog]  = database.getCatalogName().name;LiNeBrEaKrow[routine_schema]   = routine.getSchemaName().name;LiNeBrEaKrow[routine_name]     = routine.getName().name;LiNeBrEaK"
		}, {
			"start_line": 2969,
			"end_line": 2975,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2981,
			"end_line": 2988,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'JAR_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 2989,
			"end_line": 2995,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2992,
			"end_line": 2998,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int specific_catalog = 0;LiNeBrEaKfinal int specific_schema  = 1;LiNeBrEaKfinal int specific_name    = 2;LiNeBrEaK"
		}, {
			"start_line": 3029,
			"end_line": 3036,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3037,
			"end_line": 3049,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int specific_catalog = 0;LiNeBrEaKfinal int specific_schema  = 1;LiNeBrEaKfinal int specific_name    = 2;LiNeBrEaKfinal int routine_catalog  = 3;LiNeBrEaKfinal int routine_schema   = 4;LiNeBrEaKfinal int routine_name     = 5;LiNeBrEaK"
		}, {
			"start_line": 3049,
			"end_line": 3058,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.SPECIFIC_ROUTINE);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKRoutine        routine = (Routine) it.next();LiNeBrEaKOrderedHashSet set     = routine.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 3062,
			"end_line": 3068,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaKrow[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaK"
		}, {
			"start_line": 3071,
			"end_line": 3078,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3082,
			"end_line": 3089,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3090,
			"end_line": 3099,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int specific_catalog = 0;LiNeBrEaKfinal int specific_schema  = 1;LiNeBrEaKfinal int specific_name    = 2;LiNeBrEaK"
		}, {
			"start_line": 3102,
			"end_line": 3111,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.SPECIFIC_ROUTINE);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKRoutine        routine = (Routine) it.next();LiNeBrEaKOrderedHashSet set     = routine.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 3112,
			"end_line": 3121,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(refName)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaKrow[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaK"
		}, {
			"start_line": 3124,
			"end_line": 3131,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3135,
			"end_line": 3145,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3149,
			"end_line": 3161,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int specific_catalog = 0;LiNeBrEaKfinal int specific_schema  = 1;LiNeBrEaKfinal int specific_name    = 2;LiNeBrEaKfinal int routine_catalog  = 3;LiNeBrEaKfinal int routine_schema   = 4;LiNeBrEaKfinal int routine_name     = 5;LiNeBrEaKfinal int table_catalog    = 6;LiNeBrEaKfinal int table_schema     = 7;LiNeBrEaKfinal int table_name       = 8;LiNeBrEaK"
		}, {
			"start_line": 3161,
			"end_line": 3170,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.SPECIFIC_ROUTINE);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKRoutine        routine = (Routine) it.next();LiNeBrEaKOrderedHashSet set     = routine.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 3172,
			"end_line": 3182,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(refName)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaKrow[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaKrow[routine_catalog]  = database.getCatalogName().name;LiNeBrEaK"
		}, {
			"start_line": 3178,
			"end_line": 3185,
			"code_lines": "row[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaKrow[routine_catalog]  = database.getCatalogName().name;LiNeBrEaKrow[routine_schema]   = routine.getSchemaName().name;LiNeBrEaKrow[routine_name]     = routine.getName().name;LiNeBrEaKrow[table_catalog]    = database.getCatalogName().name;LiNeBrEaK"
		}, {
			"start_line": 3187,
			"end_line": 3194,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3198,
			"end_line": 3205,
			"code_lines": "addColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_TYPE', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 3204,
			"end_line": 3214,
			"code_lines": "addColumn(t, 'ROUTINE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'MODULE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MODULE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MODULE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CHARACTER_MAXIMUM_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 3212,
			"end_line": 3235,
			"code_lines": "addColumn(t, 'CHARACTER_MAXIMUM_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'TYPE_UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'MAXIMUM_CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_BODY', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 3233,
			"end_line": 3241,
			"code_lines": "addColumn(t, 'DTD_IDENTIFIER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ROUTINE_BODY', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'ROUTINE_DEFINITION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'EXTERNAL_NAME', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'EXTERNAL_LANGUAGE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'PARAMETER_STYLE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_DETERMINISTIC', YES_OR_NO);LiNeBrEaKaddColumn(t, 'SQL_DATA_ACCESS', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 3258,
			"end_line": 3280,
			"code_lines": "addColumn(t, 'RESULT_CAST_CHAR_MAX_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_CHAR_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_CHAR_SET_CATALOG', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'RESULT_CAST_CHAR_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_NUMERIC_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'RESULT_CAST_INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_TYPE_UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_TYPE_UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_TYPE_UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_SCOPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_MAX_CARDINALITY', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'RESULT_CAST_DTD_IDENTIFIER', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 3399,
			"end_line": 3405,
			"code_lines": "row[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = routine.getSchemaName().name;LiNeBrEaKrow[specific_name]    = routine.getSpecificName().name;LiNeBrEaKrow[routine_catalog]  = database.getCatalogName().name;LiNeBrEaKrow[routine_schema]   = routine.getSchemaName().name;LiNeBrEaKrow[routine_name]     = routine.getName().name;LiNeBrEaK"
		}, {
			"start_line": 3416,
			"end_line": 3473,
			"code_lines": "if (type.isCharacterType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision * 2);LiNeBrEaKrow[character_set_catalog] =LiNeBrEaKdatabase.getCatalogName().name;LiNeBrEaKrow[character_set_schema] =LiNeBrEaK((CharacterType) type).getCharacterSet()LiNeBrEaK.getSchemaName().name;LiNeBrEaKrow[character_set_name] =LiNeBrEaK((CharacterType) type).getCharacterSet().getName()LiNeBrEaK.name;LiNeBrEaKrow[collation_catalog] = database.getCatalogName().name;LiNeBrEaKrow[collation_schema] =LiNeBrEaK((CharacterType) type).getCollation().getSchemaName()LiNeBrEaK.name;LiNeBrEaKrow[collation_name] =LiNeBrEaK((CharacterType) type).getCollation().getName().name;LiNeBrEaK} else if (type.isNumberType()) {LiNeBrEaKrow[numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKrow[declared_numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKif (type.isExactNumberType()) {LiNeBrEaKrow[numeric_scale] = row[declared_numeric_scale] =LiNeBrEaKValuePool.getLong(type.scale);LiNeBrEaK}LiNeBrEaKrow[numeric_precision_radix] =LiNeBrEaKValuePool.getLong(type.getPrecisionRadix());LiNeBrEaK} else if (type.isBooleanType()) {LiNeBrEaK} else if (type.isDateTimeType()) {LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isIntervalType()) {LiNeBrEaKrow[data_type] = 'INTERVAL';LiNeBrEaKrow[interval_type] =LiNeBrEaK((IntervalType) type).getQualifier(type.typeCode);LiNeBrEaKrow[interval_precision] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isBinaryType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isBitType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isArrayType()) {LiNeBrEaKrow[maximum_cardinality] =LiNeBrEaKValuePool.getLong(type.arrayLimitCardinality());LiNeBrEaKrow[data_type] = 'ARRAY';LiNeBrEaK}LiNeBrEaKrow[dtd_identifier]     = type.getDefinition();LiNeBrEaKrow[declared_data_type] = row[data_type];LiNeBrEaK"
		}, {
			"start_line": 3553,
			"end_line": 3561,
			"code_lines": "addColumn(t, 'CATALOG_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCHEMA_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCHEMA_OWNER', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DEFAULT_CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SQL_PATH', CHARACTER_DATA);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3605,
			"end_line": 3612,
			"code_lines": "addColumn(t, 'FEATURE_ID', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'FEATURE_NAME', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'SUB_FEATURE_ID', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'SUB_FEATURE_NAME', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_SUPPORTED', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_VERIFIED_BY', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'COMMENTS', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 3617,
			"end_line": 3625,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKString sql = (String) statementMap.get('');LiNeBrEaKResult rs  = sys.executeDirectStatement(sql);LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaK"
		}, {
			"start_line": 3640,
			"end_line": 3649,
			"code_lines": "return t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKString sql = (String) statementMap.get('');LiNeBrEaKResult rs  = sys.executeDirectStatement(sql);LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3653,
			"end_line": 3659,
			"code_lines": "addColumn(t, 'ID', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NAME', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_SUPPORTED', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_VERIFIED_BY', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'COMMENTS', CHARACTER_DATA);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3660,
			"end_line": 3671,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[]{ 0 }, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKString sql = (String) statementMap.get('');LiNeBrEaKResult rs  = sys.executeDirectStatement(sql);LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3675,
			"end_line": 3681,
			"code_lines": "addColumn(t, 'PART', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NAME', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_SUPPORTED', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_VERIFIED_BY', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'COMMENTS', CHARACTER_DATA);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3682,
			"end_line": 3692,
			"code_lines": "t.createPrimaryKeyConstraint(name, new int[]{ 0 }, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKString sql = (String) statementMap.get('');LiNeBrEaKResult rs  = sys.executeDirectStatement(sql);LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3702,
			"end_line": 3712,
			"code_lines": "t.createPrimaryKeyConstraint(name, new int[]{ 0 }, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaKString sql = (String) statementMap.get('');LiNeBrEaKResult rs  = sys.executeDirectStatement(sql);LiNeBrEaKt.insertSys(session, store, rs);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3724,
			"end_line": 3730,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[]{ 0 }, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKSession sys = database.sessionManager.newSysSession(LiNeBrEaKSqlInvariants.INFORMATION_SCHEMA_HSQLNAME, session.getUser());LiNeBrEaK"
		}, {
			"start_line": 3736,
			"end_line": 3743,
			"code_lines": "addColumn(t, 'CONSTRAINT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CONSTRAINT_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 3740,
			"end_line": 3746,
			"code_lines": "addColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'IS_DEFERRABLE', YES_OR_NO);LiNeBrEaKaddColumn(t, 'INITIALLY_DEFERRED', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3747,
			"end_line": 3753,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3773,
			"end_line": 3779,
			"code_lines": "while (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (table.isView()LiNeBrEaK|| !session.getGrantee().hasNonSelectTableRight(table)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3826,
			"end_line": 3839,
			"code_lines": "addColumn(t, 'TRANSLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRANSLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRANSLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SOURCE_CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SOURCE_CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SOURCE_CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TARGET_CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TARGET_CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TARGET_CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRANSLATION_SOURCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRANSLATION_SOURCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRANSLATION_SOURCE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3840,
			"end_line": 3846,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3852,
			"end_line": 3860,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3861,
			"end_line": 3867,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3901,
			"end_line": 3908,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3912,
			"end_line": 3919,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3920,
			"end_line": 3926,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3932,
			"end_line": 3945,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.TRIGGER);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKTriggerDef trigger = (TriggerDef) it.next();LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKtrigger.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKOrderedHashSet set = trigger.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 3955,
			"end_line": 3962,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3966,
			"end_line": 3973,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 3974,
			"end_line": 3983,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int trigger_catalog  = 0;LiNeBrEaKfinal int trigger_schema   = 1;LiNeBrEaKfinal int trigger_name     = 2;LiNeBrEaK"
		}, {
			"start_line": 3983,
			"end_line": 3989,
			"code_lines": "final int sequence_catalog = 3;LiNeBrEaKfinal int sequence_schema  = 4;LiNeBrEaKfinal int sequence_name    = 5;LiNeBrEaKIterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaK"
		}, {
			"start_line": 3986,
			"end_line": 3999,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.TRIGGER);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKTriggerDef trigger = (TriggerDef) it.next();LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKtrigger.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKOrderedHashSet set = trigger.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 4000,
			"end_line": 4006,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaKrow[trigger_catalog]  = database.getCatalogName().name;LiNeBrEaKrow[trigger_schema]   = trigger.getSchemaName().name;LiNeBrEaKrow[trigger_name]     = trigger.getName().name;LiNeBrEaK"
		}, {
			"start_line": 4006,
			"end_line": 4016,
			"code_lines": "row[sequence_catalog] = database.getCatalogName().name;LiNeBrEaKrow[sequence_schema]  = refName.schema.name;LiNeBrEaKrow[sequence_name]    = refName.name;LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4020,
			"end_line": 4027,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4028,
			"end_line": 4034,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4031,
			"end_line": 4040,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int trigger_catalog = 0;LiNeBrEaKfinal int trigger_schema  = 1;LiNeBrEaKfinal int trigger_name    = 2;LiNeBrEaKfinal int table_catalog   = 3;LiNeBrEaKfinal int table_schema    = 4;LiNeBrEaKfinal int table_name      = 5;LiNeBrEaK"
		}, {
			"start_line": 4040,
			"end_line": 4053,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.TRIGGER);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKTriggerDef trigger = (TriggerDef) it.next();LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(LiNeBrEaKtrigger.getName())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKOrderedHashSet set = trigger.getReferences();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaK"
		}, {
			"start_line": 4051,
			"end_line": 4057,
			"code_lines": "for (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaKif (refName.type != SchemaObject.TABLELiNeBrEaK&& refName.type != SchemaObject.VIEW) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4064,
			"end_line": 4071,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4075,
			"end_line": 4085,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_MANIPULATION', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_TABLE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ACTION_ORDER', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'ACTION_CONDITION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'ACTION_STATEMENT', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 4116,
			"end_line": 4122,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.TRIGGER);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKTriggerDef trigger = (TriggerDef) it.next();LiNeBrEaK"
		}, {
			"start_line": 4161,
			"end_line": 4169,
			"code_lines": "addColumn(t, 'TRIGGER_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TRIGGER_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_TABLE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'EVENT_OBJECT_COLUMN', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4170,
			"end_line": 4176,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4183,
			"end_line": 4189,
			"code_lines": "Iterator it;LiNeBrEaKObject[] row;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.TRIGGER);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKTriggerDef trigger = (TriggerDef) it.next();LiNeBrEaK"
		}, {
			"start_line": 4217,
			"end_line": 4225,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'UDT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4226,
			"end_line": 4232,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4273,
			"end_line": 4281,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4285,
			"end_line": 4294,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'OBJECT_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4295,
			"end_line": 4301,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6, 7LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4326,
			"end_line": 4339,
			"code_lines": "for (int i = 0; i < grantees.size(); i++) {LiNeBrEaKGrantee granteeObject = (Grantee) grantees.get(i);LiNeBrEaKOrderedHashSet rights =LiNeBrEaKgranteeObject.getAllDirectPrivileges(object);LiNeBrEaKOrderedHashSet grants =LiNeBrEaKgranteeObject.getAllGrantedPrivileges(object);LiNeBrEaKif (!grants.isEmpty()) {LiNeBrEaKgrants.addAll(rights);LiNeBrEaKrights = grants;LiNeBrEaK}LiNeBrEaKfor (int j = 0; j < rights.size(); j++) {LiNeBrEaKRight right          = (Right) rights.get(j);LiNeBrEaKRight grantableRight = right.getGrantableRights();LiNeBrEaK"
		}, {
			"start_line": 4347,
			"end_line": 4360,
			"code_lines": "row[privilege_type] = Tokens.T_USAGE;LiNeBrEaKrow[is_grantable] =LiNeBrEaKright.getGrantee() == object.getOwner()LiNeBrEaK|| grantableRight.isFull() ? Tokens.T_YESLiNeBrEaK: Tokens.T_NO;;LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4364,
			"end_line": 4370,
			"code_lines": "addColumn(t, 'USER_DEFINED_TYPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_CATEGORY', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'IS_INSTANTIABLE', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_FINAL', YES_OR_NO);LiNeBrEaK"
		}, {
			"start_line": 4368,
			"end_line": 4392,
			"code_lines": "addColumn(t, 'IS_INSTANTIABLE', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_FINAL', YES_OR_NO);LiNeBrEaKaddColumn(t, 'ORDERING_FORM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDERING_CATEGORY', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDERING_ROUTINE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDERING_ROUTINE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'ORDERING_ROUTINE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'REFERENCE_TYPE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CHARACTER_MAXIMUM_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_OCTET_LENGTH', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'CHARACTER_SET_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLLATION_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DATETIME_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'INTERVAL_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INTERVAL_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'SOURCE_DTD_IDENTIFIER', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 4402,
			"end_line": 4408,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4457,
			"end_line": 4484,
			"code_lines": "if (type.isCharacterType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] = ValuePool.getLong(type.precisionLiNeBrEaK* 2);LiNeBrEaKrow[character_set_catalog] = database.getCatalogName().name;LiNeBrEaKrow[character_set_schema] =LiNeBrEaK((CharacterType) type).getCharacterSet().getSchemaName()LiNeBrEaK.name;LiNeBrEaKrow[character_set_name] =LiNeBrEaK((CharacterType) type).getCharacterSet().getName().name;LiNeBrEaKrow[collation_catalog] = database.getCatalogName().name;LiNeBrEaKrow[collation_schema] =LiNeBrEaK((CharacterType) type).getCollation().getSchemaName().name;LiNeBrEaKrow[collation_name] =LiNeBrEaK((CharacterType) type).getCollation().getName().name;LiNeBrEaK} else if (type.isNumberType()) {LiNeBrEaKrow[numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKrow[declared_numeric_precision] = ValuePool.getLong(LiNeBrEaK((NumberType) type).getNumericPrecisionInRadix());LiNeBrEaKif (type.isExactNumberType()) {LiNeBrEaKrow[numeric_scale] = row[declared_numeric_scale] =LiNeBrEaKValuePool.getLong(type.scale);LiNeBrEaK}LiNeBrEaKrow[numeric_precision_radix] =LiNeBrEaKValuePool.getLong(type.getPrecisionRadix());LiNeBrEaK"
		}, {
			"start_line": 4486,
			"end_line": 4508,
			"code_lines": "row[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isIntervalType()) {LiNeBrEaKrow[data_type] = 'INTERVAL';LiNeBrEaKrow[interval_type] =LiNeBrEaK((IntervalType) type).getQualifier(type.typeCode);LiNeBrEaKrow[interval_precision] = ValuePool.getLong(type.precision);LiNeBrEaKrow[datetime_precision] = ValuePool.getLong(type.scale);LiNeBrEaK} else if (type.isBinaryType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isBitType()) {LiNeBrEaKrow[character_maximum_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaKrow[character_octet_length] =LiNeBrEaKValuePool.getLong(type.precision);LiNeBrEaK} else if (type.isArrayType()) {LiNeBrEaKrow[maximum_cardinality] =LiNeBrEaKValuePool.getLong(type.arrayLimitCardinality());LiNeBrEaKrow[data_type] = 'ARRAY';LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4518,
			"end_line": 4526,
			"code_lines": "addColumn(t, 'VIEW_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4527,
			"end_line": 4533,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5, 6LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4577,
			"end_line": 4584,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4588,
			"end_line": 4595,
			"code_lines": "addColumn(t, 'VIEW_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SPECIFIC_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4596,
			"end_line": 4602,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4619,
			"end_line": 4628,
			"code_lines": "for (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName refName = (HsqlName) set.get(i);LiNeBrEaKif (refName.type != SchemaObject.SPECIFIC_ROUTINE) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(refName)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                   = t.getEmptyRowData();LiNeBrEaK"
		}, {
			"start_line": 4631,
			"end_line": 4641,
			"code_lines": "row[specific_catalog] = database.getCatalogName().name;LiNeBrEaKrow[specific_schema]  = refName.schema.name;LiNeBrEaKrow[specific_name]    = refName.name;LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4645,
			"end_line": 4652,
			"code_lines": "addColumn(t, 'VIEW_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 4653,
			"end_line": 4659,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2, 3, 4, 5LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4659,
			"end_line": 4665,
			"code_lines": "final int view_catalog  = 0;LiNeBrEaKfinal int view_schema   = 1;LiNeBrEaKfinal int view_name     = 2;LiNeBrEaKfinal int table_catalog = 3;LiNeBrEaKfinal int table_schema  = 4;LiNeBrEaKfinal int table_name    = 5;LiNeBrEaK"
		}, {
			"start_line": 4665,
			"end_line": 4672,
			"code_lines": "Iterator tables;LiNeBrEaKTable    table;LiNeBrEaKObject[] row;LiNeBrEaKtables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaK"
		}, {
			"start_line": 4668,
			"end_line": 4675,
			"code_lines": "tables =LiNeBrEaKdatabase.schemaManager.databaseObjectIterator(SchemaObject.TABLE);LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (!table.isView()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4678,
			"end_line": 4685,
			"code_lines": "if (refName.type != SchemaObject.TABLELiNeBrEaK&& refName.type != SchemaObject.VIEW) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (!session.getGrantee().isFullyAccessibleByRole(refName)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4692,
			"end_line": 4699,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4703,
			"end_line": 4709,
			"code_lines": "addColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'VIEW_DEFINITION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CHECK_OPTION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_UPDATABLE', YES_OR_NO);LiNeBrEaK"
		}, {
			"start_line": 4717,
			"end_line": 4723,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKIterator  tables;LiNeBrEaKTable     table;LiNeBrEaKObject[]  row;LiNeBrEaK"
		}, {
			"start_line": 4741,
			"end_line": 4748,
			"code_lines": "if (!isAccessibleTable(session, table)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                = t.getEmptyRowData();LiNeBrEaKrow[table_catalog] = database.getCatalogName().name;LiNeBrEaKrow[table_schema]  = table.getSchemaName().name;LiNeBrEaKrow[table_name]    = table.getName().name;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/dbinfo/DatabaseInformationMain.java|",
		"loc": "1905",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import org.hsqldb.HsqlException;LiNeBrEaKimport org.hsqldb.HsqlNameManager;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.NumberSequence;LiNeBrEaKimport org.hsqldb.Routine;LiNeBrEaKimport org.hsqldb.RoutineSchema;LiNeBrEaK"
		}, {
			"start_line": 334,
			"end_line": 341,
			"code_lines": "addColumn(t, 'SCOPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SCOPE_TABLE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SOURCE_DATA_TYPE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'IS_AUTOINCREMENT', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_GENERATEDCOLUMN', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 396,
			"end_line": 404,
			"code_lines": "if (translateTTI) {LiNeBrEaKif (type.isIntervalType()) {LiNeBrEaKtype = ((IntervalType) type).getCharacterType();LiNeBrEaK} else if (type.isDateTimeTypeWithZone()) {LiNeBrEaKtype = ((DateTimeType) type)LiNeBrEaK.getDateTimeTypeWithoutZone();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 467,
			"end_line": 475,
			"code_lines": "addColumn(t, 'PKTABLE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PKTABLE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PKTABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PKCOLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FKTABLE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FKTABLE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FKTABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'FKCOLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 694,
			"end_line": 700,
			"code_lines": "t.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 704,
			"end_line": 710,
			"code_lines": "addColumn(t, 'TABLE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'KEY_SEQ', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'PK_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 715,
			"end_line": 721,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKString tableCatalog;LiNeBrEaKString tableSchema;LiNeBrEaKString tableName;LiNeBrEaK"
		}, {
			"start_line": 768,
			"end_line": 774,
			"code_lines": "addColumn(t, 'PROCEDURE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PROCEDURE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PROCEDURE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_TYPE', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'DATA_TYPE', Type.SQL_SMALLINT);LiNeBrEaK"
		}, {
			"start_line": 773,
			"end_line": 779,
			"code_lines": "addColumn(t, 'DATA_TYPE', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'TYPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRECISION', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'LENGTH', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'SCALE', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'RADIX', Type.SQL_SMALLINT);LiNeBrEaK"
		}, {
			"start_line": 780,
			"end_line": 786,
			"code_lines": "addColumn(t, 'REMARKS', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'COLUMN_DEF', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'SQL_DATA_TYPE', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'SQL_DATETIME_SUB', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'CHAR_OCTET_LENGTH', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'ORDINAL_POSITION', Type.SQL_INTEGER);LiNeBrEaK"
		}, {
			"start_line": 816,
			"end_line": 822,
			"code_lines": "int           columnCount;LiNeBrEaKIterator      routines;LiNeBrEaKRoutineSchema routineSchema;LiNeBrEaKRoutine       routine;LiNeBrEaKObject[]      row;LiNeBrEaKType          type;LiNeBrEaK"
		}, {
			"start_line": 823,
			"end_line": 836,
			"code_lines": "routines = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.ROUTINE);LiNeBrEaKwhile (routines.hasNext()) {LiNeBrEaKroutineSchema = (RoutineSchema) routines.next();LiNeBrEaKif (!session.getGrantee().isAccessible(routineSchema)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKRoutine[] specifics = routineSchema.getSpecificRoutines();LiNeBrEaKfor (int i = 0; i < specifics.length; i++) {LiNeBrEaKroutine     = specifics[i];LiNeBrEaKcolumnCount = routine.getParameterCount();LiNeBrEaKfor (int j = 0; j < columnCount; j++) {LiNeBrEaKColumnSchema column = routine.getParameter(j);LiNeBrEaK"
		}, {
			"start_line": 838,
			"end_line": 846,
			"code_lines": "if (translateTTI) {LiNeBrEaKif (type.isIntervalType()) {LiNeBrEaKtype = ((IntervalType) type).getCharacterType();LiNeBrEaK} else if (type.isDateTimeTypeWithZone()) {LiNeBrEaKtype = ((DateTimeType) type)LiNeBrEaK.getDateTimeTypeWithoutZone();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 889,
			"end_line": 895,
			"code_lines": "t.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1023,
			"end_line": 1031,
			"code_lines": "row[icat]          = cat;LiNeBrEaKrow[ischem]        = schem;LiNeBrEaKrow[ipname]        = pName;LiNeBrEaKrow[iinput_parms]  = ip;LiNeBrEaKrow[ioutput_parms] = op;LiNeBrEaKrow[iresult_sets]  = rs;LiNeBrEaKrow[iremark]       = remark;LiNeBrEaKrow[iptype]        = pType;LiNeBrEaK"
		}, {
			"start_line": 1096,
			"end_line": 1117,
			"code_lines": "row[icat]       = cat;LiNeBrEaKrow[ischem]     = schem;LiNeBrEaKrow[iname]      = pName;LiNeBrEaKrow[icol_name]  = cName;LiNeBrEaKrow[icol_type]  = cType;LiNeBrEaKrow[idata_type] = dType;LiNeBrEaKrow[itype_name] = tName;LiNeBrEaKrow[iprec]      = prec;LiNeBrEaKrow[ilength]    = len;LiNeBrEaKrow[iscale]     = scale;LiNeBrEaKrow[iradix]     = radix;LiNeBrEaKrow[inullable]  = nullability;LiNeBrEaKrow[iremark]    = remark;LiNeBrEaKrow[icol_default]      = colDefault;LiNeBrEaKrow[isql_data_type]    = sqlDataType;LiNeBrEaKrow[isql_datetime_sub] = sqlDateTimeSub;LiNeBrEaKrow[ichar_octet_len]   = charOctetLength;LiNeBrEaKrow[iordinal_position] = ordinalPosition;LiNeBrEaKrow[iis_nullable]      = isNullable;LiNeBrEaKrow[ispecific_name]    = specificName;LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK"
		}, {
			"start_line": 1155,
			"end_line": 1161,
			"code_lines": "addColumn(t, 'TABLE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'REMARKS', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'TYPE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SELF_REFERENCING_COL_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1157,
			"end_line": 1163,
			"code_lines": "addColumn(t, 'TYPE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TYPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SELF_REFERENCING_COL_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'REF_GENERATION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'HSQLDB_TYPE', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1193,
			"end_line": 1199,
			"code_lines": "while (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (!isAccessibleTable(session, table)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKti.setTable(table);LiNeBrEaK"
		}, {
			"start_line": 1392,
			"end_line": 1399,
			"code_lines": "if (translateTTI) {LiNeBrEaKif (type.isIntervalType()) {LiNeBrEaKtype = ((IntervalType) type).getCharacterType();LiNeBrEaK} else if (type.isDateTimeTypeWithZone()) {LiNeBrEaKtype = ((DateTimeType) type).getDateTimeTypeWithoutZone();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1419,
			"end_line": 1425,
			"code_lines": "addColumn(t, 'BUFFER_LENGTH', Type.SQL_INTEGER);LiNeBrEaKaddColumn(t, 'DECIMAL_DIGITS', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'PSEUDO_COLUMN', Type.SQL_SMALLINT);LiNeBrEaKaddColumn(t, 'TABLE_CAT', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEM', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaK"
		}, {
			"start_line": 1474,
			"end_line": 1483,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1487,
			"end_line": 1493,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKString  tableCatalog;LiNeBrEaKString  tableSchema;LiNeBrEaKString  tableName;LiNeBrEaK"
		}, {
			"start_line": 1520,
			"end_line": 1527,
			"code_lines": "if (!grants.isEmpty()) {LiNeBrEaKgrants.addAll(rights);LiNeBrEaKrights = grants;LiNeBrEaK}LiNeBrEaKfor (int j = 0; j < rights.size(); j++) {LiNeBrEaKRight right          = (Right) rights.get(j);LiNeBrEaKRight grantableRight = right.getGrantableRights();LiNeBrEaK"
		}, {
			"start_line": 1547,
			"end_line": 1558,
			"code_lines": ": 'NO';LiNeBrEaKtry {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1562,
			"end_line": 1568,
			"code_lines": "addColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 1565,
			"end_line": 1572,
			"code_lines": "addColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'MAXIMUM_VALUE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'MINIMUM_VALUE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INCREMENT', CHARACTER_DATA);LiNeBrEaK"
		}, {
			"start_line": 1570,
			"end_line": 1576,
			"code_lines": "addColumn(t, 'MINIMUM_VALUE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INCREMENT', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CYCLE_OPTION', YES_OR_NO);LiNeBrEaKaddColumn(t, 'DECLARED_DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaK"
		}, {
			"start_line": 1643,
			"end_line": 1660,
			"code_lines": "addColumn(t, 'SEQUENCE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'SEQUENCE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_PRECISION_RADIX', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'MAXIMUM_VALUE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'MINIMUM_VALUE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'INCREMENT', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'CYCLE_OPTION', YES_OR_NO);LiNeBrEaKaddColumn(t, 'DECLARED_DATA_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_PRECISION', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'DECLARED_NUMERIC_SCALE', CARDINAL_NUMBER);LiNeBrEaKaddColumn(t, 'START_WITH', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'NEXT_VALUE', CHARACTER_DATA);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1661,
			"end_line": 1721,
			"code_lines": "SchemaObject.INDEX);LiNeBrEaKt.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKfinal int sequence_catalog           = 0;LiNeBrEaKfinal int sequence_schema            = 1;LiNeBrEaKfinal int sequence_name              = 2;LiNeBrEaKfinal int data_type                  = 3;LiNeBrEaKfinal int numeric_precision          = 4;LiNeBrEaKfinal int numeric_precision_radix    = 5;LiNeBrEaKfinal int numeric_scale              = 6;LiNeBrEaKfinal int maximum_value              = 7;LiNeBrEaKfinal int minimum_value              = 8;LiNeBrEaKfinal int increment                  = 9;LiNeBrEaKfinal int cycle_option               = 10;LiNeBrEaKfinal int declared_data_type         = 11;LiNeBrEaKfinal int declared_numeric_precision = 12;LiNeBrEaKfinal int declared_numeric_scale     = 13;LiNeBrEaKfinal int start_with                 = 14;LiNeBrEaKfinal int next_value                 = 15;LiNeBrEaKIterator       it;LiNeBrEaKObject[]       row;LiNeBrEaKNumberSequence sequence;LiNeBrEaKit = database.schemaManager.databaseObjectIterator(LiNeBrEaKSchemaObject.SEQUENCE);LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKsequence = (NumberSequence) it.next();LiNeBrEaKif (!session.getGrantee().isAccessible(sequence)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow = t.getEmptyRowData();LiNeBrEaKNumberType type = (NumberType) sequence.getDataType();LiNeBrEaKint radix =LiNeBrEaK(type.typeCode == Types.SQL_NUMERIC || type.typeCode == TypesLiNeBrEaK.SQL_DECIMAL) ? 10LiNeBrEaK: 2;LiNeBrEaKrow[sequence_catalog] = database.getCatalogName().name;LiNeBrEaKrow[sequence_schema]  = sequence.getSchemaName().name;LiNeBrEaKrow[sequence_name]    = sequence.getName().name;LiNeBrEaKrow[data_type]        = sequence.getDataType().getFullNameString();LiNeBrEaKrow[numeric_precision] =LiNeBrEaKValuePool.getInt((int) type.getPrecision());LiNeBrEaKrow[numeric_precision_radix]    = ValuePool.getInt(radix);LiNeBrEaKrow[numeric_scale]              = ValuePool.INTEGER_0;LiNeBrEaKrow[maximum_value] = String.valueOf(sequence.getMaxValue());LiNeBrEaKrow[minimum_value] = String.valueOf(sequence.getMinValue());LiNeBrEaKrow[increment] = String.valueOf(sequence.getIncrement());LiNeBrEaKrow[cycle_option]               = sequence.isCycle() ? 'YES'LiNeBrEaK: 'NO';LiNeBrEaKrow[declared_data_type]         = row[data_type];LiNeBrEaKrow[declared_numeric_precision] = row[numeric_precision];LiNeBrEaKrow[declared_numeric_scale]     = row[declared_numeric_scale];LiNeBrEaKrow[start_with] = String.valueOf(sequence.getStartValue());LiNeBrEaKrow[next_value]                 = String.valueOf(sequence.peek());LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1725,
			"end_line": 1734,
			"code_lines": "addColumn(t, 'GRANTOR', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'GRANTEE', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'TABLE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'PRIVILEGE_TYPE', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'IS_GRANTABLE', YES_OR_NO);LiNeBrEaKaddColumn(t, 'WITH_HIERARCHY', YES_OR_NO);LiNeBrEaKHsqlName name = HsqlNameManager.newInfoSchemaObjectName(LiNeBrEaK"
		}, {
			"start_line": 1737,
			"end_line": 1744,
			"code_lines": "}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKString  tableCatalog;LiNeBrEaKString  tableSchema;LiNeBrEaKString  tableName;LiNeBrEaKGrantee granteeObject;LiNeBrEaK"
		}, {
			"start_line": 1745,
			"end_line": 1753,
			"code_lines": "Iterator tables;LiNeBrEaKTable    table;LiNeBrEaKObject[] row;LiNeBrEaKfinal int grantor        = 0;LiNeBrEaKfinal int grantee        = 1;LiNeBrEaKfinal int table_catalog  = 2;LiNeBrEaKfinal int table_schema   = 3;LiNeBrEaKfinal int table_name     = 4;LiNeBrEaK"
		}, {
			"start_line": 1756,
			"end_line": 1762,
			"code_lines": "OrderedHashSet grantees =LiNeBrEaKsession.getGrantee().getGranteeAndAllRolesWithPublic();LiNeBrEaKtables = allTables();LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable        = (Table) tables.next();LiNeBrEaKtableName    = table.getName().name;LiNeBrEaK"
		}, {
			"start_line": 1763,
			"end_line": 1778,
			"code_lines": "tableSchema  = table.getSchemaName().name;LiNeBrEaKfor (int i = 0; i < grantees.size(); i++) {LiNeBrEaKgranteeObject = (Grantee) grantees.get(i);LiNeBrEaKOrderedHashSet rights =LiNeBrEaKgranteeObject.getAllDirectPrivileges(table);LiNeBrEaKOrderedHashSet grants =LiNeBrEaKgranteeObject.getAllGrantedPrivileges(table);LiNeBrEaKif (!grants.isEmpty()) {LiNeBrEaKgrants.addAll(rights);LiNeBrEaKrights = grants;LiNeBrEaK}LiNeBrEaKfor (int j = 0; j < rights.size(); j++) {LiNeBrEaKRight right          = (Right) rights.get(j);LiNeBrEaKRight grantableRight = right.getGrantableRights();LiNeBrEaKfor (int k = 0; k < Right.privilegeTypes.length; k++) {LiNeBrEaK"
		}, {
			"start_line": 1782,
			"end_line": 1788,
			"code_lines": "row                 = t.getEmptyRowData();LiNeBrEaKrow[grantor] = right.getGrantor().getName().name;LiNeBrEaKrow[grantee] = right.getGrantee().getName().name;LiNeBrEaKrow[table_catalog]  = tableCatalog;LiNeBrEaKrow[table_schema]   = tableSchema;LiNeBrEaKrow[table_name]     = tableName;LiNeBrEaK"
		}, {
			"start_line": 1795,
			"end_line": 1802,
			"code_lines": "try {LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1798,
			"end_line": 1804,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1812,
			"end_line": 1819,
			"code_lines": "addColumn(t, 'SELF_REFERENCING_COLUMN_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'REFERENCE_GENERATION', CHARACTER_DATA);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_CATALOG', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_SCHEMA', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'USER_DEFINED_TYPE_NAME', SQL_IDENTIFIER);LiNeBrEaKaddColumn(t, 'IS_INSERTABLE_INTO', YES_OR_NO);LiNeBrEaKaddColumn(t, 'IS_TYPED', YES_OR_NO);LiNeBrEaK"
		}, {
			"start_line": 1822,
			"end_line": 1830,
			"code_lines": "t.createPrimaryKeyConstraint(name, new int[] {LiNeBrEaK0, 1, 2,LiNeBrEaK}, false);LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaKIterator  tables;LiNeBrEaKTable     table;LiNeBrEaKObject[]  row;LiNeBrEaK"
		}, {
			"start_line": 1842,
			"end_line": 1855,
			"code_lines": "tables = allTables();LiNeBrEaKwhile (tables.hasNext()) {LiNeBrEaKtable = (Table) tables.next();LiNeBrEaKif (!isAccessibleTable(session, table)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKrow                = t.getEmptyRowData();LiNeBrEaKrow[table_catalog] = database.getCatalogName().name;LiNeBrEaKrow[table_schema]  = table.getSchemaName().name;LiNeBrEaKrow[table_name]    = table.getName().name;LiNeBrEaKswitch (table.getTableType()) {LiNeBrEaKcase TableBase.INFO_SCHEMA_TABLE :LiNeBrEaKcase TableBase.VIEW_TABLE :LiNeBrEaK"
		}, {
			"start_line": 1879,
			"end_line": 1886,
			"code_lines": "? (table.onCommitPreserve() ? 'PRESERVE'LiNeBrEaK: 'DELETE')LiNeBrEaK: null;LiNeBrEaKt.insertSys(session, store, row);LiNeBrEaK}LiNeBrEaKreturn t;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/dbinfo/DatabaseInformation.java|",
		"loc": "252",
		"clones": [{
			"start_line": 106,
			"end_line": 200,
			"code_lines": "'SYSTEM_COLUMNS',LiNeBrEaK'SYSTEM_CROSSREFERENCE',LiNeBrEaK'SYSTEM_INDEXINFO',LiNeBrEaK'SYSTEM_PRIMARYKEYS',LiNeBrEaK'SYSTEM_PROCEDURECOLUMNS',LiNeBrEaK'SYSTEM_PROCEDURES',LiNeBrEaK'SYSTEM_SCHEMAS',LiNeBrEaK'SYSTEM_TABLES',LiNeBrEaK'SYSTEM_TABLETYPES',LiNeBrEaK'SYSTEM_TYPEINFO',LiNeBrEaK'SYSTEM_UDTS',LiNeBrEaK'SYSTEM_USERS',LiNeBrEaK'SYSTEM_VERSIONCOLUMNS',LiNeBrEaK'SYSTEM_SEQUENCES',LiNeBrEaK'SYSTEM_CACHEINFO',LiNeBrEaK'SYSTEM_COLUMN_SEQUENCE_USAGE',LiNeBrEaK'SYSTEM_COMMENTS',LiNeBrEaK'SYSTEM_CONNECTION_PROPERTIES',LiNeBrEaK'SYSTEM_PROPERTIES',LiNeBrEaK'SYSTEM_SESSIONINFO',LiNeBrEaK'SYSTEM_SESSIONS',LiNeBrEaK'SYSTEM_TEXTTABLES',LiNeBrEaK'SYSTEM_TABLESTATS',LiNeBrEaK'ADMINISTRABLE_ROLE_AUTHORIZATIONS',LiNeBrEaK'APPLICABLE_ROLES',LiNeBrEaK'ASSERTIONS',LiNeBrEaK'AUTHORIZATIONS',LiNeBrEaK'CHARACTER_SETS',LiNeBrEaK'CHECK_CONSTRAINT_ROUTINE_USAGE',LiNeBrEaK'CHECK_CONSTRAINTS',LiNeBrEaK'COLLATIONS',LiNeBrEaK'COLUMN_COLUMN_USAGE',LiNeBrEaK'COLUMN_DOMAIN_USAGE',LiNeBrEaK'COLUMN_PRIVILEGES',LiNeBrEaK'COLUMN_UDT_USAGE',LiNeBrEaK'COLUMNS',LiNeBrEaK'CONSTRAINT_COLUMN_USAGE',LiNeBrEaK'CONSTRAINT_TABLE_USAGE',LiNeBrEaK'DATA_TYPE_PRIVILEGES',LiNeBrEaK'DOMAIN_CONSTRAINTS',LiNeBrEaK'DOMAINS',LiNeBrEaK'ELEMENT_TYPES',LiNeBrEaK'ENABLED_ROLES',LiNeBrEaK'INFORMATION_SCHEMA_CATALOG_NAME',LiNeBrEaK'JAR_JAR_USAGE',LiNeBrEaK'JARS',LiNeBrEaK'KEY_COLUMN_USAGE',LiNeBrEaK'METHOD_SPECIFICATIONS',LiNeBrEaK'MODULE_COLUMN_USAGE',LiNeBrEaK'MODULE_PRIVILEGES',LiNeBrEaK'MODULE_TABLE_USAGE',LiNeBrEaK'MODULES',LiNeBrEaK'PARAMETERS',LiNeBrEaK'REFERENTIAL_CONSTRAINTS',LiNeBrEaK'ROLE_AUTHORIZATION_DESCRIPTORS',LiNeBrEaK'ROLE_COLUMN_GRANTS',LiNeBrEaK'ROLE_MODULE_GRANTS',LiNeBrEaK'ROLE_ROUTINE_GRANTS',LiNeBrEaK'ROLE_TABLE_GRANTS',LiNeBrEaK'ROLE_UDT_GRANTS',LiNeBrEaK'ROLE_USAGE_GRANTS',LiNeBrEaK'ROUTINE_COLUMN_USAGE',LiNeBrEaK'ROUTINE_JAR_USAGE',LiNeBrEaK'ROUTINE_PRIVILEGES',LiNeBrEaK'ROUTINE_ROUTINE_USAGE',LiNeBrEaK'ROUTINE_SEQUENCE_USAGE',LiNeBrEaK'ROUTINE_TABLE_USAGE',LiNeBrEaK'ROUTINES',LiNeBrEaK'SCHEMATA',LiNeBrEaK'SEQUENCES',LiNeBrEaK'SQL_FEATURES',LiNeBrEaK'SQL_IMPLEMENTATION_INFO',LiNeBrEaK'SQL_PACKAGES',LiNeBrEaK'SQL_PARTS',LiNeBrEaK'SQL_SIZING',LiNeBrEaK'SQL_SIZING_PROFILES',LiNeBrEaK'TABLE_CONSTRAINTS',LiNeBrEaK'TABLE_PRIVILEGES',LiNeBrEaK'TABLES',LiNeBrEaK'TRANSLATIONS',LiNeBrEaK'TRIGGER_COLUMN_USAGE',LiNeBrEaK'TRIGGER_ROUTINE_USAGE',LiNeBrEaK'TRIGGER_SEQUENCE_USAGE',LiNeBrEaK'TRIGGER_TABLE_USAGE',LiNeBrEaK'TRIGGERED_UPDATE_COLUMNS',LiNeBrEaK'TRIGGERS',LiNeBrEaK'TYPE_JAR_USAGE',LiNeBrEaK'UDT_PRIVILEGES',LiNeBrEaK'USAGE_PRIVILEGES',LiNeBrEaK'USER_DEFINED_TYPES',LiNeBrEaK'VIEW_COLUMN_USAGE',LiNeBrEaK'VIEW_ROUTINE_USAGE',LiNeBrEaK'VIEW_TABLE_USAGE',LiNeBrEaK'VIEWS',LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SessionManager.java|",
		"loc": "133"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/HsqlException.java|",
		"loc": "82"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/BaseHashMap.java|",
		"loc": "1181",
		"clones": [{
			"start_line": 119,
			"end_line": 125,
			"code_lines": "if (key == tempKey) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn lookup;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 276,
			"end_line": 287,
			"code_lines": "objectValueTable[lookup] = objectValue;LiNeBrEaK} else if (isIntValue) {LiNeBrEaKintValueTable[lookup] = (int) longValue;LiNeBrEaK} else if (isLongValue) {LiNeBrEaKlongValueTable[lookup] = longValue;LiNeBrEaK}LiNeBrEaKif (accessTable != null) {LiNeBrEaKaccessTable[lookup] = ++accessCount;LiNeBrEaK}LiNeBrEaKreturn returnValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 291,
			"end_line": 302,
			"code_lines": "int hash = (int) longKey;LiNeBrEaKif (isObjectKey) {LiNeBrEaKif (objectKey == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (comparator == null) {LiNeBrEaKhash = objectKey.hashCode();LiNeBrEaK} else {LiNeBrEaKhash = comparator.hashCode(objectKey);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 378,
			"end_line": 384,
			"code_lines": "if (removeKey) {LiNeBrEaKwhile (true) {LiNeBrEaKif (longKey == 0) {LiNeBrEaKhasZeroKey   = false;LiNeBrEaKzeroKeyIndex = -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 391,
			"end_line": 401,
			"code_lines": "return null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKif (intValueTable[lookup] == longValue) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKmultiValue = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 411,
			"end_line": 438,
			"code_lines": "} else {LiNeBrEaKthrow new NoSuchElementException('BaseHashMap');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKlookup = hashIndex.linkNode(index, lastLookup);LiNeBrEaKif (isObjectKey) {LiNeBrEaKobjectKeyTable[lookup] = objectKey;LiNeBrEaK} else if (isIntKey) {LiNeBrEaKintKeyTable[lookup] = (int) longKey;LiNeBrEaKif (longKey == 0) {LiNeBrEaKhasZeroKey   = true;LiNeBrEaKzeroKeyIndex = lookup;LiNeBrEaK}LiNeBrEaK} else if (isLongKey) {LiNeBrEaKlongKeyTable[lookup] = longKey;LiNeBrEaKif (longKey == 0) {LiNeBrEaKhasZeroKey   = true;LiNeBrEaKzeroKeyIndex = lookup;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (isObjectValue) {LiNeBrEaKobjectValueTable[lookup] = objectValue;LiNeBrEaK} else if (isIntValue) {LiNeBrEaKintValueTable[lookup] = (int) longValue;LiNeBrEaK} else if (isLongValue) {LiNeBrEaKlongValueTable[lookup] = longValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 440,
			"end_line": 446,
			"code_lines": "}LiNeBrEaKif (accessTable != null) {LiNeBrEaKaccessTable[lookup] = ++accessCount;LiNeBrEaK}LiNeBrEaKreturn returnValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 449,
			"end_line": 456,
			"code_lines": "int    index       = hashIndex.getHashIndex(hash);LiNeBrEaKint    lookup      = hashIndex.hashTable[index];LiNeBrEaKint    lastLookup  = -1;LiNeBrEaKObject returnValue = null;LiNeBrEaKfor (; lookup >= 0;LiNeBrEaKlastLookup = lookup,LiNeBrEaKlookup = hashIndex.getNextLookup(lookup)) {LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 468,
			"code_lines": "if (longKey == longKeyTable[lookup]) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (lookup >= 0) {LiNeBrEaKif (remove) {LiNeBrEaK"
		}, {
			"start_line": 468,
			"end_line": 477,
			"code_lines": "if (longKey == 0) {LiNeBrEaKhasZeroKey   = false;LiNeBrEaKzeroKeyIndex = -1;LiNeBrEaK}LiNeBrEaKif (isIntKey) {LiNeBrEaKintKeyTable[lookup] = 0;LiNeBrEaK} else {LiNeBrEaKlongKeyTable[lookup] = 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 485,
			"end_line": 491,
			"code_lines": "}LiNeBrEaKreturn returnValue;LiNeBrEaK}LiNeBrEaKif (isObjectValue) {LiNeBrEaKreturnValue              = objectValueTable[lookup];LiNeBrEaKobjectValueTable[lookup] = objectValue;LiNeBrEaK"
		}, {
			"start_line": 494,
			"end_line": 501,
			"code_lines": "}LiNeBrEaKif (accessTable != null) {LiNeBrEaKaccessTable[lookup] = ++accessCount;LiNeBrEaK}LiNeBrEaKreturn returnValue;LiNeBrEaK}LiNeBrEaKif (remove) {LiNeBrEaK"
		}, {
			"start_line": 522,
			"end_line": 530,
			"code_lines": "if (isTwoObjectValue) {LiNeBrEaKobjectKeyTable[lookup] = objectValueTwo;LiNeBrEaK}LiNeBrEaKif (accessTable != null) {LiNeBrEaKaccessTable[lookup] = ++accessCount;LiNeBrEaK}LiNeBrEaKreturn returnValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 535,
			"end_line": 542,
			"code_lines": "int    index       = hashIndex.getHashIndex(hash);LiNeBrEaKint    lookup      = hashIndex.hashTable[index];LiNeBrEaKint    lastLookup  = -1;LiNeBrEaKObject returnValue = null;LiNeBrEaKfor (; lookup >= 0;LiNeBrEaKlastLookup = lookup,LiNeBrEaKlookup = hashIndex.getNextLookup(lookup)) {LiNeBrEaK"
		}, {
			"start_line": 576,
			"end_line": 583,
			"code_lines": "hashIndex.unlinkNode(index, lastLookup, lookup);LiNeBrEaKif (accessTable != null) {LiNeBrEaKaccessTable[lookup] = 0;LiNeBrEaK}LiNeBrEaKif (minimizeOnEmpty && hashIndex.elementCount == 0) {LiNeBrEaKrehash(initialCapacity);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 835,
			"end_line": 853,
			"code_lines": "if (isObjectKey) {LiNeBrEaKif (objectKeyTable[lookup] != null) {LiNeBrEaKreturn lookup;LiNeBrEaK}LiNeBrEaK} else if (isIntKey) {LiNeBrEaKif (intKeyTable[lookup] != 0) {LiNeBrEaKreturn lookup;LiNeBrEaK} else if (hasZeroKey && lookup == zeroKeyIndex) {LiNeBrEaKreturn lookup;LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKif (longKeyTable[lookup] != 0) {LiNeBrEaKreturn lookup;LiNeBrEaK} else if (hasZeroKey && lookup == zeroKeyIndex) {LiNeBrEaKreturn lookup;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 946,
			"end_line": 953,
			"code_lines": "if (hashIndex.elementCount == 0) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKint lookup = getLookup(key);LiNeBrEaKreturn lookup == -1 ? falseLiNeBrEaK: true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1049,
			"end_line": 1064,
			"code_lines": "return value;LiNeBrEaK}LiNeBrEaKpublic int nextInt() throws NoSuchElementException {LiNeBrEaKthrow new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaKpublic long nextLong() throws NoSuchElementException {LiNeBrEaKthrow new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaKpublic void remove() throws NoSuchElementException {LiNeBrEaKthrow new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaKpublic void setValue(Object value) {LiNeBrEaKthrow new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1099,
			"end_line": 1106,
			"code_lines": "throw new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaKremoved = false;LiNeBrEaKif (hasNext()) {LiNeBrEaKcounter++;LiNeBrEaKlookup = nextLookup(lookup);LiNeBrEaKif (keys) {LiNeBrEaK"
		}, {
			"start_line": 1115,
			"end_line": 1122,
			"code_lines": "throw new NoSuchElementException('Hash Iterator');LiNeBrEaK}LiNeBrEaKremoved = false;LiNeBrEaKif (hasNext()) {LiNeBrEaKcounter++;LiNeBrEaKlookup = nextLookup(lookup);LiNeBrEaKif (keys) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/ReusableObjectCache.java|",
		"loc": "22"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/ValuePoolHashMap.java|",
		"loc": "242",
		"clones": [{
			"start_line": 54,
			"end_line": 60,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 70,
			"end_line": 79,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaK"
		}, {
			"start_line": 83,
			"end_line": 90,
			"code_lines": "objectKeyTable[lookup] = testValue;LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 100,
			"end_line": 109,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaK"
		}, {
			"start_line": 113,
			"end_line": 120,
			"code_lines": "objectKeyTable[lookup] = testValue;LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 122,
			"end_line": 142,
			"code_lines": "String testValue;LiNeBrEaKint    index      = hashIndex.getHashIndex(key.hashCode());LiNeBrEaKint    lookup     = hashIndex.hashTable[index];LiNeBrEaKint    lastLookup = -1;LiNeBrEaKfor (; lookup >= 0;LiNeBrEaKlastLookup = lookup,LiNeBrEaKlookup = hashIndex.getNextLookup(lookup)) {LiNeBrEaKtestValue = (String) objectKeyTable[lookup];LiNeBrEaKif (key.equals(testValue)) {LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaKreturn getOrAddString(key);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 143,
			"end_line": 151,
			"code_lines": "lookup                 = hashIndex.linkNode(index, lastLookup);LiNeBrEaKobjectKeyTable[lookup] = testValue;LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 162,
			"end_line": 171,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaK"
		}, {
			"start_line": 175,
			"end_line": 182,
			"code_lines": "objectKeyTable[lookup] = testValue;LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 192,
			"end_line": 201,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaK"
		}, {
			"start_line": 205,
			"end_line": 212,
			"code_lines": "objectKeyTable[lookup] = testValue;LiNeBrEaKif (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 214,
			"end_line": 220,
			"code_lines": "int    index      = hashIndex.getHashIndex(key.hashCode());LiNeBrEaKint    lookup     = hashIndex.hashTable[index];LiNeBrEaKint    lastLookup = -1;LiNeBrEaKfor (; lookup >= 0;LiNeBrEaKlastLookup = lookup,LiNeBrEaKlookup = hashIndex.getNextLookup(lookup)) {LiNeBrEaK"
		}, {
			"start_line": 222,
			"end_line": 231,
			"code_lines": "if (accessCount > ACCESS_MAX) {LiNeBrEaKresetAccessCount();LiNeBrEaK}LiNeBrEaKaccessTable[lookup] = accessCount++;LiNeBrEaKreturn testValue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (hashIndex.elementCount >= threshold) {LiNeBrEaKreset();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/HashIndex.java|",
		"loc": "118"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/ValuePool.java|",
		"loc": "125"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/map/BitMap.java|",
		"loc": "453",
		"clones": [{
			"start_line": 70,
			"end_line": 77,
			"code_lines": "int word = map[windex];LiNeBrEaKif (set) {LiNeBrEaKmap[windex] = (word | mask);LiNeBrEaK} else {LiNeBrEaKmask        = ~mask;LiNeBrEaKmap[windex] = (word & mask);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 116,
			"end_line": 122,
			"code_lines": "}LiNeBrEaKint windex = pos >> 5;LiNeBrEaKint mask   = 0x80000000 >>> (pos & 0x1F);LiNeBrEaKint word   = map[windex];LiNeBrEaKint result = (word & mask) == 0 ? 0LiNeBrEaK: 1;LiNeBrEaK"
		}, {
			"start_line": 330,
			"end_line": 336,
			"code_lines": "if (shift == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKshift = 8 - shift;LiNeBrEaKif (count > shift) {LiNeBrEaKmask           = ((source & 0xff) << 8) >>> shift;LiNeBrEaK"
		}, {
			"start_line": 341,
			"end_line": 355,
			"code_lines": "int shift     = pos & 0x07;LiNeBrEaKint mask      = (source & 0xff) >>> shift;LiNeBrEaKint innermask = 0xff >> shift;LiNeBrEaKint index     = pos / 8;LiNeBrEaKif (count < 8) {LiNeBrEaKinnermask = innermask >>> (8 - count);LiNeBrEaKinnermask = innermask << (8 - count);LiNeBrEaK}LiNeBrEaKmask      &= innermask;LiNeBrEaKinnermask = ~innermask;LiNeBrEaKif (index >= map.length) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKbyte b = map[index];LiNeBrEaK"
		}, {
			"start_line": 357,
			"end_line": 366,
			"code_lines": "if (shift == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKshift = 8 - shift;LiNeBrEaKif (count > shift) {LiNeBrEaKmask           = ((source & 0xff) << 8) >>> shift;LiNeBrEaKinnermask      = 0xff00 >>> shift;LiNeBrEaKinnermask      = ~innermask;LiNeBrEaKb              = map[index + 1];LiNeBrEaK"
		}, {
			"start_line": 399,
			"end_line": 411,
			"code_lines": "int    length      = a.length > b.length ? a.lengthLiNeBrEaK: b.length;LiNeBrEaKint    shortLength = a.length > b.length ? b.lengthLiNeBrEaK: a.length;LiNeBrEaKbyte[] map         = new byte[length];LiNeBrEaKif (length != shortLength) {LiNeBrEaKbyte[] source = a.length > b.length ? aLiNeBrEaK: b;LiNeBrEaKSystem.arraycopy(source, shortLength, map, shortLength,LiNeBrEaKlength - shortLength);LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < shortLength; i++) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ColumnSchema.java|",
		"loc": "251"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Like.java|",
		"loc": "280"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TransactionManagerMVCC.java|",
		"loc": "608",
		"clones": [{
			"start_line": 73,
			"end_line": 85,
			"code_lines": "if (session.abortTransaction) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKint limit = session.rowActionList.size();LiNeBrEaKfor (int i = 0; i < limit; i++) {LiNeBrEaKRowAction action = (RowAction) session.rowActionList.get(i);LiNeBrEaKif (!action.canCommit(session, session.tempSet)) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 97,
			"code_lines": "}LiNeBrEaKfor (int i = 0; i < session.tempSet.size(); i++) {LiNeBrEaKSession current =LiNeBrEaK((RowActionBase) session.tempSet.get(i)).session;LiNeBrEaKcurrent.abortTransaction = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 279,
			"end_line": 285,
			"code_lines": "actionSession.waitingSessions.add(session);LiNeBrEaKsession.waitedSessions.add(actionSession);LiNeBrEaKsession.latch.countUp();LiNeBrEaK}LiNeBrEaKredoCount++;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 442,
			"end_line": 448,
			"code_lines": "session.transactionTimestamp = session.actionTimestamp;LiNeBrEaKsession.isTransaction        = true;LiNeBrEaKliveTransactionTimestamps.addLast(LiNeBrEaKsession.transactionTimestamp);LiNeBrEaKtransactionCount++;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Expression.java|",
		"loc": "1454",
		"clones": [{
			"start_line": 182,
			"end_line": 188,
			"code_lines": "sb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(nodes[i].getSQL());LiNeBrEaK}LiNeBrEaKsb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK"
		}, {
			"start_line": 189,
			"end_line": 195,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (i > 0) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(nodes[i].getSQL());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 200,
			"end_line": 206,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (i > 0) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(nodes[i].getSQL());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 256,
			"code_lines": "sb.append('VALUELIST ');LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKsb.append(nodes[i].describe(session, blanks + 1));LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 433,
			"end_line": 445,
			"code_lines": "case OpTypes.COUNT :LiNeBrEaKcase OpTypes.SUM :LiNeBrEaKcase OpTypes.MIN :LiNeBrEaKcase OpTypes.MAX :LiNeBrEaKcase OpTypes.AVG :LiNeBrEaKcase OpTypes.EVERY :LiNeBrEaKcase OpTypes.SOME :LiNeBrEaKcase OpTypes.STDDEV_POP :LiNeBrEaKcase OpTypes.STDDEV_SAMP :LiNeBrEaKcase OpTypes.VAR_POP :LiNeBrEaKcase OpTypes.VAR_SAMP :LiNeBrEaKreturn false;LiNeBrEaK"
		}, {
			"start_line": 445,
			"end_line": 452,
			"code_lines": "}LiNeBrEaKif (nodes.length == 0) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKboolean result = true;LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKresult &= (nodes[i] == nullLiNeBrEaK"
		}, {
			"start_line": 684,
			"end_line": 690,
			"code_lines": "}LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKunresolvedSet = nodes[i].resolveColumnReferences(session,LiNeBrEaK"
		}, {
			"start_line": 1290,
			"end_line": 1296,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SessionContext.java|",
		"loc": "216"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementQuery.java|",
		"loc": "58"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SortAndSlice.java|",
		"loc": "348"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionOp.java|",
		"loc": "645",
		"clones": [{
			"start_line": 164,
			"end_line": 182,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'ExpressionOp');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKsb.append('VALUE = ').append(LiNeBrEaKdataType.convertToSQLString(valueData));LiNeBrEaKsb.append(', TYPE = ').append(dataType.getNameString());LiNeBrEaKreturn sb.toString();LiNeBrEaK"
		}, {
			"start_line": 217,
			"end_line": 225,
			"code_lines": "}LiNeBrEaKpublic HsqlList resolveColumnReferences(Session session,LiNeBrEaKRangeGroup rangeGroup, int rangeCount, RangeGroup[] rangeGroups,LiNeBrEaKHsqlList unresolvedSet, boolean acceptsSequences) {LiNeBrEaKif (opType == OpTypes.VALUE) {LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaK"
		}, {
			"start_line": 228,
			"end_line": 237,
			"code_lines": "}LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKunresolvedSet = nodes[i].resolveColumnReferences(session,LiNeBrEaKrangeGroup, rangeCount, rangeGroups, unresolvedSet,LiNeBrEaKacceptsSequences);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 413,
			"end_line": 419,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Object getValue(Session session) {LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKreturn valueData;LiNeBrEaK"
		}, {
			"start_line": 460,
			"end_line": 466,
			"code_lines": "if (wasEscape) {LiNeBrEaKescapeCount++;LiNeBrEaKnewArray[j++] = array[i];LiNeBrEaKwasEscape     = false;LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 499,
			"end_line": 531,
			"code_lines": "boolean wasEscape   = false;LiNeBrEaKint     escapeCount = 0;LiNeBrEaKint     i           = 0;LiNeBrEaKint     j           = 0;LiNeBrEaKfor (; i < array.length; i++) {LiNeBrEaKif (array[i] == escapeChar) {LiNeBrEaKif (wasEscape) {LiNeBrEaKescapeCount++;LiNeBrEaKnewArray[j++] = array[i];LiNeBrEaKwasEscape     = false;LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKwasEscape = true;LiNeBrEaKif (i == array.length - 1) {LiNeBrEaKthrow Error.error(ErrorCode.X_22025);LiNeBrEaK}LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (array[i] == '_' || array[i] == '%') {LiNeBrEaKif (wasEscape) {LiNeBrEaKescapeCount++;LiNeBrEaKnewArray[j++] = array[i];LiNeBrEaKwasEscape     = false;LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (wasEscape) {LiNeBrEaKthrow Error.error(ErrorCode.X_22025);LiNeBrEaK}LiNeBrEaKnewArray[j++] = array[i];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 534,
			"end_line": 540,
			"code_lines": "case OpTypes.SIMPLE_COLUMN : {LiNeBrEaKObject value =LiNeBrEaKsession.sessionContext.rangeIterators[rangePosition]LiNeBrEaK.getCurrent(columnIndex);LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptWriterText.java|",
		"loc": "208"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptWriterEncode.java|",
		"loc": "92",
		"clones": [{
			"start_line": 25,
			"end_line": 32,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(e, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_Message_Pair, new Object[] {LiNeBrEaKe.toString(), outFileLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 35,
			"end_line": 46,
			"code_lines": "try {LiNeBrEaKcryptOut = crypto.getOutputStream(fileStreamOut);LiNeBrEaKfileStreamOut = new GZIPOutputStream(cryptOut);LiNeBrEaKisCrypt       = true;LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow Error.error(e, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_Message_Pair, new Object[] {LiNeBrEaKe.toString(), outFileLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 67,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(e, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_Message_Pair, new Object[] {LiNeBrEaKe.toString(), outFileLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptWriterBase.java|",
		"loc": "261",
		"clones": [{
			"start_line": 144,
			"end_line": 160,
			"code_lines": "}LiNeBrEaKprotected void openFile() {LiNeBrEaKtry {LiNeBrEaKFileAccess   fa  = isDump ? FileUtil.getFileUtil()LiNeBrEaK: database.logger.getFileAccess();LiNeBrEaKOutputStream fos = fa.openOutputStreamElement(outFile);LiNeBrEaKoutDescriptor = fa.getFileSync(fos);LiNeBrEaKfileStreamOut = fos;LiNeBrEaKfileStreamOut = new BufferedOutputStream(fos, 1 << 14);LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow Error.error(e, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_Message_Pair, new Object[] {LiNeBrEaKe.toString(), outFileLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptReaderText.java|",
		"loc": "151"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptReaderDecode.java|",
		"loc": "81"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/scriptio/ScriptReaderBase.java|",
		"loc": "67"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Routine.java|",
		"loc": "1025",
		"clones": [{
			"start_line": 99,
			"end_line": 106,
			"code_lines": "}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn references;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 918,
			"end_line": 925,
			"code_lines": "if (param.isArray()) {LiNeBrEaKif (!byte[].class.equals(param)) {LiNeBrEaKparam = param.getComponentType();LiNeBrEaKif (param.isPrimitive()) {LiNeBrEaKmethod = null;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 943,
			"end_line": 950,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKType methodParamType = Types.getParameterSQLType(param);LiNeBrEaKif (methodParamType == null) {LiNeBrEaKmethod = null;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCArrayBasic.java|",
		"loc": "114"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCClobFile.java|",
		"loc": "582",
		"clones": [{
			"start_line": 114,
			"end_line": 125,
			"code_lines": "} catch (SQLException ex) {LiNeBrEaKthrow ex;LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK} finally {LiNeBrEaKif (reader != null) {LiNeBrEaKtry {LiNeBrEaKreader.close();LiNeBrEaK} catch (Exception ex) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 198,
			"end_line": 212,
			"code_lines": "public void close() throws IOException {LiNeBrEaKtry {LiNeBrEaKsuper.close();LiNeBrEaK} finally {LiNeBrEaKm_streams.remove(this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaKm_streams.add(stream);LiNeBrEaKreturn stream;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 221,
			"end_line": 229,
			"code_lines": "public void close() throws IOException {LiNeBrEaKtry {LiNeBrEaKsuper.close();LiNeBrEaK} finally {LiNeBrEaKm_streams.remove(this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 258,
			"code_lines": "} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK} finally {LiNeBrEaKif (adapter != null) {LiNeBrEaKtry {LiNeBrEaKadapter.close();LiNeBrEaK} catch (Exception ex) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 305,
			"end_line": 316,
			"code_lines": "public void close() throws IOException {LiNeBrEaKtry {LiNeBrEaKsuper.close();LiNeBrEaK} finally {LiNeBrEaKm_streams.remove(this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 464,
			"end_line": 471,
			"code_lines": "} finally {LiNeBrEaKif (reader != null) {LiNeBrEaKtry {LiNeBrEaKreader.close();LiNeBrEaK} catch (Exception ex) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 500,
			"end_line": 507,
			"code_lines": "throws FileNotFoundException, IOException {LiNeBrEaKif (file == null) {LiNeBrEaKthrow new NullPointerException('file');LiNeBrEaK}LiNeBrEaKif (pos < 0) {LiNeBrEaKthrow new IllegalArgumentException('pos: ' + pos);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCUtil.java|",
		"loc": "125"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCStatement.java|",
		"loc": "330"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCConnectionEventListener.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCBlob.java|",
		"loc": "203",
		"clones": [{
			"start_line": 51,
			"end_line": 58,
			"code_lines": "final byte[] data = getData();LiNeBrEaKfinal int    dlen = data.length;LiNeBrEaKif (start < MIN_POS) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('start: ' + start);LiNeBrEaK} else if (start > dlen || pattern == null) {LiNeBrEaKreturn -1L;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 157,
			"end_line": 163,
			"code_lines": "throw JDBCUtil.outOfRangeArgument('pos: ' + pos);LiNeBrEaK}LiNeBrEaKpos--;LiNeBrEaKif (length < 0 || length > dlen - pos) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('length: ' + length);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCDatabaseMetaData.java|",
		"loc": "1062",
		"clones": [{
			"start_line": 481,
			"end_line": 488,
			"code_lines": "return executeSelect('SYSTEM_COLUMNS', '0=1');LiNeBrEaK}LiNeBrEaKcatalog       = translateCatalog(catalog);LiNeBrEaKschemaPattern = translateSchema(schemaPattern);LiNeBrEaKStringBuffer select = toQueryPrefix('SYSTEM_COLUMNS').append(LiNeBrEaKand('TABLE_CAT', '=', catalog)).append(LiNeBrEaKand('TABLE_SCHEM', 'LIKE', schemaPattern)).append(LiNeBrEaK"
		}, {
			"start_line": 569,
			"end_line": 576,
			"code_lines": "String table) throws SQLException {LiNeBrEaKif (table == null) {LiNeBrEaKthrow JDBCUtil.nullArgument('table');LiNeBrEaK}LiNeBrEaKcatalog = translateCatalog(catalog);LiNeBrEaKschema  = translateSchema(schema);LiNeBrEaKStringBuffer select =LiNeBrEaK"
		}, {
			"start_line": 583,
			"end_line": 589,
			"code_lines": "String table) throws SQLException {LiNeBrEaKif (table == null) {LiNeBrEaKthrow JDBCUtil.nullArgument('table');LiNeBrEaK}LiNeBrEaKcatalog = translateCatalog(catalog);LiNeBrEaKschema  = translateSchema(schema);LiNeBrEaK"
		}, {
			"start_line": 597,
			"end_line": 609,
			"code_lines": "String table) throws SQLException {LiNeBrEaKif (table == null) {LiNeBrEaKthrow JDBCUtil.nullArgument('table');LiNeBrEaK}LiNeBrEaKcatalog = translateCatalog(catalog);LiNeBrEaKschema  = translateSchema(schema);LiNeBrEaKStringBuffer select =LiNeBrEaKtoQueryPrefix('SYSTEM_CROSSREFERENCE').append(and('PKTABLE_CAT',LiNeBrEaK'=', catalog)).append(and('PKTABLE_SCHEM', '=',LiNeBrEaKschema)).append(and('PKTABLE_NAME', '=', table));LiNeBrEaKreturn execute(select.toString());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 700,
			"end_line": 707,
			"code_lines": "}LiNeBrEaKcatalog       = translateCatalog(catalog);LiNeBrEaKschemaPattern = translateSchema(schemaPattern);LiNeBrEaKStringBuffer select =LiNeBrEaKtoQueryPrefix('SYSTEM_UDTS').append(and('TYPE_CAT', '=',LiNeBrEaKcatalog)).append(and('TYPE_SCHEM', 'LIKE',LiNeBrEaKschemaPattern)).append(and('TYPE_NAME',LiNeBrEaK"
		}, {
			"start_line": 708,
			"end_line": 715,
			"code_lines": "if (types == null) {LiNeBrEaK} else {LiNeBrEaKselect.append(' AND DATA_TYPE IN (').append(LiNeBrEaKStringUtil.getList(types, ',', '')).append(')');LiNeBrEaK}LiNeBrEaKreturn execute(select.toString());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 762,
			"end_line": 768,
			"code_lines": "StringBuffer select = toQueryPrefixNoSelect(LiNeBrEaK'SELECT TABLE_NAME AS TYPE_CAT, TABLE_NAME AS TYPE_SCHME, TABLE_NAME AS TYPE_NAME, 'LiNeBrEaK+ 'TABLE_NAME AS ATTR_NAME, CAST(0 AS INTEGER) AS DATA_TYPE, TABLE_NAME AS ATTR_TYPE_NAME, 'LiNeBrEaK+ 'CAST(0 AS INTEGER) AS ATTR_SIZE, CAST(0 AS INTEGER) AS DECIMAL_DIGITS, 'LiNeBrEaK+ 'CAST(0 AS INTEGER) AS NUM_PREC_RADIX, CAST(0 AS INTEGER) AS NULLABLE, 'LiNeBrEaK+ ''' AS REMARK, '' AS ATTR_DEF, CAST(0 AS INTEGER) AS SQL_DATA_TYPE, 'LiNeBrEaK"
		}, {
			"start_line": 765,
			"end_line": 772,
			"code_lines": "+ 'CAST(0 AS INTEGER) AS ATTR_SIZE, CAST(0 AS INTEGER) AS DECIMAL_DIGITS, 'LiNeBrEaK+ 'CAST(0 AS INTEGER) AS NUM_PREC_RADIX, CAST(0 AS INTEGER) AS NULLABLE, 'LiNeBrEaK+ ''' AS REMARK, '' AS ATTR_DEF, CAST(0 AS INTEGER) AS SQL_DATA_TYPE, 'LiNeBrEaK+ 'CAST(0 AS INTEGER) AS SQL_DATETIME_SUB, CAST(0 AS INTEGER) AS CHAR_OCTECT_LENGTH, 'LiNeBrEaK+ 'CAST(0 AS INTEGER) AS ORDINAL_POSITION, '' AS NULLABLE, 'LiNeBrEaK+ ''' AS SCOPE_CATALOG, '' AS SCOPE_SCHEMA, '' AS SCOPE_TABLE, 'LiNeBrEaK+ 'CAST(0 AS SMALLINT) AS SCOPE_DATA_TYPE 'LiNeBrEaK"
		}, {
			"start_line": 860,
			"end_line": 866,
			"code_lines": "StringBuffer sb = new StringBuffer(256);LiNeBrEaKsb.append('select pc.procedure_cat as FUNCTION_CAT,').append(LiNeBrEaK'pc.procedure_schem as FUNCTION_SCHEM,').append(LiNeBrEaK'pc.procedure_name as FUNCTION_NAME,').append(LiNeBrEaK'pc.column_name as COLUMN_NAME,').append(LiNeBrEaK'case pc.column_type').append(' when 3 then 5').append(LiNeBrEaK"
		}, {
			"start_line": 878,
			"end_line": 884,
			"code_lines": "'from information_schema.system_procedures ').append(LiNeBrEaK'where procedure_type = 2) p ').append(LiNeBrEaK'on pc.procedure_schem = p.procedure_schem ').append(LiNeBrEaK'and pc.procedure_name = p.procedure_name ').append(LiNeBrEaK'and pc.specific_name = p.specific_name ').append(LiNeBrEaK'and ((pc.column_type = 3 and pc.column_name = '@p0') ').append(LiNeBrEaK"
		}, {
			"start_line": 900,
			"end_line": 909,
			"code_lines": "if (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1024,
			"end_line": 1030,
			"code_lines": "ResultSet rs = execute('CALL CURRENT_SCHEMA');LiNeBrEaKrs.next();LiNeBrEaKString result = rs.getString(1);LiNeBrEaKrs.close();LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCCallableStatement.java|",
		"loc": "786",
		"clones": [{
			"start_line": 237,
			"end_line": 243,
			"code_lines": "checkGetParameterIndex(parameterIndex);LiNeBrEaKType   sourceType = parameterMetaData.columnTypes[parameterIndex - 1];LiNeBrEaKObject o          = getColumnInType(parameterIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 597,
			"end_line": 604,
			"code_lines": "checkGetParameterIndex(parameterIndex);LiNeBrEaKType   sourceType = parameterMetaData.columnTypes[parameterIndex - 1];LiNeBrEaKObject o          = getColumnInType(parameterIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (o instanceof ClobDataID) {LiNeBrEaK"
		}, {
			"start_line": 634,
			"end_line": 640,
			"code_lines": "java.io.InputStream x, long length) throws SQLException {LiNeBrEaKif (length > Integer.MAX_VALUE) {LiNeBrEaKString msg = 'Maximum Binary input octet length exceeded: 'LiNeBrEaK+ length;LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.JDBC_INPUTSTREAM_ERROR, msg);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCStatementBase.java|",
		"loc": "150"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCArray.java|",
		"loc": "149",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.jdbc;LiNeBrEaKimport java.sql.Array;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport org.hsqldb.ColumnBase;LiNeBrEaK"
		}, {
			"start_line": 13,
			"end_line": 21,
			"code_lines": "public String getBaseTypeName() throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKreturn elementType.getNameString();LiNeBrEaK}LiNeBrEaKpublic int getBaseType() throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKreturn elementType.getJDBCTypeCode();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 28,
			"end_line": 40,
			"code_lines": "}LiNeBrEaKpublic Object getArray(java.util.Map<String,LiNeBrEaKClass<?>> map) throws SQLException {LiNeBrEaKreturn getArray();LiNeBrEaK}LiNeBrEaKpublic Object getArray(long index, int count) throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKif (!JDBCClobClient.isInLimits(data.length, index - 1, count)) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument();LiNeBrEaK}LiNeBrEaKObject[] slice = new Object[count];LiNeBrEaKfor (int i = 0; i < count; i++) {LiNeBrEaK"
		}, {
			"start_line": 42,
			"end_line": 53,
			"code_lines": "}LiNeBrEaKreturn slice;LiNeBrEaK}LiNeBrEaKpublic Object getArray(long index, int count,LiNeBrEaKjava.util.Map<String,LiNeBrEaKClass<?>> map) throws SQLException {LiNeBrEaKreturn getArray(index, count);LiNeBrEaK}LiNeBrEaKpublic ResultSet getResultSet() throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKResult result = this.newColumnResult(0, data.length);LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 62,
			"code_lines": "}LiNeBrEaKpublic ResultSet getResultSet(java.util.Map<String,LiNeBrEaKClass<?>> map) throws SQLException {LiNeBrEaKreturn getResultSet();LiNeBrEaK}LiNeBrEaKpublic ResultSet getResultSet(long index, int count) throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKResult result = this.newColumnResult(index - 1, count);LiNeBrEaK"
		}, {
			"start_line": 63,
			"end_line": 76,
			"code_lines": "}LiNeBrEaKpublic ResultSet getResultSet(long index, int count,LiNeBrEaKjava.util.Map<String,LiNeBrEaKClass<?>> map) throws SQLException {LiNeBrEaKreturn getResultSet(index, count);LiNeBrEaK}LiNeBrEaKpublic String toString() {LiNeBrEaKif (arrayType == null) {LiNeBrEaKarrayType = Type.getDefaultArrayType(elementType.typeCode);LiNeBrEaK}LiNeBrEaKreturn arrayType.convertToString(data);LiNeBrEaK}LiNeBrEaKpublic void free() throws SQLException {LiNeBrEaK"
		}, {
			"start_line": 108,
			"end_line": 126,
			"code_lines": "return data;LiNeBrEaK}LiNeBrEaKprivate Result newColumnResult(long position,LiNeBrEaKint count) throws SQLException {LiNeBrEaKif (!JDBCClobClient.isInLimits(data.length, position, count)) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument();LiNeBrEaK}LiNeBrEaKType[] types = new Type[2];LiNeBrEaKtypes[0] = Type.SQL_INTEGER;LiNeBrEaKtypes[1] = elementType;LiNeBrEaKResultMetaData meta = ResultMetaData.newSimpleResultMetaData(types);LiNeBrEaKmeta.columnLabels = new String[] {LiNeBrEaK'C1', 'C2'LiNeBrEaK};LiNeBrEaKmeta.colIndexes   = new int[] {LiNeBrEaK-1, -1LiNeBrEaK};LiNeBrEaKmeta.columns      = new ColumnBase[2];LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 144,
			"code_lines": "RowSetNavigatorClient navigator = new RowSetNavigatorClient();LiNeBrEaKfor (int i = (int) position; i < position + count; i++) {LiNeBrEaKObject[] rowData = new Object[2];LiNeBrEaKrowData[0] = Integer.valueOf(i + 1);LiNeBrEaKrowData[1] = data[i];LiNeBrEaKnavigator.add(rowData);LiNeBrEaK}LiNeBrEaKResult result = Result.newDataResult(meta);LiNeBrEaKresult.setNavigator(navigator);LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKprivate void checkClosed() throws SQLException {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCCommonDataSource.java|",
		"loc": "92"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCDataSourceFactory.java|",
		"loc": "112"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCBlobFile.java|",
		"loc": "377",
		"clones": [{
			"start_line": 58,
			"end_line": 65,
			"code_lines": "final long start) throws SQLException {LiNeBrEaKif (start < 1) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('start: ' + start);LiNeBrEaK} else if (pattern == null || pattern.length == 0LiNeBrEaK|| start > length()) {LiNeBrEaKreturn -1L;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 71,
			"end_line": 83,
			"code_lines": ": start + matchOffset;LiNeBrEaK} catch (SQLException ex) {LiNeBrEaKthrow ex;LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK} finally {LiNeBrEaKif (is != null) {LiNeBrEaKtry {LiNeBrEaKis.close();LiNeBrEaK} catch (Exception ex) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 136,
			"end_line": 147,
			"code_lines": "public void close() throws IOException {LiNeBrEaKtry {LiNeBrEaKsuper.close();LiNeBrEaK} finally {LiNeBrEaKm_streams.remove(this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 150,
			"end_line": 156,
			"code_lines": "}LiNeBrEaKpublic void truncate(long len) throws SQLException {LiNeBrEaKif (len < 0) {LiNeBrEaKthrow JDBCUtil.invalidArgument('len: ' + len);LiNeBrEaK}LiNeBrEaKcheckClosed();LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 198,
			"code_lines": "if (randomAccessFile != null) {LiNeBrEaKtry {LiNeBrEaKrandomAccessFile.close();LiNeBrEaK} catch (Exception ex) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic synchronized void free() throws SQLException {LiNeBrEaKif (m_closed) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKm_closed = true;LiNeBrEaKfinal List streams = new ArrayList();LiNeBrEaKstreams.addAll(m_streams);LiNeBrEaKm_streams = null;LiNeBrEaKfor (Iterator itr = streams.iterator(); itr.hasNext(); ) {LiNeBrEaKfinal Object stream = itr.next();LiNeBrEaKif (stream instanceof InputStream) {LiNeBrEaKtry {LiNeBrEaK((InputStream) stream).close();LiNeBrEaK} catch (Exception ex) {LiNeBrEaK}LiNeBrEaK} else if (stream instanceof OutputStream) {LiNeBrEaKtry {LiNeBrEaK((OutputStream) stream).close();LiNeBrEaK} catch (Exception ex) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (m_deleteOnFree) {LiNeBrEaKtry {LiNeBrEaKm_file.delete();LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 207,
			"end_line": 218,
			"code_lines": "public void close() throws IOException {LiNeBrEaKtry {LiNeBrEaKsuper.close();LiNeBrEaK} finally {LiNeBrEaKm_streams.remove(this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 223,
			"end_line": 234,
			"code_lines": "}LiNeBrEaKpublic boolean isDeleteOnFree() {LiNeBrEaKreturn m_deleteOnFree;LiNeBrEaK}LiNeBrEaKpublic void setDeleteOnFree(boolean deleteOnFree) {LiNeBrEaKm_deleteOnFree = deleteOnFree;LiNeBrEaK}LiNeBrEaKprotected void finalize() throws Throwable {LiNeBrEaKtry {LiNeBrEaKsuper.finalize();LiNeBrEaK} finally {LiNeBrEaK"
		}, {
			"start_line": 267,
			"end_line": 291,
			"code_lines": "}LiNeBrEaKprotected final void checkIsFile(boolean checkExists) throws SQLException {LiNeBrEaKboolean exists = false;LiNeBrEaKboolean isFile = false;LiNeBrEaKtry {LiNeBrEaKexists = m_file.exists();LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaKif (exists) {LiNeBrEaKtry {LiNeBrEaKisFile = m_file.isFile();LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (exists) {LiNeBrEaKif (!isFile) {LiNeBrEaKthrow JDBCUtil.invalidArgument('Is not a file: ' + m_file);LiNeBrEaK}LiNeBrEaK} else if (checkExists) {LiNeBrEaKthrow JDBCUtil.invalidArgument('Does not exist: ' + m_file);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 297,
			"end_line": 307,
			"code_lines": "try {LiNeBrEaKif (!m_file.exists()) {LiNeBrEaKFileUtil.getFileUtil().makeParentDirectories(m_file);LiNeBrEaKm_file.createNewFile();LiNeBrEaK}LiNeBrEaK} catch (Exception ex) {LiNeBrEaKthrow JDBCUtil.sqlException(ex);LiNeBrEaK}LiNeBrEaKcheckIsFile(true);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 326,
			"end_line": 333,
			"code_lines": "}LiNeBrEaKpublic void flush() throws IOException {LiNeBrEaKm_randomAccessFile.getFD().sync();LiNeBrEaK}LiNeBrEaKpublic void close() throws IOException {LiNeBrEaKm_randomAccessFile.close();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 337,
			"end_line": 348,
			"code_lines": "final long length)LiNeBrEaKthrows FileNotFoundException, IOException {LiNeBrEaKif (file == null) {LiNeBrEaKthrow new NullPointerException('file');LiNeBrEaK}LiNeBrEaKif (pos < 0) {LiNeBrEaKthrow new IllegalArgumentException('pos: ' + pos);LiNeBrEaK}LiNeBrEaKif (length < 0) {LiNeBrEaKthrow new IllegalArgumentException('length: ' + length);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCResultSet.java|",
		"loc": "1617",
		"clones": [{
			"start_line": 18,
			"end_line": 25,
			"code_lines": "import java.sql.Time;LiNeBrEaKimport java.sql.Timestamp;LiNeBrEaKimport java.util.Calendar;LiNeBrEaKimport java.util.Map;LiNeBrEaKimport java.sql.NClob;LiNeBrEaKimport java.sql.RowId;LiNeBrEaKimport java.sql.SQLXML;LiNeBrEaK"
		}, {
			"start_line": 142,
			"end_line": 150,
			"code_lines": "sourceType);LiNeBrEaKif (x == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKlong length = x.length(session);LiNeBrEaKif (length > Integer.MAX_VALUE) {LiNeBrEaKJDBCUtil.throwError(Error.error(ErrorCode.X_42561));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 322,
			"end_line": 332,
			"code_lines": "if (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKreturn ((JavaObjectData) o).getObject();LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKthrow JDBCUtil.sqlException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaK"
		}, {
			"start_line": 390,
			"end_line": 396,
			"code_lines": "columnIndex = i;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (columnIndex < 0) {LiNeBrEaK"
		}, {
			"start_line": 407,
			"end_line": 414,
			"code_lines": "int columnIndex) throws SQLException {LiNeBrEaKcheckColumn(columnIndex);LiNeBrEaKType   sourceType = resultMetaData.columnTypes[columnIndex - 1];LiNeBrEaKObject o          = getColumnInType(columnIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 411,
			"end_line": 423,
			"code_lines": "if (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (o instanceof ClobDataID) {LiNeBrEaKreturn ((ClobDataID) o).getCharacterStream(session);LiNeBrEaK} else if (o instanceof Clob) {LiNeBrEaKreturn ((Clob) o).getCharacterStream();LiNeBrEaK} else if (o instanceof String) {LiNeBrEaKreturn new StringReader((String) o);LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 430,
			"end_line": 445,
			"code_lines": "switch (targetType.typeCode) {LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaKbreak;LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKtargetType = Type.SQL_DECIMAL;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKdefault :LiNeBrEaKtargetType = Type.SQL_DECIMAL_DEFAULT;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 785,
			"end_line": 792,
			"code_lines": "checkColumn(columnIndex);LiNeBrEaKType   sourceType = resultMetaData.columnTypes[columnIndex - 1];LiNeBrEaKObject o          = getColumnInType(columnIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (o instanceof BlobDataID) {LiNeBrEaK"
		}, {
			"start_line": 810,
			"end_line": 817,
			"code_lines": "checkColumn(columnIndex);LiNeBrEaKType   sourceType = resultMetaData.columnTypes[columnIndex - 1];LiNeBrEaKObject o          = getColumnInType(columnIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (o instanceof ClobDataID) {LiNeBrEaK"
		}, {
			"start_line": 863,
			"end_line": 873,
			"code_lines": "Type.SQL_DATE);LiNeBrEaKif (t == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKlong millis = t.getSeconds() * 1000;LiNeBrEaKif (cal != null) {LiNeBrEaKmillis = HsqlDateTime.convertMillisToCalendar(cal, millis);LiNeBrEaK}LiNeBrEaKreturn new Date(millis);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 883,
			"end_line": 891,
			"code_lines": ".isDateTimeTypeWithZone()) {LiNeBrEaKCalendar calendar = cal == null ? session.getCalendar()LiNeBrEaK: cal;LiNeBrEaKmillis = HsqlDateTime.convertMillisToCalendar(calendar, millis);LiNeBrEaKmillis = HsqlDateTime.getNormalisedTime(millis);LiNeBrEaK}LiNeBrEaKreturn new Time(millis);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 903,
			"end_line": 915,
			"code_lines": ".isDateTimeTypeWithZone()) {LiNeBrEaKCalendar calendar = cal == null ? session.getCalendar()LiNeBrEaK: cal;LiNeBrEaKif (cal != null) {LiNeBrEaKmillis = HsqlDateTime.convertMillisToCalendar(calendar,LiNeBrEaKmillis);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKTimestamp ts = new Timestamp(millis);LiNeBrEaKts.setNanos(t.getNanos());LiNeBrEaKreturn ts;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1089,
			"end_line": 1095,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKthrow JDBCUtil.notSupported();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1276,
			"end_line": 1288,
			"code_lines": "}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1545,
			"end_line": 1557,
			"code_lines": "}LiNeBrEaKprotected Object getColumnInType(int columnIndex,LiNeBrEaKType targetType) throws SQLException {LiNeBrEaKObject[] rowData = getCurrent();LiNeBrEaKType     sourceType;LiNeBrEaKObject   value;LiNeBrEaKcheckColumn(columnIndex);LiNeBrEaKsourceType = resultMetaData.columnTypes[--columnIndex];LiNeBrEaKvalue      = rowData[columnIndex];LiNeBrEaKif (trackNull(value)) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1577,
			"end_line": 1586,
			"code_lines": "throw JDBCUtil.notSupported();LiNeBrEaK}LiNeBrEaKpublic Blob getBlob(int columnIndex) throws SQLException {LiNeBrEaKcheckColumn(columnIndex);LiNeBrEaKType   sourceType = resultMetaData.columnTypes[columnIndex - 1];LiNeBrEaKObject o          = getColumnInType(columnIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1590,
			"end_line": 1600,
			"code_lines": "}LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKpublic Clob getClob(int columnIndex) throws SQLException {LiNeBrEaKcheckColumn(columnIndex);LiNeBrEaKType   sourceType = resultMetaData.columnTypes[columnIndex - 1];LiNeBrEaKObject o          = getColumnInType(columnIndex, sourceType);LiNeBrEaKif (o == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1601,
			"end_line": 1607,
			"code_lines": "return (Clob) o;LiNeBrEaK} else if (o instanceof String) {LiNeBrEaKreturn new JDBCClob((String) o);LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCPool.java|",
		"loc": "198",
		"clones": [{
			"start_line": 64,
			"end_line": 72,
			"code_lines": "}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCClob.java|",
		"loc": "222",
		"clones": [{
			"start_line": 138,
			"end_line": 146,
			"code_lines": "} catch (SQLException se) {LiNeBrEaKthrow JavaSystem.toIOException(se);LiNeBrEaK} finally {LiNeBrEaKsuper.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK};LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 147,
			"end_line": 155,
			"code_lines": "final long pos) throws SQLException {LiNeBrEaKif (!m_createdByConnection) {LiNeBrEaKthrow JDBCUtil.notSupported();LiNeBrEaK}LiNeBrEaKcheckClosed();LiNeBrEaKif (pos < MIN_POS || pos > MAX_POS) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('pos: ' + pos);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 195,
			"end_line": 201,
			"code_lines": "if (data == null) {LiNeBrEaKthrow JDBCUtil.nullArgument();LiNeBrEaK}LiNeBrEaKm_data                = data;LiNeBrEaKm_createdByConnection = false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 203,
			"end_line": 210,
			"code_lines": "m_createdByConnection = true;LiNeBrEaK}LiNeBrEaKprotected synchronized void checkClosed() throws SQLException {LiNeBrEaKif (m_closed) {LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_07501);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCConnection.java|",
		"loc": "844",
		"clones": [{
			"start_line": 137,
			"end_line": 144,
			"code_lines": "sb.append(sql.substring(tail, i));LiNeBrEaKi       = onStartEscapeSequence(sql, sb, i);LiNeBrEaKtail    = i;LiNeBrEaKchanged = true;LiNeBrEaKnest++;LiNeBrEaKstate = inside_escape;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 268,
			"end_line": 277,
			"code_lines": "}LiNeBrEaKpublic synchronized SQLWarning getWarnings() throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKreturn rootWarning;LiNeBrEaK}LiNeBrEaKpublic synchronized void clearWarnings() throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKrootWarning = null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 403,
			"end_line": 426,
			"code_lines": "checkClosed();LiNeBrEaKif (savepoint == null) {LiNeBrEaKthrow JDBCUtil.nullArgument();LiNeBrEaK}LiNeBrEaKif (!(savepoint instanceof JDBCSavepoint)) {LiNeBrEaKString msg = Error.getMessage(ErrorCode.X_3B001);LiNeBrEaKthrow JDBCUtil.invalidArgument(msg);LiNeBrEaK}LiNeBrEaKsp = (JDBCSavepoint) savepoint;LiNeBrEaKif (JDBCDatabaseMetaData.JDBC_MAJOR >= 4 && sp.name == null) {LiNeBrEaKString msg = Error.getMessage(ErrorCode.X_3B001);LiNeBrEaKthrow JDBCUtil.invalidArgument(msg);LiNeBrEaK}LiNeBrEaKif (this != sp.connection) {LiNeBrEaKString msg = Error.getMessage(ErrorCode.X_3B001);LiNeBrEaKthrow JDBCUtil.invalidArgument(msg);LiNeBrEaK}LiNeBrEaKif (JDBCDatabaseMetaData.JDBC_MAJOR >= 4 && getAutoCommit()) {LiNeBrEaKsp.name       = null;LiNeBrEaKsp.connection = null;LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_3B001);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 427,
			"end_line": 435,
			"code_lines": "if (JDBCDatabaseMetaData.JDBC_MAJOR >= 4) {LiNeBrEaKsp.connection = null;LiNeBrEaKsp.name       = null;LiNeBrEaK}LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKthrow JDBCUtil.sqlException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 450,
			"end_line": 456,
			"code_lines": "ResultConstants.RETURN_NO_GENERATED_KEYS, null, null);LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKthrow JDBCUtil.sqlException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic synchronized CallableStatement prepareCall(String sql,LiNeBrEaK"
		}, {
			"start_line": 627,
			"end_line": 634,
			"code_lines": "if (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaK"
		}, {
			"start_line": 743,
			"end_line": 749,
			"code_lines": "if (connProperties != null) {LiNeBrEaKisCloseResultSet = connProperties.isPropertyTrue(LiNeBrEaKHsqlDatabaseProperties.url_close_result, false);LiNeBrEaKisUseColumnName = connProperties.isPropertyTrue(LiNeBrEaKHsqlDatabaseProperties.url_get_column_name, true);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCNClob.java|",
		"loc": "11"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCSQLXML.java|",
		"loc": "1067",
		"clones": [{
			"start_line": 538,
			"end_line": 547,
			"code_lines": "} catch (SecurityException ex) {LiNeBrEaKthrow Exceptions.sourceInstantiation(ex);LiNeBrEaK} catch (InstantiationException ex) {LiNeBrEaKthrow Exceptions.sourceInstantiation(ex);LiNeBrEaK} catch (IllegalAccessException ex) {LiNeBrEaKthrow Exceptions.sourceInstantiation(ex);LiNeBrEaK} catch (ClassCastException ex) {LiNeBrEaKthrow Exceptions.sourceInstantiation(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 643,
			"end_line": 652,
			"code_lines": "} catch (SecurityException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (InstantiationException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (IllegalAccessException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (ClassCastException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 660,
			"end_line": 669,
			"code_lines": "} catch (SecurityException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (InstantiationException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (IllegalAccessException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK} catch (ClassCastException ex) {LiNeBrEaKthrow Exceptions.resultInstantiation(ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 732,
			"end_line": 738,
			"code_lines": "Exception ex = (cause instanceof Exception) ? (Exception) causeLiNeBrEaK: new Exception(cause);LiNeBrEaKreturn JDBCUtil.sqlException(ErrorCode.GENERAL_ERROR,LiNeBrEaK'SQLXML Source instantiation failed: 'LiNeBrEaK+ cause, ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 739,
			"end_line": 745,
			"code_lines": "Exception ex = (cause instanceof Exception) ? (Exception) causeLiNeBrEaK: new Exception(cause);LiNeBrEaKreturn JDBCUtil.sqlException(ErrorCode.GENERAL_ERROR,LiNeBrEaK'SQLXML Result instantiation failed: 'LiNeBrEaK+ cause, ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 996,
			"end_line": 1004,
			"code_lines": "}LiNeBrEaKpublic void ignorableWhitespace(char[] ch, int start,LiNeBrEaKint length) throws SAXException {LiNeBrEaKcharacters(ch, start, length);LiNeBrEaK}LiNeBrEaKpublic void processingInstruction(String target,LiNeBrEaKString data) throws SAXException {LiNeBrEaKcheckClosed();LiNeBrEaK"
		}, {
			"start_line": 1009,
			"end_line": 1016,
			"code_lines": "}LiNeBrEaKpublic void setDocumentLocator(Locator locator) {LiNeBrEaKthis.locator = locator;LiNeBrEaK}LiNeBrEaKpublic Locator getDocumentLocator() {LiNeBrEaKreturn this.locator;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1047,
			"end_line": 1056,
			"code_lines": "}LiNeBrEaKpublic boolean isClosed() {LiNeBrEaKreturn this.closed;LiNeBrEaK}LiNeBrEaKprotected void checkClosed() throws SAXException {LiNeBrEaKif (isClosed()) {LiNeBrEaKthrow new SAXException('content handler is closed.');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCRowId.java|",
		"loc": "51"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCParameterMetaData.java|",
		"loc": "158",
		"clones": [{
			"start_line": 61,
			"end_line": 73,
			"code_lines": "}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 94,
			"code_lines": "if (type.isIntervalType()) {LiNeBrEaKtype = ((IntervalType) type).getCharacterType();LiNeBrEaK} else if (type.isDateTimeTypeWithZone()) {LiNeBrEaKtype = ((DateTimeType) type).getDateTimeTypeWithoutZone();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCColumnMetaData.java|",
		"loc": "52"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCDataSource.java|",
		"loc": "81",
		"clones": [{
			"start_line": 56,
			"end_line": 68,
			"code_lines": "}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCPooledConnection.java|",
		"loc": "93",
		"clones": [{
			"start_line": 73,
			"end_line": 80,
			"code_lines": "if (userConnection != null) {LiNeBrEaKtry {LiNeBrEaKuserConnection.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCXAConnectionWrapper.java|",
		"loc": "50"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCXAConnection.java|",
		"loc": "27"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCPooledDataSource.java|",
		"loc": "45",
		"clones": [{
			"start_line": 33,
			"end_line": 44,
			"code_lines": "}LiNeBrEaKpublic Reference getReference() throws NamingException {LiNeBrEaKString    cname = 'org.hsqldb.jdbc.JDBCDataSourceFactory';LiNeBrEaKReference ref   = new Reference(getClass().getName(), cname, null);LiNeBrEaKref.add(new StringRefAddr('database', getDatabase()));LiNeBrEaKref.add(new StringRefAddr('user', getUser()));LiNeBrEaKref.add(new StringRefAddr('password', password));LiNeBrEaKref.add(new StringRefAddr('loginTimeout',LiNeBrEaKInteger.toString(loginTimeout)));LiNeBrEaKreturn ref;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCXID.java|",
		"loc": "108"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCXADataSource.java|",
		"loc": "80",
		"clones": [{
			"start_line": 41,
			"end_line": 52,
			"code_lines": "}LiNeBrEaKpublic Reference getReference() throws NamingException {LiNeBrEaKString    cname = 'org.hsqldb.jdbc.JDBCDataSourceFactory';LiNeBrEaKReference ref   = new Reference(getClass().getName(), cname, null);LiNeBrEaKref.add(new StringRefAddr('database', getDatabase()));LiNeBrEaKref.add(new StringRefAddr('user', getUser()));LiNeBrEaKref.add(new StringRefAddr('password', password));LiNeBrEaKref.add(new StringRefAddr('loginTimeout',LiNeBrEaKInteger.toString(loginTimeout)));LiNeBrEaKreturn ref;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/pool/JDBCXAResource.java|",
		"loc": "177"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCPreparedStatement.java|",
		"loc": "1546",
		"clones": [{
			"start_line": 107,
			"end_line": 113,
			"code_lines": "parameterValues[--parameterIndex] = Integer.valueOf(x);LiNeBrEaKparameterSet[parameterIndex]      = Boolean.TRUE;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKsetIntParameter(parameterIndex, x);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 315,
			"end_line": 326,
			"code_lines": "return;LiNeBrEaK} else if (x == null) {LiNeBrEaKsetParameter(parameterIndex, null);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKfinal long length = x.length();LiNeBrEaKif (length > Integer.MAX_VALUE) {LiNeBrEaKString msg = 'Max Clob input character length exceeded: ' + length;LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.JDBC_INPUTSTREAM_ERROR, msg);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 419,
			"end_line": 427,
			"code_lines": "Calendar cal) throws SQLException {LiNeBrEaKcheckSetParameterIndex(parameterIndex);LiNeBrEaKint i = parameterIndex - 1;LiNeBrEaKif (x == null) {LiNeBrEaKparameterValues[i] = null;LiNeBrEaKparameterSet[i]    = Boolean.TRUE;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 448,
			"end_line": 462,
			"code_lines": "Calendar cal) throws SQLException {LiNeBrEaKcheckSetParameterIndex(parameterIndex);LiNeBrEaKint i = parameterIndex - 1;LiNeBrEaKif (x == null) {LiNeBrEaKparameterValues[i] = null;LiNeBrEaKparameterSet[i]    = Boolean.TRUE;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKType     outType    = parameterTypes[i];LiNeBrEaKlong     millis     = x.getTime();LiNeBrEaKint      zoneOffset = 0;LiNeBrEaKCalendar calendar   = cal == null ? session.getCalendar()LiNeBrEaK: cal;LiNeBrEaKmillis = HsqlDateTime.convertMillisFromCalendar(calendar, millis);LiNeBrEaK"
		}, {
			"start_line": 482,
			"end_line": 488,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKparameterSet[i] = Boolean.TRUE;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 513,
			"end_line": 533,
			"code_lines": "throw JDBCUtil.sqlException(resultIn);LiNeBrEaK}LiNeBrEaKRowSetNavigator navigator    = resultIn.getNavigator();LiNeBrEaKint[]           updateCounts = new int[navigator.getSize()];LiNeBrEaKfor (int i = 0; i < updateCounts.length; i++) {LiNeBrEaKObject[] data = (Object[]) navigator.getNext();LiNeBrEaKupdateCounts[i] = ((Integer) data[0]).intValue();LiNeBrEaK}LiNeBrEaKif (updateCounts.length != batchCount) {LiNeBrEaKif (errorResult == null) {LiNeBrEaKthrow new BatchUpdateException(updateCounts);LiNeBrEaK} else {LiNeBrEaKerrorResult.getMainString();LiNeBrEaKthrow new BatchUpdateException(errorResult.getMainString(),LiNeBrEaKerrorResult.getSubString(),LiNeBrEaKerrorResult.getErrorCode(), updateCounts);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn updateCounts;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 638,
			"end_line": 646,
			"code_lines": "}LiNeBrEaKpublic synchronized boolean getMoreResults(LiNeBrEaKint current) throws SQLException {LiNeBrEaKreturn super.getMoreResults(current);LiNeBrEaK}LiNeBrEaKpublic synchronized ResultSet getGeneratedKeys() throws SQLException {LiNeBrEaKreturn getGeneratedResultSet();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 760,
			"end_line": 767,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKif (length > Integer.MAX_VALUE) {LiNeBrEaKString msg = 'Maximum Clob input length exceeded: ' + length;LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.JDBC_INPUTSTREAM_ERROR, msg);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 828,
			"end_line": 834,
			"code_lines": "if (isClosed || connection.isClosed) {LiNeBrEaKcheckClosed();LiNeBrEaK}LiNeBrEaKif (max < 0) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 846,
			"end_line": 854,
			"code_lines": "if (seconds < 0) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument();LiNeBrEaK}LiNeBrEaKif (seconds > Short.MAX_VALUE) {LiNeBrEaKseconds = Short.MAX_VALUE;LiNeBrEaK}LiNeBrEaKqueryTimeout = seconds;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 871,
			"end_line": 883,
			"code_lines": "}LiNeBrEaKpublic synchronized ResultSet getResultSet() throws SQLException {LiNeBrEaKreturn super.getResultSet();LiNeBrEaK}LiNeBrEaKpublic synchronized int getUpdateCount() throws SQLException {LiNeBrEaKreturn super.getUpdateCount();LiNeBrEaK}LiNeBrEaKpublic synchronized boolean getMoreResults() throws SQLException {LiNeBrEaKreturn getMoreResults(JDBCStatementBase.CLOSE_CURRENT_RESULT);LiNeBrEaK}LiNeBrEaKpublic synchronized void setFetchDirection(LiNeBrEaKint direction) throws SQLException {LiNeBrEaK"
		}, {
			"start_line": 903,
			"end_line": 909,
			"code_lines": "if (rows < 0) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument();LiNeBrEaK}LiNeBrEaKfetchSize = rows;LiNeBrEaK}LiNeBrEaKpublic synchronized int getFetchSize() throws SQLException {LiNeBrEaK"
		}, {
			"start_line": 952,
			"end_line": 965,
			"code_lines": "return this.poolable;LiNeBrEaK}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 996,
			"end_line": 1004,
			"code_lines": "SQLWarning w = JDBCUtil.sqlWarning(current);LiNeBrEaKif (rootWarning == null) {LiNeBrEaKrootWarning = w;LiNeBrEaK} else {LiNeBrEaKrootWarning.setNextWarning(w);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1067,
			"end_line": 1074,
			"code_lines": "if (isClosed || connection.isClosed) {LiNeBrEaKcheckClosed();LiNeBrEaK}LiNeBrEaKif (i < 1 || i > parameterValues.length) {LiNeBrEaKString msg = 'parameter index out of range: ' + i;LiNeBrEaKthrow JDBCUtil.outOfRangeArgument(msg);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1150,
			"end_line": 1156,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKJDBCUtil.throwError(e);LiNeBrEaK}LiNeBrEaKJDBCUtil.throwError(Error.error(ErrorCode.X_42563));LiNeBrEaK"
		}, {
			"start_line": 1163,
			"end_line": 1171,
			"code_lines": "if (o instanceof String) {LiNeBrEaKo = outType.convertToDefaultType(session, o);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKJDBCUtil.throwError(e);LiNeBrEaK}LiNeBrEaKJDBCUtil.throwError(Error.error(ErrorCode.X_42563));LiNeBrEaK"
		}, {
			"start_line": 1263,
			"end_line": 1270,
			"code_lines": "try {LiNeBrEaKo = outType.convertToDefaultType(session, o);LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKJDBCUtil.throwError(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1331,
			"end_line": 1339,
			"code_lines": "parameterValues[i - 1] = is;LiNeBrEaKstreamLengths[i - 1]   = streamLength;LiNeBrEaKparameterSet[i - 1]    = Boolean.FALSE;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKparameterValues[i - 1] = o;LiNeBrEaKparameterSet[i - 1]    = Boolean.TRUE;LiNeBrEaKreturn;LiNeBrEaK"
		}, {
			"start_line": 1345,
			"end_line": 1354,
			"code_lines": "if (is.session.getDatabaseUniqueName().equals(LiNeBrEaKsession.getDatabaseUniqueName())) {LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.JDBC_INVALID_ARGUMENT,LiNeBrEaK'invalid Reader');LiNeBrEaK}LiNeBrEaKparameterValues[i - 1] = o;LiNeBrEaKstreamLengths[i - 1]   = streamLength;LiNeBrEaKparameterSet[i - 1]    = Boolean.FALSE;LiNeBrEaKreturn;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCClobClient.java|",
		"loc": "422",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import java.io.Reader;LiNeBrEaKimport java.io.UnsupportedEncodingException;LiNeBrEaKimport java.io.Writer;LiNeBrEaKimport java.nio.ByteBuffer;LiNeBrEaKimport java.nio.CharBuffer;LiNeBrEaKimport java.nio.charset.Charset;LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 257,
			"code_lines": "} catch (Exception ex) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (m_closed) {LiNeBrEaKthrow new IOException('The stream is closed.');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 273,
			"end_line": 282,
			"code_lines": "final long pos) throws SQLException {LiNeBrEaKcheckClosed();LiNeBrEaKif (pos < 1) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('pos: ' + pos);LiNeBrEaK}LiNeBrEaKif (!isWritable) {LiNeBrEaKthrow JDBCUtil.notUpdatableColumn();LiNeBrEaK}LiNeBrEaKstartUpdate();LiNeBrEaK"
		}, {
			"start_line": 313,
			"end_line": 321,
			"code_lines": "checkClosed();LiNeBrEaKif (pos < 1) {LiNeBrEaKthrow JDBCUtil.outOfRangeArgument('pos: ' + pos);LiNeBrEaK}LiNeBrEaKif (!isWritable) {LiNeBrEaKthrow JDBCUtil.notUpdatableColumn();LiNeBrEaK}LiNeBrEaKstartUpdate();LiNeBrEaK"
		}, {
			"start_line": 409,
			"end_line": 417,
			"code_lines": "String csn = charsetName;LiNeBrEaKif (csn == null) {LiNeBrEaKcsn = Charset.defaultCharset().name();LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKif (Charset.isSupported(csn)) {LiNeBrEaKreturn Charset.forName(csn);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCSavepoint.java|",
		"loc": "43"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCResultSetMetaData.java|",
		"loc": "228",
		"clones": [{
			"start_line": 127,
			"end_line": 139,
			"code_lines": "}LiNeBrEaK@SuppressWarnings('unchecked')LiNeBrEaKpublic <T>T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException {LiNeBrEaKif (isWrapperFor(iface)) {LiNeBrEaKreturn (T) this;LiNeBrEaK}LiNeBrEaKthrow JDBCUtil.invalidArgument('iface: ' + iface);LiNeBrEaK}LiNeBrEaKpublic boolean isWrapperFor(LiNeBrEaKjava.lang.Class<?> iface) throws java.sql.SQLException {LiNeBrEaKreturn (iface != null && iface.isAssignableFrom(this.getClass()));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 165,
			"end_line": 177,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKprivate Type translateType(Type type) {LiNeBrEaKif (this.translateTTIType) {LiNeBrEaKif (type.isIntervalType()) {LiNeBrEaKtype = ((IntervalType) type).getCharacterType();LiNeBrEaK} else if (type.isDateTimeTypeWithZone()) {LiNeBrEaKtype = ((DateTimeType) type).getDateTimeTypeWithoutZone();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn type;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 193,
			"end_line": 201,
			"code_lines": "sb.append(',');LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKsb.append('n');LiNeBrEaKsb.append(']');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCDriver.java|",
		"loc": "166"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbc/JDBCBlobClient.java|",
		"loc": "162",
		"clones": [{
			"start_line": 57,
			"end_line": 65,
			"code_lines": "if (position >= 0) {LiNeBrEaKposition++;LiNeBrEaK}LiNeBrEaKreturn position;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKthrow JDBCUtil.sqlException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 101,
			"end_line": 107,
			"code_lines": "} catch (HsqlException e) {LiNeBrEaKthrow JDBCUtil.sqlException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic synchronized void free() throws SQLException {LiNeBrEaKisClosed = true;LiNeBrEaK"
		}, {
			"start_line": 131,
			"end_line": 138,
			"code_lines": "}LiNeBrEaKpublic synchronized void setWritable(JDBCResultSet result, int index) {LiNeBrEaKisWritable = true;LiNeBrEaKresultSet  = result;LiNeBrEaKcolIndex   = index;LiNeBrEaK}LiNeBrEaKpublic synchronized void clearUpdates() {LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 159,
			"code_lines": "resultSet.preparedStatement.parameterSet[colIndex]    = Boolean.TRUE;LiNeBrEaK}LiNeBrEaKprivate void checkClosed() throws SQLException {LiNeBrEaKif (isClosed) {LiNeBrEaKthrow JDBCUtil.sqlException(ErrorCode.X_07501);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKstatic boolean isInLimits(long fullLength, long pos, long len) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/error/ErrorCode.java|",
		"loc": "454"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/error/Error.java|",
		"loc": "151"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserDML.java|",
		"loc": "879",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.RangeGroup.RangeGroupSimple;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 195,
			"end_line": 201,
			"code_lines": "if (baseTable.identitySequence.isAlways()) {LiNeBrEaKif (!overridingUser && !overridingSystem) {LiNeBrEaKthrow Error.error(ErrorCode.X_42543);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (overridingUser) {LiNeBrEaK"
		}, {
			"start_line": 397,
			"end_line": 408,
			"code_lines": "HsqlList unresolved = condition.resolveColumnReferences(session,LiNeBrEaKrangeGroup, rangeGroups, null);LiNeBrEaKExpressionColumn.checkColumnsResolved(unresolved);LiNeBrEaKcondition.resolveTypes(session, null);LiNeBrEaKif (condition.isUnresolvedParam()) {LiNeBrEaKcondition.dataType = Type.SQL_BOOLEAN;LiNeBrEaK}LiNeBrEaKif (condition.getDataType() != Type.SQL_BOOLEAN) {LiNeBrEaKthrow Error.error(ErrorCode.X_42568);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 422,
			"end_line": 440,
			"code_lines": "}LiNeBrEaKcondition =LiNeBrEaKExpressionLogical.andExpressions(baseSelect.queryCondition,LiNeBrEaKcondition);LiNeBrEaKrangeVariables = baseSelect.rangeVariables;LiNeBrEaK}LiNeBrEaKif (condition != null) {LiNeBrEaKrangeVariables[0].addJoinCondition(condition);LiNeBrEaKRangeVariableResolver resolver =LiNeBrEaKnew RangeVariableResolver(rangeVariables, null,LiNeBrEaKcompileContext, false);LiNeBrEaKresolver.processConditions(session);LiNeBrEaKrangeVariables = resolver.rangeVariables;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < rangeVariables.length; i++) {LiNeBrEaKrangeVariables[i].resolveRangeTableTypes(session,LiNeBrEaKRangeVariable.emptyArray);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 512,
			"end_line": 522,
			"code_lines": "if (enforcedDefaultIndex == columnMap[i]) {LiNeBrEaKif (e.getType() != OpTypes.DEFAULT) {LiNeBrEaKthrow Error.error(ErrorCode.X_42541);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (e.isUnresolvedParam()) {LiNeBrEaKe.setAttributesAsColumn(LiNeBrEaKtargetTable.getColumn(columnMap[i]), true);LiNeBrEaK} else if (e.getType() == OpTypes.DEFAULT) {LiNeBrEaKif (targetTable.colDefaults[columnMap[i]] == nullLiNeBrEaK"
		}, {
			"start_line": 523,
			"end_line": 529,
			"code_lines": "throw Error.error(ErrorCode.X_42544);LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKunresolved = expr.resolveColumnReferences(session,LiNeBrEaKrangeGroup, rangeGroups, null);LiNeBrEaKExpressionColumn.checkColumnsResolved(unresolved);LiNeBrEaK"
		}, {
			"start_line": 588,
			"end_line": 594,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 598,
			"end_line": 604,
			"code_lines": "Expression target = XreadTargetSpecification(rangeVars,LiNeBrEaKcolIndexList);LiNeBrEaKif (!targets.add(target)) {LiNeBrEaKColumnSchema col = target.getColumn();LiNeBrEaKthrow Error.error(ErrorCode.X_42579, col.getName().name);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 617,
			"end_line": 625,
			"code_lines": "}LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementSet.java|",
		"loc": "273",
		"clones": [{
			"start_line": 139,
			"end_line": 145,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'StatementSet');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 211,
			"end_line": 220,
			"code_lines": "for (int i = 0; i < subqueries.length; i++) {LiNeBrEaKif (subqueries[i].queryExpression != null) {LiNeBrEaKsubqueries[i].queryExpression.getBaseTableNames(set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < routines.length; i++) {LiNeBrEaKset.addAll(routines[i].getTableNamesForRead());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/UserTypeModifier.java|",
		"loc": "145"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/IntervalType.java|",
		"loc": "1234",
		"clones": [{
			"start_line": 101,
			"end_line": 111,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 210,
			"end_line": 220,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 319,
			"end_line": 329,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 364,
			"end_line": 373,
			"code_lines": "}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaK"
		}, {
			"start_line": 475,
			"end_line": 485,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 600,
			"end_line": 606,
			"code_lines": "return null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_INTERVAL_YEAR :LiNeBrEaKcase Types.SQL_INTERVAL_YEAR_TO_MONTH :LiNeBrEaKcase Types.SQL_INTERVAL_MONTH :LiNeBrEaK"
		}, {
			"start_line": 609,
			"end_line": 619,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 630,
			"end_line": 637,
			"code_lines": "if (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_INTERVAL_YEAR :LiNeBrEaKcase Types.SQL_INTERVAL_YEAR_TO_MONTH :LiNeBrEaKcase Types.SQL_INTERVAL_MONTH :LiNeBrEaK"
		}, {
			"start_line": 651,
			"end_line": 661,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BitType.java|",
		"loc": "396",
		"clones": [{
			"start_line": 2,
			"end_line": 9,
			"code_lines": "import org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 63,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 177,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL : {LiNeBrEaK"
		}, {
			"start_line": 253,
			"end_line": 261,
			"code_lines": "}LiNeBrEaKpublic Object convertJavaToSQL(SessionInterface session, Object a) {LiNeBrEaKreturn convertToDefaultType(session, a);LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BooleanType.java|",
		"loc": "194",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 34,
			"end_line": 43,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 56,
			"end_line": 69,
			"code_lines": "}LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 128,
			"end_line": 135,
			"code_lines": "Type otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaKswitch (otherType.typeCode) {LiNeBrEaKcase Types.SQL_BOOLEAN :LiNeBrEaKreturn a;LiNeBrEaK"
		}, {
			"start_line": 147,
			"end_line": 153,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Object convertToDefaultType(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 162,
			"end_line": 170,
			"code_lines": "}LiNeBrEaKpublic Object convertJavaToSQL(SessionInterface session, Object a) {LiNeBrEaKreturn convertToDefaultType(session, a);LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/CharacterType.java|",
		"loc": "800",
		"clones": [{
			"start_line": 0,
			"end_line": 12,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport java.math.BigDecimal;LiNeBrEaKimport org.hsqldb.HsqlDateTime;LiNeBrEaKimport org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaKimport org.hsqldb.lib.StringConverter;LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 100,
			"code_lines": "}LiNeBrEaKpublic String getDefinition() {LiNeBrEaKif (precision == 0) {LiNeBrEaKreturn getNameString();LiNeBrEaK}LiNeBrEaKStringBuffer sb = new StringBuffer(16);LiNeBrEaKsb.append(getNameString());LiNeBrEaKsb.append('(');LiNeBrEaKsb.append(precision);LiNeBrEaKsb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 145,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaKreturn precision >= other.precision ? thisLiNeBrEaK: other;LiNeBrEaK}LiNeBrEaKswitch (other.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 176,
			"end_line": 185,
			"code_lines": "default :LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Type getCombinedType(Session session, Type other, int operation) {LiNeBrEaKif (operation != OpTypes.CONCAT) {LiNeBrEaKreturn getAggregateType(other);LiNeBrEaK}LiNeBrEaKType newType;LiNeBrEaK"
		}, {
			"start_line": 217,
			"end_line": 226,
			"code_lines": "if (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 283,
			"end_line": 290,
			"code_lines": "if (slen > precision) {LiNeBrEaKif (getRightTrimSise((String) a, ' ') <= precision) {LiNeBrEaKreturn ((String) a).substring(0, (int) precision);LiNeBrEaK} else {LiNeBrEaKthrow Error.error(ErrorCode.X_22001);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 368,
			"end_line": 374,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'CharacterType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 397,
			"end_line": 403,
			"code_lines": "}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 404,
			"end_line": 410,
			"code_lines": "}LiNeBrEaKpublic Object convertToTypeJDBC(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 440,
			"end_line": 449,
			"code_lines": "}LiNeBrEaKpublic Object convertJavaToSQL(SessionInterface session, Object a) {LiNeBrEaKreturn convertToDefaultType(session, a);LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 453,
			"end_line": 462,
			"code_lines": "}LiNeBrEaKchar[] b = new char[(int) precision];LiNeBrEaK((String) a).getChars(0, slen, b, 0);LiNeBrEaKfor (int i = slen; i < precision; i++) {LiNeBrEaKb[i] = ' ';LiNeBrEaK}LiNeBrEaKreturn new String(b);LiNeBrEaK}LiNeBrEaKcase Types.SQL_VARCHAR : {LiNeBrEaK"
		}, {
			"start_line": 464,
			"end_line": 472,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'CharacterType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 561,
			"end_line": 580,
			"code_lines": "end = offset + length;LiNeBrEaK} else {LiNeBrEaKend = dataLength > offset ? dataLengthLiNeBrEaK: offset;LiNeBrEaK}LiNeBrEaKif (end < offset) {LiNeBrEaKthrow Error.error(ErrorCode.X_22011);LiNeBrEaK}LiNeBrEaKif (offset > end || end < 0) {LiNeBrEaKoffset = 0;LiNeBrEaKend    = 0;LiNeBrEaK}LiNeBrEaKif (offset < 0) {LiNeBrEaKoffset = 0;LiNeBrEaK}LiNeBrEaKif (end > dataLength) {LiNeBrEaKend = dataLength;LiNeBrEaK}LiNeBrEaKlength = end - offset;LiNeBrEaK"
		}, {
			"start_line": 611,
			"end_line": 617,
			"code_lines": "if (data == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (typeCode == Types.SQL_CLOB) {LiNeBrEaKString result = ((ClobData) data).getSubString(session, 0,LiNeBrEaK(int) ((ClobData) data).length(session));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/ClobData.java|",
		"loc": "28"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/ClobInputStream.java|",
		"loc": "96"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/OtherType.java|",
		"loc": "112",
		"clones": [{
			"start_line": 13,
			"end_line": 19,
			"code_lines": "}LiNeBrEaKpublic int displaySize() {LiNeBrEaKreturn precision > Integer.MAX_VALUE ? Integer.MAX_VALUELiNeBrEaK: (int) precision;LiNeBrEaK}LiNeBrEaKpublic int getJDBCTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 23,
			"end_line": 30,
			"code_lines": "}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKreturn 'java.lang.Object';LiNeBrEaK}LiNeBrEaKpublic int getSQLGenericTypeCode() {LiNeBrEaKreturn typeCode;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 38,
			"end_line": 49,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 55,
			"end_line": 61,
			"code_lines": "if (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 62,
			"end_line": 68,
			"code_lines": "}LiNeBrEaKpublic Object convertToTypeLimits(SessionInterface session, Object a) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/Charset.java|",
		"loc": "169",
		"clones": [{
			"start_line": 26,
			"end_line": 32,
			"code_lines": "{LiNeBrEaK'0', '9'LiNeBrEaK}, {LiNeBrEaK'A', 'Z'LiNeBrEaK}, {LiNeBrEaK'_', '_'LiNeBrEaK"
		}, {
			"start_line": 97,
			"end_line": 106,
			"code_lines": "}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKOrderedHashSet set = new OrderedHashSet();LiNeBrEaK"
		}, {
			"start_line": 154,
			"end_line": 161,
			"code_lines": "for (int i = 0; i < ranges.length; i++) {LiNeBrEaKif (ch > ranges[i][1]) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (ch < ranges[i][0]) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BlobInputStream.java|",
		"loc": "85",
		"clones": [{
			"start_line": 23,
			"end_line": 40,
			"code_lines": "this.currentPosition = offset;LiNeBrEaKthis.streamBlockSize = session.getStreamBlockSize();LiNeBrEaK}LiNeBrEaKpublic int read() throws IOException {LiNeBrEaKcheckClosed();LiNeBrEaKif (currentPosition >= availableLength) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (buffer == nullLiNeBrEaK|| currentPosition >= bufferOffset + buffer.length) {LiNeBrEaKtry {LiNeBrEaKcheckClosed();LiNeBrEaKreadIntoBuffer();LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow JavaSystem.toIOException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 43,
			"end_line": 66,
			"code_lines": "}LiNeBrEaKpublic long skip(long n) throws IOException {LiNeBrEaKcheckClosed();LiNeBrEaKif (n <= 0) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (currentPosition + n > availableLength) {LiNeBrEaKn = availableLength - currentPosition;LiNeBrEaK}LiNeBrEaKcurrentPosition += n;LiNeBrEaKreturn n;LiNeBrEaK}LiNeBrEaKpublic int available() {LiNeBrEaKlong avail = availableLength - currentPosition;LiNeBrEaKif (avail > Integer.MAX_VALUE) {LiNeBrEaKreturn Integer.MAX_VALUE;LiNeBrEaK}LiNeBrEaKreturn (int) avail;LiNeBrEaK}LiNeBrEaKpublic void close() throws IOException {LiNeBrEaKisClosed = true;LiNeBrEaK}LiNeBrEaKprivate void checkClosed() throws IOException {LiNeBrEaK"
		}, {
			"start_line": 79,
			"end_line": 85,
			"code_lines": "bufferOffset = currentPosition;LiNeBrEaK}LiNeBrEaKstatic boolean isInLimits(long fullLength, long pos, long len) {LiNeBrEaKreturn pos >= 0 && len >= 0 && pos + len <= fullLength;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/Type.java|",
		"loc": "834",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport org.hsqldb.HsqlNameManager;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.SchemaObject;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaK"
		}, {
			"start_line": 681,
			"end_line": 690,
			"code_lines": "case Types.SQL_INTEGER :LiNeBrEaKreturn SQL_INTEGER;LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKreturn SQL_SMALLINT;LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKreturn SQL_BIGINT;LiNeBrEaKcase Types.TINYINT :LiNeBrEaKreturn TINYINT;LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaK"
		}, {
			"start_line": 720,
			"end_line": 730,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/NullType.java|",
		"loc": "62"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/ClobDataID.java|",
		"loc": "159",
		"clones": [{
			"start_line": 53,
			"end_line": 60,
			"code_lines": "Result    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKlong lobID = ((ResultLob) resultIn).getLobID();LiNeBrEaKreturn new ClobDataID(lobID);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 104,
			"code_lines": "Result    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKthis.length = ((ResultLob) resultIn).getBlockLength();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 118,
			"end_line": 124,
			"code_lines": "Result resultIn = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKreturn ((ResultLob) resultIn).getOffset();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/TimestampData.java|",
		"loc": "56"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BlobDataID.java|",
		"loc": "161",
		"clones": [{
			"start_line": 14,
			"end_line": 20,
			"code_lines": "ResultLob resultOut = ResultLob.newLobDuplicateRequest(id);LiNeBrEaKResult    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKlong lobID = ((ResultLob) resultIn).getLobID();LiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 57,
			"code_lines": "}LiNeBrEaKpublic long getId() {LiNeBrEaKreturn id;LiNeBrEaK}LiNeBrEaKpublic void setId(long id) {LiNeBrEaKthis.id = id;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 62,
			"end_line": 75,
			"code_lines": "}LiNeBrEaKpublic long length(SessionInterface session) {LiNeBrEaKif (length > -1) {LiNeBrEaKreturn length;LiNeBrEaK}LiNeBrEaKResultLob resultOut = ResultLob.newLobGetLengthRequest(id);LiNeBrEaKResult    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKlength = ((ResultLob) resultIn).getBlockLength();LiNeBrEaKreturn length;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 91,
			"code_lines": "Result resultIn = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKreturn ((ResultLob) resultIn).getOffset();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 101,
			"code_lines": "Result resultIn = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKreturn ((ResultLob) resultIn).getOffset();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 102,
			"end_line": 109,
			"code_lines": "ResultLob resultOut = ResultLob.newLobGetTruncateLength(id);LiNeBrEaKResult    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaKreturn ((ResultLob) resultIn).getBlockLength();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 141,
			"end_line": 147,
			"code_lines": "public void truncate(SessionInterface session, long len) {LiNeBrEaKResultLob resultOut = ResultLob.newLobTruncateRequest(id, len);LiNeBrEaKResult    resultIn  = session.execute(resultOut);LiNeBrEaKif (resultIn.isError()) {LiNeBrEaKthrow resultIn.getException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 150,
			"end_line": 161,
			"code_lines": "}LiNeBrEaKpublic boolean equals(Object other) {LiNeBrEaKif (other instanceof BlobDataID) {LiNeBrEaKreturn id == ((BlobDataID) other).id;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic int hashCode() {LiNeBrEaKreturn (int) id;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/IntervalSecondData.java|",
		"loc": "107"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/NumberType.java|",
		"loc": "1451",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 158,
			"end_line": 164,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 204,
			"end_line": 210,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getFullNameString() {LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 321,
			"end_line": 329,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 380,
			"end_line": 386,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaKcase OpTypes.SUBTRACT :LiNeBrEaKdefault :LiNeBrEaKreturn getAggregateType(other);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 430,
			"end_line": 442,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 498,
			"end_line": 506,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Object convertToTypeLimits(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 530,
			"end_line": 537,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 539,
			"end_line": 545,
			"code_lines": "case Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL : {LiNeBrEaKBigDecimal dec = (BigDecimal) a;LiNeBrEaKif (scale != dec.scale()) {LiNeBrEaKdec = dec.setScale(scale, BigDecimal.ROUND_HALF_DOWN);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 580,
			"end_line": 590,
			"code_lines": "}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaK"
		}, {
			"start_line": 637,
			"end_line": 643,
			"code_lines": "}LiNeBrEaKpublic Object convertToTypeJDBC(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 651,
			"end_line": 658,
			"code_lines": "}LiNeBrEaKreturn convertToType(session, a, otherType);LiNeBrEaK}LiNeBrEaKpublic Object convertToDefaultType(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 685,
			"end_line": 692,
			"code_lines": "case Types.SQL_BIGINT :LiNeBrEaKreturn convertToLong(session, a);LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKreturn convertToDouble(a);LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaK"
		}, {
			"start_line": 733,
			"end_line": 739,
			"code_lines": "double d = ((Number) a).doubleValue();LiNeBrEaKif (session instanceof Session) {LiNeBrEaKif (!((Session) session).database.sqlConvertTruncate) {LiNeBrEaKd = java.lang.Math.rint(d);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 770,
			"end_line": 778,
			"code_lines": "} else if (a instanceof Double || a instanceof Float) {LiNeBrEaKdouble d = ((Number) a).doubleValue();LiNeBrEaKif (session instanceof Session) {LiNeBrEaKif (!((Session) session).database.sqlConvertTruncate) {LiNeBrEaKd = java.lang.Math.rint(d);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (Double.isInfinite(d) || Double.isNaN(d)LiNeBrEaK"
		}, {
			"start_line": 858,
			"end_line": 866,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 991,
			"end_line": 997,
			"code_lines": "}LiNeBrEaKpublic Object add(Session session, Object a, Object b, Type otherType) {LiNeBrEaKif (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 1025,
			"end_line": 1035,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Object subtract(Session session, Object a, Object b,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 1031,
			"end_line": 1040,
			"code_lines": "if (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaKdouble ad = ((Number) a).doubleValue();LiNeBrEaKdouble bd = ((Number) b).doubleValue();LiNeBrEaK"
		}, {
			"start_line": 1041,
			"end_line": 1048,
			"code_lines": "}LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL : {LiNeBrEaKa = convertToDefaultType(null, a);LiNeBrEaKb = convertToDefaultType(null, b);LiNeBrEaKBigDecimal abd = (BigDecimal) a;LiNeBrEaKBigDecimal bbd = (BigDecimal) b;LiNeBrEaK"
		}, {
			"start_line": 1049,
			"end_line": 1056,
			"code_lines": "return convertToTypeLimits(null, abd);LiNeBrEaK}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER : {LiNeBrEaKint ai = ((Number) a).intValue();LiNeBrEaKint bi = ((Number) b).intValue();LiNeBrEaK"
		}, {
			"start_line": 1068,
			"end_line": 1077,
			"code_lines": "if (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaKdouble ad = ((Number) a).doubleValue();LiNeBrEaKdouble bd = ((Number) b).doubleValue();LiNeBrEaK"
		}, {
			"start_line": 1091,
			"end_line": 1097,
			"code_lines": "}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER : {LiNeBrEaKint ai = ((Number) a).intValue();LiNeBrEaKint bi = ((Number) b).intValue();LiNeBrEaK"
		}, {
			"start_line": 1109,
			"end_line": 1118,
			"code_lines": "if (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaKdouble ad = ((Number) a).doubleValue();LiNeBrEaKdouble bd = ((Number) b).doubleValue();LiNeBrEaK"
		}, {
			"start_line": 1124,
			"end_line": 1135,
			"code_lines": "}LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL : {LiNeBrEaKif (!(a instanceof BigDecimal)) {LiNeBrEaKa = convertToDefaultType(null, a);LiNeBrEaK}LiNeBrEaKif (!(b instanceof BigDecimal)) {LiNeBrEaKb = convertToDefaultType(null, b);LiNeBrEaK}LiNeBrEaKBigDecimal abd = (BigDecimal) a;LiNeBrEaKBigDecimal bbd = (BigDecimal) b;LiNeBrEaK"
		}, {
			"start_line": 1139,
			"end_line": 1146,
			"code_lines": "return convertToTypeLimits(null, bd);LiNeBrEaK}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER : {LiNeBrEaKint ai = ((Number) a).intValue();LiNeBrEaKint bi = ((Number) b).intValue();LiNeBrEaK"
		}, {
			"start_line": 1179,
			"end_line": 1185,
			"code_lines": "return null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaK"
		}, {
			"start_line": 1233,
			"end_line": 1244,
			"code_lines": "case Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKreturn 64;LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaKreturn (int) precision;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1270,
			"end_line": 1276,
			"code_lines": "}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaKdouble ad = ((Number) a).doubleValue();LiNeBrEaK"
		}, {
			"start_line": 1294,
			"end_line": 1300,
			"code_lines": "}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaKdouble ad = ((Number) a).doubleValue();LiNeBrEaK"
		}, {
			"start_line": 1349,
			"end_line": 1356,
			"code_lines": "if (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaK"
		}, {
			"start_line": 1373,
			"end_line": 1380,
			"code_lines": "if (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE : {LiNeBrEaK"
		}, {
			"start_line": 1390,
			"end_line": 1396,
			"code_lines": "return value;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1432,
			"end_line": 1440,
			"code_lines": "case Types.SQL_INTEGER :LiNeBrEaKreturn SQL_INTEGER;LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKreturn SQL_SMALLINT;LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKreturn SQL_BIGINT;LiNeBrEaKcase Types.TINYINT :LiNeBrEaKreturn TINYINT;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/LobData.java|",
		"loc": "10"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/JavaObjectData.java|",
		"loc": "42"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/Collation.java|",
		"loc": "405",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import org.hsqldb.HsqlNameManager;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.SchemaObject;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SqlInvariants;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaK"
		}, {
			"start_line": 27,
			"end_line": 121,
			"code_lines": "nameToJavaName.put('Amharic', 'am-ET');LiNeBrEaKnameToJavaName.put('Arabic', 'ar');LiNeBrEaKnameToJavaName.put('Assamese', 'as-IN');LiNeBrEaKnameToJavaName.put('Azerbaijani_Latin', 'az-AZ');LiNeBrEaKnameToJavaName.put('Azerbaijani_Cyrillic', 'az-cyrillic');LiNeBrEaKnameToJavaName.put('Belarusian', 'be-BY');LiNeBrEaKnameToJavaName.put('Bulgarian', 'bg-BG');LiNeBrEaKnameToJavaName.put('Bengali', 'bn-IN');LiNeBrEaKnameToJavaName.put('Tibetan', 'bo-CN');LiNeBrEaKnameToJavaName.put('Bosnian', 'bs-BA');LiNeBrEaKnameToJavaName.put('Catalan', 'ca-ES');LiNeBrEaKnameToJavaName.put('Czech', 'cs-CZ');LiNeBrEaKnameToJavaName.put('Welsh', 'cy-GB');LiNeBrEaKnameToJavaName.put('Danish', 'da-DK');LiNeBrEaKnameToJavaName.put('German', 'de-DE');LiNeBrEaKnameToJavaName.put('Greek', 'el-GR');LiNeBrEaKnameToJavaName.put('Latin1_General', 'en-US');LiNeBrEaKnameToJavaName.put('English', 'en-US');LiNeBrEaKnameToJavaName.put('Spanish', 'es-ES');LiNeBrEaKnameToJavaName.put('Estonian', 'et-EE');LiNeBrEaKnameToJavaName.put('Basque', 'eu');LiNeBrEaKnameToJavaName.put('Finnish', 'fi-FI');LiNeBrEaKnameToJavaName.put('French', 'fr-FR');LiNeBrEaKnameToJavaName.put('Guarani', 'gn-PY');LiNeBrEaKnameToJavaName.put('Gujarati', 'gu-IN');LiNeBrEaKnameToJavaName.put('Hausa', 'ha-NG');LiNeBrEaKnameToJavaName.put('Hebrew', 'he-IL');LiNeBrEaKnameToJavaName.put('Hindi', 'hi-IN');LiNeBrEaKnameToJavaName.put('Croatian', 'hr-HR');LiNeBrEaKnameToJavaName.put('Hungarian', 'hu-HU');LiNeBrEaKnameToJavaName.put('Armenian', 'hy-AM');LiNeBrEaKnameToJavaName.put('Indonesian', 'id-ID');LiNeBrEaKnameToJavaName.put('Igbo', 'ig-NG');LiNeBrEaKnameToJavaName.put('Icelandic', 'is-IS');LiNeBrEaKnameToJavaName.put('Italian', 'it-IT');LiNeBrEaKnameToJavaName.put('Inuktitut', 'iu-CA');LiNeBrEaKnameToJavaName.put('Japanese', 'ja-JP');LiNeBrEaKnameToJavaName.put('Georgian', 'ka-GE');LiNeBrEaKnameToJavaName.put('Kazakh', 'kk-KZ');LiNeBrEaKnameToJavaName.put('Khmer', 'km-KH');LiNeBrEaKnameToJavaName.put('Kannada', 'kn-IN');LiNeBrEaKnameToJavaName.put('Korean', 'ko-KR');LiNeBrEaKnameToJavaName.put('Konkani', 'kok-IN');LiNeBrEaKnameToJavaName.put('Kashmiri', 'ks');LiNeBrEaKnameToJavaName.put('Kirghiz', 'ky-KG');LiNeBrEaKnameToJavaName.put('Lao', 'lo-LA');LiNeBrEaKnameToJavaName.put('Lithuanian', 'lt-LT');LiNeBrEaKnameToJavaName.put('Latvian', 'lv-LV');LiNeBrEaKnameToJavaName.put('Maori', 'mi-NZ');LiNeBrEaKnameToJavaName.put('Macedonian', 'mk-MK');LiNeBrEaKnameToJavaName.put('Malayalam', 'ml-IN');LiNeBrEaKnameToJavaName.put('Mongolian', 'mn-MN');LiNeBrEaKnameToJavaName.put('Manipuri', 'mni-IN');LiNeBrEaKnameToJavaName.put('Marathi', 'mr-IN');LiNeBrEaKnameToJavaName.put('Malay', 'ms-MY');LiNeBrEaKnameToJavaName.put('Maltese', 'mt-MT');LiNeBrEaKnameToJavaName.put('Burmese', 'my-MM');LiNeBrEaKnameToJavaName.put('Danish_Norwegian', 'nb-NO');LiNeBrEaKnameToJavaName.put('Nepali', 'ne-NP');LiNeBrEaKnameToJavaName.put('Dutch', 'nl-NL');LiNeBrEaKnameToJavaName.put('Norwegian', 'nn-NO');LiNeBrEaKnameToJavaName.put('Oriya', 'or-IN');LiNeBrEaKnameToJavaName.put('Punjabi', 'pa-IN');LiNeBrEaKnameToJavaName.put('Polish', 'pl-PL');LiNeBrEaKnameToJavaName.put('Pashto', 'ps-AF');LiNeBrEaKnameToJavaName.put('Portuguese', 'pt-PT');LiNeBrEaKnameToJavaName.put('Romanian', 'ro-RO');LiNeBrEaKnameToJavaName.put('Russian', 'ru-RU');LiNeBrEaKnameToJavaName.put('Sanskrit', 'sa-IN');LiNeBrEaKnameToJavaName.put('Sindhi', 'sd-IN');LiNeBrEaKnameToJavaName.put('Slovak', 'sk-SK');LiNeBrEaKnameToJavaName.put('Slovenian', 'sl-SI');LiNeBrEaKnameToJavaName.put('Somali', 'so-SO');LiNeBrEaKnameToJavaName.put('Albanian', 'sq-AL');LiNeBrEaKnameToJavaName.put('Serbian_Cyrillic', 'sr-YU');LiNeBrEaKnameToJavaName.put('Serbian_Latin', 'sh-BA');LiNeBrEaKnameToJavaName.put('Swedish', 'sv-SE');LiNeBrEaKnameToJavaName.put('Swahili', 'sw-KE');LiNeBrEaKnameToJavaName.put('Tamil', 'ta-IN');LiNeBrEaKnameToJavaName.put('Telugu', 'te-IN');LiNeBrEaKnameToJavaName.put('Tajik', 'tg-TJ');LiNeBrEaKnameToJavaName.put('Thai', 'th-TH');LiNeBrEaKnameToJavaName.put('Turkmen', 'tk-TM');LiNeBrEaKnameToJavaName.put('Tswana', 'tn-BW');LiNeBrEaKnameToJavaName.put('Turkish', 'tr-TR');LiNeBrEaKnameToJavaName.put('Tatar', 'tt-RU');LiNeBrEaKnameToJavaName.put('Ukrainian', 'uk-UA');LiNeBrEaKnameToJavaName.put('Urdu', 'ur-PK');LiNeBrEaKnameToJavaName.put('Uzbek_Latin', 'uz-UZ');LiNeBrEaKnameToJavaName.put('Venda', 'ven-ZA');LiNeBrEaKnameToJavaName.put('Vietnamese', 'vi-VN');LiNeBrEaKnameToJavaName.put('Yoruba', 'yo-NG');LiNeBrEaKnameToJavaName.put('Chinese', 'zh-CN');LiNeBrEaKnameToJavaName.put('Zulu', 'zu-ZA');LiNeBrEaK"
		}, {
			"start_line": 344,
			"end_line": 353,
			"code_lines": "return name.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaK"
		}, {
			"start_line": 354,
			"end_line": 361,
			"code_lines": "}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaK"
		}, {
			"start_line": 380,
			"end_line": 386,
			"code_lines": "}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic long getChangeTimestamp() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 398,
			"end_line": 404,
			"code_lines": "sb.append(' ');LiNeBrEaKif (!padSpace) {LiNeBrEaKsb.append(Tokens.T_NO).append(' ').append(Tokens.T_PAD);LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BinaryData.java|",
		"loc": "189",
		"clones": [{
			"start_line": 106,
			"end_line": 121,
			"code_lines": "}LiNeBrEaKpublic void setBytes(SessionInterface session, long pos, byte[] bytes) {LiNeBrEaKsetBytes(session, pos, bytes, 0, bytes.length);LiNeBrEaK}LiNeBrEaKpublic void setBytes(SessionInterface session, long pos, BlobData b,LiNeBrEaKlong offset, long length) {LiNeBrEaKif (length > Integer.MAX_VALUE) {LiNeBrEaKthrow new IndexOutOfBoundsException();LiNeBrEaK}LiNeBrEaKbyte[] bytes = b.getBytes(session, offset, (int) length);LiNeBrEaKsetBytes(session, pos, bytes, 0, bytes.length);LiNeBrEaK}LiNeBrEaKpublic void setBinaryStream(SessionInterface session, long pos,LiNeBrEaKInputStream in) {LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 159,
			"code_lines": "}LiNeBrEaKpublic long getId() {LiNeBrEaKreturn id;LiNeBrEaK}LiNeBrEaKpublic void setId(long id) {LiNeBrEaKthis.id = id;LiNeBrEaK}LiNeBrEaKpublic int getStreamBlockSize() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BlobData.java|",
		"loc": "31"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/IntervalMonthData.java|",
		"loc": "56"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/Types.java|",
		"loc": "349",
		"clones": [{
			"start_line": 293,
			"end_line": 311,
			"code_lines": "case Types.SQL_INTERVAL_YEAR :LiNeBrEaKcase Types.SQL_INTERVAL_YEAR_TO_MONTH :LiNeBrEaKcase Types.SQL_INTERVAL_MONTH :LiNeBrEaKcase Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaKreturn true;LiNeBrEaKdefault :LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 315,
			"end_line": 322,
			"code_lines": "case Types.SQL_DECIMAL :LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKreturn true;LiNeBrEaKdefault :LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BinaryType.java|",
		"loc": "534",
		"clones": [{
			"start_line": 0,
			"end_line": 10,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaKimport org.hsqldb.lib.StringConverter;LiNeBrEaK"
		}, {
			"start_line": 14,
			"end_line": 20,
			"code_lines": "}LiNeBrEaKpublic int displaySize() {LiNeBrEaKreturn precision > Integer.MAX_VALUE ? Integer.MAX_VALUELiNeBrEaK: (int) precision;LiNeBrEaK}LiNeBrEaKpublic int getJDBCTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 22,
			"end_line": 29,
			"code_lines": "}LiNeBrEaKpublic Class getJDBCClass() {LiNeBrEaKreturn byte[].class;LiNeBrEaK}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKreturn '[B';LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 35,
			"end_line": 48,
			"code_lines": ": 'BINARY VARYING';LiNeBrEaK}LiNeBrEaKpublic String getDefinition() {LiNeBrEaKif (precision == 0) {LiNeBrEaKreturn getNameString();LiNeBrEaK}LiNeBrEaKStringBuffer sb = new StringBuffer(16);LiNeBrEaKsb.append(getNameString());LiNeBrEaKsb.append('(');LiNeBrEaKsb.append(precision);LiNeBrEaKsb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 79,
			"end_line": 95,
			"code_lines": ": -2;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'BinaryType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaKreturn precision >= other.precision ? thisLiNeBrEaK: other;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 140,
			"code_lines": "default :LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Type getCombinedType(Session session, Type other, int operation) {LiNeBrEaKif (operation != OpTypes.CONCAT) {LiNeBrEaKreturn getAggregateType(other);LiNeBrEaK}LiNeBrEaKType newType;LiNeBrEaKlong newPrecision = this.precision + other.precision;LiNeBrEaKswitch (other.typeCode) {LiNeBrEaKcase Types.SQL_ALL_TYPES :LiNeBrEaKreturn this;LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 177,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 217,
			"end_line": 226,
			"code_lines": "}LiNeBrEaKpublic Object castToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKreturn castOrConvertToType(session, a, otherType, true);LiNeBrEaK}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKreturn castOrConvertToType(session, a, otherType, false);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 240,
			"end_line": 248,
			"code_lines": "}LiNeBrEaKObject castOrConvertToType(SessionInterface session, Object a,LiNeBrEaKType otherType, boolean cast) {LiNeBrEaKBlobData b;LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKswitch (otherType.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 284,
			"end_line": 290,
			"code_lines": "if (!cast) {LiNeBrEaKthrow Error.error(ErrorCode.X_22001);LiNeBrEaK}LiNeBrEaKsession.addWarning(Error.error(ErrorCode.W_01004));LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 311,
			"end_line": 317,
			"code_lines": "}LiNeBrEaKpublic Object convertToDefaultType(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaKif (a instanceof byte[]) {LiNeBrEaK"
		}, {
			"start_line": 330,
			"end_line": 336,
			"code_lines": "}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKreturn StringConverter.byteArrayToSQLHexString(LiNeBrEaK"
		}, {
			"start_line": 377,
			"end_line": 383,
			"code_lines": ": -1;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 382,
			"end_line": 388,
			"code_lines": "}LiNeBrEaKpublic long position(SessionInterface session, BlobData data,LiNeBrEaKBlobData otherData, Type otherType, long offset) {LiNeBrEaKif (data == null || otherData == null) {LiNeBrEaKreturn -1L;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 398,
			"end_line": 404,
			"code_lines": "if (hasLength) {LiNeBrEaKend = offset + length;LiNeBrEaK} else {LiNeBrEaKend = dataLength > offset ? dataLengthLiNeBrEaK: offset;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 405,
			"end_line": 418,
			"code_lines": "throw Error.error(ErrorCode.X_22011);LiNeBrEaK}LiNeBrEaKif (offset > end || end < 0) {LiNeBrEaKoffset = 0;LiNeBrEaKend    = 0;LiNeBrEaK}LiNeBrEaKif (offset < 0) {LiNeBrEaKoffset = 0;LiNeBrEaK}LiNeBrEaKif (end > dataLength) {LiNeBrEaKend = dataLength;LiNeBrEaK}LiNeBrEaKlength = end - offset;LiNeBrEaK"
		}, {
			"start_line": 497,
			"end_line": 506,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'BinaryType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Object concat(Session session, Object a, Object b) {LiNeBrEaKif (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/DTIType.java|",
		"loc": "338",
		"clones": [{
			"start_line": 152,
			"end_line": 159,
			"code_lines": "}LiNeBrEaKpublic int getStartIntervalType() {LiNeBrEaKreturn startIntervalType;LiNeBrEaK}LiNeBrEaKpublic int getEndIntervalType() {LiNeBrEaKreturn endIntervalType;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/ArrayType.java|",
		"loc": "349",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.SortAndSlice;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 59,
			"end_line": 65,
			"code_lines": "sb.append(Tokens.T_ARRAY);LiNeBrEaKif (maxCardinality != defaultArrayCardinality) {LiNeBrEaKsb.append('[').append(maxCardinality).append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 68,
			"end_line": 74,
			"code_lines": "sb.append(Tokens.T_ARRAY);LiNeBrEaKif (maxCardinality != defaultArrayCardinality) {LiNeBrEaKsb.append('[').append(maxCardinality).append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 73,
			"end_line": 84,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 116,
			"end_line": 122,
			"code_lines": "}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 252,
			"end_line": 264,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (this == other) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 311,
			"end_line": 317,
			"code_lines": "}LiNeBrEaKpublic boolean equals(Object other) {LiNeBrEaKif (other == this) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (other instanceof Type) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/DateTimeType.java|",
		"loc": "1418",
		"clones": [{
			"start_line": 8,
			"end_line": 15,
			"code_lines": "import org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.StringConverter;LiNeBrEaK"
		}, {
			"start_line": 44,
			"end_line": 53,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic int getJDBCTypeCode() {LiNeBrEaKreturn typeCode;LiNeBrEaK}LiNeBrEaKpublic Class getJDBCClass() {LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 61,
			"end_line": 67,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 74,
			"end_line": 83,
			"code_lines": "return 'java.sql.Timestamp';LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic int getJDBCPrecision() {LiNeBrEaKreturn this.displaySize();LiNeBrEaK}LiNeBrEaKpublic int getSQLGenericTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 84,
			"end_line": 90,
			"code_lines": "}LiNeBrEaKpublic String getNameString() {LiNeBrEaKreturn nameString;LiNeBrEaK}LiNeBrEaKprivate String getNameStringPrivate() {LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 160,
			"end_line": 169,
			"code_lines": "}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (typeCode == other.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 215,
			"end_line": 226,
			"code_lines": "}LiNeBrEaKif (!other.isDateTimeType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKDateTimeType otherType = (DateTimeType) other;LiNeBrEaKif (otherType.startIntervalType > endIntervalTypeLiNeBrEaK|| startIntervalType > otherType.endIntervalType) {LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKint     newType = typeCode;LiNeBrEaKint     scale   = this.scale > otherType.scale ? this.scaleLiNeBrEaK"
		}, {
			"start_line": 233,
			"end_line": 242,
			"code_lines": "if (startType == Types.SQL_INTERVAL_HOUR) {LiNeBrEaKnewType = zone ? Types.SQL_TIME_WITH_TIME_ZONELiNeBrEaK: Types.SQL_TIME;LiNeBrEaK} else {LiNeBrEaKnewType = zone ? Types.SQL_TIMESTAMP_WITH_TIME_ZONELiNeBrEaK: Types.SQL_TIMESTAMP;LiNeBrEaK}LiNeBrEaKreturn getDateTimeType(newType, scale);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 270,
			"end_line": 280,
			"code_lines": "if (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 304,
			"end_line": 313,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Object convertToTypeLimits(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 347,
			"end_line": 354,
			"code_lines": "}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaKswitch (otherType.typeCode) {LiNeBrEaK"
		}, {
			"start_line": 506,
			"end_line": 514,
			"code_lines": "TimeData ti = (TimeData) a;LiNeBrEaKlong seconds = session.getCurrentDate().getSeconds()LiNeBrEaK+ ti.getSeconds()LiNeBrEaK- session.getZoneSeconds();LiNeBrEaKreturn new TimestampData(seconds,LiNeBrEaKscaleNanos(ti.getNanos()),LiNeBrEaKsession.getZoneSeconds());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 590,
			"end_line": 596,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (a instanceof java.util.Date) {LiNeBrEaKlong millis;LiNeBrEaKint  nanos       = 0;LiNeBrEaKint  zoneSeconds = 0;LiNeBrEaK"
		}, {
			"start_line": 676,
			"end_line": 682,
			"code_lines": "return value;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 731,
			"end_line": 741,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKStringBuffer sb = new StringBuffer(32);LiNeBrEaK"
		}, {
			"start_line": 756,
			"end_line": 765,
			"code_lines": "return sb.toString();LiNeBrEaK}LiNeBrEaKpublic boolean canConvertFrom(Type otherType) {LiNeBrEaKif (otherType.typeCode == Types.SQL_ALL_TYPES) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (otherType.isCharacterType()) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 774,
			"end_line": 783,
			"code_lines": "}LiNeBrEaKpublic int canMoveFrom(Type otherType) {LiNeBrEaKif (otherType == this) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (typeCode == otherType.typeCode) {LiNeBrEaKreturn scale >= otherType.scale ? 0LiNeBrEaK: -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 818,
			"end_line": 824,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaK}LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 823,
			"end_line": 829,
			"code_lines": "}LiNeBrEaKpublic Object subtract(Session session, Object a, Object b,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 826,
			"end_line": 844,
			"code_lines": "if (a == null || b == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (otherType.isNumberType()) {LiNeBrEaKif (typeCode == Types.SQL_DATE) {LiNeBrEaKb = ((NumberType) otherType).floor(b);LiNeBrEaK}LiNeBrEaKb = Type.SQL_INTERVAL_SECOND_MAX_PRECISION.multiply(LiNeBrEaKIntervalSecondData.oneDay, b);LiNeBrEaK}LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.SQL_TIME_WITH_TIME_ZONE :LiNeBrEaKcase Types.SQL_TIME :LiNeBrEaKif (b instanceof IntervalMonthData) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'DateTimeType');LiNeBrEaK} else if (b instanceof IntervalSecondData) {LiNeBrEaKreturn addSeconds((TimeData) a,LiNeBrEaK"
		}, {
			"start_line": 846,
			"end_line": 853,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_DATE :LiNeBrEaKcase Types.SQL_TIMESTAMP_WITH_TIME_ZONE :LiNeBrEaKcase Types.SQL_TIMESTAMP :LiNeBrEaKif (b instanceof IntervalMonthData) {LiNeBrEaKreturn addMonths(session, (TimestampData) a,LiNeBrEaK"
		}, {
			"start_line": 858,
			"end_line": 864,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaK}LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 899,
			"end_line": 912,
			"code_lines": "return new TimeData((int) (millis / 1000), 0,LiNeBrEaK((TimeData) a).getZone());LiNeBrEaK}LiNeBrEaKcase Types.SQL_DATE :LiNeBrEaKcase Types.SQL_TIMESTAMP_WITH_TIME_ZONE :LiNeBrEaKcase Types.SQL_TIMESTAMP : {LiNeBrEaKreturn new TimestampData(millis / 1000, 0,LiNeBrEaK((TimestampData) a).getZone());LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaK}LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DateTimeType');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/ClobType.java|",
		"loc": "141",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 15,
			"end_line": 21,
			"code_lines": "}LiNeBrEaKpublic int displaySize() {LiNeBrEaKreturn precision > Integer.MAX_VALUE ? Integer.MAX_VALUELiNeBrEaK: (int) precision;LiNeBrEaK}LiNeBrEaKpublic int getJDBCTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 25,
			"end_line": 32,
			"code_lines": "}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKreturn 'java.sql.Clob';LiNeBrEaK}LiNeBrEaKpublic int getSQLGenericTypeCode() {LiNeBrEaKreturn typeCode;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 62,
			"end_line": 76,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKreturn compare(session, a, b, OpTypes.EQUAL);LiNeBrEaK}LiNeBrEaKpublic int compare(Session session, Object a, Object b, int opType) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 94,
			"end_line": 101,
			"code_lines": "}LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 102,
			"end_line": 109,
			"code_lines": "}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKreturn convertToString(a);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 122,
			"code_lines": "}LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKpublic Object convertSQLToJava(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/RowType.java|",
		"loc": "333",
		"clones": [{
			"start_line": 2,
			"end_line": 9,
			"code_lines": "import org.hsqldb.OpTypes;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.SortAndSlice;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 24,
			"end_line": 35,
			"code_lines": "}LiNeBrEaKpublic String getJDBCClassName() {LiNeBrEaKreturn 'java.sql.ResultSet';LiNeBrEaK}LiNeBrEaKpublic int getJDBCScale() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic int getJDBCPrecision() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic int getSQLGenericTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 55,
			"end_line": 73,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaKObject[] arra   = (Object[]) a;LiNeBrEaKObject[] arrb   = (Object[]) b;LiNeBrEaKint      length = arra.length;LiNeBrEaKif (arrb.length < length) {LiNeBrEaKlength = arrb.length;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < length; i++) {LiNeBrEaK"
		}, {
			"start_line": 74,
			"end_line": 90,
			"code_lines": "if (result != 0) {LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (arra.length > arrb.length) {LiNeBrEaKreturn 1;LiNeBrEaK} else if (arra.length < arrb.length) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic Object convertToTypeLimits(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKObject[] arra = (Object[]) a;LiNeBrEaK"
		}, {
			"start_line": 93,
			"end_line": 104,
			"code_lines": "}LiNeBrEaKreturn arrb;LiNeBrEaK}LiNeBrEaKpublic Object convertToType(SessionInterface session, Object a,LiNeBrEaKType otherType) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (otherType == null) {LiNeBrEaKreturn a;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 118,
			"end_line": 133,
			"code_lines": "}LiNeBrEaKpublic Object convertToDefaultType(SessionInterface sessionInterface,LiNeBrEaKObject o) {LiNeBrEaKreturn o;LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKreturn convertToSQLString(a);LiNeBrEaK}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 145,
			"end_line": 151,
			"code_lines": "return sb.toString();LiNeBrEaK}LiNeBrEaKpublic boolean canConvertFrom(Type otherType) {LiNeBrEaKif (otherType == null) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 177,
			"code_lines": "if (otherType == null) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (!otherType.isRowType()) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKType[] otherTypes = ((RowType) otherType).getTypesArray();LiNeBrEaKif (dataTypes.length != otherTypes.length) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < dataTypes.length; i++) {LiNeBrEaK"
		}, {
			"start_line": 181,
			"end_line": 190,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKpublic Type getAggregateType(Type other) {LiNeBrEaKif (other == null) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaKif (other == SQL_ALL_TYPES) {LiNeBrEaKreturn this;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 211,
			"end_line": 226,
			"code_lines": "return this;LiNeBrEaK}LiNeBrEaKif (!other.isRowType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKType[] newTypes   = new Type[dataTypes.length];LiNeBrEaKType[] otherTypes = ((RowType) other).getTypesArray();LiNeBrEaKif (dataTypes.length != otherTypes.length) {LiNeBrEaKthrow Error.error(ErrorCode.X_42564);LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < dataTypes.length; i++) {LiNeBrEaKnewTypes[i] = dataTypes[i].getAggregateType(otherTypes[i]);LiNeBrEaK}LiNeBrEaKreturn new RowType(newTypes);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 228,
			"end_line": 235,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b,LiNeBrEaKSortAndSlice sort) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaK"
		}, {
			"start_line": 231,
			"end_line": 242,
			"code_lines": "if (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaKObject[] arra   = (Object[]) a;LiNeBrEaKObject[] arrb   = (Object[]) b;LiNeBrEaK"
		}, {
			"start_line": 266,
			"end_line": 272,
			"code_lines": "}LiNeBrEaKpublic boolean equals(Object other) {LiNeBrEaKif (other == this) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (other instanceof Type) {LiNeBrEaK"
		}, {
			"start_line": 285,
			"end_line": 294,
			"code_lines": "}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic int hashCode(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKint      hash  = 0;LiNeBrEaKObject[] array = (Object[]) a;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/TimeData.java|",
		"loc": "52",
		"clones": [{
			"start_line": 7,
			"end_line": 13,
			"code_lines": "while (seconds < 0) {LiNeBrEaKseconds += 24 * 60 * 60;LiNeBrEaK}LiNeBrEaKif (seconds > 24 * 60 * 60) {LiNeBrEaKseconds %= 24 * 60 * 60;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 21,
			"end_line": 29,
			"code_lines": "return seconds;LiNeBrEaK}LiNeBrEaKpublic int getNanos() {LiNeBrEaKreturn nanos;LiNeBrEaK}LiNeBrEaKpublic int getZone() {LiNeBrEaKreturn zone;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 41,
			"end_line": 52,
			"code_lines": "long diff = seconds - b.seconds;LiNeBrEaKif (diff == 0) {LiNeBrEaKdiff = nanos - b.nanos;LiNeBrEaKif (diff == 0) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn diff > 0 ? 1LiNeBrEaK: -1;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/types/BlobType.java|",
		"loc": "198",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.types;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.SessionInterface;LiNeBrEaKimport org.hsqldb.Tokens;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 14,
			"end_line": 20,
			"code_lines": "}LiNeBrEaKpublic int displaySize() {LiNeBrEaKreturn precision > Integer.MAX_VALUE ? Integer.MAX_VALUELiNeBrEaK: (int) precision;LiNeBrEaK}LiNeBrEaKpublic int getJDBCTypeCode() {LiNeBrEaK"
		}, {
			"start_line": 37,
			"end_line": 43,
			"code_lines": "if (precision % (1024 * 1024 * 1024) == 0) {LiNeBrEaKfactor     = precision / (1024 * 1024 * 1024);LiNeBrEaKmultiplier = Tokens.T_G_FACTOR;LiNeBrEaK} else if (precision % (1024 * 1024) == 0) {LiNeBrEaKfactor     = precision / (1024 * 1024);LiNeBrEaKmultiplier = Tokens.T_M_FACTOR;LiNeBrEaK"
		}, {
			"start_line": 46,
			"end_line": 57,
			"code_lines": "}LiNeBrEaKStringBuffer sb = new StringBuffer(16);LiNeBrEaKsb.append(getNameString());LiNeBrEaKsb.append('(');LiNeBrEaKsb.append(factor);LiNeBrEaKif (multiplier != null) {LiNeBrEaKsb.append(multiplier);LiNeBrEaK}LiNeBrEaKsb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 60,
			"code_lines": "sb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic boolean isBinaryType() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 61,
			"end_line": 67,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKpublic boolean acceptsPrecision() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic long getMaxPrecision() {LiNeBrEaK"
		}, {
			"start_line": 71,
			"end_line": 82,
			"code_lines": "}LiNeBrEaKpublic int compare(Session session, Object a, Object b) {LiNeBrEaKif (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 170,
			"code_lines": "}LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKpublic Object convertSQLToJava(SessionInterface session, Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 189,
			"code_lines": "}LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaKpublic String convertToString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 190,
			"end_line": 197,
			"code_lines": "}LiNeBrEaKpublic String convertToSQLString(Object a) {LiNeBrEaKif (a == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKreturn convertToString(a);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserRoutine.java|",
		"loc": "1552",
		"clones": [{
			"start_line": 285,
			"end_line": 298,
			"code_lines": "if (exprList.size() > 1) {LiNeBrEaKthrow Error.parseError(ErrorCode.X_42602, null,LiNeBrEaKscanner.getLineNumber());LiNeBrEaK}LiNeBrEaKExpression expression = (Expression) exprList.get(0);LiNeBrEaKif (expression.getDegree() != targetSet.size()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42546, Tokens.T_SET);LiNeBrEaK}LiNeBrEaKint[] columnMap = new int[colIndexList.size()];LiNeBrEaKcolIndexList.toArray(columnMap);LiNeBrEaKExpression[] targets = new Expression[targetSet.size()];LiNeBrEaKtargetSet.toArray(targets);LiNeBrEaKfor (int i = 0; i < targets.length; i++) {LiNeBrEaK"
		}, {
			"start_line": 294,
			"end_line": 300,
			"code_lines": "colIndexList.toArray(columnMap);LiNeBrEaKExpression[] targets = new Expression[targetSet.size()];LiNeBrEaKtargetSet.toArray(targets);LiNeBrEaKfor (int i = 0; i < targets.length; i++) {LiNeBrEaKthis.resolveOuterReferencesAndTypes(rangeGroups, targets[i]);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 307,
			"end_line": 318,
			"code_lines": "}LiNeBrEaKif (!targets[i].getDataType().canBeAssignedFrom(LiNeBrEaKexpression.getNodeDataType(i))) {LiNeBrEaKthrow Error.parseError(ErrorCode.X_42561, null,LiNeBrEaKscanner.getLineNumber());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKStatementSet cs = new StatementSet(session, targets, expression,LiNeBrEaKcolumnMap, compileContext);LiNeBrEaKreturn cs;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 405,
			"end_line": 413,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 495,
			"end_line": 502,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 663,
			"end_line": 670,
			"code_lines": "if (routine.getType() == SchemaObject.FUNCTIONLiNeBrEaK|| !set.add(Tokens.SAVEPOINT)) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.SAVEPOINT);LiNeBrEaKreadThis(Tokens.LEVEL);LiNeBrEaK"
		}, {
			"start_line": 1090,
			"end_line": 1096,
			"code_lines": "throw Error.error(LiNeBrEaKErrorCode.X_42602,LiNeBrEaKroutine.getDataImpactString());LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1215,
			"end_line": 1224,
			"code_lines": "if (isSimpleName() && !isReservedKey()) {LiNeBrEaKif (label == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKif (!label.name.equals(token.tokenString)) {LiNeBrEaKthrow Error.error(ErrorCode.X_42508, token.tokenString);LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1243,
			"end_line": 1253,
			"code_lines": "if (isSimpleName() && !isReservedKey()) {LiNeBrEaKif (label == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKif (!label.name.equals(token.tokenString)) {LiNeBrEaKthrow Error.error(ErrorCode.X_42508, token.tokenString);LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK}LiNeBrEaKStatementCompound statement =LiNeBrEaK"
		}, {
			"start_line": 1265,
			"end_line": 1274,
			"code_lines": "if (isSimpleName() && !isReservedKey()) {LiNeBrEaKif (label == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKif (!label.name.equals(token.tokenString)) {LiNeBrEaKthrow Error.error(ErrorCode.X_42508, token.tokenString);LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1301,
			"end_line": 1310,
			"code_lines": "if (isSimpleName() && !isReservedKey()) {LiNeBrEaKif (label == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKif (!label.name.equals(token.tokenString)) {LiNeBrEaKthrow Error.error(ErrorCode.X_42508, token.tokenString);LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1377,
			"end_line": 1384,
			"code_lines": "list.add(statement);LiNeBrEaKstatements = compileSQLProcedureStatementList(routine, context);LiNeBrEaKfor (int i = 0; i < statements.length; i++) {LiNeBrEaKlist.add(statements[i]);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreadThis(Tokens.END);LiNeBrEaK"
		}, {
			"start_line": 1385,
			"end_line": 1392,
			"code_lines": "statements = new Statement[list.size()];LiNeBrEaKlist.toArray(statements);LiNeBrEaKStatementCompound result = new StatementCompound(StatementTypes.IF,LiNeBrEaKnull);LiNeBrEaKresult.setStatements(statements);LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1424,
			"end_line": 1430,
			"code_lines": "list.add(statement);LiNeBrEaKreadThis(Tokens.THEN);LiNeBrEaKstatements = compileSQLProcedureStatementList(routine, context);LiNeBrEaKfor (int i = 0; i < statements.length; i++) {LiNeBrEaKlist.add(statements[i]);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1446,
			"end_line": 1461,
			"code_lines": "statement = new StatementExpression(session, compileContext,LiNeBrEaKStatementTypes.CONDITION,LiNeBrEaKcondition);LiNeBrEaKlist.add(statement);LiNeBrEaKreadThis(Tokens.THEN);LiNeBrEaKstatements = compileSQLProcedureStatementList(routine, context);LiNeBrEaKfor (int i = 0; i < statements.length; i++) {LiNeBrEaKlist.add(statements[i]);LiNeBrEaK}LiNeBrEaKif (token.tokenType != Tokens.WHEN) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK} while (true);LiNeBrEaKreturn list;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1489,
			"end_line": 1499,
			"code_lines": "sqlState = parseSQLStateValue();LiNeBrEaKif (readIfThis(Tokens.SET)) {LiNeBrEaKreadThis(Tokens.MESSAGE_TEXT);LiNeBrEaKreadThis(Tokens.EQUALS);LiNeBrEaKmessage = XreadSimpleValueSpecificationOrNull();LiNeBrEaKif (message == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKresolveOuterReferencesAndTypes(routine, context, message);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RoutineSchema.java|",
		"loc": "224",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaKimport org.hsqldb.lib.HsqlArrayList;LiNeBrEaK"
		}, {
			"start_line": 22,
			"end_line": 29,
			"code_lines": "}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 31,
			"end_line": 37,
			"code_lines": "}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKOrderedHashSet set = new OrderedHashSet();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementCursor.java|",
		"loc": "43"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementDML.java|",
		"loc": "1137",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.ParserDQL.CompileContext;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaK"
		}, {
			"start_line": 178,
			"end_line": 199,
			"code_lines": "for (int i = 0; i < rangeVariables.length; i++) {LiNeBrEaKTable    rangeTable = rangeVariables[i].rangeTable;LiNeBrEaKHsqlName name       = rangeTable.getName();LiNeBrEaKif (rangeTable.isDataReadOnly() || rangeTable.isTemp()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKset.add(name);LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < subqueries.length; i++) {LiNeBrEaKif (subqueries[i].queryExpression != null) {LiNeBrEaKsubqueries[i].queryExpression.getBaseTableNames(set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < routines.length; i++) {LiNeBrEaKset.addAll(routines[i].getTableNamesForRead());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid collectTableNamesForWrite(OrderedHashSet set) {LiNeBrEaK"
		}, {
			"start_line": 454,
			"end_line": 461,
			"code_lines": "Result          resultOut          = null;LiNeBrEaKRowSetNavigator generatedNavigator = null;LiNeBrEaKif (generatedIndexes != null) {LiNeBrEaKresultOut = Result.newUpdateCountResult(generatedResultMetaData,LiNeBrEaK0);LiNeBrEaKgeneratedNavigator = resultOut.getChainedResult().getNavigator();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 532,
			"end_line": 544,
			"code_lines": "session.addWarning(HsqlException.noDataCondition);LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK}LiNeBrEaKreturn new Result(ResultConstants.UPDATECOUNT, count);LiNeBrEaK} else {LiNeBrEaKresultOut.setUpdateCount(count);LiNeBrEaKif (count == 0) {LiNeBrEaKsession.addWarning(HsqlException.noDataCondition);LiNeBrEaK}LiNeBrEaKreturn resultOut;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 847,
			"end_line": 853,
			"code_lines": "path.clear();LiNeBrEaK}LiNeBrEaKnavigator.beforeFirst();LiNeBrEaK}LiNeBrEaKwhile (navigator.next()) {LiNeBrEaKRow      row            = navigator.getCurrentRow();LiNeBrEaK"
		}, {
			"start_line": 866,
			"end_line": 872,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (table.isView) {LiNeBrEaKreturn rowCount;LiNeBrEaK}LiNeBrEaKnavigator.beforeFirst();LiNeBrEaK"
		}, {
			"start_line": 957,
			"end_line": 964,
			"code_lines": "if (extraUpdateTables != null) {LiNeBrEaKfor (int i = 0; i < extraUpdateTables.size(); i++) {LiNeBrEaKTable currentTable = (Table) extraUpdateTables.get(i);LiNeBrEaKcurrentTable.fireTriggers(session, Trigger.UPDATE_AFTER,LiNeBrEaKnavigator);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1108,
			"end_line": 1114,
			"code_lines": "} catch (HsqlException e) {LiNeBrEaKString[] info = getConstraintInfo(c);LiNeBrEaKrefiterator.release();LiNeBrEaKthrow Error.error(null, ErrorCode.X_27000,LiNeBrEaKErrorCode.CONSTRAINT, info);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TableWorks.java|",
		"loc": "886",
		"clones": [{
			"start_line": 251,
			"end_line": 258,
			"code_lines": "HsqlName indexName =LiNeBrEaKdatabase.nameManager.newAutoName('IDX',LiNeBrEaKc.getName().name,LiNeBrEaKtable.getSchemaName(),LiNeBrEaKtable.getName(),LiNeBrEaKSchemaObject.INDEX);LiNeBrEaKindex = tn.createAndAddIndexStructure(session, indexName,LiNeBrEaK"
		}, {
			"start_line": 427,
			"end_line": 435,
			"code_lines": "emptySet);LiNeBrEaKmoveData(table, tn, -1, 0);LiNeBrEaKtable = tn;LiNeBrEaKdatabase.schemaManager.addSchemaObject(constraint);LiNeBrEaKsetNewTableInSchema(table);LiNeBrEaKupdateConstraints(table, emptySet);LiNeBrEaKdatabase.schemaManager.recompileDependentObjects(table);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 446,
			"end_line": 453,
			"code_lines": "moveData(table, tn, -1, 0);LiNeBrEaKtable = tn;LiNeBrEaKdatabase.schemaManager.addSchemaObject(constraint);LiNeBrEaKsetNewTableInSchema(table);LiNeBrEaKupdateConstraints(table, emptySet);LiNeBrEaKdatabase.schemaManager.recompileDependentObjects(table);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 631,
			"end_line": 637,
			"code_lines": "setNewTableInSchema(tn);LiNeBrEaKsetNewTablesInSchema(tableSet);LiNeBrEaKupdateConstraints(tn, emptySet);LiNeBrEaKupdateConstraints(tableSet, constraintNameSet);LiNeBrEaKdatabase.schemaManager.recompileDependentObjects(tableSet);LiNeBrEaKdatabase.schemaManager.recompileDependentObjects(tn);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementExpression.java|",
		"loc": "107",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.ParserDQL.CompileContext;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.OrderedHashSet;LiNeBrEaK"
		}, {
			"start_line": 35,
			"end_line": 51,
			"code_lines": "}LiNeBrEaKTableDerived[] getSubqueries(Session session) {LiNeBrEaKOrderedHashSet subQueries = null;LiNeBrEaKif (expression != null) {LiNeBrEaKsubQueries = expression.collectAllSubqueries(subQueries);LiNeBrEaK}LiNeBrEaKif (subQueries == null || subQueries.size() == 0) {LiNeBrEaKreturn TableDerived.emptyArray;LiNeBrEaK}LiNeBrEaKTableDerived[] subQueryArray = new TableDerived[subQueries.size()];LiNeBrEaKsubQueries.toArray(subQueryArray);LiNeBrEaKfor (int i = 0; i < subqueries.length; i++) {LiNeBrEaKsubQueryArray[i].prepareTable();LiNeBrEaK}LiNeBrEaKreturn subQueryArray;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 75,
			"code_lines": "}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKsb.append(Tokens.T_STATEMENT);LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaKif (subqueries.length > 0) {LiNeBrEaKmaterializeSubQueries(session);LiNeBrEaK}LiNeBrEaKresult = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 106,
			"code_lines": "for (int i = 0; i < subqueries.length; i++) {LiNeBrEaKif (subqueries[i].queryExpression != null) {LiNeBrEaKsubqueries[i].queryExpression.getBaseTableNames(set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < routines.length; i++) {LiNeBrEaKset.addAll(routines[i].getTableNamesForRead());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid collectTableNamesForWrite(OrderedHashSet set) {}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputBinary180.java|",
		"loc": "45"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputTextQuoted.java|",
		"loc": "83"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputBinary.java|",
		"loc": "178",
		"clones": [{
			"start_line": 15,
			"end_line": 21,
			"code_lines": "import org.hsqldb.types.IntervalType;LiNeBrEaKimport org.hsqldb.types.JavaObjectData;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaKimport org.hsqldb.types.Types;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputBinary.java|",
		"loc": "301",
		"clones": [{
			"start_line": 237,
			"end_line": 247,
			"code_lines": "case Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputBinary180.java|",
		"loc": "45",
		"clones": [{
			"start_line": 2,
			"end_line": 9,
			"code_lines": "import java.util.Calendar;LiNeBrEaKimport java.util.GregorianCalendar;LiNeBrEaKimport org.hsqldb.HsqlDateTime;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaKimport org.hsqldb.types.Types;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputTextLog.java|",
		"loc": "355",
		"clones": [{
			"start_line": 292,
			"end_line": 301,
			"code_lines": "readFieldPrefix();LiNeBrEaKif (scanner.scanNull()) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKscanner.scanBinaryStringWithQuote();LiNeBrEaKif (scanner.getTokenType() == Tokens.X_MALFORMED_BINARY_STRING) {LiNeBrEaKthrow Error.error(ErrorCode.X_42587);LiNeBrEaK}LiNeBrEaKvalue = scanner.getValue();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputText.java|",
		"loc": "240",
		"clones": [{
			"start_line": 9,
			"end_line": 19,
			"code_lines": "import org.hsqldb.types.BinaryData;LiNeBrEaKimport org.hsqldb.types.BlobData;LiNeBrEaKimport org.hsqldb.types.ClobData;LiNeBrEaKimport org.hsqldb.types.IntervalMonthData;LiNeBrEaKimport org.hsqldb.types.IntervalSecondData;LiNeBrEaKimport org.hsqldb.types.JavaObjectData;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaKimport org.hsqldb.types.Types;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputInterface.java|",
		"loc": "19"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputBinaryDecode.java|",
		"loc": "21"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputTextQuoted.java|",
		"loc": "26"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputBase.java|",
		"loc": "192",
		"clones": [{
			"start_line": 74,
			"end_line": 80,
			"code_lines": "}LiNeBrEaKswitch (type.typeCode) {LiNeBrEaKcase Types.SQL_ALL_TYPES :LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_CHAR :LiNeBrEaKcase Types.SQL_VARCHAR :LiNeBrEaK"
		}, {
			"start_line": 116,
			"end_line": 127,
			"code_lines": "break;LiNeBrEaKcase Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}, {
			"start_line": 174,
			"end_line": 181,
			"code_lines": "mark = 0;LiNeBrEaKreset();LiNeBrEaKif (buffer.length < rowsize) {LiNeBrEaKbuffer = new byte[rowsize];LiNeBrEaK}LiNeBrEaKfilePos   = filepos;LiNeBrEaKsize      = count = rowsize;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputBinaryEncode.java|",
		"loc": "39"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowInputText.java|",
		"loc": "366",
		"clones": [{
			"start_line": 8,
			"end_line": 22,
			"code_lines": "import org.hsqldb.map.ValuePool;LiNeBrEaKimport org.hsqldb.types.BinaryData;LiNeBrEaKimport org.hsqldb.types.BlobData;LiNeBrEaKimport org.hsqldb.types.BlobDataID;LiNeBrEaKimport org.hsqldb.types.ClobData;LiNeBrEaKimport org.hsqldb.types.ClobDataID;LiNeBrEaKimport org.hsqldb.types.IntervalMonthData;LiNeBrEaKimport org.hsqldb.types.IntervalSecondData;LiNeBrEaKimport org.hsqldb.types.IntervalType;LiNeBrEaKimport org.hsqldb.types.JavaObjectData;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaKimport org.hsqldb.types.Types;LiNeBrEaK"
		}, {
			"start_line": 44,
			"end_line": 56,
			"code_lines": "if (fieldSep.endsWith('n')) {LiNeBrEaKfieldSepEnd = true;LiNeBrEaKfieldSep    = fieldSep.substring(0, fieldSep.length() - 1);LiNeBrEaK}LiNeBrEaKif (varSep.endsWith('n')) {LiNeBrEaKvarSepEnd = true;LiNeBrEaKvarSep    = varSep.substring(0, varSep.length() - 1);LiNeBrEaK}LiNeBrEaKif (longvarSep.endsWith('n')) {LiNeBrEaKlongvarSepEnd = true;LiNeBrEaKlongvarSep    = longvarSep.substring(0, longvarSep.length() - 1);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 108,
			"end_line": 118,
			"code_lines": "} catch (Exception e) {LiNeBrEaKObject[] messages = new Object[] {LiNeBrEaKnew Integer(field), e.toString()LiNeBrEaK};LiNeBrEaKthrow new IOException(LiNeBrEaKError.getMessage(LiNeBrEaKErrorCode.M_TEXT_SOURCE_FIELD_ERROR, 0, messages));LiNeBrEaK}LiNeBrEaKreturn s;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 140,
			"end_line": 151,
			"code_lines": "}LiNeBrEaKpublic long readLong() throws IOException {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'RowInputText');LiNeBrEaK}LiNeBrEaKpublic int readType() throws IOException {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKprotected boolean readNull() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKprotected String readChar(Type type) throws IOException {LiNeBrEaK"
		}, {
			"start_line": 184,
			"end_line": 194,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKreturn ValuePool.getInt(Integer.parseInt(s));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 195,
			"end_line": 203,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 206,
			"end_line": 214,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 217,
			"end_line": 225,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 228,
			"end_line": 236,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 239,
			"end_line": 247,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 258,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 262,
			"end_line": 270,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 273,
			"end_line": 282,
			"code_lines": "throws IOException {LiNeBrEaKString s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 286,
			"end_line": 294,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 325,
			"end_line": 333,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 337,
			"end_line": 346,
			"code_lines": "String s = readString();LiNeBrEaKif (s == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKs = s.trim();LiNeBrEaKif (s.length() == 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKlong id = Long.parseLong(s);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputInterface.java|",
		"loc": "30"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputBase.java|",
		"loc": "176",
		"clones": [{
			"start_line": 9,
			"end_line": 19,
			"code_lines": "import org.hsqldb.types.BinaryData;LiNeBrEaKimport org.hsqldb.types.BlobData;LiNeBrEaKimport org.hsqldb.types.ClobData;LiNeBrEaKimport org.hsqldb.types.IntervalMonthData;LiNeBrEaKimport org.hsqldb.types.IntervalSecondData;LiNeBrEaKimport org.hsqldb.types.JavaObjectData;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaKimport org.hsqldb.types.Types;LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 143,
			"code_lines": "break;LiNeBrEaKcase Types.SQL_INTERVAL_DAY :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_DAY_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_HOUR_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE :LiNeBrEaKcase Types.SQL_INTERVAL_MINUTE_TO_SECOND :LiNeBrEaKcase Types.SQL_INTERVAL_SECOND :LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rowio/RowOutputTextLog.java|",
		"loc": "193",
		"clones": [{
			"start_line": 6,
			"end_line": 18,
			"code_lines": "import org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.StringConverter;LiNeBrEaKimport org.hsqldb.types.BinaryData;LiNeBrEaKimport org.hsqldb.types.BlobData;LiNeBrEaKimport org.hsqldb.types.ClobData;LiNeBrEaKimport org.hsqldb.types.IntervalMonthData;LiNeBrEaKimport org.hsqldb.types.IntervalSecondData;LiNeBrEaKimport org.hsqldb.types.JavaObjectData;LiNeBrEaKimport org.hsqldb.types.TimeData;LiNeBrEaKimport org.hsqldb.types.TimestampData;LiNeBrEaKimport org.hsqldb.types.Type;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionAggregate.java|",
		"loc": "204",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayListIdentity;LiNeBrEaKimport org.hsqldb.lib.HsqlList;LiNeBrEaK"
		}, {
			"start_line": 73,
			"end_line": 83,
			"code_lines": "}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 122,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (getLeftNode() != null) {LiNeBrEaKsb.append(' arg=[');LiNeBrEaKsb.append(nodes[LEFT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 136,
			"end_line": 144,
			"code_lines": "return unresolvedSet;LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionColumnAccessor.java|",
		"loc": "92",
		"clones": [{
			"start_line": 63,
			"end_line": 71,
			"code_lines": "}LiNeBrEaKpublic boolean equals(Expression other) {LiNeBrEaKif (other == this) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (other == null) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/SqlFile.java|",
		"loc": "4633",
		"clones": [{
			"start_line": 603,
			"end_line": 611,
			"code_lines": "historize();LiNeBrEaKStatement statement = processSQL();LiNeBrEaKResultSet rs = null;LiNeBrEaKif (statement != null) {LiNeBrEaKtry {LiNeBrEaKrs = statement.getResultSet();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 612,
			"end_line": 621,
			"code_lines": "} catch (SQLException nse) {LiNeBrEaK} finally {LiNeBrEaKstatement = null;LiNeBrEaK}LiNeBrEaKthrow se;LiNeBrEaK}LiNeBrEaKdisplaySqlResults(LiNeBrEaKstatement, rs, null, null, true);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1543,
			"end_line": 1550,
			"code_lines": "iterations = 0;LiNeBrEaKwhile (true) {LiNeBrEaKs = expandBuffer.toString();LiNeBrEaKb = s.indexOf('*{');LiNeBrEaKif (b < 0) break;LiNeBrEaKe = s.indexOf('}', b + 2);LiNeBrEaKif (e == b + 2)LiNeBrEaK"
		}, {
			"start_line": 1742,
			"end_line": 1748,
			"code_lines": "try {LiNeBrEaKif (statement != null) statement.close();LiNeBrEaK} catch (SQLException nse) {LiNeBrEaK} finally {LiNeBrEaKstatement = null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1800,
			"end_line": 1811,
			"code_lines": "}LiNeBrEaK} catch (BreakException be) {LiNeBrEaKString beMessage = be.getMessage();LiNeBrEaKif (beMessage != null && !beMessage.equals('forrows')) throw be;LiNeBrEaK} catch (QuitNow qn) {LiNeBrEaKthrow qn;LiNeBrEaK} catch (RuntimeException re) {LiNeBrEaKthrow re;LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow new BadSpecial(SqltoolRB.pl_block_fail.getString(), e);LiNeBrEaK} finally {LiNeBrEaK"
		}, {
			"start_line": 1817,
			"end_line": 1823,
			"code_lines": "updateUserSettings();LiNeBrEaKsqlExpandMode = null;LiNeBrEaK}LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (tokens[0].equals('foreach')) {LiNeBrEaK"
		}, {
			"start_line": 1848,
			"end_line": 1866,
			"code_lines": "} catch (ContinueException ce) {LiNeBrEaKString ceMessage = ce.getMessage();LiNeBrEaKif (ceMessage != nullLiNeBrEaK&& !ceMessage.equals('foreach')) throw ce;LiNeBrEaK} finally {LiNeBrEaKrecursed = origRecursed;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (BreakException be) {LiNeBrEaKString beMessage = be.getMessage();LiNeBrEaKif (beMessage != null && !beMessage.equals('foreach')) throw be;LiNeBrEaK} catch (QuitNow qn) {LiNeBrEaKthrow qn;LiNeBrEaK} catch (RuntimeException re) {LiNeBrEaKthrow re;LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow new BadSpecial(SqltoolRB.pl_block_fail.getString(), e);LiNeBrEaK} finally {LiNeBrEaK"
		}, {
			"start_line": 1902,
			"end_line": 1908,
			"code_lines": "} finally {LiNeBrEaKrecursed = origRecursed;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (BreakException be) {LiNeBrEaKString beMessage = be.getMessage();LiNeBrEaK"
		}, {
			"start_line": 1928,
			"end_line": 1937,
			"code_lines": "try {LiNeBrEaKscanpass(token.nestedBlock.dup());LiNeBrEaK} catch (ContinueException ce) {LiNeBrEaKString ceMessage = ce.getMessage();LiNeBrEaKif (ceMessage != null && !ceMessage.equals('while'))LiNeBrEaKthrow ce;LiNeBrEaK} finally {LiNeBrEaKrecursed = origRecursed;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1934,
			"end_line": 1940,
			"code_lines": "} finally {LiNeBrEaKrecursed = origRecursed;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (BreakException be) {LiNeBrEaKString beMessage = be.getMessage();LiNeBrEaK"
		}, {
			"start_line": 1942,
			"end_line": 1954,
			"code_lines": "} catch (QuitNow qn) {LiNeBrEaKthrow qn;LiNeBrEaK} catch (BadSpecial bs) {LiNeBrEaKbs.appendMessage(LiNeBrEaKSqltoolRB.pl_malformat_specific.getString('while'));LiNeBrEaKthrow bs;LiNeBrEaK} catch (RuntimeException re) {LiNeBrEaKthrow re;LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow new BadSpecial(LiNeBrEaKSqltoolRB.pl_block_fail.getString(), e);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1988,
			"end_line": 1995,
			"code_lines": "if (!m.matches())LiNeBrEaKthrow new BadSpecial(SqltoolRB.pl_malformat.getString());LiNeBrEaKif (m.groupCount() < 1 || m.group(1) == null) {LiNeBrEaKstdprintln(SqltoolRB.deprecated_noop.getString('*'));LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKString[] tokens = m.group(1).split('s+', -1);LiNeBrEaK"
		}, {
			"start_line": 2033,
			"end_line": 2039,
			"code_lines": "if (tokens[0].equals('break')) {LiNeBrEaKif (tokens.length > 1) {LiNeBrEaKif (tokens.length == 2 &&LiNeBrEaK(tokens[1].equals('foreach')LiNeBrEaK|| tokens[1].equals('forrows')LiNeBrEaK|| tokens[1].equals('while')LiNeBrEaK"
		}, {
			"start_line": 2271,
			"end_line": 2277,
			"code_lines": "{LiNeBrEaK2, 3LiNeBrEaK},LiNeBrEaK{LiNeBrEaK2, 3LiNeBrEaK},LiNeBrEaK"
		}, {
			"start_line": 2301,
			"end_line": 2314,
			"code_lines": "if (rs != null) try {LiNeBrEaKrs.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaK} finally {LiNeBrEaKrs = null;LiNeBrEaK}LiNeBrEaKif (st != null) try {LiNeBrEaKst.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaK} finally {LiNeBrEaKst = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2411,
			"end_line": 2417,
			"code_lines": "+ 'ORDER BY username');LiNeBrEaK} else if (dbProductName.indexOf('PostgreSQL') > -1) {LiNeBrEaKstatement = shared.jdbcConn.createStatement();LiNeBrEaKstatement.execute(LiNeBrEaK'SELECT usename, usesuper FROM pg_catalog.pg_user 'LiNeBrEaK+ 'ORDER BY usename');LiNeBrEaK"
		}, {
			"start_line": 2419,
			"end_line": 2425,
			"code_lines": "statement = shared.jdbcConn.createStatement();LiNeBrEaKstatement.execute(LiNeBrEaK'SELECT name, accdate, fullname FROM syslogins 'LiNeBrEaK+ 'ORDER BY name');LiNeBrEaK} else if (dbProductName.indexOf(LiNeBrEaK'Apache Derby') > -1) {LiNeBrEaK"
		}, {
			"start_line": 2435,
			"end_line": 2449,
			"code_lines": "if (filter != null) {LiNeBrEaKMatcher matcher = dotPattern.matcher(filter);LiNeBrEaKif (matcher.matches()) {LiNeBrEaKfilter = (matcher.group(2).length() > 0)LiNeBrEaK? matcher.group(2) : null;LiNeBrEaKnarrower = 'nWHERE alias_schema = ''LiNeBrEaK+ ((matcher.group(1).length() > 0)LiNeBrEaK? matcher.group(1)LiNeBrEaK: getCurrentSchema()) + ''';LiNeBrEaK}LiNeBrEaK}LiNeBrEaKstatement = shared.jdbcConn.createStatement();LiNeBrEaKstatement.execute(LiNeBrEaK'SELECT alias_schem, alias FROM 'LiNeBrEaK"
		}, {
			"start_line": 2623,
			"end_line": 2629,
			"code_lines": "if (statement != null) try {LiNeBrEaKstatement.close();LiNeBrEaK} catch (SQLException sen) {LiNeBrEaK} finally {LiNeBrEaKstatement = null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3203,
			"end_line": 3209,
			"code_lines": ": fieldArray[j])LiNeBrEaK, false);LiNeBrEaK}LiNeBrEaKcondlPrintln(LS + PRE_TR + '</TR>', true);LiNeBrEaKcondlPrintln('', false);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3250,
			"end_line": 3257,
			"code_lines": "negate = !negate;LiNeBrEaKtokens[1] = '<';LiNeBrEaK}LiNeBrEaKif (tokens[1].equals('<=') || tokens[1].equals('=<')) {LiNeBrEaKnegate = !negate;LiNeBrEaKtokens[1] = '>';LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3584,
			"end_line": 3590,
			"code_lines": "while ((i = workString.indexOf('x' + dig, i)) > -1LiNeBrEaK&& i < workString.length() - 1)LiNeBrEaKworkString = convertNumericEscape(string, i);LiNeBrEaKwhile ((i = workString.indexOf('X' + dig, i)) > -1LiNeBrEaK&& i < workString.length() - 1)LiNeBrEaKworkString = convertNumericEscape(string, i);LiNeBrEaK"
		}, {
			"start_line": 4344,
			"end_line": 4353,
			"code_lines": "if (buffer == null) {LiNeBrEaKstdprintln(nobufferYetString);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKnewVal.append(buffer.val);LiNeBrEaKif (matcher.groupCount() > 1 && matcher.group(2) != nullLiNeBrEaK&& matcher.group(2).length() > 0)LiNeBrEaKnewVal.append(matcher.group(2));LiNeBrEaKnewType = buffer.type;LiNeBrEaK"
		}, {
			"start_line": 4468,
			"end_line": 4478,
			"code_lines": "if (c >= 'a' && c <= 'f') {LiNeBrEaKoctet += 10 + c - 'a';LiNeBrEaK} else if (c >= 'A' && c <= 'F') {LiNeBrEaKoctet += 10 + c - 'A';LiNeBrEaK} else if (c >= '0' && c <= '9') {LiNeBrEaKoctet += c - '0';LiNeBrEaK} else {LiNeBrEaKthrow new NumberFormatException(LiNeBrEaK'Non-hex character in input at offset ' + i + ': ' + c);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 4584,
			"end_line": 4590,
			"code_lines": "char[] readBfr = new char[1024];LiNeBrEaKint i;LiNeBrEaKStringWriter sWriter = new StringWriter();LiNeBrEaKInputStreamReader isr = null;LiNeBrEaKString str;LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 4606,
			"end_line": 4613,
			"code_lines": "SqltoolRB.file_writefail.getString(filePath), e);LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (isr != null) isr.close();LiNeBrEaK} catch (IOException ioe) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/SqlTool.java|",
		"loc": "545",
		"clones": [{
			"start_line": 20,
			"end_line": 27,
			"code_lines": "private static final String revString = '$Revision: 4720 $';LiNeBrEaKprivate static final int revStringLength = revString.length();LiNeBrEaKprivate static final String  revnum =LiNeBrEaK(revStringLength - ' $'.length() > '$Revision: '.length())LiNeBrEaK?  revString.substring('$Revision: '.length(),LiNeBrEaKrevStringLength - ' $'.length())LiNeBrEaK: '<UNTRACKED>';LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/SqlToolSprayer.java|",
		"loc": "101"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/TokenList.java|",
		"loc": "19"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/Token.java|",
		"loc": "88"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/TokenSource.java|",
		"loc": "6"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/SqlFileScanner.java|",
		"loc": "774",
		"clones": [{
			"start_line": 23,
			"end_line": 29,
			"code_lines": "'1101612101611220161013'+LiNeBrEaK'401332015201713214120131'+LiNeBrEaK'1105012011111612611212211310'+LiNeBrEaK'11420127101151241251011710'+LiNeBrEaK'1211236013040120111116126112'+LiNeBrEaK'122113101142012710115124125'+LiNeBrEaK"
		}, {
			"start_line": 33,
			"end_line": 40,
			"code_lines": "'14011221314151617'+LiNeBrEaK'11031111112113214115213'+LiNeBrEaK'1161172201131022110122'+LiNeBrEaK'123122124225122226222227'+LiNeBrEaK'23023123270233100234235'+LiNeBrEaK'102361373014014130242'+LiNeBrEaK'230';LiNeBrEaK"
		}, {
			"start_line": 59,
			"end_line": 74,
			"code_lines": "'0003407001240160021402500304'+LiNeBrEaK'034003740u01180u01340u01500u016c0u01500u0150'+LiNeBrEaK'0u01880u01500u01a40u01c00u01500u01dc0u01f80u0214'+LiNeBrEaK'0u01500u01500u01500u02300u01500u01500u024c0u0268'+LiNeBrEaK'0u01500u01500u02840u01500u02a00u02bc0u02d80u0150'+LiNeBrEaK'0u02f40u03100u032c0u03480u01500u03640u01500u0150'+LiNeBrEaK'0u03800u01500u039c0u03b80u03d40u01500u03f00u0150'+LiNeBrEaK'0u040c0u01500u04280u01500u04440u04600u047c0u0498'+LiNeBrEaK'0u04b40u04d00u02a00u04ec0u01500u05080u05240u0540'+LiNeBrEaK'0u055c0u05780u05940u05b00u05cc0u05e80u01500u0604'+LiNeBrEaK'0u01500u06200u063c0u01500u01500u06580u06740u0690'+LiNeBrEaK'0u01500u01500u06ac0u06c80u06e40u07000u01500u071c'+LiNeBrEaK'0u07380u07540u07700u078c0u07a80u07c40u07e00u07fc'+LiNeBrEaK'0u08180u08340u08500u086c0u08880u08a40u08c00u08dc'+LiNeBrEaK'0u08f80u0914';LiNeBrEaK"
		}, {
			"start_line": 92,
			"end_line": 127,
			"code_lines": "'115116117120121122123124'+LiNeBrEaK'125126415127715130115131'+LiNeBrEaK'132115120133134135136137'+LiNeBrEaK'2331401412233142133143144'+LiNeBrEaK'1361371331451401412233142'+LiNeBrEaK'146147150346142346151146'+LiNeBrEaK'3352153354155305417156157'+LiNeBrEaK'317160161162160163260164'+LiNeBrEaK'25601651661601632601642560'+LiNeBrEaK'1671703260171172160163260'+LiNeBrEaK'164246010173174670117360'+LiNeBrEaK'175340123250124203124120'+LiNeBrEaK'1764001772601100230135360'+LiNeBrEaK'11013501102260144320143144'+LiNeBrEaK'301103250146147150314620'+LiNeBrEaK'15031014611041105346151146'+LiNeBrEaK'110623463352340160354103054'+LiNeBrEaK'2015733016236011073501110'+LiNeBrEaK'260166330170330172330174'+LiNeBrEaK'3105751111267513011123201113'+LiNeBrEaK'3701114150510111152610111021116'+LiNeBrEaK'11173110220110531014611201121'+LiNeBrEaK'34611062546510711222610711101123'+LiNeBrEaK'1124311104751125111126751401126'+LiNeBrEaK'3701127420113040410111311115'+LiNeBrEaK'26101201117330112131041071132'+LiNeBrEaK'11222610720112446011333701134'+LiNeBrEaK'320113514011361137301133370'+LiNeBrEaK'1140400114116011373701142370'+LiNeBrEaK'113327011421301143201144310'+LiNeBrEaK'1145270114631011474201150250'+LiNeBrEaK'1151330115236011532401154350'+LiNeBrEaK'1155450115631011573201160250'+LiNeBrEaK'1161350116214011611136113731161'+LiNeBrEaK'1201161210';LiNeBrEaK"
		}, {
			"start_line": 134,
			"end_line": 140,
			"code_lines": "int i = 0;LiNeBrEaKint j = offset;LiNeBrEaKint l = packed.length();LiNeBrEaKwhile (i < l) {LiNeBrEaKint count = packed.charAt(i++);LiNeBrEaKint value = packed.charAt(i++);LiNeBrEaK"
		}, {
			"start_line": 155,
			"end_line": 162,
			"code_lines": "'140111112111111121111'+LiNeBrEaK'31311112112121111111'+LiNeBrEaK'111011111103111111'+LiNeBrEaK'21111111311111111111'+LiNeBrEaK'11111111701111110011'+LiNeBrEaK'11111111101121130211'+LiNeBrEaK'3011111230';LiNeBrEaK"
		}, {
			"start_line": 169,
			"end_line": 179,
			"code_lines": "int i = 0;LiNeBrEaKint j = offset;LiNeBrEaKint l = packed.length();LiNeBrEaKwhile (i < l) {LiNeBrEaKint count = packed.charAt(i++);LiNeBrEaKint value = packed.charAt(i++);LiNeBrEaKdo result[j++] = value; while (--count > 0);LiNeBrEaK}LiNeBrEaKreturn j;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/FileRecordReader.java|",
		"loc": "87"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/sqltool/Calculator.java|",
		"loc": "293",
		"clones": [{
			"start_line": 166,
			"end_line": 185,
			"code_lines": "i = startAtomIndex;LiNeBrEaKatom = atoms.get(i);LiNeBrEaKif (atom.op != null)LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'Expected initial value expected but got operation 'LiNeBrEaK+ atom.op);LiNeBrEaKwhile (startAtomIndex + remaining > i + 1) {LiNeBrEaKif (startAtomIndex + remaining < i + 3)LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'No operator/operand pairing remaining');LiNeBrEaKnextAtom = atoms.get(i + 1);LiNeBrEaKif (nextAtom.op == null)LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'Operator expected but got value ' + nextAtom.val);LiNeBrEaKop = nextAtom.op;LiNeBrEaKnextAtom = atoms.get(i + 2);LiNeBrEaKif (nextAtom.op != null)LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'Value expected but got operator ' + nextAtom.op);LiNeBrEaK"
		}, {
			"start_line": 186,
			"end_line": 193,
			"code_lines": "i += 2;LiNeBrEaKatom = nextAtom;LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKremaining -= 2;LiNeBrEaKatoms.remove(i + 1);LiNeBrEaKatoms.remove(i + 1);LiNeBrEaK"
		}, {
			"start_line": 236,
			"end_line": 244,
			"code_lines": "uV.put('two', '2');LiNeBrEaKuV.put('three', '3');LiNeBrEaKuV.put('four', '4');LiNeBrEaKuV.put('five', '5');LiNeBrEaKuV.put('six', '6');LiNeBrEaKuV.put('seven', '7');LiNeBrEaKuV.put('eight', '8');LiNeBrEaKuV.put('nine', '9');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/SqlToolError.java|",
		"loc": "17"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/cmdline/SqltoolRB.java|",
		"loc": "285"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TableUtil.java|",
		"loc": "54"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementManager.java|",
		"loc": "171"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementSchema.java|",
		"loc": "1189",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaK"
		}, {
			"start_line": 184,
			"end_line": 190,
			"code_lines": "result = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaK"
		}, {
			"start_line": 440,
			"end_line": 447,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 493,
			"end_line": 499,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 520,
			"end_line": 538,
			"code_lines": "case StatementTypes.DROP_ASSERTION :LiNeBrEaKcase StatementTypes.DROP_CHARACTER_SET :LiNeBrEaKcase StatementTypes.DROP_COLLATION :LiNeBrEaKcase StatementTypes.DROP_TYPE :LiNeBrEaKcase StatementTypes.DROP_DOMAIN :LiNeBrEaKcase StatementTypes.DROP_ROLE :LiNeBrEaKcase StatementTypes.DROP_USER :LiNeBrEaKcase StatementTypes.DROP_ROUTINE :LiNeBrEaKcase StatementTypes.DROP_SCHEMA :LiNeBrEaKcase StatementTypes.DROP_SEQUENCE :LiNeBrEaKcase StatementTypes.DROP_TABLE :LiNeBrEaKcase StatementTypes.DROP_TRANSFORM :LiNeBrEaKcase StatementTypes.DROP_TRANSLATION :LiNeBrEaKcase StatementTypes.DROP_TRIGGER :LiNeBrEaKcase StatementTypes.DROP_CAST :LiNeBrEaKcase StatementTypes.DROP_ORDERING :LiNeBrEaKcase StatementTypes.DROP_VIEW :LiNeBrEaKcase StatementTypes.DROP_INDEX :LiNeBrEaK"
		}, {
			"start_line": 639,
			"end_line": 645,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 686,
			"end_line": 692,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 721,
			"end_line": 728,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 778,
			"end_line": 784,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 804,
			"end_line": 811,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 833,
			"end_line": 840,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 882,
			"end_line": 889,
			"code_lines": "} catch (HsqlException e) {LiNeBrEaKif (ifNotExists != null && ifNotExists.booleanValue()) {LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} else {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 954,
			"end_line": 960,
			"code_lines": "schemaManager.addSchemaObject(type);LiNeBrEaKbreak;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1165,
			"end_line": 1178,
			"code_lines": "if (name.schema == null) {LiNeBrEaKname.schema = schemaName == nullLiNeBrEaK? session.getCurrentSchemaHsqlName()LiNeBrEaK: schemaName;LiNeBrEaK} else {LiNeBrEaKname.schema = session.getSchemaHsqlName(name.schema.name);LiNeBrEaKif (name.schema == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_42505);LiNeBrEaK}LiNeBrEaKif (isSchemaDefinition && schemaName != name.schema) {LiNeBrEaKthrow Error.error(ErrorCode.X_42505);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionArrayAggregate.java|",
		"loc": "275",
		"clones": [{
			"start_line": 40,
			"end_line": 49,
			"code_lines": "}LiNeBrEaKboolean isSelfAggregate() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb   = new StringBuffer(64);LiNeBrEaKString       left = getContextSQL(nodes.length > 0 ? nodes[LEFT]LiNeBrEaK: null);LiNeBrEaKswitch (opType) {LiNeBrEaK"
		}, {
			"start_line": 59,
			"end_line": 74,
			"code_lines": "sb.append(left).append(')');LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionAggregate');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 94,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (getLeftNode() != null) {LiNeBrEaKsb.append(' arg=[');LiNeBrEaKsb.append(nodes[LEFT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic HsqlList resolveColumnReferences(Session session,LiNeBrEaKRangeGroup rangeGroup, int rangeCount, RangeGroup[] rangeGroups,LiNeBrEaKHsqlList unresolvedSet, boolean acceptsSequences) {LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 106,
			"code_lines": "rangeGroup, rangeCount, rangeGroups, null, false);LiNeBrEaKif (conditionSet != null) {LiNeBrEaKExpressionColumn.checkColumnsResolved(conditionSet);LiNeBrEaK}LiNeBrEaKif (unresolvedSet == null) {LiNeBrEaKunresolvedSet = new ArrayListIdentity();LiNeBrEaK}LiNeBrEaKunresolvedSet.add(this);LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 171,
			"code_lines": "return super.equals(other);LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic Object updateAggregatingValue(Session session, Object currValue) {LiNeBrEaKif (!condition.testCondition(session)) {LiNeBrEaKreturn currValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 256,
			"end_line": 266,
			"code_lines": "}LiNeBrEaKpublic Expression getCondition() {LiNeBrEaKreturn condition;LiNeBrEaK}LiNeBrEaKpublic boolean hasCondition() {LiNeBrEaKreturn condition != null && !condition.isTrue();LiNeBrEaK}LiNeBrEaKpublic void setCondition(Expression e) {LiNeBrEaKcondition = e;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowAction.java|",
		"loc": "655",
		"clones": [{
			"start_line": 155,
			"end_line": 161,
			"code_lines": "|| ArrayUtil.haveCommonElement(LiNeBrEaKcolMap, action.changeColumnMap)) {LiNeBrEaKif (!session.tempSet.isEmpty()) {LiNeBrEaKsession.tempSet.clear();LiNeBrEaK}LiNeBrEaKsession.tempSet.add(action);LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 169,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (action.next == null) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKaction = action.next;LiNeBrEaK"
		}, {
			"start_line": 380,
			"end_line": 386,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKaction = action.next;LiNeBrEaK} while (action != null);LiNeBrEaKreturn actionType;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 397,
			"end_line": 411,
			"code_lines": "if (action.type == ACTION_DELETE) {LiNeBrEaKif (actionType == ACTION_INSERT) {LiNeBrEaKactionType = ACTION_INSERT_DELETE;LiNeBrEaK} else {LiNeBrEaKactionType = action.type;LiNeBrEaK}LiNeBrEaK} else if (action.type == ACTION_INSERT) {LiNeBrEaKactionType = action.type;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKaction = action.next;LiNeBrEaK} while (action != null);LiNeBrEaKreturn actionType;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 487,
			"end_line": 501,
			"code_lines": "if (tail != null) {LiNeBrEaKtail.next = null;LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKif (head == null) {LiNeBrEaKhead = tail = action;LiNeBrEaK} else {LiNeBrEaKtail.next = action;LiNeBrEaKtail      = action;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKaction = action.next;LiNeBrEaK} while (action != null);LiNeBrEaKif (head == null) {LiNeBrEaK"
		}, {
			"start_line": 594,
			"end_line": 603,
			"code_lines": "if (mode == TransactionManager.ACTION_READ) {LiNeBrEaKactionType = action.ACTION_DELETE;LiNeBrEaK} else if (mode == TransactionManager.ACTION_DUP) {LiNeBrEaKactionType = ACTION_INSERT;LiNeBrEaKsession.tempSet.clear();LiNeBrEaKsession.tempSet.add(action);LiNeBrEaK} else if (mode == TransactionManager.ACTION_REF) {LiNeBrEaKactionType = ACTION_DELETE;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowDiskDataChange.java|",
		"loc": "93"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionAccessor.java|",
		"loc": "113",
		"clones": [{
			"start_line": 25,
			"end_line": 34,
			"code_lines": "}LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 99,
			"code_lines": "return sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 100,
			"end_line": 112,
			"code_lines": "if (getLeftNode() != null) {LiNeBrEaKsb.append(' array=[');LiNeBrEaKsb.append(nodes[LEFT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKif (getRightNode() != null) {LiNeBrEaKsb.append(' array_index=[');LiNeBrEaKsb.append(nodes[RIGHT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionLogical.java|",
		"loc": "1727",
		"clones": [{
			"start_line": 67,
			"end_line": 73,
			"code_lines": "case OpTypes.MATCH_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_FULL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_FULL :LiNeBrEaK"
		}, {
			"start_line": 100,
			"end_line": 106,
			"code_lines": "dataType = Type.SQL_BOOLEAN;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionLogical');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 147,
			"end_line": 157,
			"code_lines": "case OpTypes.VALUE :LiNeBrEaKcase OpTypes.DYNAMIC_PARAM :LiNeBrEaKcase OpTypes.PARAMETER :LiNeBrEaKcase OpTypes.VARIABLE :LiNeBrEaKisSingleColumnCondition = true;LiNeBrEaKif (opType == OpTypes.EQUAL) {LiNeBrEaKisSingleColumnEqual = true;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 180,
			"end_line": 186,
			"code_lines": "if (e1 == null) {LiNeBrEaKreturn e2;LiNeBrEaK}LiNeBrEaKif (e2 == null) {LiNeBrEaKreturn e1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 316,
			"end_line": 334,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionLogical');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKsb.append('VALUE = ').append(LiNeBrEaKdataType.convertToSQLString(valueData));LiNeBrEaKsb.append(', TYPE = ').append(dataType.getNameString());LiNeBrEaKreturn sb.toString();LiNeBrEaK"
		}, {
			"start_line": 369,
			"end_line": 375,
			"code_lines": "case OpTypes.MATCH_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_FULL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_FULL :LiNeBrEaK"
		}, {
			"start_line": 392,
			"end_line": 405,
			"code_lines": "}LiNeBrEaKif (getLeftNode() != null) {LiNeBrEaKsb.append(' arg_left=[');LiNeBrEaKsb.append(nodes[LEFT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKif (getRightNode() != null) {LiNeBrEaKsb.append(' arg_right=[');LiNeBrEaKsb.append(nodes[RIGHT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 419,
			"end_line": 427,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 433,
			"end_line": 439,
			"code_lines": "case OpTypes.EQUAL :LiNeBrEaKcase OpTypes.GREATER_EQUAL :LiNeBrEaKcase OpTypes.GREATER_EQUAL_PRE :LiNeBrEaKcase OpTypes.GREATER :LiNeBrEaKcase OpTypes.SMALLER :LiNeBrEaKcase OpTypes.SMALLER_EQUAL :LiNeBrEaK"
		}, {
			"start_line": 462,
			"end_line": 468,
			"code_lines": "resolveTypesForLogicalOp();LiNeBrEaKif (nodes[LEFT].opType == OpTypes.VALUE) {LiNeBrEaKif (nodes[RIGHT].opType == OpTypes.VALUE) {LiNeBrEaKsetAsConstantValue(session, parent);LiNeBrEaK} else {LiNeBrEaKObject value = nodes[LEFT].getValue(session);LiNeBrEaK"
		}, {
			"start_line": 554,
			"end_line": 561,
			"code_lines": "break;LiNeBrEaKcase OpTypes.MATCH_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_FULL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_FULL :LiNeBrEaK"
		}, {
			"start_line": 565,
			"end_line": 571,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionLogical');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 647,
			"end_line": 655,
			"code_lines": "if (session.database.sqlEnforceTypes) {LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKif (nodes[LEFT].dataType.canConvertFrom(LiNeBrEaKnodes[RIGHT].dataType)) {LiNeBrEaKnodes[RIGHT] = ExpressionOp.getCastExpression(session,LiNeBrEaKnodes[RIGHT], nodes[LEFT].dataType);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 656,
			"end_line": 664,
			"code_lines": "if (session.database.sqlEnforceTypes) {LiNeBrEaKthrow Error.error(ErrorCode.X_42562);LiNeBrEaK}LiNeBrEaKif (nodes[RIGHT].dataType.canConvertFrom(LiNeBrEaKnodes[LEFT].dataType)) {LiNeBrEaKnodes[LEFT] = ExpressionOp.getCastExpression(session,LiNeBrEaKnodes[LEFT], nodes[RIGHT].dataType);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 843,
			"end_line": 854,
			"code_lines": "}LiNeBrEaKpublic Object getValue(Session session) {LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKreturn valueData;LiNeBrEaKcase OpTypes.SIMPLE_COLUMN : {LiNeBrEaKObject value =LiNeBrEaKsession.sessionContext.rangeIterators[rangePosition]LiNeBrEaK.getCurrent(columnIndex);LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 974,
			"end_line": 980,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionLogical');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1085,
			"end_line": 1092,
			"code_lines": "return result < 0 ? Boolean.TRUELiNeBrEaK: Boolean.FALSE;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionLogical');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1194,
			"end_line": 1203,
			"code_lines": "if (hasMatch) {LiNeBrEaKreturn Boolean.FALSE;LiNeBrEaK}LiNeBrEaKhasMatch = true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn hasMatch ? Boolean.TRUELiNeBrEaK: Boolean.FALSE;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1209,
			"end_line": 1215,
			"code_lines": "}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.MATCH_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_FULL :LiNeBrEaKreturn Boolean.TRUE;LiNeBrEaK"
		}, {
			"start_line": 1482,
			"end_line": 1488,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1629,
			"end_line": 1636,
			"code_lines": "case OpTypes.IN :LiNeBrEaKcase OpTypes.MATCH_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_FULL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_SIMPLE :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_PARTIAL :LiNeBrEaKcase OpTypes.MATCH_UNIQUE_FULL :LiNeBrEaK"
		}, {
			"start_line": 1662,
			"end_line": 1668,
			"code_lines": "PersistentStore store =LiNeBrEaKrangeVar.rangeTable.getRowStore(session);LiNeBrEaKcost = store.elementCount();LiNeBrEaKif (cost < Index.minimumSelectivity) {LiNeBrEaKcost = Index.minimumSelectivity;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/DatabaseManager.java|",
		"loc": "285",
		"clones": [{
			"start_line": 177,
			"end_line": 189,
			"code_lines": "Object  key = path;LiNeBrEaKHashMap databaseMap;LiNeBrEaKif (type == DatabaseURL.S_FILE) {LiNeBrEaKdatabaseMap = fileDatabaseMap;LiNeBrEaKkey         = filePathToKey(path);LiNeBrEaK} else if (type == DatabaseURL.S_RES) {LiNeBrEaKdatabaseMap = resDatabaseMap;LiNeBrEaK} else if (type == DatabaseURL.S_MEM) {LiNeBrEaKdatabaseMap = memDatabaseMap;LiNeBrEaK} else {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'DatabaseManager');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 201,
			"end_line": 211,
			"code_lines": "if (type == DatabaseURL.S_FILE) {LiNeBrEaKdatabaseMap = fileDatabaseMap;LiNeBrEaKkey         = filePathToKey(path);LiNeBrEaK} else if (type == DatabaseURL.S_RES) {LiNeBrEaKdatabaseMap = resDatabaseMap;LiNeBrEaK} else if (type == DatabaseURL.S_MEM) {LiNeBrEaKdatabaseMap = memDatabaseMap;LiNeBrEaK} else {LiNeBrEaKthrow (Error.runtimeError(ErrorCode.U_S0500, 'DatabaseManager'));LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SchemaObject.java|",
		"loc": "82"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/OdbcUtil.java|",
		"loc": "205",
		"clones": [{
			"start_line": 102,
			"end_line": 110,
			"code_lines": "new String[] { 'DateStyle', 'ISO, MDY' },LiNeBrEaKnew String[] { 'integer_datetimes', 'on' },LiNeBrEaKnew String[] { 'is_superuser', 'on' },LiNeBrEaKnew String[] { 'server_encoding', 'SQL_ASCII' },LiNeBrEaKnew String[] { 'server_version', '8.3.1' },LiNeBrEaKnew String[] { 'session_authorization', 'blaine' },LiNeBrEaKnew String[] { 'standard_conforming_strings', 'off' },LiNeBrEaKnew String[] { 'TimeZone', 'US/Eastern' },LiNeBrEaK"
		}, {
			"start_line": 167,
			"end_line": 179,
			"code_lines": "char c;LiNeBrEaKint octet;LiNeBrEaKfor (int i = 0; i < chars; i++) {LiNeBrEaKoctet = 0;LiNeBrEaKc = hexChars.charAt(i);LiNeBrEaKif (c >= 'a' && c <= 'f') {LiNeBrEaKoctet += 10 + c - 'a';LiNeBrEaK} else if (c >= 'A' && c <= 'F') {LiNeBrEaKoctet += 10 + c - 'A';LiNeBrEaK} else if (c >= '0' && c <= '9') {LiNeBrEaKoctet += c - '0';LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 180,
			"end_line": 194,
			"code_lines": "'Non-hex character in input at offset ' + i + ': ' + c);LiNeBrEaK}LiNeBrEaKoctet = octet << 4;LiNeBrEaKc = hexChars.charAt(++i);LiNeBrEaKif (c >= 'a' && c <= 'f') {LiNeBrEaKoctet += 10 + c - 'a';LiNeBrEaK} else if (c >= 'A' && c <= 'F') {LiNeBrEaKoctet += 10 + c - 'A';LiNeBrEaK} else if (c >= '0' && c <= '9') {LiNeBrEaKoctet += c - '0';LiNeBrEaK} else {LiNeBrEaKthrow new IllegalArgumentException(LiNeBrEaK'Non-hex character in input at offset ' + i + ': ' + c);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/HsqlServerFactory.java|",
		"loc": "36"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/HsqlSocketFactorySecure.java|",
		"loc": "174",
		"clones": [{
			"start_line": 56,
			"end_line": 65,
			"code_lines": "if (Error.TRACESYSTEMOUT) {LiNeBrEaKError.printSystemOut('[' + this + ']: createServerSocket()');LiNeBrEaKError.printSystemOut('capabilities for ' + ss + ':');LiNeBrEaKError.printSystemOut('----------------------------');LiNeBrEaKdump('supported cipher suites', ss.getSupportedCipherSuites());LiNeBrEaKdump('enabled cipher suites', ss.getEnabledCipherSuites());LiNeBrEaK}LiNeBrEaKreturn ss;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/Server.java|",
		"loc": "1112",
		"clones": [{
			"start_line": 285,
			"end_line": 292,
			"code_lines": "try {LiNeBrEaKsetProperties(p);LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow Error.error(e, ErrorCode.GENERAL_ERROR,LiNeBrEaKErrorCode.M_Message_Pair,LiNeBrEaKnew String[]{ 'Failed to set properties' });LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 486,
			"end_line": 492,
			"code_lines": "synchronized (serverConnSet) {LiNeBrEaKarray = new ServerConnection[serverConnSet.size()];LiNeBrEaKserverConnSet.toArray(array);LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < array.length; i++) {LiNeBrEaKServerConnection sc = array[i];LiNeBrEaK"
		}, {
			"start_line": 700,
			"end_line": 706,
			"code_lines": "HsqlException e = Error.error(ErrorCode.GENERAL_ERROR,LiNeBrEaK'invalid database path');LiNeBrEaKprintError('invalid database path');LiNeBrEaKsetServerError(e);LiNeBrEaKthrow e;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/ServerConfiguration.java|",
		"loc": "139",
		"clones": [{
			"start_line": 62,
			"end_line": 74,
			"code_lines": "addrs = InetAddress.getAllByName(addr.getHostAddress());LiNeBrEaKfor (int i = 0; i < addrs.length; i++) {LiNeBrEaKset.add(addrs[i].getHostAddress());LiNeBrEaKset.add(addrs[i].getHostName());LiNeBrEaK}LiNeBrEaKaddrs = InetAddress.getAllByName(addr.getHostName());LiNeBrEaKfor (int i = 0; i < addrs.length; i++) {LiNeBrEaKset.add(addrs[i].getHostAddress());LiNeBrEaKset.add(addrs[i].getHostName());LiNeBrEaK}LiNeBrEaK} catch (Exception e) {}LiNeBrEaKtry {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/WebServerConnection.java|",
		"loc": "345"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/HsqlSocketFactory.java|",
		"loc": "74"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/HsqlSocketRequestHandler.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/StatementPortal.java|",
		"loc": "73"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/Servlet.java|",
		"loc": "166"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/OdbcPacketOutputStream.java|",
		"loc": "71"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/OdbcPacketInputStream.java|",
		"loc": "132"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/ServerConstants.java|",
		"loc": "29"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/ServerAcl.java|",
		"loc": "320"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/ServerConnection.java|",
		"loc": "1194",
		"clones": [{
			"start_line": 368,
			"end_line": 377,
			"code_lines": "outPacket.writeShort(4);LiNeBrEaKoutPacket.writeInt(-1);LiNeBrEaKoutPacket.writeShort(0);LiNeBrEaKoutPacket.xmit('T', dataOutput);LiNeBrEaKoutPacket.write('SELECT');LiNeBrEaKoutPacket.xmit('C', dataOutput);LiNeBrEaKsendReadyForQuery = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 488,
			"end_line": 495,
			"code_lines": "}LiNeBrEaKoutPacket.write('DEALLOCATE');LiNeBrEaKoutPacket.xmit('C', dataOutput);LiNeBrEaKsendReadyForQuery = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (normalized.startsWith('set client_encoding to ')) {LiNeBrEaK"
		}, {
			"start_line": 652,
			"end_line": 658,
			"code_lines": "outPacket.writeInt(pgTypes[i].getOid());LiNeBrEaKoutPacket.writeShort(pgTypes[i].getTypeWidth());LiNeBrEaKoutPacket.writeInt(pgTypes[i].getLPConstraint());LiNeBrEaKoutPacket.writeShort(0);LiNeBrEaK}LiNeBrEaKoutPacket.xmit('T', dataOutput);LiNeBrEaK"
		}, {
			"start_line": 762,
			"end_line": 772,
			"code_lines": "case ResultConstants.DATA :LiNeBrEaKbreak;LiNeBrEaKcase ResultConstants.ERROR :LiNeBrEaKthrow new RecoverableOdbcFailure(rOut);LiNeBrEaKdefault :LiNeBrEaKthrow new RecoverableOdbcFailure(LiNeBrEaK'Output Result from Portal execution is of 'LiNeBrEaK+ 'unexpected type: ' + rOut.getType());LiNeBrEaK}LiNeBrEaKRowSetNavigator navigator = rOut.getNavigator();LiNeBrEaK"
		}, {
			"start_line": 774,
			"end_line": 780,
			"code_lines": "while (navigator.next()) {LiNeBrEaKrowNum++;LiNeBrEaKObject[] rowData = navigator.getCurrent();LiNeBrEaKif (rowData == null) {LiNeBrEaKthrow new RecoverableOdbcFailure('Null row?');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 795,
			"end_line": 803,
			"code_lines": "if (rowData[i] == null) {LiNeBrEaKoutPacket.writeInt(-1);LiNeBrEaK} else {LiNeBrEaKdataString =LiNeBrEaKpgTypes[i].valueString(rowData[i]);LiNeBrEaKoutPacket.writeSized(dataString);LiNeBrEaKif (server.isTrace()) {LiNeBrEaKserver.printWithThread(LiNeBrEaK"
		}, {
			"start_line": 804,
			"end_line": 811,
			"code_lines": "+ rowData[i].getClass().getName()LiNeBrEaK+ ') [' + dataString + ']');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKoutPacket.xmit('D', dataOutput);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 819,
			"end_line": 826,
			"code_lines": "c      = inPacket.readByteChar();LiNeBrEaKhandle = inPacket.readString();LiNeBrEaKodbcPs = null;LiNeBrEaKportal = null;LiNeBrEaKif (c == 'S') {LiNeBrEaKodbcPs = (OdbcPreparedStatement) sessionOdbcPsMap.get(LiNeBrEaKhandle);LiNeBrEaK"
		}, {
			"start_line": 835,
			"end_line": 842,
			"code_lines": "} else {LiNeBrEaKthrow new RecoverableOdbcFailure(LiNeBrEaKnull,LiNeBrEaK'Description packet request type invalid: ' + c,LiNeBrEaK'08P01');LiNeBrEaK}LiNeBrEaKif (server.isTrace()) {LiNeBrEaK"
		}, {
			"start_line": 1170,
			"end_line": 1178,
			"code_lines": "break;LiNeBrEaKcase ResultConstants.ERROR :LiNeBrEaKthrow new RecoverableOdbcFailure(rOut);LiNeBrEaKdefault :LiNeBrEaKthrow new RecoverableOdbcFailure(LiNeBrEaK'Output Result from execution is of 'LiNeBrEaK+ 'unexpected type: ' + rOut.getType());LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/OdbcPreparedStatement.java|",
		"loc": "55"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/RecoverableOdbcFailure.java|",
		"loc": "34"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/ServerProperties.java|",
		"loc": "197"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/WebServer.java|",
		"loc": "75",
		"clones": [{
			"start_line": 10,
			"end_line": 26,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) {LiNeBrEaKHsqlProperties argProps = null;LiNeBrEaKargProps = HsqlProperties.argArrayToProps(args,LiNeBrEaKServerProperties.sc_key_prefix);LiNeBrEaKString[] errors = argProps.getErrorKeys();LiNeBrEaKif (errors.length != 0) {LiNeBrEaKSystem.out.println('no value for argument:' + errors[0]);LiNeBrEaKprintHelp('webserver.help');LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKString propsPath = argProps.getProperty(ServerProperties.sc_key_props);LiNeBrEaKString propsExtension = '';LiNeBrEaKif (propsPath == null) {LiNeBrEaKpropsPath      = 'webserver';LiNeBrEaKpropsExtension = '.properties';LiNeBrEaK"
		}, {
			"start_line": 39,
			"end_line": 49,
			"code_lines": "try {LiNeBrEaKserver.setProperties(props);LiNeBrEaK} catch (Exception e) {LiNeBrEaKserver.printError('Failed to set properties');LiNeBrEaKserver.printStackTrace(e);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKserver.print('Startup sequence initiated from main() method');LiNeBrEaKif (fileProps != null) {LiNeBrEaKserver.print('Loaded properties from [' + propsPathLiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 56,
			"code_lines": "} else {LiNeBrEaKserver.print('Could not load properties from file');LiNeBrEaKserver.print('Using cli/default properties only');LiNeBrEaK}LiNeBrEaKserver.start();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/server/PgType.java|",
		"loc": "328",
		"clones": [{
			"start_line": 179,
			"end_line": 185,
			"code_lines": "case Types.SQL_DATE :LiNeBrEaKcase Types.SQL_TIME_WITH_TIME_ZONE :LiNeBrEaKcase Types.SQL_TIMESTAMP_WITH_TIME_ZONE :LiNeBrEaKcase Types.SQL_TIME :LiNeBrEaKcase Types.SQL_TIMESTAMP : {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 190,
			"end_line": 201,
			"code_lines": "}LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKcase Types.SQL_REAL :LiNeBrEaKcase Types.SQL_FLOAT :LiNeBrEaKcase Types.SQL_DOUBLE :LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 200,
			"end_line": 206,
			"code_lines": "try {LiNeBrEaKo = hType.convertToType(session, o, Type.SQL_VARCHAR);LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKPgType.throwError(e);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/HsqlDateTime.java|",
		"loc": "575",
		"clones": [{
			"start_line": 65,
			"end_line": 71,
			"code_lines": "return d.getTime() / 1000;LiNeBrEaK}LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow Error.error(ErrorCode.X_22007);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 178,
			"end_line": 184,
			"code_lines": "synchronized (cal) {LiNeBrEaKsetTimeInMillis(cal, t);LiNeBrEaKresetToTime(cal);LiNeBrEaKreturn getTimeInMillis(cal);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 360,
			"end_line": 367,
			"code_lines": "if (matchIndex >= 0) {LiNeBrEaKthrow Error.error(ErrorCode.X_22511);LiNeBrEaK}LiNeBrEaKmatchIndex = javaPattern.indexOf('*W');LiNeBrEaKif (matchIndex >= 0) {LiNeBrEaKthrow Error.error(ErrorCode.X_22511);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementDMQL.java|",
		"loc": "498",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hsqldb.ParserDQL.CompileContext;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaKimport org.hsqldb.lib.HashSet;LiNeBrEaKimport org.hsqldb.lib.OrderedHashSet;LiNeBrEaK"
		}, {
			"start_line": 160,
			"end_line": 166,
			"code_lines": "}LiNeBrEaKif (subQueries == null || subQueries.size() == 0) {LiNeBrEaKreturn TableDerived.emptyArray;LiNeBrEaK}LiNeBrEaKTableDerived[] subQueryArray = new TableDerived[subQueries.size()];LiNeBrEaKsubQueries.toArray(subQueryArray);LiNeBrEaK"
		}, {
			"start_line": 377,
			"end_line": 387,
			"code_lines": "appendTable(sb).append('n');LiNeBrEaKappendCondition(session, sb);LiNeBrEaKfor (int i = 0; i < targetRangeVariables.length; i++) {LiNeBrEaKsb.append(targetRangeVariables[i].describe(session,LiNeBrEaKblanks)).append('n');LiNeBrEaK}LiNeBrEaKappendParms(sb).append('n');LiNeBrEaKappendSubqueries(session, sb, 2).append(']');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 396,
			"end_line": 407,
			"code_lines": "appendColumns(sb, updateColumnMap).append('n');LiNeBrEaKappendTable(sb).append('n');LiNeBrEaKappendCondition(session, sb);LiNeBrEaKfor (int i = 0; i < targetRangeVariables.length; i++) {LiNeBrEaKsb.append(targetRangeVariables[i].describe(session,LiNeBrEaKblanks)).append('n');LiNeBrEaK}LiNeBrEaKappendParms(sb).append('n');LiNeBrEaKappendSubqueries(session, sb, 2).append(']');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Schema.java|",
		"loc": "240",
		"clones": [{
			"start_line": 61,
			"end_line": 69,
			"code_lines": "}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SchemaManager.java|",
		"loc": "2014",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.HashMappedList;LiNeBrEaKimport org.hsqldb.lib.HsqlArrayList;LiNeBrEaKimport org.hsqldb.lib.Iterator;LiNeBrEaK"
		}, {
			"start_line": 242,
			"end_line": 248,
			"code_lines": "}LiNeBrEaKreturn schema.getName();LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 256,
			"end_line": 263,
			"code_lines": "throw Error.error(ErrorCode.X_3F000, name);LiNeBrEaK}LiNeBrEaKreturn schema.getName();LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 430,
			"end_line": 437,
			"code_lines": "HsqlName[] array = new HsqlName[names.size()];LiNeBrEaKnames.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 616,
			"end_line": 628,
			"code_lines": "Table      t = c.getMain();LiNeBrEaKif (t != table) {LiNeBrEaKtableSet.add(t);LiNeBrEaK}LiNeBrEaKt = c.getRef();LiNeBrEaKif (t != table) {LiNeBrEaKtableSet.add(t);LiNeBrEaK}LiNeBrEaKconstraintNameSet.add(c.getMainName());LiNeBrEaKconstraintNameSet.add(c.getRefName());LiNeBrEaKindexNameSet.add(c.getRefIndex().getName());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 729,
			"end_line": 756,
			"code_lines": "Session session = database.sessionManager.getSysSession();LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName name = (HsqlName) set.get(i);LiNeBrEaKswitch (name.type) {LiNeBrEaKcase SchemaObject.VIEW :LiNeBrEaKcase SchemaObject.CONSTRAINT :LiNeBrEaKcase SchemaObject.ASSERTION :LiNeBrEaKcase SchemaObject.ROUTINE :LiNeBrEaKcase SchemaObject.PROCEDURE :LiNeBrEaKcase SchemaObject.FUNCTION :LiNeBrEaKcase SchemaObject.SPECIFIC_ROUTINE :LiNeBrEaKSchemaObject object = getSchemaObject(name);LiNeBrEaKobject.compile(session, null);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (Error.TRACE) {LiNeBrEaKHsqlArrayList list = getAllTables(false);LiNeBrEaKfor (int i = 0; i < list.size(); i++) {LiNeBrEaKTable t = (Table) list.get(i);LiNeBrEaKt.verifyConstraintsIntegrity();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 801,
			"end_line": 811,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (raise) {LiNeBrEaKthrow Error.error(ErrorCode.X_42501, name);LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 812,
			"end_line": 829,
			"code_lines": "readLock.lock();LiNeBrEaKtry {LiNeBrEaKSchema schema = (Schema) schemaMap.get(schemaName);LiNeBrEaKif (schema != null) {LiNeBrEaKSchemaObject object = schema.typeLookup.getObject(name);LiNeBrEaKif (object != null) {LiNeBrEaKreturn (Type) object;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (raise) {LiNeBrEaKthrow Error.error(ErrorCode.X_42501, name);LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 836,
			"end_line": 847,
			"code_lines": "return (Type) object;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (raise) {LiNeBrEaKthrow Error.error(ErrorCode.X_42501, name);LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 848,
			"end_line": 854,
			"code_lines": "boolean raise) {LiNeBrEaKreadLock.lock();LiNeBrEaKtry {LiNeBrEaKSchema schema = (Schema) schemaMap.get(schemaName);LiNeBrEaKif (schema != null) {LiNeBrEaKSchemaObject object = schema.typeLookup.getObject(name);LiNeBrEaK"
		}, {
			"start_line": 855,
			"end_line": 866,
			"code_lines": "return (Type) object;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (raise) {LiNeBrEaKthrow Error.error(ErrorCode.X_42501, name);LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 903,
			"end_line": 909,
			"code_lines": "readLock.lock();LiNeBrEaKtry {LiNeBrEaKSchema schema = (Schema) schemaMap.get(schemaName);LiNeBrEaKif (schema == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 950,
			"end_line": 956,
			"code_lines": "objectName = set.getName(name);LiNeBrEaKif (objectName == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKtable =LiNeBrEaK(Table) schema.tableList.get(objectName.parent.name);LiNeBrEaK"
		}, {
			"start_line": 961,
			"end_line": 968,
			"code_lines": "set        = schema.indexLookup;LiNeBrEaKobjectName = set.getName(name);LiNeBrEaKif (objectName == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKtable =LiNeBrEaK(Table) schema.tableList.get(objectName.parent.name);LiNeBrEaK"
		}, {
			"start_line": 1037,
			"end_line": 1043,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1113,
			"end_line": 1121,
			"code_lines": "if (set == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < set.size(); i++) {LiNeBrEaKHsqlName referenced = (HsqlName) set.get(i);LiNeBrEaKif (object instanceof Routine) {LiNeBrEaKname = ((Routine) object).getSpecificName();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1156,
			"end_line": 1162,
			"code_lines": "}LiNeBrEaKreturn set;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1174,
			"end_line": 1180,
			"code_lines": "}LiNeBrEaKreturn set;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1332,
			"end_line": 1338,
			"code_lines": "}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1386,
			"end_line": 1393,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKrefName = null;LiNeBrEaK}LiNeBrEaKif (refName == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1448,
			"end_line": 1454,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1588,
			"end_line": 1597,
			"code_lines": "RoutineSchema routine =LiNeBrEaK(RoutineSchema) set.getObject(name.name);LiNeBrEaKobject = routine;LiNeBrEaKRoutine[] specifics = routine.getSpecificRoutines();LiNeBrEaKfor (int i = 0; i < specifics.length; i++) {LiNeBrEaKremoveSchemaObject(specifics[i].getSpecificName());LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1640,
			"end_line": 1646,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'SchemaManager');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1729,
			"end_line": 1743,
			"code_lines": "}LiNeBrEaKwhile (true) {LiNeBrEaKIterator it = unresolved.iterator();LiNeBrEaKif (!it.hasNext()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKOrderedHashSet newResolved = new OrderedHashSet();LiNeBrEaKSchemaObjectSet.addAllSQL(resolved, unresolved, list, it,LiNeBrEaKnewResolved);LiNeBrEaKunresolved.removeAll(newResolved);LiNeBrEaKif (newResolved.size() == 0) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1757,
			"end_line": 1768,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKschemas = schemaMap.values().iterator();LiNeBrEaKwhile (schemas.hasNext()) {LiNeBrEaKSchema schema = (Schema) schemas.next();LiNeBrEaKif (SqlInvariants.isLobsSchemaName(schema.getName().name)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (SqlInvariants.isSystemSchemaName(schema.getName().name)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1816,
			"end_line": 1824,
			"code_lines": "}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1825,
			"end_line": 1831,
			"code_lines": "readLock.lock();LiNeBrEaKtry {LiNeBrEaKHsqlArrayList tableList = getAllTables(false);LiNeBrEaKHsqlArrayList list      = new HsqlArrayList();LiNeBrEaKfor (int i = 0; i < tableList.size(); i++) {LiNeBrEaKTable t = (Table) tableList.get(i);LiNeBrEaK"
		}, {
			"start_line": 1833,
			"end_line": 1845,
			"code_lines": "if (ddl != null) {LiNeBrEaKlist.add(ddl);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1858,
			"end_line": 1867,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1924,
			"end_line": 1933,
			"code_lines": "list.add(sb.toString());LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1957,
			"end_line": 1963,
			"code_lines": "list.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Tokens.java|",
		"loc": "2486"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserCommand.java|",
		"loc": "1616",
		"clones": [{
			"start_line": 372,
			"end_line": 383,
			"code_lines": "args);LiNeBrEaK}LiNeBrEaKif (!e.getDataType().isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_0P000);LiNeBrEaK}LiNeBrEaKif (e.getType() != OpTypes.VALUELiNeBrEaK&& (e.getType() != OpTypes.SQL_FUNCTIONLiNeBrEaK|| !((FunctionSQL) e).isValueFunction())) {LiNeBrEaKthrow Error.error(ErrorCode.X_0P000);LiNeBrEaK}LiNeBrEaKExpression[] args = new Expression[]{ e };LiNeBrEaK"
		}, {
			"start_line": 395,
			"end_line": 402,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 414,
			"end_line": 429,
			"code_lines": "HsqlArrayList charsets = null;LiNeBrEaKif (readIfThis(Tokens.FOR)) {LiNeBrEaKcharsets = new HsqlArrayList();LiNeBrEaKwhile (true) {LiNeBrEaKSchemaObject charset =LiNeBrEaKreadSchemaObjectName(SchemaObject.CHARSET);LiNeBrEaKcharsets.add(charset);LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKObject[] args = new Object[] {LiNeBrEaK"
		}, {
			"start_line": 486,
			"end_line": 502,
			"code_lines": "readThis(Tokens.TYPE);LiNeBrEaKint type = TableBase.MEMORY_TABLE;LiNeBrEaKswitch (token.tokenType) {LiNeBrEaKcase Tokens.MEMORY :LiNeBrEaKbreak;LiNeBrEaKcase Tokens.CACHED :LiNeBrEaKtype = TableBase.CACHED_TABLE;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKObject[] args = new Object[]{ ValuePool.getInt(type) };LiNeBrEaKreturn new StatementCommand(LiNeBrEaKStatementTypes.SET_DATABASE_DEFAULT_TABLE_TYPE, args);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1074,
			"end_line": 1092,
			"code_lines": "int delay = 0;LiNeBrEaKif (token.tokenType == Tokens.TRUE) {LiNeBrEaKdelay = database.getProperties().getDefaultWriteDelay();LiNeBrEaKread();LiNeBrEaK} else if (token.tokenType == Tokens.FALSE) {LiNeBrEaKdelay = 0;LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKdelay = this.readInteger();LiNeBrEaKif (delay < 0) {LiNeBrEaKdelay = 0;LiNeBrEaK}LiNeBrEaKif (token.tokenType == Tokens.MILLIS) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKdelay *= 1000;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1274,
			"end_line": 1283,
			"code_lines": "if (token.tokenType == Tokens.AND) {LiNeBrEaKread();LiNeBrEaKif (token.tokenType == Tokens.NO) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKchain = true;LiNeBrEaK}LiNeBrEaKreadThis(Tokens.CHAIN);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1339,
			"end_line": 1346,
			"code_lines": "}LiNeBrEaKcase Tokens.RESULT : {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.MEMORY);LiNeBrEaKreadThis(Tokens.ROWS);LiNeBrEaKInteger  size = readIntegerObject();LiNeBrEaKObject[] args = new Object[]{ size };LiNeBrEaK"
		}, {
			"start_line": 1362,
			"end_line": 1371,
			"code_lines": "}LiNeBrEaKif (!e.getDataType().isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_0P000);LiNeBrEaK}LiNeBrEaKif (e.getType() != OpTypes.VALUELiNeBrEaK&& (e.getType() != OpTypes.SQL_FUNCTIONLiNeBrEaK|| !((FunctionSQL) e).isValueFunction())) {LiNeBrEaKthrow Error.error(ErrorCode.X_0P000);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TransactionManagerCommon.java|",
		"loc": "545",
		"clones": [{
			"start_line": 274,
			"end_line": 281,
			"code_lines": "canUnlock = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (!canUnlock) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 348,
			"end_line": 354,
			"code_lines": "if (cs == null) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (session.abortTransaction) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 376,
			"end_line": 385,
			"code_lines": "for (int i = 0; i < nameList.length; i++) {LiNeBrEaKHsqlName name = nameList[i];LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKSession holder = (Session) tableWriteLocks.get(name);LiNeBrEaKif (holder != null && holder != session) {LiNeBrEaKsession.tempSet.add(holder);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 409,
			"end_line": 416,
			"code_lines": "}LiNeBrEaKHsqlName[] nameList = cs.getTableNamesForWrite();LiNeBrEaKfor (int i = 0; i < nameList.length; i++) {LiNeBrEaKHsqlName name = nameList[i];LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 436,
			"end_line": 442,
			"code_lines": "while (it.hasNext()) {LiNeBrEaKSession s = (Session) it.next();LiNeBrEaKif (s == session) {LiNeBrEaKit.remove();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 451,
			"end_line": 460,
			"code_lines": "}LiNeBrEaKHsqlName[] nameList = cs.getTableNamesForWrite();LiNeBrEaKfor (int i = 0; i < nameList.length; i++) {LiNeBrEaKHsqlName name = nameList[i];LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKSession holder = (Session) tableWriteLocks.get(name);LiNeBrEaKif (holder != null && holder != session) {LiNeBrEaK"
		}, {
			"start_line": 469,
			"end_line": 480,
			"code_lines": "}LiNeBrEaKnameList = cs.getTableNamesForRead();LiNeBrEaKfor (int i = 0; i < nameList.length; i++) {LiNeBrEaKHsqlName name = nameList[i];LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKSession holder = (Session) tableWriteLocks.get(name);LiNeBrEaKif (holder != null && holder != session) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowAVLDisk.java|",
		"loc": "170"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Database.java|",
		"loc": "555"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionOrderBy.java|",
		"loc": "69"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/resources/ResourceBundleHandler.java|",
		"loc": "102"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserDDL.java|",
		"loc": "3797",
		"clones": [{
			"start_line": 220,
			"end_line": 226,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 557,
			"end_line": 563,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 567,
			"end_line": 573,
			"code_lines": "if (token.tokenType == Tokens.RESTRICT) {LiNeBrEaKread();LiNeBrEaK} else if (token.tokenType == Tokens.CASCADE) {LiNeBrEaKread();LiNeBrEaKcascade = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 594,
			"end_line": 600,
			"code_lines": "if (token.tokenType == Tokens.RESTRICT) {LiNeBrEaKread();LiNeBrEaK} else if (token.tokenType == Tokens.CASCADE) {LiNeBrEaKread();LiNeBrEaKcascade = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 606,
			"end_line": 612,
			"code_lines": "object.getName(), ValuePool.getInt(SchemaObject.CONSTRAINT),LiNeBrEaKBoolean.valueOf(cascade), Boolean.valueOf(false)LiNeBrEaK};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaK"
		}, {
			"start_line": 879,
			"end_line": 892,
			"code_lines": "if (token.tokenType == Tokens.ON) {LiNeBrEaKif (!table.isTemp()) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.COMMIT);LiNeBrEaKif (token.tokenType == Tokens.DELETE) {}LiNeBrEaKelse if (token.tokenType == Tokens.PRESERVE) {LiNeBrEaKtable.persistenceScope = TableBase.SCOPE_SESSION;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.ROWS);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1033,
			"end_line": 1040,
			"code_lines": "c.getName().name, table.getSchemaName(), table.getName(),LiNeBrEaKSchemaObject.INDEX);LiNeBrEaKc.core.uniqueName = uniqueConstraint.getName();LiNeBrEaKc.core.mainName   = mainName;LiNeBrEaKc.core.mainIndex  = mainIndex;LiNeBrEaKc.core.refTable   = table;LiNeBrEaKc.core.refName    = c.getName();LiNeBrEaK"
		}, {
			"start_line": 1123,
			"end_line": 1129,
			"code_lines": "read();LiNeBrEaKif (token.tokenType == Tokens.SET) {LiNeBrEaKread();LiNeBrEaKswitch (token.tokenType) {LiNeBrEaKcase Tokens.DEFAULT : {LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 1136,
			"end_line": 1143,
			"code_lines": "SchemaObject.ReferentialAction.SET_NULL;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK} else if (token.tokenType == Tokens.CASCADE) {LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 1144,
			"end_line": 1150,
			"code_lines": "} else if (token.tokenType == Tokens.RESTRICT) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.NO);LiNeBrEaKreadThis(Tokens.ACTION);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1236,
			"end_line": 1248,
			"code_lines": "boolean ifNot = false;LiNeBrEaKif (token.tokenType == Tokens.IF) {LiNeBrEaKint position = getPosition();LiNeBrEaKread();LiNeBrEaKif (token.tokenType == Tokens.NOT) {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.EXISTS);LiNeBrEaKifNot = true;LiNeBrEaK} else {LiNeBrEaKrewind(position);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1353,
			"end_line": 1360,
			"code_lines": "if (readIfThis(Tokens.NO)) {LiNeBrEaKreadThis(Tokens.PAD);LiNeBrEaKpadSpace = Boolean.FALSE;LiNeBrEaK} else if (readIfThis(Tokens.PAD)) {LiNeBrEaKreadThis(Tokens.SPACE);LiNeBrEaKpadSpace = Boolean.TRUE;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1578,
			"end_line": 1584,
			"code_lines": "|| beforeOrAfterType == TriggerDef.BEFORE) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKreadIfThis(Tokens.AS);LiNeBrEaKcheckIsSimpleName();LiNeBrEaK"
		}, {
			"start_line": 1592,
			"end_line": 1598,
			"code_lines": "HsqlName hsqlName = database.nameManager.newHsqlName(LiNeBrEaKtable.getSchemaName(), n, isDelimitedIdentifier(),LiNeBrEaKSchemaObject.TRANSITION);LiNeBrEaKTable transition = new Table(table, hsqlName);LiNeBrEaKRangeVariable range = new RangeVariable(transition,LiNeBrEaKnull, null, null, compileContext);LiNeBrEaK"
		}, {
			"start_line": 1746,
			"end_line": 1755,
			"code_lines": "Statement statement = compileSQLProcedureStatementOrNull(routine,LiNeBrEaKnull);LiNeBrEaKif (statement == null) {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaKToken[] tokenisedStatement = getRecordedStatement();LiNeBrEaKString  sql                = Token.getSQL(tokenisedStatement);LiNeBrEaKstatement.setSQL(sql);LiNeBrEaKroutine.setProcedure(statement);LiNeBrEaK"
		}, {
			"start_line": 1812,
			"end_line": 1819,
			"code_lines": "read();LiNeBrEaKisIdentity   = true;LiNeBrEaKisPKIdentity = true;LiNeBrEaKtypeObject   = Type.SQL_BIGINT;LiNeBrEaKsequence = new NumberSequence(null, 1, 1,LiNeBrEaKtypeObject);LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 1941,
			"end_line": 1950,
			"code_lines": "read();LiNeBrEaKif (token.tokenType == Tokens.BY) {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.DEFAULT);LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.ALWAYS);LiNeBrEaKgeneratedAlways = true;LiNeBrEaK}LiNeBrEaKreadThis(Tokens.AS);LiNeBrEaK"
		}, {
			"start_line": 1951,
			"end_line": 1959,
			"code_lines": "sequence = new NumberSequence(null, typeObject);LiNeBrEaKsequence.setAlways(generatedAlways);LiNeBrEaKif (token.tokenType == Tokens.OPENBRACKET) {LiNeBrEaKread();LiNeBrEaKreadSequenceOptions(sequence, false, false, true);LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaK}LiNeBrEaKisIdentity = true;LiNeBrEaK"
		}, {
			"start_line": 2099,
			"end_line": 2106,
			"code_lines": "end = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2173,
			"end_line": 2179,
			"code_lines": "if (constName == null) {LiNeBrEaKconstName = database.nameManager.newAutoName('CT',LiNeBrEaKschemaObject.getSchemaName(),LiNeBrEaKschemaObject.getName(), SchemaObject.CONSTRAINT);LiNeBrEaK}LiNeBrEaKConstraint c =LiNeBrEaK"
		}, {
			"start_line": 2235,
			"end_line": 2242,
			"code_lines": "OrderedHashSet set = new OrderedHashSet();LiNeBrEaKset.add(column.getName().name);LiNeBrEaKif (constName == null) {LiNeBrEaKconstName = database.nameManager.newAutoName('CT',LiNeBrEaKtable.getSchemaName(), table.getName(),LiNeBrEaKSchemaObject.CONSTRAINT);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2241,
			"end_line": 2249,
			"code_lines": "}LiNeBrEaKConstraint c =LiNeBrEaKnew Constraint(constName, set,LiNeBrEaKSchemaObject.ConstraintTypes.UNIQUE);LiNeBrEaKconstraintList.add(c);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase Tokens.FOREIGN : {LiNeBrEaK"
		}, {
			"start_line": 2256,
			"end_line": 2263,
			"code_lines": "constraintList.add(c);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase Tokens.CHECK : {LiNeBrEaKread();LiNeBrEaKif (constName == null) {LiNeBrEaKconstName = database.nameManager.newAutoName('CT',LiNeBrEaK"
		}, {
			"start_line": 2261,
			"end_line": 2267,
			"code_lines": "if (constName == null) {LiNeBrEaKconstName = database.nameManager.newAutoName('CT',LiNeBrEaKtable.getSchemaName(), table.getName(),LiNeBrEaKSchemaObject.CONSTRAINT);LiNeBrEaK}LiNeBrEaKConstraint c =LiNeBrEaK"
		}, {
			"start_line": 2292,
			"end_line": 2300,
			"code_lines": "if (constName == null) {LiNeBrEaKconstName = database.nameManager.newAutoName('CT',LiNeBrEaKtable.getSchemaName(), table.getName(),LiNeBrEaKSchemaObject.CONSTRAINT);LiNeBrEaK}LiNeBrEaKConstraint c =LiNeBrEaKnew Constraint(constName, null,LiNeBrEaKSchemaObject.ConstraintTypes.CHECK);LiNeBrEaK"
		}, {
			"start_line": 2317,
			"end_line": 2325,
			"code_lines": "default :LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2666,
			"end_line": 2672,
			"code_lines": "HsqlName name) {LiNeBrEaKif (name == null) {LiNeBrEaKname = database.nameManager.newAutoName('FK',LiNeBrEaKtable.getSchemaName(), table.getName(),LiNeBrEaKSchemaObject.CONSTRAINT);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2681,
			"end_line": 2688,
			"code_lines": "String   sql  = getLastPart();LiNeBrEaKObject[] args = new Object[] {LiNeBrEaKStatementTypes.ADD_CONSTRAINT, table, cLiNeBrEaK};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaK"
		}, {
			"start_line": 2740,
			"end_line": 2747,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2761,
			"end_line": 2768,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2923,
			"end_line": 2930,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2944,
			"end_line": 2951,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2956,
			"end_line": 2963,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3000,
			"end_line": 3008,
			"code_lines": "sequenceLiNeBrEaK};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKtable.getName());LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3013,
			"end_line": 3022,
			"code_lines": "if (token.tokenType == Tokens.BY) {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.DEFAULT);LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.ALWAYS);LiNeBrEaKgeneratedAlways = true;LiNeBrEaK}LiNeBrEaKreadThis(Tokens.AS);LiNeBrEaKreadThis(Tokens.IDENTITY);LiNeBrEaK"
		}, {
			"start_line": 3058,
			"end_line": 3064,
			"code_lines": "read();LiNeBrEaKreadThis(Tokens.BY);LiNeBrEaKlong value = readBigint();LiNeBrEaKsequence.setIncrement(value);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3066,
			"end_line": 3075,
			"code_lines": "if (token.tokenType == Tokens.MAXVALUE) {LiNeBrEaKsequence.setDefaultMaxValue();LiNeBrEaK} else if (token.tokenType == Tokens.MINVALUE) {LiNeBrEaKsequence.setDefaultMinValue();LiNeBrEaK} else if (token.tokenType == Tokens.CYCLE) {LiNeBrEaKsequence.setCycle(false);LiNeBrEaK} else {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3084,
			"end_line": 3090,
			"code_lines": "read();LiNeBrEaKlong value = readBigint();LiNeBrEaKsequence.setMaxValueNoCheck(value);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase Tokens.MINVALUE : {LiNeBrEaK"
		}, {
			"start_line": 3108,
			"end_line": 3118,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKsequence.checkValues();LiNeBrEaK"
		}, {
			"start_line": 3122,
			"end_line": 3129,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames = new HsqlName[] {LiNeBrEaKdatabase.getCatalogName(), table.getName()LiNeBrEaK};LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.ALTER_TABLE, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3156,
			"end_line": 3163,
			"code_lines": "name, newNameLiNeBrEaK};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogNameArray();LiNeBrEaKreturn new StatementSchema(sql, StatementTypes.RENAME_OBJECT, args,LiNeBrEaKnull, writeLockNames);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3198,
			"end_line": 3204,
			"code_lines": "cs.setSQL(sql);LiNeBrEaKreturn cs;LiNeBrEaK}LiNeBrEaKcase Tokens.INITIAL : {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.SCHEMA);LiNeBrEaK"
		}, {
			"start_line": 3217,
			"end_line": 3223,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3261,
			"end_line": 3268,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKdomain.getName());LiNeBrEaKreturn new StatementSchema(sql,LiNeBrEaKStatementTypes.ALTER_DOMAIN,LiNeBrEaKargs, null, writeLockNames);LiNeBrEaK"
		}, {
			"start_line": 3267,
			"end_line": 3274,
			"code_lines": "args, null, writeLockNames);LiNeBrEaK} else {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKcase Tokens.SET : {LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 3298,
			"end_line": 3305,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogAndBaseTableNames(LiNeBrEaKdomain.getName());LiNeBrEaKreturn new StatementSchema(sql,LiNeBrEaKStatementTypes.ALTER_DOMAIN,LiNeBrEaKargs, null, writeLockNames);LiNeBrEaK"
		}, {
			"start_line": 3413,
			"end_line": 3421,
			"code_lines": "}LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3440,
			"end_line": 3450,
			"code_lines": "read();LiNeBrEaKswitch (token.tokenType) {LiNeBrEaKcase Tokens.ROUTINE :LiNeBrEaKcase Tokens.PROCEDURE :LiNeBrEaKcase Tokens.FUNCTION :LiNeBrEaKread();LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3521,
			"end_line": 3527,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3580,
			"end_line": 3586,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3586,
			"end_line": 3603,
			"code_lines": "if (grant) {LiNeBrEaKreadThis(Tokens.TO);LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.FROM);LiNeBrEaK}LiNeBrEaKwhile (true) {LiNeBrEaKcheckIsSimpleName();LiNeBrEaKgranteeList.add(token.tokenString);LiNeBrEaKread();LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (grant) {LiNeBrEaKif (token.tokenType == Tokens.WITH) {LiNeBrEaK"
		}, {
			"start_line": 3605,
			"end_line": 3619,
			"code_lines": "}LiNeBrEaKif (token.tokenType == Tokens.GRANTED) {LiNeBrEaKread();LiNeBrEaKreadThis(Tokens.BY);LiNeBrEaKif (token.tokenType == Tokens.CURRENT_USER) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.CURRENT_ROLE);LiNeBrEaKif (session.getRole() == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_0P000);LiNeBrEaK}LiNeBrEaKgrantor = session.getRole();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3620,
			"end_line": 3628,
			"code_lines": "if (token.tokenType == Tokens.CASCADE) {LiNeBrEaKcascade = true;LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.RESTRICT);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKString   sql  = getLastPart();LiNeBrEaK"
		}, {
			"start_line": 3632,
			"end_line": 3639,
			"code_lines": "};LiNeBrEaKHsqlName[] writeLockNames =LiNeBrEaKdatabase.schemaManager.getCatalogNameArray();LiNeBrEaKStatementSchema cs = new StatementSchema(sql, type, args, null,LiNeBrEaKwriteLockNames);LiNeBrEaKreturn cs;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3781,
			"end_line": 3796,
			"code_lines": "if (session.isProcessingLog()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (SqlInvariants.isSystemSchemaName(schema.name)) {LiNeBrEaKthrow Error.error(ErrorCode.X_42503);LiNeBrEaK}LiNeBrEaKif (session.parser.isSchemaDefinition) {LiNeBrEaKif (schema == session.getCurrentSchemaHsqlName()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKError.error(ErrorCode.X_42505, schema.name);LiNeBrEaK}LiNeBrEaKsession.getGrantee().checkSchemaUpdateOrGrantRights(schema.name);LiNeBrEaKsession.checkDDLWrite();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementHandler.java|",
		"loc": "137"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/QuerySpecification.java|",
		"loc": "1830",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.HsqlNameManager.SimpleName;LiNeBrEaKimport org.hsqldb.ParserDQL.CompileContext;LiNeBrEaKimport org.hsqldb.RangeGroup.RangeGroupSimple;LiNeBrEaK"
		}, {
			"start_line": 889,
			"end_line": 895,
			"code_lines": "int orderCount = sortAndSlice.getOrderLength();LiNeBrEaKfor (int i = 0; i < orderCount; i++) {LiNeBrEaKExpression e = (Expression) sortAndSlice.exprList.get(i);LiNeBrEaKif (e.queryTableColumnIndex != -1) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1361,
			"end_line": 1367,
			"code_lines": "sb.append(exprColumns[i].getSQL());LiNeBrEaKif (i < limit - 1) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1798,
			"end_line": 1806,
			"code_lines": "if (rangeTable.isDataReadOnly() || rangeTable.isTemp()) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (name.schema == SqlInvariants.SYSTEM_SCHEMA_HSQLNAME) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKset.add(name);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1824,
			"end_line": 1830,
			"code_lines": "return false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementCommand.java|",
		"loc": "1058",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaK"
		}, {
			"start_line": 135,
			"end_line": 141,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementCommand');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 139,
			"end_line": 152,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaKresult = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 152,
			"end_line": 162,
			"code_lines": "try {LiNeBrEaKif (isLogged) {LiNeBrEaKsession.database.logger.writeOtherStatement(session, sql);LiNeBrEaK}LiNeBrEaK} catch (Throwable e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKResult getResult(Session session) {LiNeBrEaK"
		}, {
			"start_line": 243,
			"end_line": 250,
			"code_lines": "try {LiNeBrEaKint     value = ((Integer) parameters[0]).intValue();LiNeBrEaKboolean check = parameters[1] == null;LiNeBrEaKsession.checkAdmin();LiNeBrEaKsession.checkDDLWrite();LiNeBrEaKif (check && !session.database.getProperties()LiNeBrEaK.validateProperty(HsqlDatabasePropertiesLiNeBrEaK"
		}, {
			"start_line": 295,
			"end_line": 301,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 310,
			"end_line": 316,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 373,
			"end_line": 379,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 451,
			"end_line": 457,
			"code_lines": "routine);LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 609,
			"end_line": 616,
			"code_lines": "session.checkAdmin();LiNeBrEaKsession.checkDDLWrite();LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 636,
			"end_line": 642,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 739,
			"end_line": 746,
			"code_lines": "PersistentStore store = table.getRowStore(session);LiNeBrEaKstore.setSpaceManager(tableSpace);LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 765,
			"end_line": 771,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 780,
			"end_line": 786,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 796,
			"end_line": 802,
			"code_lines": "session.database.schemaManager.setSchemaChangeTimestamp();LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 848,
			"end_line": 854,
			"code_lines": "return Result.updateZeroResult;LiNeBrEaK} else {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 870,
			"end_line": 876,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 904,
			"end_line": 910,
			"code_lines": "session.database.schemaManager.setSchemaChangeTimestamp();LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 982,
			"end_line": 988,
			"code_lines": "if (!refTable.isEmpty(session)) {LiNeBrEaKthrow Error.error(ErrorCode.X_23504,LiNeBrEaKrefTable.getName().name);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1008,
			"end_line": 1015,
			"code_lines": "if (!refTable.isEmpty(session)) {LiNeBrEaKthrow Error.error(ErrorCode.X_23504,LiNeBrEaKrefTable.getName().name);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1033,
			"end_line": 1039,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/LdapAuthBean.java|",
		"loc": "361"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/DenyException.java|",
		"loc": "4"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/AuthUtils.java|",
		"loc": "54"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/HsqldbSlaveAuthBean.java|",
		"loc": "96",
		"clones": [{
			"start_line": 61,
			"end_line": 67,
			"code_lines": "}LiNeBrEaKpublic String[] authenticate(String userName, String password)LiNeBrEaKthrows DenyException {LiNeBrEaKif (!initialized) {LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'You must invoke the 'init' method to initialize the 'LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/AuthFunctionBean.java|",
		"loc": "6"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/AuthBeanMultiplexer.java|",
		"loc": "122",
		"clones": [{
			"start_line": 39,
			"end_line": 51,
			"code_lines": "'Engine did not reveal unique database name');LiNeBrEaK}LiNeBrEaKreturn rs.getString(1);LiNeBrEaK} finally {LiNeBrEaKif (rs != null) try {LiNeBrEaKrs.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKlogger.error(LiNeBrEaK'Failed to close ResultSet for retrieving db name');LiNeBrEaK}LiNeBrEaKrs = null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/auth/JaasAuthBean.java|",
		"loc": "145",
		"clones": [{
			"start_line": 44,
			"end_line": 51,
			"code_lines": "}LiNeBrEaKpublic void setRoleSchemaValuePattern(Pattern roleSchemaValuePattern) {LiNeBrEaKthis.roleSchemaValuePattern = roleSchemaValuePattern;LiNeBrEaK}LiNeBrEaKpublic void setRoleSchemaValuePatternString(String patternString) {LiNeBrEaKsetRoleSchemaValuePattern(Pattern.compile(patternString));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 81,
			"end_line": 87,
			"code_lines": "}LiNeBrEaKpublic String[] authenticate(String userName, String password)LiNeBrEaKthrows DenyException {LiNeBrEaKif (!initialized) {LiNeBrEaKthrow new IllegalStateException(LiNeBrEaK'You must invoke the 'init' method to initialize the 'LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Table.java|",
		"loc": "1967",
		"clones": [{
			"start_line": 340,
			"end_line": 346,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 440,
			"end_line": 450,
			"code_lines": "for (int j = 0; j < columnCount; j++) {LiNeBrEaKColumnSchema column  = getColumn(j);LiNeBrEaKString       colname = column.getName().statementName;LiNeBrEaKType         type    = column.getDataType();LiNeBrEaKif (j > 0) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(colname);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(type.getTypeDefinition());LiNeBrEaK"
		}, {
			"start_line": 586,
			"end_line": 592,
			"code_lines": "mainCount++;LiNeBrEaKbreak;LiNeBrEaKcase SchemaObject.ConstraintTypes.CHECK :LiNeBrEaKif (constraintList[i].isNotNull()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 660,
			"end_line": 675,
			"code_lines": "for (int i = 0; i < fkMainConstraints.length; i++) {LiNeBrEaKConstraint constraint  = fkMainConstraints[i];LiNeBrEaKTable      ref         = constraint.getRef();LiNeBrEaKint[]      mainColumns = constraint.getMainColumns();LiNeBrEaKif (ref == this) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (columnMap == null) {LiNeBrEaKif (constraint.core.hasDeleteAction) {LiNeBrEaKint[] cols =LiNeBrEaKconstraint.core.deleteActionLiNeBrEaK== SchemaObject.ReferentialAction.CASCADE ? nullLiNeBrEaK: constraintLiNeBrEaK.getRefColumns();LiNeBrEaKif (set.add(ref.getName())) {LiNeBrEaK"
		}, {
			"start_line": 983,
			"end_line": 989,
			"code_lines": "HsqlName name = c.getName();LiNeBrEaKthrow Error.error(ErrorCode.X_42533,LiNeBrEaKname.getSchemaQualifiedStatementName());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1456,
			"end_line": 1468,
			"code_lines": "if (!database.isReferentialIntegrity()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKTriggerDef[] trigVec = triggerLists[trigVecIndex];LiNeBrEaKfor (int i = 0, size = trigVec.length; i < size; i++) {LiNeBrEaKTriggerDef td         = trigVec[i];LiNeBrEaKboolean    sqlTrigger = td instanceof TriggerDefSQL;LiNeBrEaKif (td.hasOldTable()) {LiNeBrEaK}LiNeBrEaKtd.pushPair(session, null, null);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1470,
			"end_line": 1477,
			"code_lines": "if (!database.isReferentialIntegrity()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKTriggerDef[] trigVec = triggerLists[trigVecIndex];LiNeBrEaKfor (int i = 0, size = trigVec.length; i < size; i++) {LiNeBrEaKTriggerDef td         = trigVec[i];LiNeBrEaKboolean    sqlTrigger = td instanceof TriggerDefSQL;LiNeBrEaK"
		}, {
			"start_line": 1574,
			"end_line": 1581,
			"code_lines": "}LiNeBrEaKswitch (tableType) {LiNeBrEaKcase TableBase.FUNCTION_TABLE :LiNeBrEaKcase TableBase.SYSTEM_SUBQUERY :LiNeBrEaKcase TableBase.INFO_SCHEMA_TABLE :LiNeBrEaKcase TableBase.VIEW_TABLE :LiNeBrEaKcase TableBase.TEMP_TABLE : {LiNeBrEaK"
		}, {
			"start_line": 1588,
			"end_line": 1597,
			"code_lines": "if (i > -1) {LiNeBrEaKreturn indexList[i];LiNeBrEaK}LiNeBrEaKswitch (tableType) {LiNeBrEaKcase TableBase.FUNCTION_TABLE :LiNeBrEaKcase TableBase.SYSTEM_SUBQUERY :LiNeBrEaKcase TableBase.INFO_SCHEMA_TABLE :LiNeBrEaKcase TableBase.VIEW_TABLE :LiNeBrEaKcase TableBase.TEMP_TABLE : {LiNeBrEaK"
		}, {
			"start_line": 1615,
			"end_line": 1621,
			"code_lines": "cols.length)) {LiNeBrEaKreturn indexList[i];LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1653,
			"end_line": 1660,
			"code_lines": "}LiNeBrEaKswitch (tableType) {LiNeBrEaKcase TableBase.FUNCTION_TABLE :LiNeBrEaKcase TableBase.SYSTEM_SUBQUERY :LiNeBrEaKcase TableBase.INFO_SCHEMA_TABLE :LiNeBrEaKcase TableBase.VIEW_TABLE :LiNeBrEaKcase TableBase.TEMP_TABLE : {LiNeBrEaK"
		}, {
			"start_line": 1769,
			"end_line": 1776,
			"code_lines": "while (nav.hasNext()) {LiNeBrEaKObject[] data = (Object[]) nav.getNext();LiNeBrEaKObject[] newData =LiNeBrEaK(Object[]) ArrayUtil.resizeArrayIfDifferent(data, columnCount);LiNeBrEaKinsertData(session, store, newData);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1859,
			"end_line": 1865,
			"code_lines": "if (id == null) {LiNeBrEaKid = (Number) identitySequence.getValueObject();LiNeBrEaKdata[identityColumn] = id;LiNeBrEaK} else {LiNeBrEaKidentitySequence.userUpdate(id.longValue());LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ConstraintCore.java|",
		"loc": "38"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Statement.java|",
		"loc": "159"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBatchBug.java|",
		"loc": "140",
		"clones": [{
			"start_line": 102,
			"end_line": 108,
			"code_lines": "prep.setString(1, 'yyy');LiNeBrEaKprep.setTimestamp(2, now);LiNeBrEaKfor (int ii = 0; ii < DECIMAL_FIELDS_PER_DATASET; ii++) {LiNeBrEaKprep.setDouble(ii + 3, 0.123456789);LiNeBrEaK}LiNeBrEaKprep.addBatch();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestTextTable.java|",
		"loc": "345",
		"clones": [{
			"start_line": 176,
			"end_line": 184,
			"code_lines": "'t', 't'LiNeBrEaK}, new String[] {LiNeBrEaK'', ''LiNeBrEaK},LiNeBrEaKnew String[] {LiNeBrEaK'.', '.'LiNeBrEaK}, new String[] {LiNeBrEaK'-', '-'LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBug808460.java|",
		"loc": "36"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestPreparedSubQueries.java|",
		"loc": "198",
		"clones": [{
			"start_line": 122,
			"end_line": 128,
			"code_lines": "r = s.getGeneratedKeys();LiNeBrEaKwhile (r.next()) {LiNeBrEaKr.getInt(1);LiNeBrEaKvalid = true;LiNeBrEaK}LiNeBrEaKassertTrue(valid);LiNeBrEaK"
		}, {
			"start_line": 137,
			"end_line": 143,
			"code_lines": "}LiNeBrEaKr.close();LiNeBrEaKassertTrue(valid);LiNeBrEaKs.execute('insert into a(b) values(2)', new int[]{ 1 });LiNeBrEaKr = s.getGeneratedKeys();LiNeBrEaKwhile (r.next()) {LiNeBrEaK"
		}, {
			"start_line": 191,
			"end_line": 197,
			"code_lines": "}LiNeBrEaKassertTrue(valid);LiNeBrEaK} catch (Exception e) {LiNeBrEaKassertTrue(false);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestCollation.java|",
		"loc": "145"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestJDBCGeneratedColumns.java|",
		"loc": "158",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 61,
			"end_line": 67,
			"code_lines": "}LiNeBrEaKps.close();LiNeBrEaKps = c.prepareStatement(s, new String[]{ 'C', 'I' });LiNeBrEaKps.execute();LiNeBrEaKrs = ps.getGeneratedKeys();LiNeBrEaKwhile (rs.next()) {LiNeBrEaK"
		}, {
			"start_line": 80,
			"end_line": 90,
			"code_lines": "boolean successPrepared = false;LiNeBrEaKboolean successDirect   = false;LiNeBrEaKtry {LiNeBrEaKConnection c  = newConnection();LiNeBrEaKStatement  st = c.createStatement();LiNeBrEaKString     s  = 'DROP TABLE T IF EXISTS';LiNeBrEaKst.execute(s);LiNeBrEaKs = 'CREATE TABLE T (I INTEGER GENERATED BY DEFAULT AS IDENTITY(START WITH 33), C CHARACTER(10))';LiNeBrEaKst.execute(s);LiNeBrEaKs = 'INSERT INTO T (C) VALUES('TEST')';LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 122,
			"code_lines": "ps.addBatch();LiNeBrEaKps.addBatch();LiNeBrEaKps.executeBatch();LiNeBrEaKrs = ps.getGeneratedKeys();LiNeBrEaKwhile (rs.next()) {LiNeBrEaKSystem.out.println('' + rs.getInt(1));LiNeBrEaKsuccessPrepared &= rs.getInt(1) == val;LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 133,
			"code_lines": "ps.addBatch();LiNeBrEaKps.addBatch();LiNeBrEaKps.executeBatch();LiNeBrEaKrs = ps.getGeneratedKeys();LiNeBrEaKwhile (rs.next()) {LiNeBrEaKSystem.out.println('' + rs.getInt(1));LiNeBrEaK"
		}, {
			"start_line": 136,
			"end_line": 145,
			"code_lines": "val ++;LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaKps = c.prepareStatement(s, new String[]{ 'C', 'I' });LiNeBrEaKps.addBatch();LiNeBrEaKps.addBatch();LiNeBrEaKps.executeBatch();LiNeBrEaKrs = ps.getGeneratedKeys();LiNeBrEaKwhile (rs.next()) {LiNeBrEaK"
		}, {
			"start_line": 150,
			"end_line": 156,
			"code_lines": "}LiNeBrEaKps.close();LiNeBrEaK} catch (Exception e) {LiNeBrEaKSystem.out.print(e);LiNeBrEaK}LiNeBrEaKassertTrue(successPrepared);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestScript.java|",
		"loc": "20"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestCascade.java|",
		"loc": "99",
		"clones": [{
			"start_line": 76,
			"end_line": 91,
			"code_lines": "'INSERT INTO XB VALUES('T850','LEAA','00','P',NULL,'LCN NAME','sa',NOW)',LiNeBrEaK'INSERT INTO XB VALUES('T850','LEAA01','00','P',NULL,'LCN NAME','sa',NOW)',LiNeBrEaK'INSERT INTO XB VALUES('T850','LEAA02','00','P',NULL,'LCN NAME','sa',NOW)',LiNeBrEaK'INSERT INTO XB VALUES('T850','LEAA03','00','P',NULL,'LCN NAME','sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA','00','P','ABCDEFG',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA','00','P','QRSTUJV',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA','00','P','ZZZZZZZ',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA01','00','P','ABCDEFG',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA01','00','P','QRSTUJV',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA01','00','P','ZZZZZZZ',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA02','00','P','ABCDEFG',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA02','00','P','QRSTUJV',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA02','00','P','ZZZZZZZ',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA03','00','P','ABCDEFG',3.14,'sa',NOW)',LiNeBrEaK'INSERT INTO CA VALUES('T850','LEAA03','00','P','QRSTUJV',3.14,'sa',NOW)',LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBase.java|",
		"loc": "101",
		"clones": [{
			"start_line": 60,
			"end_line": 66,
			"code_lines": "} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println(this + '.setUp() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprotected void tearDown() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestMultipleConnections.java|",
		"loc": "43"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestSqlPersistent.java|",
		"loc": "366",
		"clones": [{
			"start_line": 157,
			"end_line": 165,
			"code_lines": "PreparedStatement ps = connection.prepareStatement(sqlString);LiNeBrEaKstringValue  = 'Test String Value';LiNeBrEaKintegerValue = new Integer(1000);LiNeBrEaKarrayValue   = new Double[] {LiNeBrEaKnew Double(1), new Double(Double.NaN),LiNeBrEaKnew Double(Double.NEGATIVE_INFINITY),LiNeBrEaKnew Double(Double.POSITIVE_INFINITY)LiNeBrEaK};LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDima.java|",
		"loc": "157",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 35,
			"end_line": 45,
			"code_lines": "stat.executeUpdate('INSERT INTO FOO (VAL) VALUES ('foo 2')');LiNeBrEaKstat.executeUpdate(LiNeBrEaK'INSERT INTO BAR (FOOID,VAL) VALUES (IDENTITY(),'bar 2')');LiNeBrEaKstat.executeUpdate(LiNeBrEaK'INSERT INTO BAZ (BARID,VAL) VALUES (IDENTITY(),'baz 2')');LiNeBrEaKstat.executeUpdate('INSERT INTO FOO (VAL) VALUES ('foo 3')');LiNeBrEaKstat.executeUpdate(LiNeBrEaK'INSERT INTO BAR (FOOID,VAL) VALUES (IDENTITY(),'bar 3')');LiNeBrEaKstat.executeUpdate(LiNeBrEaK'INSERT INTO BAZ (BARID,VAL) VALUES (IDENTITY(),'baz 3')');LiNeBrEaK"
		}, {
			"start_line": 61,
			"end_line": 69,
			"code_lines": "}LiNeBrEaKrs = query.executeQuery('SELECT ID,BARID,VAL FROM BAZ');LiNeBrEaKSystem.out.println('Table BAZ:');LiNeBrEaKwhile (rs.next()) {LiNeBrEaKSystem.out.println(rs.getInt(1));LiNeBrEaKSystem.out.println(rs.getInt(2));LiNeBrEaKSystem.out.println(rs.getString(3));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 93,
			"end_line": 116,
			"code_lines": "c.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='visitorTags'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('visitorTags', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='departments'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('departments', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='operators'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('operators', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='zones'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('zones', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='pages'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('pages', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=21 WHERE 'NAME'='visitorTags'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 143,
			"code_lines": "c.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='actionDefinitions'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('actionDefinitions', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='actionVariants'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('actionVariants', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='actionPoints'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('actionPoints', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='actionTags'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('actionTags', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='captureFields'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('captureFields', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='reactions'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('reactions', 1)');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'UPDATE SNS_OIDS SET 'ID'=1 WHERE 'NAME'='reactionOperations'');LiNeBrEaKc.createStatement().executeUpdate(LiNeBrEaK'INSERT INTO SNS_OIDS ('NAME', 'ID') VALUES ('reactionOperations', 1)');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/JDBCBench.java|",
		"loc": "806",
		"clones": [{
			"start_line": 3,
			"end_line": 9,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 230,
			"end_line": 240,
			"code_lines": "System.out.print('<transactions> ');LiNeBrEaKif (TabFile != null) {LiNeBrEaKTabFile.print('<transactions>;');LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKSystem.out.print('<auto-commit> ');LiNeBrEaKif (TabFile != null) {LiNeBrEaKTabFile.print('<auto-commit>;');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 311,
			"end_line": 320,
			"code_lines": "Query = 'DROP TABLE accounts';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DROP TABLE tellers';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DROP TABLE branches';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaK"
		}, {
			"start_line": 342,
			"end_line": 350,
			"code_lines": "if (tableExtension.length() > 0) {LiNeBrEaKQuery = tableExtension + ' tellers (';LiNeBrEaK} else {LiNeBrEaKQuery = 'CREATE TABLE tellers (';LiNeBrEaK}LiNeBrEaKQuery += 'Tid         INTEGER NOT NULL PRIMARY KEY,';LiNeBrEaKQuery += 'Bid         INTEGER,';LiNeBrEaKQuery += 'Tbalance    INTEGER,';LiNeBrEaK"
		}, {
			"start_line": 348,
			"end_line": 379,
			"code_lines": "Query += 'Bid         INTEGER,';LiNeBrEaKQuery += 'Tbalance    INTEGER,';LiNeBrEaKQuery += 'filler      CHAR(84))';LiNeBrEaKif (createExtension.length() > 0) {LiNeBrEaKQuery += createExtension;LiNeBrEaK}LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKif (tableExtension.length() > 0) {LiNeBrEaKQuery = tableExtension + ' accounts (';LiNeBrEaK} else {LiNeBrEaKQuery = 'CREATE TABLE accounts (';LiNeBrEaK}LiNeBrEaKQuery += 'Aid         INTEGER NOT NULL PRIMARY KEY, ';LiNeBrEaKQuery += 'Bid         INTEGER, ';LiNeBrEaKQuery += 'Abalance    INTEGER, ';LiNeBrEaKQuery += 'filler      CHAR(84))';LiNeBrEaKif (createExtension.length() > 0) {LiNeBrEaKQuery += createExtension;LiNeBrEaK}LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKif (tableExtension.length() > 0) {LiNeBrEaKQuery = tableExtension + ' history (';LiNeBrEaK} else {LiNeBrEaKQuery = 'CREATE TABLE history (';LiNeBrEaK}LiNeBrEaKQuery += 'Tid         INTEGER, ';LiNeBrEaKQuery += 'Bid         INTEGER, ';LiNeBrEaKQuery += 'Aid         INTEGER, ';LiNeBrEaKQuery += 'delta       INTEGER, ';LiNeBrEaK"
		}, {
			"start_line": 377,
			"end_line": 386,
			"code_lines": "Query += 'Aid         INTEGER, ';LiNeBrEaKQuery += 'delta       INTEGER, ';LiNeBrEaKQuery += 'tstime        TIMESTAMP, ';LiNeBrEaKQuery += 'filler      CHAR(22))';LiNeBrEaKif (createExtension.length() > 0) {LiNeBrEaKQuery += createExtension;LiNeBrEaK}LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaK"
		}, {
			"start_line": 384,
			"end_line": 390,
			"code_lines": "Stmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKif (transactions) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaKStmt.close();LiNeBrEaK"
		}, {
			"start_line": 396,
			"end_line": 414,
			"code_lines": "try {LiNeBrEaKStatement Stmt = Conn.createStatement();LiNeBrEaKString    Query;LiNeBrEaKQuery = 'DELETE FROM history';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM accounts';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM tellers';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM branches';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKif (transactions) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 474,
			"code_lines": "Stmt.executeUpdate(Query);LiNeBrEaK}LiNeBrEaKif ((i % 100 == 0) && (transactions)) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (prepared_stmt) {LiNeBrEaKpstmt.close();LiNeBrEaK}LiNeBrEaKif (transactions) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaKif (prepared_stmt) {LiNeBrEaK"
		}, {
			"start_line": 495,
			"end_line": 503,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (prepared_stmt) {LiNeBrEaKpstmt.close();LiNeBrEaK}LiNeBrEaKif (transactions) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 675,
			"end_line": 681,
			"code_lines": "}LiNeBrEaK} catch (Exception E) {LiNeBrEaKSystem.out.println(E.toString());LiNeBrEaKE.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDateTime.java|",
		"loc": "182",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 90,
			"end_line": 98,
			"code_lines": "iUpdateCount = insertStatement.executeUpdate();LiNeBrEaKinsertStatement.close();LiNeBrEaKAssert.assertEquals(LiNeBrEaK'Exactly one record with time data shoud have been inserted.',LiNeBrEaKiUpdateCount, 1);LiNeBrEaKPreparedStatement selectStatement = null;LiNeBrEaKPreparedStatement deleteStatement = null;LiNeBrEaKResultSet         results         = null;LiNeBrEaK"
		}, {
			"start_line": 128,
			"end_line": 134,
			"code_lines": "final String INSERT_TIME =LiNeBrEaK'insert into time_test(time_test) values (?)';LiNeBrEaKfinal String SELECT_TIME =LiNeBrEaK'select time_test.* from time_test where time_test = ?';LiNeBrEaKfinal String DELETE_TIME =LiNeBrEaK'delete from time_test where time_test = ?';LiNeBrEaK"
		}, {
			"start_line": 143,
			"end_line": 155,
			"code_lines": "iUpdateCount = insertStatement.executeUpdate();LiNeBrEaKinsertStatement.close();LiNeBrEaKAssert.assertEquals(LiNeBrEaK'Exactly one record with time data shoud have been inserted.',LiNeBrEaKiUpdateCount, 1);LiNeBrEaKPreparedStatement selectStatement = null;LiNeBrEaKPreparedStatement deleteStatement = null;LiNeBrEaKResultSet         results         = null;LiNeBrEaKjava.sql.Time     retrievedTime;LiNeBrEaKint               iDeletedCount = 0;LiNeBrEaKjava.sql.Time     selectTime;LiNeBrEaKselectStatement = connection.prepareStatement(SELECT_TIME);LiNeBrEaK"
		}, {
			"start_line": 164,
			"end_line": 181,
			"code_lines": "iDeletedCount = deleteStatement.executeUpdate();LiNeBrEaKAssert.assertEquals(LiNeBrEaK'Exactly one record with time data shoud have been deleted.',LiNeBrEaKiDeletedCount, 1);LiNeBrEaKAssert.assertNotNull(LiNeBrEaK'The inserted time shouldn't be retrieved as null from the database',LiNeBrEaKretrievedTime);LiNeBrEaKString selectString = selectTime.toString();LiNeBrEaKString retrievedString = retrievedTime.toString();LiNeBrEaKboolean result =LiNeBrEaKretrievedString.equals(selectString);LiNeBrEaKAssert.assertTrue(LiNeBrEaK'The time retrieved from database 'LiNeBrEaK+ DateFormat.getDateTimeInstance().format(retrievedTime)LiNeBrEaK+ ' is not the same as the inserted one 'LiNeBrEaK+ DateFormat.getDateTimeInstance().format(insertTime), result);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestJDBCSavepoints.java|",
		"loc": "281",
		"clones": [{
			"start_line": 191,
			"end_line": 197,
			"code_lines": "rs = stmt.executeQuery('select count(*) from t');LiNeBrEaKrs.next();LiNeBrEaKrowcount = rs.getInt(1);LiNeBrEaKrs.close();LiNeBrEaKmsg = 'select count(*) after 50 inserts - 20 rolled back:';LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 241,
			"end_line": 253,
			"code_lines": "conn1.setAutoCommit(false);LiNeBrEaKsql = 'insert into t values(?,?,?,?)';LiNeBrEaKps  = conn1.prepareStatement(sql);LiNeBrEaKps.setString(2, 'Mary');LiNeBrEaKps.setString(3, 'Peterson-Clancy');LiNeBrEaKi = 0;LiNeBrEaKfor (; i < 10; i++) {LiNeBrEaKps.setInt(1, i);LiNeBrEaKps.setInt(4, i);LiNeBrEaKps.executeUpdate();LiNeBrEaK}LiNeBrEaKsp1 = conn1.setSavepoint();LiNeBrEaK"
		}, {
			"start_line": 264,
			"end_line": 271,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 272,
			"end_line": 281,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestJDBCSavepoints failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestTriggers.java|",
		"loc": "110",
		"clones": [{
			"start_line": 48,
			"end_line": 54,
			"code_lines": "try {LiNeBrEaKrunStatements();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKassertTrue(false);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestScriptRunner.java|",
		"loc": "278"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/AllSimpleTests.java|",
		"loc": "34",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "try {LiNeBrEaKjbInit();LiNeBrEaK} catch (Exception ex) {LiNeBrEaKex.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestScripts.java|",
		"loc": "123"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestQuotes.java|",
		"loc": "94",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaK"
		}, {
			"start_line": 2,
			"end_line": 8,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestOdbcTypes.java|",
		"loc": "1283",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 18,
			"end_line": 40,
			"code_lines": "+ '    id INTEGER,n'LiNeBrEaK+ '    ti TINYINT,n'LiNeBrEaK+ '    si SMALLINT,n'LiNeBrEaK+ '    i INTEGER,n'LiNeBrEaK+ '    bi BIGINT,n'LiNeBrEaK+ '    n NUMERIC(5,2),n'LiNeBrEaK+ '    f FLOAT(5),n'LiNeBrEaK+ '    r DOUBLE,n'LiNeBrEaK+ '    b BOOLEAN,n'LiNeBrEaK+ '    c CHARACTER(3),n'LiNeBrEaK+ '    cv CHARACTER VARYING(3),n'LiNeBrEaK+ '    bt BIT(9),n'LiNeBrEaK+ '    btv BIT VARYING(3),n'LiNeBrEaK+ '    d DATE,n'LiNeBrEaK+ '    t TIME(2),n'LiNeBrEaK+ '    tw TIME(2) WITH TIME ZONE,n'LiNeBrEaK+ '    ts TIMESTAMP(2),n'LiNeBrEaK+ '    tsw TIMESTAMP(2) WITH TIME ZONE,n'LiNeBrEaK+ '    bin BINARY(4),n'LiNeBrEaK+ '    vb VARBINARY(4),n'LiNeBrEaK+ '    dsival INTERVAL DAY(5) TO SECOND(6),n'LiNeBrEaK+ '    sival INTERVAL SECOND(6,4)n'LiNeBrEaK"
		}, {
			"start_line": 41,
			"end_line": 48,
			"code_lines": "st.executeUpdate('INSERT INTO alltypes VALUES (n'LiNeBrEaK+ '    1, 3, 4, 5, 6, 7.8, 8.9, 9.7, true, 'ab', 'cd',n'LiNeBrEaK+ '    b'10', b'10', current_date, '13:14:00',n'LiNeBrEaK+ '    '15:16:00', '2009-02-09 16:17:18', '2009-02-09 17:18:19',n'LiNeBrEaK+ '    x'A103', x'A103', 'LiNeBrEaK+ 'INTERVAL '145 23:12:19.345' DAY TO SECOND,n'LiNeBrEaK+ '    INTERVAL '1000.345' SECONDn'LiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 59,
			"code_lines": "st.executeUpdate('INSERT INTO alltypes VALUES (n'LiNeBrEaK+ '    2, 3, 4, 5, 6, 7.8, 8.9, 9.7, true, 'ab', 'cd',n'LiNeBrEaK+ '    b'10', b'10', current_date, '13:14:00',n'LiNeBrEaK+ '    '15:16:00', '2009-02-09 16:17:18', '2009-02-09 17:18:19',n'LiNeBrEaK+ '    x'A103', x'A103', 'LiNeBrEaK+ '    INTERVAL '145 23:12:19.345' DAY TO SECOND,n'LiNeBrEaK+ '    INTERVAL '1000.345' SECONDn'LiNeBrEaK+ ')'LiNeBrEaK);LiNeBrEaK"
		}, {
			"start_line": 89,
			"end_line": 97,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(Integer.class, rs.getObject('ti').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 116,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 117,
			"end_line": 125,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(Integer.class, rs.getObject('si').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 126,
			"end_line": 144,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 145,
			"end_line": 151,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 154,
			"end_line": 172,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 173,
			"end_line": 179,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 200,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 201,
			"end_line": 209,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(Double.class, rs.getObject('r').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 210,
			"end_line": 228,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 229,
			"end_line": 235,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 238,
			"end_line": 256,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 257,
			"end_line": 263,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 266,
			"end_line": 284,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 285,
			"end_line": 312,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(String.class, rs.getObject('cv').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('cd', rs.getString('cv'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 319,
			"end_line": 341,
			"code_lines": "assertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(String.class, rs.getObject('fs').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('fixed str', rs.getString('fs'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 342,
			"end_line": 370,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT i, cv || 'appendage' app, 4n'LiNeBrEaK+ 'FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(String.class, rs.getObject('app').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('cdappendage', rs.getString('app'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 371,
			"end_line": 377,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 382,
			"end_line": 400,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 401,
			"end_line": 407,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 410,
			"end_line": 428,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 438,
			"end_line": 456,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 457,
			"end_line": 463,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 485,
			"code_lines": "rs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(Timestamp.class, rs.getObject('tsw').getClass());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals(Timestamp.valueOf('2009-02-09 17:18:19'),LiNeBrEaKrs.getTimestamp('tsw'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 486,
			"end_line": 492,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 492,
			"end_line": 512,
			"code_lines": "assertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('100000000', rs.getString('bt'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 513,
			"end_line": 539,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('10', rs.getString('btv'));LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 555,
			"end_line": 569,
			"code_lines": "= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 579,
			"end_line": 588,
			"code_lines": "byte[] ba;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('A103', rs.getString('vb'));LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKba = rs.getBytes('vb');LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 587,
			"end_line": 610,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaKassertEquals('Retrieved bye array length wrong',LiNeBrEaKexpectedBytes.length, ba.length);LiNeBrEaKfor (int i = 0; i < ba.length; i++) {LiNeBrEaKassertEquals('Byte ' + i + ' wrong', expectedBytes[i], ba[i]);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 611,
			"end_line": 617,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 613,
			"end_line": 619,
			"code_lines": "try {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('145 23:12:19.345000', rs.getString('dsival'));LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaK"
		}, {
			"start_line": 619,
			"end_line": 637,
			"code_lines": "assertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 638,
			"end_line": 664,
			"code_lines": "ResultSet rs = null;LiNeBrEaKStatement st = null;LiNeBrEaKtry {LiNeBrEaKst = netConn.createStatement();LiNeBrEaKrs = st.executeQuery('SELECT * FROM alltypes WHERE id in (1, 2)');LiNeBrEaKassertTrue('Got no rows with id in (1, 2)', rs.next());LiNeBrEaKassertEquals('1000.345000', rs.getString('sival'));LiNeBrEaKassertTrue('Got only one row with id in (1, 2)', rs.next());LiNeBrEaKassertFalse('Got too many rows with id in (1, 2)', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (st != null) {LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 685,
			"end_line": 696,
			"code_lines": "assertFalse('Got too many rows with i = 495', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 704,
			"end_line": 710,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, ti) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 711,
			"end_line": 718,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE ti = ?');LiNeBrEaK"
		}, {
			"start_line": 724,
			"end_line": 742,
			"code_lines": "assertFalse('Got too many rows with ti = 200', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 743,
			"end_line": 749,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, si) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 750,
			"end_line": 757,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE si = ?');LiNeBrEaK"
		}, {
			"start_line": 763,
			"end_line": 781,
			"code_lines": "assertFalse('Got too many rows with si = 395', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 782,
			"end_line": 788,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, bi) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 789,
			"end_line": 796,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE bi = ?');LiNeBrEaK"
		}, {
			"start_line": 802,
			"end_line": 820,
			"code_lines": "assertFalse('Got too many rows with bi = 295L', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 821,
			"end_line": 827,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, f) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 828,
			"end_line": 835,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE f = ?');LiNeBrEaK"
		}, {
			"start_line": 841,
			"end_line": 859,
			"code_lines": "assertFalse('Got too many rows with f = 98.765F', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 860,
			"end_line": 866,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, r) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 867,
			"end_line": 874,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE r = ?');LiNeBrEaK"
		}, {
			"start_line": 880,
			"end_line": 898,
			"code_lines": "assertFalse('Got too many rows with r = 876.54D', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 899,
			"end_line": 905,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, b) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 906,
			"end_line": 913,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE b = ?');LiNeBrEaK"
		}, {
			"start_line": 919,
			"end_line": 937,
			"code_lines": "assertFalse('Got too many rows with b = false', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 938,
			"end_line": 944,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, c) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaK"
		}, {
			"start_line": 945,
			"end_line": 952,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE c = ?');LiNeBrEaK"
		}, {
			"start_line": 954,
			"end_line": 976,
			"code_lines": "assertTrue('Got no rows with c = 'xy '', rs.next());LiNeBrEaKassertEquals(String.class, rs.getObject('c').getClass());LiNeBrEaKassertTrue('Got only one row with c = 'xy '', rs.next());LiNeBrEaKassertEquals('xy ', rs.getString('c'));LiNeBrEaKassertFalse('Got too many rows with c = 'xy '', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 977,
			"end_line": 1015,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, cv) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaKps.setString(2, 'xy');LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE cv = ?');LiNeBrEaKps.setString(1, 'xy');LiNeBrEaKrs = ps.executeQuery();LiNeBrEaKassertTrue('Got no rows with cv = 'xy'', rs.next());LiNeBrEaKassertEquals(String.class, rs.getObject('cv').getClass());LiNeBrEaKassertTrue('Got only one row with cv = 'xy'', rs.next());LiNeBrEaKassertEquals('xy', rs.getString('cv'));LiNeBrEaKassertFalse('Got too many rows with cv = 'xy'', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1026,
			"end_line": 1033,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE d = ?');LiNeBrEaK"
		}, {
			"start_line": 1039,
			"end_line": 1057,
			"code_lines": "assertFalse('Got too many rows with d = tomorrow', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1066,
			"end_line": 1073,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE t = ?');LiNeBrEaK"
		}, {
			"start_line": 1079,
			"end_line": 1097,
			"code_lines": "assertFalse('Got too many rows with t = aTime', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1106,
			"end_line": 1113,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE ts = ?');LiNeBrEaK"
		}, {
			"start_line": 1119,
			"end_line": 1137,
			"code_lines": "assertFalse('Got too many rows with ts = aTimestamp', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1138,
			"end_line": 1177,
			"code_lines": "PreparedStatement ps = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKTimestamp aTimestamp = Timestamp.valueOf('2009-03-27 17:18:19');LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, tsw) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaKps.setTimestamp(2, aTimestamp);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE tsw = ?');LiNeBrEaKps.setTimestamp(1, aTimestamp);LiNeBrEaKrs = ps.executeQuery();LiNeBrEaKassertTrue('Got no rows with tsw = aTimestamp', rs.next());LiNeBrEaKassertEquals(Timestamp.class, rs.getObject('tsw').getClass());LiNeBrEaKassertTrue('Got only one row with tsw = aTimestamp', rs.next());LiNeBrEaKassertEquals(aTimestamp, rs.getTimestamp('tsw'));LiNeBrEaKassertFalse('Got too many rows with tsw = aTimestamp', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK}LiNeBrEaK} catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1189,
			"end_line": 1196,
			"code_lines": "assertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE bin = ?');LiNeBrEaK"
		}, {
			"start_line": 1202,
			"end_line": 1215,
			"code_lines": "assertFalse('Got too many rows with bin = b'AA99'', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK"
		}, {
			"start_line": 1233,
			"end_line": 1279,
			"code_lines": "byte[] ba1, ba2;LiNeBrEaKtry {LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'INSERT INTO alltypes(id, vb) VALUES(?, ?)');LiNeBrEaKps.setInt(1, 3);LiNeBrEaKps.setBytes(2, expectedBytes);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.setInt(1, 4);LiNeBrEaKassertEquals(1, ps.executeUpdate());LiNeBrEaKps.close();LiNeBrEaKnetConn.commit();LiNeBrEaKps = netConn.prepareStatement(LiNeBrEaK'SELECT * FROM alltypes WHERE vb = ?');LiNeBrEaKps.setBytes(1, expectedBytes);LiNeBrEaKrs = ps.executeQuery();LiNeBrEaKassertTrue('Got no rows with vb = b'AA99'', rs.next());LiNeBrEaKba1 = rs.getBytes('vb');LiNeBrEaKassertTrue('Got only one row with vb = b'AA99'', rs.next());LiNeBrEaKba2 = rs.getBytes('vb');LiNeBrEaKassertFalse('Got too many rows with vb = b'AA99'', rs.next());LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKif (rs != null) {LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaKif (ps != null) {LiNeBrEaKps.close();LiNeBrEaK} } catch(Exception e) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaKassertEquals('Retrieved bye array length wrong (1)',LiNeBrEaKexpectedBytes.length, ba1.length);LiNeBrEaKfor (int i = 0; i < ba1.length; i++) {LiNeBrEaKassertEquals('Byte ' + i + ' wrong (1)', expectedBytes[i], ba1[i]);LiNeBrEaK}LiNeBrEaKassertEquals('Retrieved bye array length wrong (2)',LiNeBrEaKexpectedBytes.length, ba2.length);LiNeBrEaKfor (int i = 0; i < ba2.length; i++) {LiNeBrEaKassertEquals('Byte ' + i + ' wrong (2)', expectedBytes[i], ba2[i]);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestNullInUnion.java|",
		"loc": "45",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestCacheSize.java|",
		"loc": "676",
		"clones": [{
			"start_line": 3,
			"end_line": 9,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 245,
			"end_line": 251,
			"code_lines": "long nextrandom   = randomgen.nextLong();LiNeBrEaKint  randomlength = (int) nextrandom & 0x7f;LiNeBrEaKif (randomlength > filler.length()) {LiNeBrEaKrandomlength = filler.length();LiNeBrEaK}LiNeBrEaKString varfiller = filler.substring(0, randomlength);LiNeBrEaK"
		}, {
			"start_line": 329,
			"end_line": 336,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps = cConnection.prepareStatement(LiNeBrEaK'SELECT firstname,lastname,zip,filler FROM test WHERE id = ?');LiNeBrEaK"
		}, {
			"start_line": 346,
			"end_line": 355,
			"code_lines": "} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaKlong rate = ((long) i * 1000) / (time + 1);LiNeBrEaKstoreResult('select random id', i, time, rate);LiNeBrEaKSystem.out.println('select time for random id ' + i + ' rows  -- 'LiNeBrEaK+ time + ' ms -- ' + rate + ' tps');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 356,
			"end_line": 363,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps = cConnection.prepareStatement(LiNeBrEaK'SELECT zip FROM zip WHERE zip = ?');LiNeBrEaK"
		}, {
			"start_line": 365,
			"end_line": 379,
			"code_lines": "ps.execute();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Select ' + (i + 1) + ' : 'LiNeBrEaK+ (sw.elapsedTime() + 1));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaKlong rate = ((long) i * 1000) / (time + 1);LiNeBrEaKstoreResult('select random zip (zip table)', i, time, rate);LiNeBrEaK"
		}, {
			"start_line": 414,
			"end_line": 420,
			"code_lines": "storeResult('count (index on zip)', rs.getInt(1), time, rate);LiNeBrEaKSystem.out.println('count time (index on zip) ' + rs.getInt(1)LiNeBrEaK+ ' rows  -- ' + time + ' ms -- ' + rateLiNeBrEaK+ ' tps');LiNeBrEaK} catch (SQLException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 469,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKint              count     = 0;LiNeBrEaKint              random    = 0;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps = cConnection.prepareStatement(LiNeBrEaK"
		}, {
			"start_line": 475,
			"end_line": 482,
			"code_lines": "if (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Update ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / (sw.elapsedTime() + 1)));LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 480,
			"end_line": 493,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println('error : ' + random);LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaKlong rate = (i * 1000) / (time + 1);LiNeBrEaKstoreResult('update with random id', i, time, rate);LiNeBrEaKSystem.out.println('update time with random id ' + i + ' rows  -- 'LiNeBrEaK+ time + ' ms -- ' + rate + ' tps');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 494,
			"end_line": 504,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKint              count     = 0;LiNeBrEaKint              random    = 0;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps = cConnection.prepareStatement(LiNeBrEaK'UPDATE test SET filler = ? WHERE id = ? and zip <> 'LiNeBrEaK+ smallrows);LiNeBrEaK"
		}, {
			"start_line": 510,
			"end_line": 529,
			"code_lines": "ps.execute();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Update ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / (sw.elapsedTime() + 1)));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println('error : ' + random);LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaKlong rate = (i * 1000) / (time + 1);LiNeBrEaKstoreResult('update with random id', i, time, rate);LiNeBrEaKSystem.out.println('update time with random id ' + i + ' rows  -- 'LiNeBrEaK+ time + ' ms -- ' + rate + ' tps');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 530,
			"end_line": 540,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKint              count     = 0;LiNeBrEaKint              random    = 0;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps = cConnection.prepareStatement(LiNeBrEaK'UPDATE test SET zip = zip + 1 WHERE id = ? and zip <> 'LiNeBrEaK+ smallrows);LiNeBrEaK"
		}, {
			"start_line": 542,
			"end_line": 559,
			"code_lines": "ps.setInt(1, random);LiNeBrEaKps.execute();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Update ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / (sw.elapsedTime() + 1)));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println('error : ' + random);LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaKlong rate = (i * 1000) / (time + 1);LiNeBrEaKstoreResult('update with sequential id', i, time, rate);LiNeBrEaK"
		}, {
			"start_line": 563,
			"end_line": 570,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKint              count     = 0;LiNeBrEaKint              random    = 0;LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 576,
			"end_line": 589,
			"code_lines": "if (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('delete ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / (sw.elapsedTime() + 1)));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println('error : ' + random);LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaK"
		}, {
			"start_line": 595,
			"end_line": 604,
			"code_lines": "StopWatch        sw        = new StopWatch();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKint              i         = 0;LiNeBrEaKboolean          slow      = false;LiNeBrEaKint              count     = 0;LiNeBrEaKint              random    = 0;LiNeBrEaKtry {LiNeBrEaKPreparedStatement ps =LiNeBrEaKcConnection.prepareStatement('DELETE FROM zip WHERE zip = ?');LiNeBrEaK"
		}, {
			"start_line": 606,
			"end_line": 621,
			"code_lines": "ps.setInt(1, random);LiNeBrEaKcount += ps.executeUpdate();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('delete ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / (sw.elapsedTime() + 1)));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKps.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println('error : ' + random);LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKlong time = sw.elapsedTime();LiNeBrEaK"
		}, {
			"start_line": 636,
			"end_line": 642,
			"code_lines": "fileUtil.delete(path + '.properties');LiNeBrEaKfileUtil.delete(path + '.script');LiNeBrEaKfileUtil.delete(path + '.data');LiNeBrEaKfileUtil.delete(path + '.log');LiNeBrEaKfileUtil.delete(path + '.lck');LiNeBrEaKfileUtil.delete(path + '.csv');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/AbstractTestOdbc.java|",
		"loc": "129"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestUpdatableResultSets.java|",
		"loc": "193",
		"clones": [{
			"start_line": 65,
			"end_line": 84,
			"code_lines": "try {LiNeBrEaKstatement.execute('drop table t1 if exists');LiNeBrEaKstatement.execute(LiNeBrEaK'create table t1 (i int primary key, c varchar(10), t varbinary(3))');LiNeBrEaKString            insert = 'insert into t1 values(?,?,?)';LiNeBrEaKString            select = 'select i, c, t from t1';LiNeBrEaKPreparedStatement ps     = connection.prepareStatement(insert);LiNeBrEaKfor (int i = 0; i < 10; i++) {LiNeBrEaKps.setInt(1, i);LiNeBrEaKps.setString(2, String.valueOf(i) + ' s');LiNeBrEaKps.setBytes(3, new byte[] {LiNeBrEaK(byte) i, ' ', (byte) iLiNeBrEaK});LiNeBrEaKps.execute();LiNeBrEaK}LiNeBrEaKconnection.setAutoCommit(false);LiNeBrEaKResultSet rs = statement.executeQuery(select);LiNeBrEaKwhile (rs.next()) {LiNeBrEaKString s = rs.getString(2);LiNeBrEaK"
		}, {
			"start_line": 90,
			"end_line": 102,
			"code_lines": "}LiNeBrEaKconnection.rollback();LiNeBrEaKrs = statement.executeQuery(select);LiNeBrEaKwhile (rs.next()) {LiNeBrEaKString s = rs.getString(2);LiNeBrEaKSystem.out.println(s);LiNeBrEaK}LiNeBrEaKconnection.commit();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 145,
			"end_line": 157,
			"code_lines": "String            insert = 'insert into t1 values(?,?,?)';LiNeBrEaKString            select = 'select i, c, t from t1';LiNeBrEaKPreparedStatement ps     = connection.prepareStatement(insert);LiNeBrEaKfor (int i = 0; i < 10; i++) {LiNeBrEaKps.setInt(1, i);LiNeBrEaKps.setString(2, String.valueOf(i) + ' s');LiNeBrEaKps.setBytes(3, new byte[] {LiNeBrEaK(byte) i, ' ', (byte) iLiNeBrEaK});LiNeBrEaKps.execute();LiNeBrEaK}LiNeBrEaKconnection.setAutoCommit(false);LiNeBrEaK"
		}, {
			"start_line": 186,
			"end_line": 192,
			"code_lines": "}LiNeBrEaKconnection.commit();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestAllTypes.java|",
		"loc": "305",
		"clones": [{
			"start_line": 3,
			"end_line": 10,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.util.Random;LiNeBrEaK"
		}, {
			"start_line": 33,
			"end_line": 39,
			"code_lines": "user     = 'sa';LiNeBrEaKpassword = '';LiNeBrEaKtry {LiNeBrEaKsStatement  = null;LiNeBrEaKcConnection = null;LiNeBrEaKClass.forName('org.hsqldb.jdbc.JDBCDriver');LiNeBrEaK"
		}, {
			"start_line": 53,
			"end_line": 60,
			"code_lines": "}LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.setUp() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void testFillUp() {LiNeBrEaK"
		}, {
			"start_line": 68,
			"end_line": 77,
			"code_lines": "+ ' firstname VARCHAR(128), 'LiNeBrEaK+ ' lastname VARCHAR(128), 'LiNeBrEaK+ ' zip SMALLINT, 'LiNeBrEaK+ ' longfield BIGINT, 'LiNeBrEaK+ ' doublefield DOUBLE, 'LiNeBrEaK+ ' bigdecimalfield DECIMAL(19), 'LiNeBrEaK+ ' bigdecimal2field DECIMAL(20,4), 'LiNeBrEaK+ ' datefield DATE, 'LiNeBrEaK+ ' filler VARCHAR(128)); ';LiNeBrEaK"
		}, {
			"start_line": 92,
			"end_line": 99,
			"code_lines": "System.out.println('connected: ' + sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaKsStatement = cConnection.createStatement();LiNeBrEaKjava.util.Random randomgen = new java.util.Random();LiNeBrEaKsStatement.execute(ddl1);LiNeBrEaKsStatement.execute(ddl2);LiNeBrEaKsStatement.execute(ddl3);LiNeBrEaK"
		}, {
			"start_line": 100,
			"end_line": 109,
			"code_lines": "if (indexLastName) {LiNeBrEaKsStatement.execute(ddl4);LiNeBrEaKSystem.out.println('create index on lastname');LiNeBrEaK}LiNeBrEaKif (indexZip) {LiNeBrEaKsStatement.execute(ddl5);LiNeBrEaKSystem.out.println('create index on zip');LiNeBrEaK}LiNeBrEaKif (addForeignKey) {LiNeBrEaK"
		}, {
			"start_line": 136,
			"end_line": 149,
			"code_lines": "ps.execute();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0) {LiNeBrEaKSystem.out.println('Insert ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime());LiNeBrEaK}LiNeBrEaKif (deleteWhileInsert && i != 0LiNeBrEaK&& i % deleteWhileInsertInterval == 0) {LiNeBrEaKsStatement.execute('CALL IDENTITY();');LiNeBrEaKResultSet rs = sStatement.getResultSet();LiNeBrEaKrs.next();LiNeBrEaKint lastId = rs.getInt(1);LiNeBrEaKsStatement.execute(LiNeBrEaK'SELECT * INTO TEMP tempt FROM test WHERE id > 'LiNeBrEaK"
		}, {
			"start_line": 194,
			"end_line": 200,
			"code_lines": "cConnection.close();LiNeBrEaKSystem.out.println('Closed connection: ' + sw.elapsedTime());LiNeBrEaK} catch (SQLException e) {LiNeBrEaKSystem.out.println(e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 213,
			"end_line": 219,
			"code_lines": "slow = true;LiNeBrEaK}LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Select ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK"
		}, {
			"start_line": 237,
			"end_line": 243,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKSystem.out.println('Select random id ' + i + ' rows : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / sw.elapsedTime()));LiNeBrEaK"
		}, {
			"start_line": 274,
			"end_line": 280,
			"code_lines": "ps.setInt(1, random);LiNeBrEaKps.execute();LiNeBrEaKif (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Update ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK"
		}, {
			"start_line": 276,
			"end_line": 286,
			"code_lines": "if (reportProgress && (i + 1) % 10000 == 0LiNeBrEaK|| (slow && (i + 1) % 100 == 0)) {LiNeBrEaKSystem.out.println('Update ' + (i + 1) + ' : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK+ (i * 1000 / sw.elapsedTime()));LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKSystem.out.println('Update with random id ' + i + ' rows : 'LiNeBrEaK+ sw.elapsedTime() + ' rps: 'LiNeBrEaK"
		}, {
			"start_line": 287,
			"end_line": 297,
			"code_lines": "}LiNeBrEaKint nextIntRandom(Random r, int range) {LiNeBrEaKint b = r.nextInt();LiNeBrEaKif (b == Integer.MIN_VALUE) {LiNeBrEaKb = Integer.MAX_VALUE;LiNeBrEaK}LiNeBrEaKb = Math.abs(b);LiNeBrEaKreturn b % range;LiNeBrEaK}LiNeBrEaKpublic static void main(String[] argv) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestInstantiation.java|",
		"loc": "33"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestPreparedStatements.java|",
		"loc": "151",
		"clones": [{
			"start_line": 45,
			"end_line": 51,
			"code_lines": "new sqlStmt(LiNeBrEaK'insert into dttest values(current_date - 8 day, current_time - 5 hour, 2)',LiNeBrEaKfalse, true, null),LiNeBrEaKnew sqlStmt(LiNeBrEaK'insert into dttest values(current_date - 7 day, current_time - 4 hour, 3)',LiNeBrEaKfalse, true, null),LiNeBrEaK"
		}, {
			"start_line": 81,
			"end_line": 88,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKString url = 'jdbc:hsqldb:test';LiNeBrEaKtry {LiNeBrEaKClass.forName('org.hsqldb.jdbc.JDBCDriver');LiNeBrEaKcon = java.sql.DriverManager.getConnection(url, 'sa', '');LiNeBrEaK"
		}, {
			"start_line": 112,
			"end_line": 118,
			"code_lines": "System.out.println(' -- executing ');LiNeBrEaKif (stmtArray[i].update) {LiNeBrEaKint r = ps.executeUpdate();LiNeBrEaKSystem.out.println(' ***** ps.executeUpdate gave me 'LiNeBrEaK+ r);LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 135,
			"end_line": 145,
			"code_lines": "}LiNeBrEaK} else {LiNeBrEaKSystem.out.println(' -- executing directlyn<<<n'LiNeBrEaK+ stmtArray[i].command + 'n>>>n');LiNeBrEaKStatement s = con.createStatement();LiNeBrEaKboolean   b = s.execute(stmtArray[i].command);LiNeBrEaKSystem.out.println(' ***** st.execute gave me ' + b);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (Exception e) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestSql.java|",
		"loc": "653",
		"clones": [{
			"start_line": 3,
			"end_line": 9,
			"code_lines": "import java.sql.DatabaseMetaData;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 19,
			"end_line": 25,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKsuper.setUp();LiNeBrEaKtry {LiNeBrEaKconnection = super.newConnection();LiNeBrEaK"
		}, {
			"start_line": 119,
			"end_line": 131,
			"code_lines": "ResultSetMetaData rsmd    = rs.getMetaData();LiNeBrEaKString            result0 = '';LiNeBrEaKfor (; rs.next(); ) {LiNeBrEaKfor (int i = 0; i < rsmd.getColumnCount(); i++) {LiNeBrEaKresult0 += rs.getString(i + 1) + ':';LiNeBrEaK}LiNeBrEaKresult0 += 'n';LiNeBrEaK}LiNeBrEaKrs.close();LiNeBrEaKSystem.out.println(result0);LiNeBrEaK}LiNeBrEaK{LiNeBrEaK"
		}, {
			"start_line": 248,
			"end_line": 341,
			"code_lines": "double  value    = 0;LiNeBrEaKboolean wasEqual = false;LiNeBrEaKString  message  = 'DB operation completed';LiNeBrEaKString ddl1 =LiNeBrEaK'DROP TABLE t1 IF EXISTS;'LiNeBrEaK+ 'CREATE TABLE t1 ( d DECIMAL, f DOUBLE, l BIGINT, i INTEGER, s SMALLINT, t TINYINT, 'LiNeBrEaK+ 'dt DATE DEFAULT CURRENT_DATE, ti TIME DEFAULT CURRENT_TIME, ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP );';LiNeBrEaKtry {LiNeBrEaKstmnt.execute(ddl1);LiNeBrEaKPreparedStatement ps = connection.prepareStatement(LiNeBrEaK'INSERT INTO t1 (d,f,l,i,s,t,dt,ti,ts) VALUES (?,?,?,?,?,?,?,?,?)');LiNeBrEaKps.setString(1, '0.2');LiNeBrEaKps.setDouble(2, 0.2);LiNeBrEaKps.setLong(3, java.lang.Long.MAX_VALUE);LiNeBrEaKps.setInt(4, Integer.MAX_VALUE);LiNeBrEaKps.setInt(5, Short.MAX_VALUE);LiNeBrEaKps.setInt(6, 0);LiNeBrEaKps.setDate(7, new java.sql.Date(System.currentTimeMillis()));LiNeBrEaKps.setTime(8, new java.sql.Time(System.currentTimeMillis()));LiNeBrEaKps.setTimestamp(LiNeBrEaK9, new java.sql.Timestamp(System.currentTimeMillis()));LiNeBrEaKps.execute();LiNeBrEaKps.setInt(1, 0);LiNeBrEaKps.setDouble(2, java.lang.Double.NaN);LiNeBrEaKps.setLong(3, java.lang.Long.MIN_VALUE);LiNeBrEaKps.setInt(4, Integer.MIN_VALUE);LiNeBrEaKps.setInt(5, Short.MIN_VALUE);LiNeBrEaKps.setInt(6, 0);LiNeBrEaKps.setTimestamp(LiNeBrEaK7, new java.sql.Timestamp(System.currentTimeMillis() + 1));LiNeBrEaKps.setTime(8, new java.sql.Time(System.currentTimeMillis() + 1));LiNeBrEaKps.setDate(9, new java.sql.Date(System.currentTimeMillis() + 1));LiNeBrEaKps.execute();LiNeBrEaKps.setInt(1, 0);LiNeBrEaKps.setDouble(2, java.lang.Double.POSITIVE_INFINITY);LiNeBrEaKps.setInt(4, Integer.MIN_VALUE);LiNeBrEaKps.setObject(5, new Short((short) 2), Types.SMALLINT);LiNeBrEaKps.setObject(6, new Integer(2), Types.TINYINT);LiNeBrEaKps.setObject(7, new java.sql.Date(System.currentTimeMillis() + 2));LiNeBrEaKps.setObject(8, new java.sql.Time(System.currentTimeMillis() + 2));LiNeBrEaKps.setObject(9, new java.sql.Timestamp(System.currentTimeMillis()LiNeBrEaK+ 2));LiNeBrEaKps.execute();LiNeBrEaKps.setObject(1, new Float(0), Types.INTEGER);LiNeBrEaKps.setObject(4, new Float(1), Types.INTEGER);LiNeBrEaKps.setDouble(2, java.lang.Double.NEGATIVE_INFINITY);LiNeBrEaKps.execute();LiNeBrEaKResultSet rs =LiNeBrEaKstmnt.executeQuery('SELECT d, f, l, i, s*2, t FROM t1');LiNeBrEaKboolean result = rs.next();LiNeBrEaKvalue = rs.getDouble(2);LiNeBrEaKint integerValue = rs.getInt(4);LiNeBrEaKif (rs.next()) {LiNeBrEaKvalue        = rs.getDouble(2);LiNeBrEaKwasEqual     = Double.isNaN(value);LiNeBrEaKintegerValue = rs.getInt(4);LiNeBrEaKintegerValue = rs.getInt(1);LiNeBrEaK}LiNeBrEaKif (rs.next()) {LiNeBrEaKvalue    = rs.getDouble(2);LiNeBrEaKwasEqual = wasEqual && value == Double.POSITIVE_INFINITY;LiNeBrEaK}LiNeBrEaKif (rs.next()) {LiNeBrEaKvalue    = rs.getDouble(2);LiNeBrEaKwasEqual = wasEqual && value == Double.NEGATIVE_INFINITY;LiNeBrEaK}LiNeBrEaKrs = stmnt.executeQuery('SELECT MAX(i) FROM t1');LiNeBrEaKif (rs.next()) {LiNeBrEaKint max = rs.getInt(1);LiNeBrEaKSystem.out.println('Max value for i: ' + max);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKps.setString(5, 'three');LiNeBrEaKfail('update did not fail');LiNeBrEaK} catch (SQLException e) {}LiNeBrEaK{LiNeBrEaKstmnt.execute('drop table CDTYPE if exists');LiNeBrEaKstmnt.execute(LiNeBrEaK'CREATE TABLE cdType (ID INTEGER NOT NULL, name VARCHAR(50), PRIMARY KEY(ID))');LiNeBrEaKrs = stmnt.executeQuery('SELECT MAX(ID) FROM cdType');LiNeBrEaKif (rs.next()) {LiNeBrEaKint max = rs.getInt(1);LiNeBrEaKSystem.out.println('Max value for ID: ' + max);LiNeBrEaK} else {LiNeBrEaKSystem.out.println('Max value for ID not returned');LiNeBrEaK}LiNeBrEaKstmnt.executeUpdate(LiNeBrEaK'INSERT INTO cdType VALUES (10,'Test String');');LiNeBrEaKstmnt.execute('CALL IDENTITY();');LiNeBrEaKtry {LiNeBrEaKstmnt.executeUpdate(LiNeBrEaK'INSERT INTO cdType VALUES (10,'Test String');');LiNeBrEaK} catch (SQLException e1) {LiNeBrEaK"
		}, {
			"start_line": 342,
			"end_line": 351,
			"code_lines": "connection.rollback();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testDoubleNaN complete');LiNeBrEaKassertEquals(true, wasEqual);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 380,
			"end_line": 388,
			"code_lines": "connection.prepareStatement('create table test (id integer)');LiNeBrEaKpstmt.execute();LiNeBrEaKpstmt =LiNeBrEaKconnection.prepareStatement('insert into test values (10)');LiNeBrEaKpstmt.execute();LiNeBrEaKpstmt =LiNeBrEaKconnection.prepareStatement('insert into test values (20)');LiNeBrEaKpstmt.execute();LiNeBrEaK"
		}, {
			"start_line": 482,
			"end_line": 513,
			"code_lines": "st.execute(LiNeBrEaK'CREATE TABLE t1 (id int not null, v1 int, v2 int, primary key(id))');LiNeBrEaKst.execute(LiNeBrEaK'CREATE TABLE t2 (id int not null, v1 int, v3 int, primary key(id))');LiNeBrEaKst.execute('INSERT INTO t1 values(1,1,1)');LiNeBrEaKst.execute('INSERT INTO t1 values(2,2,2)');LiNeBrEaKst.execute('INSERT INTO t2 values(1,3,3)');LiNeBrEaKResultSet rs = st.executeQuery(LiNeBrEaK'select t as atable, a as idvalue, b as value1, c as value2, d as value3 from('LiNeBrEaK+ '(select 't1' as t, t1.id as a, t1.v1 as b, t1.v2 as c, null as d from t1) union'LiNeBrEaK+ '(select 't2' as t, t2.id as a, t2.v1 as b, null as c, t2.v3 as d from t2)) order by atable, idvalue');LiNeBrEaKassertTrue(rs.next());LiNeBrEaKassertEquals('t1', rs.getObject('atable'));LiNeBrEaKassertEquals(1, rs.getInt('idvalue'));LiNeBrEaKassertEquals(1, rs.getInt('value1'));LiNeBrEaKassertEquals(1, rs.getInt('value2'));LiNeBrEaKassertEquals(null, rs.getObject('value3'));LiNeBrEaKassertTrue(rs.next());LiNeBrEaKassertEquals('t1', rs.getObject('atable'));LiNeBrEaKassertEquals(2, rs.getInt('idvalue'));LiNeBrEaKassertEquals(2, rs.getInt('value1'));LiNeBrEaKassertEquals(2, rs.getInt('value2'));LiNeBrEaKassertEquals(null, rs.getObject('value3'));LiNeBrEaKassertTrue(rs.next());LiNeBrEaKassertEquals('t2', rs.getObject('atable'));LiNeBrEaKassertEquals(1, rs.getInt('idvalue'));LiNeBrEaKassertEquals(3, rs.getInt('value1'));LiNeBrEaKassertEquals(null, rs.getObject('value2'));LiNeBrEaKassertEquals(3, rs.getInt('value3'));LiNeBrEaKassertFalse(rs.next());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 592,
			"end_line": 598,
			"code_lines": "+ 'from bintest';LiNeBrEaKr = sStatement.executeQuery(s);LiNeBrEaKr.next();LiNeBrEaKb1n = r.getBytes(1);LiNeBrEaKr.next();LiNeBrEaKb1n = r.getBytes(1);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestUtil.java|",
		"loc": "738",
		"clones": [{
			"start_line": 426,
			"end_line": 440,
			"code_lines": "}LiNeBrEaKprotected boolean test(Statement aStatement) {LiNeBrEaKtry {LiNeBrEaKtry {LiNeBrEaKaStatement.execute(getSql());LiNeBrEaK} catch (SQLException s) {LiNeBrEaKthrow new Exception('Expected a ResultSet, but got the error: 'LiNeBrEaK+ s.getMessage());LiNeBrEaK}LiNeBrEaKif (aStatement.getUpdateCount() != -1) {LiNeBrEaKthrow new Exception(LiNeBrEaK'Expected a ResultSet, but got an update count of 'LiNeBrEaK+ aStatement.getUpdateCount());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 474,
			"end_line": 481,
			"code_lines": "}LiNeBrEaKprotected boolean test(Statement aStatement) {LiNeBrEaKtry {LiNeBrEaKtry {LiNeBrEaKaStatement.execute(getSql());LiNeBrEaK} catch (SQLException s) {LiNeBrEaKthrow new Exception('Expected an update count of 'LiNeBrEaK"
		}, {
			"start_line": 491,
			"end_line": 497,
			"code_lines": "} catch (Exception x) {LiNeBrEaKmessage = x.toString();LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 572,
			"end_line": 581,
			"code_lines": "try {LiNeBrEaKint index = trimmed.indexOf(' ');LiNeBrEaKif (index < 0) {LiNeBrEaKthrow new IllegalArgumentException();LiNeBrEaK}LiNeBrEaKenforceSequence = Boolean.valueOf(trimmed.substring(0,LiNeBrEaKindex)).booleanValue();LiNeBrEaKwaiter = Waiter.getWaiter(trimmed.substring(index).trim());LiNeBrEaK} catch (IllegalArgumentException ie) {LiNeBrEaK"
		}, {
			"start_line": 589,
			"end_line": 600,
			"code_lines": "}LiNeBrEaKfor (int i = 0; i < lines.length; i++) {LiNeBrEaKif (i > 0) {LiNeBrEaKsb.append(LS);LiNeBrEaK}LiNeBrEaKsb.append('+ ' + lines[i]);LiNeBrEaK}LiNeBrEaKTestUtil.expandStamps(sb);LiNeBrEaKreturn sb.toString().trim();LiNeBrEaK}LiNeBrEaKprotected boolean test(Statement aStatement) {LiNeBrEaK"
		}, {
			"start_line": 608,
			"end_line": 614,
			"code_lines": "}LiNeBrEaKprotected String getResultString() {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaKprotected boolean test(Statement aStatement) {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 624,
			"end_line": 642,
			"code_lines": "countWeWant = Integer.parseInt(lines[0]);LiNeBrEaK}LiNeBrEaKprotected String getResultString() {LiNeBrEaKreturn Integer.toString(getCountWeWant());LiNeBrEaK}LiNeBrEaKprivate int getCountWeWant() {LiNeBrEaKreturn countWeWant;LiNeBrEaK}LiNeBrEaKprotected boolean test(Statement aStatement) {LiNeBrEaKtry {LiNeBrEaKtry {LiNeBrEaKaStatement.execute(getSql());LiNeBrEaK} catch (SQLException s) {LiNeBrEaKthrow new Exception('Expected a ResultSet containing 'LiNeBrEaK+ getCountWeWant()LiNeBrEaK+ ' rows, but got the error: 'LiNeBrEaK+ s.getMessage());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 640,
			"end_line": 647,
			"code_lines": "+ s.getMessage());LiNeBrEaK}LiNeBrEaKif (aStatement.getUpdateCount() != -1) {LiNeBrEaKthrow new Exception(LiNeBrEaK'Expected a ResultSet, but got an update count of 'LiNeBrEaK+ aStatement.getUpdateCount());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 657,
			"end_line": 665,
			"code_lines": "}LiNeBrEaK} catch (Exception x) {LiNeBrEaKmessage = x.toString();LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 722,
			"end_line": 737,
			"code_lines": "}LiNeBrEaKprotected String getResultString() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKif (lines.length == 1 && lines[0].trim().length() < 1) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < lines.length; i++) {LiNeBrEaKif (i > 0) {LiNeBrEaKsb.append(LS);LiNeBrEaK}LiNeBrEaKsb.append('+ ' + lines[i]);LiNeBrEaK}LiNeBrEaKTestUtil.expandStamps(sb);LiNeBrEaKreturn sb.toString().trim();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/ClearTests.java|",
		"loc": "17",
		"clones": [{
			"start_line": 5,
			"end_line": 15,
			"code_lines": "TestUtil.deleteDatabase('test1');LiNeBrEaKTestUtil.deleteDatabase('test2');LiNeBrEaKTestUtil.deleteDatabase('test3');LiNeBrEaKTestUtil.deleteDatabase('/hsql/testbench/test');LiNeBrEaKTestUtil.deleteDatabase('/hsql/jdbcbench/test');LiNeBrEaKTestUtil.deleteDatabase('/hsql/test/subselect');LiNeBrEaKTestUtil.deleteDatabase('/hsql/test/testpersistent');LiNeBrEaKTestUtil.deleteDatabase('/hsql/testdima/test');LiNeBrEaKTestUtil.deleteDatabase('/hsql/testpa/test');LiNeBrEaKTestUtil.deleteDatabase('/hsql/testtime/test');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestLibSpeed.java|",
		"loc": "167",
		"clones": [{
			"start_line": 13,
			"end_line": 64,
			"code_lines": "'ACOS', 'java.lang.Math.acos'LiNeBrEaK}, {LiNeBrEaK'ASIN', 'java.lang.Math.asin'LiNeBrEaK}, {LiNeBrEaK'ATAN', 'java.lang.Math.atan'LiNeBrEaK}, {LiNeBrEaK'ATAN2', 'java.lang.Math.atan2'LiNeBrEaK}, {LiNeBrEaK'CEILING', 'java.lang.Math.ceil'LiNeBrEaK}, {LiNeBrEaK'COS', 'java.lang.Math.cos'LiNeBrEaK}, {LiNeBrEaK'COT', 'org.hsqldb.Library.cot'LiNeBrEaK}, {LiNeBrEaK'DEGREES', 'java.lang.Math.toDegrees'LiNeBrEaK}, {LiNeBrEaK'EXP', 'java.lang.Math.exp'LiNeBrEaK}, {LiNeBrEaK'FLOOR', 'java.lang.Math.floor'LiNeBrEaK}, {LiNeBrEaK'LOG', 'java.lang.Math.log'LiNeBrEaK}, {LiNeBrEaK'LOG10', 'org.hsqldb.Library.log10'LiNeBrEaK}, {LiNeBrEaK'MOD', 'org.hsqldb.Library.mod'LiNeBrEaK}, {LiNeBrEaK'PI', 'org.hsqldb.Library.pi'LiNeBrEaK}, {LiNeBrEaK'POWER', 'java.lang.Math.pow'LiNeBrEaK}, {LiNeBrEaK'RADIANS', 'java.lang.Math.toRadians'LiNeBrEaK}, {LiNeBrEaK'RAND', 'java.lang.Math.random'LiNeBrEaK}, {LiNeBrEaK'ROUND', 'org.hsqldb.Library.round'LiNeBrEaK}, {LiNeBrEaK'SIGN', 'org.hsqldb.Library.sign'LiNeBrEaK}, {LiNeBrEaK'SIN', 'java.lang.Math.sin'LiNeBrEaK}, {LiNeBrEaK'SQRT', 'java.lang.Math.sqrt'LiNeBrEaK}, {LiNeBrEaK'TAN', 'java.lang.Math.tan'LiNeBrEaK}, {LiNeBrEaK'TRUNCATE', 'org.hsqldb.Library.truncate'LiNeBrEaK}, {LiNeBrEaK'BITAND', 'org.hsqldb.Library.bitand'LiNeBrEaK}, {LiNeBrEaK'BITOR', 'org.hsqldb.Library.bitor'LiNeBrEaK}, {LiNeBrEaK'ROUNDMAGIC', 'org.hsqldb.Library.roundMagic'LiNeBrEaK"
		}, {
			"start_line": 119,
			"end_line": 127,
			"code_lines": "dummy += r;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('IntKeyHashMap Lookup ' + sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaKfor (int j = 0; j < count; j++) {LiNeBrEaKfor (int i = 0; i < sNumeric.length; i++) {LiNeBrEaKint r = randomgen.nextInt(sNumeric.length);LiNeBrEaK"
		}, {
			"start_line": 128,
			"end_line": 136,
			"code_lines": "dummy += r;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('DoubleIntTable Lookup ' + sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaKfor (int j = 0; j < count; j++) {LiNeBrEaKfor (int i = 0; i < sNumeric.length; i++) {LiNeBrEaKint r = randomgen.nextInt(sNumeric.length);LiNeBrEaK"
		}, {
			"start_line": 137,
			"end_line": 146,
			"code_lines": "dummy += r;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('IntKeyIntValueHashMap Lookup 'LiNeBrEaK+ sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaKfor (int j = 0; j < count; j++) {LiNeBrEaKfor (int i = 0; i < sNumeric.length; i++) {LiNeBrEaKint r = randomgen.nextInt(sNumeric.length);LiNeBrEaK"
		}, {
			"start_line": 146,
			"end_line": 160,
			"code_lines": "dummy += r;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('emptyOp ' + sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaKfor (int j = 0; j < count; j++) {LiNeBrEaKfor (int i = 0; i < sNumeric.length; i++) {LiNeBrEaKint r = randomgen.nextInt(sNumeric.length);LiNeBrEaKdoubleIntLookup.findFirstEqualKeyIndex(r);LiNeBrEaKdummy += r;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('DoubleIntTable Lookup ' + sw.elapsedTime());LiNeBrEaKsw.zero();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBug778213.java|",
		"loc": "106",
		"clones": [{
			"start_line": 33,
			"end_line": 39,
			"code_lines": "} catch (Exception e) {LiNeBrEaKassertTrue('unable to prepare or execute DDL', false);LiNeBrEaK} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKconn = newConnection();LiNeBrEaK"
		}, {
			"start_line": 67,
			"end_line": 76,
			"code_lines": "} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKif (exception) {LiNeBrEaKassertTrue('not expected exception batching prepared DDL', false);LiNeBrEaK}LiNeBrEaKconn = newConnection();LiNeBrEaKtry {LiNeBrEaKpstmt = conn.prepareStatement('create table test(id int)');LiNeBrEaK"
		}, {
			"start_line": 78,
			"end_line": 84,
			"code_lines": "} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKconn = newConnection();LiNeBrEaKtry {LiNeBrEaKpstmt = conn.prepareStatement('create table test(id int)');LiNeBrEaK"
		}, {
			"start_line": 89,
			"end_line": 96,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 97,
			"end_line": 106,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestBug778213 failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestHarness.java|",
		"loc": "180",
		"clones": [{
			"start_line": 112,
			"end_line": 118,
			"code_lines": "try {LiNeBrEaKConnection con = getConnection('ABCD', 'dcba', false);LiNeBrEaKif (con != null) {LiNeBrEaKStatement stmt = con.createStatement();LiNeBrEaKResultSet rs = stmt.executeQuery(LiNeBrEaK'SELECT * FROM MyTable ORDER BY Id ASC');LiNeBrEaK"
		}, {
			"start_line": 123,
			"end_line": 130,
			"code_lines": "stmt.close();LiNeBrEaKcon.close();LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 139,
			"end_line": 145,
			"code_lines": "stmt.close();LiNeBrEaKcon.close();LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestStoredProcedure.java|",
		"loc": "363",
		"clones": [{
			"start_line": 3,
			"end_line": 9,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 93,
			"end_line": 99,
			"code_lines": "} catch (Exception e) {LiNeBrEaKassertTrue('unable to execute call to procedure', false);LiNeBrEaK} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 118,
			"end_line": 134,
			"code_lines": "Connection conn = newConnection();LiNeBrEaKStatement  st   = conn.createStatement();LiNeBrEaKst.execute('declare varone int default 0;');LiNeBrEaKst.execute(LiNeBrEaK'create procedure proc_inout_result_two (inout intp int) 'LiNeBrEaK+ ' language java reads sql data dynamic result sets 2 external name 'CLASSPATH:org.hsqldb.test.TestStoredProcedure.procWithResultTwo'');LiNeBrEaKCallableStatement cs =LiNeBrEaKconn.prepareCall('call proc_inout_result_two(varone)');LiNeBrEaKboolean isResult = cs.execute();LiNeBrEaKassertFalse(isResult);LiNeBrEaKcs.getMoreResults();LiNeBrEaKResultSet rs = cs.getResultSet();LiNeBrEaKrs.next();LiNeBrEaKassertEquals(rs.getString(1), 'SYSTEM_LOBS');LiNeBrEaKassertEquals(rs.getString(2), 'LOB_IDS');LiNeBrEaKrs.close();LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 166,
			"code_lines": "boolean isResult = cs.execute();LiNeBrEaKassertFalse(isResult);LiNeBrEaKcs.getMoreResults();LiNeBrEaKResultSet rs = cs.getResultSet();LiNeBrEaKrs.next();LiNeBrEaKassertEquals(rs.getString(1), 'SYSTEM_LOBS');LiNeBrEaKassertEquals(rs.getString(2), 'LOB_IDS');LiNeBrEaKrs.close();LiNeBrEaKif (cs.getMoreResults()) {LiNeBrEaKrs = cs.getResultSet();LiNeBrEaKrs.next();LiNeBrEaKassertEquals(rs.getString(1), 'SYSTEM_LOBS');LiNeBrEaKassertEquals(rs.getString(2), 'LOBS');LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 286,
			"end_line": 294,
			"code_lines": "conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);LiNeBrEaKStatement st = conn.createStatement();LiNeBrEaKResultSet rs = st.executeQuery(LiNeBrEaK'select count(*) from information_schema.columns where table_name='LOB_IDS' and table_schema='SYSTEM_LOBS'');LiNeBrEaKif (rs.next()) {LiNeBrEaKintparam[0] = rs.getInt(1);LiNeBrEaKrs.close();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 346,
			"end_line": 353,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 354,
			"end_line": 363,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestStoredProcedure failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestHSQLDB.java|",
		"loc": "43",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBench.java|",
		"loc": "762",
		"clones": [{
			"start_line": 2,
			"end_line": 11,
			"code_lines": "import java.io.PrintStream;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.util.Enumeration;LiNeBrEaKimport java.util.Vector;LiNeBrEaK"
		}, {
			"start_line": 19,
			"end_line": 26,
			"code_lines": "public static final int TELLER              = 0;LiNeBrEaKpublic static final int BRANCH              = 1;LiNeBrEaKpublic static final int ACCOUNT             = 2;LiNeBrEaKint                     failed_transactions = 0;LiNeBrEaKint                     transaction_count   = 0;LiNeBrEaKstatic int              n_clients           = 10;LiNeBrEaKstatic int              n_txn_per_client    = 10;LiNeBrEaK"
		}, {
			"start_line": 33,
			"end_line": 39,
			"code_lines": "MemoryWatcherThread     MemoryWatcher;LiNeBrEaKpublic static void main(String[] Args) {LiNeBrEaKString  DriverName         = '';LiNeBrEaKString  DBUrl              = '';LiNeBrEaKString  DBUser             = '';LiNeBrEaKString  DBPassword         = '';LiNeBrEaK"
		}, {
			"start_line": 40,
			"end_line": 50,
			"code_lines": "for (int i = 0; i < Args.length; i++) {LiNeBrEaKif (Args[i].equals('-clients')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKn_clients = Integer.parseInt(Args[i]);LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-driver')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKDriverName = Args[i];LiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 64,
			"code_lines": "}LiNeBrEaK} else if (Args[i].equals('-url')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKDBUrl = Args[i];LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-user')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKDBUser = Args[i];LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-password')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 79,
			"code_lines": "}LiNeBrEaK} else if (Args[i].equals('-password')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKDBPassword = Args[i];LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-tpc')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKn_txn_per_client = Integer.parseInt(Args[i]);LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-init')) {LiNeBrEaKinitialize_dataset = true;LiNeBrEaK} else if (Args[i].equals('-tps')) {LiNeBrEaKif (i + 1 < Args.length) {LiNeBrEaKi++;LiNeBrEaKtps = Integer.parseInt(Args[i]);LiNeBrEaK}LiNeBrEaK} else if (Args[i].equals('-rounds')) {LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 113,
			"code_lines": "} else if (Args[i].equals('-v')) {LiNeBrEaKverbose = true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (DriverName.length() == 0 || DBUrl.length() == 0) {LiNeBrEaKSystem.out.println(LiNeBrEaK'usage: java TestBench -driver [driver_class_name] -url [url_to_db] -user [username] -password [password] [-v] [-init] [-tpc n] [-clients n]');LiNeBrEaKSystem.out.println();LiNeBrEaKSystem.out.println('-v          verbose error messages');LiNeBrEaKSystem.out.println('-init       initialize the tables');LiNeBrEaKSystem.out.println('-tpc        transactions per client');LiNeBrEaKSystem.out.println('-clients    number of simultaneous clients');LiNeBrEaKSystem.exit(-1);LiNeBrEaK}LiNeBrEaKSystem.out.println(LiNeBrEaK'*********************************************************');LiNeBrEaKSystem.out.println(LiNeBrEaK'* TestBench v1.1                                        *');LiNeBrEaKSystem.out.println(LiNeBrEaK'*********************************************************');LiNeBrEaKSystem.out.println();LiNeBrEaKSystem.out.println('Driver: ' + DriverName);LiNeBrEaKSystem.out.println('URL:' + DBUrl);LiNeBrEaKSystem.out.println();LiNeBrEaKSystem.out.println('Scale factor value: ' + tps);LiNeBrEaKSystem.out.println('Number of clients: ' + n_clients);LiNeBrEaKSystem.out.println('Number of transactions per client: 'LiNeBrEaK+ n_txn_per_client);LiNeBrEaK"
		}, {
			"start_line": 131,
			"end_line": 150,
			"code_lines": "Vector      vClient  = new Vector();LiNeBrEaKThread      Client   = null;LiNeBrEaKEnumeration e        = null;LiNeBrEaKConnection  guardian = null;LiNeBrEaKtry {LiNeBrEaKjava.util.Date start = new java.util.Date();LiNeBrEaKif (init) {LiNeBrEaKSystem.out.println('Start: ' + start.toString());LiNeBrEaKSystem.out.print('Initializing dataset...');LiNeBrEaKcreateDatabase(url, user, password);LiNeBrEaKdouble seconds = (System.currentTimeMillis() - start.getTime())LiNeBrEaK/ 1000D;LiNeBrEaKSystem.out.println('done. in ' + seconds + ' secondsn');LiNeBrEaKSystem.out.println('Complete: 'LiNeBrEaK+ (new java.util.Date()).toString());LiNeBrEaK}LiNeBrEaKSystem.out.println('* Starting Benchmark Run *');LiNeBrEaKMemoryWatcher = new MemoryWatcherThread();LiNeBrEaKMemoryWatcher.start();LiNeBrEaK"
		}, {
			"start_line": 168,
			"end_line": 176,
			"code_lines": "E.printStackTrace();LiNeBrEaK} finally {LiNeBrEaKMemoryWatcher.end();LiNeBrEaKtry {LiNeBrEaKMemoryWatcher.join();LiNeBrEaKif (ShutdownCommand.length() > 0) {LiNeBrEaKguardian = connect(url, user, password);LiNeBrEaKStatement Stmt = guardian.createStatement();LiNeBrEaK"
		}, {
			"start_line": 200,
			"end_line": 211,
			"code_lines": "Client.start();LiNeBrEaKvClient.addElement(Client);LiNeBrEaK}LiNeBrEaKe = vClient.elements();LiNeBrEaKwhile (e.hasMoreElements()) {LiNeBrEaKClient = (Thread) e.nextElement();LiNeBrEaKClient.join();LiNeBrEaK}LiNeBrEaKvClient.removeAllElements();LiNeBrEaKreportDone();LiNeBrEaKguardian = connect(url, user, password);LiNeBrEaK"
		}, {
			"start_line": 214,
			"end_line": 220,
			"code_lines": "connectClose(guardian);LiNeBrEaK}LiNeBrEaKpublic void reportDone() {LiNeBrEaKlong end_time = System.currentTimeMillis();LiNeBrEaKdouble completion_time = ((double) end_time - (double) start_time)LiNeBrEaK/ 1000;LiNeBrEaK"
		}, {
			"start_line": 221,
			"end_line": 233,
			"code_lines": "System.out.println('n--------------------');LiNeBrEaKSystem.out.println('Time to execute ' + transaction_countLiNeBrEaK+ ' transactions: ' + completion_timeLiNeBrEaK+ ' seconds.');LiNeBrEaKSystem.out.println('Max/Min memory usage: 'LiNeBrEaK+ (MemoryWatcher.max / 1024) + ' / 'LiNeBrEaK+ (MemoryWatcher.min / 1024) + ' kb');LiNeBrEaKSystem.out.println(failed_transactions + ' / ' + transaction_countLiNeBrEaK+ ' failed to complete.');LiNeBrEaKdouble rate = (transaction_count - failed_transactions)LiNeBrEaK/ completion_time;LiNeBrEaKSystem.out.println('Transaction rate: ' + rate + ' txn/sec.');LiNeBrEaK"
		}, {
			"start_line": 236,
			"end_line": 251,
			"code_lines": "transaction_count   = 0;LiNeBrEaKfailed_transactions = 0;LiNeBrEaKMemoryWatcher.reset();LiNeBrEaK}LiNeBrEaKpublic synchronized void incrementTransactionCount() {LiNeBrEaKtransaction_count++;LiNeBrEaK}LiNeBrEaKpublic synchronized void incrementFailedTransactionCount() {LiNeBrEaKfailed_transactions++;LiNeBrEaK}LiNeBrEaKvoid createDatabase(String url, String user,LiNeBrEaKString password) throws Exception {LiNeBrEaKConnection Conn = connect(url, user, password);LiNeBrEaKString     s    = Conn.getMetaData().getDatabaseProductName();LiNeBrEaKSystem.out.println('DBMS: ' + s);LiNeBrEaK"
		}, {
			"start_line": 259,
			"end_line": 266,
			"code_lines": "Query = 'SELECT count(*) ';LiNeBrEaKQuery += 'FROM   accounts';LiNeBrEaKResultSet RS = Stmt.executeQuery(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKwhile (RS.next()) {LiNeBrEaKaccountsnb = RS.getInt(1);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 267,
			"end_line": 278,
			"code_lines": "Stmt.close();LiNeBrEaKif (accountsnb == (naccounts * tps)) {LiNeBrEaKSystem.out.println('Already initialized');LiNeBrEaKconnectClose(Conn);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK} catch (Exception E) {}LiNeBrEaKSystem.out.println('Drop old tables if they exist');LiNeBrEaKtry {LiNeBrEaKStatement Stmt = Conn.createStatement();LiNeBrEaKString    Query;LiNeBrEaK"
		}, {
			"start_line": 284,
			"end_line": 296,
			"code_lines": "Query = 'DROP TABLE history';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DROP TABLE accounts';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DROP TABLE tellers';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DROP TABLE branches';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaK"
		}, {
			"start_line": 316,
			"end_line": 327,
			"code_lines": "Stmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'CREATE TABLE accounts ('LiNeBrEaK+ 'Aid         INTEGER NOT NULL PRIMARY KEY, 'LiNeBrEaK+ 'Bid         INTEGER, ' + 'Abalance    INTEGER, 'LiNeBrEaK+ 'filler      VARCHAR(84))';LiNeBrEaKif (createExtension.length() > 0) {LiNeBrEaKQuery += createExtension;LiNeBrEaK}LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaK"
		}, {
			"start_line": 334,
			"end_line": 344,
			"code_lines": "'CREATE PROCEDURE UPDATE_PROC(IN paid INT, IN ptid INT, IN pbid INT, IN pdelta INT, OUT pbalance INT) 'LiNeBrEaK+ 'MODIFIES SQL DATA BEGIN ATOMIC 'LiNeBrEaK+ 'DECLARE account CURSOR WITH RETURN FOR SELECT Abalance FROM accounts WHERE  Aid = paid;'LiNeBrEaK+ 'UPDATE accounts SET Abalance = abalance + pdelta WHERE  aid = paid;'LiNeBrEaK+ 'OPEN account;'LiNeBrEaK+ 'SELECT Abalance INTO pbalance FROM  accounts WHERE  Aid = paid;'LiNeBrEaK+ 'UPDATE tellers SET Tbalance = Tbalance + pdelta WHERE  Tid = ptid;'LiNeBrEaK+ 'UPDATE branches SET Bbalance = Bbalance + pdelta WHERE  Bid = pbid;'LiNeBrEaK+ 'INSERT INTO history(Tid, Bid, Aid, delta) VALUES (ptid,pbid,paid,pdelta);'LiNeBrEaK+ 'END';LiNeBrEaK"
		}, {
			"start_line": 357,
			"end_line": 373,
			"code_lines": "try {LiNeBrEaKStatement Stmt = Conn.createStatement();LiNeBrEaKString    Query;LiNeBrEaKQuery = 'DELETE FROM history';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM accounts';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM tellers';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKQuery = 'DELETE FROM branches';LiNeBrEaKStmt.execute(Query);LiNeBrEaKStmt.clearWarnings();LiNeBrEaKConn.commit();LiNeBrEaK"
		}, {
			"start_line": 393,
			"end_line": 404,
			"code_lines": "pstmt.executeUpdate();LiNeBrEaKpstmt.clearWarnings();LiNeBrEaKif (i % 100 == 0) {LiNeBrEaKConn.commit();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpstmt.close();LiNeBrEaKConn.commit();LiNeBrEaKQuery = 'INSERT INTO accounts(Aid,Bid,Abalance) VALUES (?,?,0)';LiNeBrEaKpstmt = Conn.prepareStatement(Query);LiNeBrEaKSystem.out.println('Insert data in accounts table');LiNeBrEaK"
		}, {
			"start_line": 427,
			"end_line": 460,
			"code_lines": "E.printStackTrace();LiNeBrEaK}LiNeBrEaKconnectClose(Conn);LiNeBrEaK}LiNeBrEaKpublic static int getRandomInt(int lo, int hi) {LiNeBrEaKint ret = 0;LiNeBrEaKret = (int) (Math.random() * (hi - lo + 1));LiNeBrEaKret += lo;LiNeBrEaKreturn ret;LiNeBrEaK}LiNeBrEaKpublic static int getRandomID(int type) {LiNeBrEaKint min = 0,LiNeBrEaKmax = 0;LiNeBrEaKswitch (type) {LiNeBrEaKcase TELLER :LiNeBrEaKmax = ntellers * tps - 1;LiNeBrEaKbreak;LiNeBrEaKcase BRANCH :LiNeBrEaKmax = nbranches * tps - 1;LiNeBrEaKbreak;LiNeBrEaKcase ACCOUNT :LiNeBrEaKmax = naccounts * tps - 1;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKreturn (getRandomInt(min, max));LiNeBrEaK}LiNeBrEaKpublic static Connection connect(String DBUrl, String DBUser,LiNeBrEaKString DBPassword) {LiNeBrEaKtry {LiNeBrEaKConnection conn = DriverManager.getConnection(DBUrl, DBUser,LiNeBrEaKDBPassword);LiNeBrEaKreturn conn;LiNeBrEaK} catch (Exception E) {LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 472,
			"code_lines": "E.printStackTrace();LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic static void connectClose(Connection c) {LiNeBrEaKif (c == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKc.close();LiNeBrEaK} catch (Exception E) {LiNeBrEaK"
		}, {
			"start_line": 473,
			"end_line": 482,
			"code_lines": "E.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid checkSums(Connection conn) throws SQLException {LiNeBrEaKStatement st1 = null;LiNeBrEaKResultSet rs  = null;LiNeBrEaKint       bbalancesum;LiNeBrEaKint       tbalancesum;LiNeBrEaKint       abalancesum;LiNeBrEaK"
		}, {
			"start_line": 483,
			"end_line": 494,
			"code_lines": "int       deltasum;LiNeBrEaKtry {LiNeBrEaKst1 = conn.createStatement();LiNeBrEaKrs  = st1.executeQuery('select sum(bbalance) from branches');LiNeBrEaKrs.next();LiNeBrEaKbbalancesum = rs.getInt(1);LiNeBrEaKrs.close();LiNeBrEaKrs = st1.executeQuery('select sum(tbalance) from tellers');LiNeBrEaKrs.next();LiNeBrEaKtbalancesum = rs.getInt(1);LiNeBrEaKrs.close();LiNeBrEaK"
		}, {
			"start_line": 499,
			"end_line": 507,
			"code_lines": "rs.close();LiNeBrEaKrs = st1.executeQuery('select sum(delta) from history');LiNeBrEaKrs.next();LiNeBrEaKdeltasum = rs.getInt(1);LiNeBrEaKrs.close();LiNeBrEaKrs = null;LiNeBrEaKst1.close();LiNeBrEaKst1 = null;LiNeBrEaK"
		}, {
			"start_line": 508,
			"end_line": 514,
			"code_lines": "if (abalancesum != bbalancesum || bbalancesum != tbalancesumLiNeBrEaK|| tbalancesum != deltasum) {LiNeBrEaKSystem.out.println('sums don't match!');LiNeBrEaK} else {LiNeBrEaKSystem.out.println('sums match!');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 517,
			"end_line": 540,
			"code_lines": "} finally {LiNeBrEaKif (st1 != null) {LiNeBrEaKst1.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKclass ClientThread extends Thread {LiNeBrEaKint               ntrans = 0;LiNeBrEaKConnection        Conn;LiNeBrEaKPreparedStatement pstmt1 = null;LiNeBrEaKPreparedStatement pstmt2 = null;LiNeBrEaKPreparedStatement pstmt3 = null;LiNeBrEaKPreparedStatement pstmt4 = null;LiNeBrEaKPreparedStatement pstmt5 = null;LiNeBrEaKpublic ClientThread(int number_of_txns, String url, String user,LiNeBrEaKString password, int transactionMode) {LiNeBrEaKSystem.out.println(number_of_txns);LiNeBrEaKntrans = number_of_txns;LiNeBrEaKConn   = connect(url, user, password);LiNeBrEaKif (Conn == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 575,
			"end_line": 592,
			"code_lines": "try {LiNeBrEaKif (pstmt1 != null) {LiNeBrEaKpstmt1.close();LiNeBrEaK}LiNeBrEaKif (pstmt2 != null) {LiNeBrEaKpstmt2.close();LiNeBrEaK}LiNeBrEaKif (pstmt3 != null) {LiNeBrEaKpstmt3.close();LiNeBrEaK}LiNeBrEaKif (pstmt4 != null) {LiNeBrEaKpstmt4.close();LiNeBrEaK}LiNeBrEaKif (pstmt5 != null) {LiNeBrEaKpstmt5.close();LiNeBrEaK}LiNeBrEaK} catch (Exception E) {LiNeBrEaK"
		}, {
			"start_line": 594,
			"end_line": 605,
			"code_lines": "}LiNeBrEaKconnectClose(Conn);LiNeBrEaKConn = null;LiNeBrEaK}LiNeBrEaKint doOne(int bid, int tid, int aid, int delta) {LiNeBrEaKint aBalance = 0;LiNeBrEaKif (Conn == null) {LiNeBrEaKincrementFailedTransactionCount();LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 605,
			"end_line": 629,
			"code_lines": "pstmt1.setInt(1, delta);LiNeBrEaKpstmt1.setInt(2, aid);LiNeBrEaKpstmt1.executeUpdate();LiNeBrEaKpstmt1.clearWarnings();LiNeBrEaKpstmt2.setInt(1, aid);LiNeBrEaKResultSet RS = pstmt2.executeQuery();LiNeBrEaKpstmt2.clearWarnings();LiNeBrEaKwhile (RS.next()) {LiNeBrEaKaBalance = RS.getInt(1);LiNeBrEaK}LiNeBrEaKpstmt3.setInt(1, delta);LiNeBrEaKpstmt3.setInt(2, tid);LiNeBrEaKpstmt3.executeUpdate();LiNeBrEaKpstmt3.clearWarnings();LiNeBrEaKpstmt4.setInt(1, delta);LiNeBrEaKpstmt4.setInt(2, bid);LiNeBrEaKpstmt4.executeUpdate();LiNeBrEaKpstmt4.clearWarnings();LiNeBrEaKpstmt5.setInt(1, tid);LiNeBrEaKpstmt5.setInt(2, bid);LiNeBrEaKpstmt5.setInt(3, aid);LiNeBrEaKpstmt5.setInt(4, delta);LiNeBrEaKpstmt5.executeUpdate();LiNeBrEaKpstmt5.clearWarnings();LiNeBrEaK"
		}, {
			"start_line": 652,
			"end_line": 669,
			"code_lines": "System.out.println(number_of_txns);LiNeBrEaKntrans = number_of_txns;LiNeBrEaKConn   = connect(url, user, password);LiNeBrEaKif (Conn == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKConn.setAutoCommit(false);LiNeBrEaKConn.setTransactionIsolation(transactionMode);LiNeBrEaKprepareStatements();LiNeBrEaK} catch (Exception E) {LiNeBrEaKSystem.out.println(E.getMessage());LiNeBrEaKE.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid prepareStatements() throws SQLException {LiNeBrEaKString Query;LiNeBrEaK"
		}, {
			"start_line": 671,
			"end_line": 686,
			"code_lines": "}LiNeBrEaKpublic void run() {LiNeBrEaKint count = ntrans;LiNeBrEaKwhile (count-- > 0) {LiNeBrEaKint account = TestBench.getRandomID(ACCOUNT);LiNeBrEaKint branch  = TestBench.getRandomID(BRANCH);LiNeBrEaKint teller  = TestBench.getRandomID(TELLER);LiNeBrEaKint delta   = TestBench.getRandomInt(-1000, 1000);LiNeBrEaKdoOne(branch, teller, account, delta);LiNeBrEaKincrementTransactionCount();LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKif (pstmt1 != null) {LiNeBrEaKpstmt1.close();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 685,
			"end_line": 700,
			"code_lines": "}LiNeBrEaK} catch (Exception E) {LiNeBrEaKSystem.out.println(E.getMessage());LiNeBrEaKE.printStackTrace();LiNeBrEaK}LiNeBrEaKconnectClose(Conn);LiNeBrEaKConn = null;LiNeBrEaK}LiNeBrEaKint doOne(int bid, int tid, int aid, int delta) {LiNeBrEaKint aBalance = 0;LiNeBrEaKif (Conn == null) {LiNeBrEaKincrementFailedTransactionCount();LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 711,
			"end_line": 727,
			"code_lines": "Conn.commit();LiNeBrEaKreturn aBalance;LiNeBrEaK} catch (Exception E) {LiNeBrEaKif (verbose) {LiNeBrEaKSystem.out.println('Transaction failed: 'LiNeBrEaK+ E.getMessage());LiNeBrEaKE.printStackTrace();LiNeBrEaK}LiNeBrEaKincrementFailedTransactionCount();LiNeBrEaKtry {LiNeBrEaKConn.rollback();LiNeBrEaK} catch (SQLException E1) {}LiNeBrEaK}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 723,
			"end_line": 762,
			"code_lines": "}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKclass MemoryWatcherThread extends Thread {LiNeBrEaKlong    min          = 0;LiNeBrEaKlong    max          = 0;LiNeBrEaKboolean keep_running = true;LiNeBrEaKpublic MemoryWatcherThread() {LiNeBrEaKthis.reset();LiNeBrEaKkeep_running = true;LiNeBrEaK}LiNeBrEaKpublic void reset() {LiNeBrEaKSystem.gc();LiNeBrEaKlong currentFree  = Runtime.getRuntime().freeMemory();LiNeBrEaKlong currentAlloc = Runtime.getRuntime().totalMemory();LiNeBrEaKmin = max = (currentAlloc - currentFree);LiNeBrEaK}LiNeBrEaKpublic void end() {LiNeBrEaKkeep_running = false;LiNeBrEaK}LiNeBrEaKpublic void run() {LiNeBrEaKwhile (keep_running) {LiNeBrEaKlong currentFree  = Runtime.getRuntime().freeMemory();LiNeBrEaKlong currentAlloc = Runtime.getRuntime().totalMemory();LiNeBrEaKlong used         = currentAlloc - currentFree;LiNeBrEaKif (used < min) {LiNeBrEaKmin = used;LiNeBrEaK}LiNeBrEaKif (used > max) {LiNeBrEaKmax = used;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKsleep(100);LiNeBrEaK} catch (InterruptedException E) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestAcl.java|",
		"loc": "279",
		"clones": [{
			"start_line": 61,
			"end_line": 70,
			"code_lines": "}LiNeBrEaKacls.clear();LiNeBrEaKfile = File.createTempFile('aclPermitLocalhost1', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Permit Localhost test ACLn');LiNeBrEaKpw.println('permit 127.0.0.1');LiNeBrEaKpw.close();LiNeBrEaKacls.add(new ServerAcl(file));LiNeBrEaK"
		}, {
			"start_line": 70,
			"end_line": 77,
			"code_lines": "file = File.createTempFile('aclPermitLocalhost2', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Permit Localhost test ACLn');LiNeBrEaKpw.println('permit 127.0.0.1/32');LiNeBrEaKpw.close();LiNeBrEaKacls.add(new ServerAcl(file));LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 92,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKacls.clear();LiNeBrEaKfile = File.createTempFile('aclPermitLocalNet1', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Permit Local Net test ACLn');LiNeBrEaKpw.println('permit 127.0.0.0/24');LiNeBrEaKpw.close();LiNeBrEaKacls.add(new ServerAcl(file));LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 105,
			"code_lines": "new PrintWriter(System.out));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKacls.clear();LiNeBrEaKfile = File.createTempFile('aclDenyLocalNet1', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Deny Local Net test ACLn');LiNeBrEaKpw.println('deny 127.0.0.0/24');LiNeBrEaK"
		}, {
			"start_line": 112,
			"end_line": 124,
			"code_lines": "new PrintWriter(System.out));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKacls.clear();LiNeBrEaKfile = File.createTempFile('aclDenyLocalhost1', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Deny Localhost test ACLn');LiNeBrEaKpw.println('deny 127.0.0.1/32');LiNeBrEaKpw.println('allow 0.0.0.0/0');LiNeBrEaKpw.close();LiNeBrEaKacls.add(new ServerAcl(file));LiNeBrEaK"
		}, {
			"start_line": 128,
			"end_line": 139,
			"code_lines": "new PrintWriter(System.out));LiNeBrEaK}LiNeBrEaK}LiNeBrEaKacls.clear();LiNeBrEaKfile = File.createTempFile('aclPermitAll1', '.txt');LiNeBrEaKfile.deleteOnExit();LiNeBrEaKpw = new PrintWriter(new FileWriter(file));LiNeBrEaKpw.println('# Permit all test ACLn');LiNeBrEaKpw.println('permit 0.0.0.0/0');LiNeBrEaKpw.close();LiNeBrEaKacls.add(new ServerAcl(file));LiNeBrEaK"
		}, {
			"start_line": 235,
			"end_line": 241,
			"code_lines": "acl.permitAccess(localhostByAddr.getAddress()));LiNeBrEaKassertFalse(LiNeBrEaK'Permitting access from other Net with localNet-permit ACL',LiNeBrEaKacl.permitAccess(otherHostByAddr.getAddress()));LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 265,
			"end_line": 276,
			"code_lines": "newSuite.addTest(new TestAcl('testDefaultWithIPs'));LiNeBrEaKnewSuite.addTest(new TestAcl('testDenyAllWithNames'));LiNeBrEaKnewSuite.addTest(new TestAcl('testDenyAllWithIPs'));LiNeBrEaKnewSuite.addTest(new TestAcl('testLocalhostOnlyWithNames'));LiNeBrEaKnewSuite.addTest(new TestAcl('testLocalhostOnlyWithIPs'));LiNeBrEaKnewSuite.addTest(new TestAcl('testNoLocalhostOnlyWithNames'));LiNeBrEaKnewSuite.addTest(new TestAcl('testNoLocalhostOnlyWithIPs'));LiNeBrEaKnewSuite.addTest(new TestAcl('testLocalNetOnlyWithNames'));LiNeBrEaKnewSuite.addTest(new TestAcl('testLocalNetOnlyWithIPs'));LiNeBrEaKnewSuite.addTest(new TestAcl('testNoLocalNetOnlyWithNames'));LiNeBrEaKnewSuite.addTest(new TestAcl('testNoLocalNetOnlyWithIPs'));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBatchExecution.java|",
		"loc": "284",
		"clones": [{
			"start_line": 93,
			"end_line": 99,
			"code_lines": "println('');LiNeBrEaKprintln('***************************************');LiNeBrEaKprintln('featuring memory (persistent) table');LiNeBrEaKprintln('***************************************');LiNeBrEaKprintln(drop_table_sql);LiNeBrEaKstmnt.execute(drop_table_sql);LiNeBrEaK"
		}, {
			"start_line": 101,
			"end_line": 116,
			"code_lines": "preparedTestOne(runs);LiNeBrEaKprintln(drop_table_sql);LiNeBrEaKstmnt.execute(drop_table_sql);LiNeBrEaKprintln('---------------------------------------');LiNeBrEaKprintln('shutting down database');LiNeBrEaKstmnt.execute(shutdown_sql);LiNeBrEaKprintln('---------------------------------------');LiNeBrEaKconn  = DriverManager.getConnection(url, 'SA', '');LiNeBrEaKstmnt = conn.createStatement();LiNeBrEaKprintln('');LiNeBrEaKprintln('***************************************');LiNeBrEaKprintln('featuring temp (transient) table');LiNeBrEaKprintln('***************************************');LiNeBrEaKprintln(drop_table_sql);LiNeBrEaKstmnt.execute(drop_table_sql);LiNeBrEaK"
		}, {
			"start_line": 118,
			"end_line": 125,
			"code_lines": "preparedTestOne(runs);LiNeBrEaKprintln(drop_table_sql);LiNeBrEaKstmnt.execute(drop_table_sql);LiNeBrEaKprintln('---------------------------------------');LiNeBrEaKprintln('shutting down database');LiNeBrEaKstmnt.execute(shutdown_sql);LiNeBrEaKprintln('---------------------------------------');LiNeBrEaK"
		}, {
			"start_line": 275,
			"end_line": 283,
			"code_lines": "}LiNeBrEaKSystem.out.println('bye.');LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK} catch (ClassNotFoundException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestUpdatableResults.java|",
		"loc": "54",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestObjectSize.java|",
		"loc": "31"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDbBackup.java|",
		"loc": "448",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.text.SimpleDateFormat;LiNeBrEaK"
		}, {
			"start_line": 20,
			"end_line": 27,
			"code_lines": "static {LiNeBrEaKtry {LiNeBrEaKClass.forName('org.hsqldb.jdbc.JDBCDriver');LiNeBrEaK} catch (ClassNotFoundException cnfe) {LiNeBrEaKthrow new RuntimeException(LiNeBrEaK'<clinit> failed.  JDBC Driver class not in CLASSPATH');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 209,
			"end_line": 218,
			"code_lines": "if (!destDir.mkdir()) {LiNeBrEaKthrow new IOException('Failed to make new dir. to restore to: 'LiNeBrEaK+ destDir.getAbsolutePath());LiNeBrEaK}LiNeBrEaKDbBackup.main(new String[] {LiNeBrEaK'--extract', baseDir.getAbsolutePath() + '/' + baseTarName,LiNeBrEaKdestDir.getAbsolutePath()LiNeBrEaK});LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 220,
			"end_line": 226,
			"code_lines": "rs.next();LiNeBrEaKassertEquals('Wrong table 't' contents', 34, rs.getInt('i'));LiNeBrEaK} finally {LiNeBrEaKshutdownAndCloseConn();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 262,
			"end_line": 346,
			"code_lines": "caught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad' BLOCKING NOT COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested 'LiNeBrEaK+ 'no-compression to file '/x/bad'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.txt' BLOCKING COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested compression 'LiNeBrEaK+ 'to file '/x/bad.txt'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.txt' BLOCKING NOT COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested 'LiNeBrEaK+ 'no-compression to file '/x/bad.txt'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.tar' BLOCKING');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested default 'LiNeBrEaK+ 'to file '/x/bad.tar'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.tar' BLOCKING COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested compression 'LiNeBrEaK+ 'to file '/x/bad.tar'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.tar.gz' BLOCKING NOT COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested 'LiNeBrEaK+ 'non-compression to file '/x/bad.tar.gz'');LiNeBrEaK}LiNeBrEaKcaught = false;LiNeBrEaKtry {LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/x/bad.tgz' BLOCKING NOT COMPRESSED');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKcaught = true;LiNeBrEaK}LiNeBrEaKif (!caught) {LiNeBrEaKfail('BACKUP did not throw even though requested 'LiNeBrEaK+ 'non-compression to file '/x/bad.tgz'');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 385,
			"end_line": 398,
			"code_lines": "+ ' auto-tar.gz files exist in baseDir ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '' after writing a non-compressed backup');LiNeBrEaKconn.createStatement().executeUpdate('BACKUP DATABASE TO ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '/' BLOCKING COMPRESSED');LiNeBrEaKfileCount = baseDir.listFiles(autoTarFilenameFilter).length;LiNeBrEaKif (fileCount != 1)LiNeBrEaKfail(Integer.toString(fileCount)LiNeBrEaK+ ' auto-tar files exist in baseDir ''LiNeBrEaK+ baseDir.getAbsolutePath()LiNeBrEaK+ '' after writing both backups');LiNeBrEaKfileCount = baseDir.listFiles(autoTarGzFilenameFilter).length;LiNeBrEaK"
		}, {
			"start_line": 401,
			"end_line": 407,
			"code_lines": "+ baseDir.getAbsolutePath()LiNeBrEaK+ '' after writing a compressed backup');LiNeBrEaK} finally {LiNeBrEaKshutdownAndCloseConn();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 410,
			"end_line": 416,
			"code_lines": "newSuite.addTest(new TestDbBackup('testBasicBackup'));LiNeBrEaKnewSuite.addTest(new TestDbBackup('testMainAlreadyOpen'));LiNeBrEaKnewSuite.addTest(new TestDbBackup('testGzip'));LiNeBrEaKnewSuite.addTest(new TestDbBackup('testOnlineBackup'));LiNeBrEaKnewSuite.addTest(new TestDbBackup('testTarFileNames'));LiNeBrEaKnewSuite.addTest(new TestDbBackup('testAutoNaming'));LiNeBrEaK"
		}, {
			"start_line": 435,
			"end_line": 447,
			"code_lines": "private String suffixFormat = '-yyyyMMddTHHmmss.tar.gz';LiNeBrEaKpublic boolean accept(File dir, String name) {LiNeBrEaKif (name.length() < suffixFormat.length() + 1) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKint suffixPos = name.length() - suffixFormat.length();LiNeBrEaKreturn name.endsWith('.tar.gz')LiNeBrEaK&& name.substring(suffixPos,LiNeBrEaKsuffixPos + autoMiddlingString.length())LiNeBrEaK.equals(autoMiddlingString);LiNeBrEaK}LiNeBrEaK};LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDataStructures.java|",
		"loc": "338"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDatabaseMetaData.java|",
		"loc": "192",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DatabaseMetaData;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaK"
		}, {
			"start_line": 18,
			"end_line": 24,
			"code_lines": "Connection        conn = newConnection();LiNeBrEaKPreparedStatement pstmt;LiNeBrEaKint               updateCount;LiNeBrEaKtry {LiNeBrEaKpstmt = conn.prepareStatement('DROP TABLE t1 IF EXISTS');LiNeBrEaKpstmt.executeUpdate();LiNeBrEaK"
		}, {
			"start_line": 50,
			"end_line": 56,
			"code_lines": "}LiNeBrEaKrsp = dbmd.getIndexInfo(null, null, 'T2', false, false);LiNeBrEaKwhile (rsp.next()) {LiNeBrEaKSystem.out.println('Table: ' + rsp.getString(3)LiNeBrEaK+ ' IndexName: ' + rsp.getString(6));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 84,
			"end_line": 92,
			"code_lines": "pstmt = conn.prepareStatement('DROP TABLE t_1 IF EXISTS');LiNeBrEaKpstmt.executeUpdate();LiNeBrEaKpstmt.close();LiNeBrEaKpstmt = conn.prepareStatement(LiNeBrEaK'CREATE TABLE t_1 (cha CHARACTER(10), deci DECIMAL(10,2), doub DOUBLE, lon BIGINT, 'IN' INTEGER, sma SMALLINT, tin TINYINT, 'LiNeBrEaK+ 'dat DATE DEFAULT CURRENT_DATE, tim TIME DEFAULT CURRENT_TIME, timest TIMESTAMP DEFAULT CURRENT_TIMESTAMP, bool BOOLEAN );');LiNeBrEaKupdateCount = pstmt.executeUpdate();LiNeBrEaKassertTrue('expected update count of zero', updateCount == 0);LiNeBrEaK"
		}, {
			"start_line": 93,
			"end_line": 100,
			"code_lines": "for (i = 0; rs.next(); i++) {LiNeBrEaKString tempstr =LiNeBrEaKrs.getString('TABLE_NAME').trim().toLowerCase();LiNeBrEaKtablesarr.add(tempstr);LiNeBrEaK}LiNeBrEaKrs.close();LiNeBrEaKassertTrue('expected table t_1 count of 1', i == 1);LiNeBrEaK"
		}, {
			"start_line": 124,
			"end_line": 132,
			"code_lines": "} catch (Exception e) {LiNeBrEaKassertTrue('unable to prepare or execute DDL', false);LiNeBrEaK} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void testTwo() throws Exception {LiNeBrEaKConnection conn = newConnection();LiNeBrEaK"
		}, {
			"start_line": 155,
			"end_line": 161,
			"code_lines": "} catch (Exception e) {LiNeBrEaKassertTrue('unable to prepare or execute DDL', false);LiNeBrEaK} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 170,
			"end_line": 176,
			"code_lines": "} catch (Exception e) {LiNeBrEaKassertTrue('unable to prepare or execute DDL', false);LiNeBrEaK} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 172,
			"end_line": 182,
			"code_lines": "} finally {LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 183,
			"end_line": 192,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestDatabaseMetaData failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestMerge.java|",
		"loc": "280",
		"clones": [{
			"start_line": 16,
			"end_line": 25,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKsuper.setUp();LiNeBrEaKtry {LiNeBrEaKconnection = super.newConnection();LiNeBrEaKstmnt      = connection.createStatement();LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 65,
			"end_line": 71,
			"code_lines": "'MERGE INTO SA.T X ' +LiNeBrEaK'USING SA.S AS Y ' +LiNeBrEaK'ON X.I = Y.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET X.A = Y.A, X.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK"
		}, {
			"start_line": 80,
			"end_line": 86,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING SA.S ' +LiNeBrEaK'ON T.I = S.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 88,
			"code_lines": "'MERGE INTO SA.T ' +LiNeBrEaK'USING SA.S ' +LiNeBrEaK'ON T.I = S.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = S.A, T.B = 'UPDATED';'LiNeBrEaK);LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 109,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING SA.S ' +LiNeBrEaK'ON T.I = S.I ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (S.I, S.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 5);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge3 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 110,
			"end_line": 126,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING SA.S ' +LiNeBrEaK'ON T.I = S.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = S.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (S.I, S.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 5);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge4 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 143,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING (SELECT * FROM SA.S) AS X ' +LiNeBrEaK'ON T.I = X.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = X.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (X.I, X.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 5);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge5 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 144,
			"end_line": 160,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING (SELECT I, A, C FROM SA.S) AS X ' +LiNeBrEaK'ON T.I = X.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = X.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (X.I, X.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 5);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge6 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 161,
			"end_line": 177,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING (SELECT * FROM SA.S WHERE I = 4) AS X ' +LiNeBrEaK'ON T.I = X.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = X.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (X.I, X.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 3);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge7 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 178,
			"end_line": 188,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING (SELECT * FROM SA.S WHERE I = 3) AS X ' +LiNeBrEaK'ON T.I = X.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = X.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (X.I, X.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaK"
		}, {
			"start_line": 195,
			"end_line": 211,
			"code_lines": "try {LiNeBrEaKexecuteMerge(LiNeBrEaK'MERGE INTO SA.T ' +LiNeBrEaK'USING (SELECT * FROM SA.S WHERE I > 2) AS X ' +LiNeBrEaK'ON T.I = X.I ' +LiNeBrEaK'WHEN MATCHED THEN ' +LiNeBrEaK'UPDATE SET T.A = X.A, T.B = 'UPDATED' ' +LiNeBrEaK'WHEN NOT MATCHED THEN ' +LiNeBrEaK'INSERT VALUES (X.I, X.A, 'INSERTED');'LiNeBrEaK);LiNeBrEaKprintTable('SA.T', '*', 4);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge9 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 219,
			"end_line": 225,
			"code_lines": "printTable('SA.T', '*', 4);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge10 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 237,
			"end_line": 243,
			"code_lines": "printTable('SA.T', '*', 4);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMerge10 completen');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 242,
			"end_line": 251,
			"code_lines": "}LiNeBrEaKprotected void tearDown() {LiNeBrEaKtry {LiNeBrEaKstmnt.execute('DROP SCHEMA SA IF EXISTS CASCADE;');LiNeBrEaKconnection.close();LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.tearDown() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 247,
			"end_line": 255,
			"code_lines": "} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.tearDown() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaKsuper.tearDown();LiNeBrEaK}LiNeBrEaKpublic static void main(String[] argv) {LiNeBrEaKTestResult result = new TestResult();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestINPredicateParameterizationAndCorrelation.java|",
		"loc": "117",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 68,
			"code_lines": "sql = 'select count(*) from test a, test b where ? in(?, b.id)';LiNeBrEaKpstmt         = conn.prepareStatement(sql);LiNeBrEaKpstmt.setInt(1, 0);LiNeBrEaKpstmt.setInt(2, 9);LiNeBrEaKrs = pstmt.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 105,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 111,
			"end_line": 117,
			"code_lines": "failures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestSubQueriesInPreparedStatements.java|",
		"loc": "85",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.Driver;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaK"
		}, {
			"start_line": 56,
			"end_line": 63,
			"code_lines": "rs = pstmnt.executeQuery();LiNeBrEaKwhile (rs.next()) {LiNeBrEaKSystem.out.println(rs.getInt(1));LiNeBrEaK}LiNeBrEaKpstmnt = conn.prepareStatement(LiNeBrEaK'select * from (select i as c1 from t where i < ?) a, (select i as c2 from t where i < ?) b');LiNeBrEaKSystem.out.println('Expecting: (0,0)');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestSchemaParse.java|",
		"loc": "760",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 86,
			"end_line": 94,
			"code_lines": "assertEquals(2, queryRowCount('SELECT ali.admin FROM ' + iprefLiNeBrEaK+ 'system_users ali'));LiNeBrEaKassertEquals('Sub-query', 1,LiNeBrEaKqueryRowCount('SELECT ali.vc FROM ' + prefixLiNeBrEaK+ 'tsttbl ali WHERE i = (n'LiNeBrEaK+ '    SELECT bali.i2 FROM ' + prefixLiNeBrEaK+ 'joinedtbl balin' + ')'));LiNeBrEaKassertEquals('Join', 1,LiNeBrEaK"
		}, {
			"start_line": 116,
			"end_line": 122,
			"code_lines": "+ '(i7) REFERENCES primarytbl (i8)', 0);LiNeBrEaKexecSQL('ALTER TABLE ' + prefixLiNeBrEaK+ 'playtbl ADD CONSTRAINT ucons9 UNIQUE (i9)', 0);LiNeBrEaKexecSQL('DROP TABLE ' + prefix + 'playtbl', 0);LiNeBrEaKexecSQL('SET TABLE ' + prefix + 'tsttbl READONLY true', 0);LiNeBrEaKexecSQL('SET TABLE ' + prefix + 'tsttbl READONLY false', 0);LiNeBrEaK"
		}, {
			"start_line": 124,
			"end_line": 130,
			"code_lines": "+ 'tsttblx (i INT, vc VARCHAR(100))', 0);LiNeBrEaKexecSQL('CREATE TABLE constrz (i6 INT, vc6 VARCHAR(100), 'LiNeBrEaK+ 'CONSTRAINT uconsz UNIQUE(i6))', 0);LiNeBrEaKexecSQL(LiNeBrEaK'CREATE TABLE forztbl (i7 INT, vc7 VARCHAR(100), 'LiNeBrEaK+ 'CONSTRAINT tstfkz FOREIGN KEY (i7) REFERENCES primarytbl (i8))', 0);LiNeBrEaK"
		}, {
			"start_line": 142,
			"end_line": 156,
			"code_lines": "assertEquals('Sub-query', 1,LiNeBrEaKqueryRowCount('SELECT vc FROM ' + prefixLiNeBrEaK+ 'tstview WHERE i = (n'LiNeBrEaK+ '    SELECT i2 FROM ' + prefixLiNeBrEaK+ 'joinedtbln' + ')'));LiNeBrEaKassertEquals('Join', 1,LiNeBrEaKqueryRowCount('SELECT vc FROM ' + prefix + 'tstview, 'LiNeBrEaK+ prefix + 'joinedtbln'LiNeBrEaK+ 'WHERE tstview.i = joinedtbl.i2n'LiNeBrEaK+ 'AND joinedtbl.vc2 = 'zwei''));LiNeBrEaKassertEquals(LiNeBrEaK2, queryRowCount(LiNeBrEaK'SELECT i FROM ' + prefixLiNeBrEaK+ 'tstview ali WHERE ali.i IN (1, 2, 3)'));LiNeBrEaK"
		}, {
			"start_line": 229,
			"end_line": 235,
			"code_lines": "execSQL('ALTER TABLE playtbl RENAME TO renamedtbl', 0);LiNeBrEaKexecSQL('ALTER TABLE renamedtbl RENAME TO playtbl', 0);LiNeBrEaKexecSQL('DROP INDEX tstind', 0);LiNeBrEaKexecSQL('DROP TABLE bigtbl', 0);LiNeBrEaKexecSQL('DROP SEQUENCE tstseq', 0);LiNeBrEaKexecSQL('SET FILES LOG SIZE 5', 0);LiNeBrEaK"
		}, {
			"start_line": 245,
			"end_line": 265,
			"code_lines": "execSQL('ALTER TABLE tsttbl ADD COLUMN vco1 VARCHAR(100)', 0);LiNeBrEaKexecSQL('ALTER TABLE tsttbl DROP COLUMN vco1', 0);LiNeBrEaKexecSQL('CREATE UNIQUE INDEX tstind ON tsttbl (i)', 0);LiNeBrEaKexecSQL('SET AUTOCOMMIT true', 0);LiNeBrEaKexecSQL('SET AUTOCOMMIT false', 0);LiNeBrEaKexecSQL('SET IGNORECASE true', 0);LiNeBrEaKexecSQL('SET IGNORECASE false', 0);LiNeBrEaKexecSQL('SET PASSWORD blah', 0);LiNeBrEaKexecSQL('SET PASSWORD 'blah'', 0);LiNeBrEaKexecSQL('SET DATABASE REFERENTIAL INTEGRITY true', 0);LiNeBrEaKexecSQL('GRANT ALL ON playtbl TO tstuser', 0);LiNeBrEaKexecSQL('REVOKE ALL ON playtbl FROM tstuser RESTRICT', 0);LiNeBrEaKexecSQL('ALTER INDEX tstind RENAME TO renamedind', 0);LiNeBrEaKexecSQL('ALTER INDEX renamedind RENAME TO tstind', 0);LiNeBrEaKexecSQL('ALTER USER tstuser SET PASSWORD frank', 0);LiNeBrEaKexecSQL('ALTER USER tstuser SET PASSWORD 'frank'', 0);LiNeBrEaKexecSQL('ALTER TABLE tsttbl ADD COLUMN vco1 VARCHAR(100)', 0);LiNeBrEaKexecSQL('ALTER TABLE tsttbl ALTER COLUMN vco1 RENAME TO j1', 0);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl DROP CONSTRAINT con1', 0);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl DROP CONSTRAINT tstfk', 0);LiNeBrEaK"
		}, {
			"start_line": 279,
			"end_line": 286,
			"code_lines": "queryRowCount('SELECT tsttbl.i FROM tsttbl WHERE i = 1'));LiNeBrEaKassertEquals('Over-specified Query 3', 1,LiNeBrEaKqueryRowCount('SELECT i FROM tsttbl WHERE tsttbl.i = 1'));LiNeBrEaKassertEquals('Trivial Label/alias 1', 1,LiNeBrEaKqueryRowCount('SELECT i FROM tsttbl ali WHERE i = 1'));LiNeBrEaKassertEquals('Trivial Label/alias 2', 1,LiNeBrEaKqueryRowCount('SELECT i FROM tsttbl AS ali WHERE i = 1'));LiNeBrEaK"
		}, {
			"start_line": 288,
			"end_line": 297,
			"code_lines": "queryRowCount('SELECT ali.i FROM tsttbl ali WHERE i = 1'));LiNeBrEaKassertEquals(LiNeBrEaK'Trivial Label/alias 4', 1,LiNeBrEaKqueryRowCount('SELECT i FROM tsttbl ali WHERE ali.i = 1'));LiNeBrEaKassertEquals(LiNeBrEaK'Trivial Label/alias 5', 1,LiNeBrEaKqueryRowCount('SELECT ali.i FROM tsttbl ali WHERE ali.i = 1'));LiNeBrEaKassertEquals(LiNeBrEaK'Join w/Labels/aliases 1', 1,LiNeBrEaK"
		}, {
			"start_line": 295,
			"end_line": 302,
			"code_lines": "assertEquals(LiNeBrEaK'Join w/Labels/aliases 1', 1,LiNeBrEaKqueryRowCount(LiNeBrEaK'SELECT vc FROM tsttbl ali1, joinedtbl ali2n'LiNeBrEaK+ 'WHERE i = i2 AND vc2 = 'zwei''));LiNeBrEaKassertEquals(LiNeBrEaK'Join w/Labels/aliases 2', 1,LiNeBrEaK"
		}, {
			"start_line": 300,
			"end_line": 315,
			"code_lines": "assertEquals(LiNeBrEaK'Join w/Labels/aliases 2', 1,LiNeBrEaKqueryRowCount(LiNeBrEaK'SELECT vc FROM tsttbl ali1, joinedtbl ali2n'LiNeBrEaK+ 'WHERE ali1.i = i2 AND ali2.vc2 = 'zwei''));LiNeBrEaKassertEquals(LiNeBrEaK'Join w/Labels/aliases 3', 1,LiNeBrEaKqueryRowCount(LiNeBrEaK'SELECT ali1.vc FROM tsttbl ali1, joinedtbl ali2n'LiNeBrEaK+ 'WHERE ali1.i = i2 AND ali2.vc2 = 'zwei''));LiNeBrEaKassertEquals(LiNeBrEaK'Join w/Labels/aliases 4', 1,LiNeBrEaKqueryRowCount(LiNeBrEaK'SELECT ali1.vc FROM tsttbl ali1, joinedtbl ali2n'LiNeBrEaK+ 'WHERE i = i2 AND vc2 = 'zwei''));LiNeBrEaK"
		}, {
			"start_line": 334,
			"end_line": 341,
			"code_lines": "execSQL('DROP VIEW tstview', 0);LiNeBrEaKexecSQL('CREATE TABLE adroptbl (i INT, vc VARCHAR(100))', 0);LiNeBrEaKexecSQL('CREATE TABLE bdroptbl (i INT, vc VARCHAR(100))', 0);LiNeBrEaKexecSQL('CREATE UNIQUE INDEX adropind ON adroptbl (i)', 0);LiNeBrEaKexecSQL('CREATE UNIQUE INDEX bdropind ON bdroptbl (i)', 0);LiNeBrEaKexecSQL('CREATE SEQUENCE bdropseq', 0);LiNeBrEaKexecSQL('CREATE SEQUENCE adropseq', 0);LiNeBrEaK"
		}, {
			"start_line": 379,
			"end_line": 388,
			"code_lines": "execSQL('DROP xVIEW bdropview', expect);LiNeBrEaKexecSQL('xDROP TRIGGER adroptrig', expect);LiNeBrEaKexecSQL('DROP xTRIGGER bdroptrig', expect);LiNeBrEaKexecSQL('xDROP INDEX adropind', expect);LiNeBrEaKexecSQL('DROP xINDEX bdropind', expect);LiNeBrEaKexecSQL('xDROP TABLE adroptbl', expect);LiNeBrEaKexecSQL('DROP xTABLE bdroptbl', expect);LiNeBrEaKexecSQL('xDROP SEQUENCE adropseq', expect);LiNeBrEaKexecSQL('DROP xSEQUENCE bdropseq', expect);LiNeBrEaK"
		}, {
			"start_line": 435,
			"end_line": 442,
			"code_lines": "execSQL('CREATE USER tstuserb ' + pref + 'PASSWORD fake', expect);LiNeBrEaKexecSQL('CREATE VIEW tstviewx AS ' + prefLiNeBrEaK+ 'SELECT * FROM tsttbl WHERE i < 10', expect);LiNeBrEaKexecSQL('DROP VIEW tstviewx IF EXISTS', 0);LiNeBrEaKexecSQL('CREATE UNIQUE INDEX tstinda ' + pref + 'ON toindextbl (i10)',LiNeBrEaKexpect);LiNeBrEaKexecSQL('DROP INDEX tstinda IF EXISTS', 0);LiNeBrEaK"
		}, {
			"start_line": 438,
			"end_line": 445,
			"code_lines": "execSQL('DROP VIEW tstviewx IF EXISTS', 0);LiNeBrEaKexecSQL('CREATE UNIQUE INDEX tstinda ' + pref + 'ON toindextbl (i10)',LiNeBrEaKexpect);LiNeBrEaKexecSQL('DROP INDEX tstinda IF EXISTS', 0);LiNeBrEaKexecSQL('CREATE TRIGGER tsttrigz AFTER ' + prefLiNeBrEaK+ 'INSERT ON triggedtbl CALL ''LiNeBrEaK+ 'org.hsqldb.test.BlaineTrig'', expect);LiNeBrEaK"
		}, {
			"start_line": 484,
			"end_line": 490,
			"code_lines": "execSQL('DROP TABLE t1 IF EXISTS', 0);LiNeBrEaKexecSQL('CREATE TABLE t1 (i ' + pref + 'INT, vc VARCHAR)', expect);LiNeBrEaKexecSQL('DROP TABLE t1 IF EXISTS', 0);LiNeBrEaKexecSQL('CREATE TABLE t1 (i INT, vc ' + pref + 'VARCHAR)', expect);LiNeBrEaKexecSQL('DROP TABLE t1 IF EXISTS', 0);LiNeBrEaKexecSQL('DELETE ' + pref + 'FROM tsttbl WHERE i < 10', expect);LiNeBrEaK"
		}, {
			"start_line": 496,
			"end_line": 506,
			"code_lines": "execSQL(pref + 'SET LOGSIZE 5', expect);LiNeBrEaKexecSQL('SET ' + pref + 'LOGSIZE 5', expect);LiNeBrEaKexecSQL(pref + 'SET PASSWORD blah', expect);LiNeBrEaKexecSQL('SET ' + pref + 'PASSWORD blah', expect);LiNeBrEaKexecSQL(pref + 'SET REFERENTIAL_INTEGRITY true', expect);LiNeBrEaKexecSQL('SET ' + pref + 'REFERENTIAL_INTEGRITY true', expect);LiNeBrEaKexecSQL(pref + 'SET SCRIPTFORMAT text', expect);LiNeBrEaKexecSQL('SET ' + pref + 'SCRIPTFORMAT text', expect);LiNeBrEaKexecSQL(pref + 'SET TABLE tsttbl READONLY true', expect);LiNeBrEaKexecSQL('SET ' + pref + 'TABLE tsttbl READONLY true', expect);LiNeBrEaK"
		}, {
			"start_line": 503,
			"end_line": 509,
			"code_lines": "execSQL('SET ' + pref + 'SCRIPTFORMAT text', expect);LiNeBrEaKexecSQL(pref + 'SET TABLE tsttbl READONLY true', expect);LiNeBrEaKexecSQL('SET ' + pref + 'TABLE tsttbl READONLY true', expect);LiNeBrEaKexecSQL('SET TABLE tsttbl READONLY false', 0);LiNeBrEaKexecSQL(pref + 'GRANT ALL ON playtbl TO tstuser', expect);LiNeBrEaKexecSQL('GRANT ' + pref + 'ALL ON playtbl TO tstuser', expect);LiNeBrEaK"
		}, {
			"start_line": 526,
			"end_line": 538,
			"code_lines": "execSQL('ALTER INDEX tstind ' + pref + 'RENAME TO renamedind', expect);LiNeBrEaKexecSQL('ALTER ' + pref + 'INDEX tstind RENAME TO renamedind', expect);LiNeBrEaKexecSQL('ALTER INDEX tstind RENAME ' + pref + 'TO renamedind', expect);LiNeBrEaKexecSQL(pref + 'ALTER SEQUENCE tstseq RESTART WITH 13', expect);LiNeBrEaKexecSQL('ALTER ' + pref + 'SEQUENCE tstseq RESTART WITH 13', expect);LiNeBrEaKexecSQL('ALTER SEQUENCE tstseq ' + pref + 'RESTART WITH 13', expect);LiNeBrEaKexecSQL('ALTER SEQUENCE tstseq RESTART ' + pref + 'WITH 13', expect);LiNeBrEaKexecSQL('ALTER USER tstuser SET PASSWORD ' + pref + 'frank', expect);LiNeBrEaKexecSQL(pref + 'ALTER USER tstuser SET PASSWORD frank', expect);LiNeBrEaKexecSQL('ALTER ' + pref + 'USER tstuser SET PASSWORD frank', expect);LiNeBrEaKexecSQL('ALTER USER tstuser ' + pref + 'SET PASSWORD frank', expect);LiNeBrEaKexecSQL('ALTER USER tstuser SET ' + pref + 'PASSWORD frank', expect);LiNeBrEaK"
		}, {
			"start_line": 554,
			"end_line": 562,
			"code_lines": "execSQL('ALTER TABLE bigtbl ' + prefLiNeBrEaK+ 'ALTER COLUMN i106 RENAME TO j3', expect);LiNeBrEaKexecSQL('ALTER TABLE bigtbl ALTER ' + prefLiNeBrEaK+ 'COLUMN i107 RENAME TO j4', expect);LiNeBrEaKexecSQL('ALTER TABLE bigtbl ALTER COLUMN i108 ' + prefLiNeBrEaK+ 'RENAME TO j5', expect);LiNeBrEaKexecSQL('ALTER TABLE bigtbl ALTER COLUMN i109 RENAME ' + prefLiNeBrEaK+ 'TO j6', expect);LiNeBrEaK"
		}, {
			"start_line": 573,
			"end_line": 582,
			"code_lines": "execSQL(LiNeBrEaK'ALTER TABLE constrainedtbl ADD CONSTRAINT con2 CHECK (i6 > 4)',LiNeBrEaKtrue);LiNeBrEaKexecSQL(LiNeBrEaK'ALTER TABLE constrainedtbl ADD CONSTRAINT con3 CHECK (i6 > 4)',LiNeBrEaKtrue);LiNeBrEaKexecSQL(LiNeBrEaK'ALTER TABLE constrainedtbl ADD CONSTRAINT con4 CHECK (i6 > 4)',LiNeBrEaKtrue);LiNeBrEaK"
		}, {
			"start_line": 596,
			"end_line": 603,
			"code_lines": "+ 'ADD CONSTRAINT ucons UNIQUE (i6)', expect);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl DROP CONSTRAINT ucons', true);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl ADD ' + prefLiNeBrEaK+ 'CONSTRAINT ucons UNIQUE (i6)', expect);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl DROP CONSTRAINT ucons', true);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl ADD CONSTRAINT ucons ' + prefLiNeBrEaK+ 'UNIQUE (i6)', expect);LiNeBrEaK"
		}, {
			"start_line": 609,
			"end_line": 615,
			"code_lines": "execSQL('ALTER TABLE renamedtbl RENAME TO playtbl', true);LiNeBrEaKexecSQL('ALTER TABLE playtbl ' + pref + 'RENAME TO renamedtbl',LiNeBrEaKexpect);LiNeBrEaKexecSQL('ALTER TABLE renamedtbl RENAME TO playtbl', true);LiNeBrEaKexecSQL('ALTER TABLE playtbl RENAME ' + pref + 'TO renamedtbl',LiNeBrEaKexpect);LiNeBrEaK"
		}, {
			"start_line": 617,
			"end_line": 623,
			"code_lines": "execSQL('ALTER ' + pref + 'TABLE constrainedtbl DROP CONSTRAINT con2',LiNeBrEaKexpect);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl ' + pref + 'DROP CONSTRAINT con3',LiNeBrEaKexpect);LiNeBrEaKexecSQL('ALTER TABLE constrainedtbl DROP ' + pref + 'CONSTRAINT con4',LiNeBrEaKexpect);LiNeBrEaK"
		}, {
			"start_line": 629,
			"end_line": 641,
			"code_lines": "+ 'TABLE foreigntbl ADD CONSTRAINT tstfk FOREIGN KEY 'LiNeBrEaK+ '(i7) REFERENCES primarytbl (i8)', expect);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl DROP CONSTRAINT tstfk', true);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl ' + prefLiNeBrEaK+ 'ADD CONSTRAINT tstfk FOREIGN KEY 'LiNeBrEaK+ '(i7) REFERENCES primarytbl (i8)', expect);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl DROP CONSTRAINT tstfk', true);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl ADD ' + prefLiNeBrEaK+ 'CONSTRAINT tstfk FOREIGN KEY 'LiNeBrEaK+ '(i7) REFERENCES primarytbl (i8)', expect);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl DROP CONSTRAINT tstfk', true);LiNeBrEaKexecSQL('ALTER TABLE foreigntbl ADD CONSTRAINT tstfk ' + prefLiNeBrEaK"
		}, {
			"start_line": 740,
			"end_line": 751,
			"code_lines": "newSuite.addTest(new TestSchemaParse('testTwoPartKeywords'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('testThreePartKeywords'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('testThreePartNames'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('testBasicQueries'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pTables'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pViews'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pSequences'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pIndexes'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pAliases'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pConstraints'));LiNeBrEaKnewSuite.addTest(new TestSchemaParse('test2pTriggers'));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestMultiInsert.java|",
		"loc": "92",
		"clones": [{
			"start_line": 0,
			"end_line": 11,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.util.Enumeration;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaKimport junit.framework.TestResult;LiNeBrEaK"
		}, {
			"start_line": 16,
			"end_line": 25,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKsuper.setUp();LiNeBrEaKtry {LiNeBrEaKconnection = super.newConnection();LiNeBrEaKstmnt      = connection.createStatement();LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 31,
			"end_line": 43,
			"code_lines": "while (rs.next()) {LiNeBrEaKfor (int i = 0; i < rsmd.getColumnCount(); i++) {LiNeBrEaKresult += rsmd.getColumnLabel(i + 1) + ':'LiNeBrEaK+ rs.getString(i + 1) + ':';LiNeBrEaK}LiNeBrEaKresult += 'n';LiNeBrEaKrows++;LiNeBrEaK}LiNeBrEaKrs.close();LiNeBrEaKSystem.out.println(result);LiNeBrEaKassertEquals(expected, rows);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 69,
			"end_line": 76,
			"code_lines": "} catch (SQLException e) {LiNeBrEaKfail(e.getMessage());LiNeBrEaK}LiNeBrEaKSystem.out.println('testMultiInsert complete');LiNeBrEaK}LiNeBrEaKprotected void tearDown() {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 76,
			"end_line": 85,
			"code_lines": "connection.close();LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.tearDown() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaKsuper.tearDown();LiNeBrEaK}LiNeBrEaKpublic static void main(String[] argv) {LiNeBrEaKTestResult result = new TestResult();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestLikePredicateOptimizations.java|",
		"loc": "169",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaKimport junit.framework.TestResult;LiNeBrEaK"
		}, {
			"start_line": 10,
			"end_line": 17,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKpublic void test() throws Exception {LiNeBrEaKConnection        conn = newConnection();LiNeBrEaKStatement         stmt = conn.createStatement();LiNeBrEaKPreparedStatement pstmt;LiNeBrEaKResultSet         rs;LiNeBrEaK"
		}, {
			"start_line": 24,
			"end_line": 32,
			"code_lines": "sql = 'create index idx on test(name)';LiNeBrEaKstmt.execute(sql);LiNeBrEaKsql = 'create table empty(name varchar(255))';LiNeBrEaKstmt.execute(sql);LiNeBrEaKsql = 'insert into empty values 'name10'';LiNeBrEaKstmt.execute(sql);LiNeBrEaKsql = 'insert into empty values 'name11'';LiNeBrEaKstmt.execute(sql);LiNeBrEaK"
		}, {
			"start_line": 78,
			"end_line": 85,
			"code_lines": "rs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaKsql = 'SELECT t.name FROM test t WHERE ((SELECT t2.name from test t2 where t2.name=?) like '%name5000%')';LiNeBrEaKpstmt = conn.prepareStatement(sql);LiNeBrEaKpstmt.setString(1, 'name5000');LiNeBrEaKrs = pstmt.executeQuery();LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 99,
			"code_lines": "sql = 'select count(*) from test where name is not null';LiNeBrEaKrs  = stmt.executeQuery(sql);LiNeBrEaKrs.next();LiNeBrEaKexpectedCount = rs.getInt(1);LiNeBrEaKsql           = 'select count(*) from test where name like '%'';LiNeBrEaKpstmt         = conn.prepareStatement(sql);LiNeBrEaKrs            = pstmt.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaKsql = 'select count(*) from test where substring(name from 1 for 6) = 'name44'';LiNeBrEaK"
		}, {
			"start_line": 100,
			"end_line": 119,
			"code_lines": "rs.next();LiNeBrEaKexpectedCount = rs.getInt(1);LiNeBrEaKsql           = 'select count(*) from test where name like 'name44%'';LiNeBrEaKpstmt         = conn.prepareStatement(sql);LiNeBrEaKrs            = pstmt.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaKsql = 'select count(*) from test where left(name,5) = 'name4' and right(name,1) = '5'';LiNeBrEaKrs = stmt.executeQuery(sql);LiNeBrEaKrs.next();LiNeBrEaKexpectedCount = rs.getInt(1);LiNeBrEaKsql           = 'select count(*) from test where name like 'name4%5'';LiNeBrEaKpstmt         = conn.prepareStatement(sql);LiNeBrEaKrs            = pstmt.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaKsql = 'select count(*) from test';LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 128,
			"code_lines": "rs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaKsql = 'select count(*) from test';LiNeBrEaKrs  = stmt.executeQuery(sql);LiNeBrEaKrs.next();LiNeBrEaKexpectedCount = rs.getInt(1);LiNeBrEaKsql           = 'select count(*) from test where name like '%'';LiNeBrEaKpstmt         = conn.prepareStatement(sql);LiNeBrEaKrs            = pstmt.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKactualCount = rs.getInt(1);LiNeBrEaKassertEquals(''' + sql + ''', expectedCount, actualCount);LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 158,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 162,
			"end_line": 169,
			"code_lines": "+ count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestTextTables.java|",
		"loc": "162",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 26,
			"end_line": 32,
			"code_lines": "TestUtil.deleteDatabase('/hsql/testtext/test');LiNeBrEaKTestUtil.delete('/hsql/testtext/t.txt');LiNeBrEaKTestUtil.delete('/hsql/testtext/tt.txt');LiNeBrEaKTestUtil.delete('/hsql/testtext/tident.txt');LiNeBrEaKTestUtil.delete('/hsql/testtext/tsingle.txt');LiNeBrEaKinitDatabase();LiNeBrEaK"
		}, {
			"start_line": 126,
			"end_line": 133,
			"code_lines": "st   = conn.createStatement();LiNeBrEaKrs = st.executeQuery('select count(*) from tmsingle');LiNeBrEaKassertTrue(rs.next());LiNeBrEaKassertEquals(20, rs.getInt(1));LiNeBrEaKrs = st.executeQuery('select count(*) from tident');LiNeBrEaKassertTrue(rs.next());LiNeBrEaKassertEquals(20, rs.getInt(1));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestNitin.java|",
		"loc": "46"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/BlaineTrig.java|",
		"loc": "11"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestOdbcService.java|",
		"loc": "291",
		"clones": [{
			"start_line": 54,
			"end_line": 61,
			"code_lines": "rs = ps.executeQuery();LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(5, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('five', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaK"
		}, {
			"start_line": 73,
			"end_line": 80,
			"code_lines": "} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 90,
			"code_lines": "verifySimpleQueryOutput();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 124,
			"end_line": 139,
			"code_lines": "assertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('second', rs.getString(4));LiNeBrEaKassertEquals(5, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('five', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('second', rs.getString(4));LiNeBrEaKassertEquals(10, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('ten', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('first', rs.getString(4));LiNeBrEaKassertEquals(15, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('fifteen', rs.getString(3));LiNeBrEaK"
		}, {
			"start_line": 156,
			"end_line": 163,
			"code_lines": "} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 169,
			"end_line": 187,
			"code_lines": "rs = ps.executeQuery();LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(5, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('five', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(10, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('ten', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(15, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('fifteen', rs.getString(3));LiNeBrEaKassertTrue('Not enough rows fetched', rs.next());LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaK"
		}, {
			"start_line": 183,
			"end_line": 191,
			"code_lines": "assertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('fifteen', rs.getString(3));LiNeBrEaKassertTrue('Not enough rows fetched', rs.next());LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals(25, rs.getInt(1));LiNeBrEaKassertNull(rs.getString(3));LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertTrue('Not enough rows fetched', rs.next());LiNeBrEaK"
		}, {
			"start_line": 190,
			"end_line": 197,
			"code_lines": "assertTrue('Not enough rows fetched', rs.next());LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals(40, rs.getInt(1));LiNeBrEaKassertEquals('forty', rs.getString(3));LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertFalse('Too many rows fetched', rs.next());LiNeBrEaKrs.close();LiNeBrEaK"
		}, {
			"start_line": 197,
			"end_line": 225,
			"code_lines": "rs = ps.executeQuery();LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(5, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('five', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(10, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('ten', rs.getString(3));LiNeBrEaKassertTrue('No rows fetched', rs.next());LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertEquals(15, rs.getInt(1));LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals('fifteen', rs.getString(3));LiNeBrEaKassertTrue('Not enough rows fetched', rs.next());LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals(25, rs.getInt(1));LiNeBrEaKassertNull(rs.getString(3));LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertTrue('Not enough rows fetched', rs.next());LiNeBrEaKassertEquals(3, rs.getInt(2));LiNeBrEaKassertEquals(40, rs.getInt(1));LiNeBrEaKassertEquals('forty', rs.getString(3));LiNeBrEaKassertEquals('str', rs.getString(4));LiNeBrEaKassertFalse('Too many rows fetched', rs.next());LiNeBrEaKrs.close();LiNeBrEaK"
		}, {
			"start_line": 223,
			"end_line": 233,
			"code_lines": "assertFalse('Too many rows fetched', rs.next());LiNeBrEaKrs.close();LiNeBrEaKverifySimpleQueryOutput();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 242,
			"end_line": 251,
			"code_lines": "assertFalse('Too many rows updated', rs.next());LiNeBrEaKrs.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKjunit.framework.AssertionFailedError aseLiNeBrEaK= new junit.framework.AssertionFailedError(se.getMessage());LiNeBrEaKase.initCause(se);LiNeBrEaKthrow ase;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/HSQLBug.java|",
		"loc": "59",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/HsqldbTestCase.java|",
		"loc": "84",
		"clones": [{
			"start_line": 3,
			"end_line": 9,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.Driver;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 26,
			"end_line": 33,
			"code_lines": "props.put('password', '');LiNeBrEaKprops.put('hsqldb.default_table_type', 'cached');LiNeBrEaKprops.put('hsqldb.cache_scale', '8');LiNeBrEaKprops.put('hsqldb.applog', '0');LiNeBrEaKprops.put('hsqldb.log_size', '200');LiNeBrEaKprops.put('hsqldb.result_memory_rows', '10');LiNeBrEaKprops.put('shutdown', 'true');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestHTTPKeepAlive.java|",
		"loc": "103",
		"clones": [{
			"start_line": 25,
			"end_line": 36,
			"code_lines": "}LiNeBrEaKprotected void tearDown() {LiNeBrEaKtry {LiNeBrEaKstmnt.execute('DROP TABLE IF EXISTS link_table');LiNeBrEaKconnection.close();LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.tearDown() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaKsuper.tearDown();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 103,
			"code_lines": "System.out.println('TestKeepAlive error count: ' + result.failureCount());LiNeBrEaKEnumeration e = result.failures();LiNeBrEaKwhile (e.hasMoreElements()) {LiNeBrEaKSystem.out.println(e.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestLobs.java|",
		"loc": "674",
		"clones": [{
			"start_line": 145,
			"end_line": 156,
			"code_lines": "if (baOut.length != baR1.length) {LiNeBrEaKassertTrue('Expected array len ' + baR1.length + ', got len 'LiNeBrEaK+ baOut.length, false);LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < baOut.length; i++) {LiNeBrEaKif (baOut[i] != baR1[i]) {LiNeBrEaKassertTrue('Expected array len ' + baR1.lengthLiNeBrEaK+ ', got len ' + baOut.length, false);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKrs.close();LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 170,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE CLOBTEST IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE CLOBTEST(ID IDENTITY, CLOBFIELD CLOB(100000))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK"
		}, {
			"start_line": 219,
			"end_line": 233,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE CLOBTEST IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE CLOBTEST(ID IDENTITY, V VARCHAR(10), I INT, CLOBFIELD CLOB(100000))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKtry {LiNeBrEaKString dml0 = 'insert into clobtest values(default, ?, ?, ?)';LiNeBrEaKString            dql0 = 'select * from clobtest;';LiNeBrEaKPreparedStatement ps   = connection.prepareStatement(dml0);LiNeBrEaKString            data = 'Testing clob insert and select ops';LiNeBrEaKClob              clob = new JDBCClob(data);LiNeBrEaK"
		}, {
			"start_line": 314,
			"end_line": 323,
			"code_lines": "try {LiNeBrEaKInputStream fis =LiNeBrEaKgetClass().getResourceAsStream(resourceFileName);LiNeBrEaKfis    = getClass().getResourceAsStream(resourceFileName);LiNeBrEaKreader = new InputStreamReader(fis, 'ISO-8859-1');LiNeBrEaKfor (int i = 0; i < 100; i++) {LiNeBrEaKreader.read();LiNeBrEaK}LiNeBrEaK} catch (Exception e) {}LiNeBrEaK"
		}, {
			"start_line": 336,
			"end_line": 352,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE VARIABLE IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE VARIABLE (stateid varchar(128), varid numeric(16,0), 'LiNeBrEaK+ 'scalabilitypassivated char(1) DEFAULT 'N', value clob(20000), scopeguid varchar(128),'LiNeBrEaK+ 'primary key (stateid, varid, scalabilitypassivated, scopeguid))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKtry {LiNeBrEaKString dml0 = 'INSERT INTO VARIABLE VALUES (?, ?, 'N', ?, ?)';LiNeBrEaKString dml1 =LiNeBrEaK'UPDATE VARIABLE SET value = ? WHERE stateid = ? AND 'LiNeBrEaK+ 'varid = ? AND scalabilitypassivated = 'N' AND scopeguid = ?';LiNeBrEaKPreparedStatement ps = connection.prepareStatement(dml0);LiNeBrEaK"
		}, {
			"start_line": 390,
			"end_line": 399,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE VARIABLE IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE VARIABLE (stateid varchar(128), varid numeric(16,0), 'LiNeBrEaK+ 'scalabilitypassivated char(1) DEFAULT 'N', value clob(2000), scopeguid varchar(128),'LiNeBrEaK+ 'primary key (stateid, varid, scalabilitypassivated, scopeguid))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK"
		}, {
			"start_line": 402,
			"end_line": 414,
			"code_lines": "try {LiNeBrEaKString dml0 = 'INSERT INTO VARIABLE VALUES (?, ?, 'N', ?, ?)';LiNeBrEaKString dml1 =LiNeBrEaK'UPDATE VARIABLE SET varid = varid + 1 WHERE stateid = ? AND 'LiNeBrEaK+ 'varid = ? AND scalabilitypassivated = 'N' AND scopeguid = ?';LiNeBrEaKPreparedStatement ps = connection.prepareStatement(dml0);LiNeBrEaKconnection.setAutoCommit(false);LiNeBrEaKJDBCClob dataClob =LiNeBrEaKnew JDBCClob('the quick brown fox jumps on the lazy dog');LiNeBrEaKReader    reader = null;LiNeBrEaKStopWatch sw     = new StopWatch();LiNeBrEaKsw.start();LiNeBrEaK"
		}, {
			"start_line": 415,
			"end_line": 428,
			"code_lines": "reader = dataClob.getCharacterStream();LiNeBrEaKps.setString(1, 'test-id-1' + i);LiNeBrEaKps.setLong(2, 23456789123456L + i);LiNeBrEaKps.setCharacterStream(3, reader, dataClob.length());LiNeBrEaKps.setString(4, 'test-scope-1' + i);LiNeBrEaKps.executeUpdate();LiNeBrEaKconnection.commit();LiNeBrEaK}LiNeBrEaKsw.stop();LiNeBrEaKSystem.out.println(sw.elapsedTimeToMessage('Time for inserts'));LiNeBrEaKps = connection.prepareStatement(dml1);LiNeBrEaKsw.zero();LiNeBrEaKsw.start();LiNeBrEaK"
		}, {
			"start_line": 454,
			"end_line": 461,
			"code_lines": "sw.stop();LiNeBrEaKSystem.out.println(sw.elapsedTimeToMessage('Time for updates'));LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 462,
			"end_line": 472,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE CLOBTEST IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE CLOBTEST(ID IDENTITY, CLOBFIELD CLOB(100000))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKtry {LiNeBrEaKString dml0 = 'insert into clobtest(clobfield) values ?';LiNeBrEaK"
		}, {
			"start_line": 515,
			"end_line": 527,
			"code_lines": "System.out.println('Starting (sub-)test: ' + getName());LiNeBrEaKtry {LiNeBrEaKString ddl0 = 'DROP TABLE CLOBTEST IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE CLOBTEST(ID IDENTITY, CLOBFIELD CLOB(100000))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKtry {LiNeBrEaKString dml0 = 'insert into clobtest(clobfield) values ?';LiNeBrEaKString            value = '0123456789';LiNeBrEaKPreparedStatement ps    = connection.prepareStatement(dml0);LiNeBrEaK"
		}, {
			"start_line": 530,
			"end_line": 569,
			"code_lines": "ps.executeUpdate();LiNeBrEaKString dq1   = 'select CHARACTER_LENGTH(clobfield) from clobtest;';LiNeBrEaKResultSet rs = statement.executeQuery(dq1);LiNeBrEaKrs.next();LiNeBrEaKint length = rs.getInt(1);LiNeBrEaKassertTrue(value.length() == length);LiNeBrEaKrs.close();LiNeBrEaKString dq3 = 'delete from clobtest;';LiNeBrEaKstatement.execute(dq3);LiNeBrEaKchar[] testChars = new char[11111];LiNeBrEaKfor (int i = 0, j = 32; i < testChars.length; i++, j++) {LiNeBrEaKif (j > 255) {LiNeBrEaKj = 32;LiNeBrEaK}LiNeBrEaKtestChars[i] = (char) j;LiNeBrEaK}LiNeBrEaKps.setCharacterStream(1, new CharArrayReader(testChars),LiNeBrEaKtestChars.length);LiNeBrEaKps.executeUpdate();LiNeBrEaKString dq2 = 'select clobfield from clobtest;';LiNeBrEaKrs = statement.executeQuery(dq2);LiNeBrEaKrs.next();LiNeBrEaKReader reader   = rs.getCharacterStream(1);LiNeBrEaKchar[] newChars = new char[testChars.length];LiNeBrEaKtry {LiNeBrEaKreader.read(newChars);LiNeBrEaK} catch (IOException e) {LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < testChars.length; i++) {LiNeBrEaKif (testChars[i] != newChars[i]) {LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 605,
			"end_line": 612,
			"code_lines": "ps.setBlob(1, blob);LiNeBrEaKps.executeUpdate();LiNeBrEaKdata[4] = 50;LiNeBrEaKblob    = new JDBCBlob(data);LiNeBrEaKps.setBlob(1, blob);LiNeBrEaKps.executeUpdate();LiNeBrEaKps.close();LiNeBrEaK"
		}, {
			"start_line": 613,
			"end_line": 627,
			"code_lines": "ps = connection.prepareStatement(dql0);LiNeBrEaKResultSet rs = ps.executeQuery();LiNeBrEaKrs.next();LiNeBrEaKBlob blob1 = rs.getBlob(2);LiNeBrEaKrs.next();LiNeBrEaKBlob   blob2 = rs.getBlob(2);LiNeBrEaKbyte[] data1 = blob1.getBytes(1, 10);LiNeBrEaKbyte[] data2 = blob2.getBytes(1, 10);LiNeBrEaKassertTrue(data1[4] == 5 && data2[4] == 50);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 655,
			"end_line": 661,
			"code_lines": "}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('test failure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestStressInsert.java|",
		"loc": "133",
		"clones": [{
			"start_line": 104,
			"end_line": 113,
			"code_lines": "if (i % 100 == 0) {LiNeBrEaKlong t3 = System.currentTimeMillis();LiNeBrEaKSystem.out.println('inserted ' + i + ', 100 in ' + (t3 - t2));LiNeBrEaKt2 = t3;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println('total inserted ' + MAX_SIZE + ' in ' + (t2 - t1));LiNeBrEaKshutdown();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestDatetimeSimple.java|",
		"loc": "190",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}, {
			"start_line": 14,
			"end_line": 22,
			"code_lines": "static {LiNeBrEaKtry {LiNeBrEaKClass.forName('org.hsqldb.jdbcDriver');LiNeBrEaK} catch (ClassNotFoundException cnfe) {LiNeBrEaKthrow new RuntimeException(LiNeBrEaK'<clinit> failed.  JDBC Driver class not in CLASSPATH');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 42,
			"end_line": 48,
			"code_lines": "'select to_number(to_char((select ? - c0  day from dual), 'YYYYMMDD')) from dual');LiNeBrEaKpstmt.setTimestamp(1, new Timestamp(System.currentTimeMillis()));LiNeBrEaKset = pstmt.executeQuery();LiNeBrEaKif (set.next()) {LiNeBrEaKSystem.out.println('pstmt res=' + set.getInt(1));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 88,
			"code_lines": "rs.close();LiNeBrEaKrs = st.executeQuery('SELECT count(*) c FROM t WHERE d = 'LiNeBrEaK+ ''2008-10-27'');LiNeBrEaKrs.next();LiNeBrEaKSystem.out.println('Match? ' + (rs.getInt('c') > 0));LiNeBrEaKst.executeUpdate('DROP TABLE t2 IF EXISTS');LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 99,
			"code_lines": "st.executeUpdate('INSERT INTO t2 VALUES(1, '2008-11-27 12:30:00')');LiNeBrEaKps = conn.prepareStatement('INSERT INTO t2 VALUES(2, ?)');LiNeBrEaKps.setTimestamp(1, java.sql.Timestamp.valueOf('2008-10-27 0:00:00'));LiNeBrEaKps.execute();LiNeBrEaKps.close();LiNeBrEaKrs = st.executeQuery('SELECT ts FROM t2');LiNeBrEaKrs.next();LiNeBrEaKSystem.out.println('Object: ' + rs.getObject('ts')LiNeBrEaK"
		}, {
			"start_line": 116,
			"end_line": 122,
			"code_lines": "st.executeUpdate('SET TIME ZONE INTERVAL '-5:00' HOUR TO MINUTE');LiNeBrEaKst.executeUpdate('DROP TABLE t3 IF EXISTS');LiNeBrEaKst.executeUpdate('CREATE TABLE t3(d date)');LiNeBrEaKst.executeUpdate('INSERT INTO t3 VALUES('2008-11-27')');LiNeBrEaKrs = st.executeQuery('SELECT d FROM t3');LiNeBrEaKrs.next();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestJavaFunctions.java|",
		"loc": "129",
		"clones": [{
			"start_line": 32,
			"end_line": 39,
			"code_lines": "s.executeUpdate('DROP FUNCTION TEST_CUSTOM_RESULT IF EXISTS');LiNeBrEaKs.executeUpdate('DROP TABLE T IF EXISTS');LiNeBrEaKs.executeUpdate('CREATE TABLE T(C VARCHAR(20), I INT)');LiNeBrEaKs.executeUpdate('INSERT INTO T VALUES 'Thames', 10');LiNeBrEaKs.executeUpdate('INSERT INTO T VALUES 'Fleet', 12');LiNeBrEaKs.executeUpdate('INSERT INTO T VALUES 'Brent', 14');LiNeBrEaKs.executeUpdate('INSERT INTO T VALUES 'Westbourne', 16');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TriggerClass.java|",
		"loc": "21"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/AllTests.java|",
		"loc": "48"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestHashStructures.java|",
		"loc": "395",
		"clones": [{
			"start_line": 73,
			"end_line": 84,
			"code_lines": "java.util.HashMap uMap = new java.util.HashMap();LiNeBrEaKtry {LiNeBrEaKpopulateBySerialIntKeys(uMap, hMap, testSize);LiNeBrEaKcompareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaKpopulateByRandomIntKeys(uMap, hMap, testSize);LiNeBrEaKcompareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaKdepopulateRandomly(uMap, hMap, 20);LiNeBrEaKcompareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaK"
		}, {
			"start_line": 82,
			"end_line": 88,
			"code_lines": "compareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaKpopulateByRandomIntKeys(uMap, hMap, testSize);LiNeBrEaKcompareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaKdepopulateRandomly(uMap, hMap, 20);LiNeBrEaK"
		}, {
			"start_line": 89,
			"end_line": 96,
			"code_lines": "compareByUIterator(uMap, hMap);LiNeBrEaKcompareByHIterator(uMap, hMap);LiNeBrEaK} catch (Exception e) {LiNeBrEaKfailed = true;LiNeBrEaK}LiNeBrEaKassertTrue(!failed);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 304,
			"end_line": 310,
			"code_lines": "if (uMap.size() != hIntMap.size()) {LiNeBrEaKthrow new Exception('HashMap size mismatch');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKSystem.out.println(uMap.size());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 373,
			"end_line": 383,
			"code_lines": "}LiNeBrEaKint nextIntRandom(Random r, int range) {LiNeBrEaKint b = r.nextInt();LiNeBrEaKif (b == Integer.MIN_VALUE) {LiNeBrEaKb = Integer.MAX_VALUE;LiNeBrEaK}LiNeBrEaKb = Math.abs(b);LiNeBrEaKreturn b % range;LiNeBrEaK}LiNeBrEaKpublic static void main(String[] argv) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBug785429.java|",
		"loc": "102",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaKimport junit.framework.TestResult;LiNeBrEaK"
		}, {
			"start_line": 78,
			"end_line": 85,
			"code_lines": "}LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println('TestSql.tearDown() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaKsuper.tearDown();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 93,
			"end_line": 102,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestBug785429 failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestGroupByHaving.java|",
		"loc": "183",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 98,
			"code_lines": "new Double(42500), new Integer(13)LiNeBrEaK}, {LiNeBrEaKnew Double(45000), new Integer(23)LiNeBrEaK},LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, '00000');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 102,
			"end_line": 112,
			"code_lines": "+ 'order by superior_id ' + '';LiNeBrEaKObject[][] expected = new Object[][] {LiNeBrEaK{LiNeBrEaKnew Double(42500), new Integer(13)LiNeBrEaK}, {LiNeBrEaKnew Double(45000), new Integer(23)LiNeBrEaK},LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, '00000');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestKarl.java|",
		"loc": "180",
		"clones": [{
			"start_line": 73,
			"end_line": 81,
			"code_lines": "try {LiNeBrEaKc.close();LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 113,
			"end_line": 119,
			"code_lines": "p.execute();LiNeBrEaKp.close();LiNeBrEaKSystem.out.println('END INSERT INTO WAEHLER');LiNeBrEaKSystem.out.println('DELETE FROM WAEHLER START ...');LiNeBrEaKp = p_connection.prepareStatement(LiNeBrEaK'DELETE FROM WAEHLER WHERE NAME = ?');LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 162,
			"code_lines": "for (int i = 1; i <= col_count; i++) {LiNeBrEaKSystem.out.print(rs.getMetaData().getColumnLabel(i) + 't');LiNeBrEaK}LiNeBrEaKSystem.out.println('');LiNeBrEaKwhile (rs.next()) {LiNeBrEaKfor (int i = 1; i <= col_count; i++) {LiNeBrEaKSystem.out.print(rs.getObject(i));LiNeBrEaKSystem.out.print('t');LiNeBrEaK}LiNeBrEaKSystem.out.println('');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/Waiter.java|",
		"loc": "57"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestSubselect.java|",
		"loc": "264",
		"clones": [{
			"start_line": 2,
			"end_line": 9,
			"code_lines": "import java.io.IOException;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaK"
		}, {
			"start_line": 17,
			"end_line": 24,
			"code_lines": "super(s);LiNeBrEaK}LiNeBrEaKprotected static Connection getJDBCConnection() throws SQLException {LiNeBrEaKreturn DriverManager.getConnection(databaseURL, databaseUser,LiNeBrEaKdatabasePassword);LiNeBrEaK}LiNeBrEaKprotected void setUp() throws Exception {LiNeBrEaK"
		}, {
			"start_line": 41,
			"end_line": 50,
			"code_lines": "statement.execute('insert into colors values(1,'red'); 'LiNeBrEaK+ 'insert into colors values(2,'green'); 'LiNeBrEaK+ 'insert into colors values(3,'orange'); 'LiNeBrEaK+ 'insert into colors values(4,'indigo'); ');LiNeBrEaKstatement.execute('create table sizes(id int, val varchar(10)); ');LiNeBrEaKstatement.execute('insert into sizes values(1,'small'); 'LiNeBrEaK+ 'insert into sizes values(2,'medium'); 'LiNeBrEaK+ 'insert into sizes values(3,'large'); 'LiNeBrEaK+ 'insert into sizes values(4,'odd'); ');LiNeBrEaK"
		}, {
			"start_line": 55,
			"end_line": 66,
			"code_lines": "+ 'insert into fruits values(3, 'red delicious',1); 'LiNeBrEaK+ 'insert into fruits values(4, 'granny smith',2); 'LiNeBrEaK+ 'insert into fruits values(5, 'tangerine',4);');LiNeBrEaKstatement.execute(LiNeBrEaK'create table trees(id int, name varchar(30), fruit_id int, size_id int); ');LiNeBrEaKstatement.execute(LiNeBrEaK'insert into trees values(1, 'small golden delicious tree',1,1); 'LiNeBrEaK+ 'insert into trees values(2, 'large macintosh tree',2,3); 'LiNeBrEaK+ 'insert into trees values(3, 'large red delicious tree',3,3); 'LiNeBrEaK+ 'insert into trees values(4, 'small red delicious tree',3,1); 'LiNeBrEaK+ 'insert into trees values(5, 'medium granny smith tree',4,2); ');LiNeBrEaK"
		}, {
			"start_line": 142,
			"end_line": 149,
			"code_lines": "String sql =LiNeBrEaK'select a.name from fruits a where a.id in (select b.fruit_id from trees b where b.id < 3) order by name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'golden delicious', 'macintosh'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 158,
			"end_line": 165,
			"code_lines": "String sql =LiNeBrEaK'select a.name from fruits a where a.id in (select b.fruit_id from trees b) order by a.name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'golden delicious', 'granny smith', 'macintosh', 'red delicious'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 173,
			"code_lines": "String sql =LiNeBrEaK'select val from colors where id in (select id from trees where fruit_id = 3) order by val';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'indigo', 'orange'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 174,
			"end_line": 181,
			"code_lines": "String sql =LiNeBrEaK'select a.val from colors a where a.id in (select b.id from trees b where b.fruit_id = 3) order by a.val';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'indigo', 'orange'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 189,
			"code_lines": "String sql =LiNeBrEaK'select name from trees where id in (select id from trees where fruit_id = 3) order by name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'large red delicious tree', 'small red delicious tree'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 190,
			"end_line": 197,
			"code_lines": "String sql =LiNeBrEaK'select a.name from trees a where a.id in (select b.id from trees b where b.fruit_id = 3) order by a.name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'large red delicious tree', 'small red delicious tree'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 198,
			"end_line": 205,
			"code_lines": "String sql =LiNeBrEaK'select sizes.val from trees, sizes where sizes.id = trees.size_id and trees.id in (select id from trees where fruit_id = 3) order by sizes.val';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'large', 'small'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 206,
			"end_line": 213,
			"code_lines": "String sql =LiNeBrEaK'select name from trees where size_id in (select id from sizes where val = 'large') and fruit_id in (select id from fruits where color_id = 1) order by name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'large macintosh tree', 'large red delicious tree'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 229,
			"end_line": 236,
			"code_lines": "String sql =LiNeBrEaK'select name from fruits where id not in (select id from fruits where color_id > 1 ) order by name';LiNeBrEaKString[] expected = new String[] {LiNeBrEaK'macintosh', 'red delicious'LiNeBrEaK};LiNeBrEaKcompareResults(sql, expected, jdbcConnection);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestTypeConversion.java|",
		"loc": "128",
		"clones": [{
			"start_line": 14,
			"end_line": 21,
			"code_lines": "super(name);LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKsuper.setUp();LiNeBrEaKtry {LiNeBrEaKconnection = super.newConnection();LiNeBrEaKstatement  = connection.createStatement();LiNeBrEaK"
		}, {
			"start_line": 17,
			"end_line": 25,
			"code_lines": "super.setUp();LiNeBrEaKtry {LiNeBrEaKconnection = super.newConnection();LiNeBrEaKstatement  = connection.createStatement();LiNeBrEaK} catch (Exception e) {LiNeBrEaKSystem.out.println(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 26,
			"end_line": 37,
			"code_lines": "try {LiNeBrEaKString ddl0 = 'DROP TABLE BSTREAM IF EXISTS';LiNeBrEaKString ddl1 =LiNeBrEaK'CREATE TABLE BSTREAM(A INT IDENTITY PRIMARY KEY, B VARBINARY(20))';LiNeBrEaKstatement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('ddl failure');LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 68,
			"end_line": 78,
			"code_lines": "statement.execute(ddl0);LiNeBrEaKstatement.execute(ddl1);LiNeBrEaK} catch (SQLException e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKfail('ddl failure');LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKString dml0 = 'insert into bittest values(?, ?, ?, ?, default)';LiNeBrEaKString            dql0 = 'select * from bittest;';LiNeBrEaKPreparedStatement ps   = connection.prepareStatement(dml0);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestViewAsterisks.java|",
		"loc": "350",
		"clones": [{
			"start_line": 23,
			"end_line": 33,
			"code_lines": "executeStatement('INSERT INTO ABC VALUES (1, 'a', 'b', 'c')');LiNeBrEaKexecuteStatement('INSERT INTO ABC VALUES (2, 'd', 'e', 'f')');LiNeBrEaKexecuteStatement(LiNeBrEaK'CREATE TABLE TABLE_A (ID_A INTEGER NOT NULL PRIMARY KEY, NAME_A VARCHAR(50))');LiNeBrEaKexecuteStatement('INSERT INTO TABLE_A VALUES (1, 'first A')');LiNeBrEaKexecuteStatement('INSERT INTO TABLE_A VALUES (2, 'second A')');LiNeBrEaKexecuteStatement(LiNeBrEaK'CREATE TABLE TABLE_B (ID_B INTEGER NOT NULL PRIMARY KEY, NAME_B VARCHAR(50))');LiNeBrEaKexecuteStatement('INSERT INTO TABLE_B VALUES (1, 'first B')');LiNeBrEaKexecuteStatement('INSERT INTO TABLE_B VALUES (2, 'second B')');LiNeBrEaK"
		}, {
			"start_line": 33,
			"end_line": 39,
			"code_lines": "} catch (SQLException ex) {LiNeBrEaKfail(ex.toString());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void setUp() {LiNeBrEaKsuper.setUp();LiNeBrEaK"
		}, {
			"start_line": 39,
			"end_line": 45,
			"code_lines": "setupDatabase();LiNeBrEaK}LiNeBrEaKprotected void tearDown() {LiNeBrEaKexecuteStatement('SHUTDOWN');LiNeBrEaKsuper.tearDown();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 195,
			"code_lines": "checkViewTranslationAndContent(LiNeBrEaK'S3', null, 'SELECT TOP 2 * FROM ABC ORDER BY ID',LiNeBrEaK'SELECT TOP 2 PUBLIC.ABC.ID,PUBLIC.ABC.A,PUBLIC.ABC.B,PUBLIC.ABC.C FROM PUBLIC.ABC ORDER BY ID',LiNeBrEaK'ABC');LiNeBrEaKcheckViewTranslationAndContent(LiNeBrEaK'S4', null, 'SELECT DISTINCT * FROM ABC',LiNeBrEaK'SELECT DISTINCT PUBLIC.ABC.ID,PUBLIC.ABC.A,PUBLIC.ABC.B,PUBLIC.ABC.C FROM PUBLIC.ABC',LiNeBrEaK'ABC');LiNeBrEaKcheckViewTranslationAndContent(LiNeBrEaK'S5', null, 'SELECT ABC.* FROM ABC',LiNeBrEaK'SELECT  PUBLIC.ABC.ID,PUBLIC.ABC.A,PUBLIC.ABC.B,PUBLIC.ABC.C  FROM PUBLIC.ABC',LiNeBrEaK'ABC');LiNeBrEaKcheckViewTranslationAndContent(LiNeBrEaK"
		}, {
			"start_line": 196,
			"end_line": 202,
			"code_lines": "'SELECT A.ID,A.A,A.B,A.C FROM PUBLIC.ABC AS A',LiNeBrEaK'ABC');LiNeBrEaKcheckViewTranslationAndContent(LiNeBrEaK'S7', null, '( SELECT * FROM ABC )',LiNeBrEaK'(SELECT PUBLIC.ABC.ID,PUBLIC.ABC.A,PUBLIC.ABC.B,PUBLIC.ABC.C FROM PUBLIC.ABC)',LiNeBrEaK'ABC');LiNeBrEaK"
		}, {
			"start_line": 240,
			"end_line": 247,
			"code_lines": "checkViewTranslationAndContent(LiNeBrEaK'M2', null, 'SELECT TABLE_B.*, TABLE_A.* FROM TABLE_A, TABLE_B',LiNeBrEaK'SELECT  PUBLIC.TABLE_B.ID_B,PUBLIC.TABLE_B.NAME_B , PUBLIC.TABLE_A.ID_A,PUBLIC.TABLE_A.NAME_A  FROM PUBLIC.TABLE_A,PUBLIC.TABLE_B',LiNeBrEaKnew Object[][] {LiNeBrEaKnew Object[] {LiNeBrEaKnew Integer(1), 'first B', new Integer(1), 'first A'LiNeBrEaK}, new Object[] {LiNeBrEaK"
		}, {
			"start_line": 279,
			"end_line": 288,
			"code_lines": "checkViewTranslationAndContent(LiNeBrEaK'Q3', null, 'SELECT A.* FROM ( SELECT * FROM TABLE_A ) AS A',LiNeBrEaK'SELECT  A.ID_A,A.NAME_A  FROM(SELECT PUBLIC.TABLE_A.ID_A,PUBLIC.TABLE_A.NAME_A FROM PUBLIC.TABLE_A)AS A',LiNeBrEaKnull);LiNeBrEaKcheckViewTranslationAndContent(LiNeBrEaK'Q4', null,LiNeBrEaK'SELECT A.*, B.* FROM ( SELECT * FROM TABLE_A ) AS A, ( SELECT * FROM TABLE_B ) AS B',LiNeBrEaK'SELECT  A.ID_A,A.NAME_A , B.ID_B,B.NAME_B  FROM(SELECT PUBLIC.TABLE_A.ID_A,PUBLIC.TABLE_A.NAME_A FROM PUBLIC.TABLE_A)AS A,(SELECT PUBLIC.TABLE_B.ID_B,PUBLIC.TABLE_B.NAME_B FROM PUBLIC.TABLE_B)AS B',LiNeBrEaKnull);LiNeBrEaK"
		}, {
			"start_line": 305,
			"end_line": 317,
			"code_lines": "'SELECT PUBLIC.TABLE_A.ID_A,PUBLIC.TABLE_A.NAME_A FROM PUBLIC.TABLE_A UNION SELECT PUBLIC.TABLE_B.ID_B,PUBLIC.TABLE_B.NAME_B FROM PUBLIC.TABLE_B',LiNeBrEaKnew Object[][] {LiNeBrEaKnew Object[] {LiNeBrEaKnew Integer(1), 'first A'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(1), 'first B'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(2), 'second A'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(2), 'second B'LiNeBrEaK}LiNeBrEaK});LiNeBrEaK"
		}, {
			"start_line": 320,
			"end_line": 333,
			"code_lines": "'SELECT ID_A,NAME_A FROM(SELECT PUBLIC.TABLE_A.ID_A,PUBLIC.TABLE_A.NAME_A FROM PUBLIC.TABLE_A UNION SELECT PUBLIC.TABLE_B.ID_B,PUBLIC.TABLE_B.NAME_B FROM PUBLIC.TABLE_B)',LiNeBrEaKnew Object[][] {LiNeBrEaKnew Object[] {LiNeBrEaKnew Integer(1), 'first A'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(1), 'first B'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(2), 'second A'LiNeBrEaK}, new Object[] {LiNeBrEaKnew Integer(2), 'second B'LiNeBrEaK}LiNeBrEaK});LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/test/TestBug1191815.java|",
		"loc": "65",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.sql.Timestamp;LiNeBrEaK"
		}, {
			"start_line": 47,
			"end_line": 55,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] args) throws Exception {LiNeBrEaKTestResult            result;LiNeBrEaKTestCase              test;LiNeBrEaKjava.util.Enumeration exceptions;LiNeBrEaKjava.util.Enumeration failures;LiNeBrEaKint                   count;LiNeBrEaKresult = new TestResult();LiNeBrEaK"
		}, {
			"start_line": 56,
			"end_line": 65,
			"code_lines": "test.run(result);LiNeBrEaKcount = result.failureCount();LiNeBrEaKSystem.out.println('TestBug1192000 failure count: ' + count);LiNeBrEaKfailures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.out.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/IndexAVL.java|",
		"loc": "1322",
		"clones": [{
			"start_line": 97,
			"end_line": 119,
			"code_lines": "}LiNeBrEaKpublic HsqlName getName() {LiNeBrEaKreturn name;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaK"
		}, {
			"start_line": 399,
			"end_line": 405,
			"code_lines": "if (i != 0) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 408,
			"end_line": 417,
			"code_lines": "int i = colTypes[j].compare(session, a[colIndex[j]],LiNeBrEaKb[rowColMap[j]]);LiNeBrEaKif (i != 0) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic int compareRowNonUnique(Session session, Object[] a, Object[] b,LiNeBrEaK"
		}, {
			"start_line": 421,
			"end_line": 427,
			"code_lines": "if (i != 0) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 466,
			"end_line": 483,
			"code_lines": "int i = colTypes[j].compare(session, a[colIndex[j]],LiNeBrEaKb[colIndex[j]]);LiNeBrEaKif (i != 0) {LiNeBrEaKif (isSimpleOrder) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaKboolean nulls = a[colIndex[j]] == nullLiNeBrEaK|| b[colIndex[j]] == null;LiNeBrEaKif (colDesc[j] && !nulls) {LiNeBrEaKi = -i;LiNeBrEaK}LiNeBrEaKif (nullsLast[j] && nulls) {LiNeBrEaKi = -i;LiNeBrEaK}LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 699,
			"end_line": 706,
			"code_lines": "} catch (RuntimeException e) {LiNeBrEaKthrow e;LiNeBrEaK} finally {LiNeBrEaKstore.writeUnlock();LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 741,
			"end_line": 748,
			"code_lines": "TransactionManager.ACTION_READ, false);LiNeBrEaKif (node == null) {LiNeBrEaKreturn emptyIterator;LiNeBrEaK}LiNeBrEaKreturn new IndexRowIterator(session, store, this, node, 0, false,LiNeBrEaKfalse);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 752,
			"end_line": 759,
			"code_lines": "TransactionManager.ACTION_READ, false);LiNeBrEaKif (node == null) {LiNeBrEaKreturn emptyIterator;LiNeBrEaK}LiNeBrEaKreturn new IndexRowIterator(session, store, this, node, 0, false,LiNeBrEaKfalse);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 788,
			"end_line": 796,
			"code_lines": "readLock.lock();LiNeBrEaKtry {LiNeBrEaKNodeAVL x = getAccessor(store);LiNeBrEaKNodeAVL l = x;LiNeBrEaKwhile (l != null) {LiNeBrEaKx = l;LiNeBrEaKl = x.getLeft(store);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 805,
			"end_line": 812,
			"code_lines": "int distinctCount) {LiNeBrEaKreadLock.lock();LiNeBrEaKtry {LiNeBrEaKNodeAVL x = getAccessor(store);LiNeBrEaKNodeAVL l = x;LiNeBrEaKwhile (l != null) {LiNeBrEaKx = l;LiNeBrEaK"
		}, {
			"start_line": 813,
			"end_line": 821,
			"code_lines": "}LiNeBrEaKwhile (session != null && x != null) {LiNeBrEaKRow row = x.getRow(store);LiNeBrEaKif (session.database.txManager.canRead(LiNeBrEaKsession, store, row, TransactionManager.ACTION_READ,LiNeBrEaKnull)) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 866,
			"end_line": 880,
			"code_lines": "if (x == null) {LiNeBrEaKreturn x;LiNeBrEaK}LiNeBrEaKif (session == null) {LiNeBrEaKreturn x;LiNeBrEaK}LiNeBrEaKRow row = x.getRow(store);LiNeBrEaKif (session.database.txManager.canRead(LiNeBrEaKsession, store, row, TransactionManager.ACTION_READ,LiNeBrEaKnull)) {LiNeBrEaKreturn x;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 994,
			"end_line": 1010,
			"code_lines": "if (c == null) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKnodeData = c.getData(store);LiNeBrEaKif (compareRow(session, data, nodeData) == 0) {LiNeBrEaKrow = c.getRow(store);LiNeBrEaKsession.database.txManager.setTransactionInfo(store, row);LiNeBrEaKif (session.database.txManager.canRead(LiNeBrEaKsession, store, row, TransactionManager.ACTION_DUP,LiNeBrEaKnull)) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1069,
			"end_line": 1076,
			"code_lines": "n = x.getRight(store);LiNeBrEaK} else {LiNeBrEaKresult = x;LiNeBrEaKn      = x.getLeft(store);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1093,
			"end_line": 1100,
			"code_lines": "result = x;LiNeBrEaKn      = x.getRight(store);LiNeBrEaK} else {LiNeBrEaKn = x.getLeft(store);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1157,
			"end_line": 1163,
			"code_lines": "if (i < 0) {LiNeBrEaKresult = x;LiNeBrEaKn      = x.getRight(store);LiNeBrEaK} else {LiNeBrEaKn = x.getLeft(store);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1164,
			"end_line": 1170,
			"code_lines": "if (i <= 0) {LiNeBrEaKn = x.getRight(store);LiNeBrEaK} else {LiNeBrEaKresult = x;LiNeBrEaKn      = x.getLeft(store);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1170,
			"end_line": 1181,
			"code_lines": "}LiNeBrEaKif (n == null) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKx = n;LiNeBrEaK}LiNeBrEaKif (session == null) {LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKwhile (result != null) {LiNeBrEaKcurrentRow = result.getRow(store);LiNeBrEaK"
		}, {
			"start_line": 1188,
			"end_line": 1194,
			"code_lines": "}LiNeBrEaKreturn result;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/NodeAVL.java|",
		"loc": "152"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/NodeAVLDiskLarge.java|",
		"loc": "367",
		"clones": [{
			"start_line": 114,
			"end_line": 120,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 130,
			"end_line": 136,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 145,
			"end_line": 151,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 154,
			"end_line": 160,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 170,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (node.iParent == NO_POS) {LiNeBrEaK"
		}, {
			"start_line": 203,
			"end_line": 210,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaK"
		}, {
			"start_line": 218,
			"end_line": 228,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaK"
		}, {
			"start_line": 238,
			"end_line": 248,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaK"
		}, {
			"start_line": 270,
			"end_line": 276,
			"code_lines": "NodeAVLDiskLarge node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDiskLarge) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 348,
			"end_line": 356,
			"code_lines": "public void updateAccessCount(int count) {}LiNeBrEaKpublic int getAccessCount() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic void setStorageSize(int size) {}LiNeBrEaKpublic int getStorageSize() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 357,
			"end_line": 363,
			"code_lines": "public boolean hasChanged() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean isKeepInMemory() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/NodeAVLDisk.java|",
		"loc": "341",
		"clones": [{
			"start_line": 0,
			"end_line": 11,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.index;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport org.hsqldb.RowAVL;LiNeBrEaKimport org.hsqldb.RowAVLDisk;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.LongLookup;LiNeBrEaKimport org.hsqldb.persist.PersistentStore;LiNeBrEaKimport org.hsqldb.rowio.RowInputInterface;LiNeBrEaKimport org.hsqldb.rowio.RowOutputInterface;LiNeBrEaK"
		}, {
			"start_line": 37,
			"end_line": 70,
			"code_lines": "row = r;LiNeBrEaKiId = id;LiNeBrEaK}LiNeBrEaKpublic void delete() {LiNeBrEaKiLeft    = NO_POS;LiNeBrEaKiRight   = NO_POS;LiNeBrEaKiParent  = NO_POS;LiNeBrEaKnLeft    = null;LiNeBrEaKnRight   = null;LiNeBrEaKnParent  = null;LiNeBrEaKiBalance = 0;LiNeBrEaKrow.setNodesChanged();LiNeBrEaK}LiNeBrEaKpublic boolean isInMemory() {LiNeBrEaKreturn row.isInMemory();LiNeBrEaK}LiNeBrEaKpublic boolean isMemory() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic long getPos() {LiNeBrEaKreturn row.getPos();LiNeBrEaK}LiNeBrEaKpublic RowAVL getRow(PersistentStore store) {LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKreturn (RowAVLDisk) store.get(this.row, false);LiNeBrEaK} else {LiNeBrEaKrow.updateAccessCount(store.getAccessCount());LiNeBrEaK}LiNeBrEaKreturn row;LiNeBrEaK}LiNeBrEaKpublic Object[] getData(PersistentStore store) {LiNeBrEaKreturn row.getData();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 75,
			"end_line": 91,
			"code_lines": "}LiNeBrEaKreturn ret;LiNeBrEaK}LiNeBrEaKboolean isLeft(NodeAVL n) {LiNeBrEaKif (n == null) {LiNeBrEaKreturn iLeft == NO_POS;LiNeBrEaK}LiNeBrEaKreturn iLeft == n.getPos();LiNeBrEaK}LiNeBrEaKboolean isRight(NodeAVL n) {LiNeBrEaKif (n == null) {LiNeBrEaKreturn iRight == NO_POS;LiNeBrEaK}LiNeBrEaKreturn iRight == n.getPos();LiNeBrEaK}LiNeBrEaKNodeAVL getLeft(PersistentStore store) {LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 107,
			"code_lines": "}LiNeBrEaKif (node.iLeft == NO_POS) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (node.nLeft == null || !node.nLeft.isInMemory()) {LiNeBrEaKnode.nLeft         = findNode(store, node.iLeft);LiNeBrEaKnode.nLeft.nParent = node;LiNeBrEaK}LiNeBrEaKreturn node.nLeft;LiNeBrEaK}LiNeBrEaKNodeAVL getRight(PersistentStore store) {LiNeBrEaK"
		}, {
			"start_line": 107,
			"end_line": 113,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 112,
			"end_line": 123,
			"code_lines": "}LiNeBrEaKif (node.iRight == NO_POS) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (node.nRight == null || !node.nRight.isInMemory()) {LiNeBrEaKnode.nRight         = findNode(store, node.iRight);LiNeBrEaKnode.nRight.nParent = node;LiNeBrEaK}LiNeBrEaKreturn node.nRight;LiNeBrEaK}LiNeBrEaKNodeAVL getParent(PersistentStore store) {LiNeBrEaK"
		}, {
			"start_line": 123,
			"end_line": 129,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 128,
			"end_line": 138,
			"code_lines": "}LiNeBrEaKif (node.iParent == NO_POS) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (node.nParent == null || !node.nParent.isInMemory()) {LiNeBrEaKnode.nParent = findNode(store, iParent);LiNeBrEaK}LiNeBrEaKreturn node.nParent;LiNeBrEaK}LiNeBrEaKpublic int getBalance(PersistentStore store) {LiNeBrEaK"
		}, {
			"start_line": 138,
			"end_line": 144,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 147,
			"end_line": 153,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 156,
			"end_line": 163,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, false);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (node.iParent == NO_POS) {LiNeBrEaK"
		}, {
			"start_line": 161,
			"end_line": 168,
			"code_lines": "}LiNeBrEaKif (node.iParent == NO_POS) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (node.nParent == null || !node.nParent.isInMemory()) {LiNeBrEaKnode.nParent = findNode(store, iParent);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 169,
			"end_line": 175,
			"code_lines": "}LiNeBrEaKpublic NodeAVL child(PersistentStore store, boolean isleft) {LiNeBrEaKreturn isleft ? getLeft(store)LiNeBrEaK: getRight(store);LiNeBrEaK}LiNeBrEaKNodeAVL setParent(PersistentStore store, NodeAVL n) {LiNeBrEaK"
		}, {
			"start_line": 180,
			"end_line": 187,
			"code_lines": "}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKrow.keepInMemory(false);LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaKnode.iParent = n == null ? NO_POSLiNeBrEaK"
		}, {
			"start_line": 193,
			"end_line": 200,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaK"
		}, {
			"start_line": 198,
			"end_line": 208,
			"code_lines": "}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaKnode.iBalance = b;LiNeBrEaKrow.keepInMemory(false);LiNeBrEaKreturn node;LiNeBrEaK}LiNeBrEaKNodeAVL setLeft(PersistentStore store, NodeAVL n) {LiNeBrEaK"
		}, {
			"start_line": 208,
			"end_line": 219,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaKnode.iLeft = n == null ? NO_POSLiNeBrEaK"
		}, {
			"start_line": 225,
			"end_line": 236,
			"code_lines": "NodeAVLDisk node = this;LiNeBrEaKRowAVLDisk  row  = this.row;LiNeBrEaKif (!row.keepInMemory(true)) {LiNeBrEaKrow  = (RowAVLDisk) store.get(this.row, true);LiNeBrEaKnode = (NodeAVLDisk) row.getNode(iId);LiNeBrEaK}LiNeBrEaKif (!row.isInMemory()) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NodeAVLDisk');LiNeBrEaK}LiNeBrEaKrow.setNodesChanged();LiNeBrEaKnode.iRight = n == null ? NO_POSLiNeBrEaK"
		}, {
			"start_line": 238,
			"end_line": 254,
			"code_lines": "row.keepInMemory(false);LiNeBrEaKreturn node;LiNeBrEaK}LiNeBrEaKpublic NodeAVL set(PersistentStore store, boolean isLeft, NodeAVL n) {LiNeBrEaKNodeAVL x;LiNeBrEaKif (isLeft) {LiNeBrEaKx = setLeft(store, n);LiNeBrEaK} else {LiNeBrEaKx = setRight(store, n);LiNeBrEaK}LiNeBrEaKif (n != null) {LiNeBrEaKn.setParent(store, this);LiNeBrEaK}LiNeBrEaKreturn x;LiNeBrEaK}LiNeBrEaKpublic void replace(PersistentStore store, Index index, NodeAVL n) {LiNeBrEaK"
		}, {
			"start_line": 272,
			"end_line": 282,
			"code_lines": "}LiNeBrEaKpublic void setInMemory(boolean in) {LiNeBrEaKif (!in) {LiNeBrEaKif (nLeft != null) {LiNeBrEaKnLeft.nParent = null;LiNeBrEaK}LiNeBrEaKif (nRight != null) {LiNeBrEaKnRight.nParent = null;LiNeBrEaK}LiNeBrEaKif (nParent != null) {LiNeBrEaK"
		}, {
			"start_line": 283,
			"end_line": 292,
			"code_lines": "nParent.nLeft = null;LiNeBrEaK} else {LiNeBrEaKnParent.nRight = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKnLeft = nRight = nParent = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void write(RowOutputInterface out) {LiNeBrEaK"
		}, {
			"start_line": 313,
			"end_line": 328,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKreturn newPointer;LiNeBrEaK}LiNeBrEaKpublic void restore() {}LiNeBrEaKpublic void destroy() {}LiNeBrEaKpublic void updateAccessCount(int count) {}LiNeBrEaKpublic int getAccessCount() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic void setStorageSize(int size) {}LiNeBrEaKpublic int getStorageSize() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic void setPos(long pos) {}LiNeBrEaK"
		}, {
			"start_line": 326,
			"end_line": 341,
			"code_lines": "}LiNeBrEaKpublic void setPos(long pos) {}LiNeBrEaKpublic boolean isNew() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean hasChanged() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean isKeepInMemory() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean keepInMemory(boolean keep) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/Index.java|",
		"loc": "75"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/index/IndexAVLMemory.java|",
		"loc": "331",
		"clones": [{
			"start_line": 22,
			"end_line": 31,
			"code_lines": "}LiNeBrEaKpublic void checkIndex(PersistentStore store) {LiNeBrEaKreadLock.lock();LiNeBrEaKtry {LiNeBrEaKNodeAVL p = getAccessor(store);LiNeBrEaKNodeAVL f = null;LiNeBrEaKwhile (p != null) {LiNeBrEaKf = p;LiNeBrEaKcheckNodes(store, p);LiNeBrEaK"
		}, {
			"start_line": 32,
			"end_line": 43,
			"code_lines": "}LiNeBrEaKp = f;LiNeBrEaKwhile (f != null) {LiNeBrEaKcheckNodes(store, f);LiNeBrEaKf = next(store, f);LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid checkNodes(PersistentStore store, NodeAVL p) {LiNeBrEaK"
		}, {
			"start_line": 45,
			"end_line": 58,
			"code_lines": "if (l != null && l.getBalance(store) == -2) {LiNeBrEaKSystem.out.print('broken index - deleted');LiNeBrEaK}LiNeBrEaKif (r != null && r.getBalance(store) == -2) {LiNeBrEaKSystem.out.print('broken index -deleted');LiNeBrEaK}LiNeBrEaKif (l != null && !p.equals(l.getParent(store))) {LiNeBrEaKSystem.out.print('broken index - no parent');LiNeBrEaK}LiNeBrEaKif (r != null && !p.equals(r.getParent(store))) {LiNeBrEaKSystem.out.print('broken index - no parent');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 67,
			"end_line": 75,
			"code_lines": "try {LiNeBrEaKn = getAccessor(store);LiNeBrEaKx = n;LiNeBrEaKif (n == null) {LiNeBrEaKstore.setAccessor(this, ((RowAVL) row).getNode(position));LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKwhile (true) {LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 102,
			"code_lines": "if (compare == 0 && session != null && !compareRowIdLiNeBrEaK&& session.database.txManager.isMVRows()) {LiNeBrEaKif (!isEqualReadable(session, store, n)) {LiNeBrEaKcompareRowId = true;LiNeBrEaKcompare = compareRowForInsertOrDelete(session, row,LiNeBrEaKcurrentRow,LiNeBrEaKcompareRowId,LiNeBrEaKcolIndex.length);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (compare == 0) {LiNeBrEaK"
		}, {
			"start_line": 115,
			"end_line": 121,
			"code_lines": "if (n == null) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKx = x.set(store, isleft, ((RowAVL) row).getNode(position));LiNeBrEaKbalance(store, x, isleft);LiNeBrEaK"
		}, {
			"start_line": 123,
			"end_line": 131,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKvoid delete(PersistentStore store, NodeAVL x) {LiNeBrEaKif (x == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKNodeAVL n;LiNeBrEaKwriteLock.lock();LiNeBrEaK"
		}, {
			"start_line": 262,
			"end_line": 268,
			"code_lines": "return x;LiNeBrEaK}LiNeBrEaKNodeAVL last(PersistentStore store, NodeAVL x) {LiNeBrEaKif (x == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowAVL.java|",
		"loc": "73",
		"clones": [{
			"start_line": 65,
			"end_line": 71,
			"code_lines": "NodeAVL n = nPrimaryNode;LiNeBrEaKwhile (n != null) {LiNeBrEaKNodeAVL last = n;LiNeBrEaKn          = n.nNext;LiNeBrEaKlast.nNext = null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ThreadFactory.java|",
		"loc": "5"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlList.java|",
		"loc": "12"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ReaderInputStream.java|",
		"loc": "28"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/FileArchiver.java|",
		"loc": "143",
		"clones": [{
			"start_line": 104,
			"end_line": 111,
			"code_lines": "break;LiNeBrEaKcase COMPRESSION_NONE :LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow new RuntimeException('FileArchiver: 'LiNeBrEaK+ compressionType);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 118,
			"end_line": 124,
			"code_lines": "}LiNeBrEaKcompleted = true;LiNeBrEaK} catch (Throwable e) {LiNeBrEaKthrow JavaSystem.toIOException(e);LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 133,
			"end_line": 142,
			"code_lines": "}LiNeBrEaKif (!completed && storage.isStreamElement(outfilename)) {LiNeBrEaKstorage.removeElement(outfilename);LiNeBrEaK}LiNeBrEaK} catch (Throwable e) {LiNeBrEaKthrow JavaSystem.toIOException(e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/OrderedIntHashSet.java|",
		"loc": "83"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/SimpleLog.java|",
		"loc": "146",
		"clones": [{
			"start_line": 86,
			"end_line": 96,
			"code_lines": "if (level < atLevel) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (writer == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKsb.append(HsqlDateTime.getSystemTimeString()).append(' ');LiNeBrEaKif (!isSQL) {LiNeBrEaKsb.append(logTypeNames[atLevel]).append(' ');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 105,
			"end_line": 115,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKif (writer == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKsb.append(HsqlDateTime.getSystemTimeString()).append(' ');LiNeBrEaKif (!isSQL) {LiNeBrEaKsb.append(logTypeNames[atLevel]).append(' ');LiNeBrEaK}LiNeBrEaKsb.append(message);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HashSet.java|",
		"loc": "111"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/Iterator.java|",
		"loc": "11"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntKeyHashMapConcurrent.java|",
		"loc": "148",
		"clones": [{
			"start_line": 28,
			"end_line": 34,
			"code_lines": "}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 70,
			"end_line": 76,
			"code_lines": "for (; i < array.length; i++) {LiNeBrEaKif (!super.containsKey(array[i])) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn i;LiNeBrEaK"
		}, {
			"start_line": 124,
			"end_line": 131,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn IntKeyHashMapConcurrent.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 129,
			"end_line": 147,
			"code_lines": "throw new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKIntKeyHashMapConcurrent.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/InputStreamInterface.java|",
		"loc": "13"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/BaseList.java|",
		"loc": "112",
		"clones": [{
			"start_line": 105,
			"end_line": 111,
			"code_lines": "throw new NoSuchElementException();LiNeBrEaK}LiNeBrEaKpublic void setValue(Object value) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ArrayListIdentity.java|",
		"loc": "12"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HashMap.java|",
		"loc": "131",
		"clones": [{
			"start_line": 50,
			"end_line": 56,
			"code_lines": "int      i  = 0;LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKarray[i] = it.next();LiNeBrEaKi++;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 70,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 93,
			"code_lines": "}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaK"
		}, {
			"start_line": 110,
			"end_line": 130,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/FrameworkLogger.java|",
		"loc": "302",
		"clones": [{
			"start_line": 216,
			"end_line": 223,
			"code_lines": "});LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow new RuntimeException(LiNeBrEaK'Logging failed when attempting to log: ' + message, e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LineGroupReader.java|",
		"loc": "121",
		"clones": [{
			"start_line": 91,
			"end_line": 97,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongKeyIntValueHashMap.java|",
		"loc": "122",
		"clones": [{
			"start_line": 53,
			"end_line": 68,
			"code_lines": "}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 72,
			"end_line": 92,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 105,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn LongKeyIntValueHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 101,
			"end_line": 121,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKLongKeyIntValueHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntKeyLongValueHashMap.java|",
		"loc": "46"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/StringConverter.java|",
		"loc": "436",
		"clones": [{
			"start_line": 64,
			"end_line": 70,
			"code_lines": "for (int j = 0; j < l; j++) {LiNeBrEaKchar c = s.charAt(j);LiNeBrEaKif (c == ' ') {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKn = getNibble(c);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/InputStreamWrapper.java|",
		"loc": "65",
		"clones": [{
			"start_line": 39,
			"end_line": 46,
			"code_lines": "if (limitSize == -1) {LiNeBrEaKreturn -1;LiNeBrEaK} else {LiNeBrEaKthrow new IOException('stream not reached the end'LiNeBrEaK+ fetchedSize + ' ' + limitSize);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ClosableCharArrayWriter.java|",
		"loc": "147",
		"clones": [{
			"start_line": 51,
			"end_line": 59,
			"code_lines": "throw new IndexOutOfBoundsException();LiNeBrEaK} else if (len == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKint newcount = count + len;LiNeBrEaKif (newcount > buf.length) {LiNeBrEaKbuf = copyOf(buf, Math.max(buf.length << 1, newcount));LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/java/JavaSystem.java|",
		"loc": "50"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/RefCapableRBInterface.java|",
		"loc": "19"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlArrayList.java|",
		"loc": "210",
		"clones": [{
			"start_line": 89,
			"end_line": 98,
			"code_lines": "if (index >= elementCount) {LiNeBrEaKthrow new IndexOutOfBoundsException('Index out of bounds: 'LiNeBrEaK+ index + ' >= 'LiNeBrEaK+ elementCount);LiNeBrEaK}LiNeBrEaKif (index < 0) {LiNeBrEaKthrow new IndexOutOfBoundsException('Index out of bounds: 'LiNeBrEaK+ index + ' < 0');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 110,
			"end_line": 119,
			"code_lines": "if (index >= elementCount) {LiNeBrEaKthrow new IndexOutOfBoundsException('Index out of bounds: 'LiNeBrEaK+ index + ' >= 'LiNeBrEaK+ elementCount);LiNeBrEaK}LiNeBrEaKif (index < 0) {LiNeBrEaKthrow new IndexOutOfBoundsException('Index out of bounds: 'LiNeBrEaK+ index + ' < 0');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/DataOutputStream.java|",
		"loc": "118",
		"clones": [{
			"start_line": 51,
			"end_line": 57,
			"code_lines": "int count = 0;LiNeBrEaKtempBuffer[count++] = (byte) (v >>> 8);LiNeBrEaKtempBuffer[count++] = (byte) v;LiNeBrEaKwrite(tempBuffer, 0, count);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/OrderedLongHashSet.java|",
		"loc": "83",
		"clones": [{
			"start_line": 27,
			"end_line": 34,
			"code_lines": "super.clear();LiNeBrEaKfor (int i = 0; i < array.length; i++) {LiNeBrEaKadd(array[i]);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 42,
			"end_line": 50,
			"code_lines": "int i = 0;LiNeBrEaKfor (; i < array.length; i++) {LiNeBrEaKif (!super.containsKey(array[i])) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 51,
			"end_line": 63,
			"code_lines": "int i = 0;LiNeBrEaKfor (; i < array.length; i++) {LiNeBrEaKif (i >= size() || get(i) != array[i]) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection col) {LiNeBrEaKint      oldSize = size();LiNeBrEaKIterator it      = col.iterator();LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaK"
		}, {
			"start_line": 73,
			"end_line": 83,
			"code_lines": "array[i] = value;LiNeBrEaK}LiNeBrEaKreturn array;LiNeBrEaK}LiNeBrEaKprivate void checkRange(int i) {LiNeBrEaKif (i < 0 || i >= size()) {LiNeBrEaKthrow new IndexOutOfBoundsException();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongKeyHashMap.java|",
		"loc": "173",
		"clones": [{
			"start_line": 25,
			"end_line": 34,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn objectValueTable[lookup];LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 37,
			"end_line": 43,
			"code_lines": "return super.addOrRemove(key, 0, null, value, false);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic boolean containsValue(Object value) {LiNeBrEaK"
		}, {
			"start_line": 87,
			"end_line": 93,
			"code_lines": "} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic int getOrderedMatchCount(int[] array) {LiNeBrEaKint i = 0;LiNeBrEaK"
		}, {
			"start_line": 104,
			"end_line": 119,
			"code_lines": "}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 123,
			"end_line": 143,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 149,
			"end_line": 156,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn LongKeyHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 152,
			"end_line": 172,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKLongKeyHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlThreadFactory.java|",
		"loc": "25"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/DoubleIntIndex.java|",
		"loc": "509",
		"clones": [{
			"start_line": 107,
			"end_line": 114,
			"code_lines": "if (count == capacity) {LiNeBrEaKif (fixedSize) {LiNeBrEaKreturn false;LiNeBrEaK} else {LiNeBrEaKdoubleCapacity();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 122,
			"end_line": 131,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKhasChanged    = true;LiNeBrEaKkeys[count]   = key;LiNeBrEaKvalues[count] = value;LiNeBrEaKcount++;LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 139,
			"code_lines": "if (count == capacity) {LiNeBrEaKif (fixedSize) {LiNeBrEaKreturn false;LiNeBrEaK} else {LiNeBrEaKdoubleCapacity();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 158,
			"end_line": 164,
			"code_lines": "if (key > Integer.MAX_VALUE || key < Integer.MIN_VALUE) {LiNeBrEaKthrow new java.lang.IllegalArgumentException();LiNeBrEaK}LiNeBrEaKif (value > Integer.MAX_VALUE || value < Integer.MIN_VALUE) {LiNeBrEaKthrow new java.lang.IllegalArgumentException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 170,
			"end_line": 179,
			"code_lines": "} else {LiNeBrEaKdoubleCapacity();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (!sorted) {LiNeBrEaKfastQuickSort();LiNeBrEaK}LiNeBrEaKtargetSearchValue = sortOnValues ? valueLiNeBrEaK: key;LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 190,
			"code_lines": "}LiNeBrEaKhasChanged = true;LiNeBrEaKif (count != i) {LiNeBrEaKmoveRows(i, i + 1, count - i);LiNeBrEaK}LiNeBrEaKkeys[i]   = key;LiNeBrEaKvalues[i] = value;LiNeBrEaKcount++;LiNeBrEaK"
		}, {
			"start_line": 224,
			"end_line": 230,
			"code_lines": "if (sortOnValues) {LiNeBrEaKsorted       = false;LiNeBrEaKsortOnValues = false;LiNeBrEaK}LiNeBrEaKint i = findFirstEqualKeyIndex(key);LiNeBrEaKif (i == -1) {LiNeBrEaK"
		}, {
			"start_line": 317,
			"end_line": 324,
			"code_lines": "int low     = 0;LiNeBrEaKint high    = count;LiNeBrEaKint mid     = 0;LiNeBrEaKint compare = 0;LiNeBrEaKwhile (low < high) {LiNeBrEaKmid     = (low + high) / 2;LiNeBrEaKcompare = compare(mid);LiNeBrEaK"
		}, {
			"start_line": 321,
			"end_line": 329,
			"code_lines": "while (low < high) {LiNeBrEaKmid     = (low + high) / 2;LiNeBrEaKcompare = compare(mid);LiNeBrEaKif (compare < 0) {LiNeBrEaKhigh = mid;LiNeBrEaK} else if (compare > 0) {LiNeBrEaKlow = mid + 1;LiNeBrEaK} else {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ReadWriteLockDummy.java|",
		"loc": "29"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlDeque.java|",
		"loc": "205",
		"clones": [{
			"start_line": 133,
			"end_line": 139,
			"code_lines": "return i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKpublic Object remove(int index) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ObjectComparator.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/AppendableException.java|",
		"loc": "43"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/Storage.java|",
		"loc": "18"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ArrayUtil.java|",
		"loc": "970",
		"clones": [{
			"start_line": 41,
			"end_line": 47,
			"code_lines": "byte[] array = (byte[]) data;LiNeBrEaKwhile (--to >= from) {LiNeBrEaKarray[to] = 0;LiNeBrEaK}LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 130,
			"end_line": 136,
			"code_lines": "array[i + 1] = array[i];LiNeBrEaKarray[i]     = temp;LiNeBrEaKswapped      = true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} while (swapped);LiNeBrEaK"
		}, {
			"start_line": 157,
			"end_line": 164,
			"code_lines": "for (int i = 0; i < array.length; i++) {LiNeBrEaKif (array[i] == value) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 172,
			"code_lines": "if (array[i] == value) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 248,
			"end_line": 254,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 286,
			"end_line": 295,
			"code_lines": "for (int j = 0; j < arrb.length; j++) {LiNeBrEaKif (arra[i] == arrb[j]) {LiNeBrEaKk++;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn k;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 311,
			"end_line": 325,
			"code_lines": "int k     = 0;LiNeBrEaKint limit = arra.length - start;LiNeBrEaKif (limit > arrb.length) {LiNeBrEaKlimit = arrb.length;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < limit; i++) {LiNeBrEaKif (arra[i + start] == arrb[i]) {LiNeBrEaKk++;LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn k;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 380,
			"end_line": 386,
			"code_lines": "return k;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 423,
			"end_line": 430,
			"code_lines": "k++;LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn k;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 446,
			"end_line": 453,
			"code_lines": "boolean[] arrb) {LiNeBrEaKfor (int i = 0; i < arra.length; i++) {LiNeBrEaKif (arrb[arra[i]]) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 449,
			"end_line": 455,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 522,
			"end_line": 528,
			"code_lines": "byte[] arrb) {LiNeBrEaKint k = 0;LiNeBrEaKmainloop:LiNeBrEaKfor (int i = start; i < arra.length; i++) {LiNeBrEaKfor (int j = 0; j < arrb.length; j++) {LiNeBrEaKif (arra[i] == arrb[j]) {LiNeBrEaK"
		}, {
			"start_line": 669,
			"end_line": 675,
			"code_lines": "if (oldsize < newsize) {LiNeBrEaKnewsize = oldsize;LiNeBrEaK}LiNeBrEaKSystem.arraycopy(source, 0, newarray, 0, newsize);LiNeBrEaKreturn newarray;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 854,
			"end_line": 860,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 865,
			"end_line": 872,
			"code_lines": "continue mainLoop;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 883,
			"end_line": 890,
			"code_lines": "continue mainLoop;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongKeyLongValueHashMap.java|",
		"loc": "119",
		"clones": [{
			"start_line": 20,
			"end_line": 26,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn longValueTable[lookup];LiNeBrEaK}LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 27,
			"end_line": 33,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn longValueTable[lookup];LiNeBrEaK}LiNeBrEaKreturn defaultValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 34,
			"end_line": 41,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKvalue[0] = longValueTable[lookup];LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 42,
			"end_line": 65,
			"code_lines": "int oldSize = size();LiNeBrEaKsuper.addOrRemove(key, value, null, null, false);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic boolean remove(long key) {LiNeBrEaKint oldSize = size();LiNeBrEaKsuper.addOrRemove(key, 0, null, null, true);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 69,
			"end_line": 89,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 102,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn LongKeyLongValueHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 118,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKLongKeyLongValueHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongLookup.java|",
		"loc": "10"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntKeyIntValueHashMap.java|",
		"loc": "115",
		"clones": [{
			"start_line": 16,
			"end_line": 22,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn intValueTable[lookup];LiNeBrEaK}LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 23,
			"end_line": 29,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn intValueTable[lookup];LiNeBrEaK}LiNeBrEaKreturn defaultValue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 30,
			"end_line": 37,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKvalue[0] = intValueTable[lookup];LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 33,
			"end_line": 47,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean put(int key, int value) {LiNeBrEaKint oldSize = size();LiNeBrEaKsuper.addOrRemove(key, value, null, null, false);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic boolean remove(int key) {LiNeBrEaKint oldSize = size();LiNeBrEaKsuper.addOrRemove(key, 0, null, null, true);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 43,
			"end_line": 61,
			"code_lines": "int oldSize = size();LiNeBrEaKsuper.addOrRemove(key, 0, null, null, true);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 65,
			"end_line": 85,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 98,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn IntKeyIntValueHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 94,
			"end_line": 114,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKIntKeyIntValueHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LineReader.java|",
		"loc": "61"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/MultiValueHashMap.java|",
		"loc": "116",
		"clones": [{
			"start_line": 28,
			"end_line": 35,
			"code_lines": "}LiNeBrEaKpublic boolean containsKey(Object key) {LiNeBrEaKreturn super.containsKey(key);LiNeBrEaK}LiNeBrEaKpublic boolean containsValue(Object value) {LiNeBrEaKreturn super.containsValue(value);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 44,
			"end_line": 60,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 67,
			"end_line": 79,
			"code_lines": "}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKint oldSize = size();LiNeBrEaK"
		}, {
			"start_line": 80,
			"end_line": 86,
			"code_lines": "return size() != oldSize;LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 115,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKMultiValueHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/CharArrayWriter.java|",
		"loc": "99"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/OrderedIntKeyHashMap.java|",
		"loc": "116",
		"clones": [{
			"start_line": 39,
			"end_line": 62,
			"code_lines": "}LiNeBrEaKpublic void valuesToArray(Object[] array) {LiNeBrEaKIterator it = values().iterator();LiNeBrEaKint      i  = 0;LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKarray[i] = it.next();LiNeBrEaKi++;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 66,
			"end_line": 86,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 92,
			"end_line": 99,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn OrderedIntKeyHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 115,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKOrderedIntKeyHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ArraySort.java|",
		"loc": "116",
		"clones": [{
			"start_line": 14,
			"end_line": 23,
			"code_lines": "if (compare < 0) {LiNeBrEaKhigh = mid;LiNeBrEaK} else if (compare > 0) {LiNeBrEaKlow = mid + 1;LiNeBrEaK} else {LiNeBrEaKhigh  = mid;LiNeBrEaKfound = mid;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlHeap.java|",
		"loc": "11"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/OrderedLongKeyHashMap.java|",
		"loc": "146",
		"clones": [{
			"start_line": 29,
			"end_line": 35,
			"code_lines": "int lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn objectValueTable[lookup];LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 77,
			"end_line": 92,
			"code_lines": "}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 116,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 122,
			"end_line": 129,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn OrderedLongKeyHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 125,
			"end_line": 145,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKOrderedLongKeyHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/StringUtil.java|",
		"loc": "198",
		"clones": [{
			"start_line": 116,
			"end_line": 126,
			"code_lines": "for (int i = 0; i < len; i++) {LiNeBrEaKsb.append(quote);LiNeBrEaKsb.append(s[i]);LiNeBrEaKsb.append(quote);LiNeBrEaKif (i + 1 < len) {LiNeBrEaKsb.append(separator);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 139,
			"code_lines": "int          len = s.length;LiNeBrEaKStringBuffer sb  = new StringBuffer(len * 8);LiNeBrEaKfor (int i = 0; i < len; i++) {LiNeBrEaKsb.append(quote);LiNeBrEaKsb.append(s[i]);LiNeBrEaKsb.append(quote);LiNeBrEaKif (i + 1 < len) {LiNeBrEaKsb.append(separator);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 146,
			"end_line": 153,
			"code_lines": "sb.append(quote);LiNeBrEaKif (i + 1 < len) {LiNeBrEaKsb.append(separator);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/StringInputStream.java|",
		"loc": "32"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/BasicTextJdkLogFormatter.java|",
		"loc": "32"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/Set.java|",
		"loc": "14"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongDeque.java|",
		"loc": "200",
		"clones": [{
			"start_line": 11,
			"end_line": 18,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn elementCount;LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn elementCount == 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 40,
			"end_line": 47,
			"code_lines": "firstindex++;LiNeBrEaKelementCount--;LiNeBrEaKif (elementCount == 0) {LiNeBrEaKfirstindex = endindex = 0;LiNeBrEaK} else if (firstindex == list.length) {LiNeBrEaKfirstindex = 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 56,
			"end_line": 62,
			"code_lines": "elementCount--;LiNeBrEaKif (elementCount == 0) {LiNeBrEaKfirstindex = endindex = 0;LiNeBrEaK} else if (endindex == 0) {LiNeBrEaKendindex = list.length;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 78,
			"end_line": 86,
			"code_lines": "resetCapacity();LiNeBrEaKfirstindex--;LiNeBrEaKif (firstindex < 0) {LiNeBrEaKfirstindex = list.length - 1;LiNeBrEaKif (endindex == 0) {LiNeBrEaKendindex = list.length;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 97,
			"end_line": 104,
			"code_lines": "}LiNeBrEaKpublic void clear() {LiNeBrEaKif (elementCount == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKfirstindex = endindex = elementCount = 0;LiNeBrEaKfor (int i = 0; i < list.length; i++) {LiNeBrEaK"
		}, {
			"start_line": 111,
			"end_line": 119,
			"code_lines": "for (int i = 0; i < elementCount; i++) {LiNeBrEaKint index = firstindex + i;LiNeBrEaKif (index >= list.length) {LiNeBrEaKindex -= list.length;LiNeBrEaK}LiNeBrEaKif (list[index] == value) {LiNeBrEaKreturn i;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 134,
			"code_lines": "firstindex++;LiNeBrEaKif (firstindex == list.length) {LiNeBrEaKfirstindex = 0;LiNeBrEaK}LiNeBrEaK} else if (target > firstindex) {LiNeBrEaKSystem.arraycopy(list, firstindex, list, firstindex + 1,LiNeBrEaKtarget - firstindex);LiNeBrEaK"
		}, {
			"start_line": 135,
			"end_line": 143,
			"code_lines": "firstindex++;LiNeBrEaKif (firstindex == list.length) {LiNeBrEaKfirstindex = 0;LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKSystem.arraycopy(list, target + 1, list, target,LiNeBrEaKendindex - target - 1);LiNeBrEaKendindex--;LiNeBrEaK"
		}, {
			"start_line": 144,
			"end_line": 154,
			"code_lines": "if (endindex == 0) {LiNeBrEaKendindex = list.length;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKelementCount--;LiNeBrEaKif (elementCount == 0) {LiNeBrEaKfirstindex = endindex = 0;LiNeBrEaK}LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 155,
			"end_line": 161,
			"code_lines": "for (int i = 0; i < elementCount; i++) {LiNeBrEaKint index = firstindex + i;LiNeBrEaKif (index >= list.length) {LiNeBrEaKindex -= list.length;LiNeBrEaK}LiNeBrEaKif (list[index] == value) {LiNeBrEaK"
		}, {
			"start_line": 175,
			"end_line": 190,
			"code_lines": "}LiNeBrEaKprivate int getInternalIndex(int i) throws IndexOutOfBoundsException {LiNeBrEaKif (i < 0 || i >= elementCount) {LiNeBrEaKthrow new IndexOutOfBoundsException();LiNeBrEaK}LiNeBrEaKint index = firstindex + i;LiNeBrEaKif (index >= list.length) {LiNeBrEaKindex -= list.length;LiNeBrEaK}LiNeBrEaKreturn index;LiNeBrEaK}LiNeBrEaKprivate void resetCapacity() {LiNeBrEaKif (elementCount < list.length) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 191,
			"end_line": 199,
			"code_lines": "System.arraycopy(list, firstindex, newList, firstindex,LiNeBrEaKlist.length - firstindex);LiNeBrEaKif (endindex <= firstindex) {LiNeBrEaKSystem.arraycopy(list, 0, newList, list.length, endindex);LiNeBrEaKendindex = list.length + endindex;LiNeBrEaK}LiNeBrEaKlist = newList;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/FileUtil.java|",
		"loc": "322"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/Collection.java|",
		"loc": "13"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/RefCapablePropertyResourceBundle.java|",
		"loc": "259",
		"clones": [{
			"start_line": 110,
			"end_line": 126,
			"code_lines": "case EMPTYSTRING_BEHAVIOR:LiNeBrEaKvarValue = '';LiNeBrEaKbreak;LiNeBrEaKcase NOOP_BEHAVIOR:LiNeBrEaKbreak;LiNeBrEaKdefault:LiNeBrEaKthrow new RuntimeException(LiNeBrEaK'Undefined value for behavior: ' + behavior);LiNeBrEaK}LiNeBrEaKsb.append(s.substring(previousEnd, matcher.start())LiNeBrEaK+ ((varValue == null) ? matcher.group() : varValue));LiNeBrEaKpreviousEnd = matcher.end();LiNeBrEaK}LiNeBrEaKreturn (previousEnd < 1) ? sLiNeBrEaK: (sb.toString() + s.substring(previousEnd));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 256,
			"code_lines": "} catch (RuntimeException re) {LiNeBrEaKthrow new MissingResourceException(LiNeBrEaK'Value for key '' + key + '' too big to convert to String.  'LiNeBrEaK+ 'Please run the program with more RAM 'LiNeBrEaK+ '(try Java -Xm* switches).: ' + re,LiNeBrEaKRefCapablePropertyResourceBundle.class.getName(), key);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlByteArrayInputStream.java|",
		"loc": "163"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HashMappedList.java|",
		"loc": "131",
		"clones": [{
			"start_line": 124,
			"end_line": 131,
			"code_lines": "}LiNeBrEaKprivate void checkRange(int i) {LiNeBrEaKif (i < 0 || i >= size()) {LiNeBrEaKthrow new IndexOutOfBoundsException();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntKeyHashMap.java|",
		"loc": "108",
		"clones": [{
			"start_line": 12,
			"end_line": 27,
			"code_lines": "}LiNeBrEaKpublic Object get(int key) {LiNeBrEaKint lookup = getLookup(key);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn objectValueTable[lookup];LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic Object put(int key, Object value) {LiNeBrEaKreturn super.addOrRemove(key, value, null, false);LiNeBrEaK}LiNeBrEaKpublic boolean containsValue(Object value) {LiNeBrEaKreturn super.containsValue(value);LiNeBrEaK}LiNeBrEaKpublic Object remove(int key) {LiNeBrEaK"
		}, {
			"start_line": 28,
			"end_line": 54,
			"code_lines": "}LiNeBrEaKpublic boolean containsKey(int key) {LiNeBrEaKreturn super.containsKey(key);LiNeBrEaK}LiNeBrEaKpublic void valuesToArray(Object[] array) {LiNeBrEaKIterator it = values().iterator();LiNeBrEaKint      i  = 0;LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKarray[i] = it.next();LiNeBrEaKi++;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 58,
			"end_line": 78,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic Object get(Object key) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 84,
			"end_line": 91,
			"code_lines": "}LiNeBrEaKpublic int size() {LiNeBrEaKreturn IntKeyHashMap.this.size();LiNeBrEaK}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 87,
			"end_line": 107,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKIntKeyHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/MD5.java|",
		"loc": "43"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/CountUpDownLatch.java|",
		"loc": "41"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlTimer.java|",
		"loc": "334"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/CountdownInputStream.java|",
		"loc": "72",
		"clones": [{
			"start_line": 39,
			"end_line": 45,
			"code_lines": "if (buf == null) {LiNeBrEaKthrow new NullPointerException();LiNeBrEaK}LiNeBrEaKif (m_count <= 0) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/LongValueHashMap.java|",
		"loc": "124",
		"clones": [{
			"start_line": 26,
			"end_line": 34,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint hash   = key.hashCode();LiNeBrEaKint lookup = getLookup(key, hash);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn longValueTable[lookup];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 37,
			"end_line": 43,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint hash   = key.hashCode();LiNeBrEaKint lookup = getLookup(key, hash);LiNeBrEaKif (lookup != -1) {LiNeBrEaK"
		}, {
			"start_line": 42,
			"end_line": 48,
			"code_lines": "if (lookup != -1) {LiNeBrEaKvalue[0] = longValueTable[lookup];LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 73,
			"end_line": 80,
			"code_lines": "}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 96,
			"end_line": 106,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKint oldSize = size();LiNeBrEaK"
		}, {
			"start_line": 107,
			"end_line": 113,
			"code_lines": "return size() != oldSize;LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 117,
			"end_line": 123,
			"code_lines": "Iterator it = t.keySet().iterator();LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKObject key = it.next();LiNeBrEaKput(key, t.get(key));LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/KMPSearchAlgorithm.java|",
		"loc": "279",
		"clones": [{
			"start_line": 56,
			"end_line": 65,
			"code_lines": "return streamIndex;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKint patternIndex = 0;LiNeBrEaKif (table == null) {LiNeBrEaKtable = computeTable(pattern);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 68,
			"end_line": 79,
			"code_lines": "patternIndex++;LiNeBrEaK} else if (patternIndex > 0) {LiNeBrEaKpatternIndex = table[patternIndex];LiNeBrEaKpatternIndex++;LiNeBrEaK}LiNeBrEaKif (patternIndex == patternLength) {LiNeBrEaKreturn streamIndex - (patternLength - 1);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 122,
			"end_line": 128,
			"code_lines": "int[] table, final int start) {LiNeBrEaKif (source == null || pattern == null || pattern.length == 0) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKfinal int sourceLength  = source.length;LiNeBrEaKfinal int patternLength = pattern.length;LiNeBrEaK"
		}, {
			"start_line": 133,
			"end_line": 148,
			"code_lines": "return sourceIndex;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKint matchStart   = start;LiNeBrEaKint patternIndex = 0;LiNeBrEaKif (table == null) {LiNeBrEaKtable = computeTable(pattern);LiNeBrEaK}LiNeBrEaKwhile ((sourceIndex < sourceLength)LiNeBrEaK&& (patternIndex < patternLength)) {LiNeBrEaKif (source[sourceIndex] == pattern[patternIndex]) {LiNeBrEaKpatternIndex++;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 152,
			"end_line": 163,
			"code_lines": "}LiNeBrEaKpatternIndex++;LiNeBrEaK}LiNeBrEaKsourceIndex = (matchStart + patternIndex);LiNeBrEaK}LiNeBrEaKif (patternIndex == patternLength) {LiNeBrEaKreturn matchStart;LiNeBrEaK} else {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 175,
			"end_line": 181,
			"code_lines": "int patternIndex = 0;LiNeBrEaKif (table == null) {LiNeBrEaKtable = computeTable(pattern);LiNeBrEaK}LiNeBrEaKwhile ((sourceIndex < sourceLength)LiNeBrEaK&& (patternIndex < patternLength)) {LiNeBrEaK"
		}, {
			"start_line": 182,
			"end_line": 191,
			"code_lines": "patternIndex++;LiNeBrEaK} else {LiNeBrEaKfinal int tableValue = table[patternIndex];LiNeBrEaKmatchStart += (patternIndex - tableValue);LiNeBrEaKif (patternIndex > 0) {LiNeBrEaKpatternIndex = tableValue;LiNeBrEaK}LiNeBrEaKpatternIndex++;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 192,
			"end_line": 199,
			"code_lines": "}LiNeBrEaKif (patternIndex == patternLength) {LiNeBrEaKreturn matchStart;LiNeBrEaK} else {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 234,
			"end_line": 251,
			"code_lines": "table[0] = -1;LiNeBrEaKtable[1] = 0;LiNeBrEaKwhile (i < pattern.length) {LiNeBrEaKif (pattern[i - 1] == pattern[j]) {LiNeBrEaKtable[i] = j + 1;LiNeBrEaKj++;LiNeBrEaKi++;LiNeBrEaK} else if (j > 0) {LiNeBrEaKj = table[j];LiNeBrEaK} else {LiNeBrEaKtable[i] = 0;LiNeBrEaKi++;LiNeBrEaKj = 0;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn table;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 265,
			"end_line": 278,
			"code_lines": "table[i] = j + 1;LiNeBrEaKj++;LiNeBrEaKi++;LiNeBrEaK} else if (j > 0) {LiNeBrEaKj = table[j];LiNeBrEaK} else {LiNeBrEaKtable[i] = 0;LiNeBrEaKi++;LiNeBrEaKj = 0;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn table;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlArrayHeap.java|",
		"loc": "129",
		"clones": [{
			"start_line": 115,
			"end_line": 122,
			"code_lines": "sb.append(',');LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKsb.append(']');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/WrapperIterator.java|",
		"loc": "96",
		"clones": [{
			"start_line": 80,
			"end_line": 90,
			"code_lines": "}LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKpublic int nextInt() {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKpublic long nextLong() {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKpublic void remove() {LiNeBrEaK"
		}, {
			"start_line": 90,
			"end_line": 96,
			"code_lines": "throw new NoSuchElementException();LiNeBrEaK}LiNeBrEaKpublic void setValue(Object value) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/RCData.java|",
		"loc": "293",
		"clones": [{
			"start_line": 102,
			"end_line": 110,
			"code_lines": "} else {LiNeBrEaKtry {LiNeBrEaKbr.close();LiNeBrEaK} catch (IOException e) {LiNeBrEaK}LiNeBrEaKthrow new Exception('Bad line ' + linenum + ' in '' + fileLiNeBrEaK+ '':  ' + s);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ClosableByteArrayOutputStream.java|",
		"loc": "136",
		"clones": [{
			"start_line": 36,
			"end_line": 44,
			"code_lines": "throw new IndexOutOfBoundsException();LiNeBrEaK} else if (len == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKint newcount = count + len;LiNeBrEaKif (newcount > buf.length) {LiNeBrEaKbuf = copyOf(buf, Math.max(buf.length << 1, newcount));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 53,
			"end_line": 68,
			"code_lines": "}LiNeBrEaKpublic synchronized int capacity() throws IOException {LiNeBrEaKcheckFreed();LiNeBrEaKreturn buf.length;LiNeBrEaK}LiNeBrEaKpublic synchronized void reset() throws IOException {LiNeBrEaKcheckClosed();LiNeBrEaKcount = 0;LiNeBrEaK}LiNeBrEaKpublic synchronized void trimToSize() throws IOException {LiNeBrEaKcheckFreed();LiNeBrEaKif (buf.length > count) {LiNeBrEaKbuf = copyOf(buf, count);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 69,
			"end_line": 83,
			"code_lines": "checkFreed();LiNeBrEaKreturn copyOf(buf, count);LiNeBrEaK}LiNeBrEaKpublic synchronized int size() throws IOException {LiNeBrEaKreturn count;LiNeBrEaK}LiNeBrEaKpublic synchronized void setSize(int newSize) {LiNeBrEaKif (newSize < 0) {LiNeBrEaKthrow new ArrayIndexOutOfBoundsException(newSize);LiNeBrEaK} else if (newSize > buf.length) {LiNeBrEaKbuf = copyOf(buf, Math.max(buf.length << 1, newSize));LiNeBrEaK}LiNeBrEaKcount = newSize;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 90,
			"end_line": 99,
			"code_lines": "}LiNeBrEaKpublic synchronized String toString() {LiNeBrEaKtry {LiNeBrEaKcheckFreed();LiNeBrEaK} catch (IOException ex) {LiNeBrEaKthrow new RuntimeException(ex.toString());LiNeBrEaK}LiNeBrEaKreturn new String(buf, 0, count);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 103,
			"end_line": 129,
			"code_lines": "}LiNeBrEaKpublic synchronized void close() throws IOException {LiNeBrEaKclosed = true;LiNeBrEaK}LiNeBrEaKpublic synchronized boolean isClosed() {LiNeBrEaKreturn closed;LiNeBrEaK}LiNeBrEaKpublic synchronized void free() throws IOException {LiNeBrEaKclosed = true;LiNeBrEaKfreed  = true;LiNeBrEaKbuf    = null;LiNeBrEaKcount  = 0;LiNeBrEaK}LiNeBrEaKpublic synchronized boolean isFreed() {LiNeBrEaKreturn freed;LiNeBrEaK}LiNeBrEaKprotected synchronized void checkClosed() throws IOException {LiNeBrEaKif (closed) {LiNeBrEaKthrow new IOException('stream is closed.');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprotected synchronized void checkFreed() throws IOException {LiNeBrEaKif (freed) {LiNeBrEaKthrow new IOException('stream buffer is freed.');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/InOutUtil.java|",
		"loc": "120"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntValueHashMap.java|",
		"loc": "160",
		"clones": [{
			"start_line": 16,
			"end_line": 22,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint hash   = key.hashCode();LiNeBrEaKint lookup = getLookup(key, hash);LiNeBrEaKif (lookup != -1) {LiNeBrEaK"
		}, {
			"start_line": 27,
			"end_line": 35,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint hash   = key.hashCode();LiNeBrEaKint lookup = getLookup(key, hash);LiNeBrEaKif (lookup != -1) {LiNeBrEaKreturn intValueTable[lookup];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 38,
			"end_line": 44,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint hash   = key.hashCode();LiNeBrEaKint lookup = getLookup(key, hash);LiNeBrEaKif (lookup != -1) {LiNeBrEaK"
		}, {
			"start_line": 43,
			"end_line": 49,
			"code_lines": "if (lookup != -1) {LiNeBrEaKvalue[0] = intValueTable[lookup];LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 53,
			"end_line": 59,
			"code_lines": "if (i == value) {LiNeBrEaKreturn objectKeyTable[it.getLookup()];LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 75,
			"code_lines": "if (key == null) {LiNeBrEaKthrow new NoSuchElementException();LiNeBrEaK}LiNeBrEaKint oldSize = size();LiNeBrEaKsuper.addOrRemove(0, value, key, null, false);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object key) {LiNeBrEaKint oldSize = size();LiNeBrEaKsuper.addOrRemove(0, 0, key, null, true);LiNeBrEaKreturn oldSize != size();LiNeBrEaK}LiNeBrEaKpublic boolean containsKey(Object key) {LiNeBrEaKreturn super.containsKey(key);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 77,
			"end_line": 92,
			"code_lines": "}LiNeBrEaKpublic Set keySet() {LiNeBrEaKif (keySet == null) {LiNeBrEaKkeySet = new KeySet();LiNeBrEaK}LiNeBrEaKreturn keySet;LiNeBrEaK}LiNeBrEaKpublic Collection values() {LiNeBrEaKif (values == null) {LiNeBrEaKvalues = new Values();LiNeBrEaK}LiNeBrEaKreturn values;LiNeBrEaK}LiNeBrEaKclass KeySet implements Set {LiNeBrEaKpublic Iterator iterator() {LiNeBrEaK"
		}, {
			"start_line": 106,
			"end_line": 116,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKint oldSize = size();LiNeBrEaK"
		}, {
			"start_line": 117,
			"end_line": 123,
			"code_lines": "return size() != oldSize;LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 152,
			"code_lines": "}LiNeBrEaKpublic boolean contains(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean add(Object value) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean addAll(Collection c) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean remove(Object o) {LiNeBrEaKthrow new RuntimeException();LiNeBrEaK}LiNeBrEaKpublic boolean isEmpty() {LiNeBrEaKreturn size() == 0;LiNeBrEaK}LiNeBrEaKpublic void clear() {LiNeBrEaKIntValueHashMap.this.clear();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 153,
			"end_line": 160,
			"code_lines": "Iterator it = t.keySet().iterator();LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKObject key = it.next();LiNeBrEaKput(key, t.get(key));LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/DbBackup.java|",
		"loc": "300"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarMalformatException.java|",
		"loc": "8"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/PIFGenerator.java|",
		"loc": "86"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarFileInputStream.java|",
		"loc": "109"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/RB.java|",
		"loc": "123",
		"clones": [{
			"start_line": 73,
			"end_line": 86,
			"code_lines": "}LiNeBrEaKpublic String getString() {LiNeBrEaKreturn vrb.getString(this);LiNeBrEaK}LiNeBrEaKpublic String toString() {LiNeBrEaKreturn ValidatingResourceBundle.resourceKeyFor(this);LiNeBrEaK}LiNeBrEaKpublic String getExpandedString() {LiNeBrEaKreturn vrb.getExpandedString(this);LiNeBrEaK}LiNeBrEaKpublic String getExpandedString(String... strings) {LiNeBrEaKreturn vrb.getExpandedString(this, strings);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 123,
			"code_lines": "}LiNeBrEaKpublic String getString(String... strings) {LiNeBrEaKreturn vrb.getString(this, strings);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1) {LiNeBrEaKreturn vrb.getString(this, i1);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, int i2) {LiNeBrEaKreturn vrb.getString(this, i1, i2);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, int i2, int i3) {LiNeBrEaKreturn vrb.getString(this, i1, i2, i3);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, String s2) {LiNeBrEaKreturn vrb.getString(this, i1, s2);LiNeBrEaK}LiNeBrEaKpublic String getString(String s1, int i2) {LiNeBrEaKreturn vrb.getString(this, s1, i2);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, int i2, String s3) {LiNeBrEaKreturn vrb.getString(this, i1, i2, s3);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, String s2, int i3) {LiNeBrEaKreturn vrb.getString(this, i1, s2, i3);LiNeBrEaK}LiNeBrEaKpublic String getString(String s1, int i2, int i3) {LiNeBrEaKreturn vrb.getString(this, s1, i2, i3);LiNeBrEaK}LiNeBrEaKpublic String getString(int i1, String s2, String s3) {LiNeBrEaKreturn vrb.getString(this, i1, s3, s3);LiNeBrEaK}LiNeBrEaKpublic String getString(String s1, String s2, int i3) {LiNeBrEaKreturn vrb.getString(this, s1, s2, i3);LiNeBrEaK}LiNeBrEaKpublic String getString(String s1, int i2, String s3) {LiNeBrEaKreturn vrb.getString(this, s1, i2, s3);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/PIFData.java|",
		"loc": "58"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarHeaderField.java|",
		"loc": "25"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarFileOutputStream.java|",
		"loc": "164"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarReader.java|",
		"loc": "466",
		"clones": [{
			"start_line": 31,
			"end_line": 39,
			"code_lines": "}LiNeBrEaKString[] patternStrings = null;LiNeBrEaKif (sa.length > firstPatInd) {LiNeBrEaKpatternStrings = new String[sa.length - firstPatInd];LiNeBrEaKfor (int i = firstPatInd; i < sa.length; i++) {LiNeBrEaKpatternStrings[i - firstPatInd] = sa[i];LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 246,
			"end_line": 252,
			"code_lines": "while (readBlocks > 0) {LiNeBrEaKreadNow = (readBlocks > archive.getReadBufferBlocks())LiNeBrEaK? archive.getReadBufferBlocks()LiNeBrEaK: readBlocks;LiNeBrEaKarchive.readBlocks(readNow);LiNeBrEaKreadBlocks -= readNow;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/tar/TarGenerator.java|",
		"loc": "405",
		"clones": [{
			"start_line": 299,
			"end_line": 307,
			"code_lines": "throw ioe;LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKoutPipe.close();LiNeBrEaK} finally {LiNeBrEaKoutPipe = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlByteArrayOutputStream.java|",
		"loc": "242",
		"clones": [{
			"start_line": 99,
			"end_line": 106,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic void writeUTF(String str) throws IOException {LiNeBrEaKint len = str.length();LiNeBrEaKif (len > 0xffff) {LiNeBrEaKthrow new UTFDataFormatException();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 152,
			"end_line": 158,
			"code_lines": "if (read == -1) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKleft  -= read;LiNeBrEaKcount += read;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/StringComparator.java|",
		"loc": "17",
		"clones": [{
			"start_line": 5,
			"end_line": 14,
			"code_lines": "if (a == b) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKif (a == null) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (b == null) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/StopWatch.java|",
		"loc": "58"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/OrderedHashSet.java|",
		"loc": "111",
		"clones": [{
			"start_line": 104,
			"end_line": 111,
			"code_lines": "}LiNeBrEaKprivate void checkRange(int i) {LiNeBrEaKif (i < 0 || i >= size()) {LiNeBrEaKthrow new IndexOutOfBoundsException();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/HsqlTaskQueue.java|",
		"loc": "88",
		"clones": [{
			"start_line": 10,
			"end_line": 17,
			"code_lines": "}LiNeBrEaKprotected synchronized void clearThread() {LiNeBrEaKtry {LiNeBrEaKtaskRunnerThread.setContextClassLoader(null);LiNeBrEaK} catch (Throwable t) {}LiNeBrEaKtaskRunnerThread = null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/FileAccess.java|",
		"loc": "23"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ArrayCounter.java|",
		"loc": "59"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/ValidatingResourceBundle.java|",
		"loc": "190"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/lib/IntLookup.java|",
		"loc": "10"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Constraint.java|",
		"loc": "643",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.RangeVariable.RangeIteratorBase;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaK"
		}, {
			"start_line": 153,
			"end_line": 167,
			"code_lines": "}LiNeBrEaKpublic HsqlName getName() {LiNeBrEaKreturn name;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaK"
		}, {
			"start_line": 184,
			"end_line": 192,
			"code_lines": "return new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaK"
		}, {
			"start_line": 242,
			"end_line": 248,
			"code_lines": "}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic long getChangeTimestamp() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/OpTypes.java|",
		"loc": "93"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Trigger.java|",
		"loc": "15"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ColumnBase.java|",
		"loc": "93"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementSession.java|",
		"loc": "539",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.HsqlArrayList;LiNeBrEaK"
		}, {
			"start_line": 53,
			"end_line": 59,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StateemntSession');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 130,
			"end_line": 137,
			"code_lines": "group = StatementTypes.X_SQL_SESSION;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementSession');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 146,
			"end_line": 173,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementSession');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaKresult = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKif (isLogged) {LiNeBrEaKsession.database.logger.writeOtherStatement(session, sql);LiNeBrEaK}LiNeBrEaK} catch (Throwable e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKResult getResult(Session session) {LiNeBrEaK"
		}, {
			"start_line": 411,
			"end_line": 417,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 436,
			"end_line": 442,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 457,
			"end_line": 463,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 500,
			"end_line": 506,
			"code_lines": "}LiNeBrEaKreturn Result.updateZeroResult;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn Result.newErrorResult(e, sql);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 520,
			"end_line": 526,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementSession');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 531,
			"end_line": 539,
			"code_lines": "}LiNeBrEaKpublic boolean isCatalogLock() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean isCatalogChange() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RangeVariable.java|",
		"loc": "1428",
		"clones": [{
			"start_line": 386,
			"end_line": 394,
			"code_lines": "ColumnSchema column = table.getColumn(i);LiNeBrEaKString columnName = columnAliases == null ? column.getName().nameLiNeBrEaK: (String) columnAliasesLiNeBrEaK.get(i);LiNeBrEaKif (exclude != null && exclude.contains(columnName)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKExpression e = new ExpressionColumn(this, i);LiNeBrEaK"
		}, {
			"start_line": 838,
			"end_line": 845,
			"code_lines": "}LiNeBrEaKpublic void removeCurrent() {}LiNeBrEaKpublic void reset() {LiNeBrEaKif (it != null) {LiNeBrEaKit.release();LiNeBrEaK}LiNeBrEaKit            = null;LiNeBrEaK"
		}, {
			"start_line": 931,
			"end_line": 938,
			"code_lines": "value = null;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKit = conditions[condIndex].rangeIndexLiNeBrEaK.emptyIterator();LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1031,
			"end_line": 1038,
			"code_lines": "boolean result = false;LiNeBrEaKwhile (true) {LiNeBrEaKcurrentRow = it.getNextRow();LiNeBrEaKif (currentRow == null) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcurrentData = currentRow.getData();LiNeBrEaK"
		}, {
			"start_line": 1232,
			"end_line": 1238,
			"code_lines": "}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1249,
			"end_line": 1255,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1272,
			"end_line": 1279,
			"code_lines": "indexedColumnCount++;LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Token.java|",
		"loc": "198"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionValue.java|",
		"loc": "53",
		"clones": [{
			"start_line": 17,
			"end_line": 23,
			"code_lines": "switch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKif (valueData == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKreturn dataType.convertToSQLString(valueData);LiNeBrEaK"
		}, {
			"start_line": 26,
			"end_line": 39,
			"code_lines": "}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKsb.append('VALUE = ').append(LiNeBrEaKdataType.convertToSQLString(valueData));LiNeBrEaKsb.append(', TYPE = ').append(dataType.getNameString());LiNeBrEaKreturn sb.toString();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/Log.java|",
		"loc": "552",
		"clones": [{
			"start_line": 363,
			"end_line": 369,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.FILE_IO_ERROR, logFileName);LiNeBrEaK}LiNeBrEaKif (maxLogSize > 0 && dbLogWriter.size() > maxLogSize) {LiNeBrEaKdatabase.logger.setCheckpointRequired();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 373,
			"end_line": 380,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.FILE_IO_ERROR, logFileName);LiNeBrEaK}LiNeBrEaKif (maxLogSize > 0 && dbLogWriter.size() > maxLogSize) {LiNeBrEaKdatabase.logger.setCheckpointRequired();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 383,
			"end_line": 391,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.FILE_IO_ERROR, logFileName);LiNeBrEaK}LiNeBrEaKif (maxLogSize > 0 && dbLogWriter.size() > maxLogSize) {LiNeBrEaKdatabase.logger.setCheckpointRequired();LiNeBrEaK}LiNeBrEaKsetModified();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 394,
			"end_line": 402,
			"code_lines": "} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.FILE_IO_ERROR, logFileName);LiNeBrEaK}LiNeBrEaKif (maxLogSize > 0 && dbLogWriter.size() > maxLogSize) {LiNeBrEaKdatabase.logger.setCheckpointRequired();LiNeBrEaK}LiNeBrEaKsetModified();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataSpaceManagerBlocks.java|",
		"loc": "611",
		"clones": [{
			"start_line": 427,
			"end_line": 433,
			"code_lines": "ba.initialise(false);LiNeBrEaKfor (;;) {LiNeBrEaKboolean result = ba.nextBlock();LiNeBrEaKif (!result) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVLHybrid.java|",
		"loc": "264",
		"clones": [{
			"start_line": 69,
			"end_line": 77,
			"code_lines": "} else {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'RowStoreAVLHybrid');LiNeBrEaK}LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVLDisk.java|",
		"loc": "293",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.persist;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport org.hsqldb.HsqlException;LiNeBrEaKimport org.hsqldb.Row;LiNeBrEaKimport org.hsqldb.RowAVL;LiNeBrEaKimport org.hsqldb.RowAVLDisk;LiNeBrEaK"
		}, {
			"start_line": 102,
			"end_line": 112,
			"code_lines": "}LiNeBrEaKadd(session, row, tx);LiNeBrEaKreturn row;LiNeBrEaK}LiNeBrEaKpublic void indexRow(Session session, Row row) {LiNeBrEaKtry {LiNeBrEaKrow = (Row) get(row, true);LiNeBrEaKsuper.indexRow(session, row);LiNeBrEaKrow.keepInMemory(false);LiNeBrEaK} catch (HsqlException e) {LiNeBrEaK"
		}, {
			"start_line": 150,
			"end_line": 158,
			"code_lines": "remove(row);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaK"
		}, {
			"start_line": 181,
			"end_line": 189,
			"code_lines": "}LiNeBrEaKpublic DataFileCache getCache() {LiNeBrEaKreturn cache;LiNeBrEaK}LiNeBrEaKpublic void setCache(DataFileCache cache) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'RowStoreAVLDisk');LiNeBrEaK}LiNeBrEaKpublic void release() {LiNeBrEaK"
		}, {
			"start_line": 193,
			"end_line": 204,
			"code_lines": "}LiNeBrEaKpublic CachedObject getAccessor(Index key) {LiNeBrEaKNodeAVL node = (NodeAVL) accessorList[key.getPosition()];LiNeBrEaKif (node == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKRowAVL row = (RowAVL) get(node.getRow(this), false);LiNeBrEaKnode                            = row.getNode(key.getPosition());LiNeBrEaKaccessorList[key.getPosition()] = node;LiNeBrEaKreturn node;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TableSpaceManagerSimple.java|",
		"loc": "48"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/PersistentStoreCollection.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVL.java|",
		"loc": "428"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVLMemory.java|",
		"loc": "115",
		"clones": [{
			"start_line": 5,
			"end_line": 11,
			"code_lines": "import org.hsqldb.RowAction;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.Table;LiNeBrEaKimport org.hsqldb.TransactionManager;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 17,
			"end_line": 23,
			"code_lines": "this.database     = table.database;LiNeBrEaKthis.manager      = manager;LiNeBrEaKthis.table        = table;LiNeBrEaKthis.indexList    = table.getIndexList();LiNeBrEaKthis.accessorList = new CachedObject[indexList.length];LiNeBrEaKmanager.setStore(table, this);LiNeBrEaK"
		}, {
			"start_line": 66,
			"end_line": 74,
			"code_lines": "public void commitPersistence(CachedObject row) {}LiNeBrEaKpublic void commitRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKObject[] data = row.getData();LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaKdatabase.logger.writeDeleteStatement(session, (Table) table,LiNeBrEaKdata);LiNeBrEaK"
		}, {
			"start_line": 74,
			"end_line": 80,
			"code_lines": "break;LiNeBrEaKcase RowAction.ACTION_INSERT :LiNeBrEaKdatabase.logger.writeInsertStatement(session, row,LiNeBrEaK(Table) table);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT_DELETE :LiNeBrEaK"
		}, {
			"start_line": 83,
			"end_line": 91,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaKif (txModel == TransactionManager.LOCKS) {LiNeBrEaK"
		}, {
			"start_line": 94,
			"end_line": 105,
			"code_lines": "break;LiNeBrEaKcase RowAction.ACTION_INSERT :LiNeBrEaKdelete(session, row);LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT_DELETE :LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic DataFileCache getCache() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RandomAccessInterface.java|",
		"loc": "20",
		"clones": [{
			"start_line": 4,
			"end_line": 16,
			"code_lines": "long length() throws IOException;LiNeBrEaKvoid seek(long position) throws IOException;LiNeBrEaKlong getFilePointer() throws IOException;LiNeBrEaKint read() throws IOException;LiNeBrEaKvoid read(byte[] b, int offset, int length) throws IOException;LiNeBrEaKvoid write(byte[] b, int offset, int length) throws IOException;LiNeBrEaKint readInt() throws IOException;LiNeBrEaKvoid writeInt(int i) throws IOException;LiNeBrEaKlong readLong() throws IOException;LiNeBrEaKvoid writeLong(long i) throws IOException;LiNeBrEaKvoid close() throws IOException;LiNeBrEaKboolean isReadOnly();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TableSpaceManagerBlocks.java|",
		"loc": "165"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/BlockObjectStore.java|",
		"loc": "76",
		"clones": [{
			"start_line": 31,
			"end_line": 37,
			"code_lines": "} catch (HsqlException e) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic CachedObject get(CachedObject object, boolean keep) {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 38,
			"end_line": 44,
			"code_lines": "} catch (HsqlException e) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic CachedObject get(long i, boolean keep) {LiNeBrEaKtry {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVLDiskData.java|",
		"loc": "177",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.persist;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport org.hsqldb.HsqlException;LiNeBrEaKimport org.hsqldb.Row;LiNeBrEaKimport org.hsqldb.RowAVL;LiNeBrEaK"
		}, {
			"start_line": 7,
			"end_line": 14,
			"code_lines": "import org.hsqldb.RowAction;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.Table;LiNeBrEaKimport org.hsqldb.TransactionManager;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaK"
		}, {
			"start_line": 22,
			"end_line": 29,
			"code_lines": "this.database     = table.database;LiNeBrEaKthis.manager      = manager;LiNeBrEaKthis.table        = table;LiNeBrEaKthis.indexList    = table.getIndexList();LiNeBrEaKthis.accessorList = new CachedObject[indexList.length];LiNeBrEaKmanager.setStore(table, this);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 28,
			"end_line": 38,
			"code_lines": "}LiNeBrEaKpublic CachedObject get(long key, boolean keep) {LiNeBrEaKCachedObject object = cache.get(key, this, keep);LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaKpublic CachedObject get(CachedObject object, boolean keep) {LiNeBrEaKobject = cache.get(object, this, keep);LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaKpublic void add(Session session, CachedObject object, boolean tx) {LiNeBrEaK"
		}, {
			"start_line": 80,
			"end_line": 87,
			"code_lines": "}LiNeBrEaKpublic boolean isMemory() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic int getAccessCount() {LiNeBrEaKreturn cache.getAccessCount();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 91,
			"end_line": 97,
			"code_lines": "}LiNeBrEaKpublic void removeAll() {LiNeBrEaKdestroy();LiNeBrEaKelementCount.set(0);LiNeBrEaKArrayUtil.fillArray(accessorList, null);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 99,
			"end_line": 107,
			"code_lines": "}LiNeBrEaKpublic CachedObject getAccessor(Index key) {LiNeBrEaKint position = key.getPosition();LiNeBrEaKif (position >= accessorList.length) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'RowStoreAVL');LiNeBrEaK}LiNeBrEaKreturn accessorList[position];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 134,
			"end_line": 147,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaKif (txModel == TransactionManager.LOCKS) {LiNeBrEaK((RowAVL) row).setNewNodes(this);LiNeBrEaKindexRow(session, row);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT :LiNeBrEaK"
		}, {
			"start_line": 151,
			"end_line": 160,
			"code_lines": "break;LiNeBrEaKcase RowAction.ACTION_INSERT_DELETE :LiNeBrEaKif (txModel == TransactionManager.LOCKS) {LiNeBrEaKremove(row);LiNeBrEaK} else {LiNeBrEaKdelete(session, row);LiNeBrEaKremove(row);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 156,
			"end_line": 162,
			"code_lines": "delete(session, row);LiNeBrEaKremove(row);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 159,
			"end_line": 166,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic DataFileCache getCache() {LiNeBrEaKreturn cache;LiNeBrEaK}LiNeBrEaKpublic void setCache(DataFileCache cache) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataSpaceManager.java|",
		"loc": "23"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/CachedObjectBase.java|",
		"loc": "72",
		"clones": [{
			"start_line": 14,
			"end_line": 21,
			"code_lines": "}LiNeBrEaKpublic void updateAccessCount(int count) {LiNeBrEaKaccessCount = count;LiNeBrEaK}LiNeBrEaKpublic int getAccessCount() {LiNeBrEaKreturn accessCount;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 46,
			"end_line": 60,
			"code_lines": "if (!isInMemory) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKif (keep) {LiNeBrEaKkeepCount++;LiNeBrEaK} else {LiNeBrEaKkeepCount--;LiNeBrEaKif (keepCount < 0) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'CachedObjectBase - keep count');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/ScriptRunner.java|",
		"loc": "197",
		"clones": [{
			"start_line": 182,
			"end_line": 188,
			"code_lines": "String error = 'statement error processing log ' + databaseFileLiNeBrEaK+ 'line: ' + scr.getLineNumber();LiNeBrEaKdatabase.logger.logSevereEvent(error, e);LiNeBrEaKif (fullReplay) {LiNeBrEaKthrow Error.error(e, ErrorCode.ERROR_IN_SCRIPT_FILE, error);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/PersistentStoreCollectionDatabase.java|",
		"loc": "76"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreAVLHybridExtended.java|",
		"loc": "151",
		"clones": [{
			"start_line": 2,
			"end_line": 8,
			"code_lines": "import org.hsqldb.Row;LiNeBrEaKimport org.hsqldb.RowAVL;LiNeBrEaKimport org.hsqldb.RowAction;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.Table;LiNeBrEaKimport org.hsqldb.TableBase;LiNeBrEaK"
		}, {
			"start_line": 27,
			"end_line": 36,
			"code_lines": "}LiNeBrEaKpublic void add(Session session, CachedObject object, boolean tx) {LiNeBrEaKif (isCached) {LiNeBrEaKint size = object.getRealSize(cache.rowOut);LiNeBrEaKsize += indexList.length * NodeAVLDisk.SIZE_IN_BYTE;LiNeBrEaKsize = cache.rowOut.getStorageSize(size);LiNeBrEaKobject.setStorageSize(size);LiNeBrEaKlong pos = tableSpace.getFilePosition(size, false);LiNeBrEaKobject.setPos(pos);LiNeBrEaK"
		}, {
			"start_line": 46,
			"end_line": 54,
			"code_lines": "}LiNeBrEaKObject[] data = ((Row) object).getData();LiNeBrEaKfor (int i = 0; i < nullsList.length; i++) {LiNeBrEaKif (data[i] == null) {LiNeBrEaKnullsList[i] = true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 67,
			"end_line": 102,
			"code_lines": "public void commitRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT :LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT_DELETE :LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_DELETE_FINAL :LiNeBrEaKdelete(session, row);LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackRow(Session session, Row row, int changeAction,LiNeBrEaKint txModel) {LiNeBrEaKswitch (changeAction) {LiNeBrEaKcase RowAction.ACTION_DELETE :LiNeBrEaKrow = (Row) get(row, true);LiNeBrEaK((RowAVL) row).setNewNodes(this);LiNeBrEaKrow.keepInMemory(false);LiNeBrEaKindexRow(session, row);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT :LiNeBrEaKdelete(session, row);LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaKcase RowAction.ACTION_INSERT_DELETE :LiNeBrEaKremove(row);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 103,
			"end_line": 109,
			"code_lines": "NodeAVL node  = ((RowAVL) row).getNode(0);LiNeBrEaKint     count = 0;LiNeBrEaKwhile (node != null) {LiNeBrEaKcount++;LiNeBrEaKnode = node.nNext;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 123,
			"end_line": 131,
			"code_lines": "}LiNeBrEaKpublic synchronized void resetAccessorKeys(Session session, Index[] keys) {LiNeBrEaKif (indexList.length == 0 || accessorList[0] == null) {LiNeBrEaKindexList    = keys;LiNeBrEaKaccessorList = new CachedObject[indexList.length];LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (isCached) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAFileSimple.java|",
		"loc": "91"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/HsqlProperties.java|",
		"loc": "360",
		"clones": [{
			"start_line": 138,
			"end_line": 144,
			"code_lines": "stringProps.load(fis);LiNeBrEaK} finally {LiNeBrEaKif (fis != null) {LiNeBrEaKfis.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 334,
			"end_line": 340,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataFileDefrag.java|",
		"loc": "137"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/Cache.java|",
		"loc": "257"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataFileCacheSession.java|",
		"loc": "85"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataSpaceManagerSimple.java|",
		"loc": "131"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAFileInJar.java|",
		"loc": "159",
		"clones": [{
			"start_line": 68,
			"end_line": 74,
			"code_lines": "if (bufferDirty || seekPosition < bufferOffsetLiNeBrEaK|| seekPosition >= bufferOffset + buffer.length) {LiNeBrEaKreadIntoBuffer();LiNeBrEaK}LiNeBrEaKba.reset();LiNeBrEaKba.skip(seekPosition - bufferOffset);LiNeBrEaK"
		}, {
			"start_line": 79,
			"end_line": 85,
			"code_lines": "if (bufferDirty || seekPosition < bufferOffsetLiNeBrEaK|| seekPosition >= bufferOffset + buffer.length) {LiNeBrEaKreadIntoBuffer();LiNeBrEaK}LiNeBrEaKba.reset();LiNeBrEaKba.skip(seekPosition - bufferOffset);LiNeBrEaK"
		}, {
			"start_line": 120,
			"end_line": 136,
			"code_lines": "InputStream fis = null;LiNeBrEaKtry {LiNeBrEaKfis = getClass().getResourceAsStream(fileName);LiNeBrEaKif (fis == null) {LiNeBrEaKClassLoader cl =LiNeBrEaKThread.currentThread().getContextClassLoader();LiNeBrEaKif (cl != null) {LiNeBrEaKfis = cl.getResourceAsStream(fileName);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (Throwable t) {LiNeBrEaK} finally {LiNeBrEaKif (fis == null) {LiNeBrEaKthrow new FileNotFoundException(fileName);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RowStoreDataChange.java|",
		"loc": "34"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DirectoryBlockCachedObject.java|",
		"loc": "84"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/Crypto.java|",
		"loc": "149",
		"clones": [{
			"start_line": 110,
			"end_line": 121,
			"code_lines": "destOffset);LiNeBrEaK} catch (java.security.InvalidKeyException e) {LiNeBrEaKthrow Error.error(ErrorCode.X_S0531, e);LiNeBrEaK} catch (BadPaddingException e) {LiNeBrEaKthrow Error.error(ErrorCode.X_S0531, e);LiNeBrEaK} catch (IllegalBlockSizeException e) {LiNeBrEaKthrow Error.error(ErrorCode.X_S0531, e);LiNeBrEaK} catch (ShortBufferException e) {LiNeBrEaKthrow Error.error(ErrorCode.X_S0531, e);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAFileNIO.java|",
		"loc": "359",
		"clones": [{
			"start_line": 96,
			"end_line": 105,
			"code_lines": "} catch (Throwable e) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, e);LiNeBrEaKIOException io = new IOException(e.toString());LiNeBrEaKtry {LiNeBrEaKio.initCause(e);LiNeBrEaK} catch (Throwable e1) {}LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 110,
			"end_line": 119,
			"code_lines": "} catch (Throwable e) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, e);LiNeBrEaKIOException io = new IOException(e.toString());LiNeBrEaKtry {LiNeBrEaKio.initCause(e);LiNeBrEaK} catch (Throwable e1) {}LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 135,
			"end_line": 141,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 146,
			"end_line": 152,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 156,
			"end_line": 163,
			"code_lines": "return value;LiNeBrEaK} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 172,
			"code_lines": "while (true) {LiNeBrEaKlong transferLength = bufferPosition + bufferLengthLiNeBrEaK- currentPosition;LiNeBrEaKif (transferLength > length) {LiNeBrEaKtransferLength = length;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 173,
			"end_line": 186,
			"code_lines": "positionBufferMove((int) transferLength);LiNeBrEaKlength -= transferLength;LiNeBrEaKoffset += transferLength;LiNeBrEaKif (length == 0) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 191,
			"end_line": 197,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 202,
			"end_line": 208,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent(JVM_ERROR, t);LiNeBrEaKIOException io = JavaSystem.toIOException(t);LiNeBrEaKthrow io;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 277,
			"end_line": 283,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Database getDatabase() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void synch() {LiNeBrEaK"
		}, {
			"start_line": 300,
			"end_line": 306,
			"code_lines": "try {LiNeBrEaKbuffers[i].force();LiNeBrEaK} catch (Throwable t) {LiNeBrEaKdatabase.logger.logWarningEvent('NIO buffer force error 'LiNeBrEaK+ i * largeBufferSizeLiNeBrEaK+ ' ', t);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/CachedObject.java|",
		"loc": "29"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LobStore.java|",
		"loc": "13"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/PersistentStore.java|",
		"loc": "70"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/IntArrayCachedObject.java|",
		"loc": "51",
		"clones": [{
			"start_line": 0,
			"end_line": 8,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.persist;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.LongLookup;LiNeBrEaKimport org.hsqldb.rowio.RowInputInterface;LiNeBrEaKimport org.hsqldb.rowio.RowOutputInterface;LiNeBrEaK"
		}, {
			"start_line": 24,
			"end_line": 31,
			"code_lines": "}LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.GENERAL_IO_ERROR, e);LiNeBrEaK}LiNeBrEaKhasChanged = false;LiNeBrEaK}LiNeBrEaKpublic int getDefaultCapacity() {LiNeBrEaK"
		}, {
			"start_line": 40,
			"end_line": 47,
			"code_lines": "}LiNeBrEaKout.writeEnd();LiNeBrEaKhasChanged = false;LiNeBrEaK}LiNeBrEaKpublic void write(RowOutputInterface out, LongLookup lookup) {LiNeBrEaKwrite(out);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LobStoreMem.java|",
		"loc": "90",
		"clones": [{
			"start_line": 41,
			"end_line": 47,
			"code_lines": "byte[] largeBlock = (byte[]) byteStoreList.get(largeBlockIndex);LiNeBrEaKint    blockOffset       = blockAddress % blocksInLargeBlock;LiNeBrEaKint    currentBlockCount = blockCount;LiNeBrEaKif ((blockOffset + currentBlockCount) > blocksInLargeBlock) {LiNeBrEaKcurrentBlockCount = blocksInLargeBlock - blockOffset;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAFile.java|",
		"loc": "343",
		"clones": [{
			"start_line": 131,
			"end_line": 137,
			"code_lines": "seekPosition = position;LiNeBrEaK}LiNeBrEaKpublic long getFilePointer() throws IOException {LiNeBrEaKreturn seekPosition;LiNeBrEaK}LiNeBrEaKprivate void readIntoBuffer() throws IOException {LiNeBrEaK"
		}, {
			"start_line": 198,
			"end_line": 205,
			"code_lines": "}LiNeBrEaKif (seekPosition < bufferOffsetLiNeBrEaK|| seekPosition >= bufferOffset + buffer.length) {LiNeBrEaKreadIntoBuffer();LiNeBrEaK} else {LiNeBrEaKcacheHit++;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 217,
			"end_line": 223,
			"code_lines": "} catch (IOException e) {LiNeBrEaKresetPointer();LiNeBrEaKdatabase.logger.logWarningEvent('failed to read a byte array', e);LiNeBrEaKthrow e;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 234,
			"end_line": 241,
			"code_lines": "}LiNeBrEaK} catch (IOException e) {LiNeBrEaKresetPointer();LiNeBrEaKdatabase.logger.logWarningEvent('failed to write a byte array', e);LiNeBrEaKthrow e;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 250,
			"end_line": 258,
			"code_lines": "}LiNeBrEaKpublic void close() throws IOException {LiNeBrEaKfile.close();LiNeBrEaK}LiNeBrEaKpublic boolean isReadOnly() {LiNeBrEaKreturn readOnly;LiNeBrEaK}LiNeBrEaKpublic boolean ensureLength(long newLength) {LiNeBrEaK"
		}, {
			"start_line": 264,
			"end_line": 271,
			"code_lines": "return false;LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean setLength(long newLength) {LiNeBrEaKtry {LiNeBrEaKfile.setLength(newLength);LiNeBrEaK"
		}, {
			"start_line": 335,
			"end_line": 342,
			"code_lines": "long mask    = 0xffffffffffffffffl << scale;LiNeBrEaKlong newSize = value & mask;LiNeBrEaKif (newSize != value) {LiNeBrEaKnewSize += 1 << scale;LiNeBrEaK}LiNeBrEaKreturn newSize;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAShadowFile.java|",
		"loc": "224",
		"clones": [{
			"start_line": 165,
			"end_line": 172,
			"code_lines": "}LiNeBrEaKfetchedSize++;LiNeBrEaKreturn byteread;LiNeBrEaK}LiNeBrEaKpublic int read(byte bytes[]) throws IOException {LiNeBrEaKreturn read(bytes, 0, bytes.length);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 174,
			"end_line": 180,
			"code_lines": "if (!initialised) {LiNeBrEaKinitialise();LiNeBrEaK}LiNeBrEaKif (fetchedSize == limitSize) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 177,
			"end_line": 185,
			"code_lines": "if (fetchedSize == limitSize) {LiNeBrEaKreturn -1;LiNeBrEaK}LiNeBrEaKif (limitSize >= 0 && limitSize - fetchedSize < length) {LiNeBrEaKlength = (int) (limitSize - fetchedSize);LiNeBrEaK}LiNeBrEaKint count = is.read(bytes, offset, length);LiNeBrEaKif (count < 0) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LobStoreInJar.java|",
		"loc": "96",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.persist;LiNeBrEaKimport java.io.DataInputStream;LiNeBrEaKimport java.io.FileNotFoundException;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport java.io.InputStream;LiNeBrEaKimport org.hsqldb.Database;LiNeBrEaK"
		}, {
			"start_line": 61,
			"end_line": 78,
			"code_lines": "}LiNeBrEaKInputStream fis = null;LiNeBrEaKtry {LiNeBrEaKfis = getClass().getResourceAsStream(fileName);LiNeBrEaKif (fis == null) {LiNeBrEaKClassLoader cl =LiNeBrEaKThread.currentThread().getContextClassLoader();LiNeBrEaKif (cl != null) {LiNeBrEaKfis = cl.getResourceAsStream(fileName);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (Throwable t) {LiNeBrEaK} finally {LiNeBrEaKif (fis == null) {LiNeBrEaKthrow new FileNotFoundException(fileName);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 91,
			"code_lines": "long skipPosition = realPosition;LiNeBrEaKif (position < skipPosition) {LiNeBrEaKresetStream();LiNeBrEaKskipPosition = 0;LiNeBrEaK}LiNeBrEaKwhile (position > skipPosition) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TextFileSettings.java|",
		"loc": "174"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TextFileReader.java|",
		"loc": "199",
		"clones": [{
			"start_line": 117,
			"end_line": 124,
			"code_lines": "if (!isReadOnly) {LiNeBrEaKdataFile.write(TextFileSettings.BYTES_LINE_SEP, 0,LiNeBrEaKTextFileSettings.BYTES_LINE_SEP.length);LiNeBrEaKbuffer.write(TextFileSettings.BYTES_LINE_SEP);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 133,
			"end_line": 139,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKwasNormal = true;LiNeBrEaKcomplete  = wasCR;LiNeBrEaKwasCR     = false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LobStoreRAFile.java|",
		"loc": "121",
		"clones": [{
			"start_line": 48,
			"end_line": 54,
			"code_lines": "return dataBytes;LiNeBrEaK} catch (Throwable t) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_FILE_ERROR, t);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void setBlockBytes(byte[] dataBytes, int blockAddress,LiNeBrEaK"
		}, {
			"start_line": 80,
			"end_line": 86,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic int getBlockSize() {LiNeBrEaKreturn lobBlockSize;LiNeBrEaK}LiNeBrEaKpublic long getLength() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TableSpaceManager.java|",
		"loc": "15"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/TextCache.java|",
		"loc": "297",
		"clones": [{
			"start_line": 110,
			"end_line": 116,
			"code_lines": "t.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 132,
			"end_line": 139,
			"code_lines": "new Object[] {LiNeBrEaKt.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LobManager.java|",
		"loc": "1492",
		"clones": [{
			"start_line": 191,
			"end_line": 197,
			"code_lines": "writeLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data = getLobHeader(lobID);LiNeBrEaKif (data == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 222,
			"end_line": 230,
			"code_lines": "writeLock.lock();LiNeBrEaKtry {LiNeBrEaKLong           lobID    = getNewLobID();LiNeBrEaKResultMetaData meta     = createLob.getParametersMetaData();LiNeBrEaKObject         params[] = new Object[meta.getColumnCount()];LiNeBrEaKparams[LOB_IDS.LOB_ID]          = lobID;LiNeBrEaKparams[LOB_IDS.LOB_LENGTH]      = ValuePool.getLong(length);LiNeBrEaKparams[LOB_IDS.LOB_USAGE_COUNT] = ValuePool.INTEGER_0;LiNeBrEaK"
		}, {
			"start_line": 231,
			"end_line": 239,
			"code_lines": "Result result = sysLobSession.executeCompiledStatement(createLob,LiNeBrEaKparams, 0);LiNeBrEaKusageChanged = true;LiNeBrEaKreturn lobID.longValue();LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 410,
			"end_line": 420,
			"code_lines": "writeLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data    = getLobHeader(a.getId());LiNeBrEaKlong     aLength = ((Long) data[LOB_IDS.LOB_LENGTH]).longValue();LiNeBrEaKint[][] aAddresses = getBlockAddresses(a.getId(), 0,LiNeBrEaKInteger.MAX_VALUE);LiNeBrEaKint aIndex  = 0;LiNeBrEaKint bOffset = 0;LiNeBrEaKint aOffset = 0;LiNeBrEaKif (aLength == 0) {LiNeBrEaK"
		}, {
			"start_line": 424,
			"end_line": 430,
			"code_lines": "return 1;LiNeBrEaK}LiNeBrEaKwhile (true) {LiNeBrEaKint aBlockOffset = aAddresses[aIndex][LOBS.BLOCK_ADDR]LiNeBrEaK+ aOffset;LiNeBrEaKbyte[] aBytes = getLobStore().getBlockBytes(aBlockOffset, 1);LiNeBrEaK"
		}, {
			"start_line": 450,
			"end_line": 457,
			"code_lines": "if (aOffset == aAddresses[aIndex][LOBS.BLOCK_COUNT]) {LiNeBrEaKaOffset = 0;LiNeBrEaKaIndex++;LiNeBrEaK}LiNeBrEaKif (aIndex == aAddresses.length) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 471,
			"end_line": 477,
			"code_lines": "if (a.getId() == b.getId()) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKif (compressLobs || cryptLobs) {LiNeBrEaK"
		}, {
			"start_line": 536,
			"end_line": 558,
			"code_lines": "Object[] data    = getLobHeader(aID);LiNeBrEaKlong     aLength = ((Long) data[LOB_IDS.LOB_LENGTH]).longValue();LiNeBrEaKdata = getLobHeader(bID);LiNeBrEaKlong    bLength    = ((Long) data[LOB_IDS.LOB_LENGTH]).longValue();LiNeBrEaKint[][] aAddresses = getBlockAddresses(aID, 0, Integer.MAX_VALUE);LiNeBrEaKint[][] bAddresses = getBlockAddresses(bID, 0, Integer.MAX_VALUE);LiNeBrEaKint     aIndex     = 0;LiNeBrEaKint     bIndex     = 0;LiNeBrEaKint     aOffset    = 0;LiNeBrEaKint     bOffset    = 0;LiNeBrEaKif (aLength == 0) {LiNeBrEaKreturn bLength == 0 ? 0LiNeBrEaK: -1;LiNeBrEaK}LiNeBrEaKif (bLength == 0) {LiNeBrEaKreturn 1;LiNeBrEaK}LiNeBrEaKwhile (true) {LiNeBrEaKint aBlockOffset = aAddresses[aIndex][LOBS.BLOCK_ADDR] + aOffset;LiNeBrEaKint bBlockOffset = bAddresses[bIndex][LOBS.BLOCK_ADDR] + bOffset;LiNeBrEaKbyte[] aBytes    = getLobStore().getBlockBytes(aBlockOffset, 1);LiNeBrEaKbyte[] bBytes    = getLobStore().getBlockBytes(bBlockOffset, 1);LiNeBrEaK"
		}, {
			"start_line": 558,
			"end_line": 565,
			"code_lines": "long aLimit =LiNeBrEaKaLengthLiNeBrEaK- ((long) aAddresses[aIndex][LOBS.BLOCK_OFFSET] + aOffset)LiNeBrEaK* lobBlockSize / 2;LiNeBrEaKif (aLimit > lobBlockSize / 2) {LiNeBrEaKaLimit = lobBlockSize / 2;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 579,
			"end_line": 603,
			"code_lines": "}LiNeBrEaKaOffset++;LiNeBrEaKbOffset++;LiNeBrEaKif (aOffset == aAddresses[aIndex][LOBS.BLOCK_COUNT]) {LiNeBrEaKaOffset = 0;LiNeBrEaKaIndex++;LiNeBrEaK}LiNeBrEaKif (bOffset == bAddresses[bIndex][LOBS.BLOCK_COUNT]) {LiNeBrEaKbOffset = 0;LiNeBrEaKbIndex++;LiNeBrEaK}LiNeBrEaKif (aIndex == aAddresses.length) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (bIndex == bAddresses.length) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (aLength == bLength) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKreturn aLength > bLength ? 1LiNeBrEaK: -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 678,
			"end_line": 687,
			"code_lines": "writeLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data = getLobHeader(lobID);LiNeBrEaKif (data == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_0F502);LiNeBrEaK}LiNeBrEaKlong length = ((Long) data[LOB_IDS.LOB_LENGTH]).longValue();LiNeBrEaKint  type   = ((Integer) data[LOB_IDS.LOB_TYPE]).intValue();LiNeBrEaKreturn ResultLob.newLobSetResponse(lobID, length);LiNeBrEaK"
		}, {
			"start_line": 802,
			"end_line": 808,
			"code_lines": "if (blockAddresses[i][LOBS.BLOCK_COUNT]LiNeBrEaK+ blockAddresses[i][LOBS.BLOCK_OFFSET] > blockLimit) {LiNeBrEaKblockCount -= (blockAddresses[i][LOBS.BLOCK_COUNT]LiNeBrEaK+ blockAddresses[i][LOBS.BLOCK_OFFSET]LiNeBrEaK- blockLimit);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 968,
			"end_line": 977,
			"code_lines": "if (byteBuffer == null) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_IS_READONLY);LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data = getLobHeader(lobID);LiNeBrEaKif (data == null) {LiNeBrEaKreturn Result.newErrorResult(Error.error(ErrorCode.X_0F502));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1015,
			"end_line": 1029,
			"code_lines": "int dataLength) {LiNeBrEaKif (byteBuffer == null) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_IS_READONLY);LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data = getLobHeader(lobID);LiNeBrEaKif (data == null) {LiNeBrEaKreturn Result.newErrorResult(Error.error(ErrorCode.X_0F502));LiNeBrEaK}LiNeBrEaKlong length = ((Long) data[LOB_IDS.LOB_LENGTH]).longValue();LiNeBrEaKif (dataLength == 0) {LiNeBrEaKreturn ResultLob.newLobSetResponse(lobID, length);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1032,
			"end_line": 1047,
			"code_lines": "if (result.isError()) {LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKif (offset + dataLength > length) {LiNeBrEaKlength = offset + dataLength;LiNeBrEaKresult = setLength(lobID, length);LiNeBrEaKif (result.isError()) {LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn ResultLob.newLobSetResponse(lobID, length);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1048,
			"end_line": 1057,
			"code_lines": "long length) {LiNeBrEaKif (length == 0) {LiNeBrEaKreturn ResultLob.newLobSetResponse(lobID, 0);LiNeBrEaK}LiNeBrEaKif (byteBuffer == null) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_IS_READONLY);LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 1071,
			"end_line": 1080,
			"code_lines": "if (byteBuffer == null) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_IS_READONLY);LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] data = getLobHeader(lobID);LiNeBrEaKif (data == null) {LiNeBrEaKreturn Result.newErrorResult(Error.error(ErrorCode.X_0F502));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1343,
			"end_line": 1351,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (aParts.length == bParts.length) {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKreturn aParts.length > bParts.length ? 1LiNeBrEaK: -1;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1369,
			"end_line": 1376,
			"code_lines": "localLength);LiNeBrEaKif (read == -1) {LiNeBrEaKreturn Result.newErrorResult(new EOFException());LiNeBrEaK}LiNeBrEaKlocalLength -= read;LiNeBrEaKcount       += read;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/PersistentStoreCollectionSession.java|",
		"loc": "283",
		"clones": [{
			"start_line": 54,
			"end_line": 60,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'PersistentStoreCollectionSession');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 77,
			"end_line": 83,
			"code_lines": "table.getPersistenceId());LiNeBrEaKif (store == null) {LiNeBrEaKstore = session.database.logger.newStore(session, this,LiNeBrEaKtable);LiNeBrEaK}LiNeBrEaKreturn store;LiNeBrEaK"
		}, {
			"start_line": 98,
			"end_line": 104,
			"code_lines": "table.getPersistenceId());LiNeBrEaKif (store == null) {LiNeBrEaKstore = session.database.logger.newStore(session, this,LiNeBrEaKtable);LiNeBrEaK}LiNeBrEaKreturn store;LiNeBrEaK"
		}, {
			"start_line": 130,
			"end_line": 136,
			"code_lines": "if (rowStoreMapSession.isEmpty()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKIterator it = rowStoreMapSession.values().iterator();LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKPersistentStore store = (PersistentStore) it.next();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/LockFile.java|",
		"loc": "637",
		"clones": [{
			"start_line": 236,
			"end_line": 245,
			"code_lines": "} finally {LiNeBrEaKif (fis != null) {LiNeBrEaKtry {LiNeBrEaKfis.close();LiNeBrEaK} catch (IOException ioe) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 265,
			"end_line": 272,
			"code_lines": "} catch (SecurityException ex) {LiNeBrEaKthrow new FileSecurityException(this, 'writeMagic', ex);LiNeBrEaK} catch (EOFException ex) {LiNeBrEaKthrow new UnexpectedEndOfFileException(this, 'writeMagic', ex);LiNeBrEaK} catch (IOException ex) {LiNeBrEaKthrow new UnexpectedFileIOException(this, 'writeMagic', ex);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 280,
			"end_line": 288,
			"code_lines": "} catch (SecurityException ex) {LiNeBrEaKthrow new FileSecurityException(this, 'writeHeartbeat', ex);LiNeBrEaK} catch (EOFException ex) {LiNeBrEaKthrow new UnexpectedEndOfFileException(this, 'writeHeartbeat', ex);LiNeBrEaK} catch (IOException ex) {LiNeBrEaKthrow new UnexpectedFileIOException(this, 'writeHeartbeat', ex);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 398,
			"end_line": 404,
			"code_lines": "throws LockFile.FileSecurityException,LiNeBrEaKLockFile.LockHeldExternallyException,LiNeBrEaKLockFile.UnexpectedFileNotFoundException,LiNeBrEaKLockFile.UnexpectedEndOfFileException,LiNeBrEaKLockFile.UnexpectedFileIOException, LockFile.WrongLengthException,LiNeBrEaKLockFile.WrongMagicException {LiNeBrEaK"
		}, {
			"start_line": 524,
			"end_line": 530,
			"code_lines": "return this.reason;LiNeBrEaK}LiNeBrEaKpublic String getMessage() {LiNeBrEaKreturn super.getMessage() + ' reason: ' + reason;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 565,
			"end_line": 571,
			"code_lines": "return this.reason;LiNeBrEaK}LiNeBrEaKpublic String getMessage() {LiNeBrEaKreturn super.getMessage() + ' reason: ' + reason;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 574,
			"end_line": 586,
			"code_lines": "final String inMethod,LiNeBrEaKfinal IOException reason) {LiNeBrEaKsuper(lockFile, inMethod);LiNeBrEaKthis.reason = reason;LiNeBrEaK}LiNeBrEaKpublic IOException getReason() {LiNeBrEaKreturn this.reason;LiNeBrEaK}LiNeBrEaKpublic String getMessage() {LiNeBrEaKreturn super.getMessage() + ' reason: ' + reason;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 596,
			"end_line": 602,
			"code_lines": "return this.reason;LiNeBrEaK}LiNeBrEaKpublic String getMessage() {LiNeBrEaKreturn super.getMessage() + ' reason: ' + reason;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAFileHybrid.java|",
		"loc": "111"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/SimpleStore.java|",
		"loc": "128",
		"clones": [{
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hsqldb.RowAction;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.TableBase;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/RAStorageWrapper.java|",
		"loc": "56",
		"clones": [{
			"start_line": 10,
			"end_line": 30,
			"code_lines": "}LiNeBrEaKpublic long length() throws IOException {LiNeBrEaKreturn file.length();LiNeBrEaK}LiNeBrEaKpublic void seek(long position) throws IOException {LiNeBrEaKfile.seek(position);LiNeBrEaK}LiNeBrEaKpublic long getFilePointer() throws IOException {LiNeBrEaKreturn file.getFilePointer();LiNeBrEaK}LiNeBrEaKpublic int read() throws IOException {LiNeBrEaKreturn file.read();LiNeBrEaK}LiNeBrEaKpublic long readLong() throws IOException {LiNeBrEaKreturn file.readLong();LiNeBrEaK}LiNeBrEaKpublic int readInt() throws IOException {LiNeBrEaKreturn file.readInt();LiNeBrEaK}LiNeBrEaKpublic void read(byte[] b, int offset, int length) throws IOException {LiNeBrEaK"
		}, {
			"start_line": 31,
			"end_line": 45,
			"code_lines": "}LiNeBrEaKpublic void write(byte[] b, int off, int len) throws IOException {LiNeBrEaKfile.write(b, off, len);LiNeBrEaK}LiNeBrEaKpublic void writeInt(int i) throws IOException {LiNeBrEaKfile.writeInt(i);LiNeBrEaK}LiNeBrEaKpublic void writeLong(long i) throws IOException {LiNeBrEaKfile.writeLong(i);LiNeBrEaK}LiNeBrEaKpublic void close() throws IOException {LiNeBrEaKfile.close();LiNeBrEaK}LiNeBrEaKpublic boolean isReadOnly() {LiNeBrEaK"
		}, {
			"start_line": 46,
			"end_line": 53,
			"code_lines": "}LiNeBrEaKpublic boolean ensureLength(long newLong) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean setLength(long newLength) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/HsqlDatabaseProperties.java|",
		"loc": "734"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/DataFileCache.java|",
		"loc": "1146",
		"clones": [{
			"start_line": 243,
			"end_line": 250,
			"code_lines": "release();LiNeBrEaKthrow Error.error(t, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_DataFileCache_open, new Object[] {LiNeBrEaKt.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 285,
			"end_line": 294,
			"code_lines": "if (isIncremental) {LiNeBrEaKpreexists = restoreBackupIncremental();LiNeBrEaK} else {LiNeBrEaKpreexists = restoreBackup();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKdataFile = RAFile.newScaledRAFile(database, dataFileName,LiNeBrEaKreadonly, fileType);LiNeBrEaKif (preexists) {LiNeBrEaK"
		}, {
			"start_line": 302,
			"end_line": 309,
			"code_lines": "openShadowFile();LiNeBrEaK} else {LiNeBrEaKinitNewFile();LiNeBrEaK}LiNeBrEaKinitBuffers();LiNeBrEaKfileModified  = false;LiNeBrEaKcacheModified = false;LiNeBrEaK"
		}, {
			"start_line": 310,
			"end_line": 320,
			"code_lines": "logInfoEvent('dataFileCache open end');LiNeBrEaK} catch (Throwable t) {LiNeBrEaKlogSevereEvent('dataFileCache open failed', t);LiNeBrEaKrelease();LiNeBrEaKthrow Error.error(t, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_DataFileCache_open, new Object[] {LiNeBrEaKt.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 433,
			"end_line": 439,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKlogSevereEvent('DataFileCache.release', t);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 458,
			"end_line": 466,
			"code_lines": "throw Error.error(t, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_DataFileCache_close, new Object[] {LiNeBrEaKt.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 470,
			"end_line": 478,
			"code_lines": "} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void adjustStoreCount(int adjust) {LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKstoreCount += adjust;LiNeBrEaK"
		}, {
			"start_line": 518,
			"end_line": 528,
			"code_lines": "} catch (Throwable t) {LiNeBrEaKlogSevereEvent('DataFileCache.reset commit', t);LiNeBrEaKthrow Error.error(t, ErrorCode.FILE_IO_ERROR,LiNeBrEaKErrorCode.M_DataFileCache_close, new Object[] {LiNeBrEaKt.toString(), dataFileNameLiNeBrEaK});LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 584,
			"end_line": 591,
			"code_lines": "} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void remove(CachedObject object) {LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 626,
			"end_line": 632,
			"code_lines": "} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic CachedObject get(CachedObject object, PersistentStore store,LiNeBrEaKboolean keep) {LiNeBrEaK"
		}, {
			"start_line": 665,
			"end_line": 675,
			"code_lines": "object = cache.get(pos);LiNeBrEaKif (object != null) {LiNeBrEaKif (keep) {LiNeBrEaKobject.keepInMemory(true);LiNeBrEaK}LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 678,
			"end_line": 696,
			"code_lines": "CachedObject object;LiNeBrEaKif (pos < 0) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKreadLock.lock();LiNeBrEaKtry {LiNeBrEaKobject = cache.get(pos);LiNeBrEaKif (object != null) {LiNeBrEaKif (keep) {LiNeBrEaKobject.keepInMemory(true);LiNeBrEaK}LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKreadLock.unlock();LiNeBrEaK}LiNeBrEaKreturn getFromFile(pos, store, keep);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 700,
			"end_line": 708,
			"code_lines": "try {LiNeBrEaKobject = cache.get(pos);LiNeBrEaKif (object != null) {LiNeBrEaKif (keep) {LiNeBrEaKobject.keepInMemory(true);LiNeBrEaK}LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 748,
			"end_line": 760,
			"code_lines": "CachedObject object = null;LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKobject = cache.get(pos);LiNeBrEaKif (object != null) {LiNeBrEaKif (keep) {LiNeBrEaKobject.keepInMemory(true);LiNeBrEaK}LiNeBrEaKreturn object;LiNeBrEaK}LiNeBrEaKfor (int j = 0; j < 2; j++) {LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 770,
			"end_line": 786,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKcache.put(object);LiNeBrEaKif (keep) {LiNeBrEaKobject.keepInMemory(true);LiNeBrEaK}LiNeBrEaKstore.set(object);LiNeBrEaKreturn object;LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKlogSevereEvent(dataFileName + ' getFromFile failed ' + pos, e);LiNeBrEaKthrow e;LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 845,
			"end_line": 851,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 960,
			"end_line": 966,
			"code_lines": "deleteFile(database, backupFileName);LiNeBrEaKif (fa.isStreamElement(backupFileName)) {LiNeBrEaKthrow Error.error(ErrorCode.DATA_FILE_ERROR,LiNeBrEaK'cannot delete old backup file');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/Logger.java|",
		"loc": "1751",
		"clones": [{
			"start_line": 11,
			"end_line": 17,
			"code_lines": "import org.hsqldb.HsqlException;LiNeBrEaKimport org.hsqldb.HsqlNameManager;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.NumberSequence;LiNeBrEaKimport org.hsqldb.Row;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaK"
		}, {
			"start_line": 1506,
			"end_line": 1514,
			"code_lines": "list.add(sb.toString());LiNeBrEaKsb.setLength(0);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/persist/BitMapCachedObject.java|",
		"loc": "54",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.persist;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.LongLookup;LiNeBrEaK"
		}, {
			"start_line": 26,
			"end_line": 33,
			"code_lines": "}LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow Error.error(ErrorCode.GENERAL_IO_ERROR, e);LiNeBrEaK}LiNeBrEaKhasChanged = false;LiNeBrEaK}LiNeBrEaKpublic int getDefaultCapacity() {LiNeBrEaK"
		}, {
			"start_line": 43,
			"end_line": 50,
			"code_lines": "}LiNeBrEaKout.writeEnd();LiNeBrEaKhasChanged = false;LiNeBrEaK}LiNeBrEaKpublic void write(RowOutputInterface out, LongLookup lookup) {LiNeBrEaKwrite(out);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Row.java|",
		"loc": "103",
		"clones": [{
			"start_line": 35,
			"end_line": 42,
			"code_lines": "public void setStorageSize(int size) {}LiNeBrEaKpublic int getStorageSize() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKfinal public boolean isBlock() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 62,
			"code_lines": "}LiNeBrEaKpublic void setPos(long pos) {LiNeBrEaKposition = pos;LiNeBrEaK}LiNeBrEaKpublic boolean isNew() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean hasChanged() {LiNeBrEaK"
		}, {
			"start_line": 58,
			"end_line": 65,
			"code_lines": "public boolean isNew() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean hasChanged() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean isKeepInMemory() {LiNeBrEaK"
		}, {
			"start_line": 83,
			"end_line": 89,
			"code_lines": "public int getDefaultCapacity() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaKpublic void read(RowInputInterface in) {}LiNeBrEaKpublic void write(RowOutputInterface out) {}LiNeBrEaKpublic void write(RowOutputInterface out, LongLookup lookup) {}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowIterator.java|",
		"loc": "12"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigatorDataChange.java|",
		"loc": "28"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigatorDataChangeMemory.java|",
		"loc": "128"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RangeIterator.java|",
		"loc": "14"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigator.java|",
		"loc": "183"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigatorData.java|",
		"loc": "454",
		"clones": [{
			"start_line": 274,
			"end_line": 286,
			"code_lines": "Object[]    compareData = null;LiNeBrEaKRowIterator it;LiNeBrEaKObject[]    otherData = null;LiNeBrEaKsortFull(session);LiNeBrEaKother.sortFull(session);LiNeBrEaKit = queryExpression.fullIndex.emptyIterator();LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] currentData = getNext();LiNeBrEaKboolean newGroup =LiNeBrEaKcompareData == nullLiNeBrEaK|| queryExpression.fullIndex.compareRowNonUnique(LiNeBrEaKsession, currentData, compareData,LiNeBrEaK"
		}, {
			"start_line": 287,
			"end_line": 295,
			"code_lines": "if (newGroup) {LiNeBrEaKcompareData = currentData;LiNeBrEaKit          = other.findFirstRow(currentData);LiNeBrEaK}LiNeBrEaKotherData = it.getNext();LiNeBrEaKif (otherData != nullLiNeBrEaK&& queryExpression.fullIndex.compareRowNonUnique(LiNeBrEaKsession, currentData, otherData,LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigatorClient.java|",
		"loc": "159",
		"clones": [{
			"start_line": 43,
			"end_line": 56,
			"code_lines": "}LiNeBrEaKpublic Object[] getCurrent() {LiNeBrEaKif (currentPos < 0 || currentPos >= size) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (currentPos == currentOffset + table.length) {LiNeBrEaKgetBlock(currentOffset + table.length);LiNeBrEaK}LiNeBrEaKreturn table[currentPos - currentOffset];LiNeBrEaK}LiNeBrEaKpublic Row getCurrentRow() {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'RowSetNavigatorClient');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 74,
			"end_line": 90,
			"code_lines": "}LiNeBrEaKpublic boolean absolute(int position) {LiNeBrEaKif (position < 0) {LiNeBrEaKposition += size;LiNeBrEaK}LiNeBrEaKif (position < 0) {LiNeBrEaKbeforeFirst();LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKif (position >= size) {LiNeBrEaKafterLast();LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKif (size == 0) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 148,
			"end_line": 158,
			"code_lines": "}LiNeBrEaKprivate void ensureCapacity() {LiNeBrEaKif (size == table.length) {LiNeBrEaKint        newSize  = size == 0 ? 4LiNeBrEaK: size * 2;LiNeBrEaKObject[][] newTable = new Object[newSize][];LiNeBrEaKSystem.arraycopy(table, 0, newTable, 0, size);LiNeBrEaKtable = newTable;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/navigator/RowSetNavigatorDataTable.java|",
		"loc": "423",
		"clones": [{
			"start_line": 125,
			"end_line": 133,
			"code_lines": "if (columnMap == null) {LiNeBrEaKdata = (Object[]) ArrayUtil.resizeArrayIfDifferent(data,LiNeBrEaKvisibleColumnCount);LiNeBrEaK} else {LiNeBrEaKObject[] newData = new Object[visibleColumnCount];LiNeBrEaKArrayUtil.projectRow(data, columnMap, newData);LiNeBrEaKdata = newData;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 193,
			"end_line": 210,
			"code_lines": "}LiNeBrEaKpublic void read(RowInputInterface in,LiNeBrEaKResultMetaData meta) throws IOException {}LiNeBrEaKpublic void write(RowOutputInterface out,LiNeBrEaKResultMetaData meta) throws IOException {LiNeBrEaKreset();LiNeBrEaKout.writeLong(id);LiNeBrEaKout.writeInt(size);LiNeBrEaKout.writeInt(0);LiNeBrEaKout.writeInt(size);LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] data = getNext();LiNeBrEaKout.writeData(meta.getExtendedColumnCount(), meta.columnTypes,LiNeBrEaKdata, null, null);LiNeBrEaK}LiNeBrEaKreset();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 239,
			"end_line": 250,
			"code_lines": "}LiNeBrEaKpublic void intersect(Session session, RowSetNavigatorData other) {LiNeBrEaKremoveDuplicates(session);LiNeBrEaKother.sortFull(session);LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] currentData = getNext();LiNeBrEaKboolean  hasRow      = other.containsRow(currentData);LiNeBrEaKif (!hasRow) {LiNeBrEaKremoveCurrent();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 283,
			"end_line": 294,
			"code_lines": "}LiNeBrEaKpublic void except(Session session, RowSetNavigatorData other) {LiNeBrEaKremoveDuplicates(session);LiNeBrEaKother.sortFull(session);LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] currentData = getNext();LiNeBrEaKboolean  hasRow      = other.containsRow(currentData);LiNeBrEaKif (hasRow) {LiNeBrEaKremoveCurrent();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 297,
			"end_line": 322,
			"code_lines": "Object[]    compareData = null;LiNeBrEaKRowIterator it;LiNeBrEaKRow         otherRow  = null;LiNeBrEaKObject[]    otherData = null;LiNeBrEaKsortFull(session);LiNeBrEaKother.sortFull(session);LiNeBrEaKit = fullIndex.emptyIterator();LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] currentData = getNext();LiNeBrEaKboolean newGroup =LiNeBrEaKcompareData == nullLiNeBrEaK|| fullIndex.compareRowNonUnique(LiNeBrEaKsession, currentData, compareData,LiNeBrEaKfullIndex.getColumnCount()) != 0;LiNeBrEaKif (newGroup) {LiNeBrEaKcompareData = currentData;LiNeBrEaKit          = other.findFirstRow(currentData);LiNeBrEaK}LiNeBrEaKotherRow  = it.getNextRow();LiNeBrEaKotherData = otherRow == null ? nullLiNeBrEaK: otherRow.getData();LiNeBrEaKif (otherData != nullLiNeBrEaK&& fullIndex.compareRowNonUnique(LiNeBrEaKsession, currentData, otherData,LiNeBrEaKfullIndex.getColumnCount()) == 0) {LiNeBrEaK"
		}, {
			"start_line": 329,
			"end_line": 336,
			"code_lines": "Object[] lastRowData = null;LiNeBrEaKwhile (hasNext()) {LiNeBrEaKObject[] currentData = getNext();LiNeBrEaKif (hasNull(currentData)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (lastRowData != nullLiNeBrEaK"
		}, {
			"start_line": 338,
			"end_line": 347,
			"code_lines": "return false;LiNeBrEaK} else {LiNeBrEaKlastRowData = currentData;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic void removeDuplicates(Session session) {LiNeBrEaKsortFull(session);LiNeBrEaK"
		}, {
			"start_line": 358,
			"end_line": 375,
			"code_lines": "reset();LiNeBrEaK}LiNeBrEaKpublic void trim(int limitstart, int limitcount) {LiNeBrEaKif (size == 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (limitstart >= size) {LiNeBrEaKclear();LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (limitstart != 0) {LiNeBrEaKreset();LiNeBrEaKfor (int i = 0; i < limitstart; i++) {LiNeBrEaKnext();LiNeBrEaKremoveCurrent();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 376,
			"end_line": 386,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKreset();LiNeBrEaKfor (int i = 0; i < limitcount; i++) {LiNeBrEaKnext();LiNeBrEaK}LiNeBrEaKwhile (hasNext()) {LiNeBrEaKnext();LiNeBrEaKremoveCurrent();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 386,
			"end_line": 403,
			"code_lines": "}LiNeBrEaKboolean hasNull(Object[] data) {LiNeBrEaKfor (int i = 0; i < visibleColumnCount; i++) {LiNeBrEaKif (data[i] == null) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic Object[] getGroupData(Object[] data) {LiNeBrEaKif (isSimpleAggregate) {LiNeBrEaKif (simpleAggregateData == null) {LiNeBrEaKsimpleAggregateData = data;LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKreturn simpleAggregateData;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementCompound.java|",
		"loc": "609",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.HashMappedList;LiNeBrEaK"
		}, {
			"start_line": 43,
			"end_line": 49,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementCompound');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 51,
			"end_line": 61,
			"code_lines": "}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKsb.append(Tokens.T_STATEMENT);LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 157,
			"end_line": 163,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementCompound');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 162,
			"end_line": 168,
			"code_lines": "}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 264,
			"end_line": 277,
			"code_lines": "for (int i = 0; i < statements.length; i++) {LiNeBrEaKresult = executeProtected(session, statements[i]);LiNeBrEaKresult = handleCondition(session, result);LiNeBrEaKif (result.isError()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.VALUE) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.DATA) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 294,
			"end_line": 300,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.DATA) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 319,
			"end_line": 341,
			"code_lines": "if (result.getType() == ResultConstants.VALUE) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.DATA) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.VALUE) {LiNeBrEaKif (result.getErrorCode() == StatementTypes.ITERATE) {LiNeBrEaKif (result.getMainString() == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (label != nullLiNeBrEaK&& label.name.equals(result.getMainString())) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getErrorCode() == StatementTypes.LEAVE) {LiNeBrEaK"
		}, {
			"start_line": 348,
			"end_line": 355,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.DATA) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 388,
			"end_line": 396,
			"code_lines": "result = executeProtected(session, statements[i]);LiNeBrEaKresult = handleCondition(session, result);LiNeBrEaKif (result.isError()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (result.getType() == ResultConstants.VALUE) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 602,
			"end_line": 608,
			"code_lines": "}LiNeBrEaKpublic void setCorrelated() {LiNeBrEaK}LiNeBrEaKpublic boolean isVariable() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SetFunction.java|",
		"loc": "471",
		"clones": [{
			"start_line": 255,
			"end_line": 261,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'SetFunction');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 278,
			"end_line": 291,
			"code_lines": "if (!NumberType.isInLongLimits(bi)) {LiNeBrEaKthrow Error.error(ErrorCode.X_22015);LiNeBrEaK}LiNeBrEaKif (((IntervalType) type).isDaySecondIntervalType()) {LiNeBrEaKreturn new IntervalSecondData(bi.longValue(),LiNeBrEaKcurrentLong,LiNeBrEaK(IntervalType) type,LiNeBrEaKtrue);LiNeBrEaK} else {LiNeBrEaKreturn IntervalMonthData.newIntervalMonth(LiNeBrEaKbi.longValue(), (IntervalType) type);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 289,
			"end_line": 296,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'SetFunction');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 350,
			"end_line": 357,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKcase OpTypes.SUM : {LiNeBrEaKswitch (typeCode) {LiNeBrEaKcase Types.TINYINT :LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ClientConnection.java|",
		"loc": "415",
		"clones": [{
			"start_line": 267,
			"end_line": 273,
			"code_lines": "null);LiNeBrEaKResult in = execute(resultOut);LiNeBrEaKif (in.isError()) {LiNeBrEaKthrow Error.error(in);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/FunctionCustom.java|",
		"loc": "3053",
		"clones": [{
			"start_line": 531,
			"end_line": 537,
			"code_lines": "parseList = new short[] {LiNeBrEaKTokens.OPENBRACKET, Tokens.QUESTION, Tokens.COMMA,LiNeBrEaKTokens.QUESTION, Tokens.X_OPTION, 2, Tokens.COMMA,LiNeBrEaKTokens.QUESTION, Tokens.CLOSEBRACKETLiNeBrEaK};LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 593,
			"end_line": 604,
			"code_lines": "parseList = new short[] {LiNeBrEaKTokens.OPENBRACKET, Tokens.X_KEYSET, 10,LiNeBrEaKTokens.SQL_TSI_FRAC_SECOND, Tokens.SQL_TSI_MILLI_SECOND,LiNeBrEaKTokens.SQL_TSI_SECOND, Tokens.SQL_TSI_MINUTE,LiNeBrEaKTokens.SQL_TSI_HOUR, Tokens.SQL_TSI_DAY,LiNeBrEaKTokens.SQL_TSI_WEEK, Tokens.SQL_TSI_MONTH,LiNeBrEaKTokens.SQL_TSI_QUARTER, Tokens.SQL_TSI_YEAR, Tokens.COMMA,LiNeBrEaKTokens.QUESTION, Tokens.COMMA, Tokens.QUESTION,LiNeBrEaKTokens.CLOSEBRACKETLiNeBrEaK};LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 1127,
			"end_line": 1136,
			"code_lines": "TimestampData ts;LiNeBrEaKif (nodes[0] == null) {LiNeBrEaKts = session.getCurrentTimestamp(true);LiNeBrEaK} else {LiNeBrEaKif (data[0] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKts = (TimestampData) data[0];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1253,
			"end_line": 1261,
			"code_lines": "int offset = 0;LiNeBrEaKif (data[0] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (nodes.length > 1) {LiNeBrEaKif (data[1] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1379,
			"end_line": 1385,
			"code_lines": "if (data[0] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKreturn dataType.convertToType(session, data[0],LiNeBrEaKnodes[0].dataType);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1683,
			"end_line": 1693,
			"code_lines": "if (data[0] == null || data[1] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKObject st = Type.SQL_VARCHAR.trim(session, data[1], ' ', true,LiNeBrEaKtrue);LiNeBrEaKst = Type.SQL_VARCHAR.upper(session, st);LiNeBrEaKst = Type.SQL_VARCHAR.convertToDefaultType(session, st);LiNeBrEaKint token    = Tokens.get((String) st);LiNeBrEaKint typeCode = IntervalType.getFieldNameTypeForToken(token);LiNeBrEaKswitch (typeCode) {LiNeBrEaK"
		}, {
			"start_line": 1755,
			"end_line": 1762,
			"code_lines": "}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2153,
			"end_line": 2159,
			"code_lines": "|| argType.typeCodeLiNeBrEaK== Types.SQL_TIMESTAMP_WITH_TIME_ZONE) {}LiNeBrEaKelse if (argType.isNumberType()) {}LiNeBrEaKelse {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2230,
			"end_line": 2236,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_DOUBLE;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isNumberType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2263,
			"end_line": 2269,
			"code_lines": "}LiNeBrEaKcase FUNC_BITAND :LiNeBrEaKcase FUNC_BITANDNOT :LiNeBrEaKcase FUNC_BITNOT :LiNeBrEaKcase FUNC_BITOR :LiNeBrEaKcase FUNC_BITXOR : {LiNeBrEaK"
		}, {
			"start_line": 2308,
			"end_line": 2314,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_VARCHAR;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2339,
			"end_line": 2345,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_VARCHAR;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2396,
			"end_line": 2402,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_VARCHAR;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2467,
			"end_line": 2477,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i].dataType == null) {LiNeBrEaKnodes[i].dataType = Type.SQL_VARCHAR;LiNeBrEaK} else if (!nodes[i].dataType.isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42561);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKdataType = Type.SQL_VARCHAR_DEFAULT;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2599,
			"end_line": 2607,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_TIMESTAMP_NO_FRACTION;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isDateOrTimestampType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaKdataType = Type.SQL_TIMESTAMP_NO_FRACTION;LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 2635,
			"end_line": 2641,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_TIMESTAMP_NO_FRACTION;LiNeBrEaK}LiNeBrEaKif (nodes[1].dataType == null) {LiNeBrEaKnodes[1].dataType = Type.SQL_VARCHAR;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2659,
			"end_line": 2671,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_DOUBLE;LiNeBrEaK}LiNeBrEaKif (nodes[1].dataType == null) {LiNeBrEaKnodes[1].dataType = Type.SQL_VARCHAR;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isNumberType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaKif (!nodes[1].dataType.isCharacterType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2943,
			"end_line": 2952,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (i > 0) {LiNeBrEaKsb.append(',');LiNeBrEaK}LiNeBrEaKsb.append(nodes[i].getSQL());LiNeBrEaK}LiNeBrEaKsb.append(')');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/DatabaseURL.java|",
		"loc": "224"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RangeGroup.java|",
		"loc": "54"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/GranteeManager.java|",
		"loc": "451",
		"clones": [{
			"start_line": 223,
			"end_line": 229,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKHsqlName name = dbObject.getName();LiNeBrEaKif (dbObject instanceof Routine) {LiNeBrEaKname = ((Routine) dbObject).getSpecificName();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 330,
			"end_line": 337,
			"code_lines": "if (map.containsKey(name.name)) {LiNeBrEaKthrow Error.error(ErrorCode.X_28503, name.name);LiNeBrEaK}LiNeBrEaKif (SqlInvariants.isLobsSchemaName(name.name)LiNeBrEaK|| SqlInvariants.isSystemSchemaName(name.name)) {LiNeBrEaKthrow Error.error(ErrorCode.X_28502, name.name);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 424,
			"end_line": 431,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKString[] array = new String[list.size()];LiNeBrEaKlist.toArray(array);LiNeBrEaKreturn array;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/GrantConstants.java|",
		"loc": "13"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/User.java|",
		"loc": "118"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/UserManager.java|",
		"loc": "243"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/Right.java|",
		"loc": "694",
		"clones": [{
			"start_line": 439,
			"end_line": 446,
			"code_lines": "if (isFull) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKswitch (privilegeType) {LiNeBrEaKcase GrantConstants.DELETE :LiNeBrEaKreturn isFullDelete;LiNeBrEaKcase GrantConstants.SELECT :LiNeBrEaK"
		}, {
			"start_line": 471,
			"end_line": 477,
			"code_lines": "case GrantConstants.EXECUTE :LiNeBrEaKreturn isFull;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Right');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/rights/Grantee.java|",
		"loc": "711",
		"clones": [{
			"start_line": 48,
			"end_line": 56,
			"code_lines": "}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaK"
		}, {
			"start_line": 57,
			"end_line": 67,
			"code_lines": "}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaK"
		}, {
			"start_line": 271,
			"end_line": 280,
			"code_lines": "if (rights.hasNext()) {LiNeBrEaKOrderedHashSet set = new OrderedHashSet();LiNeBrEaKwhile (rights.hasNext()) {LiNeBrEaKset.add(rights.next());LiNeBrEaK}LiNeBrEaKreturn set;LiNeBrEaK}LiNeBrEaKreturn Right.emptySet;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 294,
			"end_line": 300,
			"code_lines": "if (object instanceof Table) {LiNeBrEaKTable table = (Table) object;LiNeBrEaKif (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaK"
		}, {
			"start_line": 307,
			"end_line": 313,
			"code_lines": "if (object instanceof Table) {LiNeBrEaKTable table = (Table) object;LiNeBrEaKif (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaK"
		}, {
			"start_line": 320,
			"end_line": 326,
			"code_lines": "if (object instanceof Table) {LiNeBrEaKTable table = (Table) object;LiNeBrEaKif (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaK"
		}, {
			"start_line": 333,
			"end_line": 345,
			"code_lines": "if (object instanceof Table) {LiNeBrEaKTable table = (Table) object;LiNeBrEaKif (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaKif (right != null && right.canReference(table, checkList)) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKthrow Error.error(ErrorCode.X_42501, object.getName().name);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 346,
			"end_line": 352,
			"code_lines": "if (object instanceof Table) {LiNeBrEaKTable table = (Table) object;LiNeBrEaKif (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaK"
		}, {
			"start_line": 463,
			"end_line": 470,
			"code_lines": "if (isFullyAccessibleByRole(table.getName())) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKRight right = (Right) fullRightsMap.get(table.getName());LiNeBrEaKif (right == null) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 531,
			"end_line": 547,
			"code_lines": "if (existing == null) {LiNeBrEaKexisting = add.duplicate();LiNeBrEaKfullRightsMap.put(key, existing);LiNeBrEaK} else {LiNeBrEaKexisting.add(add);LiNeBrEaK}LiNeBrEaKif (add.grantableRights == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (existing.grantableRights == null) {LiNeBrEaKexisting.grantableRights = add.grantableRights.duplicate();LiNeBrEaK} else {LiNeBrEaKexisting.grantableRights.add(add.grantableRights);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionArithmetic.java|",
		"loc": "478",
		"clones": [{
			"start_line": 36,
			"end_line": 45,
			"code_lines": "}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKif (valueData == null) {LiNeBrEaKreturn Tokens.T_NULL;LiNeBrEaK}LiNeBrEaKif (dataType == null) {LiNeBrEaK"
		}, {
			"start_line": 77,
			"end_line": 95,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Expression');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKsb.append('VALUE = ').append(LiNeBrEaKdataType.convertToSQLString(valueData));LiNeBrEaKsb.append(', TYPE = ').append(dataType.getNameString());LiNeBrEaKreturn sb.toString();LiNeBrEaK"
		}, {
			"start_line": 126,
			"end_line": 146,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (getLeftNode() != null) {LiNeBrEaKsb.append(' arg_left=[');LiNeBrEaKsb.append(nodes[LEFT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKif (getRightNode() != null) {LiNeBrEaKsb.append(' arg_right=[');LiNeBrEaKsb.append(nodes[RIGHT].describe(session, blanks + 1));LiNeBrEaKsb.append(']');LiNeBrEaK}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic HsqlList resolveColumnReferences(Session session,LiNeBrEaKRangeGroup rangeGroup, int rangeCount, RangeGroup[] rangeGroups,LiNeBrEaKHsqlList unresolvedSet, boolean acceptsSequences) {LiNeBrEaKif (opType == OpTypes.VALUE) {LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 143,
			"end_line": 157,
			"code_lines": "if (opType == OpTypes.VALUE) {LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKunresolvedSet = nodes[i].resolveColumnReferences(session,LiNeBrEaKrangeGroup, rangeCount, rangeGroups, unresolvedSet,LiNeBrEaKacceptsSequences);LiNeBrEaK}LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaK"
		}, {
			"start_line": 153,
			"end_line": 165,
			"code_lines": "}LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 345,
			"end_line": 351,
			"code_lines": "}LiNeBrEaKif (nodes[LEFT].opType == OpTypes.VALUELiNeBrEaK&& nodes[RIGHT].opType == OpTypes.VALUE) {LiNeBrEaKsetAsConstantValue(session, parent);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 436,
			"end_line": 451,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic Object getValue(Session session) {LiNeBrEaKswitch (opType) {LiNeBrEaKcase OpTypes.VALUE :LiNeBrEaKreturn valueData;LiNeBrEaKcase OpTypes.SIMPLE_COLUMN : {LiNeBrEaKObject value =LiNeBrEaKsession.sessionContext.rangeIterators[rangePosition]LiNeBrEaK.getCurrent(columnIndex);LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaKcase OpTypes.NEGATE :LiNeBrEaKreturn ((NumberType) dataType).negate(LiNeBrEaKnodes[LEFT].getValue(session, nodes[LEFT].dataType));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SessionInterface.java|",
		"loc": "67"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Server.java|",
		"loc": "5"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementResultUpdate.java|",
		"loc": "149",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaK"
		}, {
			"start_line": 66,
			"end_line": 72,
			"code_lines": "row = getRow(session, args);LiNeBrEaKif (row == null || row.isDeleted(session, store)) {LiNeBrEaKthrow Error.error(ErrorCode.X_24521);LiNeBrEaK}LiNeBrEaKRowSetNavigatorDataChange list =LiNeBrEaKsession.sessionContext.getRowSetDataChange();LiNeBrEaK"
		}, {
			"start_line": 119,
			"end_line": 148,
			"code_lines": "switch (type) {LiNeBrEaKcase StatementTypes.CALL : {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase StatementTypes.INSERT : {LiNeBrEaKsession.getGrantee().checkInsert(targetTable,LiNeBrEaKinsertCheckColumns);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase StatementTypes.SELECT_CURSOR :LiNeBrEaKbreak;LiNeBrEaKcase StatementTypes.DELETE_WHERE : {LiNeBrEaKsession.getGrantee().checkDelete(targetTable);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase StatementTypes.UPDATE_WHERE : {LiNeBrEaKsession.getGrantee().checkUpdate(targetTable,LiNeBrEaKupdateCheckColumns);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase StatementTypes.MERGE : {LiNeBrEaKsession.getGrantee().checkInsert(targetTable,LiNeBrEaKinsertCheckColumns);LiNeBrEaKsession.getGrantee().checkUpdate(targetTable,LiNeBrEaKupdateCheckColumns);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/jdbcDriver.java|",
		"loc": "4"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TransactionManagerMV2PL.java|",
		"loc": "339",
		"clones": [{
			"start_line": 20,
			"end_line": 28,
			"code_lines": "}LiNeBrEaKpublic long getGlobalChangeTimestamp() {LiNeBrEaKreturn globalChangeTimestamp.get();LiNeBrEaK}LiNeBrEaKpublic boolean isMVRows() {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic boolean isMVCC() {LiNeBrEaK"
		}, {
			"start_line": 51,
			"end_line": 60,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic boolean commitTransaction(Session session) {LiNeBrEaKif (session.abortTransaction) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKint limit = session.rowActionList.size();LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 67,
			"code_lines": "session.actionTimestamp         = getNextGlobalChangeTimestamp();LiNeBrEaKsession.transactionEndTimestamp = session.actionTimestamp;LiNeBrEaKendTransaction(session);LiNeBrEaKfor (int i = 0; i < limit; i++) {LiNeBrEaKRowAction action = (RowAction) session.rowActionList.get(i);LiNeBrEaKaction.commit(session);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 66,
			"end_line": 84,
			"code_lines": "}LiNeBrEaKadjustLobUsage(session);LiNeBrEaKpersistCommit(session);LiNeBrEaKint newLimit = session.rowActionList.size();LiNeBrEaKif (newLimit > limit) {LiNeBrEaKObject[] list = session.rowActionList.getArray();LiNeBrEaKmergeTransaction(list, limit, newLimit,LiNeBrEaKsession.actionTimestamp);LiNeBrEaKfinaliseRows(session, list, limit, newLimit);LiNeBrEaKsession.rowActionList.setSize(limit);LiNeBrEaK}LiNeBrEaKif (session == lobSessionLiNeBrEaK|| getFirstLiveTransactionTimestamp()LiNeBrEaK> session.actionTimestamp) {LiNeBrEaKObject[] list = session.rowActionList.getArray();LiNeBrEaKmergeTransaction(list, 0, limit, session.actionTimestamp);LiNeBrEaKfinaliseRows(session, list, 0, limit);LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 92,
			"end_line": 103,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKpublic void rollback(Session session) {LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKsession.abortTransaction        = false;LiNeBrEaKsession.actionTimestamp         = getNextGlobalChangeTimestamp();LiNeBrEaKsession.transactionEndTimestamp = session.actionTimestamp;LiNeBrEaKrollbackPartial(session, 0, session.transactionTimestamp);LiNeBrEaKendTransaction(session);LiNeBrEaKendTransactionTPL(session);LiNeBrEaK"
		}, {
			"start_line": 103,
			"end_line": 121,
			"code_lines": "} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackSavepoint(Session session, int index) {LiNeBrEaKlong timestamp = session.sessionContext.savepointTimestamps.get(index);LiNeBrEaKInteger oi = (Integer) session.sessionContext.savepoints.get(index);LiNeBrEaKint     start  = oi.intValue();LiNeBrEaKwhile (session.sessionContext.savepoints.size() > index + 1) {LiNeBrEaKsession.sessionContext.savepoints.remove(LiNeBrEaKsession.sessionContext.savepoints.size() - 1);LiNeBrEaKsession.sessionContext.savepointTimestamps.removeLast();LiNeBrEaK}LiNeBrEaKrollbackPartial(session, start, timestamp);LiNeBrEaK}LiNeBrEaKpublic void rollbackAction(Session session) {LiNeBrEaKrollbackPartial(session, session.actionIndex,LiNeBrEaKsession.actionStartTimestamp);LiNeBrEaK"
		}, {
			"start_line": 122,
			"end_line": 148,
			"code_lines": "}LiNeBrEaKpublic void rollbackPartial(Session session, int start, long timestamp) {LiNeBrEaKint limit = session.rowActionList.size();LiNeBrEaKif (start == limit) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKfor (int i = start; i < limit; i++) {LiNeBrEaKRowAction action = (RowAction) session.rowActionList.get(i);LiNeBrEaKif (action == null) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.GENERAL_ERROR,LiNeBrEaK'null rollback action ');LiNeBrEaK}LiNeBrEaKaction.rollback(session, timestamp);LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKObject[] list = session.rowActionList.getArray();LiNeBrEaKmergeRolledBackTransaction(session, timestamp, list, start, limit);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaKsession.rowActionList.setSize(start);LiNeBrEaK}LiNeBrEaKpublic RowAction addDeleteAction(Session session, Table table,LiNeBrEaKPersistentStore store, Row row,LiNeBrEaKint[] colMap) {LiNeBrEaK"
		}, {
			"start_line": 162,
			"end_line": 168,
			"code_lines": "case TableBase.MEMORY_TABLE :LiNeBrEaKdefault :LiNeBrEaKaction = RowAction.addDeleteAction(session, table, row,LiNeBrEaKcolMap);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 166,
			"end_line": 174,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKsession.rowActionList.add(action);LiNeBrEaKreturn action;LiNeBrEaK}LiNeBrEaKpublic void addInsertAction(Session session, Table table,LiNeBrEaKPersistentStore store, Row row,LiNeBrEaKint[] changedColumns) {LiNeBrEaK"
		}, {
			"start_line": 181,
			"end_line": 187,
			"code_lines": "}LiNeBrEaKpublic boolean canRead(Session session, PersistentStore store, Row row,LiNeBrEaKint mode, int[] colMap) {LiNeBrEaKRowAction action = row.rowAction;LiNeBrEaKif (action == null) {LiNeBrEaKreturn true;LiNeBrEaK"
		}, {
			"start_line": 192,
			"end_line": 210,
			"code_lines": "}LiNeBrEaKpublic boolean canRead(Session session, PersistentStore store, long id,LiNeBrEaKint mode) {LiNeBrEaKif (store.getTable().tableType == TableBase.TEMP_TABLE) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKRowAction action = (RowAction) rowActionMap.get(id);LiNeBrEaKif (action == null) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn action.canRead(session, mode);LiNeBrEaK}LiNeBrEaKpublic void addTransactionInfo(CachedObject object) {LiNeBrEaKif (object.isMemory()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRow row = (Row) object;LiNeBrEaKif (row.getTable().tableType == TableBase.CACHED_TABLE) {LiNeBrEaK"
		}, {
			"start_line": 210,
			"end_line": 228,
			"code_lines": "rowActionMap.put(object.getPos(), row.rowAction);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void setTransactionInfo(PersistentStore store,LiNeBrEaKCachedObject object) {LiNeBrEaKif (object.isMemory()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKRow row = (Row) object;LiNeBrEaKif (row.getTable().tableType == TableBase.CACHED_TABLE) {LiNeBrEaKRowAction rowact = (RowAction) rowActionMap.get(row.getPos());LiNeBrEaKrow.rowAction = rowact;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void removeTransactionInfo(CachedObject object) {LiNeBrEaKif (object.isMemory()) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 229,
			"end_line": 252,
			"code_lines": "}LiNeBrEaKpublic void removeTransactionInfo(long id) {LiNeBrEaKrowActionMap.getWriteLock().lock();LiNeBrEaKtry {LiNeBrEaKRowAction action = (RowAction) rowActionMap.get(id);LiNeBrEaKsynchronized (action) {LiNeBrEaKif (action.type == RowActionBase.ACTION_NONE) {LiNeBrEaKrowActionMap.remove(id);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKrowActionMap.getWriteLock().unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid addToCommittedQueue(Session session, Object[] list) {LiNeBrEaKsynchronized (committedTransactionTimestamps) {LiNeBrEaKcommittedTransactions.addLast(list);LiNeBrEaKcommittedTransactionTimestamps.addLast(session.actionTimestamp);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKvoid mergeExpiredTransactions(Session session) {LiNeBrEaKlong timestamp = getFirstLiveTransactionTimestamp();LiNeBrEaKwhile (true) {LiNeBrEaK"
		}, {
			"start_line": 254,
			"end_line": 277,
			"code_lines": "synchronized (committedTransactionTimestamps) {LiNeBrEaKif (committedTransactionTimestamps.isEmpty()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcommitTimestamp = committedTransactionTimestamps.getFirst();LiNeBrEaKif (commitTimestamp < timestamp) {LiNeBrEaKcommittedTransactionTimestamps.removeFirst();LiNeBrEaKactions = (Object[]) committedTransactions.removeFirst();LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKmergeTransaction(actions, 0, actions.length, commitTimestamp);LiNeBrEaKfinaliseRows(session, actions, 0, actions.length);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void beginTransaction(Session session) {LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKif (!session.isTransaction) {LiNeBrEaKsession.actionTimestamp      = getNextGlobalChangeTimestamp();LiNeBrEaKsession.transactionTimestamp = session.actionTimestamp;LiNeBrEaKsession.isTransaction        = true;LiNeBrEaK"
		}, {
			"start_line": 280,
			"end_line": 286,
			"code_lines": "}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void beginAction(Session session, Statement cs) {LiNeBrEaK"
		}, {
			"start_line": 287,
			"end_line": 299,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKif (cs.getCompileTimestamp()LiNeBrEaK< database.schemaManager.getSchemaChangeTimestamp()) {LiNeBrEaKcs = session.statementManager.getStatement(session, cs);LiNeBrEaKsession.sessionContext.currentStatement = cs;LiNeBrEaKif (cs == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 309,
			"end_line": 328,
			"code_lines": "} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void beginActionResume(Session session) {LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKsession.actionTimestamp = getNextGlobalChangeTimestamp();LiNeBrEaKif (!session.isTransaction) {LiNeBrEaKsession.transactionTimestamp = session.actionTimestamp;LiNeBrEaKsession.isTransaction        = true;LiNeBrEaKliveTransactionTimestamps.addLast(LiNeBrEaKsession.transactionTimestamp);LiNeBrEaKtransactionCount++;LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 332,
			"end_line": 338,
			"code_lines": "if (index >= 0) {LiNeBrEaKtransactionCount--;LiNeBrEaKliveTransactionTimestamps.remove(index);LiNeBrEaKmergeExpiredTransactions(session);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/FunctionSQL.java|",
		"loc": "1587",
		"clones": [{
			"start_line": 432,
			"end_line": 439,
			"code_lines": "if (nodes[2] != nullLiNeBrEaK&& ((Number) nodes[2].valueData).intValue()LiNeBrEaK== Tokens.OCTETS) {LiNeBrEaKresult *= 2;LiNeBrEaK}LiNeBrEaKreturn ValuePool.getLong(result);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 514,
			"end_line": 520,
			"code_lines": "if (data[0] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (data[1] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 759,
			"end_line": 773,
			"code_lines": "if (data[0] == null || data[1] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKObject value;LiNeBrEaKvalue = Type.SQL_BIGINT.convertToType(session, data[1],LiNeBrEaKnodes[1].dataType);LiNeBrEaKlong offset = ((Number) value).longValue() - 1;LiNeBrEaKlong length = 0;LiNeBrEaKif (nodes[2] != null) {LiNeBrEaKif (data[2] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKvalue = Type.SQL_BIGINT.convertToType(session, data[2],LiNeBrEaKnodes[2].dataType);LiNeBrEaK"
		}, {
			"start_line": 786,
			"end_line": 799,
			"code_lines": "case Tokens.BOTH :LiNeBrEaKleading = trailing = true;LiNeBrEaKbreak;LiNeBrEaKcase Tokens.LEADING :LiNeBrEaKleading = true;LiNeBrEaKbreak;LiNeBrEaKcase Tokens.TRAILING :LiNeBrEaKtrailing = true;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'FunctionSQL');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 810,
			"end_line": 826,
			"code_lines": "if (data[0] == null || data[1] == null || data[2] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKObject value;LiNeBrEaKvalue = Type.SQL_BIGINT.convertToType(session, data[2],LiNeBrEaKnodes[2].dataType);LiNeBrEaKlong offset = ((Number) value).longValue() - 1;LiNeBrEaKlong length = 0;LiNeBrEaKif (nodes[3] != null) {LiNeBrEaKif (data[3] == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKvalue = Type.SQL_BIGINT.convertToType(session, data[3],LiNeBrEaKnodes[3].dataType);LiNeBrEaKlength = ((Number) value).longValue();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 868,
			"end_line": 880,
			"code_lines": "default :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'FunctionSQL');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKswitch (funcType) {LiNeBrEaKcase FUNC_POSITION_CHAR :LiNeBrEaK"
		}, {
			"start_line": 918,
			"end_line": 924,
			"code_lines": "throw Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKdataType = Type.SQL_BIGINT;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 959,
			"end_line": 967,
			"code_lines": "}LiNeBrEaKif (!nodes[0].dataType.isCharacterType()LiNeBrEaK&& !nodes[0].dataType.isBinaryType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaKdataType = Type.SQL_BIGINT;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 968,
			"end_line": 974,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_42567);LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isArrayType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 978,
			"end_line": 987,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_42567);LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isArrayType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaKdataType = Type.SQL_INTEGER;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 988,
			"end_line": 994,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_42567);LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isArrayType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1004,
			"end_line": 1011,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = nodes[1].dataType;LiNeBrEaK}LiNeBrEaKif (nodes[1].dataType == null) {LiNeBrEaKnodes[1].dataType = nodes[0].dataType;LiNeBrEaK}LiNeBrEaKif (nodes[0].dataType == null) {LiNeBrEaK"
		}, {
			"start_line": 1025,
			"end_line": 1038,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = nodes[1].dataType;LiNeBrEaK}LiNeBrEaKif (nodes[1].dataType == null) {LiNeBrEaKnodes[1].dataType = nodes[0].dataType;LiNeBrEaK}LiNeBrEaKif (nodes[0].dataType == null) {LiNeBrEaKthrow Error.error(ErrorCode.X_42567);LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isNumberType()LiNeBrEaK|| !nodes[1].dataType.isNumberType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1064,
			"end_line": 1070,
			"code_lines": "if (nodes[0].dataType == null) {LiNeBrEaKnodes[0].dataType = Type.SQL_DOUBLE;LiNeBrEaK}LiNeBrEaKif (!nodes[0].dataType.isNumberType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1196,
			"end_line": 1203,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKif (nodes[1].dataType == null) {LiNeBrEaKif (nodes[0].dataType.typeCode == Types.SQL_CLOBLiNeBrEaK|| nodes[0].dataType.isBinaryType()) {LiNeBrEaKnodes[1].dataType = nodes[0].dataType;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 1247,
			"end_line": 1255,
			"code_lines": "if (nodes[2].dataType == null) {LiNeBrEaKnodes[2].dataType = Type.SQL_NUMERIC;LiNeBrEaK}LiNeBrEaKif (!nodes[2].dataType.isNumberType()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42563);LiNeBrEaK}LiNeBrEaKnodes[2].dataType =LiNeBrEaK((NumberType) nodes[2].dataType).getIntegralType();LiNeBrEaK"
		}, {
			"start_line": 1323,
			"end_line": 1331,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'FunctionSQL');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getSQL() {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaK"
		}, {
			"start_line": 1480,
			"end_line": 1486,
			"code_lines": "sb.append(' ').append(Tokens.T_USING).append(LiNeBrEaK' ').append(Tokens.T_OCTETS);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKsb.append(')');LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 1506,
			"end_line": 1516,
			"code_lines": "case FUNC_CURRENT_CATALOG :LiNeBrEaKcase FUNC_CURRENT_DEFAULT_TRANSFORM_GROUP :LiNeBrEaKcase FUNC_CURRENT_PATH :LiNeBrEaKcase FUNC_CURRENT_ROLE :LiNeBrEaKcase FUNC_CURRENT_SCHEMA :LiNeBrEaKcase FUNC_CURRENT_TRANSFORM_GROUP_FOR_TYPE :LiNeBrEaKcase FUNC_CURRENT_USER :LiNeBrEaKcase FUNC_SESSION_USER :LiNeBrEaKcase FUNC_SYSTEM_USER :LiNeBrEaKcase FUNC_USER :LiNeBrEaK"
		}, {
			"start_line": 1540,
			"end_line": 1546,
			"code_lines": "return name;LiNeBrEaK}LiNeBrEaKsb.append(name).append(Tokens.T_OPENBRACKET).append(precision);LiNeBrEaKsb.append(Tokens.T_CLOSEBRACKET);LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementProcedure.java|",
		"loc": "235",
		"clones": [{
			"start_line": 169,
			"end_line": 175,
			"code_lines": "}LiNeBrEaKTableDerived[] getSubqueries(Session session) {LiNeBrEaKOrderedHashSet subQueries = null;LiNeBrEaKif (expression != null) {LiNeBrEaKsubQueries = expression.collectAllSubqueries(subQueries);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 177,
			"end_line": 188,
			"code_lines": "}LiNeBrEaKif (subQueries == null || subQueries.size() == 0) {LiNeBrEaKreturn TableDerived.emptyArray;LiNeBrEaK}LiNeBrEaKTableDerived[] subQueryArray = new TableDerived[subQueries.size()];LiNeBrEaKsubQueries.toArray(subQueryArray);LiNeBrEaKfor (int i = 0; i < subqueries.length; i++) {LiNeBrEaKsubQueryArray[i].prepareTable();LiNeBrEaK}LiNeBrEaKreturn subQueryArray;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 206,
			"end_line": 212,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'StatementProcedure');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 219,
			"end_line": 228,
			"code_lines": "for (int i = 0; i < subqueries.length; i++) {LiNeBrEaKif (subqueries[i].queryExpression != null) {LiNeBrEaKsubqueries[i].queryExpression.getBaseTableNames(set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKfor (int i = 0; i < routines.length; i++) {LiNeBrEaKset.addAll(routines[i].getTableNamesForRead());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowAVLDiskData.java|",
		"loc": "122",
		"clones": [{
			"start_line": 63,
			"end_line": 71,
			"code_lines": "}LiNeBrEaKpublic NodeAVL insertNode(int index) {LiNeBrEaKNodeAVL backnode = getNode(index - 1);LiNeBrEaKNodeAVL newnode  = new NodeAVL(this);LiNeBrEaKnewnode.nNext  = backnode.nNext;LiNeBrEaKbacknode.nNext = newnode;LiNeBrEaKreturn newnode;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 98,
			"code_lines": "}LiNeBrEaKpublic void updateAccessCount(int count) {LiNeBrEaKaccessCount = count;LiNeBrEaK}LiNeBrEaKpublic int getAccessCount() {LiNeBrEaKreturn accessCount;LiNeBrEaK}LiNeBrEaKpublic int getStorageSize() {LiNeBrEaKreturn storageSize;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Session.java|",
		"loc": "1447",
		"clones": [{
			"start_line": 323,
			"end_line": 329,
			"code_lines": "if (isClosed) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (sessionContext.depth > 0) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 797,
			"end_line": 803,
			"code_lines": "}LiNeBrEaKif (abortTransaction) {LiNeBrEaKrollback(false);LiNeBrEaKsessionContext.currentStatement = null;LiNeBrEaKreturn Result.newErrorResult(Error.error(ErrorCode.X_40001));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 919,
			"end_line": 932,
			"code_lines": "updateCounts[count++] = in.getUpdateCount();LiNeBrEaK} else if (in.isData()) {LiNeBrEaKupdateCounts[count++] = ResultConstants.SUCCESS_NO_INFO;LiNeBrEaK} else if (in.mode == ResultConstants.CALL_RESPONSE) {LiNeBrEaKupdateCounts[count++] = ResultConstants.SUCCESS_NO_INFO;LiNeBrEaK} else if (in.mode == ResultConstants.ERROR) {LiNeBrEaKupdateCounts = ArrayUtil.arraySlice(updateCounts, 0, count);LiNeBrEaKerror        = in;LiNeBrEaKbreak;LiNeBrEaK} else {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Session');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1290,
			"end_line": 1302,
			"code_lines": "}LiNeBrEaKreturn calendar;LiNeBrEaK}LiNeBrEaKpublic Calendar getCalendarGMT() {LiNeBrEaKif (calendarGMT == null) {LiNeBrEaKcalendarGMT = new GregorianCalendar(TimeZone.getTimeZone('GMT'));LiNeBrEaK}LiNeBrEaKreturn calendarGMT;LiNeBrEaK}LiNeBrEaKpublic SimpleDateFormat getSimpleDateFormatGMT() {LiNeBrEaKif (simpleDateFormatGMT == null) {LiNeBrEaKsimpleDateFormatGMT = new SimpleDateFormat('MMMM', Locale.ENGLISH);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionTable.java|",
		"loc": "169",
		"clones": [{
			"start_line": 24,
			"end_line": 32,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer(64);LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 39,
			"end_line": 46,
			"code_lines": "}LiNeBrEaKpublic void resolveTypes(Session session, Expression parent) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 84,
			"end_line": 90,
			"code_lines": "RowSetNavigatorData navigator = table.getNavigator(session);LiNeBrEaKResult              result    = Result.newResult(navigator);LiNeBrEaKresult.metaData = table.queryExpression.getMetaData();LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 94,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'ExpressionTable');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 97,
			"end_line": 103,
			"code_lines": "return table.queryExpression.getValues(session);LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Expression');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 107,
			"end_line": 118,
			"code_lines": "Object[] value = table.getValues(session);LiNeBrEaKif (value.length == 1) {LiNeBrEaKreturn ((Object[]) value)[0];LiNeBrEaK}LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Expression');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic Object getValue(Session session) {LiNeBrEaK"
		}, {
			"start_line": 134,
			"end_line": 140,
			"code_lines": "Row row = (Row) store.getNewCachedObject(session, data, false);LiNeBrEaKtry {LiNeBrEaKstore.indexRow(session, row);LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/View.java|",
		"loc": "161",
		"clones": [{
			"start_line": 56,
			"end_line": 62,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'View');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic String getSQL() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferTable.java|",
		"loc": "297",
		"clones": [{
			"start_line": 87,
			"end_line": 100,
			"code_lines": "nextsemicolon);LiNeBrEaKwhile (Statement.charAt(Statement.length() - 1) == ';') {LiNeBrEaKStatement = Statement.substring(0, Statement.length()LiNeBrEaK- 1);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKtracer.trace('Executing ' + Statement);LiNeBrEaKdestDb.execute(Statement);LiNeBrEaK} catch (Exception e) {LiNeBrEaKtracer.trace('Ignoring error ' + e.getMessage());LiNeBrEaK}LiNeBrEaKlastsemicolon = nextsemicolon + 1;LiNeBrEaKnextsemicolon = lastsemicolonLiNeBrEaK"
		}, {
			"start_line": 113,
			"end_line": 126,
			"code_lines": "nextsemicolon);LiNeBrEaKwhile (Statement.charAt(Statement.length() - 1) == ';') {LiNeBrEaKStatement = Statement.substring(0, Statement.length()LiNeBrEaK- 1);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKtracer.trace('Executing ' + Statement);LiNeBrEaKdestDb.execute(Statement);LiNeBrEaK} catch (Exception e) {LiNeBrEaKtracer.trace('Ignoring error ' + e.getMessage());LiNeBrEaK}LiNeBrEaKlastsemicolon = nextsemicolon + 1;LiNeBrEaKnextsemicolon = lastsemicolonLiNeBrEaK"
		}, {
			"start_line": 188,
			"end_line": 195,
			"code_lines": "if (!destDb.getAutoCommit()) {LiNeBrEaKdestDb.commit();LiNeBrEaKtry {LiNeBrEaKdestDb.setAutoCommit(true);LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 193,
			"end_line": 210,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} catch (Exception e) {LiNeBrEaKtry {LiNeBrEaKif (!destDb.getAutoCommit()) {LiNeBrEaKdestDb.rollback();LiNeBrEaK}LiNeBrEaK} catch (Exception e1) {}LiNeBrEaKthrow (e);LiNeBrEaK}LiNeBrEaKif (!destDb.getAutoCommit()) {LiNeBrEaKdestDb.commit();LiNeBrEaKtry {LiNeBrEaKdestDb.setAutoCommit(true);LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 211,
			"end_line": 223,
			"code_lines": "String Statement = new String('');LiNeBrEaKif (destDb.helper.needTransferTransaction()) {LiNeBrEaKtry {LiNeBrEaKdestDb.setAutoCommit(false);LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaKif (Stmts.bTransfer == false) {LiNeBrEaKtracer.trace('Table ' + Stmts.sSourceTable + ' not transfered');LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtracer.trace('Table ' + Stmts.sSourceTable + ': start alter');LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 232,
			"end_line": 238,
			"code_lines": "nextsemicolon);LiNeBrEaKwhile (Statement.charAt(Statement.length() - 1) == ';') {LiNeBrEaKStatement = Statement.substring(0, Statement.length()LiNeBrEaK- 1);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 239,
			"end_line": 245,
			"code_lines": "destDb.execute(Statement);LiNeBrEaK} catch (Exception e) {LiNeBrEaKtracer.trace('Ignoring error ' + e.getMessage());LiNeBrEaK}LiNeBrEaKlastsemicolon = nextsemicolon + 1;LiNeBrEaKnextsemicolon = lastsemicolonLiNeBrEaK"
		}, {
			"start_line": 258,
			"end_line": 271,
			"code_lines": "nextsemicolon);LiNeBrEaKwhile (Statement.charAt(Statement.length() - 1) == ';') {LiNeBrEaKStatement = Statement.substring(0, Statement.length()LiNeBrEaK- 1);LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKtracer.trace('Executing ' + Statement);LiNeBrEaKdestDb.execute(Statement);LiNeBrEaK} catch (Exception e) {LiNeBrEaKtracer.trace('Ignoring error ' + e.getMessage());LiNeBrEaK}LiNeBrEaKlastsemicolon = nextsemicolon + 1;LiNeBrEaKnextsemicolon = lastsemicolonLiNeBrEaK"
		}, {
			"start_line": 272,
			"end_line": 290,
			"code_lines": "lastsemicolon).indexOf(';');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK} catch (Exception e) {LiNeBrEaKtry {LiNeBrEaKif (!destDb.getAutoCommit()) {LiNeBrEaKdestDb.rollback();LiNeBrEaK}LiNeBrEaK} catch (Exception e1) {}LiNeBrEaKthrow (e);LiNeBrEaK}LiNeBrEaKif (!destDb.getAutoCommit()) {LiNeBrEaKdestDb.commit();LiNeBrEaKtry {LiNeBrEaKdestDb.setAutoCommit(true);LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/DataAccessPoint.java|",
		"loc": "72"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/FontDialogSwing.java|",
		"loc": "196"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/McKoiTransferHelper.java|",
		"loc": "34"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/HelperFactory.java|",
		"loc": "26"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/DatabaseManagerCommon.java|",
		"loc": "247",
		"clones": [{
			"start_line": 65,
			"end_line": 74,
			"code_lines": "+ 'SET FILES CHECKPOINT DEFRAG <size>n'LiNeBrEaK+ 'SET DATABASE INITIAL SCHEMA <schemaname>n'LiNeBrEaK+ 'SET FILES LOG SIZE <size>n'LiNeBrEaK+ 'SET MAXROWS maxrowsn'LiNeBrEaK+ 'SET PASSWORD <password>n'LiNeBrEaK+ 'SET FILES READ { ONLY | WRITE }n'LiNeBrEaK+ 'SET SCHEMA <schemaname>n'LiNeBrEaK+ 'SET TABLE <tablename> READ { ONLY | WRITE }n'LiNeBrEaK+ 'SET TABLE <tablename> SOURCE { ON | OFF }n'LiNeBrEaK"
		}, {
			"start_line": 87,
			"end_line": 93,
			"code_lines": "'This test script is parsed by the DatabaseManagern'LiNeBrEaK+ 'It may be changed manually. Rules:n'LiNeBrEaK+ '- it must start with -->>>TEST<<<--.n'LiNeBrEaK+ '- each line must end with ';' (no spaces after)n'LiNeBrEaK+ '- lines starting with -- are commentsn'LiNeBrEaK+ '- lines starting with --#<count> means set new countn'LiNeBrEaK"
		}, {
			"start_line": 95,
			"end_line": 102,
			"code_lines": "'SELECT * FROM Product',LiNeBrEaK'SELECT * FROM Invoice',LiNeBrEaK'SELECT * FROM Item',LiNeBrEaK'SELECT * FROM Customer a INNER JOIN Invoice i ON a.ID=i.CustomerID',LiNeBrEaK'SELECT * FROM Customer a LEFT OUTER JOIN Invoice i ON a.ID=i.CustomerID',LiNeBrEaK'SELECT * FROM Invoice d INNER JOIN Item i ON d.ID=i.InvoiceID',LiNeBrEaK'SELECT * FROM Customer WHERE Street LIKE '1%' ORDER BY Lastname',LiNeBrEaK"
		}, {
			"start_line": 125,
			"end_line": 132,
			"code_lines": "'CREATE TABLE Item(InvoiceID INTEGER,Item INTEGER,'LiNeBrEaK+ 'ProductID INTEGER,Quantity INTEGER,Cost DECIMAL(10,2),'LiNeBrEaK+ 'PRIMARY KEY(InvoiceID,Item), 'LiNeBrEaK+ 'FOREIGN KEY (InvoiceId) REFERENCES 'LiNeBrEaK+ 'Invoice (ID) ON DELETE CASCADE, FOREIGN KEY (ProductId) 'LiNeBrEaK+ 'REFERENCES Product(ID) ON DELETE CASCADE);'LiNeBrEaK};LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/HsqldbTransferHelper.java|",
		"loc": "53"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/Tree.java|",
		"loc": "254",
		"clones": [{
			"start_line": 215,
			"end_line": 228,
			"code_lines": "String   folder = s[2];LiNeBrEaKint      ci     = currentindent;LiNeBrEaKfor (; ci > 0; ci--) {LiNeBrEaKif (key.startsWith(root[ci])) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (root[ci].length() < key.length()) {LiNeBrEaKci++;LiNeBrEaK}LiNeBrEaKif (closed && ci > currentindent) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/OracleTransferHelper.java|",
		"loc": "106"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/Traceable.java|",
		"loc": "6"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/MainInvoker.java|",
		"loc": "70",
		"clones": [{
			"start_line": 46,
			"end_line": 54,
			"code_lines": "+ '    java org.hsqldb.util.MainInvoker --helpnn'LiNeBrEaK+ 'Note that you can only invoke classes in 'named' (non-default) 'LiNeBrEaK+ 'packages.  Delimit multiple classes with empty strings.';LiNeBrEaKstatic {LiNeBrEaKif (!LS.equals('n')) {LiNeBrEaKSYNTAX_MSG = SYNTAX_MSG.replaceAll('n', LS);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferHelper.java|",
		"loc": "128"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/ConnectionDialog.java|",
		"loc": "224"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/Grid.java|",
		"loc": "279",
		"clones": [{
			"start_line": 5,
			"end_line": 14,
			"code_lines": "import java.awt.Dimension;LiNeBrEaKimport java.awt.Event;LiNeBrEaKimport java.awt.Font;LiNeBrEaKimport java.awt.FontMetrics;LiNeBrEaKimport java.awt.Graphics;LiNeBrEaKimport java.awt.Image;LiNeBrEaKimport java.awt.Panel;LiNeBrEaKimport java.awt.Scrollbar;LiNeBrEaKimport java.awt.SystemColor;LiNeBrEaK"
		}, {
			"start_line": 36,
			"end_line": 42,
			"code_lines": "setLayout(null);LiNeBrEaKsbHoriz = new Scrollbar(Scrollbar.HORIZONTAL);LiNeBrEaKadd(sbHoriz);LiNeBrEaKsbVert = new Scrollbar(Scrollbar.VERTICAL);LiNeBrEaKadd(sbVert);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 47,
			"end_line": 63,
			"code_lines": "}LiNeBrEaKpublic void setMinimumSize(Dimension d) {LiNeBrEaKdMinimum = d;LiNeBrEaK}LiNeBrEaKpublic void setBounds(int x, int y, int w, int h) {LiNeBrEaKsuper.setBounds(x, y, w, h);LiNeBrEaKiSbHeight = sbHoriz.getPreferredSize().height;LiNeBrEaKiSbWidth  = sbVert.getPreferredSize().width;LiNeBrEaKiHeight   = h - iSbHeight;LiNeBrEaKiWidth    = w - iSbWidth;LiNeBrEaKsbHoriz.setBounds(0, iHeight, iWidth, iSbHeight);LiNeBrEaKsbVert.setBounds(iWidth, 0, iSbWidth, iHeight);LiNeBrEaKadjustScroll();LiNeBrEaKiImage = null;LiNeBrEaKrepaint();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 88,
			"end_line": 94,
			"code_lines": "}LiNeBrEaKpublic void update() {LiNeBrEaKadjustScroll();LiNeBrEaKrepaint();LiNeBrEaK}LiNeBrEaKvoid adjustScroll() {LiNeBrEaK"
		}, {
			"start_line": 104,
			"end_line": 125,
			"code_lines": "int v = iY / iRowHeight,LiNeBrEaKh = iHeight / iRowHeight;LiNeBrEaKsbVert.setValues(v, h, 0, iRowCount + 1);LiNeBrEaKiX = sbHoriz.getValue();LiNeBrEaKiY = iRowHeight * sbVert.getValue();LiNeBrEaK}LiNeBrEaKpublic boolean handleEvent(Event e) {LiNeBrEaKswitch (e.id) {LiNeBrEaKcase Event.SCROLL_LINE_UP :LiNeBrEaKcase Event.SCROLL_LINE_DOWN :LiNeBrEaKcase Event.SCROLL_PAGE_UP :LiNeBrEaKcase Event.SCROLL_PAGE_DOWN :LiNeBrEaKcase Event.SCROLL_ABSOLUTE :LiNeBrEaKiX = sbHoriz.getValue();LiNeBrEaKiY = iRowHeight * sbVert.getValue();LiNeBrEaKrepaint();LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKreturn super.handleEvent(e);LiNeBrEaK}LiNeBrEaKpublic void paint(Graphics g) {LiNeBrEaK"
		}, {
			"start_line": 133,
			"end_line": 141,
			"code_lines": "return;LiNeBrEaK}LiNeBrEaKg.setColor(SystemColor.control);LiNeBrEaKg.fillRect(iWidth, iHeight, iSbWidth, iSbHeight);LiNeBrEaKif (iImage == null) {LiNeBrEaKiImage = createImage(iWidth, iHeight);LiNeBrEaKgImage = iImage.getGraphics();LiNeBrEaKgImage.setFont(fFont);LiNeBrEaK"
		}, {
			"start_line": 200,
			"end_line": 206,
			"code_lines": "}LiNeBrEaKg.drawImage(iImage, 0, 0, this);LiNeBrEaK}LiNeBrEaKpublic void update(Graphics g) {LiNeBrEaKpaint(g);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 247,
			"end_line": 260,
			"code_lines": "}LiNeBrEaKpublic Dimension preferredSize() {LiNeBrEaKreturn dMinimum;LiNeBrEaK}LiNeBrEaKpublic Dimension getPreferredSize() {LiNeBrEaKreturn dMinimum;LiNeBrEaK}LiNeBrEaKpublic Dimension getMinimumSize() {LiNeBrEaKreturn dMinimum;LiNeBrEaK}LiNeBrEaKpublic Dimension minimumSize() {LiNeBrEaKreturn dMinimum;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/SqlServerTransferHelper.java|",
		"loc": "67"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/CommonSwing.java|",
		"loc": "107",
		"clones": [{
			"start_line": 22,
			"end_line": 51,
			"code_lines": "return (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('hsqldb.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('Execute')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('run_exc.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('StatusRunning')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('RedCircle.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('StatusReady')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('GreenCircle.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('Clear')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('Clear.png')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('Problem')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('problems.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('BoldFont')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('Bold.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('ItalicFont')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('Italic.gif')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('ColorSelection')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('Colors.png')).getImage());LiNeBrEaK} else if (target.equalsIgnoreCase('Close')) {LiNeBrEaKreturn (new ImageIcon(LiNeBrEaKCommonSwing.class.getResource('Close.png')).getImage());LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/Transfer.java|",
		"loc": "828",
		"clones": [{
			"start_line": 20,
			"end_line": 28,
			"code_lines": "import java.awt.Panel;LiNeBrEaKimport java.awt.SystemColor;LiNeBrEaKimport java.awt.TextField;LiNeBrEaKimport java.awt.Toolkit;LiNeBrEaKimport java.awt.event.ActionEvent;LiNeBrEaKimport java.awt.event.ActionListener;LiNeBrEaKimport java.awt.event.ItemEvent;LiNeBrEaKimport java.awt.event.ItemListener;LiNeBrEaK"
		}, {
			"start_line": 168,
			"end_line": 182,
			"code_lines": "bStart.setLabel('Select Schema: Source');LiNeBrEaK} else {LiNeBrEaKbStart.setLabel('Select Schema: Destination');LiNeBrEaK}LiNeBrEaKbStart.invalidate();LiNeBrEaKbStart.setEnabled(true);LiNeBrEaKfor (Enumeration e =LiNeBrEaKresult.elements(); e.hasMoreElements(); ) {LiNeBrEaKlTable.add(e.nextElement().toString());LiNeBrEaK}LiNeBrEaKlTable.repaint();LiNeBrEaKtrace('Select correct Schema or load Settings file');LiNeBrEaK} else {LiNeBrEaKif (result.size() == 1) {LiNeBrEaK"
		}, {
			"start_line": 200,
			"end_line": 210,
			"code_lines": "ProcessNextStep();LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK} catch (Exception exp) {LiNeBrEaKlTable.removeAll();LiNeBrEaKtrace('Exception reading schemas: ' + exp);LiNeBrEaKexp.printStackTrace();LiNeBrEaK}LiNeBrEaKreturn (lTable.getItemCount() > 0);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 294,
			"end_line": 301,
			"code_lines": "f.show();LiNeBrEaKString sFileName = f.getFile();LiNeBrEaKString Path      = f.getDirectory();LiNeBrEaKif ((sFileName == null) || (sFileName.equals(''))) {LiNeBrEaKexit();LiNeBrEaKreturn;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 541,
			"end_line": 548,
			"code_lines": "}LiNeBrEaKif (iTransferMode == TRFM_DUMP) {LiNeBrEaKiSelectionStep = Transfer.SELECT_SOURCE_TABLES;LiNeBrEaK} else {LiNeBrEaKiSelectionStep++;LiNeBrEaK}LiNeBrEaKProcessNextStep();LiNeBrEaK"
		}, {
			"start_line": 718,
			"end_line": 725,
			"code_lines": "Panel p = new Panel();LiNeBrEaKp.setBackground(SystemColor.control);LiNeBrEaKp.setLayout(new BorderLayout());LiNeBrEaKp.add('Center', center);LiNeBrEaKp.add('South', createLabel(''));LiNeBrEaKp.add('East', createLabel(''));LiNeBrEaKp.add('West', createLabel(''));LiNeBrEaK"
		}, {
			"start_line": 722,
			"end_line": 728,
			"code_lines": "p.add('South', createLabel(''));LiNeBrEaKp.add('East', createLabel(''));LiNeBrEaKp.add('West', createLabel(''));LiNeBrEaKp.setBackground(SystemColor.control);LiNeBrEaKreturn p;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/DatabaseManagerSwing.java|",
		"loc": "2118",
		"clones": [{
			"start_line": 448,
			"end_line": 459,
			"code_lines": "'Usage: java DatabaseManagerSwing [--options]n'LiNeBrEaK+ 'where options include:n'LiNeBrEaK+ '    --help                show this messagen'LiNeBrEaK+ '    --driver <classname>  jdbc driver classn'LiNeBrEaK+ '    --url <name>          jdbc urln'LiNeBrEaK+ '    --user <name>         username used for connectionn'LiNeBrEaK+ '    --password <password> password for this usern'LiNeBrEaK+ '    --urlid <urlid>       use url/user/password/driver in rc filen'LiNeBrEaK+ '    --rcfile <file>       (defaults to 'dbmanager.rc' in home dir)n'LiNeBrEaK+ '    --dir <path>          default directoryn'LiNeBrEaK+ '    --script <file>       reads from script filen'LiNeBrEaK"
		}, {
			"start_line": 804,
			"end_line": 819,
			"code_lines": "+ ' ..................... n'LiNeBrEaK+ '............... Click Execute or Clear 'LiNeBrEaK+ '...................n'LiNeBrEaK+ sqlScriptBuffer.substring(0, eoThirdLine + 1)LiNeBrEaK+ '.........................................'LiNeBrEaK+ '................................n'LiNeBrEaK+ '...........................................'LiNeBrEaK+ '..............................n');LiNeBrEaKtxtCommand.setEnabled(false);LiNeBrEaK} else {LiNeBrEaKtxtCommand.setText(sqlScriptBuffer);LiNeBrEaKsqlScriptBuffer = null;LiNeBrEaKtxtCommand.setEnabled(true);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 820,
			"end_line": 826,
			"code_lines": "} else if (s.equals('Save Script...')) {LiNeBrEaKJFileChooser f = new JFileChooser('.');LiNeBrEaKf.setDialogTitle('Save Script');LiNeBrEaKif (defDirectory != null) {LiNeBrEaKf.setCurrentDirectory(new File(defDirectory));LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 832,
			"end_line": 844,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} else if (s.equals('Save Result...')) {LiNeBrEaKJFileChooser f = new JFileChooser('.');LiNeBrEaKf.setDialogTitle('Save Result...');LiNeBrEaKif (defDirectory != null) {LiNeBrEaKf.setCurrentDirectory(new File(defDirectory));LiNeBrEaK}LiNeBrEaKint option = f.showSaveDialog((Component) fMain);LiNeBrEaKif (option == JFileChooser.APPROVE_OPTION) {LiNeBrEaKFile file = f.getSelectedFile();LiNeBrEaKif (file != null) {LiNeBrEaK"
		}, {
			"start_line": 881,
			"end_line": 888,
			"code_lines": "showHelp(new String[] {LiNeBrEaK'', 'ROLLBACK executed'LiNeBrEaK});LiNeBrEaK} catch (SQLException e) {LiNeBrEaKCommonSwing.errorMessage(e);LiNeBrEaK}LiNeBrEaK} else if (s.equals('Disable MaxRows')) {LiNeBrEaK"
		}, {
			"start_line": 920,
			"end_line": 927,
			"code_lines": "showHelp(new String[] {LiNeBrEaK'', 'CHECKPOINT executed'LiNeBrEaK});LiNeBrEaK} catch (SQLException e) {LiNeBrEaKCommonSwing.errorMessage(e);LiNeBrEaK}LiNeBrEaK} else if (s.equals('SCRIPT')) {LiNeBrEaK"
		}, {
			"start_line": 1136,
			"end_line": 1143,
			"code_lines": "} catch (RuntimeException re) {LiNeBrEaKCommonSwing.errorMessage(re);LiNeBrEaKthrow re;LiNeBrEaK} finally {LiNeBrEaKsetWaiting(null);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1390,
			"end_line": 1396,
			"code_lines": "if (alreadyHandled == e) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKhandlePopup(e);LiNeBrEaKalreadyHandled = e;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1496,
			"end_line": 1517,
			"code_lines": "String result = 'DELETE FROM ' + quoteTableName(table);LiNeBrEaKif (column != null) {LiNeBrEaKDefaultMutableTreeNode childNode =LiNeBrEaK(DefaultMutableTreeNode) treePathLiNeBrEaK.getLastPathComponent();LiNeBrEaKString  childName = null;LiNeBrEaKboolean isChar;LiNeBrEaKif (childNode.getChildCount() > 0) {LiNeBrEaKchildName = childNode.getFirstChild().toString();LiNeBrEaKisChar    = childName.indexOf('CHAR') >= 0;LiNeBrEaKresult    += ' WHERE ' + quoteObjectName(column);LiNeBrEaKif (isChar) {LiNeBrEaKresult += ' LIKE '%%'';LiNeBrEaK} else {LiNeBrEaKresult += ' = ';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKelse if (command.toUpperCase().equals('INSERT')) {LiNeBrEaK"
		}, {
			"start_line": 1652,
			"end_line": 1658,
			"code_lines": "private static final String[] oracleSysSchemas = {LiNeBrEaK'SYS', 'SYSTEM', 'OUTLN', 'DBSNMP', 'OUTLN', 'MDSYS', 'ORDSYS',LiNeBrEaK'ORDPLUGINS', 'CTXSYS', 'DSSYS', 'PERFSTAT', 'WKPROXY', 'WKSYS',LiNeBrEaK'WMSYS', 'XDB', 'ANONYMOUS', 'ODM', 'ODM_MTR', 'OLAPSYS', 'TRACESVR',LiNeBrEaK'REPADMIN'LiNeBrEaK};LiNeBrEaK"
		}, {
			"start_line": 1956,
			"end_line": 1964,
			"code_lines": "CommonSwing.errorMessage(se);LiNeBrEaK} finally {LiNeBrEaKif (result != null) {LiNeBrEaKtry {LiNeBrEaKresult.close();LiNeBrEaK} catch (SQLException se) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/DataAccessPointException.java|",
		"loc": "10"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/CodeSwitcher.java|",
		"loc": "253",
		"clones": [{
			"start_line": 95,
			"end_line": 108,
			"code_lines": "+ '[{+|-}label...] [+][-]n'LiNeBrEaK+ 'If no labels are specified then all usedn'LiNeBrEaK+ 'labels in the source code are shown.n'LiNeBrEaK+ 'Use +MODE to switch on the things labeld MODEn'LiNeBrEaK+ 'Use -MODE to switch off the things labeld MODEn'LiNeBrEaK+ 'Path: Any number of path or files may ben'LiNeBrEaK+ 'specified. Use . for the current directoryn'LiNeBrEaK+ '(including sub-directories).n'LiNeBrEaK+ 'Example: java CodeSwitcher +JAVA2 .n'LiNeBrEaK+ 'This example switches on code labeled JAVA2n'LiNeBrEaK+ 'in all *.java files in the current directoryn'LiNeBrEaK+ 'and all subdirectories.n');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 188,
			"end_line": 194,
			"code_lines": "v.insertElementAt('LiNeBrEaK', i - 1);LiNeBrEaKi++;LiNeBrEaK} else {LiNeBrEaKv.insertElementAt('*/', i++);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferSQLText.java|",
		"loc": "637",
		"clones": [{
			"start_line": 51,
			"end_line": 59,
			"code_lines": "if (WTextWrite == null) {LiNeBrEaKtry {LiNeBrEaKWTextWrite = new BufferedWriter(new FileWriter(sFileName));LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow new DataAccessPointException(e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 97,
			"end_line": 104,
			"code_lines": "if (WTextWrite == null) {LiNeBrEaKtry {LiNeBrEaKWTextWrite = new BufferedWriter(new FileWriter(sFileName));LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow new DataAccessPointException(e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 309,
			"end_line": 332,
			"code_lines": "if (WTextRead == null) {LiNeBrEaKtry {LiNeBrEaKWTextRead = new BufferedReader(new FileReader(sFileName));LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow new DataAccessPointException(e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKString        currentLine  = '';LiNeBrEaKString        Token        = '';LiNeBrEaKString        name         = '';LiNeBrEaKTransferTable relatedTable = null;LiNeBrEaKtry {LiNeBrEaKwhile ((currentLine = WTextRead.readLine()) != null) {LiNeBrEaKcurrentLine = currentLine.trim() + ';';LiNeBrEaKTokenizer   = new StringTokenizer(currentLine);LiNeBrEaKtry {LiNeBrEaKToken = Tokenizer.nextToken();LiNeBrEaK} catch (NoSuchElementException NSE) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (Token == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 391,
			"end_line": 397,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKToken = Tokenizer.nextToken().toUpperCase();LiNeBrEaKif (Token.equals('TABLE') || Token.equals('VIEW')) {LiNeBrEaKtry {LiNeBrEaKname = Tokenizer.nextToken(' (;');LiNeBrEaK"
		}, {
			"start_line": 409,
			"end_line": 415,
			"code_lines": "DbStmts.put(relatedTable.Stmts.sSourceTable,LiNeBrEaKrelatedTable);LiNeBrEaK} catch (NoSuchElementException NSE) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 477,
			"end_line": 483,
			"code_lines": "if (WTextRead != null) {LiNeBrEaKtry {LiNeBrEaKWTextRead.close();LiNeBrEaKWTextRead = null;LiNeBrEaK} catch (IOException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 499,
			"end_line": 506,
			"code_lines": "}LiNeBrEaKif (WTextRead != null) {LiNeBrEaKtry {LiNeBrEaKWTextRead.close();LiNeBrEaKWTextRead = null;LiNeBrEaK} catch (IOException e) {}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 512,
			"end_line": 519,
			"code_lines": "if (WTextRead == null) {LiNeBrEaKtry {LiNeBrEaKWTextRead = new BufferedReader(new FileReader(sFileName));LiNeBrEaK} catch (IOException e) {LiNeBrEaKthrow new DataAccessPointException(e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 521,
			"end_line": 536,
			"code_lines": "try {LiNeBrEaKwhile ((currentLine = WTextRead.readLine()) != null) {LiNeBrEaKcurrentLine = currentLine.trim() + ';';LiNeBrEaKTokenizer   = new StringTokenizer(currentLine);LiNeBrEaKtry {LiNeBrEaKToken = Tokenizer.nextToken();LiNeBrEaK} catch (NoSuchElementException NSE) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (Token == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (!Token.toUpperCase().equals('INSERT')) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferDb.java|",
		"loc": "671",
		"clones": [{
			"start_line": 2,
			"end_line": 10,
			"code_lines": "import java.sql.Connection;LiNeBrEaKimport java.sql.DatabaseMetaData;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport java.sql.Types;LiNeBrEaK"
		}, {
			"start_line": 62,
			"end_line": 69,
			"code_lines": "if (srcStatement != null) {LiNeBrEaKtry {LiNeBrEaKsrcStatement.close();LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKsrcStatement = null;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 137,
			"end_line": 145,
			"code_lines": "if (iMaxRows != 0 && i == iMaxRows) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKi++;LiNeBrEaKif (iMaxRows != 0 || i % 100 == 0) {LiNeBrEaKtracer.trace('Transfered ' + i + ' rows');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 184,
			"end_line": 199,
			"code_lines": "} catch (SQLException e) {LiNeBrEaKresult = null;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKif (result != null) {LiNeBrEaKwhile (result.next()) {LiNeBrEaKret.addElement(result.getString(1));LiNeBrEaK}LiNeBrEaKresult.close();LiNeBrEaK}LiNeBrEaK} catch (SQLException e) {LiNeBrEaKthrow new DataAccessPointException(e.toString());LiNeBrEaK}LiNeBrEaKreturn (ret);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 631,
			"end_line": 637,
			"code_lines": "if (srcStatement != null) {LiNeBrEaKtry {LiNeBrEaKsrcStatement.close();LiNeBrEaK} catch (SQLException e) {}LiNeBrEaKsrcStatement = null;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/DatabaseManager.java|",
		"loc": "959",
		"clones": [{
			"start_line": 47,
			"end_line": 55,
			"code_lines": "}LiNeBrEaKprivate static final String HELP_TEXT =LiNeBrEaK'See the forums, mailing lists, and HSQLDB User Guiden'LiNeBrEaK+ 'at http:LiNeBrEaK+ 'Please paste the following version identifier with anyn'LiNeBrEaK+ 'problem reports or help requests:  $Revision: 5221 $'LiNeBrEaK+ (TT_AVAILABLE ? ''LiNeBrEaK: ('nnTransferTool classes are not in CLASSPATH.n'LiNeBrEaK"
		}, {
			"start_line": 60,
			"end_line": 67,
			"code_lines": "+ 'Copyright (c) 2001-2011, The HSQL Development Group.n'LiNeBrEaK+ 'http:LiNeBrEaK+ 'You may use and redistribute according to the HSQLDBn'LiNeBrEaK+ 'license documented in the source code and at the webn'LiNeBrEaK+ 'site above.'LiNeBrEaK+ (TT_AVAILABLE ? 'nnTransferTool options are available.'LiNeBrEaK: '');LiNeBrEaK"
		}, {
			"start_line": 94,
			"end_line": 100,
			"code_lines": "if (c == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (cConn != null) {LiNeBrEaKtry {LiNeBrEaKcConn.close();LiNeBrEaK"
		}, {
			"start_line": 142,
			"end_line": 154,
			"code_lines": "}LiNeBrEaKpublic static void main(String[] arg) {LiNeBrEaKSystem.getProperties().put('sun.java2d.noddraw', 'true');LiNeBrEaKString  currentArg;LiNeBrEaKString  lowerArg;LiNeBrEaKString  urlid        = null;LiNeBrEaKString  rcFile       = null;LiNeBrEaKboolean autoConnect  = false;LiNeBrEaKboolean urlidConnect = false;LiNeBrEaKbMustExit = true;LiNeBrEaKfor (int i = 0; i < arg.length; i++) {LiNeBrEaKcurrentArg = arg[i];LiNeBrEaK"
		}, {
			"start_line": 155,
			"end_line": 198,
			"code_lines": "if (lowerArg.startsWith('--')) {LiNeBrEaKlowerArg = lowerArg.substring(1);LiNeBrEaK}LiNeBrEaKif (lowerArg.equals('-noexit') || lowerArg.equals('-help')) {LiNeBrEaK} else if (i == arg.length - 1) {LiNeBrEaKthrow new IllegalArgumentException('No value for argument 'LiNeBrEaK+ currentArg);LiNeBrEaK}LiNeBrEaKi++;LiNeBrEaKif (lowerArg.equals('-driver')) {LiNeBrEaKdefDriver   = arg[i];LiNeBrEaKautoConnect = true;LiNeBrEaK} else if (lowerArg.equals('-url')) {LiNeBrEaKdefURL      = arg[i];LiNeBrEaKautoConnect = true;LiNeBrEaK} else if (lowerArg.equals('-user')) {LiNeBrEaKdefUser     = arg[i];LiNeBrEaKautoConnect = true;LiNeBrEaK} else if (lowerArg.equals('-password')) {LiNeBrEaKdefPassword = arg[i];LiNeBrEaKautoConnect = true;LiNeBrEaK} else if (lowerArg.equals('-urlid')) {LiNeBrEaKurlid        = arg[i];LiNeBrEaKurlidConnect = true;LiNeBrEaK} else if (lowerArg.equals('-rcfile')) {LiNeBrEaKrcFile       = arg[i];LiNeBrEaKurlidConnect = true;LiNeBrEaK} else if (lowerArg.equals('-dir')) {LiNeBrEaKdefDirectory = arg[i];LiNeBrEaK} else if (lowerArg.equals('-script')) {LiNeBrEaKdefScript = arg[i];LiNeBrEaK} else if (lowerArg.equals('-noexit')) {LiNeBrEaKbMustExit = false;LiNeBrEaKi--;LiNeBrEaK} else if (lowerArg.equals('-help')) {LiNeBrEaKshowUsage();LiNeBrEaKreturn;LiNeBrEaK} else {LiNeBrEaKthrow new IllegalArgumentException(LiNeBrEaK'invalid argrument ' + currentArg + ' try:  java... 'LiNeBrEaK+ DatabaseManagerSwing.class.getName() + ' --help');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 201,
			"end_line": 207,
			"code_lines": "try {LiNeBrEaKif (autoConnect && urlidConnect) {LiNeBrEaKthrow new IllegalArgumentException(LiNeBrEaK'You may not specify both (urlid) AND (url/user/password).');LiNeBrEaK}LiNeBrEaKif (autoConnect) {LiNeBrEaK"
		}, {
			"start_line": 208,
			"end_line": 215,
			"code_lines": "defUser, defPassword);LiNeBrEaK} else if (urlidConnect) {LiNeBrEaKif (urlid == null) {LiNeBrEaKthrow new IllegalArgumentException(LiNeBrEaK'You must specify an 'urlid' to use an RC file');LiNeBrEaK}LiNeBrEaKautoConnect = true;LiNeBrEaK"
		}, {
			"start_line": 223,
			"end_line": 231,
			"code_lines": "} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaK}LiNeBrEaKif (c == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKm.connect(c);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 230,
			"end_line": 246,
			"code_lines": "}LiNeBrEaKprivate static void showUsage() {LiNeBrEaKSystem.out.println(LiNeBrEaK'Usage: java DatabaseManager [--options]n'LiNeBrEaK+ 'where options include:n'LiNeBrEaK+ '    --help                show this messagen'LiNeBrEaK+ '    --driver <classname>  jdbc driver classn'LiNeBrEaK+ '    --url <name>          jdbc urln'LiNeBrEaK+ '    --user <name>         username used for connectionn'LiNeBrEaK+ '    --password <password> password for this usern'LiNeBrEaK+ '    --urlid <urlid>       use url/user/password/driver in rc filen'LiNeBrEaK+ '    --rcfile <file>       (defaults to 'dbmanager.rc' in home dir)n'LiNeBrEaK+ '    --dir <path>          default directoryn'LiNeBrEaK+ '    --script <file>       reads from script filen'LiNeBrEaK+ '    --noexit              do not call system.exit()');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 313,
			"end_line": 322,
			"code_lines": "Dimension d    = Toolkit.getDefaultToolkit().getScreenSize();LiNeBrEaKDimension size = fMain.getSize();LiNeBrEaKif (d.width >= 640) {LiNeBrEaKfMain.setLocation((d.width - size.width) / 2,LiNeBrEaK(d.height - size.height) / 2);LiNeBrEaK} else {LiNeBrEaKfMain.setLocation(0, 0);LiNeBrEaKfMain.setSize(d);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 348,
			"end_line": 355,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic void keyPressed(KeyEvent k) {}LiNeBrEaKpublic void keyReleased(KeyEvent k) {}LiNeBrEaKpublic void keyTyped(KeyEvent k) {LiNeBrEaKif (k.getKeyChar() == 'n' && k.isControlDown()) {LiNeBrEaKk.consume();LiNeBrEaK"
		}, {
			"start_line": 372,
			"end_line": 378,
			"code_lines": "windowClosing(null);LiNeBrEaK} else if (s.equals('Transfer')) {LiNeBrEaKTransfer.work(null);LiNeBrEaK} else if (s.equals('Dump')) {LiNeBrEaKTransfer.work(new String[]{ '-d' });LiNeBrEaK} else if (s.equals('Restore')) {LiNeBrEaK"
		}, {
			"start_line": 392,
			"end_line": 398,
			"code_lines": "} else if (s.equals('Refresh Tree')) {LiNeBrEaKrefreshTree();LiNeBrEaK} else if (s.startsWith('#')) {LiNeBrEaKint i = Integer.parseInt(s.substring(1));LiNeBrEaKtxtCommand.setText(sRecent[i]);LiNeBrEaK} else if (s.equals('Connect...')) {LiNeBrEaK"
		}, {
			"start_line": 428,
			"end_line": 434,
			"code_lines": "if (defDirectory != null) {LiNeBrEaKf.setDirectory(defDirectory);LiNeBrEaK}LiNeBrEaKf.show();LiNeBrEaKString file = f.getFile();LiNeBrEaKif (file != null) {LiNeBrEaK"
		}, {
			"start_line": 436,
			"end_line": 444,
			"code_lines": "}LiNeBrEaK} else if (s.equals('Save Result csv...')) {LiNeBrEaKFileDialog f = new FileDialog(fMain, 'Save Result CSV',LiNeBrEaKFileDialog.SAVE);LiNeBrEaKif (defDirectory != null) {LiNeBrEaKf.setDirectory(defDirectory);LiNeBrEaK}LiNeBrEaKf.show();LiNeBrEaK"
		}, {
			"start_line": 452,
			"end_line": 462,
			"code_lines": "}LiNeBrEaK} else if (s.equals('Save Result...')) {LiNeBrEaKFileDialog f = new FileDialog(fMain, 'Save Result',LiNeBrEaKFileDialog.SAVE);LiNeBrEaKif (defDirectory != null) {LiNeBrEaKf.setDirectory(defDirectory);LiNeBrEaK}LiNeBrEaKf.show();LiNeBrEaKString file = f.getFile();LiNeBrEaKif (file != null) {LiNeBrEaK"
		}, {
			"start_line": 518,
			"end_line": 527,
			"code_lines": "} else if (s.equals('SELECT')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.selectHelp);LiNeBrEaK} else if (s.equals('INSERT')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.insertHelp);LiNeBrEaK} else if (s.equals('UPDATE')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.updateHelp);LiNeBrEaK} else if (s.equals('DELETE')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.deleteHelp);LiNeBrEaK} else if (s.equals('CREATE TABLE')) {LiNeBrEaK"
		}, {
			"start_line": 526,
			"end_line": 535,
			"code_lines": "} else if (s.equals('CREATE TABLE')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.createTableHelp);LiNeBrEaK} else if (s.equals('DROP TABLE')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.dropTableHelp);LiNeBrEaK} else if (s.equals('CREATE INDEX')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.createIndexHelp);LiNeBrEaK} else if (s.equals('DROP INDEX')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.dropIndexHelp);LiNeBrEaK} else if (s.equals('CHECKPOINT')) {LiNeBrEaK"
		}, {
			"start_line": 536,
			"end_line": 544,
			"code_lines": "} else if (s.equals('SCRIPT')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.scriptHelp);LiNeBrEaK} else if (s.equals('SHUTDOWN')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.shutdownHelp);LiNeBrEaK} else if (s.equals('SET')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.setHelp);LiNeBrEaK} else if (s.equals('Test Script')) {LiNeBrEaKshowHelp(DatabaseManagerCommon.testHelp);LiNeBrEaK"
		}, {
			"start_line": 553,
			"end_line": 559,
			"code_lines": "txtCommand.requestFocus();LiNeBrEaKtxtCommand.setCaretPosition(help[0].length());LiNeBrEaK}LiNeBrEaKpublic void windowActivated(WindowEvent e) {}LiNeBrEaKpublic void windowDeactivated(WindowEvent e) {}LiNeBrEaKpublic void windowClosed(WindowEvent e) {}LiNeBrEaK"
		}, {
			"start_line": 565,
			"end_line": 573,
			"code_lines": "fMain.dispose();LiNeBrEaKif (bMustExit) {LiNeBrEaKSystem.exit(0);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void windowDeiconified(WindowEvent e) {}LiNeBrEaKpublic void windowIconified(WindowEvent e) {}LiNeBrEaKpublic void windowOpened(WindowEvent e) {}LiNeBrEaK"
		}, {
			"start_line": 596,
			"end_line": 611,
			"code_lines": "int r = sStatement.getUpdateCount();LiNeBrEaKif (r == -1) {LiNeBrEaKResultSet rs = sStatement.getResultSet();LiNeBrEaKtry {LiNeBrEaKformatResultSet(rs);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKg[0] = 'Error displaying the ResultSet';LiNeBrEaKgResult.setHead(g);LiNeBrEaKString s = t.getMessage();LiNeBrEaKg[0] = s;LiNeBrEaKgResult.addRow(g);LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKg[0] = 'update count';LiNeBrEaKgResult.setHead(g);LiNeBrEaK"
		}, {
			"start_line": 615,
			"end_line": 624,
			"code_lines": "} catch (SQLException e) {LiNeBrEaKlTime = System.currentTimeMillis() - lTime;LiNeBrEaKg[0]  = 'SQL Error';LiNeBrEaKgResult.setHead(g);LiNeBrEaKString s = e.getMessage();LiNeBrEaKs    += ' / Error Code: ' + e.getErrorCode();LiNeBrEaKs    += ' / State: ' + e.getSQLState();LiNeBrEaKg[0] = s;LiNeBrEaKgResult.addRow(g);LiNeBrEaK"
		}, {
			"start_line": 638,
			"end_line": 644,
			"code_lines": "} else {LiNeBrEaKshowResultInText();LiNeBrEaK}LiNeBrEaKtxtCommand.selectAll();LiNeBrEaKtxtCommand.requestFocus();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 645,
			"end_line": 654,
			"code_lines": "if (r == null) {LiNeBrEaKString[] g = new String[1];LiNeBrEaKg[0] = 'Result';LiNeBrEaKgResult.setHead(g);LiNeBrEaKg[0] = '(empty)';LiNeBrEaKgResult.addRow(g);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 678,
			"end_line": 717,
			"code_lines": "String       all   = txtCommand.getText();LiNeBrEaKStringBuffer b     = new StringBuffer();LiNeBrEaKlong         total = 0;LiNeBrEaKfor (int i = 0; i < all.length(); i++) {LiNeBrEaKchar c = all.charAt(i);LiNeBrEaKif (c != 'n') {LiNeBrEaKb.append(c);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKall = b.toString();LiNeBrEaKString[] g = new String[4];LiNeBrEaKg[0] = 'ms';LiNeBrEaKg[1] = 'count';LiNeBrEaKg[2] = 'sql';LiNeBrEaKg[3] = 'error';LiNeBrEaKgResult.setHead(g);LiNeBrEaKint max = 1;LiNeBrEaKlTime = System.currentTimeMillis() - lTime;LiNeBrEaKwhile (!all.equals('')) {LiNeBrEaKint    i = all.indexOf(';');LiNeBrEaKString sql;LiNeBrEaKif (i != -1) {LiNeBrEaKsql = all.substring(0, i);LiNeBrEaKall = all.substring(i + 1);LiNeBrEaK} else {LiNeBrEaKsql = all;LiNeBrEaKall = '';LiNeBrEaK}LiNeBrEaKif (sql.startsWith('--#')) {LiNeBrEaKmax = Integer.parseInt(sql.substring(3));LiNeBrEaKcontinue;LiNeBrEaK} else if (sql.startsWith('--')) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKg[2] = sql;LiNeBrEaKlong l = 0;LiNeBrEaKtry {LiNeBrEaKl = DatabaseManagerCommon.testStatement(sStatement, sql, max);LiNeBrEaKtotal += l;LiNeBrEaK"
		}, {
			"start_line": 723,
			"end_line": 732,
			"code_lines": "}LiNeBrEaKgResult.addRow(g);LiNeBrEaKSystem.out.println(l + ' ms : ' + sql);LiNeBrEaK}LiNeBrEaKg[0] = '' + total;LiNeBrEaKg[1] = 'total';LiNeBrEaKg[2] = '';LiNeBrEaKgResult.addRow(g);LiNeBrEaKlTime = System.currentTimeMillis() - lTime;LiNeBrEaK"
		}, {
			"start_line": 775,
			"end_line": 783,
			"code_lines": "if (l > size[j]) {LiNeBrEaKsize[j] = l;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKStringBuffer b = new StringBuffer();LiNeBrEaKfor (int i = 0; i < width; i++) {LiNeBrEaKb.append(col[i]);LiNeBrEaK"
		}, {
			"start_line": 784,
			"end_line": 796,
			"code_lines": "b.append(' ');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKb.append(NL);LiNeBrEaKfor (int i = 0; i < width; i++) {LiNeBrEaKfor (int l = 0; l < size[i]; l++) {LiNeBrEaKb.append('-');LiNeBrEaK}LiNeBrEaKb.append(' ');LiNeBrEaK}LiNeBrEaKb.append(NL);LiNeBrEaKfor (int i = 0; i < height; i++) {LiNeBrEaK"
		}, {
			"start_line": 806,
			"end_line": 821,
			"code_lines": "txtResult.setText(b.toString());LiNeBrEaK}LiNeBrEaKprivate void addToRecent(String s) {LiNeBrEaKfor (int i = 0; i < iMaxRecent; i++) {LiNeBrEaKif (s.equals(sRecent[i])) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (sRecent[iRecent] != null) {LiNeBrEaKmRecent.remove(iRecent);LiNeBrEaK}LiNeBrEaKsRecent[iRecent] = s;LiNeBrEaKif (s.length() > 43) {LiNeBrEaKs = s.substring(0, 40) + '...';LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/SQLStatements.java|",
		"loc": "20"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/ConnectionSetting.java|",
		"loc": "47"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/JDBCTypes.java|",
		"loc": "93"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferCommon.java|",
		"loc": "68",
		"clones": [{
			"start_line": 43,
			"end_line": 49,
			"code_lines": "for (int i = 0; i < tTable.size(); i++) {LiNeBrEaKt          = (TransferTable) tTable.elementAt(i);LiNeBrEaKt.tracer   = tracer;LiNeBrEaKt.sourceDb = (TransferDb) sourceDb;LiNeBrEaKt.destDb   = targetDb;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/GridSwing.java|",
		"loc": "112"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/ConnectionDialogSwing.java|",
		"loc": "253",
		"clones": [{
			"start_line": 77,
			"end_line": 89,
			"code_lines": "labels.add(createLabel('Setting Name:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaKlabels.add(createLabel('Type:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaKlabels.add(createLabel('Driver:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaKlabels.add(createLabel('URL:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaKlabels.add(createLabel('User:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaKlabels.add(createLabel('Password:'));LiNeBrEaKlabels.add(Box.createVerticalGlue());LiNeBrEaK"
		}, {
			"start_line": 158,
			"end_line": 165,
			"code_lines": "if (d.width >= 640) {LiNeBrEaKsetLocation((d.width - size.width) / 2,LiNeBrEaK(d.height - size.height) / 2);LiNeBrEaK} else {LiNeBrEaKsetLocation(0, 0);LiNeBrEaKsetSize(d);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 226,
			"end_line": 233,
			"code_lines": "if (setting != null) {LiNeBrEaKmName.setText(setting.getName());LiNeBrEaKmDriver.setText(setting.getDriver());LiNeBrEaKmURL.setText(setting.getUrl());LiNeBrEaKmUser.setText(setting.getUser());LiNeBrEaKmPassword.setText(setting.getPassword());LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 241,
			"end_line": 253,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic void itemStateChanged(ItemEvent e) {LiNeBrEaKString s = (String) e.getItem();LiNeBrEaKfor (int i = 0; i < connTypes.length; i++) {LiNeBrEaKif (s.equals(connTypes[i][0])) {LiNeBrEaKmDriver.setText(connTypes[i][1]);LiNeBrEaKmURL.setText(connTypes[i][2]);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TableSorter.java|",
		"loc": "373"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/InformixTransferHelper.java|",
		"loc": "35",
		"clones": [{
			"start_line": 25,
			"end_line": 34,
			"code_lines": "if (type == Types.TIMESTAMP) {LiNeBrEaKtype = Types.TIME;LiNeBrEaKtracer.trace('Converted TIMESTAMP to INFORMIX TIME');LiNeBrEaK} else if (type == Types.TIME) {LiNeBrEaKtype = Types.TIMESTAMP;LiNeBrEaKtracer.trace('Converted TIME to INFORMIX TIMESTAMP');LiNeBrEaK}LiNeBrEaKreturn (type);LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/ConnectionDialogCommon.java|",
		"loc": "191",
		"clones": [{
			"start_line": 53,
			"end_line": 60,
			"code_lines": "'Oracle', 'oracle.jdbc.driver.OracleDriver',LiNeBrEaK'jdbc:oracle:oci8:@u00ABdatabase?u00BB'LiNeBrEaK}, {LiNeBrEaK'Oracle (thin)', 'oracle.jdbc.driver.OracleDriver',LiNeBrEaK'jdbc:oracle:thin:@u00ABhost?u00BB:1521:u00ABdatabase?u00BB'LiNeBrEaK}, {LiNeBrEaK'PointBase', 'com.pointbase.jdbc.jdbcUniversalDriver',LiNeBrEaK"
		}, {
			"start_line": 155,
			"end_line": 162,
			"code_lines": "try {LiNeBrEaKif (recentSettings == null) {LiNeBrEaKsetHomeDir();LiNeBrEaKif (homedir == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKrecentSettings = new File(homedir, fileName);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/CSVWriter.java|",
		"loc": "56"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/TransferResultSet.java|",
		"loc": "100"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/PostgresTransferHelper.java|",
		"loc": "96",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.util;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Types;LiNeBrEaK"
		}, {
			"start_line": 23,
			"end_line": 30,
			"code_lines": "tracer.trace('Converted DECIMAL to NUMERIC');LiNeBrEaK}LiNeBrEaKreturn (type);LiNeBrEaK}LiNeBrEaKString fixupColumnDefRead(TransferTable t, ResultSetMetaData meta,LiNeBrEaKString columnType, ResultSet columnDesc,LiNeBrEaKint columnIndex) throws SQLException {LiNeBrEaK"
		}, {
			"start_line": 36,
			"end_line": 42,
			"code_lines": "}LiNeBrEaKString CompareString = 'nextval(''' + SeqName + '''';LiNeBrEaKif (columnType.indexOf(CompareString) >= 0) {LiNeBrEaKcolumnType = 'SERIAL';LiNeBrEaK}LiNeBrEaKfor (int Idx = 0; Idx < Funcs.length; Idx++) {LiNeBrEaK"
		}, {
			"start_line": 52,
			"end_line": 58,
			"code_lines": "}LiNeBrEaKreturn (columnType);LiNeBrEaK}LiNeBrEaKString fixupColumnDefWrite(TransferTable t, ResultSetMetaData meta,LiNeBrEaKString columnType, ResultSet columnDesc,LiNeBrEaKint columnIndex) throws SQLException {LiNeBrEaK"
		}, {
			"start_line": 54,
			"end_line": 76,
			"code_lines": "}LiNeBrEaKString fixupColumnDefWrite(TransferTable t, ResultSetMetaData meta,LiNeBrEaKString columnType, ResultSet columnDesc,LiNeBrEaKint columnIndex) throws SQLException {LiNeBrEaKif (columnType.equals('SERIAL')) {LiNeBrEaKString SeqName = new String('_' + columnDesc.getString(4)LiNeBrEaK+ '_seq');LiNeBrEaKint spaceleft = 31 - SeqName.length();LiNeBrEaKif (t.Stmts.sDestTable.length() > spaceleft) {LiNeBrEaKSeqName = t.Stmts.sDestTable.substring(0, spaceleft)LiNeBrEaK+ SeqName;LiNeBrEaK} else {LiNeBrEaKSeqName = t.Stmts.sDestTable + SeqName;LiNeBrEaK}LiNeBrEaKString DropSequence = 'DROP SEQUENCE ' + SeqName + ';';LiNeBrEaKt.Stmts.sDestDrop += DropSequence;LiNeBrEaK}LiNeBrEaKfor (int Idx = 0; Idx < Funcs.length; Idx++) {LiNeBrEaKString HSQLDB_func = Funcs[Idx][HSQLDB];LiNeBrEaKint    iStartPos   = columnType.indexOf(HSQLDB_func);LiNeBrEaKif (iStartPos >= 0) {LiNeBrEaKString NewColumnType = columnType.substring(0, iStartPos);LiNeBrEaK"
		}, {
			"start_line": 77,
			"end_line": 92,
			"code_lines": "NewColumnType += columnType.substring(iStartPosLiNeBrEaK+ HSQLDB_func.length());LiNeBrEaKcolumnType = NewColumnType;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn (columnType);LiNeBrEaK}LiNeBrEaKvoid beginDataTransfer() {LiNeBrEaKtry {LiNeBrEaKdb.setAutoCommit(false);LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaKvoid endDataTransfer() {LiNeBrEaKtry {LiNeBrEaKdb.commit();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/PreprocessorAntTask.java|",
		"loc": "87"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Defines.java|",
		"loc": "126",
		"clones": [{
			"start_line": 112,
			"end_line": 120,
			"code_lines": "if (!tokenizer.isToken(Token.EOI)) {LiNeBrEaKthrow new PreprocessorException('Illegal trailing 'LiNeBrEaK+ 'characters at position: 'LiNeBrEaK+ tokenizer.getStartIndex()LiNeBrEaK+ ' in ['LiNeBrEaK+ expressionLiNeBrEaK+ ']');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Token.java|",
		"loc": "63",
		"clones": [{
			"start_line": 43,
			"end_line": 50,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 55,
			"end_line": 62,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/LineType.java|",
		"loc": "67"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/PreprocessorException.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Line.java|",
		"loc": "99"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Preprocessor.java|",
		"loc": "419",
		"clones": [{
			"start_line": 213,
			"end_line": 221,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKcase CONDITION_IN_TRUE : {LiNeBrEaKthis.state = CONDITION_TRIGGERED;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 314,
			"end_line": 321,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Document.java|",
		"loc": "201",
		"clones": [{
			"start_line": 7,
			"end_line": 13,
			"code_lines": "import java.io.IOException;LiNeBrEaKimport java.io.InputStream;LiNeBrEaKimport java.io.InputStreamReader;LiNeBrEaKimport java.io.OutputStream;LiNeBrEaKimport java.io.OutputStreamWriter;LiNeBrEaKimport java.io.Reader;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/BasicResolver.java|",
		"loc": "34",
		"clones": [{
			"start_line": 26,
			"end_line": 33,
			"code_lines": "}LiNeBrEaKtry {LiNeBrEaKreturn file.getCanonicalFile();LiNeBrEaK} catch (Exception e) {LiNeBrEaKreturn file.getAbsoluteFile();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/IResolver.java|",
		"loc": "7"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Parser.java|",
		"loc": "175",
		"clones": [{
			"start_line": 67,
			"end_line": 74,
			"code_lines": "throw new PreprocessorException('RPAREN token required at 'LiNeBrEaK+ 'position 'LiNeBrEaK+ this.tokenizer.getStartIndex()LiNeBrEaK+ ' in ['LiNeBrEaK+ this.tokenizer.getSource()LiNeBrEaK+ ']');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 78,
			"end_line": 85,
			"code_lines": "throw new PreprocessorException('IDENT, NOT or LPAREN 'LiNeBrEaK+ 'token required at position 'LiNeBrEaK+ this.tokenizer.getStartIndex()LiNeBrEaK+ ' in ['LiNeBrEaK+ this.tokenizer.getSource()LiNeBrEaK+ ']');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 147,
			"end_line": 155,
			"code_lines": "+ ' is not defined at position'LiNeBrEaK+ this.tokenizer.getStartIndex()LiNeBrEaK+ 'in ['LiNeBrEaK+ this.tokenizer.getSource()LiNeBrEaK+ ']');LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 164,
			"end_line": 172,
			"code_lines": "throw new PreprocessorException('IDENT, STRING'LiNeBrEaK+ 'or NUMBER token required at position 'LiNeBrEaK+ this.tokenizer.getStartIndex()LiNeBrEaK+ ' in: ['LiNeBrEaK+ this.tokenizer.getSource()LiNeBrEaK+ ']');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Tokenizer.java|",
		"loc": "158"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/Option.java|",
		"loc": "47"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/util/preprocessor/AntResolver.java|",
		"loc": "16"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/QueryExpression.java|",
		"loc": "776",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.ParserDQL.CompileContext;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 4,
			"end_line": 10,
			"code_lines": "import org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaKimport org.hsqldb.lib.ArrayListIdentity;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaKimport org.hsqldb.lib.HashMappedList;LiNeBrEaK"
		}, {
			"start_line": 270,
			"end_line": 278,
			"code_lines": "}LiNeBrEaKpublic void resolveTypes(Session session) {LiNeBrEaKif (isResolved) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKresolveTypesPartOne(session);LiNeBrEaKresolveTypesPartTwo(session);LiNeBrEaKresolveTypesPartThree(session);LiNeBrEaK"
		}, {
			"start_line": 297,
			"end_line": 303,
			"code_lines": "isPartOneResolved = true;LiNeBrEaK}LiNeBrEaKvoid resolveTypesPartTwo(Session session) {LiNeBrEaKif (isPartTwoResolved) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 382,
			"end_line": 388,
			"code_lines": "} else if (size == 1) {LiNeBrEaKreturn r.getSingleRowData();LiNeBrEaK} else {LiNeBrEaKthrow Error.error(ErrorCode.X_21000);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 520,
			"end_line": 529,
			"code_lines": "}LiNeBrEaKpublic String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb;LiNeBrEaKString       temp;LiNeBrEaKStringBuffer b = new StringBuffer(blanks);LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKb.append(' ');LiNeBrEaK}LiNeBrEaKsb = new StringBuffer();LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserDQL.java|",
		"loc": "4646",
		"clones": [{
			"start_line": 481,
			"end_line": 488,
			"code_lines": "while (true) {LiNeBrEaKExpression target = XreadTargetSpecification(rangeVars,LiNeBrEaKcolIndexList);LiNeBrEaKif (!targets.add(target)) {LiNeBrEaKColumnSchema col = target.getColumn();LiNeBrEaKthrow Error.error(ErrorCode.X_42579, col.getName().name);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 486,
			"end_line": 494,
			"code_lines": "throw Error.error(ErrorCode.X_42579, col.getName().name);LiNeBrEaK}LiNeBrEaKif (readIfThis(Tokens.COMMA)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (token.tokenType == Tokens.CLOSEBRACKET) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 510,
			"end_line": 520,
			"code_lines": "}LiNeBrEaKif (readIfThis(Tokens.COMMA)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (token.tokenType == Tokens.CLOSEBRACKET) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 711,
			"end_line": 718,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 786,
			"end_line": 793,
			"code_lines": "if (queryExpression.sortAndSlice == null) {LiNeBrEaKqueryExpression.addSortAndSlice(sortAndSlice);LiNeBrEaK} else {LiNeBrEaKif (queryExpression.sortAndSlice.hasLimit()) {LiNeBrEaKif (sortAndSlice.hasLimit()) {LiNeBrEaKthrow Error.error(ErrorCode.X_42549);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 797,
			"end_line": 803,
			"code_lines": "queryExpression.sortAndSlice.addOrderExpression(e);LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKqueryExpression.addSortAndSlice(sortAndSlice);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 804,
			"end_line": 810,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 832,
			"end_line": 838,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 924,
			"end_line": 930,
			"code_lines": "if (readIfThis(Tokens.COMMA)) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1000,
			"end_line": 1007,
			"code_lines": "}LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1084,
			"end_line": 1091,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1278,
			"end_line": 1284,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1323,
			"end_line": 1329,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKif (table.isUpdatable()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKthrow Error.error(ErrorCode.X_42545);LiNeBrEaK"
		}, {
			"start_line": 1577,
			"end_line": 1584,
			"code_lines": "switch (token.tokenType) {LiNeBrEaKcase Tokens.TRUE :LiNeBrEaKread();LiNeBrEaKreturn Expression.EXPR_TRUE;LiNeBrEaKcase Tokens.FALSE :LiNeBrEaKread();LiNeBrEaKreturn Expression.EXPR_FALSE;LiNeBrEaK"
		}, {
			"start_line": 1648,
			"end_line": 1661,
			"code_lines": "case Tokens.COLON :LiNeBrEaKread();LiNeBrEaKif (token.tokenType == Tokens.X_DELIMITED_IDENTIFIERLiNeBrEaK|| token.tokenType == Tokens.X_IDENTIFIER) {}LiNeBrEaKelse {LiNeBrEaKthrow unexpectedToken(Tokens.T_COLON);LiNeBrEaK}LiNeBrEaKcase Tokens.QUESTION :LiNeBrEaKExpressionColumn p =LiNeBrEaKnew ExpressionColumn(OpTypes.DYNAMIC_PARAM);LiNeBrEaKcompileContext.addParameter(p, getPosition());LiNeBrEaKread();LiNeBrEaKreturn p;LiNeBrEaK"
		}, {
			"start_line": 1984,
			"end_line": 1990,
			"code_lines": "read();LiNeBrEaKreadThis(Tokens.OPENBRACKET);LiNeBrEaKString  spec    = readQuotedString();LiNeBrEaKScanner scanner = session.getScanner();LiNeBrEaKscanner.reset(spec);LiNeBrEaKscanner.scanNext();LiNeBrEaK"
		}, {
			"start_line": 2073,
			"end_line": 2079,
			"code_lines": "case Tokens.YEAR :LiNeBrEaKcase Tokens.MONTH :LiNeBrEaKcase Tokens.DAY :LiNeBrEaKcase Tokens.HOUR :LiNeBrEaKcase Tokens.MINUTE :LiNeBrEaKcase Tokens.SECOND : {LiNeBrEaK"
		}, {
			"start_line": 2146,
			"end_line": 2155,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2180,
			"end_line": 2191,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKExpression a = e;LiNeBrEaK"
		}, {
			"start_line": 2286,
			"end_line": 2305,
			"code_lines": "case Tokens.EXTRACT :LiNeBrEaKcase Tokens.CHAR_LENGTH :LiNeBrEaKcase Tokens.CHARACTER_LENGTH :LiNeBrEaKcase Tokens.OCTET_LENGTH :LiNeBrEaKcase Tokens.CARDINALITY :LiNeBrEaKcase Tokens.ABS :LiNeBrEaKcase Tokens.MOD :LiNeBrEaKcase Tokens.LN :LiNeBrEaKcase Tokens.EXP :LiNeBrEaKcase Tokens.POWER :LiNeBrEaKcase Tokens.SQRT :LiNeBrEaKcase Tokens.FLOOR :LiNeBrEaKcase Tokens.CEILING :LiNeBrEaKcase Tokens.CEIL :LiNeBrEaKcase Tokens.WIDTH_BUCKET :LiNeBrEaKFunctionSQL function =LiNeBrEaKFunctionSQL.newSQLFunction(token.tokenString,LiNeBrEaKcompileContext);LiNeBrEaKif (function == null) {LiNeBrEaK"
		}, {
			"start_line": 2307,
			"end_line": 2315,
			"code_lines": "Expression e = readSQLFunction(function);LiNeBrEaKif (e != null) {LiNeBrEaKreturn e;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaK}LiNeBrEaKreturn XreadValueExpressionPrimary();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2364,
			"end_line": 2372,
			"code_lines": "if (e == null) {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKif (minus) {LiNeBrEaKe = new ExpressionArithmetic(OpTypes.NEGATE, e);LiNeBrEaK}LiNeBrEaKreturn e;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2374,
			"end_line": 2385,
			"code_lines": "while (true) {LiNeBrEaKint type;LiNeBrEaKif (token.tokenType == Tokens.PLUS) {LiNeBrEaKtype = OpTypes.ADD;LiNeBrEaK} else if (token.tokenType == Tokens.MINUS) {LiNeBrEaKtype = OpTypes.SUBTRACT;LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKExpression a = e;LiNeBrEaK"
		}, {
			"start_line": 2391,
			"end_line": 2408,
			"code_lines": "Expression e = XreadDateTimeIntervalTerm();LiNeBrEaKwhile (true) {LiNeBrEaKint type;LiNeBrEaKif (token.tokenType == Tokens.PLUS) {LiNeBrEaKtype = OpTypes.ADD;LiNeBrEaK} else if (token.tokenType == Tokens.MINUS) {LiNeBrEaKtype = OpTypes.SUBTRACT;LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKExpression a = e;LiNeBrEaKe = XreadDateTimeIntervalTerm();LiNeBrEaKe = new ExpressionArithmetic(type, a, e);LiNeBrEaK}LiNeBrEaKreturn e;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2416,
			"end_line": 2422,
			"code_lines": "FunctionSQL function =LiNeBrEaKFunctionSQL.newSQLFunction(token.tokenString,LiNeBrEaKcompileContext);LiNeBrEaKif (function == null) {LiNeBrEaKthrow super.unexpectedToken();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2429,
			"end_line": 2435,
			"code_lines": "switch (token.tokenType) {LiNeBrEaKcase Tokens.CURRENT_DATE :LiNeBrEaKcase Tokens.CURRENT_TIME :LiNeBrEaKcase Tokens.CURRENT_TIMESTAMP :LiNeBrEaKcase Tokens.LOCALTIME :LiNeBrEaKcase Tokens.LOCALTIMESTAMP :LiNeBrEaK"
		}, {
			"start_line": 2546,
			"end_line": 2555,
			"code_lines": "} else if (token.tokenType == Tokens.UNKNOWN) {LiNeBrEaKread();LiNeBrEaKunknown = true;LiNeBrEaK} else {LiNeBrEaKthrow unexpectedToken();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (unknown) {LiNeBrEaKe = new ExpressionLogical(OpTypes.IS_NULL, e);LiNeBrEaK"
		}, {
			"start_line": 2569,
			"end_line": 2575,
			"code_lines": "read();LiNeBrEaKreadThis(Tokens.OPENBRACKET);LiNeBrEaKe = XreadRowElementList(true);LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaK"
		}, {
			"start_line": 2578,
			"end_line": 2585,
			"code_lines": "} catch (HsqlException ex) {LiNeBrEaKex.setLevel(compileContext.subqueryDepth);LiNeBrEaKif (lastError == nullLiNeBrEaK|| lastError.getLevel() < ex.getLevel()) {LiNeBrEaKlastError = ex;LiNeBrEaK}LiNeBrEaKrewind(position);LiNeBrEaK"
		}, {
			"start_line": 2592,
			"end_line": 2600,
			"code_lines": "readThis(Tokens.CLOSEBRACKET);LiNeBrEaK} catch (HsqlException ex) {LiNeBrEaKex.setLevel(compileContext.subqueryDepth);LiNeBrEaKif (lastError == nullLiNeBrEaK|| lastError.getLevel() < ex.getLevel()) {LiNeBrEaKlastError = ex;LiNeBrEaK}LiNeBrEaKrewind(position);LiNeBrEaK"
		}, {
			"start_line": 2857,
			"end_line": 2863,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 2945,
			"end_line": 2951,
			"code_lines": "Expression e = XreadExplicitRowValueConstructorOrNull();LiNeBrEaKif (e != null) {LiNeBrEaKreturn e;LiNeBrEaK}LiNeBrEaKreturn XreadRowValueSpecialCase();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3182,
			"end_line": 3188,
			"code_lines": "QueryExpression queryExpression;LiNeBrEaKtry {LiNeBrEaKqueryExpression = XreadQueryExpression();LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKqueryExpression = XreadJoinedTableAsView();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3378,
			"end_line": 3384,
			"code_lines": "while (true) {LiNeBrEaKExpression e = XreadValueExpression();LiNeBrEaKlist.add(e);LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 3381,
			"end_line": 3387,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3442,
			"end_line": 3450,
			"code_lines": "if (token.tokenType == Tokens.LEFTBRACKET) {LiNeBrEaKread();LiNeBrEaKExpression e1 = XreadNumericValueExpression();LiNeBrEaKreadThis(Tokens.RIGHTBRACKET);LiNeBrEaKe = new ExpressionAccessor(e, e1);LiNeBrEaK}LiNeBrEaKreturn e;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3471,
			"end_line": 3477,
			"code_lines": "}LiNeBrEaKif (token.tokenType != Tokens.COMMA) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3499,
			"end_line": 3511,
			"code_lines": "if (condition == null) {LiNeBrEaKcondition = newCondition;LiNeBrEaK} else {LiNeBrEaKcondition = new ExpressionLogical(OpTypes.OR, condition,LiNeBrEaKnewCondition);LiNeBrEaK}LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3615,
			"end_line": 3621,
			"code_lines": "} catch (HsqlException ex) {LiNeBrEaKex.setLevel(compileContext.subqueryDepth);LiNeBrEaKif (lastError == nullLiNeBrEaK|| lastError.getLevel() < ex.getLevel()) {LiNeBrEaKlastError = ex;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3666,
			"end_line": 3682,
			"code_lines": "HsqlArrayList list = new HsqlArrayList();LiNeBrEaKreadThis(Tokens.OPENBRACKET);LiNeBrEaKif (token.tokenType == Tokens.CLOSEBRACKET) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKwhile (true) {LiNeBrEaKExpression e = XreadValueExpression();LiNeBrEaKlist.add(e);LiNeBrEaKif (token.tokenType == Tokens.COMMA) {LiNeBrEaKread();LiNeBrEaK} else {LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3759,
			"end_line": 3765,
			"code_lines": "int position = getPosition();LiNeBrEaKread();LiNeBrEaKif (!readIfThis(Tokens.OPENBRACKET)) {LiNeBrEaKrewind(position);LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3796,
			"end_line": 3803,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKreadThis(Tokens.COMMA);LiNeBrEaK} else if (token.tokenType == Tokens.CLOSEBRACKET) {LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK} while (true);LiNeBrEaK"
		}, {
			"start_line": 3808,
			"end_line": 3814,
			"code_lines": "int position = getPosition();LiNeBrEaKread();LiNeBrEaKif (!readIfThis(Tokens.OPENBRACKET)) {LiNeBrEaKrewind(position);LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3820,
			"end_line": 3826,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaK} while (true);LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKreturn casewhen;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3827,
			"end_line": 3835,
			"code_lines": "int position = getPosition();LiNeBrEaKread();LiNeBrEaKif (!readIfThis(Tokens.OPENBRACKET)) {LiNeBrEaKrewind(position);LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKExpression casewhen = null;LiNeBrEaKdo {LiNeBrEaK"
		}, {
			"start_line": 3836,
			"end_line": 3845,
			"code_lines": "if (token.tokenType == Tokens.COMMA) {LiNeBrEaKreadThis(Tokens.COMMA);LiNeBrEaK} else {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK} while (true);LiNeBrEaKreadThis(Tokens.CLOSEBRACKET);LiNeBrEaKreturn casewhen;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3867,
			"end_line": 3873,
			"code_lines": "int position = getPosition();LiNeBrEaKread();LiNeBrEaKif (!readIfThis(Tokens.OPENBRACKET)) {LiNeBrEaKrewind(position);LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 3884,
			"end_line": 3892,
			"code_lines": "int position = getPosition();LiNeBrEaKread();LiNeBrEaKif (!readIfThis(Tokens.OPENBRACKET)) {LiNeBrEaKrewind(position);LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKExpression c = XreadValueExpression();LiNeBrEaKreadThis(Tokens.COMMA);LiNeBrEaK"
		}, {
			"start_line": 4003,
			"end_line": 4010,
			"code_lines": "} catch (HsqlException ex) {LiNeBrEaKex.setLevel(compileContext.subqueryDepth);LiNeBrEaKif (lastError == nullLiNeBrEaK|| lastError.getLevel() < ex.getLevel()) {LiNeBrEaKlastError = ex;LiNeBrEaK}LiNeBrEaKrewind(position);LiNeBrEaK"
		}, {
			"start_line": 4145,
			"end_line": 4151,
			"code_lines": "checkValidCatalogName(token.namePrefix);LiNeBrEaKif (token.namePrePrefix != null) {LiNeBrEaKthrow tooManyIdentifiers();LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SessionData.java|",
		"loc": "472",
		"clones": [{
			"start_line": 92,
			"end_line": 99,
			"code_lines": "int required = command.rsProperties;LiNeBrEaKint returned = result.rsProperties;LiNeBrEaKif (required != returned) {LiNeBrEaKif (ResultProperties.isReadOnly(required)) {LiNeBrEaKreturned = ResultProperties.addHoldable(returned,LiNeBrEaKResultProperties.isHoldable(required));LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 183,
			"end_line": 189,
			"code_lines": "if (resultMap == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKIterator it = resultMap.values().iterator();LiNeBrEaKwhile (it.hasNext()) {LiNeBrEaKResult result = (Result) it.next();LiNeBrEaK"
		}, {
			"start_line": 239,
			"end_line": 245,
			"code_lines": "}LiNeBrEaKdatabase.lobManager.adjustUsageCount(session,LiNeBrEaK((LobData) value).getId(),LiNeBrEaKadjust);LiNeBrEaKhasLobOps = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 429,
			"end_line": 435,
			"code_lines": "} finally {LiNeBrEaKtry {LiNeBrEaKis.close();LiNeBrEaK} catch (Exception e) {}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionColumn.java|",
		"loc": "885",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.HsqlNameManager.SimpleName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaK"
		}, {
			"start_line": 306,
			"end_line": 313,
			"code_lines": "dataType   = seq.getDataType();LiNeBrEaKsequence   = seq;LiNeBrEaKschema     = null;LiNeBrEaKtableName  = null;LiNeBrEaKcolumnName = null;LiNeBrEaKresolved   = true;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 313,
			"end_line": 319,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (resolved) {LiNeBrEaKreturn unresolvedSet;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 387,
			"end_line": 393,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 461,
			"end_line": 468,
			"code_lines": "}LiNeBrEaKcase OpTypes.SIMPLE_COLUMN : {LiNeBrEaKObject value =LiNeBrEaKsession.sessionContext.rangeIterators[rangePosition]LiNeBrEaK.getCurrent(columnIndex);LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 558,
			"end_line": 564,
			"code_lines": "}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500,LiNeBrEaK'ExpressionColumn');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 649,
			"end_line": 655,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKunresolvedSet = nodes[i].getUnkeyedColumns(unresolvedSet);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 663,
			"end_line": 670,
			"code_lines": "}LiNeBrEaKOrderedHashSet collectRangeVariables(OrderedHashSet set) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKset = nodes[i].collectRangeVariables(set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 675,
			"end_line": 685,
			"code_lines": "}LiNeBrEaKreturn set;LiNeBrEaK}LiNeBrEaKOrderedHashSet collectRangeVariables(RangeVariable[] rangeVariables,LiNeBrEaKOrderedHashSet set) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKset = nodes[i].collectRangeVariables(rangeVariables, set);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 697,
			"end_line": 707,
			"code_lines": "}LiNeBrEaKExpression replaceAliasInOrderBy(Session session, Expression[] columns,LiNeBrEaKint length) {LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKnodes[i] = nodes[i].replaceAliasInOrderBy(session, columns,LiNeBrEaKlength);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 731,
			"end_line": 738,
			"code_lines": "if (matchIndex < 0) {LiNeBrEaKmatchIndex = i;LiNeBrEaK} else if (session.database.sqlEnforceRefs) {LiNeBrEaKString message = getColumnName();LiNeBrEaKthrow Error.error(ErrorCode.X_42580, message);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 742,
			"end_line": 750,
			"code_lines": "if (matchIndex < 0) {LiNeBrEaKmatchIndex = i;LiNeBrEaK} else if (session.database.sqlEnforceRefs) {LiNeBrEaKString message = getColumnName();LiNeBrEaKthrow Error.error(ErrorCode.X_42580, message);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 748,
			"end_line": 754,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (matchIndex >= 0) {LiNeBrEaKreturn columns[matchIndex];LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 765,
			"end_line": 771,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] == null) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKnodes[i] = nodes[i].replaceColumnReferences(range, list);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 777,
			"end_line": 784,
			"code_lines": "for (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKif (nodes[i].hasReference(range)) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 780,
			"end_line": 786,
			"code_lines": "return true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 784,
			"end_line": 793,
			"code_lines": "return false;LiNeBrEaK}LiNeBrEaKpublic boolean equals(Expression other) {LiNeBrEaKif (other == this) {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKif (other == null) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TableDerived.java|",
		"loc": "295",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaK"
		}, {
			"start_line": 264,
			"end_line": 270,
			"code_lines": "} else {LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowActionBase.java|",
		"loc": "39"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RowAVLDiskLarge.java|",
		"loc": "34"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TriggerDefSQL.java|",
		"loc": "58"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TextTable.java|",
		"loc": "203"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementSimple.java|",
		"loc": "133",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.OrderedHashSet;LiNeBrEaK"
		}, {
			"start_line": 45,
			"end_line": 60,
			"code_lines": "}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprotected String describe(Session session, int blanks) {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('n');LiNeBrEaKfor (int i = 0; i < blanks; i++) {LiNeBrEaKsb.append(' ');LiNeBrEaK}LiNeBrEaKsb.append(Tokens.T_STATEMENT);LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaK"
		}, {
			"start_line": 56,
			"end_line": 71,
			"code_lines": "}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaKresult = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKResult getResult(Session session) {LiNeBrEaKswitch (type) {LiNeBrEaK"
		}, {
			"start_line": 125,
			"end_line": 133,
			"code_lines": "}LiNeBrEaKpublic boolean isCatalogLock() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKpublic boolean isCatalogChange() {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ExpressionLike.java|",
		"loc": "245",
		"clones": [{
			"start_line": 59,
			"end_line": 65,
			"code_lines": "}LiNeBrEaKfor (int i = 0; i < nodes.length; i++) {LiNeBrEaKif (nodes[i] != null) {LiNeBrEaKnodes[i].resolveTypes(session, this);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TransactionManager.java|",
		"loc": "42"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SqlInvariants.java|",
		"loc": "91"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ParserBase.java|",
		"loc": "569",
		"clones": [{
			"start_line": 104,
			"end_line": 111,
			"code_lines": "break;LiNeBrEaK} else {LiNeBrEaKif (ArrayUtil.find(startTokens, token.tokenType) != -1) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 317,
			"end_line": 323,
			"code_lines": "boolean minus = false;LiNeBrEaKif (token.tokenType == Tokens.MINUS) {LiNeBrEaKminus = true;LiNeBrEaKread();LiNeBrEaK}LiNeBrEaKcheckIsValue();LiNeBrEaK"
		}, {
			"start_line": 333,
			"end_line": 339,
			"code_lines": "if (minus) {LiNeBrEaKval = -val;LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKreturn val;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 354,
			"end_line": 361,
			"code_lines": "read();LiNeBrEaKif (token.tokenType != Tokens.X_VALUELiNeBrEaK|| token.dataType.typeCode != Types.SQL_CHAR) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKString s = token.tokenString;LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 366,
			"end_line": 373,
			"code_lines": "read();LiNeBrEaKif (token.tokenType != Tokens.X_VALUELiNeBrEaK|| token.dataType.typeCode != Types.SQL_CHAR) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKString s = token.tokenString;LiNeBrEaKread();LiNeBrEaK"
		}, {
			"start_line": 441,
			"end_line": 448,
			"code_lines": "throw unexpectedToken();LiNeBrEaK}LiNeBrEaKread();LiNeBrEaKscale = readInteger();LiNeBrEaKif (scale < 0) {LiNeBrEaKthrow Error.error(ErrorCode.X_42592);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 529,
			"end_line": 542,
			"code_lines": "}LiNeBrEaKString tokenS;LiNeBrEaKif (token.charsetSchema != null) {LiNeBrEaKtokenS = token.charsetSchema;LiNeBrEaK} else if (token.charsetName != null) {LiNeBrEaKtokenS = token.charsetName;LiNeBrEaK} else if (token.namePrePrefix != null) {LiNeBrEaKtokenS = token.namePrePrefix;LiNeBrEaK} else if (token.namePrefix != null) {LiNeBrEaKtokenS = token.namePrefix;LiNeBrEaK} else {LiNeBrEaKtokenS = token.tokenString;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 549,
			"end_line": 556,
			"code_lines": "} else if (token.namePrePrefix != null) {LiNeBrEaKtokenS = token.namePrePrefix;LiNeBrEaK} else if (token.namePrefix != null) {LiNeBrEaKtokenS = token.namePrefix;LiNeBrEaK} else {LiNeBrEaKtokenS = token.tokenString;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/DatabaseManagerSample.java|",
		"loc": "12"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/ConnectionTypesSample.java|",
		"loc": "13"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/FindFile.java|",
		"loc": "81",
		"clones": [{
			"start_line": 2,
			"end_line": 9,
			"code_lines": "import java.io.File;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/Testdb.java|",
		"loc": "81",
		"clones": [{
			"start_line": 68,
			"end_line": 74,
			"code_lines": "db.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('Toyota', 200)');LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('Honda', 300)');LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('GM', 400)');LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/SqlFileEmbedder.java|",
		"loc": "61"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/sample/TriggerSample.java|",
		"loc": "285",
		"clones": [{
			"start_line": 106,
			"end_line": 112,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 127,
			"end_line": 134,
			"code_lines": "return 'DELETE';LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 144,
			"end_line": 153,
			"code_lines": "case DELETE_AFTER_ROW :LiNeBrEaKcase DELETE_BEFORE_ROW : {LiNeBrEaKreturn 'FOR EACH ROW';LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn 'FOR EACH STATEMENT';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 176,
			"end_line": 187,
			"code_lines": "StringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('TRIGGER : ');LiNeBrEaKsb.append(trn);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getWhenSpec(typ));LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getOperationSpec(typ));LiNeBrEaKsb.append(' ON ');LiNeBrEaKsb.append(tab);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getForEachSpec(typ));LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/SchemaObjectSet.java|",
		"loc": "399",
		"clones": [{
			"start_line": 39,
			"end_line": 48,
			"code_lines": "switch (type) {LiNeBrEaKcase SchemaObject.VIEW :LiNeBrEaKcase SchemaObject.TABLE :LiNeBrEaKcase SchemaObject.SEQUENCE :LiNeBrEaKcase SchemaObject.CHARSET :LiNeBrEaKcase SchemaObject.DOMAIN :LiNeBrEaKcase SchemaObject.TYPE :LiNeBrEaKcase SchemaObject.COLLATION :LiNeBrEaKcase SchemaObject.PROCEDURE :LiNeBrEaK"
		}, {
			"start_line": 65,
			"end_line": 78,
			"code_lines": "switch (type) {LiNeBrEaKcase SchemaObject.VIEW :LiNeBrEaKcase SchemaObject.TABLE :LiNeBrEaKcase SchemaObject.SEQUENCE :LiNeBrEaKcase SchemaObject.CHARSET :LiNeBrEaKcase SchemaObject.DOMAIN :LiNeBrEaKcase SchemaObject.TYPE :LiNeBrEaKcase SchemaObject.COLLATION :LiNeBrEaKcase SchemaObject.PROCEDURE :LiNeBrEaKcase SchemaObject.SPECIFIC_ROUTINE :LiNeBrEaKcase SchemaObject.FUNCTION :LiNeBrEaKcase SchemaObject.ASSERTION :LiNeBrEaKcase SchemaObject.TRIGGER :LiNeBrEaK"
		}, {
			"start_line": 183,
			"end_line": 191,
			"code_lines": "case SchemaObject.SEQUENCE :LiNeBrEaKcase SchemaObject.CHARSET :LiNeBrEaKcase SchemaObject.DOMAIN :LiNeBrEaKcase SchemaObject.TYPE :LiNeBrEaKcase SchemaObject.COLLATION :LiNeBrEaKcase SchemaObject.PROCEDURE :LiNeBrEaKcase SchemaObject.FUNCTION :LiNeBrEaKcase SchemaObject.SPECIFIC_ROUTINE :LiNeBrEaK"
		}, {
			"start_line": 203,
			"end_line": 212,
			"code_lines": "int code;LiNeBrEaKswitch (type) {LiNeBrEaKcase SchemaObject.VIEW :LiNeBrEaKcase SchemaObject.TABLE :LiNeBrEaKcase SchemaObject.COLUMN :LiNeBrEaKcase SchemaObject.SEQUENCE :LiNeBrEaKcase SchemaObject.CHARSET :LiNeBrEaKcase SchemaObject.DOMAIN :LiNeBrEaKcase SchemaObject.TYPE :LiNeBrEaK"
		}, {
			"start_line": 221,
			"end_line": 227,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'SchemaObjectSet');LiNeBrEaK}LiNeBrEaKreturn code;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 393,
			"end_line": 399,
			"code_lines": "return false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RangeVariableJoined.java|",
		"loc": "240",
		"clones": [{
			"start_line": 204,
			"end_line": 220,
			"code_lines": "sb = new StringBuffer();LiNeBrEaKString temp = 'INNER';LiNeBrEaKif (isLeftJoin) {LiNeBrEaKtemp = 'LEFT OUTER';LiNeBrEaKif (isRightJoin) {LiNeBrEaKtemp = 'FULL';LiNeBrEaK}LiNeBrEaK} else if (isRightJoin) {LiNeBrEaKtemp = 'RIGHT OUTER';LiNeBrEaK}LiNeBrEaKsb.append(b).append('join type=').append(temp).append('n');LiNeBrEaKsb.append(b).append('table=').append(rangeTable.getName().name).append(LiNeBrEaK'n');LiNeBrEaKif (tableAlias != null) {LiNeBrEaKsb.append(b).append('alias=').append(tableAlias.name).append('n');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/ClientConnectionHTTP.java|",
		"loc": "80"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementSchemaDefinition.java|",
		"loc": "144",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.HsqlArrayList;LiNeBrEaKimport org.hsqldb.result.Result;LiNeBrEaK"
		}, {
			"start_line": 13,
			"end_line": 27,
			"code_lines": "}LiNeBrEaKpublic Result execute(Session session) {LiNeBrEaKResult result;LiNeBrEaKtry {LiNeBrEaKresult = getResult(session);LiNeBrEaK} catch (Throwable t) {LiNeBrEaKresult = Result.newErrorResult(t, null);LiNeBrEaK}LiNeBrEaKif (result.isError()) {LiNeBrEaKresult.getException().setStatementType(group, type);LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaKResult getResult(Session session) {LiNeBrEaK"
		}, {
			"start_line": 85,
			"end_line": 92,
			"code_lines": "cs                    = session.parser.compileCreate();LiNeBrEaKcs.isSchemaDefinition = true;LiNeBrEaKcs.setSchemaHsqlName(schemaDefinitionName);LiNeBrEaKif (session.parser.token.tokenTypeLiNeBrEaK!= Tokens.X_ENDPARSE) {LiNeBrEaKthrow session.parser.unexpectedToken();LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/HsqlNameManager.java|",
		"loc": "350",
		"clones": [{
			"start_line": 254,
			"end_line": 261,
			"code_lines": "return statementName;LiNeBrEaK}LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKif (schema != null) {LiNeBrEaKsb.append(schema.getStatementName());LiNeBrEaKsb.append('.');LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/StatementTypes.java|",
		"loc": "238"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/NumberSequence.java|",
		"loc": "504",
		"clones": [{
			"start_line": 78,
			"end_line": 99,
			"code_lines": "}LiNeBrEaKpublic HsqlName getName() {LiNeBrEaKreturn name;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaK"
		}, {
			"start_line": 138,
			"end_line": 158,
			"code_lines": "sb.append(Tokens.T_START).append(' ');LiNeBrEaKsb.append(Tokens.T_WITH).append(' ');LiNeBrEaKsb.append(startValue);LiNeBrEaKif (getIncrement() != 1) {LiNeBrEaKsb.append(' ').append(Tokens.T_INCREMENT).append(' ');LiNeBrEaKsb.append(Tokens.T_BY).append(' ');LiNeBrEaKsb.append(getIncrement());LiNeBrEaK}LiNeBrEaKif (!hasDefaultMinMax()) {LiNeBrEaKsb.append(' ').append(Tokens.T_MINVALUE).append(' ');LiNeBrEaKsb.append(getMinValue());LiNeBrEaKsb.append(' ').append(Tokens.T_MAXVALUE).append(' ');LiNeBrEaKsb.append(getMaxValue());LiNeBrEaK}LiNeBrEaKif (isCycle()) {LiNeBrEaKsb.append(' ').append(Tokens.T_CYCLE);LiNeBrEaK}LiNeBrEaKif (name == null) {LiNeBrEaKsb.append(Tokens.T_CLOSEBRACKET);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 163,
			"end_line": 169,
			"code_lines": "}LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic long getChangeTimestamp() {LiNeBrEaKreturn 0;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 213,
			"end_line": 234,
			"code_lines": "long min;LiNeBrEaKlong max;LiNeBrEaKswitch (dataType.typeCode) {LiNeBrEaKcase Types.TINYINT :LiNeBrEaKmax = Byte.MAX_VALUE;LiNeBrEaKmin = Byte.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKmax = Short.MAX_VALUE;LiNeBrEaKmin = Short.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKmax = Integer.MAX_VALUE;LiNeBrEaKmin = Integer.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKmax = Long.MAX_VALUE;LiNeBrEaKmin = Long.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaK"
		}, {
			"start_line": 302,
			"end_line": 329,
			"code_lines": "long min;LiNeBrEaKlong max;LiNeBrEaKswitch (dataType.typeCode) {LiNeBrEaKcase Types.TINYINT :LiNeBrEaKmax = Byte.MAX_VALUE;LiNeBrEaKmin = Byte.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKmax = Short.MAX_VALUE;LiNeBrEaKmin = Short.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKmax = Integer.MAX_VALUE;LiNeBrEaKmin = Integer.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKmax = Long.MAX_VALUE;LiNeBrEaKmin = Long.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaKmax = Long.MAX_VALUE;LiNeBrEaKmin = Long.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberSequence');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 333,
			"end_line": 360,
			"code_lines": "long min;LiNeBrEaKlong max;LiNeBrEaKswitch (dataType.typeCode) {LiNeBrEaKcase Types.TINYINT :LiNeBrEaKmax = Byte.MAX_VALUE;LiNeBrEaKmin = Byte.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_SMALLINT :LiNeBrEaKmax = Short.MAX_VALUE;LiNeBrEaKmin = Short.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_INTEGER :LiNeBrEaKmax = Integer.MAX_VALUE;LiNeBrEaKmin = Integer.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_BIGINT :LiNeBrEaKmax = Long.MAX_VALUE;LiNeBrEaKmin = Long.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKcase Types.SQL_NUMERIC :LiNeBrEaKcase Types.SQL_DECIMAL :LiNeBrEaKmax = Long.MAX_VALUE;LiNeBrEaKmin = Long.MIN_VALUE;LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'NumberSequence');LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 420,
			"end_line": 426,
			"code_lines": "if (value == currValue) {LiNeBrEaKcurrValue += increment;LiNeBrEaKreturn value;LiNeBrEaK}LiNeBrEaKif (increment > 0) {LiNeBrEaKif (value > currValue) {LiNeBrEaK"
		}, {
			"start_line": 474,
			"end_line": 481,
			"code_lines": "} else {LiNeBrEaKlimitReached = true;LiNeBrEaKnextValue    = minValue;LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKnextValue = currValue + increment;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/result/ResultConstants.java|",
		"loc": "76"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/result/Result.java|",
		"loc": "1076",
		"clones": [{
			"start_line": 230,
			"end_line": 237,
			"code_lines": "if (result.generateKeys == ResultConstantsLiNeBrEaK.RETURN_GENERATED_KEYS_COL_NAMES || resultLiNeBrEaK.generateKeys == ResultConstantsLiNeBrEaK.RETURN_GENERATED_KEYS_COL_INDEXES) {LiNeBrEaKresult.generatedMetaData = new ResultMetaData(in);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 283,
			"end_line": 289,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Result');LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 370,
			"end_line": 377,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Result');LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 677,
			"end_line": 683,
			"code_lines": "break;LiNeBrEaKcase ResultConstants.DISCONNECT :LiNeBrEaKcase ResultConstants.RESETSESSION :LiNeBrEaKcase ResultConstants.STARTTRAN :LiNeBrEaKbreak;LiNeBrEaKcase ResultConstants.PREPARE :LiNeBrEaK"
		}, {
			"start_line": 706,
			"end_line": 713,
			"code_lines": "rowOut.writeByte(generateKeys);LiNeBrEaKif (generateKeys == ResultConstantsLiNeBrEaK.RETURN_GENERATED_KEYS_COL_NAMES || generateKeys == ResultConstantsLiNeBrEaK.RETURN_GENERATED_KEYS_COL_INDEXES) {LiNeBrEaKgeneratedMetaData.write(rowOut);LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 742,
			"end_line": 754,
			"code_lines": "break;LiNeBrEaKcase ResultConstants.TX_COMMIT :LiNeBrEaKcase ResultConstants.TX_ROLLBACK :LiNeBrEaKcase ResultConstants.TX_COMMIT_AND_CHAIN :LiNeBrEaKcase ResultConstants.TX_ROLLBACK_AND_CHAIN :LiNeBrEaKbreak;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Result');LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase ResultConstants.PREPARE_ACK :LiNeBrEaK"
		}, {
			"start_line": 806,
			"end_line": 812,
			"code_lines": "break;LiNeBrEaKdefault :LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'Result');LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/result/ResultMetaData.java|",
		"loc": "356",
		"clones": [{
			"start_line": 233,
			"end_line": 239,
			"code_lines": "}LiNeBrEaKdefault : {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'ResultMetaData');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 328,
			"end_line": 337,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKthrow Error.runtimeError(ErrorCode.U_S0500, 'ResultMetaData');LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 350,
			"end_line": 356,
			"code_lines": "return false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/result/ResultProperties.java|",
		"loc": "88"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/result/ResultLob.java|",
		"loc": "495",
		"clones": [{
			"start_line": 102,
			"end_line": 108,
			"code_lines": "result.lobID       = id;LiNeBrEaKresult.blockOffset = offset;LiNeBrEaKresult.byteBlock   = block;LiNeBrEaKresult.blockLength = block.length;LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 112,
			"end_line": 118,
			"code_lines": "result.lobID       = id;LiNeBrEaKresult.blockOffset = offset;LiNeBrEaKresult.charBlock   = chars;LiNeBrEaKresult.blockLength = chars.length;LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 267,
			"end_line": 274,
			"code_lines": "result.blockOffset = dataInput.readLong();LiNeBrEaKresult.blockLength = dataInput.readLong();LiNeBrEaKresult.charBlock   = new char[(int) result.blockLength];LiNeBrEaKfor (int i = 0; i < result.charBlock.length; i++) {LiNeBrEaKresult.charBlock[i] = dataInput.readChar();LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK"
		}, {
			"start_line": 430,
			"end_line": 442,
			"code_lines": "DataOutputStream dataOut)LiNeBrEaKthrows IOException {LiNeBrEaKint  bufferLength  = session.getStreamBlockSize();LiNeBrEaKlong currentOffset = blockOffset;LiNeBrEaKdataOut.writeByte(mode);LiNeBrEaKdataOut.writeInt(databaseID);LiNeBrEaKdataOut.writeLong(sessionID);LiNeBrEaKdataOut.writeLong(lobID);LiNeBrEaKdataOut.writeInt(subType);LiNeBrEaKHsqlByteArrayOutputStream byteArrayOS =LiNeBrEaKnew HsqlByteArrayOutputStream(bufferLength);LiNeBrEaKbyteArrayOS.reset();LiNeBrEaK"
		}, {
			"start_line": 453,
			"end_line": 460,
			"code_lines": "if (byteArrayOS.size() == 0) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKdataOut.writeByte(mode);LiNeBrEaKdataOut.writeInt(databaseID);LiNeBrEaKdataOut.writeLong(sessionID);LiNeBrEaKdataOut.writeLong(lobID);LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/Scanner.java|",
		"loc": "1801",
		"clones": [{
			"start_line": 57,
			"end_line": 67,
			"code_lines": "'??(',LiNeBrEaK'??)',LiNeBrEaK'<>',LiNeBrEaK'>=',LiNeBrEaK'<=',LiNeBrEaK'||',LiNeBrEaK'->',LiNeBrEaK'::',LiNeBrEaK'..',LiNeBrEaK'--',LiNeBrEaK"
		}, {
			"start_line": 300,
			"end_line": 308,
			"code_lines": "if (token.isMalformed) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (scanSeparator() && charAt(currentPosition) == ''') {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 326,
			"end_line": 334,
			"code_lines": "if (c == ' ') {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (c == ''') {LiNeBrEaKcomplete = true;LiNeBrEaKcurrentPosition++;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 479,
			"end_line": 487,
			"code_lines": "int c = charAt(currentPosition);LiNeBrEaKif (c == 'u' || c == 'U') {LiNeBrEaKif (scanSpecialIdentifier(Tokens.T_UESCAPE)) {LiNeBrEaKscanSeparator();LiNeBrEaKescape = scanEscapeDefinition();LiNeBrEaKif (escape == -1) {LiNeBrEaKtoken.tokenType   = Tokens.X_MALFORMED_UNICODE_ESCAPE;LiNeBrEaKtoken.isMalformed = true;LiNeBrEaK"
		}, {
			"start_line": 684,
			"end_line": 690,
			"code_lines": "token.tokenString = sqlString.substring(tokenStart,LiNeBrEaKcurrentPosition + 1);LiNeBrEaKtoken.tokenType   = Tokens.X_MALFORMED_NUMERIC;LiNeBrEaKtoken.isMalformed = true;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 738,
			"end_line": 746,
			"code_lines": "default :LiNeBrEaKend = true;LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKif (end) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 782,
			"end_line": 788,
			"code_lines": "} catch (Exception e2) {LiNeBrEaKtoken.tokenType   = Tokens.X_MALFORMED_NUMERIC;LiNeBrEaKtoken.isMalformed = true;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKreturn;LiNeBrEaK"
		}, {
			"start_line": 845,
			"end_line": 851,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKreturn result;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 869,
			"end_line": 877,
			"code_lines": "if (token.isMalformed) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKif (scanSeparator() && charAt(currentPosition) == ''') {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1016,
			"end_line": 1022,
			"code_lines": "token.tokenString = Tokens.T_NOT_EQUALS;LiNeBrEaKtoken.tokenType   = Tokens.NOT_EQUALS;LiNeBrEaKcurrentPosition   += 2;LiNeBrEaKtoken.isDelimiter = true;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1051,
			"end_line": 1060,
			"code_lines": "currentPosition   += 2;LiNeBrEaKtoken.isDelimiter = true;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtoken.tokenString = sqlString.substring(currentPosition,LiNeBrEaKcurrentPosition + 2);LiNeBrEaKtoken.tokenType   = Tokens.X_UNKNOWN_TOKEN;LiNeBrEaKtoken.isDelimiter = true;LiNeBrEaKreturn;LiNeBrEaK"
		}, {
			"start_line": 1083,
			"end_line": 1089,
			"code_lines": "}LiNeBrEaKtoken.tokenString = sqlString.substring(currentPositionLiNeBrEaK+ 2, pos);LiNeBrEaKtoken.tokenType   = Tokens.X_REMARK;LiNeBrEaKtoken.isDelimiter = true;LiNeBrEaKreturn;LiNeBrEaK"
		}, {
			"start_line": 1097,
			"end_line": 1110,
			"code_lines": "int pos = sqlString.indexOf('r', currentPosition + 2);LiNeBrEaKif (pos == -1) {LiNeBrEaKpos = sqlString.indexOf('n', currentPosition + 2);LiNeBrEaK}LiNeBrEaKif (pos == -1) {LiNeBrEaKpos = limit;LiNeBrEaK}LiNeBrEaKtoken.tokenString = sqlString.substring(currentPositionLiNeBrEaK+ 2, pos);LiNeBrEaKtoken.tokenType   = Tokens.X_REMARK;LiNeBrEaKtoken.isDelimiter = true;LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1227,
			"end_line": 1237,
			"code_lines": "case '0' :LiNeBrEaKcase '1' :LiNeBrEaKcase '2' :LiNeBrEaKcase '3' :LiNeBrEaKcase '4' :LiNeBrEaKcase '5' :LiNeBrEaKcase '6' :LiNeBrEaKcase '7' :LiNeBrEaKcase '8' :LiNeBrEaKcase '9' :LiNeBrEaK"
		}, {
			"start_line": 1320,
			"end_line": 1329,
			"code_lines": "throw Error.error(errorCode);LiNeBrEaK}LiNeBrEaKscanNext(errorCode);LiNeBrEaKif (token.dataType == nullLiNeBrEaK|| token.dataType.typeCode != Types.SQL_INTEGER) {LiNeBrEaKthrow Error.error(errorCode);LiNeBrEaK}LiNeBrEaKscale = ((Number) token.tokenValue).intValue();LiNeBrEaKscanNext(errorCode);LiNeBrEaK"
		}, {
			"start_line": 1527,
			"end_line": 1533,
			"code_lines": "for (; currentPart <= lastPart; ) {LiNeBrEaKboolean endOfPart = false;LiNeBrEaKif (i == intervalString.length()) {LiNeBrEaKif (currentPart == lastPart) {LiNeBrEaKendOfPart = true;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 1541,
			"end_line": 1551,
			"code_lines": "currentDigits++;LiNeBrEaKi++;LiNeBrEaK} else if (character == separators[currentPart]) {LiNeBrEaKendOfPart = true;LiNeBrEaKif (currentPart != lastPart) {LiNeBrEaKi++;LiNeBrEaK}LiNeBrEaK} else if (currentPart == lastPart) {LiNeBrEaKendOfPart = true;LiNeBrEaK} else {LiNeBrEaK"
		}, {
			"start_line": 1577,
			"end_line": 1584,
			"code_lines": "currentDigits = 0;LiNeBrEaKif (i == intervalString.length()) {LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKintervalPosition = i;LiNeBrEaK"
		}, {
			"start_line": 1712,
			"end_line": 1720,
			"code_lines": "if (c == '0') {LiNeBrEaKbitIndex++;LiNeBrEaK} else if (c == '1') {LiNeBrEaKmap.set(bitIndex);LiNeBrEaKbitIndex++;LiNeBrEaK} else {LiNeBrEaKtoken.tokenType   = Tokens.X_MALFORMED_BIT_STRING;LiNeBrEaKtoken.isMalformed = true;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TypeInvariants.java|",
		"loc": "46"
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TransactionManager2PL.java|",
		"loc": "199",
		"clones": [{
			"start_line": 24,
			"end_line": 32,
			"code_lines": "}LiNeBrEaKpublic void setTransactionControl(Session session, int mode) {LiNeBrEaKsuper.setTransactionControl(session, mode);LiNeBrEaK}LiNeBrEaKpublic void completeActions(Session session) {LiNeBrEaKendActionTPL(session);LiNeBrEaK}LiNeBrEaKpublic boolean prepareCommitActions(Session session) {LiNeBrEaK"
		}, {
			"start_line": 34,
			"end_line": 51,
			"code_lines": "}LiNeBrEaKpublic boolean commitTransaction(Session session) {LiNeBrEaKif (session.abortTransaction) {LiNeBrEaKreturn false;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKint limit = session.rowActionList.size();LiNeBrEaKsession.actionTimestamp         = getNextGlobalChangeTimestamp();LiNeBrEaKsession.transactionEndTimestamp = session.actionTimestamp;LiNeBrEaKendTransaction(session);LiNeBrEaKfor (int i = 0; i < limit; i++) {LiNeBrEaKRowAction action = (RowAction) session.rowActionList.get(i);LiNeBrEaKaction.commit(session);LiNeBrEaK}LiNeBrEaKadjustLobUsage(session);LiNeBrEaKpersistCommit(session);LiNeBrEaK"
		}, {
			"start_line": 51,
			"end_line": 59,
			"code_lines": "endTransactionTPL(session);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaKsession.tempSet.clear();LiNeBrEaKreturn true;LiNeBrEaK}LiNeBrEaKpublic void rollback(Session session) {LiNeBrEaK"
		}, {
			"start_line": 66,
			"end_line": 92,
			"code_lines": "endTransactionTPL(session);LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void rollbackSavepoint(Session session, int index) {LiNeBrEaKlong timestamp = session.sessionContext.savepointTimestamps.get(index);LiNeBrEaKInteger oi = (Integer) session.sessionContext.savepoints.get(index);LiNeBrEaKint     start  = oi.intValue();LiNeBrEaKwhile (session.sessionContext.savepoints.size() > index + 1) {LiNeBrEaKsession.sessionContext.savepoints.remove(LiNeBrEaKsession.sessionContext.savepoints.size() - 1);LiNeBrEaKsession.sessionContext.savepointTimestamps.removeLast();LiNeBrEaK}LiNeBrEaKrollbackPartial(session, start, timestamp);LiNeBrEaK}LiNeBrEaKpublic void rollbackAction(Session session) {LiNeBrEaKrollbackPartial(session, session.actionIndex,LiNeBrEaKsession.actionStartTimestamp);LiNeBrEaKendActionTPL(session);LiNeBrEaK}LiNeBrEaKpublic void rollbackPartial(Session session, int start, long timestamp) {LiNeBrEaKint limit = session.rowActionList.size();LiNeBrEaKif (start == limit) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 108,
			"end_line": 116,
			"code_lines": "}LiNeBrEaKsession.rowActionList.setSize(start);LiNeBrEaK}LiNeBrEaKpublic RowAction addDeleteAction(Session session, Table table,LiNeBrEaKPersistentStore store, Row row,LiNeBrEaKint[] colMap) {LiNeBrEaKRowAction action;LiNeBrEaKsynchronized (row) {LiNeBrEaK"
		}, {
			"start_line": 121,
			"end_line": 133,
			"code_lines": "return action;LiNeBrEaK}LiNeBrEaKpublic void addInsertAction(Session session, Table table,LiNeBrEaKPersistentStore store, Row row,LiNeBrEaKint[] changedColumns) {LiNeBrEaKRowAction action = row.rowAction;LiNeBrEaKif (action == null) {LiNeBrEaKthrow Error.runtimeError(ErrorCode.GENERAL_ERROR,LiNeBrEaK'null insert action ');LiNeBrEaK}LiNeBrEaKstore.indexRow(session, row);LiNeBrEaKsession.rowActionList.add(action);LiNeBrEaK"
		}, {
			"start_line": 153,
			"end_line": 176,
			"code_lines": "}LiNeBrEaK}LiNeBrEaKpublic void beginAction(Session session, Statement cs) {LiNeBrEaKif (session.hasLocks(cs)) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKwriteLock.lock();LiNeBrEaKtry {LiNeBrEaKif (cs.getCompileTimestamp()LiNeBrEaK< database.schemaManager.getSchemaChangeTimestamp()) {LiNeBrEaKcs = session.statementManager.getStatement(session, cs);LiNeBrEaKsession.sessionContext.currentStatement = cs;LiNeBrEaKif (cs == null) {LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKboolean canProceed = setWaitedSessionsTPL(session, cs);LiNeBrEaKif (canProceed) {LiNeBrEaKif (session.tempSet.isEmpty()) {LiNeBrEaKlockTablesTPL(session, cs);LiNeBrEaK} else {LiNeBrEaKsetWaitingSessionTPL(session);LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 175,
			"end_line": 182,
			"code_lines": "}LiNeBrEaK}LiNeBrEaK} finally {LiNeBrEaKwriteLock.unlock();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void beginActionResume(Session session) {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TableBase.java|",
		"loc": "348",
		"clones": [{
			"start_line": 0,
			"end_line": 7,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.index.Index;LiNeBrEaKimport org.hsqldb.lib.ArrayUtil;LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/RangeVariableResolver.java|",
		"loc": "1100",
		"clones": [{
			"start_line": 112,
			"end_line": 119,
			"code_lines": "&& range != null) {LiNeBrEaKint index = rangeVarSet.getIndex(range);LiNeBrEaKif (index > 0) {LiNeBrEaKrangeVariables[index].isLeftJoin      = false;LiNeBrEaKrangeVariables[index - 1].isRightJoin = false;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 298,
			"end_line": 307,
			"code_lines": "if (idx < 0) {LiNeBrEaKe.isSingleColumnEqual     = true;LiNeBrEaKe.isSingleColumnCondition = true;LiNeBrEaKtempMap.put(e.getRightNode().getColumn(), e.getLeftNode());LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (idx >= firstOuterJoinIndex) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 724,
			"end_line": 730,
			"code_lines": "continue;LiNeBrEaK}LiNeBrEaKint colIndex = e.getLeftNode().getColumnIndex();LiNeBrEaKcolIndexSetEqual.add(colIndex);LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 732,
			"end_line": 738,
			"code_lines": "!= conditions.rangeVar) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaKif (conditions.rangeVar.isLeftJoin) {LiNeBrEaKcontinue;LiNeBrEaK}LiNeBrEaK"
		}, {
			"start_line": 1019,
			"end_line": 1026,
			"code_lines": "break;LiNeBrEaK}LiNeBrEaKcase OpTypes.SMALLER :LiNeBrEaKcase OpTypes.SMALLER_EQUAL :LiNeBrEaKcase OpTypes.GREATER :LiNeBrEaKcase OpTypes.GREATER_EQUAL :LiNeBrEaKcase OpTypes.GREATER_EQUAL_PRE : {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/src/org/hsqldb/TriggerDef.java|",
		"loc": "417",
		"clones": [{
			"start_line": 0,
			"end_line": 6,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKimport org.hsqldb.HsqlNameManager.HsqlName;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.lib.HsqlDeque;LiNeBrEaK"
		}, {
			"start_line": 106,
			"end_line": 127,
			"code_lines": "}LiNeBrEaKpublic HsqlName getName() {LiNeBrEaKreturn name;LiNeBrEaK}LiNeBrEaKpublic HsqlName getCatalogName() {LiNeBrEaKreturn name.schema.schema;LiNeBrEaK}LiNeBrEaKpublic HsqlName getSchemaName() {LiNeBrEaKreturn name.schema;LiNeBrEaK}LiNeBrEaKpublic Grantee getOwner() {LiNeBrEaKreturn name.schema.owner;LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getReferences() {LiNeBrEaKreturn new OrderedHashSet();LiNeBrEaK}LiNeBrEaKpublic OrderedHashSet getComponents() {LiNeBrEaKreturn null;LiNeBrEaK}LiNeBrEaKpublic void compile(Session session, SchemaObject parentObject) {}LiNeBrEaKpublic String getSQL() {LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/test/TestBase.java|",
		"loc": "101",
		"clones": [{
			"start_line": 0,
			"end_line": 101,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.test;LiNeBrEaKimport java.lang.reflect.Constructor;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport org.hsqldb.server.Server;LiNeBrEaKimport org.hsqldb.server.WebServer;LiNeBrEaKimport junit.framework.TestCase;LiNeBrEaKimport junit.framework.TestResult;LiNeBrEaKpublic abstract class TestBase extends TestCase {LiNeBrEaKString  dbPath = 'mem:test;sql.enforce_strict_size=true';LiNeBrEaKString  serverProps;LiNeBrEaKString  url;LiNeBrEaKString  user     = 'sa';LiNeBrEaKString  password = '';LiNeBrEaKServer  server;LiNeBrEaKboolean isNetwork = true;LiNeBrEaKboolean isHTTP    = false;LiNeBrEaKboolean isServlet = false;LiNeBrEaKpublic TestBase(String name) {LiNeBrEaKsuper(name);LiNeBrEaK}LiNeBrEaKpublic TestBase(String name, String url, boolean isNetwork,LiNeBrEaKboolean isHTTP) {LiNeBrEaKsuper(name);LiNeBrEaKthis.isNetwork = isNetwork;LiNeBrEaKthis.url       = url;LiNeBrEaKthis.isHTTP    = isHTTP;LiNeBrEaK}LiNeBrEaKprotected void setUp() {LiNeBrEaKif (isNetwork) {LiNeBrEaKif (url == null) {LiNeBrEaKif (isServlet) {LiNeBrEaKurl = 'jdbc:hsqldb:http:LiNeBrEaK} else if (isHTTP) {LiNeBrEaKurl = 'jdbc:hsqldb:http:LiNeBrEaK} else {LiNeBrEaKurl = 'jdbc:hsqldb:hsql:LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (!isServlet) {LiNeBrEaKserver = isHTTP ? new WebServer()LiNeBrEaK: new Server();LiNeBrEaKif (isHTTP) {LiNeBrEaKserver.setPort(8085);LiNeBrEaK}LiNeBrEaKserver.setDatabaseName(0, 'test');LiNeBrEaKserver.setDatabasePath(0, dbPath);LiNeBrEaKserver.setLogWriter(null);LiNeBrEaKserver.setErrWriter(null);LiNeBrEaKserver.start();LiNeBrEaK}LiNeBrEaK} else {LiNeBrEaKif (url == null) {LiNeBrEaKurl = 'jdbc:hsqldb:' + dbPath;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKClass.forName('org.hsqldb.jdbc.JDBCDriver');LiNeBrEaK} catch (Exception e) {LiNeBrEaKe.printStackTrace();LiNeBrEaKSystem.out.println(this + '.setUp() error: ' + e.getMessage());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprotected void tearDown() {LiNeBrEaKif (isNetwork && !isServlet) {LiNeBrEaKserver.stop();LiNeBrEaKserver = null;LiNeBrEaK}LiNeBrEaK}LiNeBrEaKConnection newConnection() throws SQLException {LiNeBrEaKreturn DriverManager.getConnection(url, user, password);LiNeBrEaK}LiNeBrEaKpublic static void runWithResult(Class testCaseClass, String testName) {LiNeBrEaKtry {LiNeBrEaKConstructor ctor = testCaseClass.getConstructor(new Class[]{LiNeBrEaKString.class });LiNeBrEaKTestBase theTest = (TestBase) ctor.newInstance(new Object[]{LiNeBrEaKtestName });LiNeBrEaKtheTest.runWithResult();LiNeBrEaK} catch (Exception ex) {LiNeBrEaKSystem.err.println('couldn't execute test:');LiNeBrEaKex.printStackTrace(System.err);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void runWithResult() {LiNeBrEaKTestResult result   = run();LiNeBrEaKString     testName = this.getClass().getName();LiNeBrEaKif (testName.startsWith('org.hsqldb.test.')) {LiNeBrEaKtestName = testName.substring(16);LiNeBrEaK}LiNeBrEaKtestName += '.' + getName();LiNeBrEaKint failureCount = result.failureCount();LiNeBrEaKSystem.out.println(testName + ' failure count: ' + failureCount);LiNeBrEaKjava.util.Enumeration failures = result.failures();LiNeBrEaKwhile (failures.hasMoreElements()) {LiNeBrEaKSystem.err.println(failures.nextElement());LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/server/WebServer.java|",
		"loc": "75",
		"clones": [{
			"start_line": 0,
			"end_line": 75,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.server;LiNeBrEaKimport org.hsqldb.lib.FileUtil;LiNeBrEaKimport org.hsqldb.persist.HsqlProperties;LiNeBrEaKimport org.hsqldb.resources.ResourceBundleHandler;LiNeBrEaKpublic class WebServer extends Server {LiNeBrEaKstatic int webBundleHandle =LiNeBrEaKResourceBundleHandler.getBundleHandle('webserver-pages', null);LiNeBrEaKpublic WebServer() {LiNeBrEaKsuper(ServerConstants.SC_PROTOCOL_HTTP);LiNeBrEaK}LiNeBrEaKpublic static void main(String[] args) {LiNeBrEaKHsqlProperties argProps = null;LiNeBrEaKargProps = HsqlProperties.argArrayToProps(args,LiNeBrEaKServerProperties.sc_key_prefix);LiNeBrEaKString[] errors = argProps.getErrorKeys();LiNeBrEaKif (errors.length != 0) {LiNeBrEaKSystem.out.println('no value for argument:' + errors[0]);LiNeBrEaKprintHelp('webserver.help');LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKString propsPath = argProps.getProperty(ServerProperties.sc_key_props);LiNeBrEaKString propsExtension = '';LiNeBrEaKif (propsPath == null) {LiNeBrEaKpropsPath      = 'webserver';LiNeBrEaKpropsExtension = '.properties';LiNeBrEaK}LiNeBrEaKpropsPath = FileUtil.getFileUtil().canonicalOrAbsolutePath(propsPath);LiNeBrEaKServerProperties fileProps = ServerConfiguration.getPropertiesFromFile(LiNeBrEaKServerConstants.SC_PROTOCOL_HTTP, propsPath, propsExtension);LiNeBrEaKServerProperties props =LiNeBrEaKfileProps == nullLiNeBrEaK? new ServerProperties(ServerConstants.SC_PROTOCOL_HTTP)LiNeBrEaK: fileProps;LiNeBrEaKprops.addProperties(argProps);LiNeBrEaKServerConfiguration.translateDefaultDatabaseProperty(props);LiNeBrEaKServerConfiguration.translateDefaultNoSystemExitProperty(props);LiNeBrEaKServerConfiguration.translateAddressProperty(props);LiNeBrEaKServer server = new WebServer();LiNeBrEaKtry {LiNeBrEaKserver.setProperties(props);LiNeBrEaK} catch (Exception e) {LiNeBrEaKserver.printError('Failed to set properties');LiNeBrEaKserver.printStackTrace(e);LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKserver.print('Startup sequence initiated from main() method');LiNeBrEaKif (fileProps != null) {LiNeBrEaKserver.print('Loaded properties from [' + propsPathLiNeBrEaK+ '.properties]');LiNeBrEaK} else {LiNeBrEaKserver.print('Could not load properties from file');LiNeBrEaKserver.print('Using cli/default properties only');LiNeBrEaK}LiNeBrEaKserver.start();LiNeBrEaK}LiNeBrEaKpublic String getDefaultWebPage() {LiNeBrEaKreturn serverProperties.getProperty(LiNeBrEaKServerProperties.sc_key_web_default_page);LiNeBrEaK}LiNeBrEaKpublic String getHelpString() {LiNeBrEaKreturn ResourceBundleHandler.getString(serverBundleHandle,LiNeBrEaK'webserver.help');LiNeBrEaK}LiNeBrEaKpublic String getProductName() {LiNeBrEaKreturn 'HSQLDB web server';LiNeBrEaK}LiNeBrEaKpublic String getProtocol() {LiNeBrEaKreturn isTls() ? 'HTTPS'LiNeBrEaK: 'HTTP';LiNeBrEaK}LiNeBrEaKpublic String getWebRoot() {LiNeBrEaKreturn serverProperties.getProperty(ServerProperties.sc_key_web_root);LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/server/Servlet.java|",
		"loc": "166",
		"clones": [{
			"start_line": 0,
			"end_line": 166,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.server;LiNeBrEaKimport java.io.DataInputStream;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport java.io.PrintWriter;LiNeBrEaKimport javax.servlet.ServletConfig;LiNeBrEaKimport javax.servlet.ServletException;LiNeBrEaKimport javax.servlet.http.HttpServletRequest;LiNeBrEaKimport javax.servlet.http.HttpServletResponse;LiNeBrEaKimport org.hsqldb.DatabaseManager;LiNeBrEaKimport org.hsqldb.DatabaseURL;LiNeBrEaKimport org.hsqldb.HsqlException;LiNeBrEaKimport org.hsqldb.Session;LiNeBrEaKimport org.hsqldb.lib.DataOutputStream;LiNeBrEaKimport org.hsqldb.lib.HsqlByteArrayOutputStream;LiNeBrEaKimport org.hsqldb.persist.HsqlProperties;LiNeBrEaKimport org.hsqldb.result.Result;LiNeBrEaKimport org.hsqldb.result.ResultConstants;LiNeBrEaKimport org.hsqldb.rowio.RowInputBinary;LiNeBrEaKimport org.hsqldb.rowio.RowOutputBinary;LiNeBrEaKpublic class Servlet extends javax.servlet.http.HttpServlet {LiNeBrEaKprivate static final int BUFFER_SIZE = 256;LiNeBrEaKprivate String           dbType;LiNeBrEaKprivate String           dbPath;LiNeBrEaKprivate String           errorStr;LiNeBrEaKprivate RowOutputBinary  rowOut;LiNeBrEaKprivate RowInputBinary   rowIn;LiNeBrEaKprivate int              iQueries;LiNeBrEaKpublic void init(ServletConfig config) {LiNeBrEaKtry {LiNeBrEaKsuper.init(config);LiNeBrEaKrowOut = new RowOutputBinary(BUFFER_SIZE, 1);LiNeBrEaKrowIn  = new RowInputBinary(rowOut);LiNeBrEaK} catch (ServletException e) {LiNeBrEaKlog(e.toString());LiNeBrEaK}LiNeBrEaKString dbStr = getInitParameter('hsqldb.server.database');LiNeBrEaKif (dbStr == null) {LiNeBrEaKdbStr = '.';LiNeBrEaK}LiNeBrEaKString useWebInfStr =LiNeBrEaKgetInitParameter('hsqldb.server.use_web-inf_path');LiNeBrEaKif (!dbStr.equals('.') && 'true'.equalsIgnoreCase(useWebInfStr)) {LiNeBrEaKdbStr = getServletContext().getRealPath('/') + 'WEB-INF/' + dbStr;LiNeBrEaK}LiNeBrEaKHsqlProperties dbURL = DatabaseURL.parseURL(dbStr, false, false);LiNeBrEaKlog('Database filename = ' + dbStr);LiNeBrEaKif (dbURL == null) {LiNeBrEaKerrorStr = 'Bad Database name';LiNeBrEaK} else {LiNeBrEaKdbPath = dbURL.getProperty('database');LiNeBrEaKdbType = dbURL.getProperty('connection_type');LiNeBrEaKtry {LiNeBrEaKDatabaseManager.getDatabase(dbType, dbPath, dbURL);LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKerrorStr = e.getMessage();LiNeBrEaK}LiNeBrEaK}LiNeBrEaKif (errorStr == null) {LiNeBrEaKlog('Initialization completed.');LiNeBrEaK} else {LiNeBrEaKlog('Database could not be initialised.');LiNeBrEaKlog(errorStr);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprivate static long lModified = 0;LiNeBrEaKprotected long getLastModified(HttpServletRequest req) {LiNeBrEaKreturn lModified++;LiNeBrEaK}LiNeBrEaKpublic void doGet(HttpServletRequest request,LiNeBrEaKHttpServletResponse response)LiNeBrEaKthrows IOException, ServletException {LiNeBrEaKString query = request.getQueryString();LiNeBrEaKif ((query == null) || (query.length() == 0)) {LiNeBrEaKresponse.setContentType('text/html');LiNeBrEaKresponse.setHeader('Pragma', 'no-cache');LiNeBrEaKPrintWriter out = response.getWriter();LiNeBrEaKout.println(LiNeBrEaK'<html><head><title>HSQL Database Engine Servlet</title>');LiNeBrEaKout.println('</head><body><h1>HSQL Database Engine Servlet</h1>');LiNeBrEaKout.println('The servlet is running.<p>');LiNeBrEaKif (errorStr == null) {LiNeBrEaKout.println('The database is also running.<p>');LiNeBrEaKout.println('Database name: ' + dbType + dbPath + '<p>');LiNeBrEaKout.println('Queries processed: ' + iQueries + '<p>');LiNeBrEaK} else {LiNeBrEaKout.println('<h2>The database is not running!</h2>');LiNeBrEaKout.println('The error message is:<p>');LiNeBrEaKout.println(errorStr);LiNeBrEaK}LiNeBrEaKout.println('</body></html>');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic void doPost(HttpServletRequest request,LiNeBrEaKHttpServletResponse response)LiNeBrEaKthrows IOException, ServletException {LiNeBrEaKsynchronized (this) {LiNeBrEaKDataInputStream  inStream = null;LiNeBrEaKDataOutputStream dataOut  = null;LiNeBrEaKtry {LiNeBrEaKinStream = new DataInputStream(request.getInputStream());LiNeBrEaKint  databaseID = inStream.readInt();LiNeBrEaKlong sessionID  = inStream.readLong();LiNeBrEaKint  mode       = inStream.readByte();LiNeBrEaKSession session = DatabaseManager.getSession(databaseID,LiNeBrEaKsessionID);LiNeBrEaKResult resultIn = Result.newResult(session, mode, inStream,LiNeBrEaKrowIn);LiNeBrEaKresultIn.setDatabaseId(databaseID);LiNeBrEaKresultIn.setSessionId(sessionID);LiNeBrEaKResult resultOut;LiNeBrEaKint    type = resultIn.getType();LiNeBrEaKif (type == ResultConstants.CONNECT) {LiNeBrEaKtry {LiNeBrEaKsession = DatabaseManager.newSession(LiNeBrEaKdbType, dbPath, resultIn.getMainString(),LiNeBrEaKresultIn.getSubString(), new HsqlProperties(),LiNeBrEaKresultIn.getZoneString(),LiNeBrEaKresultIn.getUpdateCount());LiNeBrEaKresultIn.readAdditionalResults(null, inStream, rowIn);LiNeBrEaKresultOut = Result.newConnectionAcknowledgeResponse(LiNeBrEaKsession.getDatabase(), session.getId(),LiNeBrEaKsession.getDatabase().getDatabaseID());LiNeBrEaK} catch (HsqlException e) {LiNeBrEaKresultOut = Result.newErrorResult(e);LiNeBrEaK}LiNeBrEaK} else if (type == ResultConstants.DISCONNECTLiNeBrEaK|| type == ResultConstants.RESETSESSION) {LiNeBrEaKresponse.setHeader('Cache-Control', 'no-cache');LiNeBrEaKresponse.setContentType('application/octet-stream');LiNeBrEaKresponse.setContentLength(6);LiNeBrEaKdataOut = new DataOutputStream(response.getOutputStream());LiNeBrEaKdataOut.writeByte(ResultConstants.DISCONNECT);LiNeBrEaKdataOut.writeInt(4);LiNeBrEaKdataOut.writeByte(ResultConstants.NONE);LiNeBrEaKdataOut.close();LiNeBrEaKreturn;LiNeBrEaK} else {LiNeBrEaKint  dbId      = resultIn.getDatabaseId();LiNeBrEaKlong sessionId = resultIn.getSessionId();LiNeBrEaKsession = DatabaseManager.getSession(dbId, sessionId);LiNeBrEaKresultIn.readLobResults(session, inStream, rowIn);LiNeBrEaKresultOut = session.execute(resultIn);LiNeBrEaK}LiNeBrEaKHsqlByteArrayOutputStream memStream =LiNeBrEaKnew HsqlByteArrayOutputStream();LiNeBrEaKDataOutputStream tempOutput = new DataOutputStream(memStream);LiNeBrEaKresultOut.write(session, tempOutput, rowOut);LiNeBrEaKresponse.setHeader('Cache-Control', 'no-cache');LiNeBrEaKresponse.setContentType('application/octet-stream');LiNeBrEaKresponse.setContentLength(memStream.size());LiNeBrEaKdataOut = new DataOutputStream(response.getOutputStream());LiNeBrEaKmemStream.writeTo(dataOut);LiNeBrEaKiQueries++;LiNeBrEaK} catch (HsqlException e) {}LiNeBrEaKfinally {LiNeBrEaKif (dataOut != null) {LiNeBrEaKdataOut.close();LiNeBrEaK}LiNeBrEaKif (inStream != null) {LiNeBrEaKinStream.close();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/sample/Testdb.java|",
		"loc": "81",
		"clones": [{
			"start_line": 0,
			"end_line": 81,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.sample;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKpublic class Testdb {LiNeBrEaKConnection conn;LiNeBrEaKpublic Testdb(String db_file_name_prefix) throws Exception {LiNeBrEaKClass.forName('org.hsqldb.jdbc.JDBCDriver');LiNeBrEaKconn = DriverManager.getConnection('jdbc:hsqldb:'LiNeBrEaK+ db_file_name_prefix,LiNeBrEaK'SA',LiNeBrEaK'');LiNeBrEaK}LiNeBrEaKpublic void shutdown() throws SQLException {LiNeBrEaKStatement st = conn.createStatement();LiNeBrEaKst.execute('SHUTDOWN');LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKpublic synchronized void query(String expression) throws SQLException {LiNeBrEaKStatement st = null;LiNeBrEaKResultSet rs = null;LiNeBrEaKst = conn.createStatement();LiNeBrEaKrs = st.executeQuery(expression);LiNeBrEaKdump(rs);LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaKpublic synchronized void update(String expression) throws SQLException {LiNeBrEaKStatement st = null;LiNeBrEaKst = conn.createStatement();LiNeBrEaKint i = st.executeUpdate(expression);LiNeBrEaKif (i == -1) {LiNeBrEaKSystem.out.println('db error : ' + expression);LiNeBrEaK}LiNeBrEaKst.close();LiNeBrEaK}LiNeBrEaKpublic static void dump(ResultSet rs) throws SQLException {LiNeBrEaKResultSetMetaData meta   = rs.getMetaData();LiNeBrEaKint               colmax = meta.getColumnCount();LiNeBrEaKint               i;LiNeBrEaKObject            o = null;LiNeBrEaKfor (; rs.next(); ) {LiNeBrEaKfor (i = 0; i < colmax; ++i) {LiNeBrEaKo = rs.getObject(i + 1);LiNeBrEaKSystem.out.print(o.toString() + ' ');LiNeBrEaK}LiNeBrEaKSystem.out.println(' ');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static void main(String[] args) {LiNeBrEaKTestdb db = null;LiNeBrEaKtry {LiNeBrEaKdb = new Testdb('db_file');LiNeBrEaK} catch (Exception ex1) {LiNeBrEaKex1.printStackTrace();LiNeBrEaKreturn;LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKdb.update(LiNeBrEaK'CREATE TABLE sample_table ( id INTEGER IDENTITY, str_col VARCHAR(256), num_col INTEGER)');LiNeBrEaK} catch (SQLException ex2) {LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('Ford', 100)');LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('Toyota', 200)');LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('Honda', 300)');LiNeBrEaKdb.update(LiNeBrEaK'INSERT INTO sample_table(str_col,num_col) VALUES('GM', 400)');LiNeBrEaKdb.query('SELECT * FROM sample_table WHERE num_col < 250');LiNeBrEaKdb.shutdown();LiNeBrEaK} catch (SQLException ex3) {LiNeBrEaKex3.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/sample/SqlFileEmbedder.java|",
		"loc": "61",
		"clones": [{
			"start_line": 0,
			"end_line": 61,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.sample;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport org.hsqldb.lib.RCData;LiNeBrEaKimport org.hsqldb.cmdline.SqlFile;LiNeBrEaKimport org.hsqldb.cmdline.SqlToolError;LiNeBrEaKimport java.io.File;LiNeBrEaKimport java.io.IOException;LiNeBrEaKimport java.util.HashMap;LiNeBrEaKimport java.util.Map;LiNeBrEaKpublic class SqlFileEmbedder {LiNeBrEaKprivate Connection conn;LiNeBrEaKpublic Connection getConn() {LiNeBrEaKreturn conn;LiNeBrEaK}LiNeBrEaKpublic static void main(String[] sa) throws Exception {LiNeBrEaKif (sa.length < 3) {LiNeBrEaKSystem.err.println('SYNTAX:  ' + SqlFileEmbedder.class.getName()LiNeBrEaK+ ' path/ro/file.rc URLID file1.sql...');LiNeBrEaKSystem.exit(2);LiNeBrEaK}LiNeBrEaKSqlFileEmbedder embedder =LiNeBrEaKnew SqlFileEmbedder(new File(sa[0]), sa[1]);LiNeBrEaKString[] files = new String[sa.length - 2];LiNeBrEaKfor (int i = 0; i < sa.length - 2; i++) {LiNeBrEaKfiles[i] = sa[i + 2];LiNeBrEaK}LiNeBrEaKtry {LiNeBrEaKembedder.executeFiles(files);LiNeBrEaK} finally {LiNeBrEaKtry {LiNeBrEaKembedder.getConn().close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic SqlFileEmbedder(File rcFile, String urlid) throws Exception {LiNeBrEaKconn = (new RCData(rcFile, urlid)).getConnection();LiNeBrEaKconn.setAutoCommit(false);LiNeBrEaK}LiNeBrEaKpublic void executeFiles(String[] fileStrings)LiNeBrEaKthrows IOException, SqlToolError, SQLException {LiNeBrEaKMap<String, String> sqlVarMap = new HashMap<String, String>();LiNeBrEaKsqlVarMap.put('invoker', getClass().getName());LiNeBrEaKFile file;LiNeBrEaKSqlFile sqlFile;LiNeBrEaKfor (String fileString : fileStrings) {LiNeBrEaKfile = new File(fileString);LiNeBrEaKif (!file.isFile())LiNeBrEaKthrow new IOException('SQL file not present: 'LiNeBrEaK+ file.getAbsolutePath());LiNeBrEaKsqlFile = new SqlFile(file);LiNeBrEaKsqlFile.setConnection(conn);LiNeBrEaKsqlFile.addUserVars(sqlVarMap);LiNeBrEaKsqlFile.execute();LiNeBrEaKconn = sqlFile.getConnection();LiNeBrEaKsqlVarMap = sqlFile.getUserVars();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/sample/TriggerSample.java|",
		"loc": "285",
		"clones": [{
			"start_line": 0,
			"end_line": 285,
			"code_lines": "LiNeBrEaKpackage org.hsqldb.sample;LiNeBrEaKimport java.io.PrintWriter;LiNeBrEaKimport java.sql.Connection;LiNeBrEaKimport java.sql.DriverManager;LiNeBrEaKimport java.sql.PreparedStatement;LiNeBrEaKimport java.sql.ResultSet;LiNeBrEaKimport java.sql.ResultSetMetaData;LiNeBrEaKimport java.sql.SQLException;LiNeBrEaKimport java.sql.Statement;LiNeBrEaKimport org.hsqldb.error.Error;LiNeBrEaKimport org.hsqldb.error.ErrorCode;LiNeBrEaKimport org.hsqldb.Trigger;LiNeBrEaKimport org.hsqldb.lib.StringUtil;LiNeBrEaKpublic class TriggerSample implements Trigger {LiNeBrEaKstatic final PrintWriter out  = new PrintWriter(System.out);LiNeBrEaKstatic final String      drv  = 'org.hsqldb.jdbc.JDBCDriver';LiNeBrEaKstatic final String      url  = 'jdbc:hsqldb:mem:trigger-sample';LiNeBrEaKstatic final String      usr  = 'SA';LiNeBrEaKstatic final String      pwd  = '';LiNeBrEaKstatic final String      impl = TriggerSample.class.getName();LiNeBrEaKstatic final String      tn   = 'trig_test';LiNeBrEaKstatic final String drop_test_table_stmt = 'DROP TABLE ' + tnLiNeBrEaK+ ' IF EXISTS';LiNeBrEaKstatic final String create_test_table_stmt = 'CREATE TABLE ' + tnLiNeBrEaK+ '(id INTEGER PRIMARY KEY, value VARCHAR(20))';LiNeBrEaKstatic final String drop_audit_table_stmt = 'DROP TABLE audit IF EXISTS';LiNeBrEaKstatic final String create_audit_table_stmt = 'CREATE TABLE audit('LiNeBrEaK+ 'id  INTEGER GENERATED BY DEFAULT AS IDENTITY(START WITH 1), 'LiNeBrEaK+ 'op  VARCHAR(6), ' + 'tn  VARCHAR(20), ' + 'ors LONGVARCHAR, 'LiNeBrEaK+ 'nrs LONGVARCHAR, ' + 'ts  TIMESTAMP DEFAULT CURRENT_TIMESTAMP)';LiNeBrEaKstatic final String audit_insert_stmt =LiNeBrEaK'INSERT INTO audit(op, tn, ors, nrs) VALUES(?, ?, ?, ?)';LiNeBrEaKpublic void fire(int typ, String trn, String tn, Object[] or,LiNeBrEaKObject[] nr) {LiNeBrEaKsynchronized (TriggerSample.class) {LiNeBrEaKString ors = or == null ? 'null'LiNeBrEaK: StringUtil.arrayToString(or);LiNeBrEaKString nrs = nr == null ? 'null'LiNeBrEaK: StringUtil.arrayToString(nr);LiNeBrEaKout.println('----------------------------------------');LiNeBrEaKout.println(getTriggerDescriptor(trn, typ, tn));LiNeBrEaKout.println('old row : ' + ors);LiNeBrEaKout.println('new row : ' + nrs);LiNeBrEaKout.flush();LiNeBrEaKif ('TRIG_TEST'.equals(tn)) {LiNeBrEaKswitch (typ) {LiNeBrEaKcase INSERT_BEFORE_ROW : {LiNeBrEaKfinal int ID = ((Number) nr[0]).intValue();LiNeBrEaKdoAssert(ID < 11, 'ID < 11');LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaKcase UPDATE_BEFORE_ROW : {LiNeBrEaKif ('unchangable'.equals(or[1])) {LiNeBrEaKnr[1] = or[1];LiNeBrEaK}LiNeBrEaKbreak;LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKdoAuditStep(typ, tn, ors, nrs);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprivate static void doAssert(boolean b, String msg) {LiNeBrEaKif (b) {LiNeBrEaK} else {LiNeBrEaKthrow Error.error(ErrorCode.GENERAL_ERROR, msg);LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprivate static void doAuditStep(int typ, String tn, String ors,LiNeBrEaKString nrs) {LiNeBrEaKConnection        conn;LiNeBrEaKPreparedStatement stmt;LiNeBrEaKswitch (typ) {LiNeBrEaKcase INSERT_AFTER_ROW :LiNeBrEaKcase UPDATE_AFTER_ROW :LiNeBrEaKcase DELETE_AFTER_ROW : {LiNeBrEaKtry {LiNeBrEaKconn = getConnection();LiNeBrEaKstmt = conn.prepareStatement(audit_insert_stmt);LiNeBrEaKstmt.setString(1, getOperationSpec(typ));LiNeBrEaKstmt.setString(2, tn);LiNeBrEaKstmt.setString(3, ors);LiNeBrEaKstmt.setString(4, nrs);LiNeBrEaKstmt.executeUpdate();LiNeBrEaKconn.close();LiNeBrEaK} catch (SQLException se) {LiNeBrEaKse.printStackTrace();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static String getWhenSpec(int type) {LiNeBrEaKswitch (type) {LiNeBrEaKcase INSERT_BEFORE_ROW :LiNeBrEaKcase UPDATE_BEFORE_ROW :LiNeBrEaKcase DELETE_BEFORE_ROW : {LiNeBrEaKreturn 'BEFORE';LiNeBrEaK}LiNeBrEaKcase INSERT_AFTER :LiNeBrEaKcase INSERT_AFTER_ROW :LiNeBrEaKcase UPDATE_AFTER :LiNeBrEaKcase UPDATE_AFTER_ROW :LiNeBrEaKcase DELETE_AFTER :LiNeBrEaKcase DELETE_AFTER_ROW : {LiNeBrEaKreturn 'AFTER';LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static String getOperationSpec(int type) {LiNeBrEaKswitch (type) {LiNeBrEaKcase INSERT_AFTER :LiNeBrEaKcase INSERT_AFTER_ROW :LiNeBrEaKcase INSERT_BEFORE_ROW : {LiNeBrEaKreturn 'INSERT';LiNeBrEaK}LiNeBrEaKcase UPDATE_AFTER :LiNeBrEaKcase UPDATE_AFTER_ROW :LiNeBrEaKcase UPDATE_BEFORE_ROW : {LiNeBrEaKreturn 'UPDATE';LiNeBrEaK}LiNeBrEaKcase DELETE_AFTER :LiNeBrEaKcase DELETE_AFTER_ROW :LiNeBrEaKcase DELETE_BEFORE_ROW : {LiNeBrEaKreturn 'DELETE';LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn '';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static String getQueueSpec(int qs) {LiNeBrEaKreturn (qs < 0) ? ''LiNeBrEaK: ('QUEUE ' + qs);LiNeBrEaK}LiNeBrEaKpublic static String getForEachSpec(int type) {LiNeBrEaKswitch (type) {LiNeBrEaKcase INSERT_BEFORE_ROW :LiNeBrEaKcase INSERT_AFTER_ROW :LiNeBrEaKcase UPDATE_BEFORE_ROW :LiNeBrEaKcase UPDATE_AFTER_ROW :LiNeBrEaKcase DELETE_AFTER_ROW :LiNeBrEaKcase DELETE_BEFORE_ROW : {LiNeBrEaKreturn 'FOR EACH ROW';LiNeBrEaK}LiNeBrEaKdefault : {LiNeBrEaKreturn 'FOR EACH STATEMENT';LiNeBrEaK}LiNeBrEaK}LiNeBrEaK}LiNeBrEaKpublic static String getTriggerDDL(String trn, int typ, String tab,LiNeBrEaKint qs,LiNeBrEaKString impl) throws SQLException {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('CREATE TRIGGER ');LiNeBrEaKsb.append(trn);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getWhenSpec(typ));LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getOperationSpec(typ));LiNeBrEaKsb.append(' ON ');LiNeBrEaKsb.append(tab);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getForEachSpec(typ));LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getQueueSpec(qs));LiNeBrEaKsb.append(' CALL '');LiNeBrEaKsb.append(impl);LiNeBrEaKsb.append(''');LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKpublic static String getTriggerDescriptor(String trn, int typ,LiNeBrEaKString tab) {LiNeBrEaKStringBuffer sb = new StringBuffer();LiNeBrEaKsb.append('TRIGGER : ');LiNeBrEaKsb.append(trn);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getWhenSpec(typ));LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getOperationSpec(typ));LiNeBrEaKsb.append(' ON ');LiNeBrEaKsb.append(tab);LiNeBrEaKsb.append(' ');LiNeBrEaKsb.append(getForEachSpec(typ));LiNeBrEaKreturn sb.toString();LiNeBrEaK}LiNeBrEaKprivate static Connection getConnection() throws SQLException {LiNeBrEaKtry {LiNeBrEaKClass.forName(drv).newInstance();LiNeBrEaKreturn DriverManager.getConnection(url, usr, pwd);LiNeBrEaK} catch (SQLException se) {LiNeBrEaKthrow se;LiNeBrEaK} catch (Exception e) {LiNeBrEaKthrow new SQLException(e.toString());LiNeBrEaK}LiNeBrEaK}LiNeBrEaKprivate static void createTrigger(Statement stmt, String trn,LiNeBrEaKint typ) throws SQLException {LiNeBrEaKstmt.execute(getTriggerDDL(trn, typ, tn, 0, impl));LiNeBrEaK}LiNeBrEaKprivate static void setup() throws SQLException {LiNeBrEaKConnection conn = getConnection();LiNeBrEaKStatement  stmt = conn.createStatement();LiNeBrEaKstmt.execute(drop_test_table_stmt);LiNeBrEaKstmt.execute(create_test_table_stmt);LiNeBrEaKstmt.execute(drop_audit_table_stmt);LiNeBrEaKstmt.execute(create_audit_table_stmt);LiNeBrEaKcreateTrigger(stmt, 'tibr_' + tn, INSERT_BEFORE_ROW);LiNeBrEaKcreateTrigger(stmt, 'tia_' + tn, INSERT_AFTER);LiNeBrEaKcreateTrigger(stmt, 'tiar_' + tn, INSERT_AFTER_ROW);LiNeBrEaKcreateTrigger(stmt, 'tubr_' + tn, UPDATE_BEFORE_ROW);LiNeBrEaKcreateTrigger(stmt, 'tua_' + tn, UPDATE_AFTER);LiNeBrEaKcreateTrigger(stmt, 'tuar_' + tn, UPDATE_AFTER_ROW);LiNeBrEaKcreateTrigger(stmt, 'tdbr_' + tn, DELETE_BEFORE_ROW);LiNeBrEaKcreateTrigger(stmt, 'tda_' + tn, DELETE_AFTER);LiNeBrEaKcreateTrigger(stmt, 'tdar_' + tn, DELETE_AFTER_ROW);LiNeBrEaKstmt.close();LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKprivate static void doSomeWork() throws SQLException {LiNeBrEaKConnection conn = getConnection();LiNeBrEaKStatement  stmt = conn.createStatement();LiNeBrEaKconn.setAutoCommit(false);LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES (1, 'hello')');LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES (2, 'now what?')');LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES (3, 'unchangable')');LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES (4, 'goodbye')');LiNeBrEaKconn.commit();LiNeBrEaKdumpTable('trig_test');LiNeBrEaKstmt.execute('UPDATE trig_test SET value = 'all done'');LiNeBrEaKconn.commit();LiNeBrEaKdumpTable('trig_test');LiNeBrEaKstmt.execute('DELETE FROM trig_test');LiNeBrEaKconn.rollback();LiNeBrEaKdumpTable('trig_test');LiNeBrEaKtry {LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES(11, 'whatever')');LiNeBrEaK} catch (SQLException se) {LiNeBrEaKse.printStackTrace();LiNeBrEaK}LiNeBrEaKstmt.execute('INSERT INTO trig_test VALUES(10, 'whatever')');LiNeBrEaKconn.commit();LiNeBrEaKdumpTable('trig_test');LiNeBrEaKstmt.close();LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKprivate static void dumpTable(String tn) throws SQLException {LiNeBrEaKConnection        conn  = getConnection();LiNeBrEaKStatement         stmt  = conn.createStatement();LiNeBrEaKResultSet         rs    = stmt.executeQuery('select * from ' + tn);LiNeBrEaKResultSetMetaData rsmd  = rs.getMetaData();LiNeBrEaKint               count = rsmd.getColumnCount();LiNeBrEaKout.println();LiNeBrEaKout.println('****************************************');LiNeBrEaKout.println('DUMP FOR TABLE: ' + tn);LiNeBrEaKout.println('****************************************');LiNeBrEaKout.flush();LiNeBrEaKwhile (rs.next()) {LiNeBrEaKout.print('[');LiNeBrEaKfor (int i = 1; i <= count; i++) {LiNeBrEaKout.print(rs.getString(i));LiNeBrEaKif (i < count) {LiNeBrEaKout.print(' : ');LiNeBrEaK}LiNeBrEaK}LiNeBrEaKout.println(']');LiNeBrEaK}LiNeBrEaKout.println();LiNeBrEaKout.flush();LiNeBrEaKrs.close();LiNeBrEaKstmt.close();LiNeBrEaKconn.close();LiNeBrEaK}LiNeBrEaKprivate static void runSample() throws SQLException {LiNeBrEaKsetup();LiNeBrEaKdoSomeWork();LiNeBrEaKdumpTable('audit');LiNeBrEaK}LiNeBrEaKpublic static void main(String[] args) throws SQLException {LiNeBrEaKrunSample();LiNeBrEaK}LiNeBrEaK}LiNeBrEaK"
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/Tokens.java|",
		"loc": "2486",
		"clones": [{
			"start_line": 0,
			"end_line": 2486,
		}]
	}, {
		"file_name": "|project://hsqldb-2.3.1/hsqldb/doc/verbatim/src/org/hsqldb/Trigger.java|",
		"loc": "15",
		"clones": [{
			"start_line": 0,
			"end_line": 15,
			"code_lines": "LiNeBrEaKpackage org.hsqldb;LiNeBrEaKpublic interface Trigger {LiNeBrEaKint INSERT_AFTER      = 0;LiNeBrEaKint DELETE_AFTER      = 1;LiNeBrEaKint UPDATE_AFTER      = 2;LiNeBrEaKint INSERT_AFTER_ROW  = 3;LiNeBrEaKint DELETE_AFTER_ROW  = 4;LiNeBrEaKint UPDATE_AFTER_ROW  = 5;LiNeBrEaKint INSERT_BEFORE_ROW = 6;LiNeBrEaKint DELETE_BEFORE_ROW = 7;LiNeBrEaKint UPDATE_BEFORE_ROW = 8;LiNeBrEaKvoid fire(int type, String trigName, String tabName, Object[] oldRow,LiNeBrEaKObject[] newRow) throws HsqlException;LiNeBrEaK}LiNeBrEaK"
		}]
	}]
}